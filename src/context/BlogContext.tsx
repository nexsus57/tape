
import { createContext, useContext, ReactNode, useCallback, FC } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BlogArticle } from '../types';

const INITIAL_ARTICLES: BlogArticle[] = [
    {
        id: 'copper-foil-tape-emi-shielding-original',
        title: 'Copper Foil Tape: The Ultimate Solution for EMI Shielding',
        summary: 'In the intricate world of electronics, unwanted electromagnetic interference (EMI) can cause significant disruptions. Discover how copper foil tape emerges as a critical and versatile solution.',
        content: `
            <h2>Understanding EMI and Its Impact</h2>
            <p>Electromagnetic Interference (EMI), often called Radio-Frequency Interference (RFI), is a disturbance that affects an electrical circuit due to either electromagnetic induction or electromagnetic radiation emitted from an external source. In simple terms, it's electronic "noise" that can degrade performance or even stop a device from working altogether.</p>
            <p>Common sources of EMI include power lines, motors, and even other electronic circuits. In our increasingly connected world, effectively shielding sensitive components is not just an option—it's a necessity.</p>
            <h2>How Copper Foil Tape Works</h2>
            <p>Copper is an excellent conductor of electricity, which makes it highly effective at blocking electromagnetic fields. When applied correctly, copper foil tape creates a conductive barrier, often known as a Faraday cage, around a component or enclosure.</p>
            <ul>
                <li><strong>Absorption:</strong> The tape absorbs incoming electromagnetic waves, converting them into a small electrical current.</li>
                <li><strong>Reflection:</strong> It also reflects waves away from the sensitive components.</li>
                <li><strong>Grounding:</strong> For maximum effectiveness, the tape is often connected to a ground point, allowing any absorbed electrical noise to be safely dissipated.</li>
            </ul>
            <p>With its flexible nature and strong adhesive, copper foil tape provides a simple, effective, and economical solution for a wide range of EMI shielding applications in electronics manufacturing and repair.</p>
        `,
        category: 'Electronics',
        tags: ['EMI Shielding', 'Copper Tape', 'Electronics'],
        readTime: 4,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp',
        author: 'Tape India Experts',
        datePublished: '2023-10-26',
        dateModified: '2023-10-26',
    },
    {
        id: 'thermal-pads-heat-management-original',
        title: 'Thermal Pads: The Backbone of Efficient Heat Management',
        summary: 'As electronic devices become smaller and more powerful, managing the heat they generate is more critical than ever. Learn how thermal pads provide a reliable way to transfer heat away.',
        content: `
            <h2>The Challenge of Heat in Modern Electronics</h2>
            <p>Heat is the primary enemy of electronic components. Excessive temperatures can lead to reduced performance, instability, and premature failure. As devices like CPUs, GPUs, and LEDs pack more power into smaller packages, dissipating this heat becomes a major engineering challenge.</p>
            <h2>What Are Thermal Pads?</h2>
            <p>Thermal pads, also known as thermally conductive pads or gap fillers, are soft, conformable materials designed to fill microscopic air gaps between a heat-generating component and its heat sink. Air is a poor conductor of heat, and these gaps can trap heat, preventing efficient transfer.</p>
            <p>Thermal pads are typically made from a silicone base filled with thermally conductive ceramic particles. Their key benefits include:</p>
            <ul>
                <li><strong>High Thermal Conductivity:</strong> They create an efficient path for heat to move from the component to the heat sink.</li>
                <li><strong>Conformability:</strong> Their soft nature allows them to fill uneven surfaces and gaps perfectly.</li>
                <li><strong>Electrical Insulation:</strong> They prevent short circuits between the component and the metal heat sink.</li>
                <li><strong>Ease of Application:</strong> They are easy to cut and apply, simplifying the assembly process compared to thermal pastes.</li>
            </ul>
            <p>By providing a reliable thermal interface, these pads are essential for ensuring the longevity and optimal performance of high-powered electronics.</p>
        `,
        category: 'Thermal Management',
        tags: ['Thermal Pads', 'Heat Sink', 'Electronics'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp',
        author: 'Tape India Experts',
        datePublished: '2023-10-24',
        dateModified: '2023-10-24',
    },
    {
        id: 'sticky-mats-contamination-control-original',
        title: 'Sticky Mats: Keeping Industrial Environments Clean',
        summary: 'In high-precision manufacturing, even microscopic particles can lead to defects. Sticky mats are the first line of defense in preventing contamination from entering controlled areas.',
        content: `
            <h2>The Importance of Contamination Control</h2>
            <p>In industries like electronics manufacturing, pharmaceuticals, and biotechnology, maintaining a sterile or "cleanroom" environment is critical. Microscopic dust, dirt, and other particulates carried in on the soles of shoes can compromise product quality, lead to defects, and violate industry standards.</p>
            <h2>How Sticky Mats Work</h2>
            <p>Sticky mats, or tacky mats, are placed at the entrances to controlled environments to act as a barrier against foot-borne contaminants. Each mat consists of multiple layers of a polyethylene film coated with a pressure-sensitive adhesive.</p>
            <p>When a person steps on the mat, the tacky surface pulls dirt and particles from their shoe soles. Key features include:</p>
            <ul>
                <li><strong>Multi-Layered Design:</strong> When a sheet becomes saturated with contaminants, it can be easily peeled away to expose a fresh, clean layer underneath.</li>
                <li><strong>Numbered Tabs:</strong> Each layer is numbered, allowing for easy tracking of the remaining sheets.</li>
                <li><strong>Secure Placement:</strong> A full adhesive backing holds the entire mat firmly to the floor, preventing it from slipping.</li>
            </ul>
            <p>By capturing contaminants at the source, sticky mats are a simple yet highly effective tool for protecting sensitive products and processes.</p>
        `,
        category: 'Safety & Cleanroom',
        tags: ['Sticky Mats', 'Cleanroom', 'Safety'],
        readTime: 4,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp',
        author: 'Tape India Experts',
        datePublished: '2023-10-22',
        dateModified: '2023-10-22',
    },
    {
        id: 'reflective-tapes-industrial-safety-original',
        title: 'Reflective Tapes: Enhancing Visibility and Safety',
        summary: 'Ensuring the visibility of workers and equipment is fundamental to preventing accidents. Reflective tapes are a simple and highly effective tool for enhancing safety in low-light conditions.',
        content: `
            <h2>The Principle of Retro-Reflection</h2>
            <p>Unlike standard materials that scatter light in all directions, reflective tapes use retro-reflective technology. This means that when a light source (like a vehicle's headlights) shines on the tape, the light is reflected directly back to the source.</p>
            <p>This is achieved using either microscopic glass beads or prismatic structures embedded in the tape. This focused reflection makes the tape appear exceptionally bright to the person near the light source, dramatically increasing the visibility of the object or person wearing it.</p>
            <h2>Key Applications in Safety</h2>
            <ul>
                <li><strong>Vehicle Conspicuity:</strong> Marking trucks, trailers, and emergency vehicles to make them more visible at night.</li>
                <li><strong>Workwear:</strong> Enhancing the visibility of workers in construction, road maintenance, and emergency services.</li>
                <li><strong>Hazard Marking:</strong> Applying to bollards, gates, and equipment in industrial facilities to prevent collisions.</li>
            </ul>
            <p>Reflective tapes are a passive safety solution, meaning they require no power to function. This makes them a reliable and cost-effective method for improving safety in any environment with vehicle traffic or low-light conditions.</p>
        `,
        category: 'Safety & Reflective',
        tags: ['Reflective Tape', 'Safety', 'Visibility'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp',
        author: 'Tape India Experts',
        datePublished: '2023-10-20',
        dateModified: '2023-10-20',
    },
    {
        id: 'copper-foil-tape-emi-grounding',
        title: 'Copper Foil Tape: EMI Shielding and Grounding Applications',
        summary: 'Managing interference is paramount in an electronically-driven world. Copper foil tape serves as a fundamental tool for EMI shielding and secure electrical grounding.',
        content: `
            <h2>Why Grounding is Crucial</h2>
            <p>In electronics, a ground is a common reference point in a circuit from which voltages are measured. A proper ground connection is essential for safety and for preventing unwanted noise. Copper foil tape with a conductive adhesive provides an excellent, low-impedance path to ground for static charges and EMI.</p>
            <h2>Creating a Shield</h2>
            <p>By lining an electronics enclosure or wrapping a cable with copper foil tape, you create a conductive shield. This shield intercepts stray electromagnetic fields, and if connected to ground, it safely dissipates this energy, protecting the internal components from interference.</p>
        `,
        category: 'Electronics',
        tags: ['EMI Shielding', 'Grounding', 'Copper Tape'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp',
        author: 'Tape India Technical Team',
        datePublished: '2024-05-20',
        dateModified: '2024-05-20',
    },
    {
        id: 'aluminum-foil-tape-hvac-insulation',
        title: 'Aluminum Foil Tape: Ideal for HVAC and Insulation',
        summary: 'Often seen as a simple roll of metallic tape, aluminum foil tape is an unsung hero in the HVAC and construction industries, enhancing thermal efficiency.',
        content: `
            <h2>Sealing for Efficiency</h2>
            <p>In HVAC (Heating, Ventilation, and Air Conditioning) systems, air leaks in ductwork can lead to significant energy loss. Aluminum foil tape is the industry standard for sealing joints and seams in ductwork. Its soft foil backing conforms tightly to surfaces, while its high-performance adhesive creates a permanent, airtight seal that prevents conditioned air from escaping.</p>
            <h2>A Barrier Against Moisture and Heat</h2>
            <p>The foil backing also acts as an excellent vapor barrier, preventing moisture from compromising insulation. Furthermore, its reflective surface helps to reflect radiant heat, further improving the thermal efficiency of the insulation system. It is a must-have for any HVAC installation or repair.</p>
        `,
        category: 'HVAC & Sealing',
        tags: ['Aluminum Foil Tape', 'HVAC', 'Insulation'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/aluminum%20foil%20tap2e.webp',
        author: 'Tape India Industrial Experts',
        datePublished: '2024-05-19',
        dateModified: '2024-05-19',
    },
    {
        id: 'double-sided-tapes-industrial-assembly',
        title: 'Double-Sided Tapes: Enhancing Industrial Assembly',
        summary: 'Manufacturers are increasingly turning away from traditional fasteners. Double-sided tapes offer unparalleled design flexibility and production efficiency.',
        content: `
            <h2>The Modern Alternative to Fasteners</h2>
            <p>Traditional mechanical fasteners like screws, rivets, and welds create stress points, can be unsightly, and often require additional finishing steps. High-strength double-sided tapes, such as VHB (Very High Bond) acrylic foam tapes, offer a powerful alternative.</p>
            <p>These tapes bond and seal simultaneously, creating a permanent, durable bond that distributes stress evenly across the entire surface. This leads to stronger, lighter, and more aesthetically pleasing products. They also dampen vibration and can bond dissimilar materials like metal to plastic without the risk of galvanic corrosion.</p>
        `,
        category: 'Adhesive Solutions',
        tags: ['Double-Sided Tape', 'VHB Tape', 'Assembly'],
        readTime: 2,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20foam%20tape',
        author: 'Tape India Engineering Team',
        datePublished: '2024-05-18',
        dateModified: '2024-05-18',
    },
    {
        id: 'ptfe-silicone-tape-high-temperature',
        title: 'PTFE Silicone Tape: High Temperature Applications ⚙️',
        summary: 'In processes involving heat and friction, equipment failure can be costly. PTFE silicone tape is engineered to thrive in these harsh conditions.',
        content: `
            <h2>The Power of PTFE</h2>
            <p>PTFE, widely known by the brand name Teflon®, is famous for two key properties: it can withstand very high temperatures, and it has an extremely low coefficient of friction (it's very non-stick). Our PTFE tapes combine a woven fiberglass fabric for strength with a heavy coating of PTFE.</p>
            <h2>Industrial Applications</h2>
            <p>This tape is used to create a durable, non-stick surface on machinery. A high-temperature silicone adhesive ensures it stays in place even under extreme heat. Common uses include:</p>
            <ul>
                <li>Covering heat sealing bars on packaging machines.</li>
                <li>Lining chutes and guide rails to improve material flow.</li>
                <li>Providing a mold-release surface in composite manufacturing.</li>
            </ul>
        `,
        category: 'Specialty Tapes',
        tags: ['PTFE Tape', 'High Temperature', 'Non-Stick'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp',
        author: 'Tape India Material Science Division',
        datePublished: '2024-05-17',
        dateModified: '2024-05-17',
    },
    {
        id: 'reflective-tapes-industrial-safety',
        title: 'Reflective Tapes: Key to Industrial Safety and Visibility',
        summary: 'Visibility is synonymous with safety. Reflective tapes use retro-reflective technology to make objects and personnel highly visible in low-light conditions.',
        content: `
            <h2>How Retro-Reflection Works</h2>
            <p>Retro-reflection is a unique phenomenon where light is reflected directly back to its source with minimal scattering. Our reflective tapes use either microscopic glass beads or precision-engineered microprisms to achieve this effect. When a car's headlights hit the tape, the light travels back to the driver's eyes, making the tape appear intensely bright and impossible to miss.</p>
            <h2>Enhancing Safety</h2>
            <p>This technology is critical for industrial safety. Applying reflective tape to vehicles, uniforms, barriers, and equipment ensures that they are clearly visible to machinery operators and drivers, drastically reducing the risk of accidents, especially during night shifts or in poorly lit areas.</p>
        `,
        category: 'Safety & Reflective',
        tags: ['Reflective Tape', 'Safety', 'Visibility'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp',
        author: 'Tape India Safety Specialists',
        datePublished: '2024-05-16',
        dateModified: '2024-05-16',
    },
    {
        id: 'sticky-mats-contamination-control',
        title: 'Sticky Mats for Cleanroom & Industrial Use',
        summary: 'Maintaining a pristine environment is non-negotiable in many industries. Sticky mats are an essential tool, acting as a highly effective barrier at every entrance.',
        content: `
            <h2>The First Line of Defense</h2>
            <p>Contamination control starts at the door. Sticky mats are placed at the entry points to cleanrooms, laboratories, and other controlled environments to capture dirt, dust, and other particulates from the soles of shoes and trolley wheels before they can enter and compromise sensitive processes.</p>
            <h2>Easy to Use, Highly Effective</h2>
            <p>Each mat contains multiple peel-off layers. When a layer becomes soiled, it is simply peeled away to reveal a fresh, clean tacky surface. This simple process ensures a consistently high level of cleanliness and is a fundamental part of any effective contamination control program.</p>
        `,
        category: 'Safety & Cleanroom',
        tags: ['Sticky Mats', 'Cleanroom', 'Contamination Control'],
        readTime: 2,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/stickymat.webp',
        author: 'Tape India Cleanroom Solutions',
        datePublished: '2024-05-15',
        dateModified: '2024-05-15',
    },
    {
        id: 'thermal-pads-efficient-heat-management',
        title: 'Thermal Pads: Essential for Efficient Heat Management',
        summary: 'Heat is the enemy of electronics. As devices pack more power into smaller spaces, effectively dissipating that heat is a primary engineering challenge.',
        content: `
            <h2>Bridging the Gap</h2>
            <p>Even surfaces that appear perfectly smooth have microscopic imperfections. When a heat-generating component (like a processor) is placed against a heat sink, these imperfections create tiny air gaps. Since air is a terrible conductor of heat, these gaps act as insulation, trapping heat and preventing it from being drawn away.</p>
            <p>Thermal pads are soft, conformable materials that fill these gaps. Made from a silicone base infused with ceramic particles, they create a continuous thermal path, allowing heat to flow efficiently from the component to the heat sink, ensuring the device runs cool and stable.</p>
        `,
        category: 'Thermal Management',
        tags: ['Thermal Pads', 'Heat Management', 'Electronics'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/thermal%20condu%20pads.webp',
        author: 'Tape India Thermal Management Division',
        datePublished: '2024-05-14',
        dateModified: '2024-05-14',
    },
    {
        id: 'polyester-green-tape-powder-coating',
        title: 'Polyester Green Tape for Powder Coating 🔩',
        summary: 'Achieving a flawless finish in powder coating or anodizing requires precise masking. Green polyester tape is the go-to solution for high-temperature processes.',
        content: `
            <h2>The Masking Challenge</h2>
            <p>Powder coating involves electrostatically charging a part and spraying it with a fine powder, which is then cured in an oven at high temperatures. To prevent the coating from adhering to certain areas (like threads or contact points), a high-temperature masking tape is required.</p>
            <h2>Why Green Polyester?</h2>
            <p>Green Polyester Tape is the industry standard for this application. Its key properties are:</p>
            <ul>
                <li><strong>High-Temperature Resistance:</strong> It can withstand the heat of the curing oven without shrinking or degrading.</li>
                <li><strong>Clean Removal:</strong> Its specially formulated silicone adhesive removes cleanly in one piece after baking, leaving no sticky residue behind.</li>
                <li><strong>Chemical Resistance:</strong> It holds up against the chemical cleaning processes used to prepare parts for coating.</li>
            </ul>
        `,
        category: 'Masking Tapes',
        tags: ['Polyester Tape', 'Powder Coating', 'Masking'],
        readTime: 2,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/green-powder-coating-tape-500x500%20(1).webp',
        author: 'Tape India Technical Experts',
        datePublished: '2024-05-13',
        dateModified: '2024-05-13',
    },
    {
        id: 'top-10-industrial-tapes',
        title: 'Top 10 Industrial Tapes Every Manufacturer Should Know',
        summary: 'The world of industrial tapes is vast. Understanding the key players can help you optimize your processes, improve product quality, and increase efficiency.',
        content: `
            <h2>Essential Tapes for Modern Industry</h2>
            <p>While every application has its unique needs, there are certain tapes that are staples in almost every manufacturing facility. This guide provides a brief overview of the most critical tapes and their primary uses.</p>
            <ol>
                <li><strong>BOPP Tape:</strong> The standard for carton sealing.</li>
                <li><strong>Filament Tape:</strong> For heavy-duty bundling and palletizing.</li>
                <li><strong>Duct Tape:</strong> The all-purpose tool for repairs and sealing.</li>
                <li><strong>Masking Tape:</strong> For painting and temporary holding.</li>
                <li><strong>Aluminum Foil Tape:</strong> Essential for HVAC and heat shielding.</li>
                <li><strong>Double-Sided Foam Tape:</strong> For permanent mounting and bonding.</li>
                <li><strong>Polyester Tape:</strong> For high-temperature masking like powder coating.</li>
                <li><strong>Kapton® (Polyimide) Tape:</strong> The standard for electronics masking.</li>
                <li><strong>Anti-Skid Tape:</strong> For floor safety and slip prevention.</li>
                <li><strong>VHB™ Tape:</strong> To replace mechanical fasteners in structural bonding.</li>
            </ol>
        `,
        category: 'Industry Guides',
        tags: ['Industrial Tapes', 'Manufacturing', 'Guide'],
        readTime: 4,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/banner.webp',
        author: 'Tape India Team',
        datePublished: '2024-05-12',
        dateModified: '2024-05-12',
    },
    {
        id: 'eco-friendly-adhesive-solutions',
        title: 'Eco-Friendly Adhesive Solutions for Sustainable Manufacturing',
        summary: 'As demands for sustainability grow, manufacturers are seeking ways to reduce their environmental impact. Adhesive tapes represent a significant opportunity.',
        content: `
            <h2>The Shift to Sustainable Packaging</h2>
            <p>Consumers and regulators are increasingly demanding that companies adopt more sustainable practices. Packaging is a primary focus area, and the tape used to seal cartons is a key component.</p>
            <h2>Water-Activated Paper Tape</h2>
            <p>One of the best eco-friendly alternatives is water-activated paper tape (also known as gummed tape). Unlike traditional plastic tapes, this tape is made from renewable kraft paper and a starch-based adhesive. Key benefits include:</p>
            <ul>
                <li><strong>Recyclable:</strong> It can be recycled along with the cardboard box, simplifying the waste stream.</li>
                <li><strong>Tamper-Evident:</strong> It creates a permanent bond with the carton, revealing any attempts to tamper with the package.</li>
                <li><strong>Strong:</strong> Reinforced versions with fiberglass filaments are available for heavy-duty sealing.</li>
            </ul>
            <p>By switching to paper-based tapes, companies can significantly improve the sustainability of their packaging operations.</p>
        `,
        category: 'Sustainability',
        tags: ['Paper Tape', 'Eco-Friendly', 'Packaging'],
        readTime: 3,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/kraft%20tape.webp',
        author: 'Tape India Sustainability Team',
        datePublished: '2024-05-11',
        dateModified: '2024-05-11',
    },
    {
        id: 'choosing-the-right-tape',
        title: 'Choosing the Right Tape for Your Industry: A Practical Guide 🧵',
        summary: 'With over 200 products in our catalog, selecting the perfect tape can seem daunting. This guide will walk you through the critical factors to consider.',
        content: `
            <h2>Key Factors for Tape Selection</h2>
            <p>Choosing the correct industrial tape is critical for performance and cost-effectiveness. Rushing the decision can lead to product failure, downtime, and unnecessary expense. Here are the key factors to consider:</p>
            <h3>1. Substrates</h3>
            <p>What surfaces are you bonding to? Metals, plastics, glass, and paper all have different surface energies. A tape that sticks well to cardboard might fail on a low-surface-energy plastic like polyethylene.</p>
            <h3>2. Environment</h3>
            <p>Will the tape be exposed to extreme temperatures (hot or cold), UV light, moisture, or chemicals? An indoor-grade tape will quickly fail in an outdoor application. Polyester and acrylic tapes generally offer better environmental resistance.</p>
            <h3>3. Application Stress</h3>
            <p>What kind of forces will the tape need to endure? Tensile stress (pulling), shear stress (sliding), and peel stress (lifting an edge) all require different adhesive properties. For heavy loads, consider high-shear tapes like VHB™ or filament tape.</p>
            <h3>4. Permanent or Removable?</h3>
            <p>Do you need the tape to bond permanently, or does it need to be removed cleanly after a period of time? Masking tapes are designed for clean removal, while VHB™ tapes are designed for permanent structural bonding.</p>
            <p>By carefully considering these four factors, you can narrow down your choices and find the perfect tape for your application. When in doubt, our technical experts are always here to help.</p>
        `,
        category: 'Industry Guides',
        tags: ['Tape Selection', 'Adhesives', 'Guide'],
        readTime: 4,
        image: 'https://file.garden/aIULwzQ_QkPKQcGw/bopp%20tape.webp',
        author: 'Tape India Application Engineers',
        datePublished: '2024-05-10',
        dateModified: '2024-05-10',
    }
];


interface BlogContextType {
  articles: BlogArticle[];
  addArticle: (articleData: Omit<BlogArticle, 'id'>) => void;
  updateArticle: (id: string, updatedArticle: BlogArticle) => void;
  deleteArticle: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
    children: ReactNode;
}

export const BlogProvider: FC<BlogProviderProps> = ({ children }) => {
  const [articles, setArticles] = useLocalStorage<BlogArticle[]>('tapeindia_articles_v1', INITIAL_ARTICLES);

  const addArticle = useCallback((articleData: Omit<BlogArticle, 'id'>) => {
    const newArticle: BlogArticle = {
      ...articleData,
      id: `${articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`
    };
    setArticles(prev => [newArticle, ...prev]);
  }, [setArticles]);

  const updateArticle = useCallback((id: string, updatedArticleData: BlogArticle) => {
    setArticles(prev => prev.map(a => (a.id === id ? updatedArticleData : a)));
  }, [setArticles]);

  const deleteArticle = useCallback((id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  }, [setArticles]);


  const value = { articles, addArticle, updateArticle, deleteArticle };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
