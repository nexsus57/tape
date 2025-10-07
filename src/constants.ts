
import { Product, Category, Industry, NavLinkData, Testimonial } from './types';

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

export const CATEGORIES: Category[] = [
    {
        id: 'safety-tapes',
        name: 'Safety Tapes',
        icon: 'ShieldCheckIcon',
        subtitle: 'Hazard marking, floor safety, and security tapes.',
        description: 'Enhance workplace safety with our comprehensive range of industrial safety tapes. This includes durable <a href="/product/floor-marking-tape" class="text-brand-accent hover:underline font-semibold">floor marking tapes</a>, high-traction <a href="/product/anti-skid-tape" class="text-brand-accent hover:underline font-semibold">anti-skid tapes</a>, photoluminescent <a href="/product/glow-in-the-dark-tape" class="text-brand-accent hover:underline font-semibold">glow-in-the-dark tapes</a>, and <a href="/product/tamper-proof-security-packing-tape" class="text-brand-accent hover:underline font-semibold">tamper-evident security solutions</a> to protect assets and personnel. Ensure visibility in low-light with our high-grade <a href="/products?category=reflective-tapes" class="text-brand-accent hover:underline font-semibold">reflective safety tapes</a>.',
        seo: {
            title: "Safety Tapes Manufacturer | Floor, Anti-Skid & Hazard Tapes",
            description: "Enhance workplace safety with Tape India's industrial safety tapes. We supply durable floor marking, anti-skid, and hazard tapes. Get a quote!",
        }
    },
    {
        id: 'reflective-tapes',
        name: 'Reflective Tapes',
        icon: 'SunIcon',
        subtitle: 'High-visibility tapes and fabrics for low-light conditions.',
        description: `Our collection of reflective materials ensures maximum visibility and safety. We supply high-grade reflective tapes for vehicles, sew-on fabrics for garments, and flame-retardant options to meet stringent safety standards in various industries. Our reflective tapes and reflector stickers are designed for road, industrial, and safety applications. TapeIndia manufactures reflective tapes for safety, transport, and industrial marking, available in multiple colors.`,
        seo: {
            title: "Reflective Tape Manufacturer in India | TapeIndia",
            description: "Leading reflective tape manufacturer in India. Chennai-based supplier with nationwide bulk delivery for safety, transport, and industrial uses.",
            h1: "Reflective Tape Manufacturer — Pan-India Supply"
        }
    },
    {
        id: 'double-sided-tapes',
        name: 'Double-Sided Tapes',
        icon: 'LayersIcon',
        subtitle: 'Powerful mounting and bonding solutions for any surface.',
        description: `Find the perfect invisible bonding solution with our extensive range of double-sided tapes. From general use <a href="/product/tissue-tape" class="text-brand-accent hover:underline font-semibold">double-sided tissue tape</a> and powerful <a href="/product/double-sided-cloth-tape" class="text-brand-accent hover:underline font-semibold">double-sided cloth tape</a>, to high-strength <a href="/product/vhb-tape" class="text-brand-accent hover:underline font-semibold">acrylic foam tapes (VHB)</a> that can replace mechanical fasteners, we have a solution for every mounting application. Our clothing-safe double-sided tapes are used in fashion, tailoring, and textile production. Bulk rolls available.`,
        seo: {
            title: "Double Sided Tape for Clothes | Fabric Tape Supplier",
            description: "Fabric-friendly double-sided tapes for clothing, hemming, and crafts. Bulk supply available across India from TapeIndia for all your textile needs.",
            h1: "Double Sided Fabric Tape Supplier"
        }
    },
    {
        id: 'specialty-tapes',
        name: 'Specialty Tapes',
        icon: 'SparklesIcon',
        subtitle: 'Engineered tapes for unique and demanding applications.',
        description: 'Explore our wide array of specialty tapes designed for specific industrial challenges. This category includes everything from packaging tapes and masking solutions to durable duct tapes, high-strength filament tapes, and various foam tapes for sealing and gasketing.',
        seo: {
            title: "Specialty Industrial Tapes | Masking, Duct & Packaging Tapes",
            description: "Find the right specialty tape for any job. Tape India supplies masking, duct, packaging, and filament tapes for various industrial applications.",
        }
    },
    {
        id: 'teflon-ptfe-tapes',
        name: 'PTFE & Teflon Tapes',
        icon: 'ThermometerIcon',
        subtitle: 'High-temperature, non-stick surfaces for industrial processes.',
        description: `Our PTFE & Teflon tapes offer superior non-stick properties, high-temperature resistance, and chemical inertness. They are essential for heat sealing, mold release, and creating low-friction surfaces in demanding manufacturing environments.`,
        seo: {
            title: "PTFE / Teflon Tape | Thread Seal & Leak-Proof Plumber Tape | TapeIndia",
            description: "High-quality PTFE tape for plumbing, sealing pipe threads & preventing leaks. Bulk orders & fast shipping from TapeIndia.",
            h1: "PTFE / Teflon Tape for Plumbing, Thread Seal & Leak Prevention"
        }
    },
    {
        id: 'antistatic-esd-tapes',
        name: 'Antistatic & ESD Tapes',
        icon: 'ZapIcon',
        subtitle: 'Protection for sensitive electronics from static discharge.',
        description: `Safeguard your sensitive components with our range of Antistatic and ESD tapes. We provide high-temperature polyimide (<a href="/product/kapton-tape" class="text-brand-accent hover:underline font-semibold">Kapton</a>) tapes for masking, conductive tapes for shielding, and thermal management tapes for reliable performance in electronics assembly.`,
        seo: {
            title: "ESD Anti-Static Tape | Safe for Electronics & PCB Use | TapeIndia",
            description: "Protect sensitive electronics with ESD-safe anti-static tape. Clean removal & static protection. Ideal for PCB work.",
            h1: "ESD / Anti-Static Tape for Electronics Assembly & Protection"
        }
    },
];

