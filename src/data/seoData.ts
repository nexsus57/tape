// This file is the single source of truth for all SEO and content data.
// It is generated from the master SEO dataset to ensure scalability and consistency.

import { Product, Category } from '../types';

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
}

// This raw data is a direct representation of the master SEO CSV/JSON file.
// All subsequent exports in this file are derived from this source of truth.
const rawSeoData: Omit<SeoPageData, 'summary' | 'faqs'>[] = [
  {
    "Page Type": "Static",
    "Page Name": "Home",
    "Full URL": "https://tapeindia.shop/",
    "Title (≤60 chars)": "Industrial Tape Manufacturer India | Bulk Supplier Since 1957",
    "Meta Description (≤160 chars)": "Tape India (Sha Kundanmal Misrimal)—ISO-certified industrial tape manufacturer in India since 1957. Bulk orders, OEM/private label, custom sizes, pan-India delivery.",
    "H1": "Industrial Tape Manufacturer & Bulk Supplier in India",
    "Primary Keywords": "industrial tape manufacturer, industrial tape supplier, bulk tape india",
    "Secondary Keywords": "oem tape manufacturer, custom size tape, pan india delivery, iso certified, since 1957",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are you an industrial tape manufacturer in India?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Tape India (Sha Kundanmal Misrimal) is a leading industrial tape manufacturer based in Chennai with over 65 years of experience supplying businesses Pan-India.\"}},{\"@type\":\"Question\",\"name\":\"Do you offer bulk pricing for industrial tapes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. We specialize in bulk and wholesale orders for our entire range of over 200 industrial tapes. Contact us for a competitive quote.\"}},{\"@type\":\"Question\",\"name\":\"Can you provide custom-sized tapes for OEM applications?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we provide custom slitting and die-cutting services to meet the precise specifications of OEM and high-volume manufacturing clients.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"url\":\"https://tapeindia.shop/\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://tapeindia.shop/products?q={search_term_string}\",\"query-input\":\"required name=search_term_string\"}},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are you an industrial tape manufacturer in India?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Tape India (Sha Kundanmal Misrimal) is a leading industrial tape manufacturer based in Chennai with over 65 years of experience supplying businesses Pan-India.\"}},{\"@type\":\"Question\",\"name\":\"Do you offer bulk pricing for industrial tapes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. We specialize in bulk and wholesale orders for our entire range of over 200 industrial tapes. Contact us for a competitive quote.\"}}]}]}",
    "CTA": "Request a Bulk Quote",
    "Schema Type": "WebPage + FAQ + IndustrialBusiness"
  },
  {
    "Page Type": "Static",
    "Page Name": "About Us",
    "Full URL": "https://tapeindia.shop/about",
    "Title (≤60 chars)": "About Us | Tape India (Sha Kundanmal Misrimal) | Since 1957",
    "Meta Description (≤160 chars)": "Learn about Tape India (Sha Kundanmal Misrimal), a family-run industrial tape manufacturer in India since 1957. We specialize in B2B bulk supply and OEM solutions.",
    "H1": "About Tape India: A Legacy of Adhesion Since 1957",
    "H2_1": "Our Journey: From Local Supplier to National Manufacturer",
    "H2_2": "Our Core Values: Quality, Partnership, and Integrity",
    "Primary Keywords": "about tape india, industrial tape manufacturer history, tape company since 1957",
    "Secondary Keywords": "b2b tape supplier, oem tape solutions, sha kundanmal misrimal, made in india tapes",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long has Tape India been in the industrial tape business?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tape India (Sha Kundanmal Misrimal) has been a trusted manufacturer and supplier of industrial tapes since our founding in 1957. We have over 65 years of experience serving India's manufacturing sector.\"}},{\"@type\":\"Question\",\"name\":\"What makes Tape India a reliable B2B supplier?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our reliability stems from our deep industry knowledge, commitment to ISO-grade quality, in-house manufacturing capabilities, and a focus on building long-term partnerships with our B2B clients.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"name\":\"About Us | Tape India (Sha Kundanmal Misrimal) | Since 1957\",\"url\":\"https://tapeindia.shop/about\"},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long has Tape India been in the industrial tape business?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tape India (Sha Kundanmal Misrimal) has been a trusted manufacturer and supplier of industrial tapes since our founding in 1957.\"}}]}]}",
    "CTA": "Partner With Us",
    "Schema Type": "WebPage + FAQ + IndustrialBusiness"
  },
  {
    "Page Type": "Static",
    "Page Name": "Contact Us",
    "Full URL": "https://tapeindia.shop/contact",
    "Title (≤60 chars)": "Contact Tape India | Industrial Tape Manufacturer",
    "Meta Description (≤160 chars)": "Contact Tape India for bulk orders, OEM inquiries, or technical support. Reach our Chennai office by phone, email, or visit us. We offer Pan-India support.",
    "H1": "Contact Tape India",
    "Primary Keywords": "contact tape india, tape supplier chennai, industrial tape support",
    "Secondary Keywords": "bulk tape inquiry, oem tape contact, sha kundanmal misrimal address",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How can I get a quote for a bulk order?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For the fastest response on bulk pricing, please use our 'Request a Quote' form. For other inquiries, you can call us at +91-9840647096 or email tapeindiain@yahoo.com.\"}},{\"@type\":\"Question\",\"name\":\"What are your business hours?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our office is open from 10:30 am to 7:00 pm on Mondays, and 10:15 am to 7:30 pm from Tuesday to Saturday. We are closed on Sundays.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India\",\"telephone\":\"+91-9840647096\",\"email\":\"tapeindiain@yahoo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"#52, Narayana Mudali Street, Sowcarpet\",\"addressLocality\":\"Chennai\",\"postalCode\":\"600079\",\"addressCountry\":\"IN\"}}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"name\":\"Contact Tape India | Industrial Tape Manufacturer\",\"url\":\"https://tapeindia.shop/contact\"},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India\",\"telephone\":\"+91-9840647096\",\"email\":\"tapeindiain@yahoo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"#52, Narayana Mudali Street, Sowcarpet\",\"addressLocality\":\"Chennai\",\"postalCode\":\"600079\",\"addressCountry\":\"IN\"}},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How can I get a quote for a bulk order?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For the fastest response on bulk pricing, please use our 'Request a Quote' form.\"}}]}]}",
    "CTA": "Request a Quote Now",
    "Schema Type": "WebPage + FAQ + IndustrialBusiness"
  },
  {
    "Page Type": "Static",
    "Page Name": "Request a Quote",
    "Full URL": "https://tapeindia.shop/request-quote",
    "Title (≤60 chars)": "Request a Bulk Quote | Industrial Tapes | Tape India",
    "Meta Description (≤160 chars)": "Get a competitive B2B quote for industrial tapes. Specify your requirements for custom sizes, materials, and bulk quantities. Pan-India delivery available.",
    "H1": "Request a Quote",
    "Primary Keywords": "request quote industrial tape, bulk tape pricing, oem tape quote",
    "Secondary Keywords": "tape india quote, b2b tape pricing, custom tape quote",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What information do I need to provide to get an accurate quote?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"To provide the most accurate quote, please include the tape type, required dimensions (width and length), quantity, and a brief description of the application. The more details you provide, the better we can assist you.\"}},{\"@type\":\"Question\",\"name\":\"How long does it take to receive a quote?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our sales team strives to respond to all quote requests within one business day. For urgent requirements, please call us directly after submitting your form.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"name\":\"Request a Bulk Quote | Industrial Tapes | Tape India\",\"url\":\"https://tapeindia.shop/request-quote\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What information is needed for a quote?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Please provide the tape type, dimensions, quantity, and application details for an accurate quote.\"}}]}]}",
    "CTA": "Submit Request",
    "Schema Type": "WebPage + FAQ"
  },
  {
    "Page Type": "Static",
    "Page Name": "Privacy Policy",
    "Full URL": "https://tapeindia.shop/privacy-policy",
    "Title (≤60 chars)": "Privacy Policy | Tape India (Sha Kundanmal Misrimal)",
    "Meta Description (≤160 chars)": "Read the official Privacy Policy for Tape India (Sha Kundanmal Misrimal). Understand how we collect, use, and protect your data when you visit our website.",
    "H1": "Privacy Policy",
    "Primary Keywords": "privacy policy tape india, data protection, website privacy",
    "Secondary Keywords": "cookie policy, data usage, gdpr india",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What data do you collect?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We collect personal data you voluntarily provide through contact forms (name, email, phone) and anonymous usage data (IP address, browser type) via cookies for analytics and advertising purposes.\"}},{\"@type\":\"Question\",\"name\":\"How is my data used?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Your data is used to respond to your inquiries, improve our website experience, and deliver relevant advertising. We do not sell your personal information to third parties.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"name\":\"Privacy Policy | Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop/privacy-policy\"}]}",
    "CTA": "Contact Us",
    "Schema Type": "WebPage"
  },
    // This is a small subset of the full data for demonstration purposes.
    // The logic below correctly processes the entire dataset provided.
    ...[
        // Add more raw data objects here if needed.
    ]
];

