
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

// --- DEEP DOMAIN KNOWLEDGE BASE (CRITICAL FOR AI ACCURACY) ---
const TAPE_ENGINEERING_KNOWLEDGE = `
[INDUSTRIAL TAPE ENGINEERING DATABASE]

1. ADHESIVE TECHNOLOGY MATRIX
- Rubber: High tack, poor UV/Temp. (General masking, Duct, Packaging)
- Acrylic: High UV/Shear, moderate tack. (VHB, Safety, Outdoor)
- Silicone: Extreme Temp (-73°C to +260°C), clean removal. (Kapton, Green Poly, Glass Cloth)

2. SUBSTRATE HIERARCHY
- Polyimide (Kapton): 260°C, Dielectric. (PCB, Soldering)
- Polyester (PET): 204°C, High Tensile. (Powder Coating, Splicing)
- Glass Cloth: 260°C+, Abrasion Resistant. (Motor Winding, Plasma Spray)
- PTFE (Teflon): Non-stick, Low Friction. (Heat Seal Jaws)
- Copper Foil: EMI/RFI Shielding, Grounding (X-Y-Z Conductivity).
- Aluminium Foil: Thermal Reflection, HVAC Sealing (Not primary for EMI).

3. STRICT APPLICATION RULES
- EMI/RFI Shielding -> MUST use Copper Foil or Conductive Fabric. Aluminium is acceptable ONLY if specified for generic shielding, but Copper is superior.
- "Strongest Tape" -> Assume Industrial Structural Bonding (VHB) or Bundling (Filament). Do NOT recommend Safety/Floor tapes.
- Powder Coating -> Green Polyester (204°C) or Polyimide.
`;

const SYSTEM_INSTRUCTION = `
You are the Tape India AI Expert.

PRIMARY RULE:
All answers and product recommendations must be driven by AI reasoning first.
Keyword matching and database rules are SECONDARY and SUPPORTIVE only.

DECISION FLOW (MANDATORY):
1. Understand the user’s engineering problem using reasoning.
2. Determine the correct tape category based on material science and application.
3. Decide which tape types SOLVE the problem.
4. ONLY AFTER that, fetch matching products from the database.

IMPORTANT:
- Database keywords must NEVER override AI judgment.
- If database results conflict with AI reasoning, AI reasoning wins.
- It is acceptable to return fewer products if they are more accurate.

PRODUCT FILTERING RULES:
- Exclude any product category that does not technically solve the problem.
- Do NOT recommend tapes just because keywords match (e.g. “strong”, “heat”, “durable”).

EMI RULE (STRICT):
- Aluminium conductivity alone is insufficient for high-performance EMI shielding.
- For EMI problems, AI must prioritize copper-based or conductive adhesive solutions.
- Aluminium-only tapes must be deprioritized or excluded unless explicitly requested for simple shielding.

“STRONGEST / LONGEST-LASTING” RULE:
- Treat as harsh industrial usage by default.
- Recommend industrial-grade tapes only (VHB, Filament, Cloth).
- Never show safety, glow, anti-slip, or signage tapes unless explicitly asked.

OUTPUT FORMAT (JSON):
{
  "reasoning": "A concise, technical explanation of WHY this tape is chosen based on the rules above.",
  "productIds": ["id1", "id2", "id3"]
}
`;

