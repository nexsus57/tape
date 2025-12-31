

import { Industry, NavLinkData, Testimonial, Product, Category, IndustryDetail } from './types';

export const NAV_LINKS: NavLinkData[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Request a Quote', path: '/request-quote', isButton: true },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
    {
        quote: "Tape India's VHB tapes have revolutionized our assembly process. The bond is incredibly strong, and their technical support is top-notch.",
        author: "Ravi Sharma",
        company: "Lead Engineer, Auto Components Ltd."
    },
    {
        quote: "The quality and consistency of their packaging tapes have significantly reduced our shipping damages. A reliable partner for our logistics.",
        author: "Priya Menon",
        company: "Supply Chain Manager, E-commerce Giant"
    },
    {
        quote: "We rely on their high-temperature masking tapes for our powder coating line. They perform flawlessly and remove cleanly every time.",
        author: "Anil Kumar",
        company: "Production Head, Metal Fabricators Inc."
    }
];

export const INDUSTRIES: Industry[] = [
    { 
        id: 'packaging-industry', 
        name: 'Packaging', 
        subtitle: 'Sealing, bundling, and safety.',
        icon: 'BoxIcon',
        gradientClasses: 'from-amber-500 via-orange-600 to-red-700',
    },
    { 
        id: 'hvac-industry', 
        name: 'HVAC',
        subtitle: 'Duct sealing & thermal control.',
        icon: 'WindIcon',
        gradientClasses: 'from-cyan-500 via-cyan-600 to-blue-700',
    },
    { 
        id: 'print-labels-signage-industry', 
        name: 'Print & Label',
        subtitle: 'Mounting, printing, and bonding.',
        icon: 'LayersIcon',
        gradientClasses: 'from-slate-500 via-slate-600 to-slate-700',
    },
    { 
        id: 'electronic-industry', 
        name: 'Electronics',
        subtitle: 'Shielding & high-temp solutions.',
        icon: 'CpuIcon',
        gradientClasses: 'from-blue-600 via-blue-700 to-indigo-800',
        highlight: true
    },
    { 
        id: 'reflective-safety-industry', 
        name: 'Reflective & Safety',
        subtitle: 'High-visibility tapes and fabrics.',
        icon: 'SunIcon',
        gradientClasses: 'from-yellow-400 via-yellow-500 to-orange-500',
    },
    { 
        id: 'ptfe-teflon-industry', 
        name: 'PTFE & Teflon',
        subtitle: 'High-temperature, non-stick.',
        icon: 'SparklesIcon',
        gradientClasses: 'from-green-500 via-green-600 to-teal-700',
    },
];

export const INITIAL_INDUSTRIES_DETAILED: IndustryDetail[] = [
    {
        id: 'packaging-industry',
        name: 'Packaging Industry',
        description: 'Our tapes provide secure sealing, bundling, and protection for all types of packaging. From standard carton sealing to tamper-evident solutions, we ensure your products arrive safely.',
        products: [
            'bopp-tape',
            'tamper-proof-tape-1',
            'bag-sealing-tape',
            'kraft-paper-tape',
            'reinforced-paper-tapes1',
            'water-activated-kraft-tape',
            'paper-tape',
            'filament-tape',
            'ez-application-tape',
            'lamination-tape',
            'cloth-adhesive-tape-500x500-1'
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
            'aluminum-foil-2-tape',
            'foil-scrim-kraft-tape',
            'aluminium-pet',
            'butyl',
            'aluminium-fr-grade',
            'glass-cloth-tape',
            'fr-grade-glass-cloth-tape',
            'fiberglass-tape',
            'high-sealing-tape',
            'air-vent-tape',
            'mica-tape'
        ],
        seo: {
            title: "HVAC Tapes Supplier | Duct Sealing & Insulation Tapes",
            description: "Find high-performance HVAC tapes at Tape India. We supply aluminum foil, FSK, and duct tapes for sealing and insulation. Get a quote for your project."
        }
    },
    {
        id: 'print-labels-signage-industry',
        name: 'Print & Label Industry',
        description: 'Our tapes are essential for the printing and signage industries, offering solutions for plate mounting, splicing, laminating, and permanent sign mounting with high-performance double-sided tapes.',
        products: [
            'tissue-tape',
            'polyester-double-side',
            'pet-double-sided-tape',
            'transfer-tape',
            'acrylic-double-sided-tape-1',
            'hot-melt-tissue-tape',
            'double-coated-cloth-tape-581',
            'silicone-tape',
            'aacrylic-gel-tape-1'
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
            'kapton-tape',
            'polyimide-film-tape',
            'double-sided-polyimide-tapes-1',
            'green-polyster',
            'green-polyster-with-liner',
            'yellow-polyester',
            'emi-sheliding-tape',
            'copper-tape-2',
            'tin-copper-tape',
            'esd-kapton',
            'anti-static-polyester-tape',
            'thermal-condu-pads',
            'stickymat'
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
            // Safety & Marking
            'hazardtape',
            'floor-marking-tape',
            'nastro-heavy-duty-floor-marking',
            'coloured-anti-slip-tape',
            'anti-skid',
            'anti-skid-glow-in-dark',
            'anti-slip-bathroom',
            'caution-tape',
            'barricade-tape',
            'esd-floor-marking',
            'glowindark',
            'glowindark-marking',
            'photoluminescent-film',
            // Reflective Materials
            'pvc-reflective-tape',
            'material-fr-reflective-tape-all-1',
            'silver-tc',
            'heattransfer',
            'heat-transfer-reflective-vinyl-film-tape-heat-transfer-segmented-reflective-tape',
            'grey-reflective-yarn-2-0-mm-double-side-500x500-1',
            'high-reflective-polyester',
            'hipoloyster',
            'ordinary-polyster-fabric',
            'ordinary-reflective-tc-fabric',
            'woven',
            'oxfordrefle',
            'grey-reflective-piping'
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
            'ptfe-silicone-adhesive',
            'ptfe-coated-fabric-non-adhesive-1',
            'ptfe-fiberglass-with-silicone-adhesive',
            'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner',
            'nitto-903-ul-tapes'
        ],
        seo: {
            title: "PTFE & Teflon Tape Manufacturer | High-Temp Non-Stick Tapes",
            description: "Buy high-temperature, non-stick PTFE and Teflon tapes from Tape India. Ideal for heat sealing, mold release, and industrial non-stick applications."
        }
    },
];