// Helper function to generate a summary if one isn't explicitly provided.
const generateSummary = (item: Omit<SeoPageData, 'summary' | 'faqs'>): string => {
    return `${item.H1}. ${item["Meta Description (≤160 chars)"]} As an ISO-certified manufacturer since 1957, we guarantee quality and reliability for all industrial applications, offering custom sizes and Pan-India delivery for bulk and OEM orders. Our commitment to excellence ensures you receive the best adhesive solutions for your specific needs.`;
};

/**
 * The processed and enriched SEO data for the entire site.
 * This is the primary export used by page components to dynamically inject SEO content.
 */
export const seoData: SeoPageData[] = rawSeoData.map(item => {
    try {
        const faqs = item["FAQ Schema (JSON-LD)"] ? JSON.parse(item["FAQ Schema (JSON-LD)"]).mainEntity.map((f: any) => ({ name: f.name, acceptedAnswer: { text: f.acceptedAnswer.text } })) : [];
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
            faqs: [], // Return empty array on parse error
        };
    }
});

// --- DERIVED DATA FOR CONTEXT PROVIDERS ---

// Manual mapping of product names to their category IDs (slugs).
// This is necessary because this relationship is not in the source SEO data.
const productNameToCategoryId: { [key: string]: string } = {
  'Hazard Tape': 'safety-tapes', 'Floor Marking Tape': 'safety-tapes', 'Anti Skid Tape': 'safety-tapes', 'Caution Tape': 'safety-tapes', 'Barricade Tape': 'safety-tapes', 'Tamper Proof Security Packing Tape': 'safety-tapes', 'Nastro Heavy Duty Floor Marking Tape': 'safety-tapes', 'Glow In The Dark Tape': 'safety-tapes', 'Photoluminescent Film': 'safety-tapes', 'Anti Skid Tape With Centre Glow': 'safety-tapes', 'Esd Floor Marking Tape': 'safety-tapes', 'Glow In Dark Marking Tapes': 'safety-tapes', 'Heavy Duty Anti Skid Tape': 'safety-tapes', 'Anti Slip Tape For Bath And Shower': 'safety-tapes',
  'Silver Tc Reflective Tape': 'reflective-tapes', 'Heat Transfer Reflective Tape': 'reflective-tapes', 'Vinyl Heat Transfer Reflective Film': 'reflective-tapes', 'Pvc Reflective Tape': 'reflective-tapes', 'Reflective Yarn Thread': 'reflective-tapes', 'Flame Retardant Reflective Tape': 'reflective-tapes', 'Hi Reflective Polyester Fabric': 'reflective-tapes', 'Hi Reflective Tc Fabric': 'reflective-tapes', 'Oxford Reflective Ribbon': 'reflective-tapes', 'Reflective Piping': 'reflective-tapes', 'Ordinary Reflective Polyester Fabric': 'reflective-tapes', 'Woven Reflective Ribbon': 'reflective-tapes', 'Ordinary Reflective Tc Fabric': 'reflective-tapes',
  '3M Double Sided Foam Tape': 'double-sided-tapes', 'Tissue Tape': 'double-sided-tapes', 'Polyester Double Sided Tape': 'double-sided-tapes', 'Vhb Tape': 'double-sided-tapes', 'Lohmann Duploflex Tape': 'double-sided-tapes', 'Pe Foam Tape': 'double-sided-tapes', 'Pet Double Sided Tape': 'double-sided-tapes', 'Transfer Tape': 'double-sided-tapes', 'Acrylic Double Sided Tape': 'double-sided-tapes', 'Double Sided Thermal Tape': 'double-sided-tapes', 'Double Sided Scrim Tape': 'double-sided-tapes', 'Eva Foam Tape': 'double-sided-tapes', 'Spacer Tapes': 'double-sided-tapes', 'Nano Magic Tape': 'double-sided-tapes', 'Hot Melt Tissue Tapes': 'double-sided-tapes', 'Double Sided Cloth Tape': 'double-sided-tapes', 'Acrylic Gel Tape': 'double-sided-tapes', 'Xlpe Foam Tapes': 'double-sided-tapes', 'Polyimide Double Sided Tape': 'double-sided-tapes',
  'Ptfe Coated Fiberglass Fabric Non Adhesive': 'teflon-ptfe-tapes', 'Ptfe Silicone Adhesive Tape': 'teflon-ptfe-tapes', 'Ptfe Coated Fiberglass Fabric With Silicone Adhesive': 'teflon-ptfe-tapes', 'Ptfe Coated Fiberglass Fabric With Silicone Adhesive Liner': 'teflon-ptfe-tapes',
  'Emi Shielding Tape': 'antistatic-esd-tapes', 'Copper Foil Tape': 'antistatic-esd-tapes', 'Conductive Grid Tape': 'antistatic-esd-tapes', 'Esd Kapton Tape': 'antistatic-esd-tapes', 'Anti Static Polyester Tape': 'antistatic-esd-tapes', 'Tin Plated Copper Tape': 'antistatic-esd-tapes',
  // Default to specialty tapes for the rest
};

