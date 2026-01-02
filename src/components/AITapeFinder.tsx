
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

// Intent Mapping Rules for Immediate Response
const INTENT_RULES = [
  {
    keywords: ['heat', 'high temp', 'thermal', 'flame', 'fire', 'burn', 'oven', 'plasma'],
    match: (p: Product) => 
      p.tags?.some(t => ['HEAT RESISTANT', 'HIGH TEMPERATURE'].includes(t)) || 
      p.category === 'teflon-ptfe-tapes' ||
      p.name.toLowerCase().includes('glass cloth'),
    reasoning: "Based on your need for heat resistance, we recommend our High-Temperature PTFE, Glass Cloth, or Polyimide tapes."
  },
  {
    keywords: ['slip', 'skid', 'floor', 'walkway', 'stair', 'traction'],
    match: (p: Product) => 
      p.tags?.some(t => ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY'].includes(t)) || 
      p.category === 'safety-tapes',
    reasoning: "For floor safety and traction, our Anti-Skid and Safety Marking tapes are the best choice."
  },
  {
    keywords: ['emi', 'shield', 'interference', 'signal', 'conductive', 'copper', 'static', 'esd'],
    match: (p: Product) => 
      p.tags?.some(t => ['EMI SHIELDING', 'EMI', 'RFI', 'ESD'].includes(t)) || 
      p.category === 'antistatic-esd-tapes',
    reasoning: "For electronics, shielding, or static control, we recommend our EMI Shielding and ESD tapes."
  },
  {
    keywords: ['water', 'leak', 'seal', 'pipe', 'plumbing', 'moisture', 'outdoor'],
    match: (p: Product) => 
      p.tags?.some(t => ['PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'].includes(t)) || 
      p.name.toLowerCase().includes('butyl') || 
      p.name.toLowerCase().includes('silicone'),
    reasoning: "These tapes are specialized for waterproofing, sealing leaks, and protecting pipes."
  },
  {
    keywords: ['pack', 'box', 'carton', 'ship', 'parcel'],
    match: (p: Product) => 
      p.tags?.some(t => ['PACKAGING', 'SEALING'].includes(t)) || 
      p.category === 'specialty-tapes' && p.name.toLowerCase().includes('tape'),
    reasoning: "For secure packaging and shipping, these are our most reliable adhesive solutions."
  }
];

// The Strict Categorization Rules provided (Keeping for AI context if needed)
const CATEGORY_RULES = `
🔌 TAG: EMI SHIELDING / EMI / RFI
Show ONLY: EMI Shielding Tape, Conductive Copper Foil Tape, Tin-Plated Copper Tape, ESD Conductive Grid Tape, ESD Kapton Tape, Anti-Static Polyester Tape

⚡ TAG: ESD / ANTI-STATIC / STATIC CONTROL
Show ONLY: ESD Floor Marking Tape, ESD Conductive Grid Tape, ESD Kapton Tape, Anti-Static Polyester Tape, Sticky Mat

🔥 TAG: HEAT RESISTANT / HIGH TEMPERATURE
Show ONLY: High-Temperature Kapton Polyimide Tape, Polyimide Film Tape, Polyimide Double-Sided Tape, Teflon & PTFE Tapes, PTFE Coated Tape with Silicone Adhesive, PTFE Coated Fiberglass Fabric, PTFE Coated Fiberglass Fabric with Silicone Adhesive, PTFE Coated Fiberglass Fabric with Liner, Glass Cloth Tape, Aluminium Glass Tape (FR Grade), Mica Tape, High Temperature Sealing Tape, Nitto 903 UL Tapes

❄️ TAG: HVAC / DUCT SEALING / THERMAL INSULATION
Show ONLY: High-Performance Aluminium Foil Tape, Aluminium Foil Scrim Kraft Tape (FSK), Aluminium PET Tape (Alupet), Aluminium Butyl Tape, Air Vent Tape, Fiber Glass Cloth Tape, Glass Cloth Tape, Aluminium Glass Tape (FR Grade)

🚧 TAG: ANTI-SLIP / ANTI-SKID / FLOOR SAFETY
Show ONLY: Heavy-Duty Anti-Skid & Anti-Slip Tape, Heavy Duty Anti-Skid Tape, Anti-Skid Tape with Centre Glow, Anti-Slip Tape for Bath and Shower
`;

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
      
      // 1. Check Intent Rules First
      for (const rule of INTENT_RULES) {
          if (rule.keywords.some(k => lowerQuery.includes(k))) {
              const matches = products.filter(rule.match).map(p => p.id).slice(0, 6);
              if (matches.length > 0) {
                  return {
                      productIds: matches,
                      reasoning: rule.reasoning
                  };
              }
          }
      }

      // 2. Fallback: Generic Keyword Match
      const genericMatches = products.filter(p => 
          p.name.toLowerCase().includes(lowerQuery) || 
          p.category.replace(/-/g, ' ').includes(lowerQuery) ||
          p.uses?.some(u => u.toLowerCase().includes(lowerQuery)) ||
          p.tags?.some(t => t.toLowerCase().includes(lowerQuery))
      ).map(p => p.id).slice(0, 6);

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

    // 1. Try Rule-Based Matching First (Instant)
    const localResult = performLocalSearch(query);
    if (localResult) {
        // Simulate a tiny delay for "thinking" feel, or just show immediately. 
        // Showing immediately is better for UX.
        setTimeout(() => {
            setResult(localResult);
            setLoading(false);
        }, 600);
        return;
    }

    // 2. If no rules match, try AI
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      
      // Simplify inventory for token efficiency
      const inventory = products.map(p => ({
        id: p.id,
        name: p.name,
        keywords: `${p.category} ${p.industries?.join(' ')}`
      }));

      const prompt = `
        You are Tape India's Expert AI Consultant.
        User Query: "${query}"

        Task: Recommend products from the inventory below based on the User Query.
        
        CRITICAL RULES:
        1. FIRST, check the "Categorization Rules" below. If the User Query matches a Tag/Concept, you MUST strictly recommend ONLY the products listed for that Tag in the rules.
        2. IF the query does not match a strict Tag, use your general knowledge to find the best matches from the Inventory.
        3. Return JSON format only.

        Categorization Rules:
        ${CATEGORY_RULES}

        Inventory (ID : Name):
        ${JSON.stringify(inventory)}

        Output Format (JSON):
        {
          "reasoning": "A concise, professional explanation (max 2 sentences) of why these tapes are recommended.",
          "productIds": ["exact_id_from_inventory", ...]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-latest',
        contents: prompt,
        config: { responseMimeType: 'application/json' }
      });

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        if (data.productIds && data.productIds.length > 0) {
            setResult(data);
        } else {
            // AI returned valid JSON but no products? Fallback to broad search.
            throw new Error("No products returned by AI");
        }
      } else {
          throw new Error("Empty response from AI");
      }
    } catch (error) {
      console.warn("AI Search failed, falling back to basic search:", error);
      
      // 3. Final Fallback: Aggressive Local Search
      // Split query into words and try to match ANY word
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
                <p className="text-xs text-blue-200 mt-1">Powered by Gemini 2.5 Flash</p>
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
