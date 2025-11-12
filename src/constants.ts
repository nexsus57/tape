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
        name: 'Print & Signage',
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

// This is the definitive source for all product CONTENT.
// It will be merged with SEO data from seoData.ts.
export const PRODUCTS: Omit<Product, 'seo'>[] = [
    // --- Safety Tapes ---
    { id: 'hazard-tape', name: 'Hazard Warning & Safety Stripe Tape', shortDescription: 'Durable PVC tape for marking physical hazards and safety zones in industrial environments.', category: 'safety-tapes', features: ['High-contrast colors (Black/Yellow, Red/White)', 'Strong PVC backing for durability', 'Aggressive rubber adhesive for strong bond', 'Resistant to abrasion, moisture, and wear'], uses: ['Marking physical hazards', 'Aisle marking in warehouses', 'Indicating safety equipment locations', 'Construction site warnings'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hazardtape.webp'] },
    { id: 'floor-marking-tape', name: 'Heavy-Duty Floor Marking Tape', shortDescription: 'High-quality vinyl tape for aisle marking, workflow organization, and safety warnings in factories.', category: 'safety-tapes', features: ['Tough vinyl backing resists heavy traffic', 'Available in multiple solid colors', 'Removes cleanly without residue', 'Easy to apply'], uses: ['Warehouse aisle marking', 'Designating work cells', 'Social distancing markers', 'Safety equipment zones'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp'] },
    { id: 'anti-skid-tape', name: 'Heavy-Duty Anti-Skid & Anti-Slip Tape', shortDescription: 'Prevent slips and falls with our abrasive anti-slip tapes, perfect for stairs, ramps, and industrial floors.', category: 'safety-tapes', features: ['High-traction mineral-coated surface', 'Durable and long-lasting adhesive', 'Water and chemical resistant', 'Suitable for indoor and outdoor use'], uses: ['Stairs and steps', 'Ramps and walkways', 'Loading docks', 'Wet floor areas'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/coloured-anti-slip-tape.webp'] },
    { id: 'caution-tape', name: 'Non-Adhesive Caution & Warning Tape', shortDescription: 'High-visibility, non-adhesive tape for cordoning off restricted areas and communicating warnings.', category: 'safety-tapes', features: ['Bright, fade-resistant colors', 'Durable polyethylene construction', 'Weatherproof and tear-resistant', 'Lightweight and easy to use'], uses: ['Construction sites', 'Hazardous material spills', 'Crime scenes', 'Event crowd control'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/caution%20tape.webp'] },
    { id: 'barricade-tape', name: 'Non-Adhesive Barricade Tape', shortDescription: 'Lightweight and economical tape for marking boundaries and restricted areas.', category: 'safety-tapes', features: ['High visibility', 'Tear-resistant polyethylene', 'Non-adhesive for easy removal'], uses: ['Crowd control', 'Construction sites', 'Law enforcement'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/barricade%20tape.webp'] },
    { id: 'tamper-proof-security-packing-tape', name: 'Tamper-Proof Security Packing Tape', shortDescription: 'High-security packaging tape that reveals a "VOID" message when removed.', category: 'safety-tapes', features: ['Provides visual evidence of tampering', 'Strong polyester backing', 'Aggressive adhesive for secure sealing'], uses: ['Sealing high-value goods', 'Pharmaceutical packaging', 'Electronics shipping'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tamper-proof-tape-1.webp'] },
    { id: 'nastro-heavy-duty-floor-marking-tape', name: 'Nastro Heavy Duty Floor Marking Tape', shortDescription: 'Premium grade, extra-thick floor marking tape for high-traffic industrial areas.', category: 'safety-tapes', features: ['Laminated for extreme durability', 'Resists forklifts and heavy machinery', 'Beveled edges to prevent lifting'], uses: ['Heavy industrial warehouses', 'Manufacturing facilities', 'Logistics centers'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/nastro%20heavy%20duty%20floor%20marking.webp'] },
    { id: 'glow-in-the-dark-tape', name: 'Glow in the Dark Tape', shortDescription: 'Photoluminescent tape that glows in the dark after being charged by light, for emergency exit marking.', category: 'safety-tapes', features: ['High-intensity glow', 'Charges quickly from any light source', 'Durable vinyl construction'], uses: ['Marking escape routes', 'Stairways and handrails', 'Light switch surrounds'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark.webp'] },
    { id: 'photoluminescent-film', name: 'Photoluminescent Film', shortDescription: 'High-grade photoluminescent vinyl film for creating safety signs and markings.', category: 'safety-tapes', features: ['Long-lasting glow properties', 'Available in adhesive and rigid forms', 'Meets safety regulations'], uses: ['Exit signs', 'Fire safety signage', 'Marine safety applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Photoluminescent%20Film.webp'] },
    { id: 'anti-skid-tape-with-centre-glow', name: 'Anti-Skid Tape with Centre Glow', shortDescription: 'Combines high-traction anti-slip surface with a central photoluminescent strip for visibility in darkness.', category: 'safety-tapes', features: ['Dual-purpose safety', 'Mineral-coated anti-slip surface', 'Bright glow-in-the-dark center line'], uses: ['Emergency exit stairs', 'Dark corridors and walkways', 'Industrial platforms'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid%20glow%20in%20dark.webp'] },
    { id: 'esd-floor-marking-tape', name: 'ESD Floor Marking Tape', shortDescription: 'Specifically designed for marking floors in Electrostatic Protected Areas (EPAs).', category: 'safety-tapes', features: ['Low static-generating properties', 'Clear ESD symbol printed', 'Durable for foot traffic'], uses: ['Defining EPA boundaries', 'Marking walkways in electronics labs', 'Cleanroom applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20floor%20marking.webp'] },
    { id: 'glow-in-dark-marking-tapes', name: 'Glow in Dark Marking Tapes', shortDescription: 'Versatile photoluminescent tapes for various safety and decorative marking applications.', category: 'safety-tapes', features: ['Available in various widths', 'Easy to apply', 'Long-lasting afterglow'], uses: ['Directional marking', 'Stage and theater marking', 'Home safety'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark%20marking.webp'] },
    { id: 'heavy-duty-anti-skid-tape', name: 'Heavy Duty Anti-Skid Tape', shortDescription: 'Our toughest anti-slip tape with large grit particles for extreme industrial and outdoor environments.', category: 'safety-tapes', features: ['Extra-coarse abrasive surface', 'Resists oil, water, and heavy wear', 'Aggressive adhesive for rough surfaces'], uses: ['Offshore oil rigs', 'Manufacturing plants', 'Construction vehicles'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid.webp'] },
    { id: 'anti-slip-tape-for-bath-and-shower', name: 'Anti-Slip Tape for Bath and Shower', shortDescription: 'Provides a safe, non-abrasive, comfortable grip in wet areas like bathrooms and showers.', category: 'safety-tapes', features: ['Waterproof and mold-resistant', 'Soft-textured, non-abrasive surface', 'Clear design blends with decor'], uses: ['Bathtubs and shower floors', 'Around swimming pools', 'Locker rooms'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20slip%20bathroom.webp'] },

    // --- Reflective Tapes ---
    { id: 'silver-tc-reflective-tape', name: 'Silver TC Sew-On Reflective Tape', shortDescription: 'High-quality silver TC tape for sewing onto safety vests and workwear to enhance visibility.', category: 'reflective-tapes', features: ['High reflectivity (EN 20471 compliant)', 'Durable TC (Terylene/Cotton) backing', 'Washable and long-lasting', 'Easy to sew'], uses: ['Safety vests', 'Work jackets and pants', 'Firefighter uniforms', 'Jogging and cycling gear'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'] },
    { id: 'heat-transfer-reflective-tape', name: 'Heat Transfer Reflective Film', shortDescription: 'Iron-on reflective material for safety garments, providing high visibility after application.', category: 'reflective-tapes', features: ['Applies with heat press or iron', 'Excellent reflectivity', 'Durable through washing'], uses: ['T-shirts and sportswear', 'Work uniforms', 'Caps and bags'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/heattransfer.webp'] },
    { id: 'vinyl-heat-transfer-reflective-film', name: 'Vinyl Heat Transfer Reflective Film', shortDescription: 'Flexible, plotter-cuttable reflective vinyl for custom designs on textiles.', category: 'reflective-tapes', features: ['Stretchable and flexible', 'Easy to weed and apply', 'Bright reflective finish'], uses: ['Custom logos on sportswear', 'Athletic apparel', 'Fashion garments'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Heat-Transfer-Reflective-Vinyl-Film-Tape-Heat-Transfer-Segmented-Reflective-Tape.webp'] },
    { id: 'pvc-reflective-tape', name: 'PVC Reflective Tape', shortDescription: 'Durable and weatherproof PVC reflective tape with an aggressive adhesive for vehicles and outdoor signage.', category: 'reflective-tapes', features: ['Microprismatic technology for high brightness', 'Weather and solvent resistant', 'Strong adhesive backing'], uses: ['Trucks and trailers', 'Roadside signs', 'Bollards and barriers'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp'] },
    { id: 'reflective-yarn-thread', name: 'Reflective Yarn & Thread', shortDescription: 'Reflective thread for weaving, knitting, or embroidering into textiles for integrated visibility.', category: 'reflective-tapes', features: ['Can be woven or sewn', 'Provides 360-degree reflectivity', 'Soft and flexible'], uses: ['Sportswear', 'Shoelaces', 'Hats and gloves'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-yarn-2-0-mm-double-side-500x500%20(1).webp'] },
    { id: 'flame-retardant-reflective-tape', name: 'Flame Retardant Reflective Tape', shortDescription: 'Specialized reflective tape designed for firefighter uniforms and industrial workwear in high-heat environments.', category: 'reflective-tapes', features: ['Meets flame retardant standards (e.g., NFPA)', 'Aramid fiber backing', 'High heat resistance'], uses: ['Firefighter turnout gear', 'Welding apparel', 'Oil and gas industry workwear'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/material-fr-reflective-tape-all%20(1).webp'] },
    { id: 'hi-reflective-polyester-fabric', name: 'Hi-Reflective Polyester Fabric', shortDescription: 'High-visibility polyester fabric for manufacturing safety vests and garments.', category: 'reflective-tapes', features: ['Bright fluorescent colors', 'Durable polyester material', 'Used as base fabric for safety wear'], uses: ['Safety vests', 'High-visibility jackets', 'Bags and accessories'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20reflective%20polyester.webp'] },
    { id: 'hi-reflective-tc-fabric', name: 'Hi-Reflective TC Fabric', shortDescription: 'Durable and comfortable Terylene/Cotton blend fabric for high-visibility workwear.', category: 'reflective-tapes', features: ['Breathable and strong TC blend', 'Fluorescent for daytime visibility', 'Ideal base for work uniforms'], uses: ['Work shirts and pants', 'Boiler suits', 'Durable safety garments'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hipoloyster.webp'] },
    { id: 'oxford-reflective-ribbon', name: 'Oxford Reflective Ribbon', shortDescription: 'Durable Oxford fabric ribbon with a central reflective stripe for sewing applications.', category: 'reflective-tapes', features: ['Strong Oxford fabric base', 'Central reflective stripe', 'Ideal for trimming and reinforcement'], uses: ['Trims on jackets and bags', 'Reinforcing seams on workwear', 'Pet accessories'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/oxfordrefle.webp'] },
    { id: 'reflective-piping', name: 'Reflective Piping', shortDescription: 'Flexible reflective piping for sewing into seams to add contour visibility.', category: 'reflective-tapes', features: ['Adds reflective accents to seams', 'Flexible and easy to sew', 'Enhances product design'], uses: ['Athletic wear', 'Jackets and vests', 'Backpacks'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-piping.webp'] },
    { id: 'ordinary-reflective-polyester-fabric', name: 'Ordinary Reflective Polyester Fabric', shortDescription: 'Standard grade reflective polyester for cost-effective safety and fashion applications.', category: 'reflective-tapes', features: ['Economical choice', 'Good reflectivity', '100% polyester'], uses: ['Promotional items', 'Costumes', 'Casual wear'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ordinary%20polyster%20fabric.webp'] },
    { id: 'woven-reflective-ribbon', name: 'Woven Reflective Ribbon', shortDescription: 'Ribbon with reflective threads woven directly into the fabric for a premium look.', category: 'reflective-tapes', features: ['Integrated reflectivity', 'Soft and flexible', 'High-end appearance'], uses: ['Branded apparel', 'Lanyards', 'Fashion accents'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/woven.webp'] },
    { id: 'ordinary-reflective-tc-fabric', name: 'Ordinary Reflective TC Fabric', shortDescription: 'Standard grade Terylene/Cotton reflective fabric for general purpose use.', category: 'reflective-tapes', features: ['Good balance of cost and performance', 'Durable TC blend', 'Suitable for general workwear'], uses: ['General purpose safety vests', 'Utility worker uniforms', 'Event staff apparel'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'] },

    // --- Double Sided Tapes ---
    { id: '3m-double-sided-foam-tape', name: '3M Double-Sided Foam Tape', shortDescription: 'Genuine 3M foam tapes for high-performance mounting and bonding in automotive and industrial applications.', category: 'double-sided-tapes', features: ['Conformable acrylic foam core', 'High shear strength', 'Resists weathering and moisture'], uses: ['Automotive emblems and trim', 'Signage and display mounting', 'Panel bonding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20foam%20tape.webp'] },
    { id: 'tissue-tape', name: 'Double-Sided Tissue Tape', shortDescription: 'Versatile tape with a non-woven tissue carrier, ideal for general purpose mounting and splicing.', category: 'double-sided-tapes', features: ['Hand-tearable', 'Good adhesion to various surfaces', 'Available with rubber or acrylic adhesive'], uses: ['Splicing paper and films', 'Mounting lightweight objects', 'Crafts and office use'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tissue%20tape.webp'] },
    { id: 'polyester-double-sided-tape', name: 'Polyester Double Sided Tape', shortDescription: 'Thin but strong double-sided tape with a polyester film carrier for laminating and mounting.', category: 'double-sided-tapes', features: ['High tensile strength', 'Dimensionally stable', 'Good temperature resistance'], uses: ['Laminating foams and fabrics', 'Mounting nameplates', 'Splicing films'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyester%20double%20side.webp'] },
    { id: 'vhb-tape', name: 'VHB (Very High Bond) Double-Sided Tape', shortDescription: 'A powerful alternative to rivets and screws, providing a permanent bond for demanding applications.', category: 'double-sided-tapes', features: ['Extremely strong viscoelastic acrylic foam', 'Creates a permanent, durable seal', 'Resistant to temperature extremes, UV, and moisture', 'Absorbs shock and vibration'], uses: ['Panel to frame bonding', 'Automotive trim attachment', 'Architectural signage mounting', 'Electronics assembly'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/vhb%20tape.webp'] },
    { id: 'lohmann-duploflex-tape', name: 'Lohmann DuploFLEX Tape', shortDescription: 'High-performance plate mounting tapes from Lohmann for the flexographic printing industry.', category: 'double-sided-tapes', features: ['Optimized foam density', 'Excellent print quality', 'Clean removal from plate and cylinder'], uses: ['Mounting photopolymer plates', 'Flexographic printing presses', 'Label and packaging printing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Iohmann.webp'] },
    { id: 'pe-foam-tape', name: 'PE Foam Tape', shortDescription: 'Conformable closed-cell PE foam tape for mounting, sealing, and cushioning.', category: 'double-sided-tapes', features: ['Good gap-filling properties', 'Seals against dust and moisture', 'Available in various thicknesses'], uses: ['Mirror mounting', 'Gasketing applications', 'Sound dampening'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pe%20foam%20tape.webp'] },
    { id: 'pet-double-sided-tape', name: 'PET Double-Sided Tape', shortDescription: 'A transparent, high-tack tape with a PET carrier, ideal for bonding plastics and smooth surfaces.', category: 'double-sided-tapes', features: ['Optically clear', 'High initial tack', 'Resistant to plasticizers'], uses: ['Mounting POS displays', 'Laminating transparent materials', 'Electronics assembly'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pet%20double%20sided%20tape.webp'] },
    { id: 'transfer-tape', name: 'Transfer Tape', shortDescription: 'A pure adhesive film without a carrier, for excellent conformability and bonding to irregular surfaces.', category: 'double-sided-tapes', features: ['Unsupported adhesive film', 'Highly conformable', 'Available in various thicknesses'], uses: ['Graphic attachment', 'Laminating nameplates', 'Bonding gaskets'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/transfer%20tape.webp'] },
    { id: 'acrylic-double-sided-tape', name: 'Acrylic Double Sided Tape', shortDescription: 'High-strength clear acrylic tape for permanent bonding of a wide range of materials.', category: 'double-sided-tapes', features: ['Transparent and durable', 'Excellent UV and temperature resistance', 'Creates a virtually invisible bond'], uses: ['Glass bonding', 'Architectural panel mounting', 'Automotive applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Acrylic%20Double%20Sided%20Tape%20(1).webp'] },
    { id: 'double-sided-thermal-tape', name: 'Double-Sided Thermal Tape', shortDescription: 'Thermally conductive adhesive tape for bonding heat sinks to electronic components.', category: 'double-sided-tapes', features: ['Excellent thermal conductivity', 'Good dielectric strength', 'Provides both bond and heat transfer'], uses: ['Mounting heat sinks on CPUs and GPUs', 'LED lighting applications', 'Power transistors'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20thermal%20tape.webp'] },
    { id: 'double-sided-scrim-tape', name: 'Double-Sided Scrim Tape', shortDescription: 'Reinforced with a fiberglass scrim for high shear strength and stability, ideal for flooring and insulation.', category: 'double-sided-tapes', features: ['Fiberglass reinforcement prevents stretching', 'High shear strength', 'Aggressive adhesive'], uses: ['Carpet and vinyl flooring installation', 'Insulation panel mounting', 'Splicing heavy materials'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20scrim%20tape.webp'] },
    { id: 'eva-foam-tape', name: 'EVA Foam Tape', shortDescription: 'Economical and versatile EVA foam tape for general-purpose mounting and sealing.', category: 'double-sided-tapes', features: ['Cost-effective solution', 'Good cushioning and sealing properties', 'Adheres to a variety of surfaces'], uses: ['Lightweight mounting', 'Weatherstripping', 'Dust sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/eva%20foam%20tape.webp'] },
    { id: 'spacer-tapes', name: 'Spacer Tapes', shortDescription: 'Double-sided foam tapes used in structural glazing to maintain spacing and alignment.', category: 'double-sided-tapes', features: ['Open-cell polyurethane or PVC foam', 'Compatible with structural silicones', 'Ensures correct sealant depth'], uses: ['Structural silicone glazing', 'Curtain wall systems', 'Window manufacturing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/spacer%20tape.webp'] },
    { id: 'nano-magic-tape', name: 'Nano Magic Tape', shortDescription: 'A reusable, transparent, double-sided gel tape that can be washed and reused multiple times.', category: 'double-sided-tapes', features: ['Washable and reusable', 'Strong adhesion', 'Leaves no residue'], uses: ['Temporary mounting of pictures', 'Holding down rugs', 'Organizing cables'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape.webp'] },
    { id: 'hot-melt-tissue-tapes', name: 'Hot Melt Tissue Tapes', shortDescription: 'Double-sided tissue tape with a high-tack hot melt adhesive for aggressive bonding.', category: 'double-sided-tapes', features: ['Very high initial tack', 'Excellent adhesion to rough surfaces', 'Good for bonding plastics like PE and PP'], uses: ['Bag sealing', 'Mounting plastic trims', 'Splicing corrugated materials'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hot%20melt%20tissue%20tape.webp'] },
    { id: 'double-sided-cloth-tape', name: 'Double Sided Cloth Tape', shortDescription: 'High-tack cloth tape with adhesive on both sides, ideal for carpet installation and temporary mounting.', category: 'double-sided-tapes', features: ['Strong cloth carrier', 'High adhesion and shear strength', 'Conformable to irregular surfaces'], uses: ['Carpet and flooring installation', 'Temporary event flooring', 'Stereo mounting in printing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double-coated-cloth-tape-581.webp'] },
    { id: 'acrylic-gel-tape', name: 'Acrylic Gel Tape', shortDescription: 'Transparent, high-performance acrylic gel tape for strong, permanent bonds on a variety of surfaces.', category: 'double-sided-tapes', features: ['Optically clear', 'Waterproof and weatherproof', 'Replaces screws, rivets, and welds'], uses: ['Mounting signs and displays', 'Automotive trim', 'Glass and transparent plastic bonding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aAcrylic%20Gel%20Tape%20(1).webp'] },
    { id: 'xlpe-foam-tapes', name: 'XLPE Foam Tapes', shortDescription: 'Cross-linked polyethylene foam tapes offering excellent thermal insulation and sealing properties.', category: 'double-sided-tapes', features: ['Closed-cell structure', 'Good thermal and acoustic insulation', 'Chemical and moisture resistant'], uses: ['HVAC gasketing', 'Appliance manufacturing', 'Window glazing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/XLPE-FOAM-TAPES.webp'] },

    // --- Specialty Tapes ---
    { id: 'masking-tape', name: 'Masking Tape', shortDescription: 'General-purpose crepe paper masking tape for painting, bundling, and light-duty applications.', category: 'specialty-tapes', features: ['Crepe paper backing', 'Removes cleanly', 'Easy to tear'], uses: ['Painting and decorating', 'Bundling light items', 'Labeling'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/masking%20tape.webp'] },
    { id: 'bopp-tape', name: 'BOPP Tape', shortDescription: 'Biaxially Oriented Polypropylene (BOPP) tape for reliable and economical carton sealing.', category: 'specialty-tapes', features: ['Strong polypropylene backing', 'Available in clear, brown, and custom prints', 'Water-based acrylic adhesive'], uses: ['Carton and box sealing', 'Packaging and shipping', 'Bundling'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/bopp%20tape.webp'] },
    { id: 'aluminium-foil-tape', name: 'High-Performance Aluminium Foil Tape', shortDescription: 'Aluminum foil tape for sealing, shielding, and thermal insulation in HVAC and construction.', category: 'specialty-tapes', features: ['Thermally conductive', 'Reflects heat and light', 'Resists moisture, UV, and chemicals'], uses: ['Duct sealing in HVAC systems', 'EMI/RFI shielding', 'Heat shielding applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminum%20foil%20%202%20tape.webp'] },
    { id: 'kapton-tape', name: 'High-Temperature Kapton Polyimide Tape', shortDescription: 'High-temperature resistant polyimide film tape for electronics manufacturing and masking.', category: 'specialty-tapes', features: ['Withstands extreme temperatures (up to 260°C)', 'Excellent dielectric strength', 'Removes cleanly'], uses: ['Masking for circuit boards during wave soldering', 'Electrical insulation', '3D printing bed surface'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp'] },
    { id: 'cloth-duct-tape', name: 'Heavy-Duty Cloth Duct Tape', shortDescription: 'Strong, waterproof, and versatile cloth duct tape for general repairs, bundling, and sealing.', category: 'specialty-tapes', features: ['Waterproof PE-coated cloth backing', 'Strong rubber-based adhesive', 'Hand-tearable'], uses: ['General repairs', 'Duct and pipe sealing', 'Heavy-duty bundling'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/duct%20tape.webp'] },
    { id: 'high-temperature-sealing-tape', name: 'High Temperature Sealing Tape', shortDescription: 'Specialty tapes designed for sealing applications in high-temperature environments.', category: 'specialty-tapes', features: ['Various material compositions (e.g., fiberglass, silicone)', 'Maintains seal integrity at high temps', 'Chemical resistant'], uses: ['Industrial ovens', 'Engine compartments', 'Exhaust systems'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20sealing%20tape.webp'] },
    { id: 'paper-tape', name: 'Paper Tape', shortDescription: 'Eco-friendly paper tapes for packaging, crafting, and general use.', category: 'specialty-tapes', features: ['Kraft paper backing', 'Recyclable and biodegradable', 'Good adhesion'], uses: ['Picture framing', 'Packaging', 'Craft projects'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp'] },
    { id: 'silicone-tape', name: 'Silicone Tape', shortDescription: 'Self-fusing silicone tape that creates a permanent, waterproof seal for repairs.', category: 'specialty-tapes', features: ['Self-fusing (bonds to itself)', 'Waterproof and airtight', 'High temperature and UV resistance'], uses: ['Leaking pipe repairs', 'Electrical wire insulation', 'Hose and cable wrapping'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape%202.webp'] },
    { id: 'polyester-tape', name: 'Single-sided polyester tape', shortDescription: 'Durable polyester tape with a strong adhesive for splicing, sealing, and high-temp masking.', category: 'specialty-tapes', features: ['High tensile strength', 'Chemical and temperature resistant', 'Available in various colors'], uses: ['Splicing films and papers', 'Powder coating masking', 'Electrical insulation'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp'] },
    { id: 'pvc-pipe-wrapping-tape', name: 'PVC Pipe Wrapping Tape', shortDescription: 'Corrosion-resistant PVC tape for protecting underground pipes and conduits.', category: 'specialty-tapes', features: ['Protects against corrosion and abrasion', 'Flexible and conformable', 'Moisture and chemical resistant'], uses: ['Wrapping metal pipes and conduits', 'Underground pipeline protection', 'Joint and fitting sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20pipe%20tape%20(1).webp'] },
    { id: 'bag-sealing-tape', name: 'Bag Sealing Tape', shortDescription: 'Adhesive tape for securely sealing poly bags and food packaging.', category: 'specialty-tapes', features: ['Quick and easy to apply', 'Provides a secure seal', 'Available in various colors for coding'], uses: ['Bakery and produce bags', 'Retail packaging', 'Industrial bag sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/bag%20sealing%20tape.webp'] },
    { id: 'acetate-cloth-tape', name: 'Acetate Cloth Tape', shortDescription: 'Conformable woven acetate cloth tape for electrical insulation and coil wrapping.', category: 'specialty-tapes', features: ['Excellent conformability', 'Good electrical insulation properties', 'Printable surface'], uses: ['Coil and transformer wrapping', 'Wire harnessing', 'Motor repairs'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/acetate-cloth-tape-white-19mm-x-66m-crop.webp'] },
    { id: 'sticky-mat', name: 'Sticky Mat', shortDescription: 'Multi-layered adhesive mats that capture dirt and contaminants from shoes before entering clean areas.', category: 'specialty-tapes', features: ['Tacky surface removes contaminants', 'Peel-off sheets for a fresh surface', 'Non-skid backing'], uses: ['Cleanroom entrances', 'Hospitals and labs', 'Construction sites'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp'] },
    { id: 'fine-line-masking-tape', name: 'Fine Line Masking Tape', shortDescription: 'Thin, flexible tape for creating sharp, clean paint lines in automotive and custom painting.', category: 'specialty-tapes', features: ['Creates sharp, precise paint lines', 'Flexible for curves and contours', 'Resists paint bleed-through'], uses: ['Automotive custom painting', 'Industrial painting', 'Graphic arts'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fine%20line%20masking%20tape.webp'] },
    { id: 'mica-tape', name: 'Mica Tape', shortDescription: 'High-temperature fire-resistant tape made from mica paper for insulating cables and coils.', category: 'specialty-tapes', features: ['Excellent fire resistance', 'High dielectric strength', 'Flexible and easy to apply'], uses: ['Fire survival cables', 'Insulation for motors and generators', 'High-voltage applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/mica%20tape.webp'] },
    { id: 'green-polyester-tape', name: 'Green Polyester Tape', shortDescription: 'High-temperature polyester tape for masking in powder coating, anodizing, and e-coating.', category: 'specialty-tapes', features: ['Withstands high temperatures (up to 204°C)', 'Removes cleanly without residue', 'Chemical resistant'], uses: ['Powder coating masking', 'Anodizing and plating', 'Splicing silicone-coated papers'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster.wbep'] },
    { id: 'green-polyester-tape-with-liner', name: 'Green Polyester Tape with Liner', shortDescription: 'High-temp green polyester tape with a release liner, ideal for die-cutting applications.', category: 'specialty-tapes', features: ['Release liner for easy die-cutting', 'Same high-temp performance', 'Precise masking shapes'], uses: ['Custom die-cut masking parts', 'Electronics masking', 'Aerospace applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster%20with%20liner.webp'] },
    { id: 'thermal-conductive-pads', name: 'Thermal Conductive Pads', shortDescription: 'Soft, conformable pads that transfer heat between components and heat sinks.', category: 'specialty-tapes', features: ['High thermal conductivity', 'Gap-filling and vibration damping', 'Electrically isolating'], uses: ['Electronics cooling', 'LED lighting', 'Automotive electronics'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp'] },
    { id: 'pe-surface-protection-film', name: 'PE Surface Protection Film', shortDescription: 'Temporary film to protect surfaces from scratches, dirt, and damage during manufacturing and transit.', category: 'specialty-tapes', features: ['Removes cleanly without residue', 'Available in various tack levels', 'Protects against abrasion and contamination'], uses: ['Protecting metal, plastic, and glass surfaces', 'Appliance manufacturing', 'Automotive component protection'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/surface%20protection%20tape.webp'] },
    { id: 'powder-coated-tape', name: 'Powder Coated Tape', shortDescription: 'Specialized masking tapes designed to withstand the powder coating process.', category: 'specialty-tapes', features: ['High temperature resistance', 'Clean removal', 'Prevents paint ingress'], uses: ['Masking parts during powder coating', 'Masking threads and holes', 'High-temp finishing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/green-powder-coating-tape-500x500%20(1).webp'] },
    { id: 'lamination-tape', name: 'Lamination Tape', shortDescription: 'Thin, optically clear tapes for laminating materials like foam, fabric, and graphics.', category: 'specialty-tapes', features: ['Optically clear adhesive', 'Provides a protective layer', 'Bonds dissimilar materials'], uses: ['Graphic overlays', 'Laminating nameplates', 'Foam bonding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/lamination%20tape.webp'] },
    { id: 'aluminium-foil-scrim-kraft-tape-fsk', name: 'Aluminium Foil Scrim Kraft Tape (FSK)', shortDescription: 'A foil/scrim/kraft laminate tape for sealing insulation joints and seams in HVAC applications.', category: 'specialty-tapes', features: ['Tri-directional reinforcement', 'High tensile strength', 'Acts as a vapor barrier'], uses: ['Sealing foil-faced insulation', 'HVAC duct wrapping', 'Vapor sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/foil-scrim-kraft-tape.webp'] },
    { id: 'aluminium-pet-tape-alupet', name: 'Aluminium PET Tape (Alupet)', shortDescription: 'A laminate of aluminum foil and polyester film, providing high strength and reflectivity.', category: 'specialty-tapes', features: ['High tensile strength from PET layer', 'Heat and light reflective', 'Good for shielding'], uses: ['Cable shielding', 'Decorative applications', 'Heat shielding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20pet.webp'] },
    { id: 'aluminium-butyl-tape', name: 'Aluminium Butyl Tape', shortDescription: 'A conformable foil tape with a thick butyl adhesive for instant, waterproof sealing.', category: 'specialty-tapes', features: ['Excellent waterproofing', 'Strong adhesion to most surfaces', 'UV resistant'], uses: ['Roof and gutter repairs', 'Sealing joints in construction', 'Automotive sound deadening'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/butyl.webp'] },
    { id: 'fiber-glass-cloth-tape', name: 'Fiber Glass Cloth Tape', shortDescription: 'High-strength, high-temperature tape made from woven fiberglass cloth.', category: 'specialty-tapes', features: ['High tensile strength', 'Abrasion resistant', 'Withstands high temperatures'], uses: ['High-temperature duct sealing', 'Reinforcing and repairing', 'Electrical insulation'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fiberglass%20tape.webp'] },
    { id: 'nbr-foam-tapes', name: 'NBR Foam Tapes', shortDescription: 'Nitrile rubber foam tapes providing excellent sealing against air, dust, and moisture.', category: 'specialty-tapes', features: ['Good resistance to oils and chemicals', 'Flexible and conformable', 'Excellent sealing properties'], uses: ['Gasketing and sealing', 'Cushioning and vibration damping', 'Automotive applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/nrm%20foam%20tape.webp'] },
    { id: 'air-vent-tape', name: 'Air Vent Tape', shortDescription: 'Breathable tapes used to seal and protect components while allowing air and moisture to escape.', category: 'specialty-tapes', features: ['Allows moisture vapor transmission', 'Prevents ingress of dust and water', 'Durable backing'], uses: ['Sealing polycarbonate multi-wall sheets', 'Venting electronic enclosures', 'Greenhouse construction'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/air%20vent%20tape.webp'] },
    { id: 'pink-rayon-tape', name: 'Pink Rayon Tape', shortDescription: 'High-quality rayon tape for specific industrial applications requiring its unique properties.', category: 'specialty-tapes', features: ['High tensile strength', 'Low elongation', 'Printable surface'], uses: ['Coil wrapping and insulation', 'Banding and reinforcing', 'Printing industry applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pink%20rayon.webp'] },
    { id: 'yellow-polyester-tape', name: 'Yellow Polyester Tape', shortDescription: 'A high-visibility polyester tape for splicing, color-coding, and general industrial use.', category: 'specialty-tapes', features: ['Bright yellow color for visibility', 'Durable polyester backing', 'Good chemical resistance'], uses: ['Color-coding components', 'Splicing films', 'Decorative applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp'] },
    { id: 'aluminium-glass-tape-fr-grade', name: 'Aluminium Glass Tape (FR Grade)', shortDescription: 'A laminate of aluminum foil and glass cloth, providing fire resistance and high strength.', category: 'specialty-tapes', features: ['Fire retardant (FR grade)', 'High temperature resistance', 'Excellent strength and durability'], uses: ['Aerospace applications', 'Marine and shipbuilding', 'High-temp insulation sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20fr%20grade.webp'] },
    { id: 'pvc-pipe-wrapping-tape-without-adhesive', name: 'PVC Pipe Wrapping Tape (Without Adhesive)', shortDescription: 'Non-adhesive PVC tape for wrapping and protecting pipes through tension.', category: 'specialty-tapes', features: ['Non-adhesive, self-clinging under tension', 'Corrosion protection', 'Flexible and easy to apply'], uses: ['Wrapping underground pipes', 'Protecting tool handles', 'Color-coding pipes'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Red-PVC-Non-Adhesive-Tape.webp'] },
    { id: 'glass-cloth-tape', name: 'Glass Cloth Tape', shortDescription: 'Woven glass cloth tape with a pressure-sensitive adhesive for high-temperature electrical insulation.', category: 'specialty-tapes', features: ['High temperature performance', 'Excellent tensile strength', 'Abrasion resistant'], uses: ['High-temp electrical insulation', 'Permanent sealing of high-temp ducts', 'Motor and transformer insulation'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/glass%20cloth%20tape.webp'] },
    { id: 'glass-cloth-tape-fr-grade', name: 'Glass Cloth Tape (FR Grade)', shortDescription: 'Fire-retardant glass cloth tape for applications requiring flame resistance and high strength.', category: 'specialty-tapes', features: ['Meets flame retardancy specifications', 'High temperature insulation', 'Durable and abrasion resistant'], uses: ['Aerospace wire harnessing', 'Sealing in high-heat areas', 'Marine applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/fr-grade-glass-cloth-tape.webp'] },
    { id: 'filament-tapes', name: 'Filament Tapes', shortDescription: 'High-strength tapes reinforced with fiberglass filaments for bundling, strapping, and reinforcing.', category: 'specialty-tapes', features: ['Extremely high tensile strength', 'Resistant to tears and abrasion', 'Available in single and bi-directional patterns'], uses: ['Palletizing and bundling heavy goods', 'Reinforcing shipping containers', 'Appliance component securing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/filament%20tape.webp'] },
    { id: 'ez-application-tape', name: 'EZ Application Tape', shortDescription: 'Application tape for transferring vinyl graphics and cut lettering with ease.', category: 'specialty-tapes', features: ['Medium tack adhesive', 'Lays flat for easy application', 'Transparent for easy alignment'], uses: ['Sign making', 'Transferring vinyl decals', 'Graphic arts'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ez-application-tape.webp'] },
    { id: 'kraft-paper-tape', name: 'Kraft Paper Tape', shortDescription: 'General-purpose kraft paper tape for carton sealing, packaging, and picture framing.', category: 'specialty-tapes', features: ['Eco-friendly paper backing', 'Strong adhesion', 'Can be written on'], uses: ['Light to medium duty carton sealing', 'Picture framing', 'Craft applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp'] },
    { id: 'reinforcement-kraft-paper-tape', name: 'Reinforcement Kraft Paper Tape', shortDescription: 'Kraft paper tape reinforced with fiberglass filaments for heavy-duty sealing.', category: 'specialty-tapes', features: ['Fiberglass reinforcement', 'High tensile strength', 'Water-activated or self-adhesive'], uses: ['Sealing heavy or over-stuffed cartons', 'Reinforcing boxes', 'High-security packaging'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/reinforced-paper-tapes1.webp'] },
    { id: 'water-activated-kraft-paper-tape', name: 'Water Activated Kraft Paper Tape', shortDescription: 'Gummed paper tape that creates a permanent, tamper-evident bond when moistened.', category: 'specialty-tapes', features: ['Forms a permanent bond with cardboard', 'Tamper-evident seal', 'Recyclable and eco-friendly'], uses: ['High-security shipping', 'Sealing corrugated boxes', 'Temperature-sensitive packaging'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/water%20activated%20kraft%20tape.webp'] },
    { id: 'adhesive-cloth-tape', name: 'Adhesive Cloth Tape', shortDescription: 'Versatile cloth tape with a strong adhesive for bookbinding, repairs, and color-coding.', category: 'specialty-tapes', features: ['Durable cloth backing', 'Available in multiple colors', 'Conformable and easy to tear'], uses: ['Bookbinding and spine repairs', 'Color-coding cables', 'General purpose repairs'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/cloth-adhesive-tape-500x500%20(1).webp'] },

    // --- Teflon & PTFE Tapes ---
    { id: 'ptfe-coated-fiberglass-fabric-non-adhesive', name: 'Non-Adhesive PTFE Coated Fiberglass Fabric', shortDescription: 'Non-stick, heat-resistant PTFE fabric for use as release sheets and conveyor belts.', category: 'teflon-ptfe-tapes', features: ['Excellent non-stick properties', 'High temperature and chemical resistance', 'Durable and flexible'], uses: ['Heat sealing machine release sheets', 'Conveyor belting', 'Composite mold release'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptfe%20coated%20fabric%20non%20adhesive%20(1).webp'] },
    { id: 'ptfe-silicone-adhesive-tape', name: 'PTFE (Teflon) Coated Tape with Silicone Adhesive', shortDescription: 'PTFE coated fiberglass tape with a high-temperature silicone adhesive for non-stick applications.', category: 'teflon-ptfe-tapes', features: ['Non-stick PTFE surface', 'High-temperature silicone adhesive', 'Excellent chemical resistance'], uses: ['Heat sealer bar covering', 'Mold release liners', 'Chute and hopper linings'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptfe%20silicone%20adhesive.webp'] },
    { id: 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive', name: 'PTFE Coated Fiberglass Fabric with Silicone Adhesive', shortDescription: 'A premium grade PTFE tape offering superior performance and durability.', category: 'teflon-ptfe-tapes', features: ['Heavy-duty PTFE coating', 'High-performance silicone adhesive', 'Longer lifespan in demanding applications'], uses: ['High-speed packaging machines', 'Demanding release applications', 'Industrial conveyor systems'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptfe%20fiberglass%20with%20silicone%20adhesive.webp'] },
    { id: 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner', name: 'PTFE Coated Fiberglass Fabric with Liner', shortDescription: 'PTFE tape with a release liner, ideal for die-cutting into custom shapes and gaskets.', category: 'teflon-ptfe-tapes', features: ['Release liner for easy handling and die-cutting', 'Same high-temp, non-stick properties', 'Create custom gaskets and release surfaces'], uses: ['Die-cut non-stick parts', 'Custom release liners', 'Aerospace applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/PTFE%20Coated%20Fiberglass%20Fabric%20with%20Silicone%20Adhesive%20%26%20Liner.webp'] },

    // --- Antistatic & ESD Tapes ---
    { id: 'polyimide-tape', name: 'High-Temperature Kapton Polyimide Tape', shortDescription: 'High-performance polyimide tape for masking and insulation in high-temperature electronics assembly.', category: 'antistatic-esd-tapes', features: ['Excellent thermal resistance (up to 260°C)', 'High dielectric strength', 'Clean removal'], uses: ['PCB masking during wave soldering', 'Electrical insulation of coils and motors', '3D printer beds'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp'] },
    { id: 'emi-shielding-tape', name: 'EMI Shielding Tape', shortDescription: 'Conductive tapes (copper or aluminum) for shielding electronic components from electromagnetic interference.', category: 'antistatic-esd-tapes', features: ['Conductive adhesive', 'Provides effective EMI/RFI shielding', 'Flexible and conformable'], uses: ['Shielding cables and connectors', 'Grounding electronic components', 'Sealing EMI shielded rooms'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp'] },
    { id: 'copper-foil-tape', name: 'Conductive Copper Foil Tape for EMI Shielding', shortDescription: 'Copper foil tape with conductive adhesive for superior EMI shielding, grounding, and static discharge.', category: 'antistatic-esd-tapes', features: ['Highly conductive copper foil', 'Conductive acrylic adhesive', 'Solderable'], uses: ['EMI shielding in electronics', 'Grounding applications', 'Stained glass crafting'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp'] },
    { id: 'conductive-grid-tape', name: 'ESD Conductive Grid Tape', shortDescription: 'A three-layer tape with a conductive grid pattern for use in Electrostatic Protected Areas (EPAs).', category: 'antistatic-esd-tapes', features: ['Creates a Faraday cage effect', 'Low static-generating', 'Transparent for visibility'], uses: ['Sealing ESD bags and containers', 'Use within EPAs', 'Securing documents in cleanrooms'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/conductive%20grind%20tape.webp'] },
    { id: 'esd-kapton-tape', name: 'ESD Kapton Tape', shortDescription: 'Polyimide tape with antistatic properties, designed for high-temp masking on sensitive electronics.', category: 'antistatic-esd-tapes', features: ['High temperature resistance', 'Antistatic properties to prevent ESD events', 'Clean removal'], uses: ['Masking PCBs with static-sensitive components', 'High-temp applications in EPAs', 'Electronics assembly'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp'] },
    { id: 'anti-static-polyester-tape', name: 'Anti-Static Polyester Tape', shortDescription: 'A polyester tape with an anti-static coating for general use in static-sensitive environments.', category: 'antistatic-esd-tapes', features: ['Reduces static generation', 'Durable polyester backing', 'Good for general purpose use in EPAs'], uses: ['Sealing and bundling in electronics assembly', 'Office use in EPAs', 'Labeling static-sensitive devices'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20static%20polyester%20tape.webp'] },
    { id: 'polyimide-double-sided-tape', name: 'Polyimide Double-Sided Tape', shortDescription: 'A high-temperature double-sided tape with a polyimide carrier for demanding bonding applications.', category: 'antistatic-esd-tapes', features: ['Withstands high temperatures', 'Strong bonding on both sides', 'Dimensionally stable'], uses: ['Mounting components on PCBs before soldering', 'High-temp splicing', 'Aerospace bonding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double-sided-polyimide-tapes-1.webp'] },
    { id: 'polyimide-film-tape', name: 'Polyimide Film Tape', shortDescription: 'Standard polyimide film tape for a wide range of high-temperature insulation and masking tasks.', category: 'antistatic-esd-tapes', features: ['High thermal and electrical insulation', 'Chemical resistant', 'Thin and conformable'], uses: ['General electrical insulation', 'Masking applications', 'Coil insulation'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyimide%20flim%20tape.webp'] },
    { id: 'tin-plated-copper-tape', name: 'Tin-Plated Copper Tape', shortDescription: 'Copper foil tape with tin plating for enhanced corrosion resistance and solderability.', category: 'antistatic-esd-tapes', features: ['Tin plating prevents oxidation', 'Excellent solderability', 'Provides effective EMI shielding'], uses: ['Corrosion-resistant grounding', 'Shielding in harsh environments', 'PCB manufacturing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/tin%20copper%20tape.webp'] },
];