export const PRODUCTS: Product[] = [
  // Safety Tapes (14)
  {
    id: 'hazard-tape',
    name: 'Hazard Tape',
    category: 'safety-tapes',
    shortDescription: 'High-visibility non-adhesive tape for marking hazardous areas, construction sites, and ensuring workplace safety.',
    description: "Tape India's Hazard Tape is a non-adhesive, brightly colored polyethylene barrier tape designed for high visibility. Its contrasting black and yellow stripes serve as a clear visual warning to workers and the public, effectively marking off physical hazards, slip and trip areas, and restricted zones. Built for durability, this tape is tear-resistant and ideal for both indoor and outdoor use in demanding industrial and construction environments.",
    features: ['Bright, contrasting black & yellow stripes', 'High visibility from a distance', 'Durable and tear-resistant polyethylene', 'Non-adhesive for easy setup and removal', 'Weather-resistant for outdoor use'],
    uses: ['Marking physical hazards like low-hanging objects', 'Indicating trip hazards and unsafe flooring', 'Cordoning off construction and maintenance areas', 'Lane marking in warehouses and factories'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/hazardtape.webp'],
    seo: {
      title: "Hazard Tape Manufacturer | Black & Yellow Barrier Tape India",
      description: "As a leading Hazard Tape manufacturer, Tape India supplies high-visibility black and yellow barrier tape. Durable and tear-resistant for industrial safety."
    }
  },
  {
    id: 'floor-marking-tape',
    name: 'Floor Marking Tape',
    category: 'safety-tapes',
    shortDescription: 'Durable PVC tape for marking aisles, walkways, and safe zones in industrial environments to improve workflow and safety.',
    description: `Our heavy-duty Floor Marking Tape is engineered to withstand the rigors of industrial environments, including foot traffic, pallet jacks, and forklifts. Made from tough PVC with a strong rubber-based adhesive, it adheres securely to a variety of surfaces yet can be removed cleanly. Use it to implement 5S systems, mark safe walkways, designate storage areas, and enhance overall organizational efficiency and safety.`,
    features: ['High-visibility solid colors (Yellow, Red, Green, etc.)', 'Resistant to abrasion, moisture, and wear', 'Strong rubber-based adhesive for secure bonding', 'Easy to apply and removes cleanly from most surfaces', 'Conformable PVC backing'],
    uses: ['Warehouse and factory aisle marking', 'Designating social distancing spaces', 'Identifying safety equipment zones (fire extinguishers, eyewash stations)', 'Color-coding specific work areas'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp'],
    seo: {
      title: "Floor Marking Tape | Safety Marking Supplier",
      description: "Durable floor marking tapes for industrial safety and hazard marking. Available in multiple colors and sizes. Pan-India shipping.",
      h1: "Floor & Safety Marking Tape Supplier",
      imageAlt: "yellow floor marking tape on warehouse floor"
    }
  },
  {
    id: 'anti-skid-tape',
    name: 'Anti-Skid Tape',
    category: 'safety-tapes',
    shortDescription: 'High-traction safety tape with a mineral-coated surface to prevent slips and falls on stairs, ramps, and floors.',
    description: `Reduce the risk of workplace accidents with Tape India's Anti-Skid Tape. Featuring a durable, mineral-coated surface, it provides excellent traction on both wet and dry surfaces. The aggressive, pressure-sensitive adhesive ensures a long-lasting bond on stairs, ramps, walkways, and machinery floors. It is an essential safety solution for any industrial, commercial, or public area.`,
    features: ['Durable 60-grit mineral coating for high traction', 'Strong, waterproof adhesive for long-lasting performance', 'Suitable for indoor and outdoor applications', 'Resistant to oil, water, and common chemicals'],
    uses: ['Stairs, ladders, and ramps', 'Industrial walkways and loading docks', 'Floors around machinery', 'Entrances and commercial kitchens'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/coloured-anti-slip-tape.webp'],
    seo: {
      title: "Anti-Skid Tape Supplier | Safety Grip Tapes",
      description: "Anti-skid safety tapes for stairs, ramps and industrial flooring. Chennai-based supplier with Pan-India delivery.",
      h1: "Anti-Skid & Safety Grip Tape Supplier",
      imageAlt: "black anti-skid tape applied on stairs"
    }
  },
  {
    id: 'caution-tape',
    name: 'Caution Tape',
    category: 'safety-tapes',
    shortDescription: 'Lightweight, non-adhesive polyethylene tape for temporarily cordoning off restricted or potentially hazardous areas.',
    description: "Tape India's Caution Tape provides a quick and effective way to alert personnel to potential hazards. This non-adhesive barrier tape is lightweight and easy to deploy, making it ideal for temporarily restricting access to areas with wet floors, ongoing maintenance, or other short-term risks. The high-visibility yellow and bold black lettering are universally recognized for safety. Our caution tapes are perfect for construction sites, factories, and public safety zones, and are available in multiple colors.",
    features: ['High-visibility yellow with bold "CAUTION" text', 'Durable and lightweight polyethylene', 'Weather-resistant for temporary outdoor use', 'Economical and disposable'],
    uses: ['Blocking off wet floors or spills', 'Restricting access during cleaning or maintenance', 'Temporary crowd control at events', 'Identifying minor hazards on-site'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/caution%20tape.webp'],
    seo: {
      title: "Caution Tape Supplier | Hazard Marking",
      description: "Caution tapes for hazard marking and safety warnings. Chennai supplier with Pan-India delivery, ideal for construction sites and factories.",
      h1: "Caution & Warning Tape Supplier"
    }
  },
  {
    id: 'barricade-tape',
    name: 'Barricade Tape',
    category: 'safety-tapes',
    shortDescription: 'Heavy-duty, weather-resistant non-adhesive tape for creating highly visible barricades at work sites and public areas.',
    description: 'When a stronger warning is needed, our Barricade Tape provides a clear and authoritative boundary. Typically featuring red with "DANGER" or other strong messaging, this tape is more durable than standard caution tape, making it suitable for longer-term use and harsher outdoor conditions. It is an essential tool for securing construction zones, accident scenes, and areas with significant hazards.',
    features: ['Higher strength and durability than caution tape', 'Bold, clear messaging (e.g., DANGER, DO NOT ENTER)', 'Resistant to outdoor elements and UV exposure', 'Reusable in many situations'],
    uses: ['Securing construction and demolition zones', 'Restricting access to crime or accident scenes', 'Long-term area restrictions for utility work', 'Event management and public safety'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/barricade%20tape.webp'],
    seo: {
      title: "Barricade Tape | Danger & Construction Tape | Tape India",
      description: "Secure hazardous areas with heavy-duty barricade tape from Tape India. We supply DANGER and other warning tapes for construction and safety. Order online."
    }
  },
  {
    id: 'tamper-proof-security-packing-tape',
    name: 'Tamper Proof / Security Packing Tape',
    category: 'safety-tapes',
    shortDescription: 'Void-revealing security tape that provides clear, irreversible evidence of tampering to protect high-value shipments.',
    description: "Protect your valuable goods during transit with Tape India's Tamper-Proof Security Tape. This advanced packaging tape appears normal when applied, but if removal is attempted, it leaves behind a clear 'VOID' or 'OPENED' message on the carton surface. This provides an immediate and irreversible indication of unauthorized access, deterring theft and ensuring package integrity from origin to destination.",
    features: ["Leaves a clear 'VOID OPEN' message upon removal", "Strong adhesive ensures a secure initial seal", "Deters theft and unauthorized access", "Available in standard and custom prints"],
    uses: ["Securing high-value electronics and pharmaceuticals", "Protecting sensitive documents and evidence", "Sealing cash-in-transit bags and containers", "Securing duty-free and retail products"],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/tamper-proof-tape-1.webp'],
    seo: {
      title: "Tamper Proof Security Tape | Void Packing Tape | Tape India",
      description: "Secure your shipments with our tamper-evident security tape. Leaves a 'VOID' message upon removal to prevent theft. B2B supplier for logistics and packaging."
    }
  },
  {
    id: 'nastro-heavy-duty-floor-marking-tape',
    name: 'Nastro Heavy Duty Floor Marking Tape',
    category: 'safety-tapes',
    shortDescription: 'Premium, extra-thick laminated tape engineered to withstand extreme industrial traffic, including forklifts and heavy machinery.',
    description: "Nastro is our toughest floor marking solution, designed for the most demanding industrial environments. Its laminated surface resists heavy abrasion from forklifts, pallet jacks, and constant foot traffic, while the aggressive adhesive ensures long-term bonding. Beveled edges prevent lifting, making it a durable, long-lasting choice for 5S implementation and safety marking in high-traffic zones.",
    features: ['Extra thick and highly durable laminated PVC', 'Withstands forklift and heavy industrial traffic', 'Beveled edges prevent lifting and snagging', 'Aggressive adhesive for long-term application', 'Resistant to chemicals and cleaning agents'],
    uses: ['High-traffic warehouse aisles', 'Loading docks and manufacturing floors', '5S and Lean manufacturing visual management', 'Cold storage and harsh environments'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/nastro%20heavy%20duty%20floor%20marking.webp'],
    seo: {
      title: "Nastro Heavy Duty Floor Marking Tape | Forklift Resistant Tape",
      description: "Buy Nastro heavy-duty floor marking tape, designed to withstand forklift traffic. The ultimate durable solution for industrial aisle marking. From Tape India."
    }
  },
  {
    id: 'glow-in-the-dark-tape',
    name: 'Glow In The Dark Tape',
    category: 'safety-tapes',
    shortDescription: 'Photoluminescent adhesive tape that absorbs light and glows brightly in darkness to mark safety paths and emergency exits.',
    description: 'Enhance egress safety during power failures with our Glow in the Dark Tape. This photoluminescent tape absorbs energy from ambient light sources and releases it as a bright, visible glow when the lights go out. It is an essential, code-compliant component for marking escape routes, stairways, handrails, and emergency equipment locations, ensuring clear guidance in critical situations. Our glow tapes provide visibility during power outages and low-light conditions, ideal for safety marking.',
    features: ['Charges in natural or artificial light', 'Long-lasting and bright afterglow', 'Durable adhesive backing for various surfaces', 'Improves safety during power outages', 'Meets safety standards for egress marking'],
    uses: ['Marking emergency exits and escape routes', 'Outlining stairways, corridors, and handrails', 'Highlighting light switches and fire extinguishers', 'Low-light safety marking in theaters and venues'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark.webp'],
    seo: {
      title: "Glow Tape Supplier | Luminous Safety Tape",
      description: "Glow-in-the-dark safety tapes for marking exits, stairways and low-light areas. Pan-India supply for enhanced emergency visibility.",
      h1: "Glow Tape & Photoluminescent Tape Supplier"
    }
  },
  {
    id: 'photoluminescent-film',
    name: 'Photoluminescent Film',
    category: 'safety-tapes',
    shortDescription: 'A flexible, self-adhesive vinyl film that glows in the dark, perfect for creating custom safety signs and markings.',
    description: "Our Photoluminescent Film is a versatile solution for creating custom glow-in-the-dark safety signage. This high-performance vinyl film can be easily cut with a plotter into letters, shapes, and symbols. With its high-intensity, long-lasting glow and durable adhesive backing, it's the ideal material for producing code-compliant exit signs, directional markers, and equipment labels.",
    features: ['Can be die-cut or plotter-cut into any shape', 'High-intensity, long-lasting luminance', 'Durable and flexible vinyl construction', 'Meets international safety standards for exit markings'],
    uses: ['Creating custom safety and exit signs', 'Low-level egress path marking systems', 'Marine, aerospace, and rail safety applications', 'Labeling emergency controls and equipment'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/Photoluminescent%20Film.webp'],
    seo: {
      title: "Photoluminescent Film | Glow in the Dark Vinyl | Tape India",
      description: "Create custom safety signs with our photoluminescent film. This glow-in-the-dark vinyl is self-adhesive and ideal for egress marking. B2B supplier."
    }
  },
  {
    id: 'anti-skid-tape-with-centre-glow',
    name: 'Anti-Skid Tape with Centre Glow',
    category: 'safety-tapes',
    shortDescription: 'A dual-function safety tape combining high-traction anti-skid properties with a central photoluminescent strip for visibility.',
    description: 'This innovative tape offers 24/7 safety by combining two critical functions. The durable mineral grit surface provides exceptional slip resistance in all conditions, while the integrated central stripe absorbs light and glows in the dark, clearly defining stair edges and pathways during a power failure. It is the ultimate safety solution for stairways and walkways in public and industrial spaces.',
    features: ['Combines anti-slip surface with glow-in-the-dark guidance', 'Durable mineral grit for high traction', 'Photoluminescent stripe recharges with ambient light', 'Ideal for stair nosings and hazardous walkways'],
    uses: ['Stairways in cinemas, warehouses, and public buildings', 'Emergency pathways in low-light environments', 'Ramps and platforms requiring constant safety', 'Marine, offshore, and transport applications'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid%20glow%20in%20dark.webp'],
    seo: {
      title: "Buy Anti-Skid Glow Tape | Photoluminescent Grip Tape",
      description: "Enhance stairway safety with anti-skid tape featuring a glow-in-the-dark center stripe. Provides excellent grip and visibility. From Tape India."
    }
  },
  {
    id: 'esd-floor-marking-tape',
    name: 'ESD Floor Marking Tape',
    category: 'safety-tapes',
    shortDescription: 'Specially designed floor tape with static dissipative properties for safely marking Electrostatic Protected Areas (EPAs).',
    description: 'Clearly define your ESD-safe zones with our ESD Floor Marking Tape. This durable tape features the standard ESD caution symbol and text, providing a clear visual boundary for Electrostatic Protected Areas (EPAs). Unlike standard floor tape, its material and adhesive are designed to be low-charging and safe for use in electronics manufacturing, assembly, and repair environments.',
    features: ['Clearly identifies Electrostatic Protected Areas (EPAs)', 'Durable PVC with low-charging (antistatic) properties', 'Leaves no residue upon removal', 'Printed with universal ESD symbol and text'],
    uses: ['Defining boundaries of ESD-safe workstations', 'Aisle marking in electronics manufacturing facilities', 'Indicating mandatory grounding points', 'Use in cleanrooms, labs, and server rooms'],
    industries: ['packaging-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20floor%20marking.webp'],
    seo: {
      title: "ESD Floor Marking Tape | Antistatic Aisle Tape | Tape India",
      description: "Define your EPA with our ESD floor marking tape. This antistatic tape is essential for safety in electronics manufacturing environments. Buy in bulk from Tape India."
    }
  },
  {
    id: 'glow-in-dark-marking-tapes',
    name: 'Glow in Dark Marking Tapes',
    category: 'safety-tapes',
    shortDescription: 'High-performance photoluminescent tapes for marking egress routes, stairs, and emergency equipment with a long-lasting glow.',
    description: "Our premium Glow in Dark Marking Tapes are engineered to exceed safety standards, providing a bright, long-lasting glow in complete darkness. Essential for building safety, these tapes ensure that egress routes, fire-fighting equipment, and emergency exits are clearly visible during a power failure or fire emergency. Their durable construction ensures reliable performance under foot traffic.",
    features: ['High-intensity glow exceeding safety standards', 'Rapid charging from ambient light sources', 'Durable construction withstands foot traffic', 'Available in various widths for different applications'],
    uses: ['Code-compliant building egress systems', 'Marking escape routes on ships, aircraft, and trains', 'Highlighting first aid stations and fire alarms', 'Theatrical and stage marking for safety'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/glowindark%20marking.webp'],
    seo: {
      title: "Glow in the Dark Marking Tape | Egress Path Tapes | Tape India",
      description: "Buy high-performance glow-in-the-dark marking tapes for emergency egress paths. Long-lasting, bright, and durable. From Tape India, your safety supplier."
    }
  },
  {
    id: 'heavy-duty-anti-skid-tape',
    name: 'Heavy Duty Anti Skid Tape',
    category: 'safety-tapes',
    shortDescription: 'An exceptionally durable anti-skid tape with a coarse mineral grit surface for maximum traction in demanding industrial environments.',
    description: 'Engineered for the toughest conditions, our Heavy Duty Anti-Skid Tape features an extra-coarse mineral grit surface for maximum slip resistance. It stands up to heavy vehicle traffic, including forklifts and pallet jacks, as well as constant foot traffic in greasy or wet industrial areas. The aggressive adhesive ensures it stays put, providing a long-term solution for preventing slips and falls.',
    features: ['Coarse 60-grit mineral surface for maximum traction', 'Resistant to heavy vehicle and foot traffic', 'Extra-strong adhesive for difficult or contaminated surfaces', 'Resistant to weather, water, and chemicals'],
    uses: ['Industrial workshops and machine areas', 'Outdoor ramps and loading docks', 'Agricultural and construction equipment steps', 'Areas with heavy oil, grease, or water presence'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20skid.webp'],
    seo: {
      title: "Heavy-Duty Anti-Skid Tape | Industrial Grade Grip Tape",
      description: "Get maximum traction with our heavy-duty anti-skid tape. Perfect for industrial floors, ramps, and equipment with heavy traffic. Order from Tape India."
    }
  },
  {
    id: 'anti-slip-tape-for-bath-and-shower',
    name: 'Anti-Slip Tape for Bath and Shower',
    category: 'safety-tapes',
    shortDescription: 'A clear, waterproof, and non-abrasive anti-slip tape designed to provide safe footing in wet areas like bathtubs and showers.',
    description: 'Provide safe, comfortable footing in wet areas with our Anti-Slip Tape for Bath and Shower. Unlike gritty tapes, its fine, rubberized texture is gentle on bare feet while offering excellent slip resistance. The clear, 100% waterproof design blends seamlessly with any decor, making it a discreet and essential safety addition for homes, hotels, gyms, and pools.',
    features: ['Soft, non-abrasive texture is gentle on bare feet', '100% waterproof and mold/mildew resistant adhesive', 'Transparent design is nearly invisible', 'Strong acrylic adhesive for long-lasting use in wet environments'],
    uses: ['Bathtubs and shower floors', 'Pool decks, steps, and ladders', 'Locker rooms, spas, and saunas', 'Boat decks, surfboards, and other watercraft'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20slip%20bathroom.webp'],
    seo: {
      title: "Anti-Slip Tape for Bath & Shower | Waterproof Grip Tape",
      description: "Make wet areas safer with our clear, non-abrasive anti-slip tape. Perfect for bathtubs, showers, and pools. Gentle on feet. Buy from Tape India."
    }
  },

  // Reflective Tapes (13)
  {
    id: 'silver-tc-reflective-tape',
    name: 'Silver T/C Reflective Tape',
    category: 'reflective-tapes',
    shortDescription: 'High-quality, sew-on reflective tape with a comfortable polyester-cotton (T/C) base, designed for safety workwear.',
    description: 'This sew-on reflective tape is a staple for the safety apparel industry. It features high-index glass beads bonded to a durable and comfortable polyester/cotton blend backing. This construction ensures high reflectivity for visibility in low light while offering excellent durability through repeated industrial laundering, making it the standard choice for professional safety vests and workwear.',
    features: ['High-index glass bead technology for superior brightness', 'Durable and comfortable T/C (polyester/cotton) backing', 'Excellent home and industrial wash durability', 'Sew-on application for permanent garment attachment'],
    uses: ['High-visibility safety vests and jackets', 'Workwear for construction, road, and railway workers', 'Uniforms for emergency services personnel', 'Jogging, cycling, and children\'s apparel'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'],
    seo: {
      title: "Silver Reflective Tape for Sewing | T/C Fabric Safety Tape",
      description: "Buy high-quality, sew-on silver reflective tape for safety apparel. Durable T/C backing and excellent washability. Manufacturer direct from Tape India."
    }
  },
  {
    id: 'heat-transfer-reflective-tape',
    name: 'Heat Transfer Reflective Tape',
    category: 'reflective-tapes',
    shortDescription: 'A reflective film designed to be heat-pressed onto garments, allowing for custom designs and logos on safety and athletic wear.',
    description: 'Our Heat Transfer Reflective Tape allows for the creation of custom, permanent reflective designs on textiles. This film can be plotter-cut into intricate logos, letters, or segmented patterns and then permanently bonded to fabric using a heat press. It offers excellent reflectivity and wash durability while maintaining the flexibility of the garment, perfect for sportswear and branded safety apparel. We supply heat transfer paper for garment printing, fabric marking, and industrial applications, with nationwide delivery from our Chennai base.',
    features: ['Heat-activated adhesive for permanent application', 'Can be plotter cut into custom logos and designs', 'Stretches with fabric without cracking or peeling', 'Maintains high reflectivity after repeated washing'],
    uses: ['Custom branding on corporate safety apparel', 'Logos and accents on athletic and team sportswear', 'Segmented tape designs for enhanced flexibility', 'Decorative and safety elements on fashion garments'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/heattransfer.webp'],
    seo: {
      title: "Heat Transfer Paper Supplier | Chennai & Pan-India",
      description: "Heat transfer paper for garment printing and textile applications. Chennai-based supplier shipping Pan-India for all your fabric design needs.",
      h1: "Heat Transfer Paper Supplier — TapeIndia"
    }
  },
  {
    id: 'vinyl-heat-transfer-reflective-film',
    name: 'Vinyl Heat Transfer Reflective Film',
    category: 'reflective-tapes',
    shortDescription: 'Premium reflective vinyl film optimized for easy plotter cutting, weeding, and heat application onto various fabrics.',
    description: "This high-quality reflective film is engineered for professionals. It offers superior ease of use, from smooth cutting on vinyl plotters to effortless weeding of intricate designs. Its soft, flexible feel on fabric and excellent durability make it the go-to choice for producing high-quality custom apparel with brilliant reflective properties for fashion, corporate, and safety applications.",
    features: ['Optimized for easy cutting and weeding', 'Soft, flexible feel on fabric post-application', 'High-visibility reflective performance', 'Compatible with cotton, polyester, and poly-cotton blends'],
    uses: ['Detailed logos for corporate workwear and uniforms', 'Creative designs for high-end fashion and sportswear', 'Lettering and numbering for athletic team jerseys', 'Adding reflective safety elements to bags and accessories'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/Heat-Transfer-Reflective-Vinyl-Film-Tape-Heat-Transfer-Segmented-Reflective-Tape.webp'],
    seo: {
      title: "Reflective Heat Transfer Vinyl (HTV) Film | Tape India",
      description: "Premium reflective HTV for custom apparel. Easy to cut and weed, our vinyl film is perfect for safety wear, sportswear, and fashion. Supplier in India."
    }
  },
  {
    id: 'pvc-reflective-tape',
    name: 'PVC Reflective Tape',
    category: 'reflective-tapes',
    shortDescription: 'A flexible, self-adhesive reflective tape that enhances visibility of vehicles, equipment, and fixed objects in low-light conditions.',
    description: "Tape India's PVC Reflective Tape is an effective and economical solution for enhancing visibility. Using enclosed lens retro-reflective technology, it bounces light back towards its source, making objects stand out in the dark. Its flexible PVC construction conforms well to surfaces, and the aggressive adhesive ensures a durable bond, making it ideal for vehicle conspicuity, hazard marking, and general safety applications.",
    features: ['Enclosed lens retro-reflective technology', 'Flexible and conformable PVC material', 'Aggressive pressure-sensitive adhesive', 'Resistant to weather, dirt, and aging'],
    uses: ['Vehicle conspicuity marking (trucks, trailers, buses)', 'Marking bollards, gates, poles, and barricades', 'Safety helmets, bicycles, and personal equipment', 'Industrial machinery and farm equipment'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp'],
    seo: {
      title: "PVC Reflective Tape | High-Visibility Conspicuity Tape India",
      description: "Enhance nighttime visibility with our PVC reflective tape. Ideal for vehicles, equipment, and safety marking. B2B supplier of reflective solutions."
    }
  },
  {
    id: 'reflective-yarn-thread',
    name: 'Reflective Yarn / Thread',
    category: 'reflective-tapes',
    shortDescription: 'A fine, high-visibility thread made with retro-reflective properties for weaving, embroidery, or decorative stitching.',
    description: "Integrate 360-degree reflectivity directly into your textiles with our Reflective Yarn. This innovative thread is made by wrapping a reflective film around a polyester core, creating a product that can be woven, knitted, or embroidered just like standard yarn. It adds a subtle, high-end reflective element to fabrics, providing both a unique design accent and enhanced visibility.",
    features: ['Retro-reflective micro glass bead construction', 'Can be integrated directly into textiles', 'Soft, flexible, and easy to work with', 'Adds 360-degree, all-angle reflectivity'],
    uses: ['Weaving into fabrics for safety and fashion apparel', 'Embroidery details on caps, jackets, and logos', 'Decorative and safety stitching on footwear and gloves', 'Knitting into hats, scarves, and athletic gear'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-yarn-2-0-mm-double-side-500x500%20(1).webp'],
    seo: {
      title: "Reflective Yarn & Thread Wholesaler | Tape India",
      description: "Buy reflective yarn and thread for weaving, knitting, and embroidery. Integrate 360-degree visibility directly into your textiles. Bulk supplier in India."
    }
  },
  {
    id: 'flame-retardant-reflective-tape',
    name: 'Flame Retardant Reflective Tape',
    category: 'reflective-tapes',
    shortDescription: 'Specialized reflective tape constructed with flame-retardant materials for use on safety apparel in high-risk environments.',
    description: 'Engineered for ultimate protection, our Flame-Retardant (FR) Reflective Tape is essential for workwear used in fire-risk environments. Constructed from materials like aramid fiber, it is certified to meet stringent FR safety standards (e.g., NFPA). It maintains its reflectivity even after exposure to heat and flame, ensuring workers in industries like firefighting, welding, and oil & gas remain visible and safe.',
    features: ['Certified to meet key FR safety standards (NFPA, EN 469)', 'Aramid fiber base for exceptional heat and flame resistance', 'Maintains reflectivity after thermal exposure', 'Durable through repeated industrial laundering'],
    uses: ['Firefighter turnout gear and uniforms', 'Welding jackets, aprons, and spats', 'Workwear for oil & gas and electrical utility workers', 'Aerospace and military applications'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/material-fr-reflective-tape-all%20(1).webp'],
    seo: {
      title: "Flame Retardant (FR) Reflective Tape | Tape India",
      description: "Buy certified FR reflective tape for firefighter gear and industrial workwear. Heat and flame resistant for maximum safety. B2B supplier of FR materials."
    }
  },
  {
    id: 'hi-reflective-polyester-fabric',
    name: 'Hi-Reflective Polyester Fabric',
    category: 'reflective-tapes',
    shortDescription: 'A 100% polyester fabric featuring a high-intensity reflective surface, designed for professional high-visibility safety apparel.',
    description: 'This fabric is designed for maximum conspicuity. Using high-grade glass bead or prismatic technology, our Hi-Reflective Polyester Fabric offers superior brightness to ensure workers are seen in hazardous conditions. Certified to meet high-visibility standards like ANSI/ISEA 107, it is a durable and lightweight choice for vests, jackets, and rainwear where visibility is paramount.',
    features: ['Certified high-visibility material (ANSI/ISEA 107)', '100% polyester for durability and quick drying', 'Superior brightness and wide-angle reflectivity', 'Lightweight and comfortable for all-day wear'],
    uses: ['High-visibility safety vests (Class 2 and Class 3)', 'Rainwear and outerwear for road and construction crews', 'Backpacks, bags, and accessories', 'Pet safety products'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20reflective%20polyester.webp'],
    seo: {
      title: "Hi-Reflective Polyester Fabric | ANSI 107 Safety Fabric",
      description: "Source high-visibility polyester fabric from Tape India. Certified to meet ANSI 107 standards, it's ideal for manufacturing safety vests and workwear."
    }
  },
  {
    id: 'hi-reflective-tc-fabric',
    name: 'Hi-Reflective T/C Fabric',
    category: 'reflective-tapes',
    shortDescription: 'A durable polyester-cotton blend fabric with a highly reflective surface, ideal for comfortable and long-lasting workwear.',
    description: 'Combining the comfort of cotton with the durability of polyester, our Hi-Reflective T/C Fabric is the perfect material for high-quality workwear. It provides excellent reflectivity for safety while offering superior breathability and comfort for the wearer. This fabric withstands rigorous industrial laundering, making it a cost-effective choice for uniforms and safety apparel.',
    features: ['Polyester/cotton blend for comfort and durability', 'High-intensity reflective properties', 'Excellent wash durability', 'Softer hand-feel than 100% polyester'],
    uses: ['Work shirts, trousers, and coveralls', 'Uniforms for transport and logistics workers', 'Durable safety vests', 'Caps and other work accessories'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/hipoloyster.webp'],
    seo: {
      title: "Hi-Reflective T/C Fabric | Polyester-Cotton Safety Fabric",
      description: "Buy durable, high-visibility T/C fabric from Tape India. This reflective poly-cotton blend is ideal for comfortable work shirts, trousers, and uniforms."
    }
  },
  {
    id: 'oxford-reflective-ribbon',
    name: 'Oxford Reflective Ribbon',
    category: 'reflective-tapes',
    shortDescription: 'Durable reflective ribbon made from tough Oxford fabric, ideal for sewing onto outdoor gear, bags, and heavy-duty apparel.',
    description: 'Our Oxford Reflective Ribbon is built for toughness. Made by applying a reflective stripe to a durable Oxford fabric base, this ribbon offers excellent abrasion resistance and strength. It is the perfect choice for adding a reflective element to products that face hard wear, such as backpacks, outdoor gear, and heavy-duty workwear.',
    features: ['Durable Oxford fabric base', 'High-visibility reflective stripe', 'Excellent strength and abrasion resistance', 'Sew-on application for versatile use'],
    uses: ['Reinforcing seams on backpacks and luggage', 'Straps and accents on outdoor equipment', 'Heavy-duty workwear and industrial apparel', 'Pet collars and leashes'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/oxfordrefle.webp'],
    seo: {
      title: "Oxford Reflective Ribbon | Heavy-Duty Reflective Trim Tape",
      description: "Add a durable reflective element with our Oxford ribbon. Ideal for sewing onto backpacks, outdoor gear, and heavy-duty workwear. Supplier in India."
    }
  },
  {
    id: 'reflective-piping',
    name: 'Reflective Piping',
    category: 'reflective-tapes',
    shortDescription: 'A reflective cord-edge trim used to define seams and add a sleek, 360-degree reflective accent to garments and accessories.',
    description: 'Reflective Piping is a stylish and effective way to add visibility to textiles. It consists of a reflective cord encased in fabric, which is sewn into the seams of garments. This technique creates a clean, defined reflective line that follows the contours of the product, adding a high-end design touch while enhancing safety from all angles.',
    features: ['Adds a defined, 3D reflective line', 'Flexible and easy to sew into seams', 'Provides 360-degree visibility', 'Available in various colors and widths'],
    uses: ['Accenting seams on athletic jackets and pants', 'Outlining pockets and design features on bags', 'Footwear design and safety enhancement', 'Children\'s clothing and accessories'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/grey-reflective-piping.webp'],
    seo: {
      title: "Reflective Piping for Sewing | Reflective Trim | Tape India",
      description: "Enhance garment design and safety with reflective piping. This sew-in trim adds a sleek, 360-degree reflective line. Buy direct from Tape India."
    }
  },
  {
    id: 'ordinary-reflective-polyester-fabric',
    name: 'Ordinary Reflective Polyester Fabric',
    category: 'reflective-tapes',
    shortDescription: 'A standard-grade reflective polyester fabric suitable for general safety, novelty, and non-certified apparel applications.',
    description: 'This is an economical choice for applications where certified high-visibility is not required. Our Ordinary Reflective Polyester Fabric provides good reflectivity for novelty items, casual wear, and general safety use. It is lightweight, durable, and easy to work with, making it a versatile material for a wide range of creative and safety-conscious projects.',
    features: ['Economical reflective solution', '100% polyester construction', 'Good brightness for general visibility', 'Easy to cut and sew'],
    uses: ['Promotional items and event giveaways', 'Costumes and decorative apparel', 'Craft projects and accessories', 'Non-certified safety items for casual use'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/ordinary%20polyster%20fabric.webp'],
    seo: {
      title: "Buy Ordinary Reflective Polyester Fabric | Tape India",
      description: "An economical reflective polyester fabric perfect for novelty items, crafts, and general safety applications where certification is not required. From Tape India."
    }
  },
  {
    id: 'woven-reflective-ribbon',
    name: 'Woven Reflective Ribbon',
    category: 'reflective-tapes',
    shortDescription: 'A versatile woven ribbon with reflective yarn integrated directly into the fabric, providing a soft texture and two-sided visibility.',
    description: 'Unlike tapes with a surface application, our Woven Reflective Ribbon has reflective threads woven directly into its structure. This results in a soft, flexible ribbon that is reflective on both sides and maintains its texture and drape. It is an excellent choice for applications where a softer hand-feel and two-sided visibility are desired.',
    features: ['Reflective yarn is part of the ribbon\'s structure', 'Soft and flexible hand-feel', 'Reflective on both sides', 'Can be used as drawstrings, laces, or trim'],
    uses: ['Drawstrings on jackets and bags', 'Decorative trim on apparel and accessories', 'Shoelaces for athletic footwear', 'Webbing and straps'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/woven'],
    seo: {
      title: "Woven Reflective Ribbon | Double-Sided Reflective Trim",
      description: "Soft, flexible, and reflective on both sides. Our woven ribbon is ideal for drawstrings, shoelaces, and decorative trim. Buy online from Tape India."
    }
  },
  {
    id: 'ordinary-reflective-tc-fabric',
    name: 'Ordinary Reflective T/C Fabric',
    category: 'reflective-tapes',
    shortDescription: 'A standard-grade polyester-cotton blend fabric with reflective properties, offering comfort for general use.',
    description: 'This fabric combines the comfort of cotton with the durability of polyester, coated with a standard-grade reflective layer. It is a cost-effective option for creating comfortable garments and accessories for casual use where high-visibility certification is not a requirement, but enhanced visibility is still desirable.',
    features: ['Polyester/cotton blend for comfort', 'Standard-grade reflectivity', 'Good breathability', 'Economical choice for non-certified apparel'],
    uses: ['Casual jackets and trousers', 'Bags and backpacks', 'Comfortable workwear for low-risk environments', 'Pet apparel and accessories'],
    industries: ['reflective-safety-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp'],
    seo: {
      title: "Ordinary Reflective T/C Fabric | Poly-Cotton Blend | Tape India",
      description: "A comfortable and economical reflective T/C fabric. Ideal for casual wear and general safety applications. B2B supplier Tape India."
    }
  },

  // Double Sided Tapes (18)
  {
    id: '3m-double-sided-foam-tape',
    name: '3M Double Sided Foam Tape',
    category: 'double-sided-tapes',
    shortDescription: 'High-performance 3M foam tape with a conformable acrylic foam core for strong, durable bonding and mounting applications.',
    description: "As an authorized distributor, Tape India offers genuine 3M™ Double Sided Foam Tapes known for their superior performance. These tapes feature a viscoelastic acrylic foam core that provides an excellent balance of strength and conformability. They are ideal for bonding a wide variety of substrates, including metals, plastics, and glass, offering excellent temperature and solvent resistance.",
    features: ['Genuine 3M™ quality and performance', 'Viscoelastic acrylic foam core absorbs shock and stress', 'Excellent for bonding dissimilar materials', 'High temperature and solvent resistance', 'Creates a permanent, weatherproof seal'],
    uses: ['Automotive trim and emblem attachment', 'Mounting signs, nameplates, and decorative trim', 'Electronics component assembly', 'Structural bonding in place of mechanical fasteners'],
    industries: ['print-labels-signage-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20foam%20tape'],
    seo: {
      title: "3M Material Supplier | Chennai & Pan-India",
      description: "3M tapes, adhesives, and materials supplier in Chennai. Bulk supply and Pan-India delivery for industrial and commercial applications.",
      h1: "3M Material Supplier — TapeIndia"
    }
  },
  {
    id: 'tissue-tape',
    name: 'Tissue Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A versatile, general-purpose double-sided tape with a tissue paper carrier, ideal for lightweight mounting and splicing.',
    description: "Our Double Sided Tissue Tape is a versatile and economical solution for a wide range of applications. It features a non-woven tissue paper carrier coated on both sides with a high-quality rubber or acrylic adhesive. It is easy to tear by hand and conforms well to irregular surfaces, making it perfect for stationery, paper splicing, crafting, and light-duty mounting. Our double-sided tissue tapes are ideal for bonding paper, leather, and foam in industrial applications, and are available in multiple roll sizes.",
    features: ['Easy to tear by hand', 'Conformable to irregular surfaces', 'Available with rubber or acrylic adhesive', 'Excellent for paper and lightweight materials'],
    uses: ['Splicing paper webs in printing and converting', 'Mounting posters, photos, and lightweight signs', 'General office and stationery use', 'Crafting and scrapbooking'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/tissue%20tape.webp'],
    seo: {
      title: "Double Sided Tissue Tape | Bulk Supplier",
      description: "Double-sided tissue tapes for bonding, lamination, and splicing. Bulk supply available Pan-India for industrial and commercial needs.",
      h1: "Double Sided Tissue Tape Supplier"
    }
  },
  {
    id: 'polyester-double-sided-tape',
    name: 'Polyester Double Sided Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A thin yet strong double-sided tape with a polyester film carrier, providing excellent dimensional stability for demanding applications.',
    description: "This high-performance tape features a strong polyester (PET) film carrier coated with a high-tack acrylic adhesive. The PET carrier provides excellent dimensional stability, preventing stretching and ensuring precise application. Its thin profile makes it ideal for laminating and bonding where a minimal gap is required, and it offers excellent resistance to high temperatures and solvents.",
    features: ['High tensile strength and dimensional stability', 'Thin profile for invisible bonding lines', 'Excellent temperature and chemical resistance', 'Transparent carrier for clear applications'],
    uses: ['Laminating flexible circuits and membrane switches', 'Mounting ABS plastic parts in the automotive industry', 'Splicing films, foils, and papers', 'Nameplate and decorative trim bonding'],
    industries: ['print-labels-signage-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyester%20double%20side.webp'],
    seo: {
      title: "Polyester Double Sided Tape | PET Film Tape | Tape India",
      description: "Buy high-strength, thin double-sided polyester tape. Ideal for electronics, automotive, and lamination applications requiring dimensional stability."
    }
  },
  {
    id: 'vhb-tape',
    name: 'VHB Tape',
    category: 'double-sided-tapes',
    shortDescription: 'Very High Bond (VHB) acrylic foam tape that can replace mechanical fasteners like rivets, welds, and screws for permanent bonding.',
    description: "Tape India supplies VHB (Very High Bond) tapes that offer a revolutionary alternative to traditional mechanical fasteners. This all-acrylic construction provides extraordinary strength, durability, and elasticity. It creates a permanent, waterproof, and weatherproof seal, distributing stress over the entire bond line and withstanding thermal expansion and contraction. It is the ultimate solution for demanding structural bonding applications.",
    features: ['Incredible strength can replace mechanical fasteners', 'Creates a permanent seal against water and moisture', 'Viscoelastic properties absorb shock and impact', 'Resistant to UV, solvents, and temperature extremes'],
    uses: ['Architectural panel and curtain wall bonding', 'Mounting signs and letters on buildings', 'Truck, trailer, and specialty vehicle assembly', 'Bonding glass, metals, and composite materials'],
    industries: ['print-labels-signage-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/vhb%20tape.webp'],
    seo: {
      title: "VHB Tape Supplier India | Very High Bond Tapes | Tape India",
      description: "Replace rivets and screws with VHB tape. Tape India supplies very high bond tapes for structural bonding in construction, automotive, and signage."
    }
  },
  {
    id: 'lohmann-duploflex-tape',
    name: 'Lohmann Duploflex Tape',
    category: 'double-sided-tapes',
    shortDescription: 'High-performance foam tapes from Lohmann, specifically engineered for superior flexographic printing plate mounting.',
    description: "As a supplier of industry-leading brands, we offer Lohmann's DuploFLEX® range of plate mounting tapes. These foam tapes are the industry standard in flexographic printing, designed to provide the perfect balance of adhesion, compressibility, and resilience. Different foam hardnesses are available to optimize print quality for solids, lines, and halftones, ensuring crisp results and easy demounting.",
    features: ['Industry-standard for flexographic plate mounting', 'Variety of foam densities for optimized print quality', 'Superior resilience for long and high-speed print runs', 'Structured adhesive for air-bubble-free mounting'],
    uses: ['Mounting photopolymer plates onto cylinders and sleeves', 'Flexible packaging printing', 'Label printing', 'Corrugated post-print applications'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/lohman.webp'],
    seo: {
      title: "Lohmann Duploflex Plate Mounting Tape | Tape India",
      description: "Optimize your print quality with Lohmann DuploFLEX foam tapes for flexographic plate mounting. Supplier of flexo tapes in India. Get a quote."
    }
  },
  {
    id: 'pe-foam-tape',
    name: 'PE Foam Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A conformable, closed-cell polyethylene foam tape used for general-purpose mounting, sealing, cushioning, and insulation.',
    description: 'Our Double Sided PE Foam Tape is a versatile and cost-effective solution for a variety of applications. The closed-cell polyethylene foam carrier is highly conformable, allowing it to bond to irregular surfaces and fill gaps. It provides excellent cushioning and vibration damping properties, making it ideal for general mounting, gasketing, and sealing against dust and moisture.',
    features: ['Conformable closed-cell PE foam', 'Good cushioning and vibration damping', 'Seals against dust, light, and moisture', 'Available in various thicknesses and densities'],
    uses: ['Mounting lightweight signs, mirrors, and hooks', 'Gasketing in window and door frames', 'Cushioning and gap-filling in electronics', 'Automotive weatherstripping'],
    industries: ['double-sided-tapes'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/pe%20foam%20tape.webp'],
    seo: {
      title: "Double Sided PE Foam Tape | Mounting & Sealing Tape",
      description: "Buy versatile PE foam tape from Tape India. Ideal for mounting, gasketing, and cushioning. Conformable and cost-effective. Bulk supplier."
    }
  },
  {
    id: 'pet-double-sided-tape',
    name: 'PET Double Sided Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A thin, durable polyester tape providing reliable bonding and high-temperature resistance in electronics and automotive applications.',
    description: "Featuring a clear, strong polyester (PET) film carrier, this tape offers exceptional mechanical strength and thermal resistance in a thin profile. It is the preferred choice for applications requiring a secure bond with minimal thickness, such as laminating foam, bonding plastic components, and splicing thin films where stability is critical.",
    features: ['High shear strength and excellent adhesion', 'Performs well at high temperatures', 'Resistant to plasticizers and chemicals', 'Optically clear for invisible bonding'],
    uses: ['Laminating foams and fabrics in automotive interiors', 'Mounting lightweight trim and components', 'Splicing materials in high-speed processes', 'Assembly of electronic components and displays'],
    industries: ['print-labels-signage-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/pet%20double%20sided%20tape.webp'],
    seo: {
      title: "PET Double Sided Tape | High-Temp Polyester Tape | Tape India",
      description: "Source high-performance PET double-sided tape from Tape India. Thin, strong, and temperature-resistant, it's ideal for electronics and automotive bonding."
    }
  },
  {
    id: 'transfer-tape',
    name: 'Transfer Tape',
    category: 'double-sided-tapes',
    shortDescription: 'An unsupported acrylic adhesive tape on a release liner, perfect for die-cutting, lamination, and bonding of thin, flexible materials.',
    description: 'Adhesive Transfer Tape is a film of pure adhesive with no carrier, supplied on a silicone-coated release liner. This construction allows it to be extremely thin and conformable, making it the ideal choice for laminating foams, fabrics, and films. It is also easily die-cut into precise shapes for gasket attachment and nameplate bonding.',
    features: ['No carrier for maximum thinness and conformability', 'Excellent for die-cutting into custom shapes', 'High initial tack for quick bonding', 'Available in various adhesive formulations (e.g., high-temp, low-VOC)'],
    uses: ['Laminating adhesive to foams, felts, and fabrics', 'Bonding graphic overlays and membrane switches', 'Mounting nameplates and decorative plates', 'General industrial joining and assembly'],
    industries: ['print-labels-signage-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/transfer%20tape.webp'],
    seo: {
      title: "Adhesive Transfer Tape Manufacturer | Die-Cutting Tapes",
      description: "Buy adhesive transfer tape from Tape India. Ideal for laminating, die-cutting, and bonding flexible materials. Carrier-free for maximum conformability."
    }
  },
  {
    id: 'acrylic-double-sided-tape',
    name: 'Acrylic Double Sided Tape',
    category: 'double-sided-tapes',
    shortDescription: 'High-performance acrylic adhesive tape that provides a strong, durable, and weather-resistant bond for demanding applications.',
    description: "Our Acrylic Double Sided Tapes are engineered for strength and durability. The all-acrylic adhesive offers superior resistance to UV light, temperature extremes, and chemicals compared to rubber-based adhesives. This makes it an excellent choice for long-term outdoor mounting and bonding applications where reliability is critical.",
    features: ['Superior UV and weather resistance', 'High temperature performance', 'Excellent shear strength for heavy loads', 'Bonds well to metals, glass, and medium surface energy plastics'],
    uses: ['Long-term outdoor sign and letter mounting', 'Automotive trim and accessory attachment', 'Architectural cladding and panel bonding', 'Permanent bonding of transparent materials'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/Acrylic%20Double%20Sided%20Tape%20(1).webp'],
    seo: {
      title: "Acrylic Double Sided Tape | Weather-Resistant Bonding Tape",
      description: "For durable, weather-resistant bonds, choose acrylic double-sided tape from Tape India. Ideal for outdoor mounting and demanding applications."
    }
  },
  {
    id: 'double-sided-thermal-tape',
    name: 'Double Sided Thermal Tape',
    category: 'double-sided-tapes',
    shortDescription: 'Thermally conductive adhesive tape designed for bonding heat sinks to electronic components, ensuring efficient heat dissipation.',
    description: 'This specialized double-sided tape is filled with thermally conductive ceramic particles, allowing it to efficiently transfer heat away from sensitive electronic components. It provides both a strong mechanical bond and a reliable thermal path between a heat-generating component (like a CPU or LED) and a heat sink, simplifying assembly and improving performance and longevity.',
    features: ['High thermal conductivity for efficient heat transfer', 'Good dielectric strength for electrical insulation', 'Strong acrylic adhesive for a reliable bond', 'Eliminates the need for mechanical clips and fasteners'],
    uses: ['Attaching heat sinks to CPUs, GPUs, and chipsets', 'Mounting LEDs to heat sinks in lighting fixtures', 'Power transistor and regulator bonding', 'General thermal management in electronic devices'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20sided%20thermal%20tape.webp'],
    seo: {
      title: "Double Sided Thermal Tape | Thermally Conductive Tape",
      description: "Effectively manage heat with our double-sided thermal tape. Ideal for bonding heat sinks to CPUs, LEDs, and other electronic components. From Tape India."
    }
  },
  {
    id: 'double-sided-scrim-tape',
    name: 'Double-Sided Scrim Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A fiberglass scrim reinforced tape providing high tensile strength and excellent dimensional stability for demanding bonding jobs.',
    description: 'Our Double Sided Scrim Tape is reinforced with a fiberglass scrim (a grid of threads) embedded within the adhesive. This reinforcement prevents the tape from stretching, making it ideal for applications that require high tensile strength and dimensional stability, such as laminating large surfaces or splicing heavy materials.',
    features: ['Fiberglass reinforcement for high tensile strength', 'Excellent dimensional stability (will not stretch)', 'Aggressive adhesive for difficult-to-bond surfaces', 'Ideal for laminating and splicing applications'],
    uses: ['Laminating insulation and sound-deadening materials', 'Splicing heavy papers, foils, and films', 'Carpet and flooring installation', 'Permanent mounting of signs and panels'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/Double-Sided%20Scrim%20Tape.webp'],
    seo: {
      title: "Double Sided Scrim Tape | Reinforced Laminating Tape",
      description: "Buy high-strength, double-sided scrim tape from Tape India. Fiberglass reinforced for excellent stability in laminating and splicing applications."
    }
  },
  {
    id: 'eva-foam-tape',
    name: 'EVA Foam Tape',
    category: 'double-sided-tapes',
    shortDescription: 'An economical double-sided foam tape for general-purpose mounting, sealing, and gasketing in less demanding applications.',
    description: 'Double Sided EVA (Ethylene Vinyl Acetate) Foam Tape is a cost-effective solution for general-purpose applications. Its closed-cell foam structure provides good conformability and sealing properties against dust and light. It is a popular choice for lightweight mounting, gap-filling, and cushioning where high-temperature or chemical resistance is not a primary concern.',
    features: ['Economical foam tape solution', 'Closed-cell EVA foam structure', 'Good for lightweight mounting and sealing', 'Available with rubber or acrylic adhesive'],
    uses: ['Mounting posters, plastic hooks, and cable trunking', 'Gap filling in window frames and enclosures', 'Cushioning pads for furniture and appliances', 'Weatherstripping for doors and windows'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/eva%20foam%20tape.webp'],
    seo: {
      title: "Double Sided EVA Foam Tape | Economical Mounting Tape",
      description: "An economical choice for general-purpose mounting and sealing. Tape India supplies double-sided EVA foam tape for lightweight applications. Get a quote."
    }
  },
  {
    id: 'spacer-tapes',
    name: 'Spacer Tapes',
    category: 'double-sided-tapes',
    shortDescription: 'Double-sided foam tapes used in structural glazing to maintain a consistent gap between glass and frame for sealant application.',
    description: 'Spacer tapes are a critical component in structural silicone glazing (SSG) systems. These double-sided foam tapes are applied to the frame to temporarily hold the glass in place and, most importantly, to maintain a precise, uniform gap for the application of the structural silicone sealant. Our spacer tapes are compatible with all major silicone brands.',
    features: ['Open-cell foam structure allows air and moisture to cure silicone', 'Compatible with structural silicone sealants', 'Maintains a consistent joint dimension', 'Temporarily supports glass panels during sealant cure'],
    uses: ['Structural silicone glazing (SSG) curtain walls', 'Two-sided and four-sided glazing systems', 'Skylights and canopy glazing', 'Interior glass partition systems'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/spacer%20tape.webp'],
    seo: {
      title: "Spacer Tapes for Structural Glazing | SSG Tapes | Tape India",
      description: "Buy high-quality spacer tapes for structural silicone glazing. Ensure consistent gaps and compatibility with sealants. Supplier to the construction industry."
    }
  },
  {
    id: 'nano-magic-tape',
    name: 'Nano Magic Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A reusable, washable, double-sided gel tape that sticks securely to almost any smooth surface without leaving residue.',
    description: 'Experience the future of temporary mounting with Nano Magic Tape. This transparent tape uses advanced gecko-inspired nanotechnology to create a strong but removable bond. It can be washed with water and reused hundreds of time. Perfect for hanging pictures, organizing cables, and countless other uses around the home and office.',
    features: ['Washable and reusable hundreds of times', 'Sticks to most smooth, non-porous surfaces', 'Removes cleanly with no residue or damage', 'Transparent for invisible mounting'],
    uses: ['Hanging posters and pictures without nails', 'Organizing cables and power strips', 'Securing rugs and carpets in place', 'Countless temporary mounting tasks'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape.webp'],
    seo: {
      title: "Nano Magic Tape | Reusable Double Sided Gel Tape",
      description: "Buy washable and reusable nano gel tape from Tape India. This magic tape sticks to any smooth surface and removes cleanly. Perfect for home and office."
    }
  },
  {
    id: 'hot-melt-tissue-tapes',
    name: 'Hot-Melt Tissue Tapes',
    category: 'double-sided-tapes',
    shortDescription: 'An economical double-sided tissue tape featuring a powerful hot-melt rubber adhesive for aggressive initial tack.',
    description: 'This type of double sided tissue tape is coated with a synthetic hot-melt rubber adhesive, which provides a very high initial tack. This "instant grab" makes it ideal for fast-paced production and assembly lines where immediate bonding is required. It bonds well to a wide variety of materials, including paper, cardboard, and many plastics.',
    features: ['Very high initial tack for instant bonding', 'Economical choice for high-volume applications', 'Hand-tearable tissue carrier', 'Good adhesion to a wide range of substrates'],
    uses: ['Flying splices in paper and film industries', 'High-speed core starting and end tabbing', 'Mounting lightweight promotional items', 'Sealing bags and envelopes'],
    industries: ['print-labels-signage-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/hot%20melt%20tissue%20tape.webp'],
    seo: {
      title: "Hot Melt Tissue Tape | High Tack Double Sided Tape",
      description: "Get aggressive initial tack with our hot-melt tissue tape. Ideal for high-speed splicing and assembly applications. B2B supplier Tape India."
    }
  },
  {
    id: 'double-sided-cloth-tape',
    name: 'Double Sided Cloth Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A powerful double-sided tape with a flexible cloth carrier and aggressive rubber adhesive for strong, conformable bonds.',
    description: "Our Double Sided Cloth Tape offers exceptional strength and conformability. The flexible cloth carrier allows it to adhere well to irregular and textured surfaces, while the aggressive rubber-based adhesive provides a powerful, long-lasting bond. It is the go-to choice for demanding applications like carpet installation and heavy-duty mounting.",
    features: ['Flexible cloth carrier conforms to uneven surfaces', 'High-tack, aggressive rubber adhesive', 'High shear strength for heavy-duty applications', 'Can be removed cleanly from many surfaces'],
    uses: ['Temporary and permanent carpet installation', 'Mounting plates in the printing industry', 'Heavy-duty holding and mounting applications', 'Securing materials for fabrication and machining'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/double%20side%20cloth%20tape.webp'],
    seo: {
      title: "Double Sided Cloth Tape | Carpet & Mounting Tape | Tape India",
      description: "Buy strong and flexible double-sided cloth tape from Tape India. Ideal for carpet laying, heavy-duty mounting, and bonding to irregular surfaces."
    }
  },
  {
    id: 'acrylic-gel-tape',
    name: 'Acrylic Gel Tape',
    category: 'double-sided-tapes',
    shortDescription: 'A transparent, high-strength solid acrylic gel tape that creates a virtually invisible bond, ideal for replacing screws and rivets.',
    description: 'Acrylic Gel Tape is a solid, transparent acrylic adhesive that provides a powerful, permanent bond. Its clarity makes it perfect for bonding transparent materials like glass and acrylic. This viscoelastic tape is an excellent alternative to mechanical fasteners, creating a clean, smooth appearance while sealing against moisture and distributing stress.',
    features: ['Optically clear for invisible bonds', 'High-strength alternative to screws and rivets', 'Durable, weatherproof, and UV-resistant', 'Bonds to glass, metal, and a wide range of plastics'],
    uses: ['Mounting architectural signs and letters', 'Bonding glass panels in partitions and doors', 'Assembling point-of-purchase displays', 'Attaching trim and panels in automotive and marine applications'],
    industries: ['print-labels-signage-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/aAcrylic%20Gel%20Tape%20(1).webp'],
    seo: {
      title: "Acrylic Gel Tape | Clear Double Sided Mounting Tape",
      description: "Create invisible, high-strength bonds with acrylic gel tape. This clear double-sided tape is a perfect alternative to fasteners. Buy from Tape India."
    }
  },
  {
    id: 'xlpe-foam-tapes',
    name: 'XLPE Foam Tapes',
    category: 'double-sided-tapes',
    shortDescription: 'Cross-linked polyethylene foam tapes providing superior sealing, thermal insulation, and durability for critical applications.',
    description: 'XLPE (Cross-Linked Polyethylene) Foam Tapes offer enhanced performance over standard PE foam. The cross-linking process gives the foam a finer cell structure, greater rigidity, and improved thermal and chemical resistance. It is the preferred choice for demanding sealing and gasketing applications in the HVAC and automotive industries.',
    features: ['Fine, closed-cell structure for excellent sealing', 'Superior thermal and chemical resistance', 'Higher durability and rigidity than standard PE foam', 'Low moisture permeability'],
    uses: ['Gasketing and sealing in HVAC systems', 'Automotive mirror mounting and trim sealing', 'Thermal insulation and sound damping', 'Appliance manufacturing'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/XLPE-FOAM-TAPES.webp'],
    seo: {
      title: "XLPE Foam Tape | High-Performance Sealing Tape | Tape India",
      description: "Buy superior XLPE foam tape for demanding sealing and insulation applications in HVAC and automotive. Durable and chemical resistant. From Tape India."
    }
  },

  // Specialty Tapes (29)
  {
    id: 'masking-tape',
    name: 'Masking Tape',
    category: 'specialty-tapes',
    shortDescription: 'A general-purpose crepe paper tape for painting, bundling, and light-duty applications where clean removal is required.',
    description: "Our General Purpose Masking Tape is a versatile and reliable tool for a multitude of tasks. It features a crepe paper backing that is highly conformable and easy to tear, with a rubber-based adhesive that sticks well to a variety of surfaces but can be removed cleanly without leaving residue. It's an essential item for painting, labeling, bundling, and temporary holding. Our Chennai facility manufactures and supplies masking tapes for painting, automotive, and industrial use.",
    features: ['Crepe paper backing for high conformability', 'Removes cleanly from most surfaces', 'Easy to tear by hand', 'Resistant to paint bleed-through'],
    uses: ['General purpose painting and decorating', 'Bundling light items and labeling', 'Temporary holding and fastening', 'Crafts and school projects'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/masking%20tape.webp'],
    seo: {
      title: "Masking Tape Manufacturer in Chennai | TapeIndia",
      description: "Masking tape manufacturer and supplier in Chennai with Pan-India delivery for painting, automotive, and industrial uses. Get a quote for bulk orders.",
      h1: "Masking Tape Manufacturer (Chennai)"
    }
  },
  {
    id: 'bopp-tape',
    name: 'BOPP Tape',
    category: 'specialty-tapes',
    shortDescription: 'The industry-standard packaging tape for carton sealing, made from Biaxially Oriented Polypropylene film.',
    description: `BOPP (Biaxially Oriented Polypropylene) tape is the most widely used tape for sealing corrugated boxes. Its polypropylene film backing is strong and durable, while the acrylic adhesive provides a reliable, long-lasting seal. We offer this tape in various thicknesses and colors, including clear, brown, and custom printed options, to meet all your packaging needs. As a local manufacturer, we supply BOPP tapes with fast delivery across India.`,
    features: ['High tensile strength and durability', 'Water-based acrylic adhesive for a long-lasting seal', 'Resistant to splitting and tearing', 'Available in clear, brown, and custom printed'],
    uses: ['Standard carton and box sealing', 'Bundling and strapping of goods', 'Use in manual and automated packaging lines', 'General industrial packaging'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/bopp%20tape.webp'],
    seo: {
      title: "BOPP Tape Manufacturer Near Me | Chennai",
      description: "BOPP tape manufacturer and bulk supplier in Chennai. Get local service with the convenience of Pan-India delivery available for your packaging needs.",
      h1: "Local BOPP Tape Manufacturer & Supplier",
      imageAlt: "brown BOPP tape sealing a shipping box"
    }
  },
  {
    id: 'aluminium-foil-tape',
    name: 'Aluminium Foil Tape',
    category: 'specialty-tapes',
    shortDescription: 'A heat and light reflective tape with a soft aluminum foil backing, used for sealing, patching, and thermal insulation.',
    description: `Our Aluminium Foil Tape features a soft, conformable aluminum foil backing coated with a high-performance acrylic adhesive. It excels in applications requiring thermal conductivity or heat and light reflectivity. It conforms well to irregular surfaces and performs reliably across a wide range of temperatures, making it a staple in the HVAC and appliance industries. Our aluminium foil tapes are ideal for HVAC, duct sealing, and insulation use. Bulk rolls available.`,
    features: ['Thermally conductive and heat reflective', 'Resistant to moisture, UV, and chemicals', 'Soft foil backing conforms to irregular shapes', 'Wide operating temperature range'],
    uses: ['Sealing joints and seams in HVAC ductwork', 'Patching and sealing in roofing and gutters', 'Heat shielding and EMI/RFI shielding', 'Appliance manufacturing and repair'],
    industries: ['hvac-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminum%20foil%20tap2e.webp'],
    seo: {
      title: "Aluminium Foil Tape Supplier | Chennai",
      description: "Aluminium foil tapes for HVAC, insulation, and sealing applications. Chennai supplier with Pan-India delivery for industrial and commercial projects.",
      h1: "Aluminium Foil Tape Supplier",
      imageAlt: "aluminum foil tape sealing air duct"
    }
  },
  {
    id: 'kapton-tape',
    name: 'Kapton Tape',
    category: 'specialty-tapes',
    shortDescription: 'High-temperature resistant polyimide tape, essential for masking and insulation in electronics manufacturing.',
    description: `Kapton® (Polyimide) Tape is the industry standard for high-temperature applications in electronics. Its polyimide film backing can withstand extreme temperatures (up to 260°C) without degrading. The silicone adhesive bonds securely but removes cleanly without leaving residue, making it the perfect choice for masking gold contacts during wave soldering and other demanding PCB processes.`,
    features: ['Withstands extreme temperatures (up to 260°C / 500°F)', 'Excellent dielectric strength for insulation', 'Removes cleanly with no adhesive residue', 'High chemical and radiation resistance'],
    uses: ['Masking circuit boards for wave soldering', 'Electrical insulation of coils, transformers, and capacitors', 'Powder coating masking', 'Splicing wires in high-temperature environments'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp'],
    seo: {
      title: "Kapton Tape | High-Temp Polyimide Film | TapeIndia",
      description: "Explore high performance Kapton tape that withstands extreme heat, ideal for PCB masking & insulation. Durable & reliable at TapeIndia.",
      h1: "Kapton / Polyimide Tape for High Temperature & Insulation Applications",
      imageAlt: "Kapton tape on PCB masking"
    }
  },
  {
    id: 'cloth-duct-tape',
    name: 'Cloth Duct Tape',
    category: 'specialty-tapes',
    shortDescription: 'A strong, versatile, and water-resistant cloth-based tape for general-purpose repairs, bundling, and sealing.',
    description: 'The ultimate all-purpose tape, our Cloth Duct Tape is a must-have for any toolkit. It features a polyethylene-coated cloth backing that is water-resistant and easy to tear by hand, combined with a powerful rubber-based adhesive that sticks to almost anything. It is incredibly versatile, perfect for everything from temporary repairs and sealing to heavy-duty bundling.',
    features: ['PE-coated cloth backing is strong and water-resistant', 'Tears easily by hand for quick application', 'Sticks to a wide variety of surfaces', 'Highly conformable for irregular shapes'],
    uses: ['General repairs on hoses, pipes, and equipment', 'Sealing ductwork and air leaks', 'Bundling pipes, lumber, and heavy items', 'Bookbinding and color-coding'],
    industries: ['packaging-industry', 'hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/duct%20tape.webp'],
    seo: {
      title: "Cloth Duct Tape | All-Purpose Repair & Sealing Tape",
      description: "The original all-purpose tool. Buy strong, water-resistant cloth duct tape from Tape India for repairs, sealing, and bundling. Available in multiple colors."
    }
  },
  {
    id: 'high-temperature-sealing-tape',
    name: 'High Temperature Sealing Tape',
    category: 'specialty-tapes',
    shortDescription: 'Specialized tapes designed to create a secure seal while withstanding extreme heat in industrial processes.',
    description: "Our range of High-Temperature Sealing Tapes includes solutions like glass cloth, aluminum foil, and polyester tapes designed to maintain their integrity and adhesive properties in extreme heat. These tapes are crucial for sealing high-temperature ducts, masking for thermal spray and powder coating, and providing reliable performance where standard tapes would fail.",
    features: ['Designed to operate in high-temperature environments', 'Maintains a strong seal under thermal stress', 'Resistant to aging and weathering', 'Available in various materials for specific applications'],
    uses: ['Sealing high-temperature ovens and furnaces', 'Masking parts for plasma spray and welding', 'Flue and exhaust sealing', 'Aerospace and automotive engine applications'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/high%20sealing%20tape.webp'],
    seo: {
      title: "High-Temperature Sealing Tapes | Industrial Heat Tapes",
      description: "Seal and mask in extreme heat with our high-temperature tapes. We supply glass cloth, foil, and polyester tapes for industrial sealing applications."
    }
  },
  {
    id: 'paper-tape',
    name: 'Paper Tape',
    category: 'specialty-tapes',
    shortDescription: 'An eco-friendly, water-activated or self-adhesive paper tape for secure carton sealing and packaging.',
    description: "Tape India offers a range of paper tapes as an environmentally friendly alternative to traditional plastic tapes. Our water-activated (gummed) paper tapes create a powerful, tamper-evident bond with cardboard, while our self-adhesive paper tapes offer convenience and easy application. Both options are recyclable and repulpable, supporting your sustainability goals.",
    features: ['Eco-friendly and recyclable', 'Water-activated tape creates a permanent, tamper-evident bond', 'Self-adhesive option for easy use', 'Printable for custom branding'],
    uses: ['Eco-conscious carton sealing', 'Picture framing and art mounting', 'Splicing paper products', 'Bookbinding'],
    industries: ['print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/masking%20tape.webp'],
    seo: {
      title: "Paper Tape Manufacturer | Eco-Friendly Packaging Tape",
      description: "Switch to sustainable packaging with our paper tapes. We offer water-activated and self-adhesive paper tapes for secure, eco-friendly carton sealing."
    }
  },
  {
    id: 'silicone-tape',
    name: 'Silicone Tape',
    category: 'specialty-tapes',
    shortDescription: 'A self-fusing silicone rubber tape that creates a permanent, waterproof, and electrically insulating seal for repairs.',
    description: 'This remarkable tape is made from a special silicone rubber that only sticks to itself. When stretched and wrapped around an object, it fuses into a solid, seamless layer of silicone, creating an airtight and waterproof seal. It is an incredibly versatile repair product for plumbing, electrical wiring, hoses, and more, withstanding high pressures, temperatures, and voltages.',
    features: ['Self-fusing, sticks only to itself', 'Creates a permanent, airtight, waterproof seal', 'Excellent electrical insulator (up to 8,000 volts)', 'Withstands high temperatures and pressures'],
    uses: ['Repairing leaky pipes and hoses', 'Insulating and sealing electrical wires and connectors', 'Wrapping tool handles for a non-slip grip', 'Emergency automotive and marine repairs'],
    industries: ['specialty-tapes'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/silicone%20tape%202.webp'],
    seo: {
      title: "Self-Fusing Silicone Repair Tape | Tape India",
      description: "The ultimate repair tape. Our self-fusing silicone tape creates a permanent waterproof seal for plumbing, electrical, and automotive repairs. Order now."
    }
  },
  {
    id: 'polyester-tape',
    name: 'Polyester Tape',
    category: 'specialty-tapes',
    shortDescription: 'A strong, versatile tape with excellent thermal and chemical resistance, ideal for masking, splicing, and insulation.',
    description: "Polyester (PET) tape is a workhorse in many industries due to its excellent balance of properties. The polyester film backing provides high strength and dimensional stability, while the silicone or acrylic adhesive offers performance across a wide temperature range. Its chemical resistance makes it ideal for masking in processes like powder coating and anodizing.",
    features: ['High strength and tear resistance', 'Excellent thermal and chemical resistance', 'Removes cleanly after high-temperature processes', 'Available in various colors for color-coding'],
    uses: ['High-temperature masking for powder coating and anodizing', 'Splicing silicone-coated papers and films', 'Electrical insulation for transformers and motors', 'Composite bonding and mold release'],
    industries: ['specialty-tapes'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyester.webp'],
    seo: {
      title: "Polyester Tape (PET Tape) | High-Temperature Masking Tape",
      description: "Buy versatile polyester tape from Tape India. Strong and chemical-resistant, it's perfect for high-temperature masking, splicing, and insulation."
    }
  },
  {
    id: 'pvc-pipe-wrapping-tape',
    name: 'PVC Pipe Wrapping Tape',
    category: 'specialty-tapes',
    shortDescription: 'A tough, corrosion-resistant PVC tape designed to protect underground and outdoor pipes from moisture and abrasion.',
    description: "Protect your metal piping systems from corrosion with our PVC Pipe Wrapping Tape. This tough and pliable PVC tape is coated with a specially formulated adhesive that provides long-term protection in harsh environments. It's used extensively to protect underground gas, oil, and water pipelines from corrosion, moisture, and electrolytic action.",
    features: ['Excellent moisture and corrosion resistance', 'Tough, abrasion-resistant PVC backing', 'Conformable for wrapping around fittings and joints', 'Provides long-term protection for underground pipes'],
    uses: ['Corrosion protection for underground pipelines', 'Protecting welded joints and fittings', 'Sealing and insulating electrical conduits', 'General purpose outdoor sealing and protection'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/pvc%20pipe%20tape%20(1).webp'],
    seo: {
      title: "PVC Pipe Wrapping Tape | Corrosion Protection Tape",
      description: "Protect underground pipes from corrosion with our PVC pipe wrapping tape. Durable and moisture-resistant for long-term protection. B2B supplier Tape India."
    }
  },
  {
    id: 'bag-sealing-tape',
    name: 'Bag Sealing Tape',
    category: 'specialty-tapes',
    shortDescription: 'A colored PVC tape used with a dispenser to quickly and securely seal produce bags, bakery bags, and other packages.',
    description: "Our Bag Sealing Tape is the fast and efficient solution for closing poly bags in retail and industrial settings. This colored PVC tape is used with a bag sealing dispenser to apply an adhesive-to-adhesive seal that is secure and tamper-evident. It's a staple in supermarkets, bakeries, and industrial packaging operations.",
    features: ['Quick and easy application with a dispenser', 'Creates a secure, tamper-evident seal', 'Available in various colors for product identification', 'Moisture-resistant adhesive'],
    uses: ['Sealing produce bags in grocery stores', 'Packaging bakery items and bulk foods', 'Industrial parts packaging', 'Color-coding products'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/bag%20sealing%20tape.webp'],
    seo: {
      title: "Bag Sealing Tape | Produce & Bakery Bag Tape | Tape India",
      description: "Quickly seal poly bags with our bag sealing tape. Ideal for produce, bakery, and industrial packaging. Available in various colors. Order from Tape India."
    }
  },
  {
    id: 'acetate-cloth-tape',
    name: 'Acetate Cloth Tape',
    category: 'specialty-tapes',
    shortDescription: 'A conformable, printable woven acetate tape used for electrical insulation, coil wrapping, and high-temperature applications.',
    description: 'Acetate Cloth Tape is a flexible and highly conformable tape with excellent absorption properties for resins and varnishes. This makes it an ideal choice for coil wrapping and other electrical insulation applications. It is printable, easy to handle, and provides reliable performance at high temperatures.',
    features: ['Highly conformable and flexible', 'Excellent for absorbing electrical varnishes and resins', 'Printable surface', 'High-temperature resistance'],
    uses: ['Outer wrap for coils, transformers, and relays', 'Bundling and securing wire harnesses', 'Core, layer, and final insulation in motors', 'Printing applications requiring a fabric finish'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/acetate-cloth-tape-white-19mm-x-66m-crop.webp'],
    seo: {
      title: "Acetate Cloth Tape | Electrical Insulation Tape | Tape India",
      description: "Buy conformable acetate cloth tape for electrical insulation. Ideal for coil wrapping and high-temperature applications. From Tape India."
    }
  },
  {
    id: 'sticky-mat',
    name: 'Sticky Mat',
    category: 'specialty-tapes',
    shortDescription: 'Multi-layered tacky mats that capture dirt and contaminants from shoes before entry into cleanrooms and sensitive areas.',
    description: "Our Sticky Mats are an essential first line of defense in maintaining a clean environment. Each mat consists of multiple layers of adhesive-coated film. When walked upon, the tacky surface removes dirt and particles from shoe soles. Once a layer is saturated, it can be peeled away to expose a fresh, clean layer. It is a critical component for any cleanroom or controlled environment.",
    features: ['Multi-layered peel-off design', 'Captures fine dirt and contaminants effectively', 'Numbered tabs for easy layer removal', 'Full adhesive backing holds the mat in place'],
    uses: ['Entrances to cleanrooms and laboratories', 'Hospitals and healthcare facilities', 'Data centers and electronics manufacturing', 'Construction site dust control'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp'],
    seo: {
      title: "Sticky Mats for Cleanrooms | Tacky Entrance Mats | Tape India",
      description: "Protect your clean environment with our multi-layered sticky mats. Effectively captures dirt from shoes at entrances. Essential for cleanrooms and labs."
    }
  },
  {
    id: 'fine-line-masking-tape',
    name: 'Fine Line Masking Tape',
    category: 'specialty-tapes',
    shortDescription: 'A thin, flexible tape designed to create sharp, clean paint lines for detailed automotive and industrial painting.',
    description: "When precision matters, our Fine Line Masking Tape delivers. Thinner and more flexible than standard masking tape, it conforms tightly to curves and contours, preventing paint bleed to create exceptionally sharp, clean paint lines. It's the professional's choice for custom automotive graphics, pinstriping, and intricate industrial painting.",
    features: ['Creates sharp, clean paint lines with no bleed', 'Highly flexible for tight curves and contours', 'Removes cleanly without leaving residue', 'Resistant to high temperatures in bake cycles'],
    uses: ['Automotive custom painting and pinstriping', 'Two-tone and multi-color paint jobs', 'Aerospace and marine painting', 'High-end industrial finishing'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/fine%20line%20masking%20tape.webp'],
    seo: {
      title: "Fine Line Masking Tape | Automotive Painting Tape",
      description: "Achieve razor-sharp paint lines with our fine line masking tape. Highly flexible for curves and detailed work. The professional's choice for automotive painting."
    }
  },
  {
    id: 'mica-tape',
    name: 'Mica Tape',
    category: 'specialty-tapes',
    shortDescription: 'High-temperature, high-voltage electrical insulation tape used for manufacturing fire-resistant cables and coils.',
    description: "Mica Tape is a specialized insulation tape made from mica paper bonded to a carrier like glass cloth or polyester film. It offers outstanding thermal and dielectric properties, capable of withstanding extreme temperatures and high voltages. Its primary use is in the manufacturing of fire-resistant cables, ensuring circuit integrity even during a fire.",
    features: ['Exceptional high-temperature resistance (up to 1000°C)', 'Excellent high-voltage insulation properties', 'Maintains circuit integrity in a fire', 'Flexible and easy to apply'],
    uses: ['Insulation for fire-resistant power and control cables', 'Coil insulation for high-voltage motors and generators', 'Furnace and induction heating applications', 'Barrier tape in industrial machinery'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/mica%20tape.webp'],
    seo: {
      title: "Mica Tape Manufacturer | Fire-Resistant Cable Insulation",
      description: "Buy high-performance mica tape for fire-resistant cables and high-voltage insulation. Withstands extreme temperatures. From Tape India."
    }
  },
  {
    id: 'green-polyester-tape',
    name: 'Green Polyester Tape',
    category: 'specialty-tapes',
    shortDescription: 'High-temperature masking tape for powder coating, anodizing, and e-coating, known for its clean removal.',
    description: "Our Green Polyester Tape is specifically designed for high-temperature masking. It features a strong polyester film backing with a specially formulated silicone adhesive. This combination allows it to adhere strongly during processes like powder coating, anodizing, and electroplating, and then remove cleanly in one piece without leaving any adhesive residue.",
    features: ['High temperature resistance (up to 204°C / 400°F)', 'Clean, one-piece removal with no residue', 'Excellent chemical resistance', 'Strong polyester backing prevents tearing'],
    uses: ['Masking for powder coating', 'Masking for anodizing and e-coating', 'Splicing of silicone-coated materials', 'Composite bonding'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster'],
    seo: {
      title: "Green Polyester Tape | Powder Coating Masking Tape",
      description: "The ideal masking tape for powder coating and anodizing. Our green polyester tape withstands high temperatures and removes cleanly. Buy direct from Tape India."
    }
  },
  {
    id: 'green-polyester-tape-with-liner',
    name: 'Green Polyester Tape with Liner',
    category: 'specialty-tapes',
    shortDescription: 'High-temp green polyester tape supplied on a release liner, making it ideal for die-cutting into custom shapes and precision masking.',
    description: "This version of our popular green polyester tape comes on a release liner, making it perfect for fabrication and die-cutting. It allows for the creation of custom-shaped masks for precise applications in electronics and finishing industries. It offers the same high-temperature performance and clean removal as the linerless version.",
    features: ['Supplied on a liner for easy die-cutting', 'High temperature resistance (up to 204°C / 400°F)', 'Create custom masks for precise applications', 'Clean removal with no residue'],
    uses: ['Die-cut masking discs and shapes', 'Precision masking on circuit boards', 'Masking parts with complex geometries', 'Applications requiring precise placement'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/green%20polyster%20with%20liner.webp'],
    seo: {
      title: "Green Polyester Tape with Liner | Die-Cut Masking Tape",
      description: "Precision masking for high-temp applications. Our liner-backed green polyester tape is perfect for die-cutting custom shapes for powder coating and electronics."
    }
  },
  {
    id: 'thermal-conductive-pads',
    name: 'Thermal Conductive Pads',
    category: 'specialty-tapes',
    shortDescription: 'Soft, conformable pads that transfer heat between electronic components and heat sinks, filling air gaps effectively.',
    description: "Thermal Conductive Pads are soft, conformable, and electrically insulating pads designed to fill air gaps between a heat source and a heat sink. These 'gap fillers' are more effective than paste on uneven surfaces, ensuring efficient heat transfer to improve the performance and reliability of electronic components. They are naturally tacky and easy to apply.",
    features: ['High thermal conductivity', 'Soft and conformable to fill air gaps', 'Electrically insulating', 'Naturally tacky for easy application'],
    uses: ['Between CPUs/GPUs and heat sinks', 'LED lighting thermal management', 'Automotive electronics (ECUs)', 'Power conversion equipment'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp'],
    seo: {
      title: "Thermal Conductive Pads | Gap Filler Pads | Tape India",
      description: "Improve heat dissipation with our thermal conductive pads. These soft gap fillers are perfect for electronics thermal management. Buy from Tape India."
    }
  },
  {
    id: 'pe-surface-protection-film',
    name: 'PE Surface Protection Film',
    category: 'specialty-tapes',
    shortDescription: 'A self-adhesive polyethylene film that temporarily protects surfaces from scratches, dirt, and damage during fabrication or transport.',
    description: "Protect your valuable surfaces with our PE Surface Protection Film. This low-tack adhesive film adheres to surfaces like metal, plastic, and glass, shielding them from scratches, tool marks, dirt, and paint overspray during manufacturing, shipping, and installation. It removes cleanly, leaving the original surface in pristine condition.",
    features: ['Protects surfaces from scratches, dirt, and damage', 'Low-tack adhesive removes cleanly without residue', 'Available in various thicknesses and tack levels', 'UV resistant grades available for outdoor use'],
    uses: ['Protecting stainless steel and aluminum sheets', 'Shielding plastic parts during fabrication', 'Masking windows and glass during construction', 'Protecting countertops and appliances during installation'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/surface%20protection%20tape.webp'],
    seo: {
      title: "Surface Protection Film | Protective Film Supplier India",
      description: "Keep your surfaces pristine with our temporary surface protection film. Protects against scratches and dirt during transport and installation. From Tape India."
    }
  },
  {
    id: 'powder-coated-tape',
    name: 'Powder Coated Tape',
    category: 'specialty-tapes',
    shortDescription: 'High-temperature masking tape specifically designed to withstand the harsh conditions of the powder coating process.',
    description: 'This is another term for high-temperature masking tapes, like our Green Polyester Tape, that are engineered for the powder coating industry. They must withstand the high temperatures of the curing oven and the electrostatic process, adhering securely and then removing cleanly without leaving any residue behind.',
    features: ['Withstands high-temperature bake cycles', 'Clean removal is essential', 'Resistant to chemicals used in surface preparation', 'Prevents coating from reaching masked areas'],
    uses: ['Masking threads, holes, and contact points during powder coating', 'Two-tone powder coating effects', 'Protecting critical surfaces from the coating'],
    industries: ['specialty-tapes'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/green-powder-coating-tape-500x500%20(1).webp'],
    seo: {
      title: "Powder Coating Tape | High-Temperature Masking Solutions",
      description: "Find the best tapes for powder coating at Tape India. Our high-temperature polyester tapes provide clean masking and residue-free removal."
    }
  },
  {
    id: 'lamination-tape',
    name: 'Lamination Tape',
    category: 'specialty-tapes',
    shortDescription: 'A clear protective film used to safeguard documents, signs, and graphics from moisture, abrasion, and UV damage.',
    description: "Lamination Tape (or film) provides a durable protective layer for printed materials. It enhances the appearance of graphics, making colors more vibrant, while protecting them from a moisture, fingerprints, abrasion, and fading from UV light. We offer various finishes, from glossy to matte, for all your lamination needs.",
    features: ['Protects prints from moisture, dirt, and wear', 'Enhances color and vibrancy of graphics', 'Available in gloss, matte, and textured finishes', 'Can be applied by hand or with a laminator'],
    uses: ['Laminating ID cards, documents, and menus', 'Protecting indoor and outdoor signage', 'Floor graphics lamination', 'Creating durable labels and decals'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/lamination%20tape.webp'],
    seo: {
      title: "Lamination Tape & Film | Graphic Protection | Tape India",
      description: "Protect your documents and graphics with our lamination tapes and films. We offer clear protective films in gloss and matte finishes. B2B supplier."
    }
  },
  {
    id: 'aluminium-foil-scrim-kraft-tape-fsk',
    name: 'Aluminium Foil Scrim Kraft Tape (FSK)',
    category: 'specialty-tapes',
    shortDescription: 'A 3-way foil-scrim-kraft tape used as a vapor barrier and for sealing seams on foil-faced insulation.',
    description: "FSK (Foil-Scrim-Kraft) Tape is a specialty tape composed of aluminum foil, reinforced with a fiberglass scrim, and laminated to a kraft paper backing. This construction gives it high tensile strength and puncture resistance. It is primarily used to seal seams on foil-faced insulation, acting as a vapor barrier and ensuring the integrity of the insulation system.",
    features: ['Tri-directional fiberglass scrim reinforcement', 'Acts as an excellent vapor barrier', 'High tensile strength and puncture resistance', 'Cold weather acrylic adhesive'],
    uses: ['Sealing seams on foil-faced fiberglass duct wrap', 'Joints in foil-faced insulation boards', 'Repairing tears in foil-faced insulation', 'General purpose vapor sealing'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/foil-scrim-kraft-tape.webp'],
    seo: {
      title: "FSK Tape | Foil Scrim Kraft Tape for Insulation | Tape India",
      description: "Seal foil-faced insulation with our FSK tape. This foil-scrim-kraft tape acts as a durable vapor barrier. Ideal for HVAC applications. From Tape India."
    }
  },
  {
    id: 'aluminium-pet-tape-alupet',
    name: 'Aluminium PET Tape (ALUPET)',
    category: 'specialty-tapes',
    shortDescription: 'Aluminium foil laminated with a polyester (PET) film for enhanced strength, puncture resistance, and electrical insulation.',
    description: "ALUPET tape combines the heat-reflective properties of aluminum foil with the high tensile strength and dielectric properties of polyester film. This laminated construction makes it stronger and more puncture-resistant than plain foil tape, making it ideal for demanding shielding and wrapping applications in the cable and electronics industries.",
    features: ['Higher tensile strength than plain foil tape', 'Excellent puncture and tear resistance', 'Good dielectric strength from the PET layer', 'Effective heat and light reflection'],
    uses: ['Shielding for electrical cables (ALPET cable)', 'Heat shielding in automotive and aerospace', 'Wrapping and sealing in demanding environments', 'Decorative applications requiring a metallic finish'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20pet.webp'],
    seo: {
      title: "ALUPET Tape | Aluminum Polyester Tape | Tape India",
      description: "Buy high-strength ALUPET tape from Tape India. This aluminum/polyester laminate is ideal for cable shielding and demanding wrapping applications."
    }
  },
  {
    id: 'aluminium-butyl-tape',
    name: 'Aluminium Butyl Tape',
    category: 'specialty-tapes',
    shortDescription: 'A foil-backed tape with an extremely sticky butyl rubber adhesive for instant, waterproof sealing of leaks and joints.',
    description: "Our Aluminium Butyl Tape is the ultimate solution for instant, waterproof repairs. It features a conformable aluminum foil backing with a thick, aggressive butyl rubber adhesive that provides an instant watertight seal. It adheres to virtually any surface and is perfect for sealing leaks in roofing, gutters, skylights, and RVs.",
    features: ['Instant, aggressive, watertight bond', 'Extremely sticky butyl rubber adhesive', 'Conforms to irregular surfaces and joints', 'Excellent UV and weather resistance'],
    uses: ['Sealing leaks in metal roofs, gutters, and flashing', 'Repairing RVs, mobile homes, and trailers', 'Sealing around windows, doors, and skylights', 'Pipe and duct sealing'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/butyl.webp'],
    seo: {
      title: "Aluminium Butyl Tape | Waterproof Flashing Tape | Tape India",
      description: "Instantly seal leaks with our aluminum butyl tape. This extremely sticky, waterproof tape is perfect for roofing, gutters, and RV repair. From Tape India."
    }
  },
  {
    id: 'fiber-glass-cloth-tape',
    name: 'Fiber Glass Cloth Tape',
    category: 'specialty-tapes',
    shortDescription: 'A high-strength, high-temperature tape made from woven fiberglass cloth, ideal for demanding insulation and repair.',
    description: 'Fiberglass Cloth Tape is made from a woven glass cloth backing coated with a silicone or rubber adhesive. This construction provides extremely high tensile strength and excellent abrasion resistance. It is used in demanding applications requiring high strength and/or high-temperature performance, such as permanent sealing, holding, and electrical insulation.',
    features: ['Extremely high tensile strength', 'Excellent abrasion and puncture resistance', 'High-temperature performance (with silicone adhesive)', 'Does not shrink, stretch, or burn'],
    uses: ['High-temperature duct sealing and repair', 'Coil insulation and wrapping', 'Masking for sandblasting and plasma spray', 'Reinforcing and repairing composite materials'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/fiberglass%20tape.webp'],
    seo: {
      title: "Fiberglass Cloth Tape | High-Strength Insulation Tape",
      description: "Buy high-strength fiberglass cloth tape from Tape India. Ideal for high-temperature insulation, sealing, and abrasion-resistant applications."
    }
  },
  {
    id: 'nbr-foam-tapes',
    name: 'NBR Foam Tapes',
    category: 'specialty-tapes',
    shortDescription: 'Nitrile foam tapes providing excellent resistance to oils and chemicals, used for premium gasketing and sealing.',
    description: 'NBR (Nitrile Butadiene Rubber) Foam Tapes are closed-cell foam tapes that offer superior resistance to oils, fuels, and many chemicals. This makes them the ideal choice for gasketing and sealing applications in automotive and industrial environments where exposure to such substances is common. They provide an excellent long-term seal against air, dust, and moisture.',
    features: ['Excellent resistance to oil, fuel, and chemicals', 'Closed-cell foam for effective sealing', 'Good cushioning and shock absorption', 'Performs well across a range of temperatures'],
    uses: ['Gasketing in automotive engines and components', 'Sealing industrial enclosures and machinery', 'Cushioning and sealing fuel tanks', 'Weatherstripping in harsh environments'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/nrm%20foam%20tape.webp'],
    seo: {
      title: "NBR Foam Tape | Oil Resistant Sealing Tape | Tape India",
      description: "Source oil and chemical resistant NBR foam tape from Tape India. The perfect choice for sealing and gasketing in automotive and industrial applications."
    }
  },
  {
    id: 'air-vent-tape',
    name: 'Air Vent Tape',
    category: 'specialty-tapes',
    shortDescription: 'Specialized tape used to seal air vents on polycarbonate sheets (e.g., multiwall roofing) to prevent dust and insect ingress.',
    description: 'Air Vent Tape is a critical component for installing multiwall polycarbonate roofing sheets. The breathable top tape is applied to the top edge to prevent dust and insects from entering the flutes while allowing moisture to escape. The solid bottom tape seals the lower edge completely. Using this system extends the life and clarity of the polycarbonate sheets.',
    features: ['Breathable membrane allows moisture to escape', 'Prevents dust, water, and insects from entering flutes', 'Extends the life and clarity of polycarbonate sheets', 'Strong, weather-resistant adhesive'],
    uses: ['Sealing the open ends of multiwall polycarbonate roofing panels', 'Greenhouses and conservatories', 'Covered walkways and carports', 'DIY and construction projects'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/air%20vent%20tape.webp'],
    seo: {
      title: "Air Vent Tape for Polycarbonate Sheets | Tape India",
      description: "Protect your multiwall polycarbonate sheets with our air vent tape system. Prevents dust and moisture buildup to extend panel life. Buy from Tape India."
    }
  },
  {
    id: 'pink-rayon-tape',
    name: 'Pink Rayon Tape',
    category: 'specialty-tapes',
    shortDescription: 'A specialized, high-temperature rayon tape designed for automotive wire harness wrapping, providing excellent abrasion resistance.',
    description: 'This specialized tape uses a woven rayon cloth backing, making it highly resistant to abrasion and temperature while remaining flexible. It is specifically designed for wrapping automotive wire harnesses, providing durable protection and bundling for cables in the engine bay and passenger compartment.',
    features: ['High abrasion resistance', 'Flexible and conformable for easy wrapping', 'Good temperature resistance', 'Clean, professional appearance'],
    uses: ['Bundling and protecting automotive wire harnesses', 'Electrical insulation applications', 'Spot taping and securing cables', 'Noise damping in vehicle interiors'],
    industries: ['packaging-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/pink%20rayon.webp'],
    seo: {
      title: "Pink Rayon Tape for Wire Harnessing | Tape India",
      description: "Buy high-quality pink rayon tape for automotive wire harness wrapping. Provides excellent abrasion resistance and flexibility. From Tape India."
    }
  },
  {
    id: 'yellow-polyester-tape',
    name: 'Yellow Polyester Tape',
    category: 'specialty-tapes',
    shortDescription: 'A high-visibility yellow polyester tape with a silicone adhesive, used for high-temperature masking and splicing.',
    description: 'This tape combines the strength and high-temperature resistance of polyester film with a high-visibility yellow color. It is often used for color-coding in high-temperature environments or for splicing applications where the splice point needs to be easily identifiable. The silicone adhesive ensures it performs well in the heat and removes cleanly.',
    features: ['High-visibility yellow color', 'High temperature resistance', 'Silicone adhesive for clean removal', 'Strong polyester backing'],
    uses: ['Color-coding in high-temperature processes', 'Splicing of treated or hard-to-stick materials', 'High-temperature masking where visibility is needed', 'Defect flagging'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/yellow%20polyester.webp'],
    seo: {
      title: "Yellow Polyester Tape | High-Temp Splicing Tape",
      description: "High-visibility yellow polyester tape for splicing and color-coding in high-temperature applications. From Tape India, your industrial tape supplier."
    }
  },
  {
    id: 'aluminium-glass-tape-fr-grade',
    name: 'Aluminium Glass Tape - FR Grade',
    category: 'specialty-tapes',
    shortDescription: 'A fire-retardant tape combining aluminum foil with a glass cloth backing for exceptional strength and thermal insulation.',
    description: 'This high-performance tape features an aluminum foil backing laminated to a woven glass cloth, combined with a flame-retardant adhesive. This construction offers the heat reflectivity of aluminum with the very high strength and temperature resistance of glass cloth. It is certified for use in marine, aerospace, and HVAC applications where fire resistance is critical.',
    features: ['Flame-retardant (FR) certified', 'Extremely high strength and temperature resistance', 'Excellent heat and light reflection', 'Resistant to moisture and aging'],
    uses: ['Sealing insulation joints in marine and offshore applications', 'High-temperature duct and pipe sealing', 'Aerospace thermal management and repair', 'Automotive heat shielding'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/aluminium%20fr%20grade.webp'],
    seo: {
      title: "FR Grade Aluminium Glass Tape | Fire Retardant Tape",
      description: "Buy certified fire-retardant aluminium glass tape. High-strength and temperature resistant for critical sealing in marine, HVAC, and aerospace. From Tape India."
    }
  },
  {
    id: 'pvc-pipe-wrapping-tape-without-adhesive',
    name: 'PVC Pipe Wrapping Tape Without Adhesive',
    category: 'specialty-tapes',
    shortDescription: 'A durable, non-adhesive PVC film that is stretched and overlapped to protect pipes, cables, and athletic equipment grips.',
    description: 'This versatile PVC film contains no adhesive. It is applied under tension, where it shrinks slightly to create a tight, secure wrap. This makes it ideal for protecting pipes and cables from abrasion and moisture, or for creating a durable, comfortable grip on tool and sports equipment handles. It leaves no residue upon removal.',
    features: ['Non-adhesive, leaves no residue', 'Applied with tension for a tight wrap', 'Durable and moisture-resistant PVC', 'Creates a comfortable, high-friction grip'],
    uses: ['Protecting pipes and electrical conduits from abrasion', 'Wrapping handles of tools and sports equipment (e.g., hockey sticks, baseball bats)', 'Temporary bundling and color-coding'],
    industries: ['hvac-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/Red-PVC-Non-Adhesive-Tape.webp'],
    seo: {
      title: "Non-Adhesive PVC Wrapping Tape | Pipe & Handle Wrap",
      description: "A versatile non-adhesive PVC tape for pipe protection and handle wrapping. Applied with tension for a tight, residue-free wrap. Buy from Tape India."
    }
  },
  {
    id: 'glass-cloth-tape',
    name: 'Glass Cloth Tape',
    category: 'specialty-tapes',
    shortDescription: 'A high-tensile strength tape made from woven fiberglass cloth, offering excellent abrasion resistance and high-temperature performance.',
    description: 'Glass Cloth Tape is known for its exceptional mechanical strength and thermal stability. Coated with a high-performance silicone or rubber adhesive, it provides a rugged and durable solution for applications that involve high temperatures, heavy abrasion, or require high tensile strength for bundling and sealing.',
    features: ['Exceptional mechanical strength and durability', 'High abrasion and edge-tear resistance', 'Can withstand high temperatures (with silicone adhesive)', 'High conformability'],
    uses: ['Permanent sealing of high-temperature ducts and chambers', 'Plasma and thermal spray masking', 'Securing and bundling heavy coils and components', 'Splicing fabrics and other web materials'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/glass%20cloth%20tape%202.webp'],
    seo: {
      title: "Glass Cloth Tape | High-Temperature, High-Strength Tape",
      description: "For demanding applications, choose our glass cloth tape. Offers superior strength, abrasion resistance, and high-temperature performance. From Tape India."
    }
  },
  {
    id: 'glass-cloth-tape-fr-grade',
    name: 'Glass Cloth Tape – FR Grade',
    category: 'specialty-tapes',
    shortDescription: 'A high-performance glass cloth tape featuring a certified fire-retardant adhesive system for critical safety applications.',
    description: "This specialized tape meets stringent flame-retardancy specifications for use in aerospace, marine, and construction. It combines the inherent high-temperature resistance and strength of a glass cloth backing with a specially formulated flame-retardant adhesive, ensuring it will not propagate a flame.",
    features: ['Meets flame-retardancy standards (e.g., FAR 25.853)', 'High tensile strength and abrasion resistance', 'Maintains adhesion and integrity in a fire', 'Essential for critical safety applications'],
    uses: ['Sealing cargo bay panels in aircraft', 'High-temperature duct sealing in public buildings', 'Marine insulation and construction', 'Cable and wire harness protection'],
    industries: ['hvac-industry', 'electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/glass%20cloth%20tape%20fr.webp'],
    seo: {
      title: "FR Grade Glass Cloth Tape | Flame Retardant Sealing Tape",
      description: "Buy certified fire-retardant glass cloth tape from Tape India. Essential for aerospace, marine, and construction applications requiring flame resistance."
    }
  },
  {
    id: 'filament-tapes',
    name: 'Filament Tapes',
    category: 'specialty-tapes',
    shortDescription: 'High-tensile strength packaging tape reinforced with fiberglass filaments, ideal for heavy-duty bundling and palletizing.',
    description: 'Filament tape, also known as strapping tape, is characterized by its exceptionally high tensile strength, derived from fiberglass filaments embedded in the adhesive. This makes it the ideal choice for heavy-duty applications like palletizing, reinforcing large shipping containers, and bundling heavy items like pipes and lumber.',
    features: ['Extremely high tensile strength and tear resistance', 'Fiberglass reinforcement', 'Ideal for heavy-duty bundling and reinforcing', 'Available in mono-directional and bi-directional (cross-weave)'],
    uses: ['Securing pallets for shipping (L-clips and C-clips)', 'Bundling pipes, lumber, and metal rods', 'Reinforcing shipping boxes and containers', 'Appliance manufacturing (securing doors and parts)'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/filament%20tape.webp'],
    seo: {
      title: "Filament Tape | Heavy-Duty Strapping Tape | Tape India",
      description: "Secure your heaviest shipments with filament tape. This fiberglass-reinforced strapping tape is perfect for palletizing and bundling. From Tape India."
    }
  },
  {
    id: 'ez-application-tape',
    name: 'EZ Application Tape',
    category: 'specialty-tapes',
    shortDescription: 'A user-friendly paper or film-based tape used to lift and transfer die-cut vinyl graphics from their liner to the final surface.',
    description: 'Also known as transfer tape, Application Tape is essential for the sign-making industry. It is used to lift computer-cut vinyl letters and logos from the release liner as a single, perfectly spaced piece and transfer them to the final application surface (like a window, vehicle, or sign blank) with ease and precision.',
    features: ['Allows for easy transfer of die-cut graphics', 'Keeps complex designs perfectly aligned', 'Available in paper and clear film', 'Offered in various tack levels for different vinyls'],
    uses: ['Sign making and vinyl lettering application', 'Applying vehicle graphics and decals', 'Wall decals and interior decoration', 'Crafting with vinyl cutters'],
    industries: ['packaging-industry', 'print-labels-signage-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/ez-application-tape.webp'],
    seo: {
      title: "Application Tape for Vinyl Graphics | Transfer Tape",
      description: "Easily transfer vinyl graphics with our application tape. We offer paper and clear transfer tapes for sign makers and crafters. Buy from Tape India."
    }
  },
  {
    id: 'kraft-paper-tape',
    name: 'Kraft Paper Tape',
    category: 'specialty-tapes',
    shortDescription: 'An eco-friendly, self-adhesive paper tape for light-duty packaging, carton sealing, and picture framing.',
    description: 'Our self-adhesive Kraft Paper Tape offers a sustainable and effective solution for packaging. It features a strong kraft paper backing with a rubber-based adhesive, providing a secure seal for light to medium-weight cartons. It is hand-tearable, recyclable, and offers a natural, professional look for your packages.',
    features: ['Environmentally friendly and recyclable', 'Natural rubber adhesive for a strong bond', 'Easy to tear by hand', 'Provides a high-end, natural packaging aesthetic'],
    uses: ['Sealing light and medium-weight cartons', 'Picture framing (as a dust cover)', 'Light-duty bundling and wrapping', 'Craft applications'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp'],
    seo: {
      title: "Kraft Paper Tape | Self-Adhesive Eco-Friendly Tape",
      description: "Choose sustainable packaging with our self-adhesive kraft paper tape. Recyclable and strong, it's perfect for sealing cartons. Manufacturer Tape India."
    }
  },
  {
    id: 'reinforcement-kraft-paper-tape',
    name: 'Reinforcement Kraft Paper Tape',
    category: 'specialty-tapes',
    shortDescription: 'Water-activated kraft paper tape reinforced with fiberglass filaments for superior strength and a tamper-evident seal.',
    description: "For heavy-duty and high-security packaging, our Reinforced Kraft Paper Tape is the ultimate solution. This water-activated (gummed) tape is embedded with strong fiberglass filaments, giving it incredible tensile strength. When activated with water, the adhesive penetrates the carton fibers, creating a permanent, destructive bond that is highly tamper-evident.",
    features: ['Fiberglass reinforcement for extreme strength', 'Water-activated adhesive creates a tamper-evident bond', 'Superior performance in all temperatures', 'The most secure method for sealing cartons'],
    uses: ['Sealing heavy or over-stuffed cartons', 'High-security shipments', 'Packaging for export and long-term storage', 'Bundling heavy items'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/reinforced-paper-tapes1.webp'],
    seo: {
      title: "Reinforced Kraft Paper Tape | Water-Activated Gummed Tape",
      description: "Secure your most valuable shipments with reinforced kraft paper tape. Water-activated and fiberglass-reinforced for superior strength and tamper-evidence."
    }
  },
  {
    id: 'water-activated-kraft-paper-tape',
    name: 'Water-Activated Kraft Paper Tape',
    category: 'specialty-tapes',
    shortDescription: 'Standard water-activated gummed tape that creates a strong, permanent, and tamper-evident bond with cardboard cartons.',
    description: "Also known as gummed tape, this tape features a starch-based adhesive that becomes sticky when wet. This adhesive penetrates the fibers of the cardboard box, creating a permanent bond that cannot be removed without leaving clear signs of tampering. It is an eco-friendly and highly secure sealing method used by major fulfillment centers worldwide.",
    features: ['Water-activated adhesive for a permanent bond', 'Creates a strong, tamper-evident seal', '100% recyclable and biodegradable', 'Performs well in dusty or dirty environments'],
    uses: ['High-volume carton sealing in fulfillment centers', 'Sealing cartons for long-term storage', 'Picture framing', 'Eco-friendly packaging'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/water%20activated%20kraft%20tape.webp'],
    seo: {
      title: "Water-Activated Kraft Tape | Gummed Paper Tape | Tape India",
      description: "The professional's choice for secure, tamper-evident carton sealing. Buy water-activated (gummed) paper tape from Tape India. Eco-friendly and strong."
    }
  },
  {
    id: 'adhesive-cloth-tape',
    name: 'Adhesive Cloth Tape',
    category: 'specialty-tapes',
    shortDescription: 'A versatile, single-sided cloth tape with a strong adhesive, used for binding, gaffing, repairing, and general-purpose holding.',
    description: 'Our Adhesive Cloth Tape is a highly versatile tape with a woven cloth backing and a strong rubber adhesive. Unlike duct tape, it often has a matte finish and removes more cleanly, making it a favorite in the arts and entertainment industry (as gaffer\'s tape). It is strong, conformable, and easy to tear by hand.',
    features: ['Woven cloth backing for strength and conformability', 'Removes cleanly from most surfaces', 'Easy to tear by hand', 'Matte finish to prevent light reflection (gaffer tape)'],
    uses: ['Securing cables on stages and film sets (gaffer tape)', 'Bookbinding and spine repair', 'Heavy-duty surface protection', 'General purpose repairs and bundling'],
    industries: ['packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/cloth-adhesive-tape-500x500%20(1).webp'],
    seo: {
      title: "Adhesive Cloth Tape | Gaffer Tape & Binding Tape",
      description: "Buy versatile, single-sided adhesive cloth tape from Tape India. Ideal for bookbinding, gaffing, and general-purpose repairs. Removes cleanly."
    }
  },

  // Teflon & PTFE Tapes (4)
  {
    id: 'ptfe-coated-fiberglass-fabric-non-adhesive',
    name: 'PTFE Coated Fiberglass Fabric (Non-Adhesive)',
    category: 'teflon-ptfe-tapes',
    shortDescription: 'A heat-resistant, non-stick fiberglass fabric coated with PTFE, used as a reusable release sheet in various industrial processes.',
    description: "This material combines the strength and dimensional stability of fiberglass with the non-stick, high-temperature properties of PTFE (Teflon). Supplied without adhesive, it is used as a reusable release liner, conveyor belt, or protective curtain in processes like heat sealing, laminating, and composite manufacturing. Our PTFE sheets are heat-resistant and non-stick, ideal for industrial, sealing, and cookware use.",
    features: ['Excellent non-stick release properties', 'Withstands continuous high temperatures (up to 260°C)', 'High strength and dimensional stability', 'Chemically inert and easy to clean'],
    uses: ['Release sheets for heat sealing and plastic bag manufacturing', 'Conveyor belts for curing ovens', 'Laminating press release liners', 'Protective curtains for welding and chemical processing'],
    industries: ['ptfe-teflon-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20coated%20fabric%20non%20adhesive%20(1).webp'],
    seo: {
      title: "Teflon Sheet Supplier | PTFE Sheets & Rolls",
      description: "PTFE Teflon sheets for heat-resistant and non-stick applications. Chennai supplier with Pan-India delivery for industrial and commercial needs.",
      h1: "PTFE / Teflon Sheet Supplier"
    }
  },
  {
    id: 'ptfe-silicone-adhesive-tape',
    name: 'PTFE Silicone Adhesive Tape',
    category: 'teflon-ptfe-tapes',
    shortDescription: 'A PTFE-coated fiberglass tape with a high-temperature silicone adhesive, providing a durable, non-stick surface.',
    description: 'This tape features a smooth, PTFE-coated fiberglass backing with a high-temperature silicone adhesive. It is used to create a non-stick, low-friction surface on machinery and equipment. The silicone adhesive performs reliably at high temperatures where other adhesives would fail, making it a staple in the packaging and plastics industries.',
    features: ['Provides a non-stick, low-friction surface', 'High-temperature silicone adhesive (up to 260°C)', 'Excellent chemical resistance', 'High strength and abrasion resistance'],
    uses: ['Covering heat sealing bars and jaws in packaging machines', 'Lining chutes, hoppers, and guide rails', 'Mold release for composite bonding', 'Providing a low-friction surface on rollers'],
    industries: ['ptfe-teflon-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp'],
    seo: {
      title: "PTFE Silicone Adhesive Tape | Teflon Tape with Adhesive",
      description: "Create a non-stick, high-temperature surface with our PTFE tape. Features a silicone adhesive for reliable performance. Buy from Tape India."
    }
  },
  {
    id: 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive',
    name: 'PTFE Coated Fiberglass Fabric with Silicone Adhesive',
    category: 'teflon-ptfe-tapes',
    shortDescription: 'Industrial-grade PTFE tape with a silicone adhesive, offering premium performance for the most demanding high-temp, non-stick applications.',
    description: "This is our premium grade of PTFE tape, offering a higher PTFE content for enhanced release and a thicker fiberglass backing for greater durability. It is the go-to solution for the most demanding industrial applications that require a robust, long-lasting non-stick surface in high-temperature environments.",
    features: ['Premium grade with higher PTFE content', 'Exceptional durability and wear resistance', 'Performs reliably at continuous high temperatures', 'Silicone adhesive removes cleanly after use'],
    uses: ['High-demand heat sealing and packaging machinery', 'Composite mold release where multiple cycles are required', 'Lining chemical processing tanks and equipment', 'Heavy-duty industrial applications requiring non-stick surfaces'],
    industries: ['ptfe-teflon-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/ptef%20fiberglass%20with%20silicone%20adhesive.webp'],
    seo: {
      title: "Industrial PTFE Coated Fiberglass Tape with Adhesive",
      description: "Our premium PTFE tape for demanding industrial applications. Offers superior non-stick performance and durability. Supplier in India."
    }
  },
  {
    id: 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner',
    name: 'PTFE Coated Fiberglass Fabric with Silicone Adhesive & Liner',
    category: 'teflon-ptfe-tapes',
    shortDescription: 'Premium PTFE tape supplied with a release liner, making it easy to die-cut into custom shapes for precision placement.',
    description: 'This version of our high-performance PTFE tape includes a release liner on the adhesive side. This liner makes it easy to die-cut the tape into gaskets, discs, or other custom shapes for precise masking and assembly applications. It offers the same excellent non-stick and high-temperature properties as our other PTFE tapes.',
    features: ['Supplied on a liner for easy die-cutting', 'Create custom gaskets and shapes', 'High-temperature performance', 'Non-stick surface with clean-release adhesive'],
    uses: ['Die-cut gaskets for high-temperature sealing', 'Precision masking for thermal spray', 'Non-stick pads and insulators for electronics', 'Custom non-stick surfaces for machinery'],
    industries: ['ptfe-teflon-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/PTFE%20Coated%20Fiberglass%20Fabric%20with%20Silicone%20Adhesive%20%26%20Liner.webp'],
    seo: {
      title: "PTFE Tape with Liner | Die-Cut Teflon Tape | Tape India",
      description: "Buy liner-backed PTFE tape for easy die-cutting. Create custom non-stick gaskets and masks for high-temperature applications. From Tape India."
    }
  },

  // Antistatic & ESD Tapes (10)
  {
    id: 'polyimide-tape',
    name: 'Polyimide Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'High-performance polyimide film tape (Kapton®) for extreme temperature applications in electronics, aerospace, and 3D printing.',
    description: 'Polyimide Tape, commonly known by the brand name Kapton®, is renowned for its ability to maintain its physical, electrical, and mechanical properties over a wide range of temperatures. With a high-temperature silicone adhesive, it removes cleanly after use, making it the top choice for masking circuit boards during soldering.',
    features: ['Extremely wide temperature range (-73°C to 260°C)', 'Excellent dielectric strength', 'Removes cleanly without adhesive residue', 'High chemical and radiation resistance'],
    uses: ['Masking PCBs for wave soldering and reflow', 'Insulating sensors, coils, and motors', '3D printer bed surface', 'Aerospace wire harness wrapping'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyimide%20tape.webp'],
    seo: {
      title: "Polyimide Tape (Kapton) | High-Temperature Film Tape",
      description: "Buy high-performance polyimide tape (Kapton®) from Tape India. Withstands extreme temperatures, making it ideal for electronics masking and insulation."
    }
  },
  {
    id: 'emi-shielding-tape',
    name: 'EMI Shielding Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'Conductive foil tapes (copper or aluminum) used to block electromagnetic interference (EMI) and radio frequency interference (RFI) in electronics.',
    description: "EMI Shielding Tapes are used to control electromagnetic interference in electronic devices. These tapes, typically made from copper or aluminum foil with a conductive adhesive, are used to seal enclosures, wrap cables, and ground components, preventing unwanted electronic \"noise\" from affecting sensitive circuits.",
    features: ['Conductive foil backing (Copper or Aluminum)', 'Conductive adhesive for a reliable electrical connection', 'Effective at shielding against EMI and RFI', 'Solderable for grounding applications'],
    uses: ['Shielding seams on electronic enclosures', 'Wrapping cables to prevent interference', 'Grounding applications', 'Shielding guitar cavities and pickguards'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp'],
    seo: {
      title: "EMI Shielding Tape | Conductive Copper & Foil Tape",
      description: "Block electromagnetic interference with our EMI shielding tapes. We supply conductive copper and aluminum foil tapes for electronics. From Tape India."
    }
  },
  {
    id: 'copper-foil-tape',
    name: 'Copper Foil Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'A versatile conductive tape featuring a copper foil backing, used for EMI shielding, grounding, and electronics repair.',
    description: `Our Copper Foil Tape features a soft copper foil backing with a conductive acrylic adhesive, making it a highly versatile tool for electronics professionals and hobbyists. It is ideal for EMI/RFI shielding, creating conductive traces on circuit boards, grounding, and even arts and crafts like making stained glass.`,
    features: ['Highly conductive copper foil', 'Conductive adhesive ensures a reliable bond', 'Solderable for easy grounding', 'Conformable for wrapping and irregular shapes'],
    uses: ['EMI/RFI shielding in electronic devices', 'Static charge draining', 'Creating circuit traces for prototyping', 'Stained glass crafting'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp'],
    seo: {
      title: "Copper Tape & Copper Foil Sheets | Chennai Supplier",
      description: "Copper tapes and copper foil sheets for EMI shielding and electrical applications. Bulk supply across India from TapeIndia.",
      h1: "Copper Tape & Foil Sheet Supplier for EMI Shielding",
      imageAlt: "Copper tape roll and copper foil sheet for EMI shielding"
    }
  },
  {
    id: 'conductive-grid-tape',
    name: 'Conductive Grid Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'An anti-static tape featuring a conductive grid pattern, designed for general use and packaging within an ESD Protected Area (EPA).',
    description: 'This three-layer tape consists of a conductive grid buried between two static-dissipative polymer layers. This construction ensures that the tape does not generate a static charge when unwound or removed, making it safe for sealing packages and general use within an ESD-sensitive environment. The grid pattern provides a visual cue that it is ESD-safe.',
    features: ['Does not generate triboelectric charge', 'Conductive grid provides shielding properties', 'Transparent for easy inspection of contents', 'Ideal for sealing ESD bags and containers'],
    uses: ['Sealing ESD-safe bags and packaging', 'General use within an EPA where regular tape is prohibited', 'Office use in ESD-sensitive areas', 'Securing notes and work orders in an electronics lab'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/conductive%20grind%20tape.webp'],
    seo: {
      title: "Conductive Grid Tape | Anti-Static ESD Tape | Tape India",
      description: "Use our conductive grid tape for safe packaging and sealing within an EPA. Anti-static and ideal for electronics handling. Buy online from Tape India."
    }
  },
  {
    id: 'esd-kapton-tape',
    name: 'ESD Kapton Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'High-temperature polyimide tape treated with anti-static properties, designed for masking in ESD-sensitive electronics manufacturing.',
    description: "ESD Kapton Tape combines the exceptional high-temperature resistance of polyimide film with static-dissipative properties. This ensures that no static charge is generated when the tape is applied or removed from a circuit board, protecting sensitive components from ESD damage during high-temperature processes like wave soldering.",
    features: ['High-temperature resistance of Kapton®', 'Static-dissipative adhesive and/or backing', 'Prevents tribocharging during application and removal', 'Removes cleanly with no residue'],
    uses: ['Masking PCBs with ESD-sensitive components', 'High-temperature applications within an EPA', 'Securing components during reflow soldering'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp'],
    seo: {
      title: "ESD Kapton Tape | Antistatic High-Temperature Tape",
      description: "Protect sensitive components with ESD Kapton tape. Combines high-temperature resistance with anti-static properties for safe electronics masking."
    }
  },
  {
    id: 'anti-static-polyester-tape',
    name: 'Anti-Static Polyester Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'A polyester film tape treated to be anti-static, making it suitable for general use and splicing in an Electrostatic Protected Area (EPA).',
    description: 'This tape features a durable polyester backing with a static-dissipative coating, making it safe for use in environments where static discharge could damage sensitive components. It is a more economical option than Kapton for general-purpose applications within an EPA that do not require extreme temperature resistance.',
    features: ['Static-dissipative coating prevents charge generation', 'Durable polyester film backing', 'Economical choice for general use in an EPA', 'Available in clear and colored options'],
    uses: ['General purpose sealing and holding in an EPA', 'Splicing leader tape in electronics manufacturing', 'Color-coding and identifying components'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/anti%20static%20polyester%20tape.webp'],
    seo: {
      title: "Anti-Static Polyester Tape | ESD-Safe General Purpose Tape",
      description: "An economical, anti-static polyester tape for general use within an EPA. Safe for sealing and holding in electronics environments. From Tape India."
    }
  },
  {
    id: 'polyimide-double-sided-tape',
    name: 'Polyimide Double-Sided Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'A high-temperature double-sided tape featuring a polyimide carrier, used for bonding and mounting in extreme temperature environments.',
    description: 'This specialized tape combines the high-temperature stability of a polyimide film carrier with a silicone adhesive on both sides. It is used for bonding applications that will be exposed to extreme heat, such as mounting flexible circuits or components that require a permanent bond during high-temperature processes.',
    features: ['Withstands extreme temperatures', 'Polyimide carrier provides excellent stability', 'Silicone adhesive on both sides', 'Thin profile for precise bonding'],
    uses: ['Mounting flexible printed circuits (FPCs)', 'Splicing materials destined for high-temperature ovens', 'Bonding components inside electronic devices', 'Aerospace component assembly'],
    industries: ['electronic-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/double-sided-polyimide-tapes-1.webp'],
    seo: {
      title: "Double Sided Polyimide Tape | High-Temp Bonding Tape",
      description: "Buy double-sided polyimide tape for high-temperature bonding applications. Ideal for mounting flexible circuits and components. From Tape India."
    }
  },
  {
    id: 'polyimide-film-tape',
    name: 'Polyimide Film Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'A high-performance tape made from polyimide film, offering outstanding thermal and electrical insulation for demanding applications.',
    description: 'Polyimide Film Tape is a single-coated tape prized for its exceptional thermal stability and dielectric strength. It is a go-to choice for challenging applications in electronics and aerospace, providing reliable electrical insulation and mechanical strength at temperatures where other plastic films would degrade.',
    features: ['Exceptional thermal endurance', 'High dielectric strength', 'Dimensionally stable at high temperatures', 'Thin and conformable'],
    uses: ['Slot liner insulation in motors', 'Core, layer, and final insulation in transformers and coils', 'High-temperature wire harness wrapping', 'Masking for printed circuit boards'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/polyimide%20flim%20tape.webp'],
    seo: {
      title: "Polyimide Film Tape Manufacturer | High-Temp Insulation",
      description: "Source high-performance polyimide film tape for electrical insulation and high-temperature masking. Offers excellent thermal stability. From Tape India."
    }
  },
  {
    id: 'tin-plated-copper-tape',
    name: 'Tin Plated Copper Tape',
    category: 'antistatic-esd-tapes',
    shortDescription: 'A high-performance tape featuring a tin-plated copper foil for superior EMI/RFI shielding, corrosion resistance, and solderability.',
    description: "This advanced shielding tape features a copper foil backing that has been plated with tin. The tin plating provides excellent resistance to corrosion and oxidation, and makes the surface extremely easy to solder to. Combined with a conductive adhesive, it offers a premium solution for the most demanding EMI shielding and grounding applications.",
    features: ['Tin-plating for corrosion resistance and easy soldering', 'Conductive copper foil base', 'Conductive adhesive for a reliable electrical path', 'Provides superior EMI/RFI shielding'],
    uses: ['Grounding and shielding in marine and corrosive environments', 'Creating solderable connection points', 'Shielding connectors and I/O ports', 'High-end electronics and telecommunications equipment'],
    industries: ['electronic-industry', 'packaging-industry'],
    images: ['https://file.garden/aIULwzQ_QkPKQcGw/tin%20copper%20tape.webp'],
    seo: {
      title: "Tin Plated Copper Tape | Solderable Shielding Tape",
      description: "Buy premium tin-plated copper tape for superior shielding and solderability. Corrosion-resistant for demanding electronics. From Tape India."
    }
  }
];
