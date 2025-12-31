
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { useCategories } from '../context/CategoryContext';
import { AIIcon } from './icons/AIIcon';

interface AITapeFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

// The Strict Categorization Rules provided
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

🦺 TAG: SAFETY MARKING / HAZARD / WARNING
Show ONLY: Hazard Warning & Safety Stripe Tape, Heavy-Duty Floor Marking Tape, Nastro Heavy Duty Floor Marking Tape, Non-Adhesive Caution & Warning Tape, Non-Adhesive Barricade Tape, Glow in the Dark Tape, Glow in Dark Marking Tapes, Photoluminescent Film

🌙 TAG: GLOW IN THE DARK / EMERGENCY VISIBILITY
Show ONLY: Glow in the Dark Tape, Glow in Dark Marking Tapes, Photoluminescent Film, Anti-Skid Tape with Centre Glow

👕 TAG: REFLECTIVE / HIGH VISIBILITY / PPE
Show ONLY: Silver TC Sew-On Reflective Tape, Flame Retardant Reflective Tape, PVC Reflective Tape, Heat Transfer Reflective Film, Vinyl Heat Transfer Reflective Film, Reflective Yarn & Thread, Reflective Piping, Woven Reflective Ribbon, Oxford Reflective Ribbon, Hi-Reflective Polyester Fabric, Hi-Reflective TC Fabric, Ordinary Reflective Polyester Fabric, Ordinary Reflective TC Fabric

🖨️ TAG: PRINT / LABEL / GRAPHIC MOUNTING
Show ONLY: Double-Sided Tissue Tape, Polyester Double Sided Tape, PET Double-Sided Tape, Transfer Tape, Acrylic Double Sided Tape, Hot Melt Tissue Tapes, Double Sided Cloth Tape, Acrylic Gel Tape, Nano Magic (Silicone) Tape

🧱 TAG: FOAM / SPACER / VIBRATION DAMPING
Show ONLY: EVA Foam Tape, PE Foam Tape, XLPE Foam Tapes, NBR Foam Tapes, Spacer Tapes

📦 TAG: PACKAGING / SEALING
Show ONLY: BOPP Packing Tape, Tamper-Proof Security Packing Tape, Bag Sealing Tape, Kraft Paper Tape, Paper Tape, Filament Tapes, EZ Application Tape, Lamination Tape

🔩 TAG: GENERAL INDUSTRIAL / MASKING / CLOTH
Show ONLY: Masking Tape, Heavy-Duty Cloth Duct Tape, Adhesive Cloth Tape, Acetate Cloth Tape, Single-Sided Polyester Tape, Green Polyester Tape, Yellow Polyester Tape, Pink Rayon Tape

🧪 TAG: SURFACE PROTECTION / COATING
Show ONLY: PE Surface Protection Film, Powder Coated Tape

🧯 TAG: PIPE SEALING / LEAK REPAIR / WATERPROOF
Show ONLY: Silicone Tape, PVC Pipe Wrapping Tape, Aluminium Butyl Tape

🔥 TAG: THERMAL MANAGEMENT
Show ONLY: Thermal Conductive Pads, Double-Sided Thermal Tape
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

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);

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
        setResult(data);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setResult({ 
        productIds: [], 
        reasoning: "I'm having trouble connecting to the expert system right now. Please browse our categories or contact support." 
      });
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
                    <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none border border-blue-100">
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