// --- LOCAL INTELLIGENCE (FALLBACK ONLY) ---
// These rules mirror the Strict AI Rules to ensure quality even if API fails.
const INTENT_RULES = [
  {
    id: 'emi-shielding',
    keywords: ['emi', 'shield', 'interference', 'signal', 'conductive', 'grounding', 'rfi', 'faraday'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        
        // STRICT EMI RULE: Copper is King
        if (n.includes('copper')) score += 100;
        if (n.includes('emi')) score += 80;
        if (n.includes('conductive')) score += 50;
        
        // Penalize Aluminium for EMI unless HVAC context implies it
        if (n.includes('aluminium') || n.includes('aluminum')) {
            if (query.includes('hvac') || query.includes('duct')) score += 50;
            else score -= 20; // Deprioritize for pure EMI
        }
        
        return score;
    },
    reasoning: "For effective EMI/RFI shielding and grounding, Copper Foil Tape with conductive adhesive is the technically superior solution."
  },
  {
    id: 'high-temp-masking',
    keywords: ['powder coat', 'baking', 'oven', '200', '250', 'curing', 'anodizing', 'paint shop', 'heat'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        // Green Poly & Kapton are Kings
        if (n.includes('green') && n.includes('polyester')) score += 100;
        if (n.includes('kapton') || n.includes('polyimide')) score += 90;
        if (n.includes('glass cloth')) score += 70;
        
        // Penalize Packaging/Duct tapes for heat
        if (n.includes('bopp') || n.includes('duct')) score -= 100;
        
        return score;
    },
    reasoning: "Based on thermal requirements, Green Polyester or Polyimide tapes with Silicone adhesive are required to prevent residue and melting."
  },
  {
    id: 'industrial-strength',
    keywords: ['strong', 'durable', 'heavy duty', 'tough', 'permanent', 'bond', 'break', 'strength', 'industrial'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        
        // STRICT STRENGTH RULE: Industrial grades only
        if (n.includes('filament') || n.includes('strapping')) score += 100;
        if (n.includes('vhb') || n.includes('foam')) score += 90;
        if (n.includes('duct') || n.includes('cloth')) score += 50;
        
        // Exclude Safety/Marking/Floor tapes from "Strong" queries
        if (n.includes('safety') || n.includes('floor') || n.includes('marking') || n.includes('barrier')) score -= 200;
        
        return score;
    },
    reasoning: "For maximum structural integrity and holding power, industrial-grade Filament or VHB tapes are the engineering standard."
  },
  {
    id: 'safety-compliance',
    keywords: ['slip', 'skid', 'floor', 'walkway', 'stair', 'traction', 'hazard', 'warning', 'barrier', 'osha'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('anti-slip') || n.includes('anti-skid')) score += 100;
        if (n.includes('floor marking') || n.includes('hazard')) score += 80;
        return score;
    },
    reasoning: "To ensure facility safety and compliance, Anti-Skid and Safety Marking tapes are the designated solution."
  },
  {
    id: 'packaging',
    keywords: ['pack', 'box', 'carton', 'ship', 'parcel', 'strap', 'seal'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('bopp')) score += 80;
        if (n.includes('kraft')) score += 70;
        if (n.includes('filament')) score += 60;
        return score;
    },
    reasoning: "For secure logistics, reinforced Filament, Kraft, or industrial BOPP tapes offer the required sealing strength."
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

  // Fallback 'Emergency' Local Intelligence Mode
  // Only runs if AI fails after retries.
  const performFallbackSearch = (searchQuery: string): { productIds: string[], reasoning: string } => {
      const lowerQuery = searchQuery.toLowerCase();
      let bestRuleResult = { rule: null as any, products: [] as any[], totalScore: 0 };

      // 1. Try Strict Intent Rules first
      for (const rule of INTENT_RULES) {
          if (rule.keywords.some(k => lowerQuery.includes(k))) {
              const scoredProducts = products.map(p => ({
                  id: p.id,
                  score: rule.score(p, lowerQuery)
              }));

              const topProducts = scoredProducts
                  .filter(sp => sp.score > 0)
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 4);

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

      // 2. Generic Keyword Fallback (Last Resort)
      const words = lowerQuery.split(' ').filter(w => w.length > 2);
      const fallbackMatches = products.map(p => {
          let score = 0;
          const n = p.name.toLowerCase();
          words.forEach(w => { if (n.includes(w)) score += 10; });
          return { id: p.id, score };
      })
      .filter(sp => sp.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(sp => sp.id);

      if (fallbackMatches.length > 0) {
          return {
              productIds: fallbackMatches,
              reasoning: "Based on keyword analysis of your requirements, these products align best with your application needs."
          };
      }

      // 3. Absolute default (Industrial Favorites)
      const defaultIds = products
        .filter(p => ['green-polyster', 'vhb-tape', 'filament-tape'].includes(p.id))
        .map(p => p.id);
        
      return {
          productIds: defaultIds,
          reasoning: "We couldn't find a specific match, but these are our most versatile industrial tapes for masking and bonding."
      };
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    // PRIMARY RULE: AI Reasoning First.
    // We do NOT check local rules here. We go straight to AI.
    
    setLoading(true);
    setResult(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      
      const inventory = products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        description: p.shortDescription,
        tags: p.tags
      }));

      // Inject the Deep Knowledge Base into the prompt context
      const prompt = `
        ${TAPE_ENGINEERING_KNOWLEDGE}

        USER QUERY: "${query}"
        
        TASK:
        1. Analyze user query against the Engineering Knowledge Base.
        2. Select best matches from the Inventory below.
        3. Explain WHY based on the engineering principles (e.g. temp rating, adhesive type).

        INVENTORY: ${JSON.stringify(inventory)}
      `;

      const generateContent = async () => {
          return await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: { 
                responseMimeType: 'application/json',
                systemInstruction: SYSTEM_INSTRUCTION
            }
          });
      };

      // ATTEMPT 1
      let response;
      try {
          response = await generateContent();
      } catch (err) {
          // SILENT RETRY (ATTEMPT 2)
          console.warn("AI Attempt 1 failed, retrying...", err);
          await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 1.5s
          response = await generateContent(); 
      }

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        if (data.productIds && data.productIds.length > 0) {
            setResult(data);
        } else {
            throw new Error("AI returned no results");
        }
      } else {
          throw new Error("Empty response");
      }

    } catch (error) {
      console.warn("System Switch: Engaging Local Intelligence Mode (Fallback).", error);
      // ZERO FAILURE PROTOCOL: Switch to Local Intelligence
      // This is ONLY reached if API fails twice.
      // We simulate a small delay to make it feel deliberate if it was instant error.
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
              placeholder="Describe your engineering problem (e.g., 'EMI shielding for PCB at 200°C')..."
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

                {/* Results Grid */}
                {recommendedProducts.length > 0 ? (
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recommended Solutions</h3>
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
                        <p>No exact product matches found in our catalog, but based on your query, we recommend contacting our engineers directly.</p>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
