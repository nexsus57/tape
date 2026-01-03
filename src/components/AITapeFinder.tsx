
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

// --- DEEP DOMAIN KNOWLEDGE BASE (CRITICAL FOR AI ACCURACY) ---
const TAPE_ENGINEERING_KNOWLEDGE = `
[INDUSTRIAL TAPE ENGINEERING DATABASE - INTERNAL REFERENCE]

1. ADHESIVE TECHNOLOGY MATRIX
- Rubber Adhesive (Natural/Synthetic):
  * Pros: High initial tack, economical, sticks to "hard-to-stick" surfaces (LSE).
  * Cons: Poor UV resistance, poor high-temp resistance, ages yellow.
  * Use Case: General purpose masking, box sealing (BOPP), duct tape.
- Acrylic Adhesive (Water/Solvent):
  * Pros: Excellent UV stability, non-yellowing, high shear strength, withstands weathering.
  * Cons: Lower initial tack (requires 24h dwell time for max bond).
  * Use Case: Outdoor mounting (VHB), safety tapes, long-term bonding.
- Silicone Adhesive:
  * Pros: Extreme temperature range (-73°C to +260°C), cleanest removal (no residue).
  * Cons: Expensive, lower tack than rubber.
  * Use Case: High-temp masking (Kapton, Green Poly), splicing silicone release liners.

2. SUBSTRATE (BACKING) HIERARCHY
- Polyimide (Kapton):
  * Prop: Amber/Gold, Dielectric Strength >5kV, Heat resistance 260°C.
  * App: PCB wave soldering, 3D printing beds, aerospace insulation.
- Polyester (PET) / Green Masking:
  * Prop: Green/Blue/Clear, thin, high tensile strength, Heat resistance 204°C.
  * App: Powder coating masking (prevents bridging), anodizing, splicing.
- Glass Cloth:
  * Prop: White woven fabric, highest tensile strength, Heat resistance 260°C+, absorbs varnish.
  * App: Motor winding, transformer coil insulation, plasma spray masking.
- PTFE (Teflon):
  * Prop: Brown/Gray, lowest coefficient of friction, non-stick, chemical inertness.
  * App: Heat seal bars, chute lining, blister packaging release.
- Copper/Aluminium Foil:
  * Prop: Conductive (X-Y-Z axis available), thermal reflection.
  * App: EMI/RFI shielding, HVAC duct sealing, thermal management.

3. PROBLEM-SOLUTION MAPPING
- "Tape leaves residue after heating":
  * Cause: Rubber/Acrylic adhesive failure at temp.
  * Solution: Switch to Silicone adhesive (Green Polyester or Polyimide).
- "Tape melts in oven":
  * Cause: PVC/Paper backing has low Tg.
  * Solution: Switch to Polyester (200°C) or Glass Cloth (260°C).
- "Static destroying chips":
  * Cause: Triboelectric charging during tape unwind/removal.
  * Solution: ESD Kapton (Anti-static treated) or ESD Grid Tape.
- "Tape falling off outside":
  * Cause: UV degradation of rubber adhesive.
  * Solution: Acrylic Adhesive or Butyl tape.
- "EMI Noise in Enclosure":
  * Solution: Copper Foil with Conductive Adhesive (creates Faraday cage).

4. PRODUCT SPECIFIC INTELLIGENCE
- VHB (Very High Bond): Acrylic foam, viscoelastic. Replaces screws/rivets. Requires 72h cure.
- Filament Tape: Reinforced with fiberglass strands. Uni-directional strength. For bundling heavy pipes/steel.
- Butyl Tape: Synthetic rubber. Self-healing, waterproof. For roofing/HVAC leaks.
- Nastro Tape: Specialized high-durability floor marking. Beveled edges to resist forklift wheels.
`;

const SYSTEM_INSTRUCTION = `
You are the Senior Applications Engineer for Tape India (est. 1957).
Your goal is to recommend the *technically correct* adhesive tape based on the user's input, using the "TAPE ENGINEERING KNOWLEDGE" provided.

RULES:
1. Always analyze the *process* (e.g., "powder coating", "wave soldering", "outdoor sealing").
2. Map the process to the correct *material* (e.g., Powder Coating -> Green Polyester; Soldering -> Polyimide).
3. If the user is vague (e.g., "strong tape"), ask for context OR recommend the most versatile industrial option (VHB/Filament) and explain why.
4. NEVER recommend packaging tape for high-temp applications.
5. NEVER recommend duct tape for electrical insulation (use PVC/Glass Cloth).
6. Prioritize "Best Match" based on technical specs, not just name similarity.

OUTPUT FORMAT (JSON):
{
  "reasoning": "A concise, technical explanation of WHY this tape is chosen (mention temp rating, adhesive type, or material property).",
  "productIds": ["id1", "id2", "id3"]
}

Inventory context will be provided in the user prompt. Use strictly that inventory.
`;

