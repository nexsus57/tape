
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

// --- DEEP DOMAIN KNOWLEDGE BASE ---
const TAPE_ENGINEERING_KNOWLEDGE = `
[INDUSTRIAL TAPE ENGINEERING DATABASE]

1. STRICT CATEGORY SEPARATION (DO NOT MIX):
   - **REFLECTIVE / SAFETY**: For visibility, night safety, hazard marking. (Silver TC, PVC Reflective, Radium). NEVER recommend VHB/Bonding tapes here.
   - **BONDING / MOUNTING**: For sticking two things together permanently. (VHB, Acrylic Foam, Double Sided). NEVER recommend for "visibility".
   - **MASKING**: For painting/coating protection. (Green Poly, Masking Tape).
   - **ELECTRICAL/EMI**: For conductivity/insulation. (Copper, Kapton).

2. ADHESIVE TECHNOLOGY MATRIX:
   - Rubber: High tack, economical. (Floor Marking, Duct).
   - Acrylic: UV stable, clear. (VHB, Clear Packing).
   - Silicone: Extreme Temp (260°C). (Kapton, Green Poly).

3. KEYWORD -> MATERIAL MAPPING:
   - "Reflective" / "Visibility" / "Night" -> Glass Bead or Microprismatic Tape (Silver TC, PVC).
   - "Strongest" / "Stick Forever" -> Acrylic Foam (VHB).
   - "Heat" / "Oven" / "250C" -> Polyimide (Kapton) or Polyester (Green).
   - "Current" / "Shielding" -> Copper / Aluminum Foil.
`;

const EXPERT_KNOWLEDGE_BASE = `
==============================
VERIFIED HUMAN QUESTIONS + ANSWERS (STRICT TRAINING DATA)
==============================

Q: I need very high reflective tape for safety jackets.
A: For apparel and high visibility, you need Sew-On Reflective Fabric or Heat Transfer film. Do NOT use adhesive tapes meant for floors.
Recommended: Silver TC Sew-On Reflective Tape, Heat Transfer Reflective Film, Grey Reflective Piping.

Q: I need reflective tape for trucks and vehicles.
A: Rigid vehicle surfaces require adhesive-backed retro-reflective tape.
Recommended: PVC Reflective Tape, Honeycomb Reflective Tape.

Q: What is the strongest tape to stick metal to metal?
A: Structural bonding requires VHB (Very High Bond) Acrylic Foam tape. It replaces rivets and screws.
Recommended: VHB (Very High Bond) Double-Sided Tape, Acrylic Double Sided Tape.

Q: I need tape for powder coating masking at 200 degrees.
A: Powder coating requires silicone adhesive to prevent residue. Green Polyester (204°C) or Kapton (260°C) are standard.
Recommended: Green Polyester Tape, Green Polyester Tape with Liner, Polyimide Tape.

Q: My electrical panel has EMI interference.
A: You need conductive shielding. Copper foil with CONDUCTIVE adhesive is required to create a Faraday cage.
Recommended: Conductive Copper Foil Tape, EMI Shielding Tape, Tin-Plated Copper Tape.

Q: Tape to mark factory floors that won't peel off with forklifts.
A: Standard vinyl fails under heavy traffic. You need heavy-duty, beveled-edge floor tape or industrial PVC.
Recommended: Nastro Heavy Duty Floor Marking Tape, Heavy-Duty Floor Marking Tape.

Q: Tape for sealing HVAC ducts.
A: Requires thermal efficiency and moisture barrier. Aluminum Foil or FSK (Foil-Scrim-Kraft) is standard.
Recommended: Aluminium Foil Tape, Foil Scrim Kraft Tape (FSK), Aluminium Butyl Tape.

Q: Tape that glows in the dark for emergency exits.
A: Photoluminescent tape absorbs light and glows during power outages.
Recommended: Glow in the Dark Tape, Photoluminescent Film, Anti-Skid Glow in Dark.

Q: Tape to stop leakage in roofing sheets.
A: Butyl rubber tape is self-healing and waterproof for roofs.
Recommended: Aluminium Butyl Tape.

Q: Non-stick tape for heat sealing machines.
A: PTFE (Teflon) tape withstands heat and provides a release surface.
Recommended: PTFE Coated Fiberglass Tape, Nitto 903 UL Tapes.

Q: Tape for sublimation printing (heat resistant).
A: Polyimide (Kapton) tape holds paper in place at 200°C without leaving residue.
Recommended: Polyimide Tape, Green Polyester Tape.

Q: Tape to prevent slipping on stairs.
A: Anti-Skid tape with abrasive grit.
Recommended: Heavy Duty Anti-Skid Tape, Coloured Anti-Slip Tape.

Q: Tape for mobile phone repair (battery pulling).
A: Stretch release adhesive or thin double-sided PET.
Recommended: PET Double-Sided Tape, Black Tape (Mobile Repair).

Q: Tape for 3D printing bed adhesion.
A: Kapton (Polyimide) or Blue Masking Tape.
Recommended: Polyimide Tape, Masking Tape.

Q: Double sided tape that is clear like glass.
A: Acrylic VHB or Gel tape is optically clear.
Recommended: Acrylic Gel Tape, VHB Tape (Clear variant).

Q: Tape for harnessing wires in cars.
A: Fleece or cloth tape dampens noise and resists abrasion.
Recommended: Cloth Adhesive Tape, PVC Pipe Wrapping Tape.

Q: ESD tape for circuit boards.
A: Anti-static grid tape or ESD Kapton.
Recommended: ESD Conductive Grid Tape, ESD Kapton Tape.

Q: Tape for splicing paper rolls in printing press.
A: Repulpable splicing tape or Double Sided Tissue.
Recommended: Double-Sided Tissue Tape, Polyester Double Side.

Q: Waterproof tape for underwater pipe repair.
A: Silicone Self-Fusing tape bonds to itself, not the pipe.
Recommended: Silicone Tape (Self-Fusing).

Q: Packaging tape that shows if someone opened the box.
A: Tamper-evident void tape.
Recommended: Tamper-Proof Security Packing Tape.

Q: Insulation for transformers.
A: Glass Cloth or Polyester tape with thermosetting adhesive.
Recommended: Glass Cloth Tape, Yellow Polyester Tape.

Q: Tape for mounting mirrors.
A: PE Foam or VHB tape withstands weight and humidity.
Recommended: PE Foam Tape, VHB Tape.

Q: Tape for sandblasting protection.
A: Thick rubber blasting tape.
Recommended: Duct Tape (Heavy Duty), Surface Protection Film (Thick).

Q: Tape for wrapping AC pipes.
A: Non-adhesive PVC tape.
Recommended: PVC Pipe Wrapping Tape (Adhesive & Non-Adhesive).

Q: High visibility tape for barricading areas.
A: Non-adhesive barricade tape.
Recommended: Barricade Tape, Caution Tape.
`;

