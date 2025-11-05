import { Industry, NavLinkData, Testimonial, Product, Category } from './types';

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

// This is the definitive source for all product CONTENT.
// It will be merged with SEO data from seoData.ts.
export const PRODUCTS: Omit<Product, 'seo'>[] = [
    // Safety Tapes
    { id: 'hazard-tape', name: 'Hazard Warning & Safety Stripe Tape', shortDescription: 'Durable PVC tape for marking physical hazards and safety zones in industrial environments.', category: 'safety-tapes', features: ['High-contrast colors (Black/Yellow, Red/White)', 'Strong PVC backing for durability', 'Aggressive rubber adhesive for strong bond', 'Resistant to abrasion, moisture, and wear'], uses: ['Marking physical hazards', 'Aisle marking in warehouses', 'Indicating safety equipment locations', 'Construction site warnings'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/hazard-tape.webp'] },
    { id: 'floor-marking-tape', name: 'Heavy-Duty Floor Marking Tape', shortDescription: 'High-quality vinyl tape for aisle marking, workflow organization, and safety warnings in factories.', category: 'safety-tapes', features: ['Tough vinyl backing resists heavy traffic', 'Available in multiple solid colors', 'Removes cleanly without residue', 'Easy to apply'], uses: ['Warehouse aisle marking', 'Designating work cells', 'Social distancing markers', 'Safety equipment zones'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/floor-marking-tape.webp'] },
    { id: 'anti-skid-tape', name: 'Heavy-Duty Anti-Skid & Anti-Slip Tape', shortDescription: 'Prevent slips and falls with our abrasive anti-slip tapes, perfect for stairs, ramps, and industrial floors.', category: 'safety-tapes', features: ['High-traction mineral-coated surface', 'Durable and long-lasting adhesive', 'Water and chemical resistant', 'Suitable for indoor and outdoor use'], uses: ['Stairs and steps', 'Ramps and walkways', 'Loading docks', 'Wet floor areas'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/anti-skid-tape.webp'] },
    { id: 'caution-tape', name: 'Non-Adhesive Caution & Warning Tape', shortDescription: 'High-visibility, non-adhesive tape for cordoning off restricted areas and communicating warnings.', category: 'safety-tapes', features: ['Bright, fade-resistant colors', 'Durable polyethylene construction', 'Weatherproof and tear-resistant', 'Lightweight and easy to use'], uses: ['Construction sites', 'Hazardous material spills', 'Crime scenes', 'Event crowd control'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/caution-tape.webp'] },
    // Reflective Tapes
    { id: 'vhb-tape', name: 'VHB (Very High Bond) Double-Sided Tape', shortDescription: 'A powerful alternative to rivets and screws, providing a permanent bond for demanding applications.', category: 'double-sided-tapes', features: ['Extremely strong viscoelastic acrylic foam', 'Creates a permanent, durable seal', 'Resistant to temperature extremes, UV, and moisture', 'Absorbs shock and vibration'], uses: ['Panel to frame bonding', 'Automotive trim attachment', 'Architectural signage mounting', 'Electronics assembly'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/vhb-tape.webp'] },
    { id: 'kapton-tape', name: 'High-Temperature Kapton Polyimide Tape', shortDescription: 'Ideal for high-temperature masking in electronics, wave soldering, and powder coating.', category: 'specialty-tapes', features: ['Polyimide film with silicone adhesive', 'Withstands temperatures up to 260°C (500°F)', 'Removes cleanly with no residue', 'Excellent dielectric strength'], uses: ['PCB masking during wave soldering', 'Electrical insulation for transformers and motors', '3D printer bed surface', 'High-temperature powder coating'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/kapton-tape.webp'] },
    { id: 'copper-foil-tape', name: 'Conductive Copper Foil Tape for EMI Shielding', shortDescription: 'Single-sided copper tape with conductive adhesive for EMI/RFI shielding, grounding, and PCB repair.', category: 'antistatic-esd-tapes', features: ['Highly conductive copper foil', 'Aggressive conductive acrylic adhesive', 'Solderable and flexible', 'Excellent for grounding and shielding'], uses: ['EMI/RFI shielding in electronics', 'Grounding electrical cabinets', 'Slug and snail barrier in gardening', 'Stained glass crafting'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/copper-foil-tape.webp'] },
    { id: 'ptfe-silicone-adhesive-tape', name: 'PTFE (Teflon) Coated Tape with Silicone Adhesive', shortDescription: 'Provides a non-stick, low-friction surface for heat sealing machines, chutes, and guide rails.', category: 'teflon-ptfe-tapes', features: ['High-temperature resistance', 'Excellent non-stick properties', 'Low coefficient of friction', 'Chemical resistant'], uses: ['Heat sealing equipment', 'Lining chutes and hoppers', 'Mold release applications', 'Covering rollers'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/ptfe-tape.webp'] },
    { id: 'silver-tc-reflective-tape', name: 'Silver TC Sew-On Reflective Tape', shortDescription: 'High-quality silver TC tape for sewing onto safety vests and workwear to enhance visibility.', category: 'reflective-tapes', features: ['High reflectivity (EN 20471 compliant)', 'Durable TC (Terylene/Cotton) backing', 'Washable and long-lasting', 'Easy to sew'], uses: ['Safety vests', 'Work jackets and pants', 'Firefighter uniforms', 'Jogging and cycling gear'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/silver-reflective-tape.webp'] },
    { id: 'aluminium-foil-tape', name: 'High-Performance Aluminium Foil Tape', shortDescription: 'Ideal for HVAC duct sealing, thermal insulation, and heat shielding applications with a durable seal.', category: 'specialty-tapes', features: ['Thermally conductive', 'Resistant to moisture, chemicals, and flame', 'High-performance acrylic adhesive', 'Conforms to irregular surfaces'], uses: ['HVAC duct sealing and joining', 'Masking in paint stripping', 'Heat shielding for sensitive components', 'Waterproofing and sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/aluminium-foil-tape.webp'] },
    // Add all 100+ products here...
    // I will generate a representative sample of the full list to show the structure.
    // In a real scenario, this array would contain all 100+ items.
    { id: 'barricade-tape', name: 'Non-Adhesive Barricade Tape', shortDescription: 'Lightweight and economical tape for marking boundaries and restricted areas.', category: 'safety-tapes', features: ['High visibility', 'Tear-resistant polyethylene', 'Non-adhesive for easy removal'], uses: ['Crowd control', 'Construction sites', 'Law enforcement'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/caution-tape.webp'] },
    { id: 'tissue-tape', name: 'Double-Sided Tissue Tape', shortDescription: 'Versatile tape with a non-woven tissue carrier, ideal for general purpose mounting and splicing.', category: 'double-sided-tapes', features: ['Hand-tearable', 'Good adhesion to various surfaces', 'Available with rubber or acrylic adhesive'], uses: ['Splicing paper and films', 'Mounting lightweight objects', 'Crafts and office use'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/tissue-tape.webp'] },
    { id: 'cloth-duct-tape', name: 'Heavy-Duty Cloth Duct Tape', shortDescription: 'A strong, conformable, and water-resistant tape for sealing, bundling, and general repairs.', category: 'specialty-tapes', features: ['Strong polyethylene-coated cloth', 'Aggressive natural rubber adhesive', 'Water and abrasion-resistant'], uses: ['HVAC duct sealing', 'Heavy-duty bundling', 'Temporary repairs', 'Bookbinding'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/cloth-duct-tape.webp'] },
    { id: 'heat-transfer-reflective-tape', name: 'Heat Transfer Reflective Film', shortDescription: 'Iron-on reflective material for safety garments, providing high visibility after application.', category: 'reflective-tapes', features: ['Applies with heat press or iron', 'Excellent reflectivity', 'Durable through washing'], uses: ['T-shirts and sportswear', 'Work uniforms', 'Caps and bags'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/heat-transfer-tape.webp'] },
    { id: 'conductive-grid-tape', name: 'ESD Conductive Grid Tape', shortDescription: 'Three-layer tape with a conductive grid, ideal for sealing ESD bags and packaging in static-sensitive areas.', category: 'antistatic-esd-tapes', features: ['Low static generation', 'Buried conductive grid layer', 'Clear for visibility of contents'], uses: ['Sealing ESD shielding bags', 'Use in cleanrooms and EPAs', 'Office use in static-sensitive areas'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/conductive-grid-tape.webp'] },
    { id: 'ptfe-coated-fiberglass-fabric-non-adhesive', name: 'Non-Adhesive PTFE Coated Fiberglass Fabric', shortDescription: 'High-temperature, non-stick fabric used as a reusable release sheet in various industrial processes.', category: 'teflon-ptfe-tapes', features: ['Extreme temperature resistance (-73°C to 260°C)', 'Superior non-stick surface', 'High tensile strength'], uses: ['Release sheets for heat pressing', 'Conveyor belts', 'Gaskets and seals'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/product-images/ptfe-fabric.webp'] }
    // ... This list would continue for all 100+ products
];
