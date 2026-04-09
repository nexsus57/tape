
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import AIRecommendationCard from './AIRecommendationCard';
import { useCategories } from '../context/CategoryContext';
import { AIIcon } from './icons/AIIcon';
import { Product } from '../types';

interface AITapeFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- UPDATED LOCAL INTELLIGENCE (FALLBACK) ---
const INTENT_RULES = [
  {
    id: 'packaging-sealing',
    keywords: ['packaging', 'bopp', 'box', 'carton', 'sealing', 'shipping', 'dispatch', 'packing', 'courier'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        const c = p.category.toLowerCase();
        
        if (c.includes('packaging') || c.includes('bopp')) score += 500;
        if (n.includes('bopp')) score += 200;
        if (n.includes('brown') || n.includes('transparent')) score += 100;

        // HEAVILY PENALIZE non-packaging items
        if (!c.includes('packaging') && !c.includes('bopp')) score -= 1000;
        
        return score;
    },
    reasoning: "For sealing cartons and boxes, BOPP Packaging Tape provides the necessary adhesion and durability."
  },
  {
    id: 'reflective-visibility',
    keywords: ['reflective', 'reflect', 'visibility', 'night', 'glow', 'safety jacket', 'vehicle marking', 'radium', 'shine'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        const c = p.category.toLowerCase();
        
        // Boost Actual Reflective Items
        if (c.includes('reflective')) score += 200;
        if (n.includes('reflective')) score += 150;
        if (n.includes('silver tc')) score += 100;
        if (n.includes('glow') && query.includes('glow')) score += 100;

        // HEAVILY PENALIZE non-reflective items to prevent VHB appearance
        if (n.includes('vhb') || n.includes('double') || n.includes('foam')) score -= 500;
        
        return score;
    },
    reasoning: "For high visibility and safety, only Retro-Reflective tapes (Microprismatic or Glass Bead technology) are suitable."
  },
  {
    id: 'emi-shielding',
    keywords: ['emi', 'shield', 'interference', 'signal', 'conductive', 'grounding', 'rfi', 'faraday'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('copper')) score += 100;
        if (n.includes('emi')) score += 80;
        if (n.includes('conductive')) score += 50;
        // Aluminium logic
        if (n.includes('aluminium') || n.includes('aluminum')) {
            if (query.includes('hvac') || query.includes('duct')) score += 50;
            else score -= 20; 
        }
        return score;
    },
    reasoning: "For effective EMI/RFI shielding, Copper Foil Tape with conductive adhesive creates the required Faraday cage."
  },
  {
    id: 'high-temp-masking',
    keywords: ['powder coat', 'baking', 'oven', '200', '250', 'curing', 'anodizing', 'paint shop', 'heat'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('green') && n.includes('polyester')) score += 100;
        if (n.includes('kapton') || n.includes('polyimide')) score += 90;
        if (n.includes('glass cloth')) score += 70;
        if (n.includes('bopp') || n.includes('duct')) score -= 100;
        return score;
    },
    reasoning: "Green Polyester or Polyimide tapes with Silicone adhesive are required to prevent residue at high curing temperatures."
  },
  {
    id: 'industrial-strength',
    keywords: ['strong', 'durable', 'heavy duty', 'tough', 'permanent', 'bond', 'break', 'strength', 'industrial'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('filament')) score += 100;
        if (n.includes('vhb')) score += 100;
        if (n.includes('safety') || n.includes('floor')) score -= 50; // Context dependent
        return score;
    },
    reasoning: "For maximum holding power, industrial-grade VHB (Bonding) or Filament (Bundling) tapes are the strongest options."
  }
];

