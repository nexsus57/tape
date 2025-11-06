
import type { Product, Category, BlogArticle } from '../types';
import { PRODUCTS as CONTENT_PRODUCTS } from '../constants';

// --- TYPE DEFINITIONS ---
// These types define the structure of our raw SEO data.

export interface FaqItem {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
        "@type": "Answer";
        text: string;
    };
}

export interface SeoPageData {
    "Page Type": "Homepage" | "Product" | "Category List" | "Industry List" | "Static" | "Blog Post" | "Blog List";
    "Page Name": string;
    "Full URL": string;
    "Title (≤60 chars)": string;
    "Meta Description (≤160 chars)": string;
    "H1": string;
    "H2_1"?: string;
    "H2_2"?: string;
    "H2_3"?: string;
    "H2_4"?: string;
    "H2_5"?: string;
    "H3"?: string;
    "H4"?: string;
    "H5"?: string;
    "Primary Keywords": string;
    "Secondary Keywords": string;
    summary: string;
    "CTA": string;
    "Schema Type": "WebSite" | "Product" | "CollectionPage" | "AboutPage" | "ContactPage" | "Article" | "FAQPage";
    faqs: FaqItem[];
    "Product Schema (JSON-LD)": string | null;
    "LocalBusiness Schema (JSON-LD)": string;
    "FAQ Schema (JSON-LD)": string;
    "Combined Schema (JSON-LD)": string;
    // Extra fields for specific types
    "id"?: string; // for products, categories, blogs
    "image"?: string;
}


// --- RAW DATA SOURCE ---
// This is the single source of truth for SEO content, categories, and blog posts.
// In a real CMS, this would be fetched from an API.

