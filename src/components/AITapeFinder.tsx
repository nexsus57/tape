
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { useCategories } from '../context/CategoryContext';
import { AIIcon } from './icons/AIIcon';
import { Product } from '../types';

interface AITapeFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper to check text matches
const matches = (text: string, terms: string[]) => {
    const lower = text.toLowerCase();
    return terms.some(term => lower.includes(term));
};

// Intent Mapping Rules with Scoring System
// Score > 0 implies relevance. Higher is better.
const INTENT_RULES = [
  {
    id: 'heat',
    keywords: ['heat', 'high temp', 'thermal', 'flame', 'fire', 'burn', 'oven', 'plasma', 'powder coat'],
    score: (p: Product, query: string) => {
        let score = 0;
        const q = query.toLowerCase();
        const n = p.name.toLowerCase();
        
        // 1. Tag Relevance
        if (p.tags?.some(t => ['HEAT RESISTANT', 'HIGH TEMPERATURE'].includes(t))) score += 20;
        
        // 2. Exact Name Matches
        if (matches(n, ['polyimide', 'kapton', 'glass cloth', 'teflon', 'ptfe'])) score += 15;
        
        // 3. Category Context
        if (p.category === 'teflon-ptfe-tapes') score += 10;
        
        // 4. Query Specifics
        if (q.includes('powder') && n.includes('green')) score += 30; // Green polyester for powder coating
        if (q.includes('sealing') && n.includes('sealing')) score += 15;

        return score;
    },
    reasoning: "Based on your need for heat resistance, we recommend our High-Temperature PTFE, Glass Cloth, or Polyimide tapes."
  },
  {
    id: 'safety',
    keywords: ['slip', 'skid', 'floor', 'walkway', 'stair', 'traction', 'hazard', 'warning', 'barrier'],
    score: (p: Product, query: string) => {
        let score = 0;
        const q = query.toLowerCase();
        const n = p.name.toLowerCase();

        if (p.tags?.some(t => ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY', 'SAFETY MARKING'].includes(t))) score += 20;
        if (p.category === 'safety-tapes') score += 10;

        // Specific handling for "Anti Slip" vs "Marking"
        if (q.includes('slip') || q.includes('skid')) {
            if (n.includes('anti-slip') || n.includes('anti-skid')) score += 25;
            else score -= 5; // Demote generic floor marking if user wants anti-slip
        }
        
        if (q.includes('mark') || q.includes('line')) {
            if (n.includes('floor marking') || n.includes('hazard')) score += 25;
        }

        return score;
    },
    reasoning: "For floor safety and traction, our Anti-Skid and Safety Marking tapes are the best choice."
  },
  {
    id: 'emi',
    keywords: ['emi', 'shield', 'interference', 'signal', 'conductive', 'copper', 'static', 'esd', 'grounding'],
    score: (p: Product, query: string) => {
        let score = 0;
        const q = query.toLowerCase();
        const n = p.name.toLowerCase();

        // Base Tag Matches
        if (p.tags?.some(t => ['EMI SHIELDING', 'EMI', 'RFI'].includes(t))) score += 20;
        if (p.tags?.some(t => ['ESD', 'ANTI-STATIC'].includes(t))) score += 10;
        
        // Critical: Conductive logic
        const wantsConductive = q.includes('conductive') || q.includes('shield') || q.includes('copper');
        const isMetal = n.includes('copper') || n.includes('foil') || n.includes('shield');
        const isPlastic = n.includes('polyimide') || n.includes('kapton') || n.includes('polyester');

        if (wantsConductive) {
            if (isMetal) score += 40; // Massive boost for actual conductive tapes
            if (isPlastic) score -= 20; // Penalize plastic tapes for conductive queries
        }

        // Critical: ESD logic
        if (q.includes('static') || q.includes('esd')) {
            if (n.includes('esd') || n.includes('anti-static')) score += 30;
            if (n.includes('copper')) score += 5; // Copper is also good for ESD grounding
        }

        return score;
    },
    reasoning: "For electronics, shielding, or static control, we recommend our EMI Shielding and ESD tapes."
  },
  {
    id: 'waterproof',
    keywords: ['water', 'leak', 'seal', 'pipe', 'plumbing', 'moisture', 'outdoor', 'roof'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        
        if (p.tags?.some(t => ['PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'].includes(t))) score += 20;
        if (n.includes('butyl') || n.includes('silicone') || n.includes('repair')) score += 25;
        
        return score;
    },
    reasoning: "These tapes are specialized for waterproofing, sealing leaks, and protecting pipes."
  },
  {
    id: 'packaging',
    keywords: ['pack', 'box', 'carton', 'ship', 'parcel', 'strap'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        
        if (p.tags?.some(t => ['PACKAGING', 'SEALING'].includes(t))) score += 20;
        if (n.includes('bopp') || n.includes('filament') || n.includes('kraft')) score += 15;
        
        return score;
    },
    reasoning: "For secure packaging and shipping, these are our most reliable adhesive solutions."
  }
];

// Keeping rules for context, but using weighted logic now
const CATEGORY_RULES = `...`; 

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

  const performLocalSearch = (searchQuery: string): { productIds: string[], reasoning: string } | null => {
      const lowerQuery = searchQuery.toLowerCase();
      
      // 1. Identify Intent Rule with highest potential
      // We run all rules and see which one produces the best top scores
      let bestRuleResult = { rule: null as any, products: [] as any[], totalScore: 0 };

      for (const rule of INTENT_RULES) {
          if (rule.keywords.some(k => lowerQuery.includes(k))) {
              // Calculate scores for all products under this rule
              const scoredProducts = products.map(p => ({
                  id: p.id,
                  score: rule.score(p, lowerQuery)
              }));

              // Filter out irrelevant (<=0 score) and sort desc
              const topProducts = scoredProducts
                  .filter(sp => sp.score > 0)
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 6);

              // Calculate "confidence" of this rule
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

      // If we found a good rule match
      if (bestRuleResult.rule && bestRuleResult.products.length > 0) {
          return {
              productIds: bestRuleResult.products,
              reasoning: bestRuleResult.rule.reasoning
          };
      }

      // 2. Fallback: Generic Keyword Match (Simple scoring)
      const genericMatches = products.map(p => {
          let score = 0;
          const n = p.name.toLowerCase();
          const c = p.category.replace(/-/g, ' ');
          
          if (n.includes(lowerQuery)) score += 10;
          if (c.includes(lowerQuery)) score += 5;
          if (p.uses?.some(u => u.toLowerCase().includes(lowerQuery))) score += 3;
          if (p.tags?.some(t => t.toLowerCase().includes(lowerQuery))) score += 5;
          
          return { id: p.id, score };
      })
      .filter(sp => sp.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(sp => sp.id);

      if (genericMatches.length > 0) {
          return {
              productIds: genericMatches,
              reasoning: "We found these products that match your search keywords directly."
          };
      }

      return null;
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);

    // 1. Try Weighted Rule-Based Matching First (Instant)
    const localResult = performLocalSearch(query);
    
    // If local result is strong, use it. 
    // "Strong" implies we found specific products.
    if (localResult) {
        setTimeout(() => {
            setResult(localResult);
            setLoading(false);
        }, 400);
        return;
    }

    // 2. If no rules match, try AI
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      
      const inventory = products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        description: p.shortDescription,
        uses: p.uses,
        features: p.features
      }));

      const prompt = `
        You are Tape India's Senior Technical Adhesive Engineer.
        User Query: "${query}"

        Task: Analyze technical requirements (temp, substrate, etc.) and recommend best products.
        
        Strict Rules:
        - If query mentions "EMI" or "Shielding", prioritize "Copper Tape" or "EMI Shielding Tape". Do NOT recommend standard Kapton tape for EMI unless specified.
        - If query mentions "Conductive", prioritize conductive tapes.
        
        Inventory:
        ${JSON.stringify(inventory)}

        Output Format (JSON):
        {
          "reasoning": "Technical explanation.",
          "productIds": ["id1", "id2", "id3"]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: { responseMimeType: 'application/json' }
      });

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        if (data.productIds && data.productIds.length > 0) {
            setResult(data);
        } else {
            throw new Error("No products returned by AI");
        }
      } else {
          throw new Error("Empty response from AI");
      }
    } catch (error) {
      console.warn("AI Search failed, falling back to basic search:", error);
      
      // 3. Final Fallback
      const words = query.toLowerCase().split(' ').filter(w => w.length > 2);
      const fallbackMatches = products.filter(p => 
          words.some(w => 
              p.name.toLowerCase().includes(w) || 
              p.category.includes(w) ||
              p.tags?.some(t => t.toLowerCase().includes(w))
          )
      ).map(p => p.id).slice(0, 6);

      if (fallbackMatches.length > 0) {
          setResult({ 
            productIds: fallbackMatches, 
            reasoning: "We couldn't connect to our expert system, but here are some related products based on your keywords." 
          });
      } else {
          setResult({
              productIds: [],
              reasoning: "We couldn't find an exact match. Please try browsing our categories or contact our experts directly."
          });
      }
    } finally {
      setLoading(false);
    }
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
                <h2 className="text-xl font-bold leading-none">Tape India AI Expert</h2>
                <p className="text-xs text-blue-200 mt-1">Intelligent Product Matcher</p>
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
              placeholder="Describe your application (e.g., 'I need a heat resistant tape for powder coating')..."
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
               <p className="text-lg font-medium">Ask our AI Expert to find the perfect tape.</p>
               <p className="text-sm">Try searching for "high temp masking", "packaging", or "ESD safety".</p>
            </div>
          )}

          {loading && (
            <div className="space-y-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-gray-100 h-64 rounded-xl"></div>
                    ))}
                </div>
            </div>
          )}

          {result && (
            <div className="animate-slide-down">
                {/* Reasoning Bubble */}
                <div className="flex gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                        <AIIcon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none border border-blue-100 w-full">
                        <p className="text-brand-blue-dark font-medium leading-relaxed">{result.reasoning}</p>
                    </div>
                </div>

                {/* Results Grid */}
                {recommendedProducts.length > 0 ? (
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recommended Products</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                            {recommendedProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    categoryName={categoryMap.get(product.category) || ''} 
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        <p>No exact matches found in our catalog based on the specific criteria.</p>
                        <p className="text-sm mt-2">Try rephrasing your query or browse our categories.</p>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
