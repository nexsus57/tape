
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

// --- SYSTEM INSTRUCTION: UNIVERSAL TAPE INTELLIGENCE ---
const SYSTEM_INSTRUCTION = `
System Instruction: Industrial Tape Recommendation Logic

You are acting as an industrial applications engineer, not a generic assistant.
Your job is to recommend the most technically appropriate tape, based on application effectiveness, not just keyword matching.

🔑 CORE PRINCIPLE (VERY IMPORTANT)
Many tapes may partially satisfy a requirement, but only one is optimal for a given application.
Do NOT treat similar materials as equal.
Always rank tapes based on industry-standard suitability.

🧱 MATERIAL & APPLICATION PRIORITY RULES
1️⃣ EMI / CONDUCTIVITY / SHIELDING
Primary: Copper Foil Tape
Best for EMI shielding, grounding, RFI suppression
Secondary: Aluminium Foil Tape
Conductive but mainly for HVAC / thermal use
Rule:
If EMI performance matters → Copper always ranks higher than Aluminium

2️⃣ HIGH TEMPERATURE / SOLDERING / MASKING
Primary: Polyimide (Kapton) Tape
Secondary: PTFE / Teflon Tape (only when non-stick is required)
Rule:
Heat resistance ≠ non-stick ≠ electrical insulation — choose based on process

3️⃣ NON-STICK / SEALING / HEAT CONTACT SURFACES
Primary: PTFE / Teflon Tape
Rule:
If release, anti-stick, or sealing jaws are mentioned → PTFE wins

4️⃣ ESD / STATIC PROTECTION
Primary: Antistatic / ESD Tape
Rule:
EMI shielding ≠ ESD protection — never confuse these

5️⃣ SAFETY / FLOOR / GRIP
Primary: Anti-Slip Safety Tape
Secondary: Reflective Safety Tape (only if visibility is requested)

6️⃣ VISIBILITY / MARKING / SIGNAGE
Primary: Reflective Tape
Rule:
Visibility problems ≠ slip resistance

7️⃣ HVAC / DUCT / INSULATION
Primary: Aluminium Foil Tape
Rule:
HVAC sealing ≠ EMI shielding

🧠 DECISION LOGIC (MANDATORY)
Identify the core problem (EMI, heat, static, safety, sealing, visibility)
Select the most effective tape, not just a compatible one
Rank results as:
Best / Recommended
Alternatives (if applicable)
Clearly explain why one tape is better than others

❌ STRICT PROHIBITIONS
Do NOT show “No exact matches” if a related tape exists
Do NOT treat conductive, insulating, heat-resistant, and antistatic tapes as interchangeable
Do NOT recommend secondary materials as primary solutions

🎯 GOAL
Sound like a real industrial expert and always guide the user to the best-performing tape for their application, across all tape categories, not just copper
`;

// Intent Mapping Rules with Scoring System (Local Optimization)
const INTENT_RULES = [
  {
    id: 'heat',
    keywords: ['heat', 'high temp', 'thermal', 'flame', 'fire', 'burn', 'oven', 'plasma', 'powder coat'],
    score: (p: Product, query: string) => {
        let score = 0;
        const q = query.toLowerCase();
        const n = p.name.toLowerCase();
        
        if (p.tags?.some(t => ['HEAT RESISTANT', 'HIGH TEMPERATURE'].includes(t))) score += 20;
        if (matches(n, ['polyimide', 'kapton', 'glass cloth', 'teflon', 'ptfe'])) score += 15;
        if (p.category === 'teflon-ptfe-tapes') score += 10;
        if (q.includes('powder') && n.includes('green')) score += 30; 
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

        if (q.includes('slip') || q.includes('skid')) {
            if (n.includes('anti-slip') || n.includes('anti-skid')) score += 25;
            else score -= 5;
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

        if (p.tags?.some(t => ['EMI SHIELDING', 'EMI', 'RFI'].includes(t))) score += 10;
        if (p.tags?.some(t => ['ESD', 'ANTI-STATIC'].includes(t))) score += 5;
        
        const isCopper = n.includes('copper');
        const isAluminium = n.includes('aluminium') || n.includes('aluminum');
        const isConductiveFabric = n.includes('emi shielding') && !isCopper && !isAluminium;
        const isPlastic = n.includes('polyimide') || n.includes('kapton') || n.includes('polyester');

        const wantsEMI = q.includes('emi') || q.includes('shield') || q.includes('interference');
        const wantsConductive = q.includes('conductive') || q.includes('grounding');

        if (wantsEMI || wantsConductive) {
            if (isCopper) score += 60; // Priority 1
            else if (isConductiveFabric) score += 40; // Priority 2
            else if (isAluminium) score += 5; // Priority 3 (Secondary)
            else if (isPlastic) score -= 30; // Penalty
        }

        if (q.includes('static') || q.includes('esd')) {
            if (n.includes('esd') || n.includes('anti-static')) score += 40;
            if (isCopper) score += 15;
        }

        return score;
    },
    reasoning: "For EMI shielding and grounding, Copper Foil Tape is the industry standard due to its superior conductivity. Aluminium is a secondary option."
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

  // High-Speed Local Matching for obvious queries
  const performLocalSearch = (searchQuery: string): { productIds: string[], reasoning: string } | null => {
      const lowerQuery = searchQuery.toLowerCase();
      
      let bestRuleResult = { rule: null as any, products: [] as any[], totalScore: 0 };

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
    
    // If local result is very strong (e.g. clearly EMI copper), use it.
    // If the user query is complex, we prefer AI.
    // We judge "complex" by length or lack of strong local signals.
    const isComplexQuery = query.split(' ').length > 4; 
    
    if (localResult && !isComplexQuery) {
        setTimeout(() => {
            setResult(localResult);
            setLoading(false);
        }, 400);
        return;
    }

    // 2. AI Expert System
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
        User Query: "${query}"

        Task: Apply the System Instructions to the provided Inventory to find the best matches.

        Inventory:
        ${JSON.stringify(inventory)}

        Output Format (JSON):
        {
          "reasoning": "Technical explanation following the decision logic.",
          "productIds": ["id1", "id2", "id3"]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: { 
            responseMimeType: 'application/json',
            systemInstruction: SYSTEM_INSTRUCTION
        }
      });

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        if (data.productIds && data.productIds.length > 0) {
            setResult(data);
        } else {
            // If AI returns empty but we had local results, fallback to local
            if (localResult) setResult(localResult);
            else throw new Error("No products returned by AI");
        }
      } else {
          throw new Error("Empty response from AI");
      }
    } catch (error) {
      console.warn("AI Search failed, falling back to basic search:", error);
      
      if (localResult) {
          setResult(localResult);
      } else {
          // Final Fallback: Aggressive Local Search
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
                <h2 className="text-xl font-bold leading-none text-white">Tape India AI Expert</h2>
                <p className="text-xs text-blue-100 mt-1">Powered by Gemini 3.0</p>
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