// This is the definitive source for all product CONTENT.
// It will be merged with SEO data from seoData.ts.
export const PRODUCTS: Omit<Product, 'seo'>[] = [
    // --- Safety Tapes ---
    { id: 'hazardtape', name: 'Hazard Warning & Safety Stripe Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/hazardtape.webp', shortDescription: 'Hazard Warning & Safety Stripe Tape by Tape India is used to mark danger areas, restricted pathways, and accident-prone zones in factories and warehouses.', category: 'safety-tapes', features: ['High-contrast colors', 'Strong PVC backing', 'Aggressive rubber adhesive'], uses: ['Marking physical hazards', 'Aisle marking'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hazardtape.webp'] },
    { id: 'floor-marking-tape', name: 'Heavy-Duty Floor Marking Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp', shortDescription: 'Designed for long-term industrial use, this floor marking tape withstands forklift pressure and traffic.', category: 'safety-tapes', features: ['Tough vinyl backing', 'Multiple colors', 'Removes cleanly'], uses: ['Warehouse aisle marking', 'Designating work cells'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING', 'ESD'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp'] },
    { id: 'coloured-anti-slip-tape', name: 'Heavy-Duty Anti-Skid & Anti-Slip Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/coloured-anti-slip-tape.webp', shortDescription: 'Features a high-grit mineral coating for strong traction in wet or oily industrial environments.', category: 'safety-tapes', features: ['High-traction surface', 'Durable adhesive', 'Water resistant'], uses: ['Stairs', 'Ramps', 'Walkways'], tags: ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/coloured-anti-slip-tape.webp'] },
    { id: 'caution-tape', name: 'Non-Adhesive Caution & Warning Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/caution%20tape.webp', shortDescription: 'Tear-resistant polyethylene tape to cordon off hazard zones and construction sites.', category: 'safety-tapes', features: ['High visibility', 'Weatherproof', 'Non-adhesive'], uses: ['Construction sites', 'Crowd control'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/caution%20tape.webp'] },
    { id: 'barricade-tape', name: 'Non-Adhesive Barricade Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/barricade%20tape.webp', shortDescription: 'Durable, weather-resistant barricade tape for blocking restricted areas.', category: 'safety-tapes', features: ['High visibility', 'Tear-resistant', 'Non-adhesive'], uses: ['Crowd control', 'Construction sites'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/barricade%20tape.webp'] },
    { id: 'tamper-proof-tape-1', name: 'Tamper-Proof Security Packing Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/tamper-proof-tape-1.webp', shortDescription: 'Security tape revealing “VOID” marks if removed, essential for high-value shipments.', category: 'safety-tapes', features: ['Visual evidence of tampering', 'Strong backing', 'Secure sealing'], uses: ['High-value goods', 'Confidential shipping'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tamper-proof-tape-1.webp'] },
    { id: 'nastro-heavy-duty-floor-marking', name: 'Nastro Heavy Duty Floor Marking Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/nastro%20heavy%20duty%20floor%20marking.webp', shortDescription: 'Premium floor marking tape for heavy forklift activity and industrial operations.', category: 'safety-tapes', features: ['Extreme durability', 'Resists heavy machinery', 'Beveled edges'], uses: ['Heavy industrial warehouses', 'Manufacturing facilities'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/nastro%20heavy%20duty%20floor%20marking.webp'] },
    { id: 'glowindark', name: 'Glow in the Dark Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/glowindark.webp', shortDescription: 'Absorbs light and emits a bright glow during power failure. Used for emergency exits and pathways.', category: 'safety-tapes', features: ['High-intensity glow', 'Durable vinyl', 'Quick charge'], uses: ['Escape routes', 'Stairways'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING', 'GLOW IN THE DARK', 'EMERGENCY VISIBILITY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark.webp'] },
    { id: 'photoluminescent-film', name: 'Photoluminescent Film', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Photoluminescent%20Film.webp', shortDescription: 'Glow film for safety signs and emergency maps. Charges under normal light.', category: 'safety-tapes', features: ['Long-lasting glow', 'Adhesive/rigid forms', 'Safety regulation compliant'], uses: ['Exit signs', 'Fire safety signage'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING', 'GLOW IN THE DARK', 'EMERGENCY VISIBILITY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Photoluminescent%20Film.webp'] },
    { id: 'anti-skid-glow-in-dark', name: 'Anti-Skid Tape with Centre Glow', image: 'https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid%20glow%20in%20dark.webp', shortDescription: 'Dual-function tape combining anti-slip traction with a glowing center strip.', category: 'safety-tapes', features: ['Anti-slip surface', 'Glow-in-the-dark center', 'Dual safety'], uses: ['Emergency stairs', 'Dark corridors'], tags: ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY', 'GLOW IN THE DARK', 'EMERGENCY VISIBILITY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid%20glow%20in%20dark.webp'] },
    { id: 'esd-floor-marking', name: 'ESD Floor Marking Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/esd%20floor%20marking.webp', shortDescription: 'Prevents static buildup and identifies ESD-safe zones in electronics manufacturing.', category: 'safety-tapes', features: ['Low static-generating', 'ESD symbol printed', 'Durable'], uses: ['EPA boundaries', 'Cleanrooms'], tags: ['ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20floor%20marking.webp'] },
    { id: 'glowindark-marking', name: 'Glow in Dark Marking Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/glowindark%20marking.webp', shortDescription: 'Marking tape that glows brightly to guide workers in low-light situations.', category: 'safety-tapes', features: ['Long-lasting afterglow', 'High visibility', 'Easy application'], uses: ['Directional marking', 'Hazard edges'], tags: ['SAFETY MARKING', 'HAZARD', 'WARNING', 'GLOW IN THE DARK', 'EMERGENCY VISIBILITY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark%20marking.webp'] },
    { id: 'anti-skid', name: 'Heavy Duty Anti-Skid Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid.webp', shortDescription: 'High-friction tape for heavy machinery areas and chemical exposure.', category: 'safety-tapes', features: ['Extra-coarse abrasive', 'Oil/water resistant', 'Aggressive adhesive'], uses: ['Ramps', 'Oily floors', 'Ladders'], tags: ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid.webp'] },
    { id: 'anti-slip-bathroom', name: 'Anti-Slip Tape for Bath and Shower', image: 'https://file.garden/aIULwzQ_QkPKQcGw/anti%20slip%20bathroom.webp', shortDescription: 'Waterproof, soft-textured anti-slip tape for wet, barefoot environments.', category: 'safety-tapes', features: ['Waterproof', 'Non-abrasive', 'Skin-friendly'], uses: ['Bathrooms', 'Pools', 'Locker rooms'], tags: ['ANTI-SLIP', 'ANTI-SKID', 'FLOOR SAFETY'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20slip%20bathroom.webp'] },

    // --- Reflective Tapes ---
    { id: 'silver-tc', name: 'Silver TC Sew-On Reflective Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp', shortDescription: 'Sew-on tape with powerful reflection for safety jackets and uniforms.', category: 'reflective-tapes', features: ['High reflectivity', 'Washable', 'Durable TC backing'], uses: ['Safety vests', 'Workwear'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'] },
    { id: 'heattransfer', name: 'Heat Transfer Reflective Film', image: 'https://file.garden/aIULwzQ_QkPKQcGw/heattransfer.webp', shortDescription: 'Heat-pressed reflective film for high-visibility uniforms.', category: 'reflective-tapes', features: ['Heat press application', 'Durable', 'High reflectivity'], uses: ['Sportswear', 'Uniforms'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/heattransfer.webp'] },
    { id: 'heat-transfer-reflective-vinyl-film-tape-heat-transfer-segmented-reflective-tape', name: 'Vinyl Heat Transfer Reflective Film', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Heat-Transfer-Reflective-Vinyl-Film-Tape-Heat-Transfer-Segmented-Reflective-Tape.webp', shortDescription: 'Flexible reflective vinyl for heat transfers onto fabrics.', category: 'reflective-tapes', features: ['Stretchable', 'Bright finish', 'Easy to weed'], uses: ['Custom logos', 'Athletic apparel'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Heat-Transfer-Reflective-Vinyl-Film-Tape-Heat-Transfer-Segmented-Reflective-Tape.webp'] },
    { id: 'pvc-reflective-tape', name: 'PVC Reflective Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp', shortDescription: 'Durable reflective tape for marking vehicles and machinery.', category: 'reflective-tapes', features: ['Microprismatic', 'Weather resistant', 'Strong adhesive'], uses: ['Trucks', 'Roadside signs'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp'] },
    { id: 'grey-reflective-yarn-2-0-mm-double-side-500x500-1', name: 'Reflective Yarn & Thread', image: 'https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-yarn-2-0-mm-double-side-500x500%20(1).webp', shortDescription: 'Reflective yarn woven into fabrics for enhanced visibility.', category: 'reflective-tapes', features: ['Woven/sewn', '360-degree reflectivity', 'Flexible'], uses: ['Sportswear', 'Accessories'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-yarn-2-0-mm-double-side-500x500%20(1).webp'] },
    { id: 'material-fr-reflective-tape-all-1', name: 'Flame Retardant Reflective Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/material-fr-reflective-tape-all%20(1).webp', shortDescription: 'Reflective tape designed for high-heat environments like firefighting.', category: 'reflective-tapes', features: ['Flame retardant', 'High heat resistance', 'Strong reflectivity'], uses: ['Firefighter gear', 'Welding apparel'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/material-fr-reflective-tape-all%20(1).webp'] },
    { id: 'high-reflective-polyester', name: 'Hi-Reflective Polyester Fabric', image: 'https://file.garden/aIULwzQ_QkPKQcGw/high%20reflective%20polyester.webp', shortDescription: 'Reflective polyester fabric for safety vests and uniforms.', category: 'reflective-tapes', features: ['Fluorescent colors', 'Durable', 'Lightweight'], uses: ['Safety vests', 'Jackets'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20reflective%20polyester.webp'] },
    { id: 'hipoloyster', name: 'Hi-Reflective TC Fabric', image: 'https://file.garden/aIULwzQ_QkPKQcGw/hipoloyster.webp', shortDescription: 'Polyester-cotton blend providing comfort and strong reflection.', category: 'reflective-tapes', features: ['Breathable', 'Fluorescent', 'Strong blend'], uses: ['Work shirts', 'Coveralls'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hipoloyster.webp'] },
    { id: 'oxfordrefle', name: 'Oxford Reflective Ribbon', image: 'https://file.garden/aIULwzQ_QkPKQcGw/oxfordrefle.webp', shortDescription: 'Durable ribbon for reflective detailing on uniforms and bags.', category: 'reflective-tapes', features: ['Strong Oxford base', 'Reflective stripe', 'Reinforcement'], uses: ['Trims', 'Bags'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/oxfordrefle.webp'] },
    { id: 'grey-reflective-piping', name: 'Reflective Piping', image: 'https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-piping.webp', shortDescription: 'Reflective piping sewn along garment edges for visibility.', category: 'reflective-tapes', features: ['Accent safety', 'Flexible', 'Easy to sew'], uses: ['Jackets', 'Backpacks'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-piping.webp'] },
    { id: 'ordinary-polyster-fabric', name: 'Ordinary Reflective Polyester Fabric', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ordinary%20polyster%20fabric.webp', shortDescription: 'Economical reflective fabric for general safety gear.', category: 'reflective-tapes', features: ['Cost-effective', '100% polyester', 'Good reflectivity'], uses: ['Promotional items', 'Vests'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ordinary%20polyster%20fabric.webp'] },
    { id: 'woven', name: 'Woven Reflective Ribbon', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Gemini_Generated_Image_lutclolutclolutc.webp.', shortDescription: 'Glass-bead enhanced reflective ribbon for uniforms.', category: 'reflective-tapes', features: ['Integrated reflectivity', 'Soft', 'High-end look'], uses: ['Branded apparel', 'Lanyards'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Gemini_Generated_Image_lutclolutclolutc.webp'] },
    { id: 'ordinary-reflective-tc-fabric', name: 'Ordinary Reflective TC Fabric', image: 'https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp', shortDescription: 'Cost-effective TC fabric for basic reflective clothing.', category: 'reflective-tapes', features: ['Economical', 'Durable TC', 'General workwear'], uses: ['Safety vests', 'Uniforms'], tags: ['REFLECTIVE', 'HIGH VISIBILITY', 'PPE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'] },

    // --- Double Sided Tapes ---
    { id: '3m-foam-foam-tape', name: '3M Double-Sided Foam Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20Tape%20with%20Liner.webp', shortDescription: 'Premium bonding tape for automotive trims and electronics.', category: 'double-sided-tapes', features: ['Acrylic foam core', 'High shear strength', 'Weather resistant'], uses: ['Automotive', 'Signage'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20Tape%20with%20Liner.webp'] },
    { id: 'tissue-tape', name: 'Double-Sided Tissue Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/tissue%20tape.webp', shortDescription: 'ciThin, flexible tape for laminating paper, film, and textiles.', category: 'double-sided-tapes', features: ['Hand-tearable', 'Good adhesion', 'Rubber/Acrylic adhesive'], uses: ['Splicing', 'Mounting'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tissue%20tape.webp'] },
    { id: 'polyester-double-side', name: 'Polyester Double Sided Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/polyester%20double%20side.webp', shortDescription: 'PET-based tape with high tensile strength and heat resistance.', category: 'double-sided-tapes', features: ['High tensile strength', 'Dimensionally stable', 'Temp resistant'], uses: ['Laminating', 'Splicing'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyester%20double%20side.webp'] },
    { id: 'vhb-tape', name: 'VHB (Very High Bond) Double-Sided Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/vhb%20tape.webp', shortDescription: 'High-strength acrylic foam tape replacing screws and rivets.', category: 'double-sided-tapes', features: ['Viscoelastic foam', 'Permanent seal', 'Weather resistant'], uses: ['Panel bonding', 'Automotive'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/vhb%20tape.webp'] },
    { id: 'lohmann', name: 'Lohmann DuploFLEX Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/lohman.webp', shortDescription: 'Specialized flexographic printing mounting tape.', category: 'double-sided-tapes', features: ['Optimized density', 'Excellent print quality', 'Clean removal'], uses: ['Plate mounting', 'Printing'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/lohman.webp'] },
    { id: 'pe-foam-tape', name: 'PE Foam Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/pe%20foam%20tape.webp', shortDescription: 'Cushioning, sealing, and vibration damping foam tape.', category: 'double-sided-tapes', features: ['Gap-filling', 'Seals moisture', 'Various thicknesses'], uses: ['Mounting', 'Gasketing'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING', 'SURFACE PROTECTION', 'COATING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pe%20foam%20tape.webp'] },
    { id: 'pet-double-sided-tape', name: 'PET Double-Sided Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/pet%20double%20sided%20tape.webp', shortDescription: 'High-strength tape for splicing and electronic components.', category: 'double-sided-tapes', features: ['Optically clear', 'High tack', 'Stable'], uses: ['Mounting', 'Laminating'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pet%20double%20sided%20tape.webp'] },
    { id: 'transfer-tape', name: 'Transfer Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/transfer%20tape.webp', shortDescription: 'Carrier-less adhesive for precision lamination.', category: 'double-sided-tapes', features: ['Unsupported film', 'Conformable', 'ciThin'], uses: ['Graphic attachment', 'Laminating'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/transfer%20tape.webp'] },
    { id: 'acrylic-double-sided-tape-1', name: 'Acrylic Double Sided Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Acrylic%20Double%20Sided%20Tape%20(1).webp', shortDescription: 'Clear acrylic tape with superior adhesion to metals and glass.', category: 'double-sided-tapes', features: ['Transparent', 'UV resistant', 'Invisible bond'], uses: ['Glass bonding', 'Signage'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Acrylic%20Double%20Sided%20Tape%20(1).webp'] },
    { id: 'double-sided-thermal-tape', name: 'Double-Sided Thermal Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20thermal%20tape.webp', shortDescription: 'Thermally conductive tape for heat sinks and LEDs.', category: 'double-sided-tapes', features: ['Thermal conductivity', 'Dielectric strength', 'Heat transfer'], uses: ['Heat sinks', 'LEDs'], tags: ['THERMAL MANAGEMENT', 'HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20thermal%20tape.webp'] },
    { id: 'double-sided-scrim-tape', name: 'Double-Sided Scrim Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Double-Sided%20Scrim%20Tape.webp', shortDescription: 'Reinforced scrim mesh for superior shear strength.', category: 'double-sided-tapes', features: ['Fiberglass reinforcement', 'High shear', 'Aggressive adhesive'], uses: ['Flooring', 'Insulation'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Double-Sided%20Scrim%20Tape.webp'] },
    { id: 'eva-foam-tape', name: 'EVA Foam Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/eva%20foam%20tape.webp', shortDescription: 'Shock absorption and cushioning foam tape.', category: 'double-sided-tapes', features: ['Cost-effective', 'Cushioning', 'Adheres well'], uses: ['Mounting', 'Weatherstripping'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/eva%20foam%20tape.webp'] },
    { id: 'spacer-tape', name: 'Spacer Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/spacer%20tape.webp', shortDescription: 'Structural glazing tape for maintaining spacing.', category: 'double-sided-tapes', features: ['Open-cell foam', 'Compatible with silicone', 'Precise depth'], uses: ['Glazing', 'Curtain walls'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/spacer%20tape.webp'] },
    { id: 'silicone-tape', name: 'Nano Magic (Silicone) Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape.webp', shortDescription: 'Reusable, washable gel tape for temporary mounting.', category: 'double-sided-tapes', features: ['Washable', 'Reusable', 'No residue'], uses: ['Temporary mounting', 'Organizing'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape.webp'] },
    { id: 'hot-melt-tissue-tape', name: 'Hot Melt Tissue Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/hot%20melt%20tissue%20tape.webp', shortDescription: 'High-tack tape for foam and textile bonding.', category: 'double-sided-tapes', features: ['High tack', 'Rough surface adhesion', 'Bonds plastics'], uses: ['Bag sealing', 'Foam bonding'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hot%20melt%20tissue%20tape.webp'] },
    { id: 'double-coated-cloth-tape-581', name: 'Double Sided Cloth Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/double-coated-cloth-tape-581.webp', shortDescription: 'Strong cloth backing for rough surfaces and carpets.', category: 'double-sided-tapes', features: ['Cloth carrier', 'High adhesion', 'Conformable'], uses: ['Carpet installation', 'Event flooring'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double-coated-cloth-tape-581.webp'] },
    { id: 'aacrylic-gel-tape-1', name: 'Acrylic Gel Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/aAcrylic%20Gel%20Tape%20(1).webp', shortDescription: 'Strong transparent gel tape for permanent bonding.', category: 'double-sided-tapes', features: ['Optically clear', 'Waterproof', 'Replaces screws'], uses: ['Signage', 'Glass bonding'], tags: ['PRINT', 'LABEL', 'GRAPHIC MOUNTING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aAcrylic%20Gel%20Tape%20(1).webp'] },
    { id: 'xlpe-foam-tapes', name: 'XLPE Foam Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/XLPE-FOAM-TAPES.webp', shortDescription: 'Cross-linked polyethylene foam for sealing and insulation.', category: 'double-sided-tapes', features: ['Closed-cell', 'Insulation', 'Chemical resistant'], uses: ['HVAC', 'Glazing'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/XLPE-FOAM-TAPES.webp'] },

    // --- Specialty Tapes ---
    { id: 'masking-tape', name: 'Masking Tape (Standard & Fine Line)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/masking%20tape.webp', shortDescription: 'Industrial masking tape for paint lines and general use.', category: 'specialty-tapes', features: ['Crepe paper', 'Clean removal', 'Tearable'], uses: ['Painting', 'Bundling'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/masking%20tape.webp'] },
    { id: 'bopp-tape', name: 'BOPP Packing Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/bopp%20tape.webp', shortDescription: 'Strong carton-sealing tape for packaging.', category: 'specialty-tapes', features: ['Polypropylene', 'Strong adhesion', 'Versatile'], uses: ['Carton sealing', 'Shipping'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/bopp%20tape.webp'] },
    { id: 'aluminum-foil-2-tape', name: 'High-Performance Aluminium Foil Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/aluminum%20foil%20%202%20tape.webp', shortDescription: 'Reflects heat and seals moisture. HVAC and shielding.', category: 'specialty-tapes', features: ['Thermally conductive', 'Reflective', 'Moisture resistant'], uses: ['HVAC', 'EMI shielding'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION', 'EMI SHIELDING', 'EMI', 'RFI'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminum%20foil%20%202%20tape.webp'] },
    { id: 'kapton-tape', name: 'High-Temperature Kapton Polyimide Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp', shortDescription: 'Extreme temperature resistance for electronics.', category: 'specialty-tapes', features: ['260°C resistance', 'Dielectric strength', 'Clean removal'], uses: ['PCB masking', 'Insulation'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE', 'ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp'] },
    { id: 'duct-tape', name: 'Heavy-Duty Cloth Duct Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/duct%20tape.webp', shortDescription: 'Reinforced cloth tape for repairs and bundling.', category: 'specialty-tapes', features: ['Waterproof', 'Strong adhesive', 'Tearable'], uses: ['Repairs', 'Sealing'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/duct%20tape.webp'] },
    { id: 'high-sealing-tape', name: 'High Temperature Sealing Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/high%20sealing%20tape.webp', shortDescription: 'Sealing tape for ovens and high-temp ducts.', category: 'specialty-tapes', features: ['Heat resistant', 'Chemical resistant', 'Strong bond'], uses: ['Ovens', 'Exhausts'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20sealing%20tape.webp'] },
    { id: 'paper-tape', name: 'Paper Tape (Standard & Kraft)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp', shortDescription: 'Eco-friendly paper tape for packaging.', category: 'specialty-tapes', features: ['Recyclable', 'Good adhesion', 'Kraft backing'], uses: ['Packaging', 'Framing'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp'] },
    { id: 'silicone-tape-2', name: 'Silicone Tape (Self-Fusing)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape%202.webp', shortDescription: 'Self-fusing silicone for repairs and insulation.', category: 'specialty-tapes', features: ['Self-fusing', 'Waterproof', 'Heat resistant'], uses: ['Pipe repair', 'Insulation'], tags: ['PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape%202.webp'] },
    { id: 'polyester-tape', name: 'Single-Sided Polyester Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp', shortDescription: 'High-dielectric tape for electrical insulation.', category: 'specialty-tapes', features: ['Dielectric strength', 'Temp resistant', 'Thin'], uses: ['Splicing', 'Insulation'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp'] },
    { id: 'pvc-pipe-tape-1', name: 'PVC Pipe Wrapping Tape (Adhesive & Non-Adhesive)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/pvc%20pipe%20tape%20(1).webp', shortDescription: 'Corrosion protection for pipes.', category: 'specialty-tapes', features: ['Corrosion resistant', 'Flexible', 'Moisture proof'], uses: ['Pipe wrapping', 'Conduits'], tags: ['PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20pipe%20tape%20(1).webp'] },
    { id: 'bag-sealing-tape', name: 'Bag Sealing Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/bag%20sealing%20tape.webp', shortDescription: 'Tape for sealing polybags.', category: 'specialty-tapes', features: ['Fast application', 'Secure seal', 'Color coding'], uses: ['Bag sealing', 'Retail'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/bag%20sealing%20tape.webp'] },
    { id: 'acetate-cloth-tape-white-19mm-x-66m-crop', name: 'Acetate Cloth Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/acetate-cloth-tape-white-19mm-x-66m-crop.webp', shortDescription: 'Flexible cloth tape for coil winding.', category: 'specialty-tapes', features: ['Conformable', 'Insulating', 'Printable'], uses: ['Coil wrapping', 'Harnessing'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/acetate-cloth-tape-white-19mm-x-66m-crop.webp'] },
    { id: 'stickymat', name: 'Sticky Mat (Cleanroom)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp', shortDescription: 'Dust-control mat for cleanrooms.', category: 'specialty-tapes', features: ['Peel-off layers', 'Traps dust', 'Hygienic'], uses: ['Cleanrooms', 'Labs'], tags: ['ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp'] },
    { id: 'fine-line-masking-tape', name: 'Masking Tape (Standard & Fine Line)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/fine%20line%20masking%20tape.webp', shortDescription: 'Precision masking for sharp paint lines.', category: 'specialty-tapes', features: ['Sharp lines', 'Flexible', 'No bleed'], uses: ['Automotive', 'Painting'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fine%20line%20masking%20tape.webp'] },
    { id: 'mica-tape', name: 'Mica Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/mica%20tape.webp', shortDescription: 'Fire-resistant electrical insulation.', category: 'specialty-tapes', features: ['Fire resistance', 'High dielectric', 'Extreme heat'], uses: ['Cables', 'Motors'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/mica%20tape.webp'] },
    { id: 'green-polyster', name: 'Green Polyester Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/green%20polyester.webp', shortDescription: 'High-temp masking for powder coating.', category: 'specialty-tapes', features: ['204°C resistance', 'Clean removal', 'Chemical resistant'], uses: ['Powder coating', 'Anodizing'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH', 'HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyester.webp'] },
    { id: 'green-polyster-with-liner', name: 'Green Polyester Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster%20with%20liner.webp', shortDescription: 'Green polyester with liner for die-cutting.', category: 'specialty-tapes', features: ['Liner backed', 'Precision', 'High temp'], uses: ['Die-cutting', 'Masking'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH', 'HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster%20with%20liner.webp'] },
    { id: 'thermal-condu-pads', name: 'Thermal Conductive Pads', image: 'https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp', shortDescription: 'Heat transfer pads for electronics.', category: 'specialty-tapes', features: ['Conductive', 'Gap filling', 'Soft'], uses: ['Heat sinks', 'LEDs'], tags: ['THERMAL MANAGEMENT', 'HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp'] },
    { id: 'surface-protection-tape', name: 'PE Surface Protection Film', image: 'https://file.garden/aIULwzQ_QkPKQcGw/surface%20protection%20tape.webp', shortDescription: 'Protective film for surfaces.', category: 'specialty-tapes', features: ['Scratch protection', 'Clean removal', 'Various tack'], uses: ['Metals', 'Glass'], tags: ['SURFACE PROTECTION', 'COATING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/surface%20protection%20tape.webp'] },
    { id: 'green-powder-coating-tape-500x500-1', name: 'Powder Coated Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/green-powder-coating-tape-500x500%20(1).webp', shortDescription: 'Specialized tape for powder coating processes.', category: 'specialty-tapes', features: ['High temp', 'Clean lines', 'Durable'], uses: ['Powder coating'], tags: ['SURFACE PROTECTION', 'COATING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green-powder-coating-tape-500x500%20(1).webp'] },
    { id: 'lamination-tape', name: 'Lamination Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/lamination%20tape.webp', shortDescription: 'Tape for lamination processes.', category: 'specialty-tapes', features: ['Clear', 'Bonding', 'Protective'], uses: ['Lamination'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/lamination%20tape.webp'] },
    { id: 'foil-scrim-kraft-tape', name: 'Aluminium Foil Scrim Kraft Tape (FSK)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/foil-scrim-kraft-tape.webp', shortDescription: 'Reinforced foil tape for HVAC insulation.', category: 'specialty-tapes', features: ['Reinforced', 'Vapor barrier', 'Strong'], uses: ['HVAC', 'Insulation'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/foil-scrim-kraft-tape.webp'] },
    { id: 'aluminium-pet', name: 'Aluminium PET Tape (Alupet)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20pet.webp', shortDescription: 'Aluminium-PET laminate for shielding.', category: 'specialty-tapes', features: ['Strong', 'Reflective', 'Shielding'], uses: ['Cable shielding', 'HVAC'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20pet.webp'] },
    { id: 'butyl', name: 'Aluminium Butyl Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/butyl.webp', shortDescription: 'Waterproof sealing tape.', category: 'specialty-tapes', features: ['Waterproof', 'Instant bond', 'UV resistant'], uses: ['Roofing', 'Sealing'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION', 'PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/butyl.webp'] },
    { id: 'fiberglass-tape', name: 'Fiber Glass Cloth Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/fiberglass%20tape.webp', shortDescription: 'High-strength fiberglass tape.', category: 'specialty-tapes', features: ['High temp', 'Strong', 'Abrasion resistant'], uses: ['Insulation', 'Reinforcement'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fiberglass%20tape.webp'] },
    { id: 'nrm-foam-tape', name: 'NBR Foam Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/nrm%20foam%20tape.webp', shortDescription: 'Oil-resistant foam tape.', category: 'specialty-tapes', features: ['Oil resistant', 'Sealing', 'Durable'], uses: ['Gasketing', 'HVAC'], tags: ['FOAM', 'SPACER', 'VIBRATION DAMPING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/nrm%20foam%20tape.webp'] },
    { id: 'air-vent-tape', name: 'Air Vent Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/air%20vent%20tape.webp', shortDescription: 'Breathable tape for polycarbonate.', category: 'specialty-tapes', features: ['Ventilation', 'Dust proof', 'Weather resistant'], uses: ['Polycarbonate', 'Enclosures'], tags: ['HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/air%20vent%20tape.webp'] },
    { id: 'pink-rayon', name: 'Pink Rayon Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/pink%20rayon.webp', shortDescription: 'Rayon tape for coil holding.', category: 'specialty-tapes', features: ['Strong', 'Low stretch', 'Insulating'], uses: ['Coils', 'Motors'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pink%20rayon.webp'] },
    { id: 'yellow-polyester', name: 'Yellow Polyester Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp', shortDescription: 'Yellow polyester masking/insulation tape.', category: 'specialty-tapes', features: ['Visible', 'Temp resistant', 'Thin'], uses: ['Masking', 'Insulation'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp'] },
    { id: 'aluminium-fr-grade', name: 'Aluminium Glass Tape (FR Grade)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20fr%20grade.webp', shortDescription: 'Flame retardant aluminium-glass tape.', category: 'specialty-tapes', features: ['FR grade', 'High temp', 'Strong'], uses: ['Insulation', 'Safety'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE', 'HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20fr%20grade.webp'] },
    { id: 'red-pvc-non-adhesive-tape', name: 'PVC Pipe Wrapping Tape (Adhesive & Non-Adhesive)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/Red-PVC-Non-Adhesive-Tape.webp', shortDescription: 'Non-adhesive PVC wrapping tape.', category: 'specialty-tapes', features: ['Non-adhesive', 'Protective', 'Flexible'], uses: ['Wrapping', 'Harnessing'], tags: ['PIPE SEALING', 'LEAK REPAIR', 'WATERPROOF'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Red-PVC-Non-Adhesive-Tape.webp'] },
    { id: 'glass-cloth-tape', name: 'Glass Cloth Tape (Standard & FR Grade)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/glass%20cloth%20tape.webp', shortDescription: 'High-temp glass cloth tape.', category: 'specialty-tapes', features: ['High temp', 'Strong', 'Insulating'], uses: ['Insulation', 'Masking'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE', 'HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glass%20cloth%20tape.webp'] },
    { id: 'fr-grade-glass-cloth-tape', name: 'Glass Cloth Tape (Standard & FR Grade)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/fr-grade-glass-cloth-tape.webp', shortDescription: 'Flame retardant glass cloth tape.', category: 'specialty-tapes', features: ['FR grade', 'High temp', 'Durable'], uses: ['Aerospace', 'Insulation'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE', 'HVAC', 'DUCT SEALING', 'THERMAL INSULATION'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fr-grade-glass-cloth-tape.webp'] },
    { id: 'filament-tape', name: 'Filament Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/filament%20tape.webp', shortDescription: 'Reinforced strapping tape.', category: 'specialty-tapes', features: ['High tensile', 'Reinforced', 'Secure'], uses: ['Bundling', 'Strapping'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/filament%20tape.webp'] },
    { id: 'ez-application-tape', name: 'EZ Application Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ez-application-tape.webp', shortDescription: 'Application tape for vinyl.', category: 'specialty-tapes', features: ['Easy apply', 'Transparent', 'Medium tack'], uses: ['Vinyl transfer', 'Graphics'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ez-application-tape.webp'] },
    { id: 'kraft-paper-tape', name: 'Kraft Paper Tape (Reinforced & Water Activated)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp', shortDescription: 'Kraft paper packaging tape.', category: 'specialty-tapes', features: ['Eco-friendly', 'Strong', 'Printable'], uses: ['Packaging', 'Sealing'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp'] },
    { id: 'reinforced-paper-tapes1', name: 'Kraft Paper Tape (Reinforced & Water Activated)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/reinforced-paper-tapes1.webp', shortDescription: 'Reinforced kraft paper tape.', category: 'specialty-tapes', features: ['Reinforced', 'High strength', 'Secure'], uses: ['Heavy packaging'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/reinforced-paper-tapes1.webp'] },
    { id: 'water-activated-kraft-tape', name: 'Kraft Paper Tape (Reinforced & Water Activated)', image: 'https://file.garden/aIULwzQ_QkPKQcGw/water%20activated%20kraft%20tape.webp', shortDescription: 'Water-activated gummed tape.', category: 'specialty-tapes', features: ['Tamper evident', 'Eco-friendly', 'Strong bond'], uses: ['Secure shipping'], tags: ['PACKAGING', 'SEALING'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/water%20activated%20kraft%20tape.webp'] },
    { id: 'cloth-adhesive-tape-500x500-1', name: 'Adhesive Cloth Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/cloth-adhesive-tape-500x500%20(1).webp', shortDescription: 'General purpose cloth tape.', category: 'specialty-tapes', features: ['Durable', 'Strong', 'Versatile'], uses: ['Bundling', 'Repair'], tags: ['GENERAL INDUSTRIAL', 'MASKING', 'CLOTH'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/cloth-adhesive-tape-500x500%20(1).webp'] },

    // --- Teflon & PTFE Tapes ---
    { id: 'ptfe-coated-fabric-non-adhesive-1', name: 'PTFE Coated Fiberglass Fabric', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20coated%20fabric%20non%20adhesive%20(1).webp', shortDescription: 'Non-adhesive PTFE fabric.', category: 'teflon-ptfe-tapes', features: ['Non-stick', 'High temp', 'Durable'], uses: ['Release sheets', 'Conveyors'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20coated%20fabric%20non%20adhesive%20(1).webp'] },
    { id: 'ptfe-silicone-adhesive', name: 'PTFE Coated Tape with Silicone Adhesive', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp', shortDescription: 'PTFE tape with silicone adhesive.', category: 'teflon-ptfe-tapes', features: ['Non-stick', 'High temp', 'Silicone adhesive'], uses: ['Heat sealing', 'Release'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp'] },
    { id: 'ptfe-fiberglass-with-silicone-adhesive', name: 'PTFE Coated Fiberglass Fabric with Silicone Adhesive', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20fiberglass%20with%20silicone%20adhesive.webp', shortDescription: 'Reinforced PTFE tape.', category: 'teflon-ptfe-tapes', features: ['Reinforced', 'High temp', 'Durable'], uses: ['Packaging', 'Release'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20fiberglass%20with%20silicone%20adhesive.webp'] },
    { id: 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner', name: 'PTFE Coated Fiberglass Fabric with Liner', image: 'https://file.garden/aIULwzQ_QkPKQcGw/PTFE%20Coated%20Fiberglass%20Fabric%20with%20Silicone%20Adhesive%20%26%20Liner.webp', shortDescription: 'PTFE tape with liner.', category: 'teflon-ptfe-tapes', features: ['Liner', 'Die-cuttable', 'High temp'], uses: ['Precise applications'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/PTFE%20Coated%20Fiberglass%20Fabric%20with%20Silicone%20Adhesive%20%26%20Liner.webp'] },

    // --- Antistatic & ESD Tapes ---
    { id: 'polyimide-tape', name: 'High-Temperature Kapton Polyimide Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp', shortDescription: 'Polyimide tape for high temp applications.', category: 'antistatic-esd-tapes', features: ['High temp', 'Dielectric', 'Clean removal'], uses: ['Masking', 'Insulation'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp'] },
    { id: 'emi-sheliding-tape', name: 'EMI Shielding Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp', shortDescription: 'Conductive shielding tape.', category: 'antistatic-esd-tapes', features: ['Conductive', 'Shielding', 'Flexible'], uses: ['EMI shielding', 'Grounding'], tags: ['EMI SHIELDING', 'EMI', 'RFI'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp'] },
    { id: 'copper-tape-2', name: 'Conductive Copper Foil Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp', shortDescription: 'Copper foil for shielding.', category: 'antistatic-esd-tapes', features: ['Copper', 'Conductive', 'Solderable'], uses: ['Shielding', 'Circuits'], tags: ['EMI SHIELDING', 'EMI', 'RFI'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp'] },
    { id: 'conductive-grind-tape', name: 'ESD Conductive Grid Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/conductive%20grind%20tape.webp', shortDescription: 'Grid tape for ESD protection.', category: 'antistatic-esd-tapes', features: ['Grid pattern', 'Static dissipative', 'Transparent'], uses: ['ESD packaging'], tags: ['EMI SHIELDING', 'EMI', 'RFI', 'ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/conductive%20grind%20tape.webp'] },
    { id: 'esd-kapton', name: 'ESD Kapton Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp', shortDescription: 'ESD safe polyimide tape.', category: 'antistatic-esd-tapes', features: ['ESD safe', 'High temp', 'Polyimide'], uses: ['PCB masking', 'Electronics'], tags: ['EMI SHIELDING', 'EMI', 'RFI', 'ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp'] },
    { id: 'anti-static-polyester-tape', name: 'Anti-Static Polyester Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/anti%20static%20polyester%20tape.webp', shortDescription: 'Antistatic tape for general use.', category: 'antistatic-esd-tapes', features: ['Antistatic', 'Polyester', 'Clean'], uses: ['Packing', 'Cleanrooms'], tags: ['EMI SHIELDING', 'EMI', 'RFI', 'ESD', 'ANTI-STATIC', 'STATIC CONTROL'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20static%20polyester%20tape.webp'] },
    { id: 'double-sided-polyimide-tapes-1', name: 'Polyimide Double-Sided Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/double-sided-polyimide-tapes-1.webp', shortDescription: 'Double sided high temp tape.', category: 'antistatic-esd-tapes', features: ['Double sided', 'High temp', 'Strong'], uses: ['Bonding', 'Mounting'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double-sided-polyimide-tapes-1.webp'] },
    { id: 'polyimide-film-tape', name: 'Polyimide Film Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/polyimide%20flim%20tape.webp', shortDescription: 'Polyimide film for insulation.', category: 'antistatic-esd-tapes', features: ['Insulation', 'High temp', 'Chemical resistant'], uses: ['Electrical', 'Masking'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyimide%20flim%20tape.webp'] },
    { id: 'tin-copper-tape', name: 'Tin-Plated Copper Tape', image: 'https://file.garden/aIULwzQ_QkPKQcGw/tin%20copper%20tape.webp', shortDescription: 'Tinned copper for corrosion resistance.', category: 'antistatic-esd-tapes', features: ['Tin plated', 'Conductive', 'Corrosion resistant'], uses: ['Shielding', 'Grounding'], tags: ['EMI SHIELDING', 'EMI', 'RFI'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tin%20copper%20tape.webp'] },
    { id: 'nitto-903-ul-tapes', name: 'Nitto 903 UL Tapes', image: 'https://file.garden/aIULwzQ_QkPKQcGw/nitto-903.webp', shortDescription: 'Nitto 903 UL is a premium PTFE Teflon tape.', category: 'specialty-tapes', features: ['High temp', 'Non-stick', 'Low friction'], uses: ['Heat sealing', 'Release'], tags: ['HEAT RESISTANT', 'HIGH TEMPERATURE'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/nitto-903.webp'], industries: ['ptfe-teflon-industry'] },
];
