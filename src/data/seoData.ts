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
    "H2_1": "Your Adhesive Solutions Partner Since 1957",
    "H2_2": "Why Partner with Tape India?",
    "H2_3": "Our Popular Industrial Tapes",
    "H2_4": "Solutions For Every Industry",
    "H2_5": "Trusted by Industry Leaders",
    "H3": "Decades of Experience • Unmatched Quality • Over 200+ Solutions",
    "H4": "Explore Our Product Categories",
    "H5": "Need Industrial Tapes in Bulk?",
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
    "H3": "Our Mission & Vision",
    "H4": "Partner with an Industry Leader",
    "H5": "Commitment to Excellence",
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
    "H1": "Contact Us",
    "H2_1": "Get in Touch",
    "H2_2": "Our Location",
    "H3": "Business Hours",
    "H4": "Need a Quote?",
    "H5": "Connect With Us",
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
    "H2_1": "Your Contact Information",
    "H2_2": "Your Product Requirements",
    "H3": "Tell us about your project",
    "H4": "Get a competitive B2B quote",
    "H5": "Our experts will get back to you",
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
    "H2_1": "Information We Collect",
    "H2_2": "How We Use Your Information",
    "H3": "Tracking Technologies and Cookies",
    "H4": "Changes to This Privacy Policy",
    "H5": "Contact Us",
    "Primary Keywords": "privacy policy tape india, data protection, website privacy",
    "Secondary Keywords": "cookie policy, data usage, gdpr india",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What data do you collect?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We collect personal data you voluntarily provide through contact forms (name, email, phone) and anonymous usage data (IP address, browser type) via cookies for analytics and advertising purposes.\"}},{\"@type\":\"Question\",\"name\":\"How is my data used?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Your data is used to respond to your inquiries, improve our website experience, and deliver relevant advertising. We do not sell your personal information to third parties.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"name\":\"Privacy Policy | Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop/privacy-policy\"}]}",
    "CTA": "Contact Us",
    "Schema Type": "WebPage"
  },
  ...[{"Page Type":"Industries List","Page Name":"Industries List","Full URL":"https://tapeindia.shop/industries","Title (≤60 chars)":"Industrial Tape Solutions by Industry | Tape India","Meta Description (≤160 chars)":"Tape India delivers specialized adhesive tape solutions for demanding industries like packaging, HVAC, electronics, print, and more. Find products engineered for your application.","H1":"Tapes Engineered for Your Industry","H2_1":"Packaging Industry Solutions","H2_2":"HVAC Tapes and Adhesives","H2_3":"Electronics & High-Tech Tapes","H2_4":"Print, Labels & Signage Tapes","H2_5":"Reflective & Safety Solutions","H3":"PTFE & Teflon High-Performance Tapes","H4":"Custom Solutions for Your Sector","H5":"Speak to an Industry Expert","Primary Keywords":"industrial tape applications, tapes by industry, manufacturing tape solutions","Secondary Keywords":"packaging tape, hvac tape, electronics tape, safety tape, b2b tape supplier","FAQ Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What industries does Tape India serve?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We provide specialized adhesive solutions for a wide range of sectors, including Packaging, HVAC, Electronics, Print & Signage, Reflective & Safety, and applications requiring PTFE & Teflon tapes.\"}},{\"@type\":\"Question\",\"name\":\"Can you recommend a tape for my specific industry application?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Our team of experts can help you select the ideal tape based on your industry, substrates, environmental conditions, and performance requirements. Contact us for a consultation.\"}}]}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}","Combined Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"CollectionPage\",\"name\":\"Industrial Tape Solutions by Industry | Tape India\",\"url\":\"https://tapeindia.shop/industries\"},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What industries does Tape India serve?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We provide specialized adhesive solutions for a wide range of sectors, including Packaging, HVAC, Electronics, Print & Signage, Reflective & Safety, and applications requiring PTFE & Teflon tapes.\"}}]}]}","CTA":"Find Your Industry Solution","Schema Type":"CollectionPage + FAQ"},
{"Page Type":"All Products List","Page Name":"All Products List","Full URL":"https://tapeindia.shop/products","Title (≤60 chars)":"All Industrial Tapes | Manufacturer & Wholesaler | Tape India","Meta Description (≤160 chars)":"Browse our complete range of over 200 industrial adhesive tapes. As a leading manufacturer in India, we offer solutions for every industry. Bulk orders welcome.","H1":"All Industrial Tapes","H2_1":"Filter by Category","H2_2":"Filter by Industry","H3":"Find Your Adhesive Solution","H4":"Can't Find What You're Looking For?","H5":"Request a Custom Quote","Primary Keywords":"all industrial tapes, tape products list, adhesive tape catalog","Secondary Keywords":"tape manufacturer india, b2b tape supplier, wholesale tape, industrial tape types","FAQ Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What types of industrial tapes do you manufacture?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We manufacture and supply over 200 types of industrial tapes, including Safety Tapes, Reflective Tapes, Double-Sided Tapes, Specialty Tapes, PTFE/Teflon Tapes, and Antistatic/ESD Tapes.\"}},{\"@type\":\"Question\",\"name\":\"How can I find the right tape for my application?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"You can use the filters on our products page to sort by category or industry. For expert assistance, contact our technical team with your application details, and we will recommend the best solution.\"}}]}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}","Combined Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"CollectionPage\",\"name\":\"All Industrial Tapes | Manufacturer & Wholesaler | Tape India\",\"url\":\"https://tapeindia.shop/products\"},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What types of industrial tapes do you manufacture?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We manufacture and supply over 200 types of industrial tapes, including Safety Tapes, Reflective Tapes, Double-Sided Tapes, Specialty Tapes, PTFE/Teflon Tapes, and Antistatic/ESD Tapes.\"}}]}]}","CTA":"View All Products","Schema Type":"CollectionPage + FAQ"},
{"Page Type":"Blog","Page Name":"Blog","Full URL":"https://tapeindia.shop/blog","Title (≤60 chars)":"Industrial Insights – Expert Articles by Tape India","Meta Description (≤160 chars)":"Explore expert articles on industrial tapes and materials from Tape India. Learn about EMI shielding, thermal management, contamination control, and safety solutions.","H1":"Industrial Insights","H2_1":"Featured Articles","H2_2":"Latest Posts","H3":"Explore by Topic","H4":"Subscribe for Updates","H5":"From the Tape India Experts","Primary Keywords":"industrial tape blog, adhesive technology articles, tape application guides","Secondary Keywords":"tape manufacturing insights, material science blog, b2b industrial content","FAQ Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What topics does the Tape India blog cover?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our blog features expert articles on adhesive technology, material science, industrial tape applications, buyer's guides, and best practices for industries like electronics, HVAC, and packaging.\"}},{\"@type\":\"Question\",\"name\":\"Who writes the articles on the Industrial Insights blog?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our content is written by in-house experts with decades of experience in the industrial tape and adhesive manufacturing industry, ensuring you receive practical and accurate information.\"}}]}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"}","Combined Schema (JSON-LD)":"{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Blog\",\"name\":\"Industrial Insights – Expert Articles by Tape India\",\"url\":\"https://tapeindia.shop/blog\"},{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What topics does the Tape India blog cover?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our blog features expert articles on adhesive technology, material science, industrial tape applications, buyer's guides, and best practices for industries like electronics, HVAC, and packaging.\"}}]}]}","CTA":"Read the Latest Articles","Schema Type":"Blog + FAQ"}]
];

// Helper function to generate a summary if one isn't explicitly provided.
const generateSummary = (item: Omit<SeoPageData, 'summary' | 'faqs'>): string => {
    // A specific summary was requested for the homepage.
    if (item["Page Name"] === "Home") {
        return "For over 65 years, Tape India has been the trusted B2B supplier of high-performance adhesive tapes. From heavy-duty packaging tapes to precision electronics solutions, we deliver quality and reliability to industries across India. As a Chennai-based manufacturer, we supply industrial and speciality tapes nationwide, handling bulk orders and fast delivery to all major cities.";
    }
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