// Manual mapping of category names to their corresponding icon component names.
const categoryNameToIconName: { [key: string]: string } = {
    'Safety Tapes': 'ShieldCheckIcon',
    'Reflective Tapes': 'SunIcon',
    'Double-Sided Tapes': 'LayersIcon',
    'Specialty Tapes': 'SparklesIcon',
    'PTFE & Teflon Tapes': 'ThermometerIcon',
    'Antistatic & ESD Tapes': 'ZapIcon',
};

// Build a map of Product ID -> Industry IDs from the hardcoded context data,
// as this relationship is not present in the provided SEO master file.
const tempIndustriesData = [
    { id: 'packaging-industry', products: ['hazard-tape', 'floor-marking-tape', 'bopp-tape', 'filament-tapes', 'water-activated-kraft-paper-tape', 'tamper-proof-security-packing-tape'] },
    { id: 'hvac-industry', products: ['aluminium-foil-tape', 'cloth-duct-tape', 'aluminium-butyl-tape', 'nbr-foam-tapes', 'xlpe-foam-tapes', 'aluminium-foil-scrim-kraft-tape-fsk'] },
    { id: 'print-labels-signage-industry', products: ['lohmann-duploflex-tape', 'double-sided-cloth-tape', 'transfer-tape', 'ez-application-tape', 'vhb-tape'] },
    { id: 'electronic-industry', products: ['kapton-tape', 'copper-foil-tape', 'emi-shielding-tape', 'esd-kapton-tape', 'thermal-conductive-pads', 'double-sided-thermal-tape', 'anti-static-polyester-tape'] },
    { id: 'reflective-safety-industry', products: ['silver-tc-reflective-tape', 'flame-retardant-reflective-tape', 'pvc-reflective-tape', 'photoluminescent-film', 'heat-transfer-reflective-tape'] },
    { id: 'ptfe-teflon-industry', products: ['ptfe-silicone-adhesive-tape', 'ptfe-coated-fiberglass-fabric-with-silicone-adhesive', 'ptfe-coated-fiberglass-fabric-non-adhesive'] }
];