// --- EXPANDED LOCAL INTELLIGENCE (FALLBACK LOGIC) ---
const INTENT_RULES = [
  {
    id: 'high-temp-masking',
    keywords: ['powder coat', 'baking', 'oven', '200', '250', 'curing', 'anodizing', 'paint shop'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        // Green Poly is King of Powder Coating
        if (n.includes('green') && n.includes('polyester')) score += 100;
        if (n.includes('kapton') || n.includes('polyimide')) score += 80;
        if (n.includes('glass cloth')) score += 60;
        return score;
    },
    reasoning: "For powder coating and high-temp baking (200°C+), Green Polyester or Polyimide tapes with Silicone adhesive are required to prevent residue and melting."
  },
  {
    id: 'pcb-electronics',
    keywords: ['pcb', 'solder', 'circuit', 'chip', 'board', 'wave', 'reflow', 'gold finger'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        // Kapton is King of PCBs
        if (n.includes('kapton') || n.includes('polyimide')) score += 100;
        if (n.includes('esd') || n.includes('anti-static')) score += 50;
        return score;
    },
    reasoning: "Polyimide (Kapton) tape is the industry standard for PCB masking due to its dielectric strength and 260°C heat resistance during soldering."
  },
  {
    id: 'esd-control',
    keywords: ['static', 'esd', 'spark', 'charge', 'electronic component', 'sensitive'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('esd') || n.includes('anti-static')) score += 100;
        if (n.includes('grid')) score += 80;
        if (n.includes('kapton') && !n.includes('esd')) score -= 20; // Standard Kapton can be static generating
        return score;
    },
    reasoning: "To prevent electrostatic discharge damage to sensitive components, Anti-Static (ESD) tapes or Conductive Grid tapes are mandatory."
  },
  {
    id: 'emi-shielding',
    keywords: ['interference', 'noise', 'shield', 'frequency', 'rf', 'grounding', 'signal'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('copper')) score += 100;
        if (n.includes('emi') || n.includes('shielding')) score += 80;
        if (n.includes('conductive')) score += 50;
        if (n.includes('aluminium')) score += 40;
        return score;
    },
    reasoning: "Copper Foil Tape with conductive adhesive creates a Faraday cage effect, effectively blocking EMI/RFI interference and providing grounding."
  },
  {
    id: 'hvac-sealing',
    keywords: ['duct', 'ac', 'air', 'vent', 'insulation', 'cold', 'hvac', 'leak'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('foil') && n.includes('scrim')) score += 100; // FSK
        if (n.includes('aluminium')) score += 80;
        if (n.includes('butyl')) score += 90; // Waterproof sealing
        if (n.includes('foam') && n.includes('nbr')) score += 70;
        return score;
    },
    reasoning: "For HVAC efficiency, Aluminium Foil (FSK) or Butyl tapes are recommended to ensure a vapor-tight seal and thermal reflection."
  },
  {
    id: 'heavy-packaging',
    keywords: ['heavy', 'box', 'carton', 'shipping', 'transport', 'bundling', 'strap', 'pallet'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('filament')) score += 100; // The strongest
        if (n.includes('strapping')) score += 90;
        if (n.includes('bopp')) score += 40; // Standard
        if (n.includes('kraft') && n.includes('reinforced')) score += 60;
        return score;
    },
    reasoning: "For heavy loads and palletizing, Fiberglass Reinforced Filament tape offers superior tensile strength compared to standard packaging tape."
  },
  {
    id: 'permanent-bonding',
    keywords: ['mount', 'stick', 'bond', 'screw', 'rivet', 'mirror', 'glass', 'metal', 'permanent'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('vhb')) score += 100; // Very High Bond
        if (n.includes('acrylic') && n.includes('double')) score += 80;
        if (n.includes('foam')) score += 50;
        return score;
    },
    reasoning: "For permanent structural bonding replacing mechanical fasteners, VHB (Very High Bond) Acrylic Foam tape is the strongest solution."
  },
  {
    id: 'heat-sealing-ptfe',
    keywords: ['non stick', 'release', 'heat seal', 'machine', 'jaw', 'wire', 'friction', 'slide'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('ptfe') || n.includes('teflon')) score += 100;
        if (n.includes('glass cloth')) score += 20;
        return score;
    },
    reasoning: "PTFE (Teflon) coated tapes provide the necessary non-stick, low-friction surface required for heat sealing bars and packaging machinery."
  },
  {
    id: 'floor-marking-safety',
    keywords: ['floor', 'aisle', 'walkway', 'factory', 'lane', 'hazard', 'safety'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('floor marking')) score += 100;
        if (n.includes('hazard')) score += 90;
        if (n.includes('nastro')) score += 110; // Premium
        if (n.includes('vinyl')) score += 50;
        return score;
    },
    reasoning: "For factory aisle marking, heavy-duty Vinyl or Nastro floor marking tapes resist abrasion and forklift traffic better than standard paints."
  },
  {
    id: 'anti-slip-safety',
    keywords: ['slip', 'trip', 'fall', 'stair', 'ramp', 'wet', 'oil', 'grip'],
    score: (p: Product, query: string) => {
        let score = 0;
        const n = p.name.toLowerCase();
        if (n.includes('anti-slip') || n.includes('anti-skid')) score += 100;
        return score;
    },
    reasoning: "Anti-Skid tapes with abrasive mineral coating are essential for OSHA compliance on stairs, ramps, and wet areas."
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

  // High-Speed Local Matching with Expanded Rules
  const performLocalSearch = (searchQuery: string): { productIds: string[], reasoning: string } | null => {
      const lowerQuery = searchQuery.toLowerCase();
      
      let bestRuleResult = { rule: null as any, products: [] as any[], totalScore: 0 };

      // Check all intent rules
      for (const rule of INTENT_RULES) {
          // If ANY keyword matches
          if (rule.keywords.some(k => lowerQuery.includes(k))) {
              const scoredProducts = products.map(p => ({
                  id: p.id,
                  score: rule.score(p, lowerQuery)
              }));

              const topProducts = scoredProducts
                  .filter(sp => sp.score > 0)
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 4); // Top 4 matches

              const totalScore = topProducts.reduce((sum, p) => sum + p.score, 0);

              // Keep the rule that produces the highest quality matches
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

      return null;
  };

  // Fallback 'Emergency' Local Intelligence Mode
  const performFallbackSearch = (searchQuery: string): { productIds: string[], reasoning: string } => {
      // 1. Try generic matches with weighted scoring
      const words = searchQuery.toLowerCase().split(' ').filter(w => w.length > 2);
      
      const fallbackMatches = products.map(p => {
          let score = 0;
          const n = p.name.toLowerCase();
          const c = p.category.toLowerCase();
          const tags = p.tags || [];
          
          words.forEach(w => {
              if (n.includes(w)) score += 20;
              if (c.includes(w)) score += 10;
              if (tags.some(t => t.toLowerCase().includes(w))) score += 15;
              if (p.uses?.some(u => u.toLowerCase().includes(w))) score += 10;
          });
          
          return { id: p.id, score };
      })
      .filter(sp => sp.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(sp => sp.id);

      // 2. Default if absolutely nothing matches
      if (fallbackMatches.length === 0) {
          // Return popular industrial tapes
          const defaultIds = products
            .filter(p => ['green-polyster', 'vhb-tape', 'filament-tape', 'floor-marking-tape'].includes(p.id))
            .map(p => p.id);
            
          return {
              productIds: defaultIds,
              reasoning: "We couldn't find a specific match, but these are our most versatile industrial tapes for masking, bonding, and safety."
          };
      }

      return {
          productIds: fallbackMatches,
          reasoning: "Based on keyword analysis of your requirements, these products align best with your application needs."
      };
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);

    // 1. Try Rule-Based Matching (Instant & Reliable)
    // We try this FIRST to avoid API latency for common queries
    const localResult = performLocalSearch(query); 
    
    // Heuristic: If we have very strong local matches (e.g. "powder coating" -> Green Tape), use them.
    // Only use AI if the query is complex or ambiguous.
    const isComplexQuery = query.split(' ').length > 6; 
    
    if (localResult && !isComplexQuery) {
        setTimeout(() => {
            setResult(localResult);
            setLoading(false);
        }, 600); // UI delay for "Thinking..." effect
        return;
    }

    // 2. AI Expert System with Silent Retry & Failover
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
          // Wait 1 second before retry
          await new Promise(resolve => setTimeout(resolve, 1000));
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
      console.warn("System Switch: Engaging Local Intelligence Mode.", error);
      // 3. ZERO FAILURE MODE: Switch to Local Intelligence
      // User never sees an error. We calculate the best possible match locally.
      setTimeout(() => {
          const fallbackResult = localResult || performFallbackSearch(query);
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
              placeholder="Describe your application (e.g., 'Tape for powder coating masking at 200°C')..."
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
                <p className="text-brand-blue-dark font-bold text-lg animate-pulse">Consulting Engineering Database...</p>
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