export default function AITapeFinder({ isOpen, onClose }: AITapeFinderProps) {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ productIds: string[], reasoning: string } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResult(null);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const performFallbackSearch = (searchQuery: string): { productIds: string[], reasoning: string } => {
      const lowerQuery = searchQuery.toLowerCase();
      let bestRuleResult = { rule: null as any, products: [] as any[], totalScore: 0 };

      // --- HARD OVERRIDE FOR PACKAGING ---
      const packagingKeywords = ['packaging', 'bopp', 'box', 'carton', 'sealing', 'shipping', 'dispatch', 'packing', 'courier'];
      const isPackagingQuery = packagingKeywords.some(k => lowerQuery.includes(k));

      if (isPackagingQuery) {
          const packagingProducts = products
              .filter(p => p.category.toLowerCase().includes('packaging') || p.name.toLowerCase().includes('bopp'))
              .slice(0, 6)
              .map(p => p.id);

          if (packagingProducts.length > 0) {
              return {
                  productIds: packagingProducts,
                  reasoning: "For sealing cartons and boxes, BOPP Packaging Tape provides the necessary adhesion and durability."
              };
          }
      }

      // 1. Try Strict Intent Rules
      for (const rule of INTENT_RULES) {
          if (rule.keywords.some(k => lowerQuery.includes(k))) {
              const scoredProducts = products.map(p => ({
                  id: p.id,
                  score: rule.score(p, lowerQuery)
              }));

              const topProducts = scoredProducts
                  .filter(sp => sp.score > 0)
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 6);

              const totalScore = topProducts.reduce((sum, p) => sum + p.score, 0);

              if (totalScore > bestRuleResult.totalScore) {
                  bestRuleResult = {
                      rule: rule,
                      products: topProducts.map(p => p.id),
                      totalScore: totalScore
                  };
              }
          }
      }

      if (bestRuleResult.rule && bestRuleResult.products.length > 0) {
          return {
              productIds: bestRuleResult.products,
              reasoning: bestRuleResult.rule.reasoning
          };
      }

      // 2. Generic Keyword Fallback
      const words = lowerQuery.split(' ').filter(w => w.length > 2);
      const fallbackMatches = products.map(p => {
          let score = 0;
          const n = p.name.toLowerCase();
          const c = p.category.toLowerCase();
          words.forEach(w => { 
              if (n.includes(w)) score += 10; 
              if (c.includes(w)) score += 5;
          });
          return { id: p.id, score };
      })
      .filter(sp => sp.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(sp => sp.id);

      if (fallbackMatches.length > 0) {
          return {
              productIds: fallbackMatches,
              reasoning: "These products match the keywords in your request."
          };
      }

      return {
          productIds: [],
          reasoning: "We couldn't find a precise match. Please try describing the application (e.g., 'high heat', 'packaging')."
      };
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResult(null);

    try {
      const inventory = products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        description: p.shortDescription,
        tags: p.tags
      }));

      // Call our secure Cloudflare Pages Function
      const response = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, inventory })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.productIds && data.productIds.length > 0) {
          setResult(data);
      } else {
          throw new Error("AI returned no results");
      }

    } catch (error) {
      console.warn("Switching to Local Intelligence (Fallback).", error);
      setTimeout(() => {
          const fallbackResult = performFallbackSearch(query);
          setResult(fallbackResult);
          setLoading(false);
      }, 500); 
      return; 
    } 
    
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen) return null;

  const recommendedProducts = result?.productIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => !!p) || [];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue-dark to-brand-blue p-6 flex justify-between items-center shrink-0">
          <div className="flex items-center text-white gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
                <AIIcon className="w-6 h-6 text-brand-yellow" />
            </div>
            <div>
                <h2 className="text-xl font-bold leading-none text-white">Tape India AI Expert</h2>
                <p className="text-xs text-blue-100 mt-1">Powered by Gemini 3.0 & Engineering Database</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors text-2xl leading-none">&times;</button>
        </div>

        {/* Search Area */}
        <div className="p-6 border-b border-gray-100 bg-gray-50 shrink-0">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask an engineering question (e.g., 'Tape for high reflective safety jackets')..."
              className="w-full pl-5 pr-14 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all text-lg"
            />
            <button 
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 bg-brand-accent text-white rounded-lg px-4 font-bold hover:bg-brand-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? <i className="fas fa-spinner animate-spin"></i> : <i className="fas fa-arrow-right"></i>}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar relative">
          
          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-10 opacity-60">
               <AIIcon className="w-16 h-16 mb-4 text-gray-300" />
               <p className="text-lg font-medium">Describe your industrial challenge.</p>
               <p className="text-sm">We analyze materials, temperature, and surface energy to find the perfect tape.</p>
            </div>
          )}

          {loading && (
            <div className="space-y-6 animate-pulse flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 mb-6 rounded-full border-4 border-brand-accent border-t-transparent animate-spin"></div>
                <p className="text-brand-blue-dark font-bold text-lg animate-pulse">Analyzing technical requirements...</p>
                <p className="text-sm text-gray-500">Consulting engineering database...</p>
                <div className="h-4 bg-gray-100 rounded w-3/4 max-w-md mt-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full mt-8 opacity-50">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-gray-100 h-48 rounded-xl"></div>
                    ))}
                </div>
            </div>
          )}

          {result && !loading && (
            <div className="animate-slide-down">
                {/* Reasoning Bubble */}
                <div className="flex gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                        <AIIcon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none border border-blue-100 w-full">
                        <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">Expert Recommendation</h4>
                        <p className="text-brand-blue-dark font-medium leading-relaxed">{result.reasoning}</p>
                    </div>
                </div>

                {/* Results Grid - Now using AIRecommendationCard */}
                {recommendedProducts.length > 0 ? (
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recommended Solutions ({recommendedProducts.length})</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                            {recommendedProducts.map((product, index) => (
                                <AIRecommendationCard 
                                    key={product.id} 
                                    product={product} 
                                    categoryName={categoryMap.get(product.category) || ''}
                                    rank={index}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        <p>No exact product matches found for your specific query.</p>
                        <p className="text-sm mt-2">Try broader terms like "Tape" or contact us directly.</p>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