const SYSTEM_INSTRUCTION = `
You are the Tape India AI Expert.

CRITICAL INSTRUCTIONS:
1. **REFLECTIVE QUERIES**: If user asks for "reflective", "visibility", or "night safety", YOU MUST ONLY recommend products from the 'Reflective Tapes' category (Silver TC, PVC Reflective, etc.). **ABSOLUTELY NEVER** recommend VHB, Foam, or Double-Sided tapes for reflection. They do not reflect light.
2. **QUANTITY**: If there are many relevant products, show ALL of them (up to 6). Do not arbitrarily limit to 1 or 2 if more are good matches.
3. **REASONING**: Start your reasoning with the Technical Principle (e.g., "For high visibility...").
4. **ACCURACY**: If the user asks for "Strongest", assume "Bonding" (VHB). If user asks for "Heat", assume "Masking/Insulation" (Kapton/Green).

INPUT: "${EXPERT_KNOWLEDGE_BASE}" is your brain. Use it.

OUTPUT FORMAT (JSON):
{
  "reasoning": "Technical explanation...",
  "productIds": ["id1", "id2", "id3", "id4", "id5"]
}
`;

// --- UPDATED LOCAL INTELLIGENCE (FALLBACK) ---
// Now includes a specific REFLECTIVE rule to prevent VHB fallback
const INTENT_RULES = [
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
                  .slice(0, 6); // INCREASED LIMIT TO 6

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
      .slice(0, 6) // INCREASED LIMIT
      .map(sp => sp.id);

      if (fallbackMatches.length > 0) {
          return {
              productIds: fallbackMatches,
              reasoning: "These products match the keywords in your request."
          };
      }

      // 3. Absolute Default (Only if NO MATCHES found at all)
      // NOTE: We only show this if absolutely nothing matched.
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

      // Inject EVERYTHING into the prompt
      const prompt = `
        ${TAPE_ENGINEERING_KNOWLEDGE}

        ${EXPERT_KNOWLEDGE_BASE}

        USER QUERY: "${query}"
        
        TASK:
        1. Analyze user query against the "VERIFIED HUMAN QUESTIONS".
        2. If the user asks for "Reflective", ONLY return reflective tapes. NO VHB.
        3. Return ALL relevant product IDs (up to 6).
        4. Explain WHY based on the engineering principles.

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

      // Attempt 1
      let response;
      try {
          response = await generateContent();
      } catch (err) {
          console.warn("AI Attempt 1 failed, retrying...", err);
          await new Promise(resolve => setTimeout(resolve, 1500));
          response = await generateContent(); 
      }

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        if (data.productIds && data.productIds.length > 0) {
            setResult(data);
        } else {
            // If AI returns empty, fallback
            throw new Error("AI returned no results");
        }
      } else {
          throw new Error("Empty response");
      }

    } catch (error) {
      console.warn("Switching to Local Intelligence (Fallback).", error);
      setTimeout(() => {
          const fallbackResult = performFallbackSearch(query);
          // If even fallback finds nothing, keep it empty/null to show "No results" message in UI? 
          // Or show the reasoning.
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

                {/* Results Grid */}
                {recommendedProducts.length > 0 ? (
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recommended Solutions ({recommendedProducts.length})</h3>
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
