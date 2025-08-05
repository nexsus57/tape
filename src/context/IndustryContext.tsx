
import { createContext, useContext, ReactNode, FC, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { IndustryDetail } from '../types';

const INITIAL_INDUSTRIES_DETAILED: IndustryDetail[] = [
    {
        id: 'packaging-industry',
        name: 'Packaging Industry',
        description: 'Our tapes provide secure sealing, bundling, and protection for all types of packaging. From standard carton sealing to tamper-evident solutions, we ensure your products arrive safely.',
        products: [
            'hazard-tape', 'floor-marking-tape', 'anti-skid-tape', 'caution-tape', 
            'barricade-tape', 'tamper-proof-security-packing-tape', 'nastro-heavy-duty-floor-marking-tape', 
            'glow-in-the-dark-tape', 'anti-skid-tape-with-centre-glow', 'esd-floor-marking-tape', 
            'glow-in-dark-marking-tapes', 'heavy-duty-anti-skid-tape', 'anti-slip-tape-for-bath-and-shower', 
            'vhb-tape', 'hot-melt-tissue-tapes', 'acrylic-double-sided-tape', 'acrylic-gel-tape', 
            'masking-tape', 'bopp-tape', 'aluminium-foil-tape', 'kapton-tape', 'cloth-duct-tape', 
            'high-temperature-sealing-tape', 'bag-sealing-tape', 'acetate-cloth-tape', 'fine-line-masking-tape', 
            'green-polyester-tape', 'green-polyester-tape-with-liner', 'pe-surface-protection-film', 
            'lamination-tape', 'filament-tapes', 'ez-application-tape', 'kraft-paper-tape', 
            'reinforcement-kraft-paper-tape', 'water-activated-kraft-paper-tape', 'adhesive-cloth-tape', 
            'ptfe-silicone-adhesive-tape', 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive', 
            'emi-shielding-tape', 'copper-foil-tape', 'polyimide-film-tape', 'tin-plated-copper-tape', 
            'air-vent-tape', 'pink-rayon-tape'
        ],
        seo: {
            title: "Packaging Tapes Manufacturer | Carton Sealing Solutions",
            description: "Tape India supplies a complete range of packaging tapes, including BOPP, filament, and water-activated tapes for secure carton sealing. B2B supplier."
        }
    },
    {
        id: 'hvac-industry',
        name: 'HVAC Industry',
        description: 'We offer a complete range of tapes for the HVAC industry, including foil tapes for duct sealing, insulation tapes for thermal control, and specialized sealing solutions to ensure system efficiency.',
        products: [
            'double-sided-scrim-tape', 'eva-foam-tape', 'spacer-tapes', 'xlpe-foam-tapes', 
            'aluminium-foil-tape', 'cloth-duct-tape', 'pvc-pipe-wrapping-tape', 'aluminium-foil-scrim-kraft-tape-fsk', 
            'aluminium-pet-tape-alupet', 'aluminium-butyl-tape', 'fiber-glass-cloth-tape', 
            'nbr-foam-tapes', 'aluminium-glass-tape-fr-grade', 'pvc-pipe-wrapping-tape-without-adhesive', 
            'glass-cloth-tape', 'glass-cloth-tape-fr-grade'
        ],
        seo: {
            title: "HVAC Tapes Supplier | Duct Sealing & Insulation Tapes",
            description: "Find high-performance HVAC tapes at Tape India. We supply aluminum foil, FSK, and duct tapes for sealing and insulation. Get a quote for your project."
        }
    },
    {
        id: 'print-labels-signage-industry',
        name: 'Print, Labels & Signage Industry',
        description: 'Our tapes are essential for the printing and signage industries, offering solutions for plate mounting, splicing, laminating, and permanent sign mounting with high-performance double-sided tapes.',
        products: [
            'photoluminescent-film', '3m-double-sided-foam-tape', 'tissue-tape', 'polyester-double-sided-tape', 
            'vhb-tape', 'lohmann-duploflex-tape', 'pet-double-sided-tape', 'transfer-tape', 
            'acrylic-double-sided-tape', 'nano-magic-tape', 'hot-melt-tissue-tapes', 'double-sided-cloth-tape', 
            'acrylic-gel-tape', 'paper-tape', 'bag-sealing-tape', 'acetate-cloth-tape', 
            'pe-surface-protection-film', 'lamination-tape', 'ez-application-tape'
        ],
        seo: {
            title: "Tapes for Printing & Signage | Plate Mounting & Bonding",
            description: "Tape India offers a range of tapes for the print and signage industry, including plate mounting, double-sided, and application tapes. B2B solutions."
        }
    },
    {
        id: 'electronic-industry',
        name: 'Electronics Industry',
        description: 'Protect sensitive components with our range of high-performance tapes for the electronics industry. We provide solutions for EMI shielding, high-temperature masking, thermal management, and ESD protection.',
        products: [
            'esd-floor-marking-tape', '3m-double-sided-foam-tape', 'polyester-double-sided-tape', 
            'pet-double-sided-tape', 'transfer-tape', 'double-sided-thermal-tape', 'double-sided-scrim-tape', 
            'eva-foam-tape', 'spacer-tapes', 'xlpe-foam-tapes', 'kapton-tape', 'sticky-mat', 'mica-tape', 
            'green-polyester-tape', 'green-polyester-tape-with-liner', 'thermal-conductive-pads', 
            'fiber-glass-cloth-tape', 'nbr-foam-tapes', 'pink-rayon-tape', 'yellow-polyester-tape', 
            'glass-cloth-tape', 'glass-cloth-tape-fr-grade', 'polyimide-tape', 'emi-shielding-tape', 
            'copper-foil-tape', 'conductive-grid-tape', 'esd-kapton-tape', 'anti-static-polyester-tape', 
            'polyimide-double-sided-tape', 'polyimide-film-tape', 'tin-plated-copper-tape'
        ],
        seo: {
            title: "Electronics Tapes | Kapton, ESD & Shielding Tapes | Tape India",
            description: "Source high-performance tapes for electronics manufacturing. We supply Kapton, ESD, thermal, and EMI shielding tapes. Contact Tape India for a quote."
        }
    },
    {
        id: 'reflective-safety-industry',
        name: 'Reflective & Safety Industry',
        description: 'We are a leading supplier of reflective and safety materials for apparel and equipment. Our range includes sew-on tapes, heat transfer films, and high-visibility fabrics to meet stringent safety standards.',
        products: [
            'silver-tc-reflective-tape', 'heat-transfer-reflective-tape', 'vinyl-heat-transfer-reflective-film',
            'pvc-reflective-tape', 'reflective-yarn-thread', 'flame-retardant-reflective-tape', 
            'hi-reflective-polyester-fabric', 'hi-reflective-tc-fabric', 'oxford-reflective-ribbon', 
            'reflective-piping', 'ordinary-reflective-polyester-fabric', 'woven-reflective-ribbon', 
            'ordinary-reflective-tc-fabric'
        ],
        seo: {
            title: "Reflective Tapes & Safety Fabrics Supplier | Tape India",
            description: "Tape India is a B2B supplier of reflective tapes and fabrics for the safety apparel industry. We offer sew-on, heat transfer, and FR options. Get a quote."
        }
    },
    {
        id: 'ptfe-teflon-industry',
        name: 'PTFE & Teflon Industry',
        description: 'Our PTFE and Teflon tapes provide superior non-stick, high-temperature, and low-friction surfaces for demanding industrial processes like heat sealing, mold release, and conveyor applications.',
        products: [
            'ptfe-coated-fiberglass-fabric-non-adhesive', 'ptfe-silicone-adhesive-tape', 
            'ptfe-coated-fiberglass-fabric-with-silicone-adhesive', 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner'
        ],
        seo: {
            title: "PTFE & Teflon Tape Manufacturer | High-Temp Non-Stick Tapes",
            description: "Buy high-temperature, non-stick PTFE and Teflon tapes from Tape India. Ideal for heat sealing, mold release, and industrial non-stick applications."
        }
    },
];

interface IndustryContextType {
  industries: IndustryDetail[];
  updateIndustry: (id: string, updatedIndustryData: IndustryDetail) => void;
}

const IndustryContext = createContext<IndustryContextType | undefined>(undefined);

interface IndustryProviderProps {
    children: ReactNode;
}

export const IndustryProvider: FC<IndustryProviderProps> = ({ children }) => {
  const [industries, setIndustries] = useLocalStorage<IndustryDetail[]>('tapeindia_industries_v2', INITIAL_INDUSTRIES_DETAILED);

  const updateIndustry = useCallback((id: string, updatedIndustryData: IndustryDetail) => {
    setIndustries(prev => prev.map(i => (i.id === id ? updatedIndustryData : i)));
  }, [setIndustries]);

  const value = { industries, updateIndustry };

  return <IndustryContext.Provider value={value}>{children}</IndustryContext.Provider>;
};

export const useIndustry = (): IndustryContextType => {
  const context = useContext(IndustryContext);
  if (context === undefined) {
    throw new Error('useIndustry must be used within an IndustryProvider');
  }
  return context;
};