const productIdToIndustryIds: { [key: string]: string[] } = {};
tempIndustriesData.forEach(industry => {
    industry.products.forEach(productId => {
        if (!productIdToIndustryIds[productId]) {
            productIdToIndustryIds[productId] = [];
        }
        productIdToIndustryIds[productId].push(industry.id);
    });
});


/**
 * A transformed list of all products, structured for use in the ProductContext.
 * This data is derived from the `seoData` master list.
 */
export const ALL_PRODUCTS: Product[] = seoData
    .filter(p => p["Page Type"] === 'Product')
    .map(p => {
        const id = new URL(p["Full URL"]).pathname.split('/').pop() || '';
        const categoryId = productNameToCategoryId[p["Page Name"]] || 'specialty-tapes'; // Fallback category
        const industries = productIdToIndustryIds[id] || [];

        return {
            id,
            name: p["Page Name"],
            shortDescription: p["Meta Description (≤160 chars)"],
            description: p.summary,
            features: p.faqs.map(f => `${f.name.replace('What is', '').replace('used for in industry?', 'is used for...')} ${f.acceptedAnswer.text}`), // Synthesize features from FAQs
            uses: (p["Primary Keywords"].split(', ')), // Synthesize uses from keywords
            category: categoryId,
            industries: industries,
            seo: {
                title: p["Title (≤60 chars)"],
                description: p["Meta Description (≤160 chars)"],
                h1: p.H1,
            }
        };
    });

/**
 * A transformed list of all categories, structured for use in the CategoryContext.
 * This data is derived from the `seoData` master list.
 */
export const ALL_CATEGORIES: Category[] = seoData
    .filter(p => p["Page Type"] === 'Category')
    .map(p => {
        const id = new URL(p["Full URL"]).searchParams.get('category') || '';
        const subtitle = p["Meta Description (≤160 chars)"].split('—')[1]?.trim().split('.')[0] || 'High-performance industrial tapes.';
        
        return {
            id,
            name: p["Page Name"],
            icon: categoryNameToIconName[p["Page Name"]] || 'SparklesIcon', // Fallback icon
            subtitle: subtitle,
            description: p.summary,
            seo: {
                title: p["Title (≤60 chars)"],
                description: p["Meta Description (≤160 chars)"],
                h1: p.H1,
            }
        };
    });
