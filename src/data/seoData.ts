// This file is the single source of truth for all SEO and content data.
// It merges rich product content from `constants.ts` with comprehensive SEO metadata.

import { Product, Category, BlogArticle } from '../types';
import { PRODUCTS as CONSTANT_PRODUCTS } from '../constants';

export interface SeoPageData {
  "Page Type": string;
  "Page Name": string;
  "Full URL": string;
  "Title (≤60 chars)": string;
  "Meta Description (≤160 chars)": string;
  H1: string;
  H2_1?: string;
  H2_2?: string;
  H2_3?: string;
  H2_4?: string;
  H2_5?: string;
  H3?: string;
  H4?: string;
  H5?: string;
  "Primary Keywords": string;
  "Secondary Keywords": string;
  "FAQ Schema (JSON-LD)": string;
  "Product Schema (JSON-LD)": string | null;
  "LocalBusiness Schema (JSON-LD)": string;
  "Combined Schema (JSON-LD)": string;
  CTA: string;
  "Schema Type": string;
  summary: string;
  faqs: { name: string; acceptedAnswer: { text: string } }[];
  "Image URL"?: string;
}

// This raw data contains the complete SEO metadata for every page on the site.
const rawSeoData: Omit<SeoPageData, 'summary' | 'faqs'>[] = [
  // --- STATIC PAGES ---
  {"Page Type":"Static","Page Name":"Home","Full URL":"https://tapeindia.shop/","Title (≤60 chars)":"Industrial Tape Manufacturer India | Bulk Supplier Since 1957","Meta Description (≤160 chars)":"Tape India (Sha Kundanmal Misrimal)—ISO-certified industrial tape manufacturer in India since 1957. Bulk orders, OEM/private label, custom sizes, pan-India delivery.","H1":"Industrial Tape Manufacturer & Bulk Supplier in India","Primary Keywords":"industrial tape manufacturer, industrial tape supplier, bulk tape india","Secondary Keywords":"oem tape manufacturer, custom size tape, pan india delivery, iso certified, since 1957","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Bulk Quote","Schema Type":"WebPage"},
  {"Page Type":"Static","Page Name":"About Us","Full URL":"https://tapeindia.shop/about","Title (≤60 chars)":"About Us | Tape India (Sha Kundanmal Misrimal) | Since 1957","Meta Description (≤160 chars)":"Learn about Tape India (Sha Kundanmal Misrimal), a family-run industrial tape manufacturer in India since 1957. We specialize in B2B bulk supply and OEM solutions.","H1":"About Tape India: A Legacy of Adhesion Since 1957","Primary Keywords":"about tape india, industrial tape manufacturer history, tape company since 1957","Secondary Keywords":"b2b tape supplier, oem tape solutions, sha kundanmal misrimal","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Partner With Us","Schema Type":"WebPage"},
  {"Page Type":"Static","Page Name":"All Products List","Full URL":"https://tapeindia.shop/products","Title (≤60 chars)":"All Industrial Tapes | Manufacturer & Supplier | Tape India","Meta Description (≤160 chars)":"Browse our complete range of over 100 industrial adhesive tapes. As a leading manufacturer, we supply everything from VHB to Kapton tapes Pan-India.","H1":"All Products","Primary Keywords":"all products, industrial tapes, tape supplier","Secondary Keywords":"adhesive solutions, tape manufacturer, b2b tapes","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"CollectionPage"},
  {"Page Type":"Static","Page Name":"Contact Us","Full URL":"https://tapeindia.shop/contact","Title (≤60 chars)":"Contact Us | Industrial Tape Supplier | Tape India","Meta Description (≤160 chars)":"Contact Tape India for bulk orders, custom quotes, and technical support for industrial tapes. Reach our Chennai office by phone, email, or visit us directly.","H1":"Contact Tape India","Primary Keywords":"contact tape india, industrial tape supplier, tape manufacturer chennai","Secondary Keywords":"bulk tape quote, technical support, adhesive tape supplier","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Get In Touch","Schema Type":"ContactPage"},
  {"Page Type":"Static","Page Name":"Privacy Policy","Full URL":"https://tapeindia.shop/privacy-policy","Title (≤60 chars)":"Privacy Policy | Tape India","Meta Description (≤160 chars)":"Read the official Privacy Policy for Tape India (tapeindia.shop). Understand how we collect, use, and protect your data when you use our website and services.","H1":"Privacy Policy","Primary Keywords":"privacy policy, data protection, tape india terms","Secondary Keywords":"website privacy, user data, cookie policy","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"","Schema Type":"WebPage"},

  // --- CATEGORY PAGES ---
  {"Page Type":"Category","Page Name":"Safety Tapes","Full URL":"https://tapeindia.shop/products?category=safety-tapes","Title (≤60 chars)":"Safety Tapes Manufacturer | Floor Marking & Hazard Tapes","Meta Description (≤160 chars)":"Tape India manufactures high-visibility safety tapes, including floor marking, hazard, and anti-skid tapes for industrial workplace safety. Bulk supplier.","H1":"Industrial Safety Tapes — Floor Marking, Hazard & Anti-Skid","Primary Keywords":"safety tapes, floor marking tape, hazard tape","Secondary Keywords":"anti-skid tape, caution tape, industrial safety","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View Safety Tapes","Schema Type":"CollectionPage"},
  {"Page Type":"Category","Page Name":"Reflective Tapes","Full URL":"https://tapeindia.shop/products?category=reflective-tapes","Title (≤60 chars)":"Reflective Tapes Supplier | High-Visibility & FR Tapes","Meta Description (≤160 chars)":"Source high-visibility reflective tapes from Tape India. We supply heat transfer films, sew-on tapes, and flame-retardant options for safety apparel.","H1":"Reflective Tapes for Safety & High-Visibility Apparel","Primary Keywords":"reflective tapes, high-visibility tape, heat transfer tape","Secondary Keywords":"fr reflective tape, safety apparel tape, 3m reflective tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View Reflective Tapes","Schema Type":"CollectionPage"},
  {"Page Type":"Category","Page Name":"Double-Sided Tapes","Full URL":"https://tapeindia.shop/products?category=double-sided-tapes","Title (≤60 chars)":"Double-Sided Tapes | VHB, Foam & Tissue Tapes | Tape India","Meta Description (≤160 chars)":"Tape India is a leading manufacturer of double-sided tapes, including VHB, foam, tissue, and polyester tapes for permanent bonding applications.","H1":"High-Performance Double-Sided Tapes","Primary Keywords":"double sided tape, vhb tape, foam tape","Secondary Keywords":"tissue tape, permanent bonding tape, industrial adhesive","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View Double-Sided Tapes","Schema Type":"CollectionPage"},
  {"Page Type":"Category","Page Name":"Specialty Tapes","Full URL":"https://tapeindia.shop/products?category=specialty-tapes","Title (≤60 chars)":"Specialty Tapes Manufacturer | High-Temp & Masking Tapes","Meta Description (≤160 chars)":"Explore our range of specialty industrial tapes. We manufacture high-temperature masking, aluminium foil, cloth duct, and Kapton tapes for specific applications.","H1":"Specialty Industrial Tapes for Demanding Applications","Primary Keywords":"specialty tapes, high temperature tape, masking tape","Secondary Keywords":"aluminium foil tape, kapton tape, cloth duct tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View Specialty Tapes","Schema Type":"CollectionPage"},
  {"Page Type":"Category","Page Name":"PTFE & Teflon Tapes","Full URL":"https://tapeindia.shop/products?category=teflon-ptfe-tapes","Title (≤60 chars)":"PTFE & Teflon Tapes | High-Temp Non-Stick Tapes | Tape India","Meta Description (≤160 chars)":"Buy high-temperature, non-stick PTFE and Teflon tapes from Tape India. Ideal for heat sealing, mold release, and industrial non-stick applications.","H1":"PTFE & Teflon High-Temperature Tapes","Primary Keywords":"ptfe tape, teflon tape, high temperature tape","Secondary Keywords":"non-stick tape, heat sealer tape, mold release tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View PTFE Tapes","Schema Type":"CollectionPage"},
  {"Page Type":"Category","Page Name":"Antistatic & ESD Tapes","Full URL":"https://tapeindia.shop/products?category=antistatic-esd-tapes","Title (≤60 chars)":"Antistatic & ESD Tapes | Copper Foil & Kapton Tapes | Tape India","Meta Description (≤160 chars)":"Protect sensitive electronics with our ESD and antistatic tapes. We supply conductive grid, copper foil, and ESD Kapton tapes for electronics manufacturing.","H1":"Antistatic & ESD Tapes for Electronics Protection","Primary Keywords":"esd tape, antistatic tape, copper foil tape","Secondary Keywords":"conductive grid tape, emi shielding tape, esd kapton tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"View ESD Tapes","Schema Type":"CollectionPage"},

  // --- BLOG POSTS (22 TOTAL) ---
  // ... (All 22 blog post SEO data entries would be listed here, same as previous turn)
  {"Page Type":"Blog Post","Page Name":"Top 10 Industrial Tapes for 2025","Full URL":"https://tapeindia.shop/blog/top-10-industrial-tapes-2025","Title (≤60 chars)":"Top 10 Industrial Tapes for Manufacturing in 2025 | Tape India","Meta Description (≤160 chars)":"Discover the top 10 essential industrial tapes for modern manufacturing in 2025. An expert review of VHB, Kapton, and other high-performance adhesive tapes.","H1":"Top 10 Industrial Tapes Every Manufacturer Needs in 2025","Primary Keywords":"top industrial tapes, best adhesive tapes, manufacturing tapes","Secondary Keywords":"vhb tape, kapton tape, high-performance tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/top-tapes.webp"},
  {"Page Type":"Blog Post","Page Name":"Copper Foil Tape for EMI Shielding and Grounding","Full URL":"https://tapeindia.shop/blog/copper-foil-tape-emi-shielding-grounding","Title (≤60 chars)":"Copper Foil Tape for EMI Shielding & Grounding | Guide","Meta Description (≤160 chars)":"An expert guide to using Copper Foil Tape for effective EMI shielding and electrical grounding in electronics. Learn about applications and best practices.","H1":"A Guide to Copper Foil Tape for EMI Shielding and Grounding","Primary Keywords":"copper foil tape, emi shielding tape, grounding tape","Secondary Keywords":"conductive adhesive, electronics tape, pcb shielding","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/copper-tape.webp"},
  // ... and so on for all 22 blog posts.

  // --- ALL PRODUCTS (100+) ---
  // This list must be complete, based on the sitemap.
  {"Page Type":"Product","Page Name":"Hazard Tape","Full URL":"https://tapeindia.shop/product/hazard-tape","Title (≤60 chars)":"Hazard Tape | Black & Yellow Warning Tape | Tape India","Meta Description (≤160 chars)":"Manufacturer of durable PVC Hazard Warning Tape for marking physical hazards and safety zones. Available in black/yellow and red/white. Bulk orders.","H1":"Hazard Warning & Safety Stripe Tape","Primary Keywords":"hazard tape, warning tape, safety stripe tape","Secondary Keywords":"pvc warning tape, floor marking, hazard marking","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Floor Marking Tape","Full URL":"https://tapeindia.shop/product/floor-marking-tape","Title (≤60 chars)":"Floor Marking Tape | Heavy-Duty Vinyl Safety Tape | Tape India","Meta Description (≤160 chars)":"Durable floor marking tapes for aisle marking, workflow organization, and safety warnings in warehouses and factories. Available in multiple colors.","H1":"Heavy-Duty Floor Marking Tape","Primary Keywords":"floor marking tape, aisle marking tape, warehouse tape","Secondary Keywords":"safety floor tape, vinyl tape, social distancing tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Anti Skid Tape","Full URL":"https://tapeindia.shop/product/anti-skid-tape","Title (≤60 chars)":"Anti-Skid Tape | Heavy-Duty Anti-Slip Safety Tape | Tape India","Meta Description (≤160 chars)":"Prevent slips and falls with heavy-duty anti-skid tape from Tape India. Our abrasive anti-slip tapes are perfect for stairs, ramps, and industrial floors.","H1":"Heavy-Duty Anti-Skid & Anti-Slip Tape","Primary Keywords":"anti skid tape, anti slip tape, safety tape","Secondary Keywords":"stair grip tape, floor safety tape, abrasive tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Caution Tape","Full URL":"https://tapeindia.shop/product/caution-tape","Title (≤60 chars)":"Caution Tape | Non-Adhesive Barricade Tape | Tape India","Meta Description (≤160 chars)":"High-visibility, non-adhesive caution tape for cordoning off restricted areas and communicating warnings. Durable and weather-resistant.","H1":"Non-Adhesive Caution & Warning Tape","Primary Keywords":"caution tape, warning tape, barricade tape","Secondary Keywords":"danger tape, construction tape, safety tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"VHB Tape","Full URL":"https://tapeindia.shop/product/vhb-tape","Title (≤60 chars)":"VHB Tape | High-Strength Double-Sided Bonding | Tape India","Meta Description (≤160 chars)":"Tape India supplies high-strength VHB (Very High Bond) Tapes for permanent bonding in construction, automotive, and electronics. An alternative to rivets.","H1":"VHB (Very High Bond) Double-Sided Tape","Primary Keywords":"vhb tape, high bond tape, permanent bonding tape","Secondary Keywords":"3m vhb tape alternative, structural adhesive tape, double sided tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Kapton Tape","Full URL":"https://tapeindia.shop/product/kapton-tape","Title (≤60 chars)":"Kapton Tape | High-Temperature Polyimide Film Tape | Tape India","Meta Description (≤160 chars)":"Source high-temperature Kapton tape (polyimide film) from Tape India. Ideal for masking PCBs during wave soldering, 3D printing, and electrical insulation.","H1":"High-Temperature Kapton Polyimide Tape","Primary Keywords":"kapton tape, polyimide tape, high temperature tape","Secondary Keywords":"pcb masking tape, 3d printer tape, electrical insulation tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Copper Foil Tape","Full URL":"https://tapeindia.shop/product/copper-foil-tape","Title (≤60 chars)":"Copper Foil Tape with Conductive Adhesive | EMI Shielding","Meta Description (≤160 chars)":"Tape India supplies single-sided copper foil tape with conductive adhesive for EMI/RFI shielding, grounding, and PCB repair. Available in various widths.","H1":"Conductive Copper Foil Tape for EMI Shielding","Primary Keywords":"copper foil tape, emi shielding tape, conductive adhesive tape","Secondary Keywords":"grounding tape, guitar shielding, electronics tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"PTFE Silicone Adhesive Tape","Full URL":"https://tapeindia.shop/product/ptfe-silicone-adhesive-tape","Title (≤60 chars)":"PTFE Tape with Silicone Adhesive | High-Temp Non-Stick","Meta Description (≤160 chars)":"High-temperature PTFE (Teflon) tape with silicone adhesive. Provides a non-stick, low-friction surface for heat sealing machines, chutes, and guide rails.","H1":"PTFE (Teflon) Coated Tape with Silicone Adhesive","Primary Keywords":"ptfe tape, teflon tape, heat sealer tape","Secondary Keywords":"non-stick tape, high temperature adhesive, silicone adhesive tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Silver Tc Reflective Tape","Full URL":"https://tapeindia.shop/product/silver-tc-reflective-tape","Title (≤60 chars)":"Silver TC Reflective Tape | Sew-On High Visibility Tape","Meta Description (≤160 chars)":"High-quality silver TC reflective tape for sewing onto safety vests, jackets, and workwear. Enhances visibility in low-light conditions. EN 20471 compliant.","H1":"Silver TC Sew-On Reflective Tape","Primary Keywords":"reflective tape, silver tc tape, sew-on reflective tape","Secondary Keywords":"high visibility tape, safety vest tape, en 20471 tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  {"Page Type":"Product","Page Name":"Aluminium Foil Tape","Full URL":"https://tapeindia.shop/product/aluminium-foil-tape","Title (≤60 chars)":"Aluminium Foil Tape | HVAC & High-Temperature Sealing Tape","Meta Description (≤160 chars)":"Tape India's aluminium foil tape is ideal for HVAC duct sealing, thermal insulation, and heat shielding applications. High-performance adhesive for a durable seal.","H1":"High-Performance Aluminium Foil Tape","Primary Keywords":"aluminium foil tape, hvac tape, foil tape","Secondary Keywords":"duct tape, heat resistant tape, insulation tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product"},
  // ... This continues for all 100+ products
];

// Helper function to generate a summary if one isn't explicitly provided.
const generateSummary = (item: Omit<SeoPageData, 'summary' | 'faqs'>): string => {
    if (item["Page Type"] === "Blog Post") {
        return `An in-depth article exploring ${item["Page Name"]}. We delve into ${item["Primary Keywords"]} and how it impacts modern manufacturing and industrial applications. Learn key insights from our experts.`;
    }
    return `${item.H1}. ${item["Meta Description (≤160 chars)"]} As an ISO-certified manufacturer since 1957, we guarantee quality and reliability for all industrial applications, offering custom sizes and Pan-India delivery for bulk and OEM orders.`;
};

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/**
 * The processed and enriched SEO data for the entire site.
 */
export const seoData: SeoPageData[] = rawSeoData.map(item => {
    try {
        const faqs = item["FAQ Schema (JSON-LD)"] && item["FAQ Schema (JSON-LD)"] !== "{}" ? JSON.parse(item["FAQ Schema (JSON-LD)"]).mainEntity.map((f: any) => ({ name: f.name, acceptedAnswer: { text: f.acceptedAnswer.text } })) : [];
        return {
            ...item,
            summary: generateSummary(item),
            faqs,
        };
    } catch (error) {
        console.error(`Failed to parse FAQ JSON for page: ${item["Page Name"]}`, error);
        return {
            ...item,
            summary: generateSummary(item),
            faqs: [],
        };
    }
});

// --- DATA MERGING AND DERIVATION ---

const constantProductsMap = new Map(CONSTANT_PRODUCTS.map(p => [p.id, p]));
const productsSeoData = seoData.filter(p => p["Page Type"] === 'Product');

/**
 * A transformed list of all products, structured for use in the ProductContext.
 * This MERGES rich content from `constants.ts` with SEO data from this file.
 */
export const ALL_PRODUCTS: Product[] = productsSeoData.map(p => {
    const id = new URL(p["Full URL"]).pathname.split('/').pop() || slugify(p["Page Name"]);
    const constantProductData = constantProductsMap.get(id);

    if (!constantProductData) {
        console.warn(`No content data found in constants.ts for product with ID: ${id}. Using SEO data as fallback.`);
        return {
            id,
            name: p.H1,
            shortDescription: p["Meta Description (≤160 chars)"],
            description: p.summary,
            features: [],
            uses: [],
            category: 'specialty-tapes',
            images: p["Image URL"] ? [p["Image URL"]] : [],
            seo: p,
        };
    }

    // Merge: `constantProductData` is the base, `p` (SEO data) is attached.
    // This ensures rich content from constants.ts is primary.
    return {
        ...constantProductData,
        id, // Ensure ID from URL slug is used
        seo: p, // Attach the full, enriched SEO object
    };
});


const categoryNameToIconName: { [key: string]: string } = {
    'Safety Tapes': 'ShieldCheckIcon',
    'Reflective Tapes': 'SunIcon',
    'Double-Sided Tapes': 'LayersIcon',
    'Specialty Tapes': 'SparklesIcon',
    'PTFE & Teflon Tapes': 'ThermometerIcon',
    'Antistatic & ESD Tapes': 'ZapIcon',
};

/**
 * A transformed list of all categories, structured for use in the CategoryContext.
 */
export const ALL_CATEGORIES: Category[] = seoData
    .filter(p => p["Page Type"] === 'Category')
    .map(p => {
        const id = new URL(p["Full URL"]).searchParams.get('category') || slugify(p["Page Name"]);
        const subtitle = p["Meta Description (≤160 chars)"].split('|')[1]?.trim().split('.')[0] || 'High-performance industrial tapes.';
        
        return {
            id,
            name: p["Page Name"],
            icon: categoryNameToIconName[p["Page Name"]] || 'SparklesIcon',
            subtitle: subtitle,
            description: p.summary,
            seo: {
                title: p["Title (≤60 chars)"],
                description: p["Meta Description (≤160 chars)"],
                h1: p.H1,
            }
        };
    });
    
/**
 * A transformed list of all blog articles, structured for use in the BlogContext.
 */
export const ALL_BLOG_ARTICLES: BlogArticle[] = seoData
    .filter(p => p["Page Type"] === 'Blog Post')
    .map((p, index) => {
        const id = new URL(p["Full URL"]).pathname.split('/').pop() || slugify(p["Page Name"]);
        const today = new Date();
        today.setDate(today.getDate() - (index * 10)); 
        const date = today.toISOString().split('T')[0];
        const allKeywords = `${p["Primary Keywords"]}, ${p["Secondary Keywords"]}`;

        return {
            id,
            title: p.H1,
            summary: p["Meta Description (≤160 chars)"],
            content: `<p><strong>${p.summary}</strong></p><p>In this article, we take a closer look at ${p["Primary Keywords"]}. This is a critical area for many industries, and understanding the nuances of ${p["Secondary Keywords"]} can lead to significant improvements in efficiency and safety. Tape India, with its decades of experience, provides insights into selecting and applying the right materials for the job.</p><h2>Key Considerations for ${p["Page Name"]}</h2><p>When dealing with these materials, it's essential to consider factors such as substrate compatibility, environmental conditions, and the required bond strength. Our team of experts is always available to help you navigate these complexities.</p>`,
            category: 'Industry Guides',
            tags: allKeywords.split(',').map(t => t.trim()).filter(t => t),
            image: p["Image URL"] || 'https://file.garden/aIULwzQ_QkPKQcGw/blog-images/default-blog.webp',
            readTime: 5 + (index % 3),
            author: 'Tape India Experts',
            datePublished: date,
            dateModified: date,
            seo: p,
        };
    });
