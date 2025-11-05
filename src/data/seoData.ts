// This file is the single source of truth for all SEO and content data.
// It is generated from the master SEO dataset to ensure scalability and consistency.

import { Product, Category, BlogArticle } from '../types';

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

// This raw data is a direct representation of the master SEO CSV/JSON file.
// All subsequent exports in this file are derived from this source of truth.
const rawSeoData: Omit<SeoPageData, 'summary' | 'faqs'>[] = [
  // --- STATIC PAGES ---
  {
    "Page Type": "Static", "Page Name": "Home", "Full URL": "https://tapeindia.shop/",
    "Title (≤60 chars)": "Industrial Tape Manufacturer India | Bulk Supplier Since 1957",
    "Meta Description (≤160 chars)": "Tape India (Sha Kundanmal Misrimal)—ISO-certified industrial tape manufacturer in India since 1957. Bulk orders, OEM/private label, custom sizes, pan-India delivery.",
    "H1": "Industrial Tape Manufacturer & Bulk Supplier in India",
    "Primary Keywords": "industrial tape manufacturer, industrial tape supplier, bulk tape india", "Secondary Keywords": "oem tape manufacturer, custom size tape, pan india delivery, iso certified, since 1957",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are you an industrial tape manufacturer in India?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Tape India (Sha Kundanmal Misrimal) is a leading industrial tape manufacturer based in Chennai with over 65 years of experience supplying businesses Pan-India.\"}},{\"@type\":\"Question\",\"name\":\"Do you offer bulk pricing for industrial tapes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. We specialize in bulk and wholesale orders for our entire range of over 200 industrial tapes. Contact us for a competitive quote.\"}}]}",
    "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Bulk Quote", "Schema Type": "WebPage"
  },
  {
    "Page Type": "Static", "Page Name": "About Us", "Full URL": "https://tapeindia.shop/about",
    "Title (≤60 chars)": "About Us | Tape India (Sha Kundanmal Misrimal) | Since 1957",
    "Meta Description (≤160 chars)": "Learn about Tape India (Sha Kundanmal Misrimal), a family-run industrial tape manufacturer in India since 1957. We specialize in B2B bulk supply and OEM solutions.",
    "H1": "About Tape India: A Legacy of Adhesion Since 1957",
    "Primary Keywords": "about tape india, industrial tape manufacturer history, tape company since 1957", "Secondary Keywords": "b2b tape supplier, oem tape solutions, sha kundanmal misrimal",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Partner With Us", "Schema Type": "WebPage"
  },
  // --- CATEGORY PAGES ---
  {
      "Page Type": "Category", "Page Name": "Safety Tapes", "Full URL": "https://tapeindia.shop/products?category=safety-tapes",
      "Title (≤60 chars)": "Safety Tapes Manufacturer | Floor Marking & Hazard Tapes",
      "Meta Description (≤160 chars)": "Tape India manufactures high-visibility safety tapes, including floor marking, hazard, and anti-skid tapes for industrial workplace safety. Bulk supplier.",
      "H1": "Industrial Safety Tapes — Floor Marking, Hazard & Anti-Skid",
      "Primary Keywords": "safety tapes, floor marking tape, hazard tape", "Secondary Keywords": "anti-skid tape, caution tape, industrial safety",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View Safety Tapes", "Schema Type": "CollectionPage"
  },
  {
      "Page Type": "Category", "Page Name": "Reflective Tapes", "Full URL": "https://tapeindia.shop/products?category=reflective-tapes",
      "Title (≤60 chars)": "Reflective Tapes Supplier | High-Visibility & FR Tapes",
      "Meta Description (≤160 chars)": "Source high-visibility reflective tapes from Tape India. We supply heat transfer films, sew-on tapes, and flame-retardant options for safety apparel.",
      "H1": "Reflective Tapes for Safety & High-Visibility Apparel",
      "Primary Keywords": "reflective tapes, high-visibility tape, heat transfer tape", "Secondary Keywords": "fr reflective tape, safety apparel tape, 3m reflective tape",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View Reflective Tapes", "Schema Type": "CollectionPage"
  },
  {
      "Page Type": "Category", "Page Name": "Double-Sided Tapes", "Full URL": "https://tapeindia.shop/products?category=double-sided-tapes",
      "Title (≤60 chars)": "Double-Sided Tapes | VHB, Foam & Tissue Tapes | Tape India",
      "Meta Description (≤160 chars)": "Tape India is a leading manufacturer of double-sided tapes, including VHB, foam, tissue, and polyester tapes for permanent bonding applications.",
      "H1": "High-Performance Double-Sided Tapes",
      "Primary Keywords": "double sided tape, vhb tape, foam tape", "Secondary Keywords": "tissue tape, permanent bonding tape, industrial adhesive",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View Double-Sided Tapes", "Schema Type": "CollectionPage"
  },
  {
      "Page Type": "Category", "Page Name": "Specialty Tapes", "Full URL": "https://tapeindia.shop/products?category=specialty-tapes",
      "Title (≤60 chars)": "Specialty Tapes Manufacturer | High-Temp & Masking Tapes",
      "Meta Description (≤160 chars)": "Explore our range of specialty industrial tapes. We manufacture high-temperature masking, aluminium foil, cloth duct, and Kapton tapes for specific applications.",
      "H1": "Specialty Industrial Tapes for Demanding Applications",
      "Primary Keywords": "specialty tapes, high temperature tape, masking tape", "Secondary Keywords": "aluminium foil tape, kapton tape, cloth duct tape",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View Specialty Tapes", "Schema Type": "CollectionPage"
  },
  {
      "Page Type": "Category", "Page Name": "PTFE & Teflon Tapes", "Full URL": "https://tapeindia.shop/products?category=teflon-ptfe-tapes",
      "Title (≤60 chars)": "PTFE & Teflon Tapes | High-Temp Non-Stick Tapes | Tape India",
      "Meta Description (≤160 chars)": "Buy high-temperature, non-stick PTFE and Teflon tapes from Tape India. Ideal for heat sealing, mold release, and industrial non-stick applications.",
      "H1": "PTFE & Teflon High-Temperature Tapes",
      "Primary Keywords": "ptfe tape, teflon tape, high temperature tape", "Secondary Keywords": "non-stick tape, heat sealer tape, mold release tape",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View PTFE Tapes", "Schema Type": "CollectionPage"
  },
  {
      "Page Type": "Category", "Page Name": "Antistatic & ESD Tapes", "Full URL": "https://tapeindia.shop/products?category=antistatic-esd-tapes",
      "Title (≤60 chars)": "Antistatic & ESD Tapes | Copper Foil & Kapton Tapes | Tape India",
      "Meta Description (≤160 chars)": "Protect sensitive electronics with our ESD and antistatic tapes. We supply conductive grid, copper foil, and ESD Kapton tapes for electronics manufacturing.",
      "H1": "Antistatic & ESD Tapes for Electronics Protection",
      "Primary Keywords": "esd tape, antistatic tape, copper foil tape", "Secondary Keywords": "conductive grid tape, emi shielding tape, esd kapton tape",
      "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "View ESD Tapes", "Schema Type": "CollectionPage"
  },
  
  // --- BLOG POSTS ---
  {
    "Page Type": "Blog Post", "Page Name": "A Buyer's Guide to Choosing an Industrial Tape Supplier", "Full URL": "https://tapeindia.shop/blog/buyers-guide-choosing-tape-supplier-india",
    "Title (≤60 chars)": "How to Choose an Industrial Tape Supplier in India | Buyer's Guide", "Meta Description (≤160 chars)": "Your complete buyer's guide to selecting the right industrial tape supplier in India. Key factors to consider: manufacturing capability, quality control, and support.",
    "H1": "Buyer's Guide: Choosing the Right Industrial Tape Supplier in India", "Primary Keywords": "choose tape supplier, industrial tape buyer's guide, tape manufacturer india", "Secondary Keywords": "b2b tape supplier, quality control tapes, oem tape manufacturer",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Read More", "Schema Type": "Article", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/blog-images/guide.webp"
  },
  {
    "Page Type": "Blog Post", "Page Name": "Top 10 Industrial Tapes for 2025", "Full URL": "https://tapeindia.shop/blog/top-10-industrial-tapes-2025",
    "Title (≤60 chars)": "Top 10 Industrial Tapes for Manufacturing in 2025 | Tape India",
    "Meta Description (≤160 chars)": "Discover the top 10 essential industrial tapes for modern manufacturing in 2025. An expert review of VHB, Kapton, and other high-performance adhesive tapes.",
    "H1": "Top 10 Industrial Tapes Every Manufacturer Needs in 2025",
    "Primary Keywords": "top industrial tapes, best adhesive tapes, manufacturing tapes", "Secondary Keywords": "vhb tape, kapton tape, high-performance tape",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Read More", "Schema Type": "Article", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/blog-images/top-tapes.webp"
  },
  {
    "Page Type": "Blog Post", "Page Name": "Copper Foil Tape for EMI Shielding and Grounding", "Full URL": "https://tapeindia.shop/blog/copper-foil-tape-emi-shielding-grounding",
    "Title (≤60 chars)": "Copper Foil Tape for EMI Shielding & Grounding | Guide",
    "Meta Description (≤160 chars)": "An expert guide to using Copper Foil Tape for effective EMI shielding and electrical grounding in electronics. Learn about applications and best practices.",
    "H1": "A Guide to Copper Foil Tape for EMI Shielding and Grounding",
    "Primary Keywords": "copper foil tape, emi shielding tape, grounding tape", "Secondary Keywords": "conductive adhesive, electronics tape, pcb shielding",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Read More", "Schema Type": "Article", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/blog-images/copper-tape.webp"
  },
  {
    "Page Type": "Blog Post", "Page Name": "The Science Behind Adhesive Strength", "Full URL": "https://tapeindia.shop/blog/the-science-behind-adhesive-strength",
    "Title (≤60 chars)": "The Science Behind Adhesive Strength | A Deep Dive",
    "Meta Description (≤160 chars)": "Understand the science that makes tapes stick. We explore adhesion, cohesion, and the factors that determine the strength of an industrial tape.",
    "H1": "The Science Behind Adhesive Strength",
    "Primary Keywords": "adhesive strength, tape science, adhesion",
    "Secondary Keywords": "cohesion, peel strength, shear strength",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}",
    "CTA": "Read More", "Schema Type": "Article", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/blog-images/science.webp"
  },
  {
    "Page Type": "Blog Post", "Page Name": "5 Common Industrial Tape Application Mistakes", "Full URL": "https://tapeindia.shop/blog/5-common-industrial-tape-application-mistakes",
    "Title (≤60 chars)": "5 Common Industrial Tape Application Mistakes to Avoid",
    "Meta Description (≤160 chars)": "Avoid costly errors. Learn the 5 most common mistakes made during industrial tape application and how to ensure a perfect bond every time.",
    "H1": "5 Common Industrial Tape Application Mistakes to Avoid",
    "Primary Keywords": "tape application mistakes, industrial tape errors, proper tape use",
    "Secondary Keywords": "surface preparation, adhesive failure, tape bonding",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}",
    "CTA": "Read More", "Schema Type": "Article", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/blog-images/mistakes.webp"
  },

  // --- ALL PRODUCTS ---
  {
    "Page Type": "Product", "Page Name": "VHB Tape", "Full URL": "https://tapeindia.shop/product/vhb-tape",
    "Title (≤60 chars)": "VHB Tape | High-Strength Double-Sided Bonding | Tape India", "Meta Description (≤160 chars)": "Tape India supplies high-strength VHB (Very High Bond) Tapes for permanent bonding in construction, automotive, and electronics. An alternative to rivets and welds.",
    "H1": "VHB (Very High Bond) Double-Sided Tape", "Primary Keywords": "vhb tape, high bond tape, permanent bonding tape", "Secondary Keywords": "3m vhb tape alternative, structural adhesive tape, double sided tape",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is VHB tape used for?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"VHB tape is used for creating strong, permanent bonds between various substrates like metal, glass, and plastics, often replacing mechanical fasteners like screws or rivets.\"}}]}",
    "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/vhb-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "Kapton Tape", "Full URL": "https://tapeindia.shop/product/kapton-tape",
    "Title (≤60 chars)": "Kapton Tape | High-Temperature Polyimide Film Tape | Tape India", "Meta Description (≤160 chars)": "Source high-temperature Kapton tape (polyimide film) from Tape India. Ideal for masking PCBs during wave soldering, 3D printing, and electrical insulation.",
    "H1": "High-Temperature Kapton Polyimide Tape", "Primary Keywords": "kapton tape, polyimide tape, high temperature tape", "Secondary Keywords": "pcb masking tape, 3d printer tape, electrical insulation tape",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the maximum temperature Kapton tape can withstand?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Kapton polyimide tapes can typically withstand temperatures up to 260°C (500°F), making them ideal for high-temperature masking and insulation applications in the electronics industry.\"}}]}",
    "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/kapton-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "Anti Skid Tape", "Full URL": "https://tapeindia.shop/product/anti-skid-tape",
    "Title (≤60 chars)": "Anti-Skid Tape | Heavy-Duty Anti-Slip Safety Tape | Tape India", "Meta Description (≤160 chars)": "Prevent slips and falls with heavy-duty anti-skid tape from Tape India. Our abrasive anti-slip tapes are perfect for stairs, ramps, and industrial floors.",
    "H1": "Heavy-Duty Anti-Skid & Anti-Slip Tape", "Primary Keywords": "anti skid tape, anti slip tape, safety tape", "Secondary Keywords": "stair grip tape, floor safety tape, abrasive tape",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where can anti-skid tape be used?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Anti-skid tape is ideal for any high-traffic or potentially wet surface where slips can occur, such as stairs, walkways, ramps, loading docks, and factory floors.\"}}]}",
    "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/anti-skid-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "Copper Foil Tape", "Full URL": "https://tapeindia.shop/product/copper-foil-tape",
    "Title (≤60 chars)": "Copper Foil Tape with Conductive Adhesive | EMI Shielding",
    "Meta Description (≤160 chars)": "Tape India supplies single-sided copper foil tape with conductive adhesive for EMI/RFI shielding, grounding, and PCB repair. Available in various widths.",
    "H1": "Conductive Copper Foil Tape for EMI Shielding",
    "Primary Keywords": "copper foil tape, emi shielding tape, conductive adhesive tape", "Secondary Keywords": "grounding tape, guitar shielding, electronics tape",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is the adhesive on the copper foil tape conductive?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we offer copper foil tapes with conductive acrylic adhesive, ensuring a reliable electrical connection between the copper backing and the application surface for effective grounding and shielding.\"}}]}",
    "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/copper-foil-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "PTFE Silicone Adhesive Tape", "Full URL": "https://tapeindia.shop/product/ptfe-silicone-adhesive-tape",
    "Title (≤60 chars)": "PTFE Tape with Silicone Adhesive | High-Temp Non-Stick",
    "Meta Description (≤160 chars)": "High-temperature PTFE (Teflon) tape with silicone adhesive. Provides a non-stick, low-friction surface for heat sealing machines, chutes, and guide rails.",
    "H1": "PTFE (Teflon) Coated Tape with Silicone Adhesive",
    "Primary Keywords": "ptfe tape, teflon tape, heat sealer tape", "Secondary Keywords": "non-stick tape, high temperature adhesive, silicone adhesive tape",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is PTFE tape used for?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"PTFE tape is used in applications requiring a high-temperature, non-stick surface, such as lining heat sealing bars, covering conveyor belts, and lining chutes to improve material flow.\"}}]}",
    "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/ptfe-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "Hazard Tape", "Full URL": "https://tapeindia.shop/product/hazard-tape",
    "Title (≤60 chars)": "Hazard Tape | Black & Yellow Warning Tape | Tape India", "Meta Description (≤160 chars)": "Manufacturer of durable PVC Hazard Warning Tape for marking physical hazards and safety zones. Available in black/yellow and red/white. Bulk orders.",
    "H1": "Hazard Warning & Safety Stripe Tape", "Primary Keywords": "hazard tape, warning tape, safety stripe tape", "Secondary Keywords": "pvc warning tape, floor marking, hazard marking",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/hazard-tape.webp"
  },
  {
    "Page Type": "Product", "Page Name": "Floor Marking Tape", "Full URL": "https://tapeindia.shop/product/floor-marking-tape",
    "Title (≤60 chars)": "Floor Marking Tape | Heavy-Duty Vinyl Safety Tape | Tape India", "Meta Description (≤160 chars)": "Durable floor marking tapes for aisle marking, workflow organization, and safety warnings in warehouses and factories. Available in multiple colors.",
    "H1": "Heavy-Duty Floor Marking Tape", "Primary Keywords": "floor marking tape, aisle marking tape, warehouse tape", "Secondary Keywords": "safety floor tape, vinyl tape, social distancing tape",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "Product", "Image URL": "https://file.garden/aIULwzQ_QkPKQcGw/product-images/floor-marking-tape.webp"
  }
];