const rawSeoData: SeoPageData[] = [
    // --- STATIC PAGES ---
    {
        "Page Type": "Homepage",
        "Page Name": "Home",
        "Full URL": "https://tapeindia.shop/",
        "Title (≤60 chars)": "Industrial Tape Manufacturer & Wholesaler | Chennai | Tape India",
        "Meta Description (≤160 chars)": "Tape India is a leading B2B manufacturer & supplier of 200+ industrial tapes in Chennai. We offer packaging, safety, electrical & specialty tapes. Get a bulk quote!",
        "H1": "Industrial Tape Manufacturer & Bulk Supplier in India",
        "Primary Keywords": "industrial tape manufacturer, industrial tape supplier, tape india",
        "Secondary Keywords": "adhesive tape manufacturer chennai, b2b tape supplier, packaging tape bulk",
        "summary": "For over 65 years, Tape India has been the trusted B2B supplier of high-performance adhesive tapes. From heavy-duty packaging tapes to precision electronics solutions, we deliver quality and reliability to industries across India. As a Chennai-based manufacturer, we supply industrial and speciality tapes nationwide, handling bulk orders and fast delivery to all major cities.",
        "CTA": "Request a Quote",
        "Schema Type": "WebSite",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },
    {
        "Page Type": "Static",
        "Page Name": "About Us",
        "Full URL": "https://tapeindia.shop/about",
        "Title (≤60 chars)": "About Tape India | 65+ Years of Adhesive Tape Expertise",
        "Meta Description (≤160 chars)": "Learn about Sha Kundanmal Misrimal (Tape India), a leading industrial tape manufacturer in Chennai since 1957. Discover our history, mission, and commitment to quality.",
        "H1": "About Sha Kundanmal Misrimal (Tape India)",
        "H2_1": "Our Journey: From Local Supplier to National Manufacturer",
        "H2_2": "Our Core Values",
        "Primary Keywords": "about tape india, sha kundanmal misrimal",
        "Secondary Keywords": "adhesive tape history, tape manufacturer chennai",
        "summary": "",
        "CTA": "Request a Bulk Quote",
        "Schema Type": "AboutPage",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },
     {
        "Page Type": "Static",
        "Page Name": "Contact Us",
        "Full URL": "https://tapeindia.shop/contact",
        "Title (≤60 chars)": "Contact Tape India | Get a Quote for Industrial Tapes",
        "Meta Description (≤160 chars)": "Contact Tape India in Chennai for all your industrial adhesive tape needs. Get our address, phone number, and email, or use our form to request a bulk quote.",
        "H1": "Contact Us",
        "Primary Keywords": "contact tape india, tape supplier chennai",
        "Secondary Keywords": "industrial tape quote, adhesive tape phone number",
        "summary": "",
        "CTA": "Request a Quote",
        "Schema Type": "ContactPage",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },
     {
        "Page Type": "Static",
        "Page Name": "Privacy Policy",
        "Full URL": "https://tapeindia.shop/privacy-policy",
        "Title (≤60 chars)": "Privacy Policy | Tape India",
        "Meta Description (≤160 chars)": "Read the official Privacy Policy for Tape India. Learn how we collect, use, and protect your data when you visit our website or contact us for quotes.",
        "H1": "Privacy Policy",
        "Primary Keywords": "tape india privacy policy",
        "Secondary Keywords": "data protection, website cookies",
        "summary": "",
        "CTA": "",
        "Schema Type": "WebSite",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },

    // --- LIST PAGES ---
    {
        "Page Type": "Product",
        "Page Name": "All Products List",
        "Full URL": "https://tapeindia.shop/products",
        "Title (≤60 chars)": "All Industrial Tapes | Manufacturer & Supplier | Tape India",
        "Meta Description (≤160 chars)": "Browse our complete catalog of over 200 industrial adhesive tapes. As a leading manufacturer, we supply packaging, safety, electrical, and specialty tapes.",
        "H1": "All Products",
        "summary": "Explore our comprehensive range of industrial adhesive solutions. As a trusted B2B manufacturer and supplier, we provide high-quality tapes for every application, from heavy-duty packaging and safety marking to specialized uses in electronics and HVAC.",
        "Primary Keywords": "all industrial tapes, industrial tapes catalog",
        "Secondary Keywords": "adhesive tape products, tape india products",
        "CTA": "",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },
    {
        "Page Type": "Blog List",
        "Page Name": "Blog",
        "Full URL": "https://tapeindia.shop/blog",
        "Title (≤60 chars)": "Industrial Insights – Expert Articles by Tape India",
        "Meta Description (≤160 chars)": "Explore expert articles on industrial tapes from Tape India. Learn about EMI shielding, thermal management, safety solutions, and adhesive technology.",
        "H1": "Industrial Insights",
        "summary": "",
        "Primary Keywords": "industrial tape blog, adhesive technology articles",
        "Secondary Keywords": "tape india blog, manufacturing insights",
        "CTA": "",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}"
    },

    // --- CATEGORY DATA ---
    // This data is used to generate the Category List pages and the Category objects
    {
        id: 'safety-tapes',
        "Page Type": "Category List",
        "Page Name": "Safety Tapes",
        "Full URL": "https://tapeindia.shop/products?category=safety-tapes",
        "Title (≤60 chars)": "Safety Tapes Manufacturer | Floor Marking & Hazard Tapes",
        "Meta Description (≤160 chars)": "Tape India manufactures a wide range of safety tapes including floor marking, hazard warning, anti-skid, and barricade tapes for industrial safety.",
        "H1": "Safety Tapes",
        "summary": "Enhance workplace safety with our comprehensive range of industrial safety tapes. From high-visibility hazard tapes and durable floor marking solutions to anti-slip and photoluminescent tapes, we provide the tools to clearly mark dangers, direct traffic, and prevent accidents.",
        "Primary Keywords": "safety tapes, floor marking tape, hazard tape",
        "Secondary Keywords": "anti-skid tape, barricade tape supplier",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    {
        id: 'reflective-tapes',
        "Page Type": "Category List",
        "Page Name": "Reflective Tapes",
        "Full URL": "https://tapeindia.shop/products?category=reflective-tapes",
        "Title (≤60 chars)": "Reflective Tapes & Fabrics | Sew-On & Heat Transfer Tapes",
        "Meta Description (≤160 chars)": "B2B supplier of reflective tapes and fabrics. We offer sew-on, heat transfer, FR, and PVC reflective tapes for safety apparel and vehicles. Bulk orders.",
        "H1": "Reflective Tapes & Materials",
        "summary": "Increase visibility and safety with our high-performance reflective materials. We supply a vast selection of sew-on tapes, heat transfer films, and high-visibility fabrics compliant with safety standards, ideal for workwear, athletic gear, and vehicle markings.",
        "Primary Keywords": "reflective tapes, reflective fabric, heat transfer reflective",
        "Secondary Keywords": "sew-on reflective tape, en 20471",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    {
        id: 'double-sided-tapes',
        "Page Type": "Category List",
        "Page Name": "Double Sided Tapes",
        "Full URL": "https://tapeindia.shop/products?category=double-sided-tapes",
        "Title (≤60 chars)": "Double Sided Tapes | VHB, Foam & Tissue Tapes | Tape India",
        "Meta Description (≤160 chars)": "Manufacturer of industrial double-sided tapes. Explore our range of VHB, foam, tissue, polyester, and specialty bonding tapes for permanent mounting.",
        "H1": "Double-Sided Tapes",
        "summary": "Achieve powerful, invisible bonding with our extensive range of double-sided tapes. From high-strength VHB and acrylic foam tapes that can replace mechanical fasteners to versatile tissue and film tapes for general mounting, we provide reliable solutions for assembly, fabrication, and installation.",
        "Primary Keywords": "double sided tapes, vhb tape, foam tape",
        "Secondary Keywords": "double sided tissue tape, acrylic foam tape",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    {
        id: 'specialty-tapes',
        "Page Type": "Category List",
        "Page Name": "Specialty Tapes",
        "Full URL": "https://tapeindia.shop/products?category=specialty-tapes",
        "Title (≤60 chars)": "Specialty Industrial Tapes | Masking, Duct, Foil & More",
        "Meta Description (≤160 chars)": "Tape India supplies a vast range of specialty tapes: high-temp masking, duct, aluminum foil, filament, and PVC pipe wrapping tapes for unique applications.",
        "H1": "Specialty Tapes",
        "summary": "Solve unique challenges with our wide array of specialty tapes. This category includes high-temperature masking tapes for finishing processes, robust duct and filament tapes for bundling and repair, and high-performance foil tapes for sealing and shielding in demanding environments like HVAC and aerospace.",
        "Primary Keywords": "specialty tapes, masking tape, duct tape, aluminum foil tape",
        "Secondary Keywords": "filament tape, high temperature tape",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    {
        id: 'teflon-ptfe-tapes',
        "Page Type": "Category List",
        "Page Name": "Teflon & PTFE Tapes",
        "Full URL": "https://tapeindia.shop/products?category=teflon-ptfe-tapes",
        "Title (≤60 chars)": "PTFE & Teflon Tapes | High-Temp Non-Stick Tapes | Tape India",
        "Meta Description (≤160 chars)": "Manufacturer of PTFE coated fiberglass tapes with silicone adhesive. Our Teflon tapes provide a non-stick, low-friction surface for heat sealing and mold release.",
        "H1": "Teflon & PTFE Tapes",
        "summary": "Leverage the power of PTFE for extreme temperature and non-stick applications. Our Teflon® coated fiberglass tapes provide a durable, low-friction surface ideal for heat sealing machines, mold release, conveyor belts, and chute linings, ensuring smooth operation and preventing buildup.",
        "Primary Keywords": "ptfe tape, teflon tape, non-stick tape",
        "Secondary Keywords": "ptfe coated fiberglass, heat sealer tape",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    {
        id: 'antistatic-esd-tapes',
        "Page Type": "Category List",
        "Page Name": "Antistatic & ESD Tapes",
        "Full URL": "https://tapeindia.shop/products?category=antistatic-esd-tapes",
        "Title (≤60 chars)": "ESD & Antistatic Tapes | Kapton, Copper Foil & Grid Tapes",
        "Meta Description (≤160 chars)": "Protect sensitive electronics with our ESD and antistatic tapes. We supply Kapton® (polyimide), conductive copper foil, and ESD grid tapes for manufacturing.",
        "H1": "Antistatic & ESD Tapes",
        "summary": "Safeguard sensitive electronic components with our specialized range of ESD and Antistatic tapes. From high-temperature Kapton® (polyimide) tapes for PCB masking to conductive copper foil tapes for EMI shielding and grounding, we provide essential solutions for the electronics industry.",
        "Primary Keywords": "esd tape, antistatic tape, kapton tape, copper foil tape",
        "Secondary Keywords": "polyimide tape, emi shielding tape",
        "CTA": "Get a Quote",
        "Schema Type": "CollectionPage",
        faqs: [],
        "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    
    // --- BLOG ARTICLES ---
    // Placeholder data for blogs.
    {
      id: "top-10-industrial-tapes-2025",
      "Page Type": "Blog Post",
      "Page Name": "Top 10 Industrial Tapes",
      "Full URL": "https://tapeindia.shop/blog/top-10-industrial-tapes-2025",
      "Title (≤60 chars)": "Top 10 Industrial Tapes Every Manufacturer Needs in 2025",
      "Meta Description (≤160 chars)": "Discover the essential industrial tapes for modern manufacturing. An expert review of VHB, Kapton, and other high-performance adhesive tapes from Tape India.",
      "H1": "Top 10 Industrial Tapes for 2025",
      "Primary Keywords": "top industrial tapes, essential adhesive tapes",
      "Secondary Keywords": "vhb tape uses, kapton tape applications",
      "summary": "Discover the top 10 essential industrial tapes for modern manufacturing in 2025. An expert review of VHB, Kapton, and other high-performance adhesive tapes.",
      "CTA": "Read More",
      "Schema Type": "Article",
      faqs: [], "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    },
    // Add other blog posts similarly...
];


// --- DATA PROCESSING LOGIC ---

// Export the raw data for pages that need it (like the SEO hub)
export const seoData = rawSeoData;

// Process and export ALL_PRODUCTS
// This merges the content from constants.ts with the SEO data from this file.
export const ALL_PRODUCTS: Product[] = CONTENT_PRODUCTS.map(productContent => {
    // Find the corresponding SEO data for the current product
    const productSeo = seoData.find(seo => seo["Page Type"] === 'Product' && seo.id === productContent.id);

    // If no SEO data is found, create a fallback
    const fallbackSeo: SeoPageData = {
        "Page Type": "Product",
        "Page Name": productContent.name,
        "Full URL": `https://tapeindia.shop/product/${productContent.id}`,
        "Title (≤60 chars)": `${productContent.name} | Tape India`,
        "Meta Description (≤160 chars)": productContent.shortDescription,
        "H1": productContent.name,
        "Primary Keywords": productContent.name,
        "Secondary Keywords": productContent.category,
        summary: productContent.shortDescription,
        "CTA": "Request a Quote",
        "Schema Type": "Product",
        faqs: [],
        "Product Schema (JSON-LD)": "{}",
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}",
    };

    return {
        ...productContent,
        seo: productSeo || fallbackSeo,
    };
});

// Process and export ALL_CATEGORIES
export const ALL_CATEGORIES: Category[] = [
    { id: 'safety-tapes', name: 'Safety Tapes', icon: 'ShieldCheckIcon', subtitle: 'Floor marking, hazard, and anti-slip tapes.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/hazardtape.webp' },
    { id: 'reflective-tapes', name: 'Reflective Tapes', icon: 'SunIcon', subtitle: 'High-visibility tapes for apparel and vehicles.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/silver%20tc.webp' },
    { id: 'double-sided-tapes', name: 'Double Sided Tapes', icon: 'LayersIcon', subtitle: 'For mounting, bonding, and assembly.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/vhb%20tape.webp' },
    { id: 'specialty-tapes', name: 'Specialty Tapes', icon: 'SparklesIcon', subtitle: 'Masking, duct, foil, and unique solutions.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/duct%20tape.webp' },
    { id: 'teflon-ptfe-tapes', name: 'Teflon & PTFE Tapes', icon: 'ThermometerIcon', subtitle: 'High-temp, non-stick industrial tapes.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp' },
    { id: 'antistatic-esd-tapes', name: 'Antistatic & ESD Tapes', icon: 'ZapIcon', subtitle: 'For electronics manufacturing and assembly.', image: 'https://file.garden/aIULwzQ_QkPKQcGw/kapton%20tape.webp' },
];

// Process and export ALL_BLOG_ARTICLES
export const ALL_BLOG_ARTICLES: BlogArticle[] = rawSeoData
    .filter(item => item["Page Type"] === "Blog Post")
    .map((item, index) => ({
        id: item.id || `blog-post-${index}`,
        title: item["Page Name"],
        summary: item.summary,
        content: `<h2>${item["H1"]}</h2><p>${item.summary}</p><p>More content coming soon...</p>`, // Placeholder content
        category: "Industry Guides",
        tags: item["Primary Keywords"].split(', '),
        readTime: 5,
        image: item.image || `https://file.garden/aIULwzQ_QkPKQcGw/blog-placeholder-${index % 4 + 1}.webp`, // Use placeholder images
        author: "Tape India Experts",
        datePublished: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        dateModified: new Date().toISOString().split('T')[0],
        seo: item,
    }));
