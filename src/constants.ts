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
    { id: 'lohmann-duploflex-tape', name: 'Lohmann DuploFLEX Tape', shortDescription: 'High-performance plate mounting tapes from Lohmann for the flexographic printing industry.', category: 'double-sided-tapes', features: ['Optimized foam density', 'Excellent print quality', 'Clean removal from plate and cylinder'], uses: ['Mounting photopolymer plates', 'Flexographic printing presses', 'Label and packaging printing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/lohman.webp'] },
    { id: 'pe-foam-tape', name: 'PE Foam Tape', shortDescription: 'Conformable closed-cell PE foam tape for mounting, sealing, and cushioning.', category: 'double-sided-tapes', features: ['Good gap-filling properties', 'Seals against dust and moisture', 'Available in various thicknesses'], uses: ['Mirror mounting', 'Gasketing applications', 'Sound dampening'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pe%20foam%20tape.webp'] },
    { id: 'pet-double-sided-tape', name: 'PET Double-Sided Tape', shortDescription: 'A transparent, high-tack tape with a PET carrier, ideal for bonding plastics and smooth surfaces.', category: 'double-sided-tapes', features: ['Optically clear', 'High initial tack', 'Resistant to plasticizers'], uses: ['Mounting POS displays', 'Laminating transparent materials', 'Electronics assembly'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/pet%20double%20sided%20tape.webp'] },
    { id: 'transfer-tape', name: 'Transfer Tape', shortDescription: 'A pure adhesive film without a carrier, for excellent conformability and bonding to irregular surfaces.', category: 'double-sided-tapes', features: ['Unsupported adhesive film', 'Highly conformable', 'Available in various thicknesses'], uses: ['Graphic attachment', 'Laminating nameplates', 'Bonding gaskets'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/transfer%20tape.webp'] },
    { id: 'acrylic-double-sided-tape', name: 'Acrylic Double Sided Tape', shortDescription: 'High-strength clear acrylic tape for permanent bonding of a wide range of materials.', category: 'double-sided-tapes', features: ['Transparent and durable', 'Excellent UV and temperature resistance', 'Creates a virtually invisible bond'], uses: ['Glass bonding', 'Architectural panel mounting', 'Automotive applications'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/Acrylic%20Double%20Sided%20Tape%20(1).webp'] },
    { id: 'double-sided-thermal-tape', name: 'Double-Sided Thermal Tape', shortDescription: 'Thermally conductive adhesive tape for bonding heat sinks to electronic components.', category: 'double-sided-tapes', features: ['Excellent thermal conductivity', 'Good dielectric strength', 'Provides both bond and heat transfer'], uses: ['Mounting heat sinks on CPUs and GPUs', 'LED lighting applications', 'Power transistors'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20thermal%20tape.webp'] },
    { id: 'double-sided-scrim-tape', name: 'Double-Sided Scrim Tape', shortDescription: 'Reinforced with a fiberglass scrim for high shear strength and stability, ideal for flooring and insulation.', category: 'double-sided-tapes', features: ['Fiberglass reinforcement prevents stretching', 'High shear strength', 'Aggressive adhesive'], uses: ['Carpet and vinyl flooring installation', 'Insulation panel mounting', 'Splicing heavy materials'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20side%20cloth%20tape.webp'] },
    { id: 'eva-foam-tape', name: 'EVA Foam Tape', shortDescription: 'Economical and versatile EVA foam tape for general-purpose mounting and sealing.', category: 'double-sided-tapes', features: ['Cost-effective solution', 'Good cushioning and sealing properties', 'Adheres to a variety of surfaces'], uses: ['Lightweight mounting', 'Weatherstripping', 'Dust sealing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/eva%20foam%20tape.webp'] },
    { id: 'spacer-tapes', name: 'Spacer Tapes', shortDescription: 'Double-sided foam tapes used in structural glazing to maintain spacing and alignment.', category: 'double-sided-tapes', features: ['Open-cell polyurethane or PVC foam', 'Compatible with structural silicones', 'Ensures correct sealant depth'], uses: ['Structural silicone glazing', 'Curtain wall systems', 'Window manufacturing'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/spacer%20tape.webp'] },
    { id: 'nano-magic-tape', name: 'Nano Magic Tape', shortDescription: 'A reusable, transparent, double-sided gel tape that can be washed and reused multiple times.', category: 'double-sided-tapes', features: ['Washable and reusable', 'Strong adhesion', 'Leaves no residue'], uses: ['Temporary mounting of pictures', 'Holding down rugs', 'Organizing cables'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape.webp'] },
    { id: 'hot-melt-tissue-tapes', name: 'Hot Melt Tissue Tapes', shortDescription: 'Double-sided tissue tape with a high-tack hot melt adhesive for aggressive bonding.', category: 'double-sided-tapes', features: ['Very high initial tack', 'Excellent adhesion to rough surfaces', 'Good for bonding plastics like PE and PP'], uses: ['Bag sealing', 'Mounting plastic trims', 'Splicing corrugated materials'], images: ['https://file.garden/aIULwzQ_QkPKQcGw/hot%20melt%20tissue%20tape.webp'] },
];