// Helper function to generate a summary if one isn't explicitly provided.
const generateSummary = (item: Omit<SeoPageData, 'summary' | 'faqs'>): string => {
    if (item["Page Type"] === "Blog Post") {
        return `An in-depth article exploring ${item["Page Name"]}. We delve into ${item["Primary Keywords"]} and how it impacts modern manufacturing and industrial applications. Learn key insights from our experts.`;
    }
    return `${item.H1}. ${item["Meta Description (≤160 chars)"]} As an ISO-certified manufacturer since 1957, we guarantee quality and reliability for all industrial applications, offering custom sizes and Pan-India delivery for bulk and OEM orders.`;
};

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

// --- DERIVED DATA FOR CONTEXT PROVIDERS ---

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const productNameToCategoryId: { [key: string]: string } = {
  'Hazard Tape': 'safety-tapes', 
  'Floor Marking Tape': 'safety-tapes', 
  'Anti Skid Tape': 'safety-tapes', 
  'Caution Tape': 'safety-tapes', 
  'Barricade Tape': 'safety-tapes', 
  'Tamper Proof Security Packing Tape': 'safety-tapes', 
  'Nastro Heavy Duty Floor Marking Tape': 'safety-tapes', 
  'Glow In The Dark Tape': 'safety-tapes', 
  'Photoluminescent Film': 'safety-tapes', 
  'Anti Skid Tape With Centre Glow': 'safety-tapes', 
  'Esd Floor Marking Tape': 'safety-tapes', 
  'Glow In Dark Marking Tapes': 'safety-tapes', 
  'Heavy Duty Anti Skid Tape': 'safety-tapes', 
  'Anti Slip Tape For Bath And Shower': 'safety-tapes',
  'Silver Tc Reflective Tape': 'reflective-tapes', 
  'Heat Transfer Reflective Tape': 'reflective-tapes', 
  'Vinyl Heat Transfer Reflective Film': 'reflective-tapes', 
  'Pvc Reflective Tape': 'reflective-tapes', 
  'Reflective Yarn Thread': 'reflective-tapes', 
  'Flame Retardant Reflective Tape': 'reflective-tapes', 
  'Hi Reflective Polyester Fabric': 'reflective-tapes', 
  'Hi Reflective Tc Fabric': 'reflective-tapes', 
  'Oxford Reflective Ribbon': 'reflective-tapes', 
  'Reflective Piping': 'reflective-tapes', 
  'Ordinary Reflective Polyester Fabric': 'reflective-tapes', 
  'Woven Reflective Ribbon': 'reflective-tapes', 
  'Ordinary Reflective Tc Fabric': 'reflective-tapes',
  '3M Double Sided Foam Tape': 'double-sided-tapes', 
  'Tissue Tape': 'double-sided-tapes', 
  'Polyester Double Sided Tape': 'double-sided-tapes', 
  'Vhb Tape': 'double-sided-tapes', 
  'Lohmann Duploflex Tape': 'double-sided-tapes', 
  'Pe Foam Tape': 'double-sided-tapes', 
  'Pet Double Sided Tape': 'double-sided-tapes', 
  'Transfer Tape': 'double-sided-tapes', 
  'Acrylic Double Sided Tape': 'double-sided-tapes', 
  'Double Sided Thermal Tape': 'double-sided-tapes', 
  'Double Sided Scrim Tape': 'double-sided-tapes', 
  'Eva Foam Tape': 'double-sided-tapes', 
  'Spacer Tapes': 'double-sided-tapes', 
  'Nano Magic Tape': 'double-sided-tapes', 
  'Hot Melt Tissue Tapes': 'double-sided-tapes', 
  'Double Sided Cloth Tape': 'double-sided-tapes', 
  'Acrylic Gel Tape': 'double-sided-tapes', 
  'Xlpe Foam Tapes': 'double-sided-tapes', 
  'Polyimide Double Sided Tape': 'double-sided-tapes',
  'Ptfe Coated Fiberglass Fabric Non Adhesive': 'teflon-ptfe-tapes', 
  'Ptfe Silicone Adhesive Tape': 'teflon-ptfe-tapes', 
  'Ptfe Coated Fiberglass Fabric With Silicone Adhesive': 'teflon-ptfe-tapes', 
  'Ptfe Coated Fiberglass Fabric With Silicone Adhesive Liner': 'teflon-ptfe-tapes',
  'Emi Shielding Tape': 'antistatic-esd-tapes', 
  'Copper Foil Tape': 'antistatic-esd-tapes', 
  'Conductive Grid Tape': 'antistatic-esd-tapes', 
  'Esd Kapton Tape': 'antistatic-esd-tapes', 
  'Anti Static Polyester Tape': 'antistatic-esd-tapes', 
  'Tin Plated Copper Tape': 'antistatic-esd-tapes',
  'Kapton Tape': 'specialty-tapes',
  'Masking Tape': 'specialty-tapes',
  'BOPP Tape': 'specialty-tapes',
  'Aluminium Foil Tape': 'specialty-tapes',
  'Cloth Duct Tape': 'specialty-tapes',
  'Paper Tape': 'specialty-tapes',
  'Silicone Tape': 'specialty-tapes',
  'Polyester Tape': 'specialty-tapes',
  'PVC Pipe Wrapping Tape': 'specialty-tapes',
  'Bag Sealing Tape': 'specialty-tapes',
  'Acetate Cloth Tape': 'specialty-tapes',
  'Sticky Mat': 'specialty-tapes',
  'Mica Tape': 'specialty-tapes',
  'Green Polyester Tape': 'specialty-tapes',
  'PE Surface Protection Film': 'specialty-tapes',
  'Lamination Tape': 'specialty-tapes',
  'Aluminium Butyl Tape': 'specialty-tapes',
  'Glass Cloth Tape': 'specialty-tapes',
  'Filament Tapes': 'specialty-tapes',
  'Kraft Paper Tape': 'specialty-tapes'
};

const categoryNameToIconName: { [key: string]: string } = {
    'Safety Tapes': 'ShieldCheckIcon',
    'Reflective Tapes': 'SunIcon',
    'Double-Sided Tapes': 'LayersIcon',
    'Specialty Tapes': 'SparklesIcon',
    'PTFE & Teflon Tapes': 'ThermometerIcon',
    'Antistatic & ESD Tapes': 'ZapIcon',
};

/**
 * A transformed list of all products, structured for use in the ProductContext.
 */
export const ALL_PRODUCTS: Product[] = seoData
    .filter(p => p["Page Type"] === 'Product')
    .map(p => {
        const id = new URL(p["Full URL"]).pathname.split('/').pop() || slugify(p["Page Name"]);
        const allKeywords = `${p["Primary Keywords"]}, ${p["Secondary Keywords"]}`;

        return {
            id,
            name: p.H1,
            shortDescription: p["Meta Description (≤160 chars)"],
            description: p.summary,
            features: p.faqs.map(f => f.acceptedAnswer.text),
            uses: allKeywords.split(',').map(u => u.trim()),
            category: productNameToCategoryId[p["Page Name"]] || 'specialty-tapes',
            industries: [], // This data isn't in seoData, must be populated elsewhere
            images: p["Image URL"] ? [p["Image URL"]] : ['/default-product.jpg'],
            seo: p,
        };
    });

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
        today.setDate(today.getDate() - (index * 10)); // Stagger dates for realism
        const date = today.toISOString().split('T')[0];
        const allKeywords = `${p["Primary Keywords"]}, ${p["Secondary Keywords"]}`;

        return {
            id,
            title: p.H1,
            summary: p["Meta Description (≤160 chars)"],
            content: p.summary, // Use summary as base content for now
            category: 'Industry Guides',
            tags: allKeywords.split(',').map(t => t.trim()),
            image: p["Image URL"] || '/default-blog.jpg',
            readTime: 5 + (index % 3),
            author: 'Tape India Experts',
            datePublished: date,
            dateModified: date,
            seo: p,
        };
    });
