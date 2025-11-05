
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
  {
    "Page Type": "Static", "Page Name": "All Products List", "Full URL": "https://tapeindia.shop/products",
    "Title (≤60 chars)": "All Industrial Tapes | Manufacturer & Supplier | Tape India", "Meta Description (≤160 chars)": "Browse our complete range of over 100 industrial adhesive tapes. As a leading manufacturer, we supply everything from VHB to Kapton tapes Pan-India.",
    "H1": "All Products", "Primary Keywords": "all products, industrial tapes, tape supplier", "Secondary Keywords": "adhesive solutions, tape manufacturer, b2b tapes",
    "FAQ Schema (JSON-LD)": "{}", "Product Schema (JSON-LD)": null, "LocalBusiness Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}", "CTA": "Request a Quote", "Schema Type": "CollectionPage"
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

  // --- BLOG POSTS (22 TOTAL) ---
  {"Page Type":"Blog Post","Page Name":"A Buyer's Guide to Choosing an Industrial Tape Supplier","Full URL":"https://tapeindia.shop/blog/buyers-guide-choosing-tape-supplier-india","Title (≤60 chars)":"How to Choose an Industrial Tape Supplier in India | Buyer's Guide","Meta Description (≤160 chars)":"Your complete buyer's guide to selecting the right industrial tape supplier in India. Key factors to consider: manufacturing capability, quality control, and support.","H1":"Buyer's Guide: Choosing the Right Industrial Tape Supplier in India","Primary Keywords":"choose tape supplier, industrial tape buyer's guide, tape manufacturer india","Secondary Keywords":"b2b tape supplier, quality control tapes, oem tape manufacturer","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/guide.webp"},
  {"Page Type":"Blog Post","Page Name":"Top 10 Industrial Tapes for 2025","Full URL":"https://tapeindia.shop/blog/top-10-industrial-tapes-2025","Title (≤60 chars)":"Top 10 Industrial Tapes for Manufacturing in 2025 | Tape India","Meta Description (≤160 chars)":"Discover the top 10 essential industrial tapes for modern manufacturing in 2025. An expert review of VHB, Kapton, and other high-performance adhesive tapes.","H1":"Top 10 Industrial Tapes Every Manufacturer Needs in 2025","Primary Keywords":"top industrial tapes, best adhesive tapes, manufacturing tapes","Secondary Keywords":"vhb tape, kapton tape, high-performance tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/top-tapes.webp"},
  {"Page Type":"Blog Post","Page Name":"Copper Foil Tape for EMI Shielding and Grounding","Full URL":"https://tapeindia.shop/blog/copper-foil-tape-emi-shielding-grounding","Title (≤60 chars)":"Copper Foil Tape for EMI Shielding & Grounding | Guide","Meta Description (≤160 chars)":"An expert guide to using Copper Foil Tape for effective EMI shielding and electrical grounding in electronics. Learn about applications and best practices.","H1":"A Guide to Copper Foil Tape for EMI Shielding and Grounding","Primary Keywords":"copper foil tape, emi shielding tape, grounding tape","Secondary Keywords":"conductive adhesive, electronics tape, pcb shielding","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/copper-tape.webp"},
  {"Page Type":"Blog Post","Page Name":"The Science Behind Adhesive Strength","Full URL":"https://tapeindia.shop/blog/the-science-behind-adhesive-strength","Title (≤60 chars)":"The Science Behind Adhesive Strength | A Deep Dive","Meta Description (≤160 chars)":"Understand the science that makes tapes stick. We explore adhesion, cohesion, and the factors that determine the strength of an industrial tape.","H1":"The Science Behind Adhesive Strength","Primary Keywords":"adhesive strength, tape science, adhesion","Secondary Keywords":"cohesion, peel strength, shear strength","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/science.webp"},
  {"Page Type":"Blog Post","Page Name":"5 Common Industrial Tape Application Mistakes","Full URL":"https://tapeindia.shop/blog/5-common-industrial-tape-application-mistakes","Title (≤60 chars)":"5 Common Industrial Tape Application Mistakes to Avoid","Meta Description (≤160 chars)":"Avoid costly errors. Learn the 5 most common mistakes made during industrial tape application and how to ensure a perfect bond every time.","H1":"5 Common Industrial Tape Application Mistakes to Avoid","Primary Keywords":"tape application mistakes, industrial tape errors, proper tape use","Secondary Keywords":"surface preparation, adhesive failure, tape bonding","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/mistakes.webp"},
  {"Page Type":"Blog Post","Page Name":"Challenges in Industrial Tape Storage","Full URL":"https://tapeindia.shop/blog/challenges-in-industrial-tape-storage","Title (≤60 chars)":"Challenges in Industrial Tape Storage & Solutions | Tape India","Meta Description (≤160 chars)":"Learn how to properly store industrial tapes to maintain their adhesive properties and shelf life. Overcome common challenges like temperature, humidity, and pressure.","H1":"Solving Challenges in Industrial Tape Storage","Primary Keywords":"industrial tape storage, tape shelf life, adhesive tape care","Secondary Keywords":"tape storage conditions, humidity and tape, temperature effects on adhesives","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/storage.webp"},
  {"Page Type":"Blog Post","Page Name":"Specialized Tapes in Aerospace and Defense","Full URL":"https://tapeindia.shop/blog/aerospace-defense-specialized-tapes","Title (≤60 chars)":"Specialized Tapes for Aerospace & Defense | Applications","Meta Description (≤160 chars)":"Explore the critical role of specialized tapes in the aerospace and defense industries, from high-temperature masking to flame-retardant composites.","H1":"The Role of Specialized Tapes in Aerospace and Defense","Primary Keywords":"aerospace tapes, defense industry tapes, high-performance tapes","Secondary Keywords":"flame retardant tape, masking tapes for aerospace, aircraft tapes","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/aerospace.webp"},
  {"Page Type":"Blog Post","Page Name":"Tapes in Smart Manufacturing and Industry 4.0","Full URL":"https://tapeindia.shop/blog/tapes-in-smart-manufacturing-industry-4.0","Title (≤60 chars)":"Role of Tapes in Smart Manufacturing (Industry 4.0)","Meta Description (≤160 chars)":"Discover how advanced adhesive tapes are enabling smart manufacturing and Industry 4.0, from sensor mounting to process automation.","H1":"Adhesive Tapes: The Unsung Heroes of Industry 4.0","Primary Keywords":"smart manufacturing tapes, industry 4.0 adhesives, automation tapes","Secondary Keywords":"sensor mounting tape, conductive tapes, process automation","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/industry40.webp"},
  {"Page Type":"Blog Post","Page Name":"The Hidden Costs of Low-Quality Industrial Tapes","Full URL":"https://tapeindia.shop/blog/hidden-costs-of-low-quality-industrial-tapes","Title (≤60 chars)":"The Hidden Costs of Using Low-Quality Industrial Tapes","Meta Description (≤160 chars)":"Saving on tape costs can lead to greater expenses. Learn about the hidden costs of low-quality industrial tapes, including downtime, product damage, and rework.","H1":"The Hidden Costs of Low-Quality Industrial Tapes","Primary Keywords":"low-quality tape, industrial tape cost, adhesive failure","Secondary Keywords":"production downtime, product damage, tape quality matters","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/costs.webp"},
  {"Page Type":"Blog Post","Page Name":"Fire-Resistant vs. Flame-Retardant Tapes","Full URL":"https://tapeindia.shop/blog/fire-resistant-flame-retardant-tapes","Title (≤60 chars)":"Fire-Resistant vs. Flame-Retardant Tapes: What's the Difference?","Meta Description (≤160 chars)":"Understand the critical difference between fire-resistant and flame-retardant tapes and learn which type is right for your industrial application to ensure safety.","H1":"Fire-Resistant vs. Flame-Retardant Tapes: Key Differences","Primary Keywords":"flame retardant tape, fire resistant tape, industrial safety tapes","Secondary Keywords":"FR tape, high-temperature tapes, electrical insulation","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/fire.webp"},
  {"Page Type":"Blog Post","Page Name":"Thermal Tapes vs. Thermal Pads","Full URL":"https://tapeindia.shop/blog/thermal-tapes-vs-thermal-pads","Title (≤60 chars)":"Thermal Tapes vs. Thermal Pads: Which is Right for You?","Meta Description (≤160 chars)":"A comparison guide between thermal conductive tapes and thermal pads for heat management in electronics. Learn the pros and cons to choose the best solution.","H1":"Thermal Tapes vs. Thermal Pads: A Comparative Guide","Primary Keywords":"thermal tape, thermal pad, heat sink adhesive","Secondary Keywords":"thermal conductive tape, electronics cooling, thermal management","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/thermal.webp"},
  {"Page Type":"Blog Post","Page Name":"Reflective Tapes for Industrial Safety","Full URL":"https://tapeindia.shop/blog/reflective-tapes-industrial-safety-visibility","Title (≤60 chars)":"Reflective Tapes for Industrial Safety & Visibility | Guide","Meta Description (≤160 chars)":"Learn how reflective tapes enhance visibility and safety in industrial environments. A guide to different types, applications, and compliance standards.","H1":"Enhancing Workplace Safety with Reflective Tapes","Primary Keywords":"reflective tape, industrial safety, high visibility tape","Secondary Keywords":"safety marking, vehicle conspicuity, workplace safety","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/reflective.webp"},
  {"Page Type":"Blog Post","Page Name":"Sticky Mats for Cleanrooms","Full URL":"https://tapeindia.shop/blog/sticky-mats-cleanroom-industrial-environments","Title (≤60 chars)":"Sticky Mats for Cleanrooms & Industrial Use | Contamination Control","Meta Description (≤160 chars)":"An essential guide to using sticky mats for contamination control in cleanrooms, labs, and sensitive industrial environments. Improve your facility's cleanliness.","H1":"The Role of Sticky Mats in Contamination Control","Primary Keywords":"sticky mat, cleanroom mat, contamination control","Secondary Keywords":"tacky mat, dust control, industrial cleanroom","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/sticky-mat.webp"},
  {"Page Type":"Blog Post","Page Name":"Aluminum Foil Tape in HVAC","Full URL":"https://tapeindia.shop/blog/aluminum-foil-tape-hvac-insulation-guide","Title (≤60 chars)":"Aluminum Foil Tape for HVAC & Insulation | A Complete Guide","Meta Description (≤160 chars)":"Your complete guide to using aluminum foil tape for sealing and seaming in HVAC systems. Learn about its properties, applications, and best practices.","H1":"Aluminum Foil Tape: The Essential Guide for HVAC Professionals","Primary Keywords":"aluminum foil tape, hvac tape, duct sealing tape","Secondary Keywords":"insulation tape, foil scrim kraft, fsk tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/hvac.webp"},
  {"Page Type":"Blog Post","Page Name":"Polyester Green Tape for Powder Coating","Full URL":"https://tapeindia.shop/blog/polyester-green-tape-powder-coating-guide","Title (≤60 chars)":"Polyester Green Tape for Powder Coating & Masking | Guide","Meta Description (≤160 chars)":"A guide to using high-temperature polyester green tape for masking applications in powder coating, e-coating, and anodizing. Achieve clean lines every time.","H1":"Mastering Powder Coating with Polyester Green Tape","Primary Keywords":"polyester green tape, powder coating tape, high temperature masking","Secondary Keywords":"masking tape, anodizing tape, e-coating tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/green-tape.webp"},
  {"Page Type":"Blog Post","Page Name":"Eco-Friendly Adhesive Solutions","Full URL":"https://tapeindia.shop/blog/eco-friendly-adhesive-solutions-manufacturing","Title (≤60 chars)":"Eco-Friendly Adhesive Solutions for Sustainable Manufacturing","Meta Description (≤160 chars)":"Explore the rise of eco-friendly and sustainable adhesive solutions in manufacturing, from water-activated paper tapes to repulpable options.","H1":"The Shift to Eco-Friendly Adhesive Solutions","Primary Keywords":"eco-friendly tape, sustainable adhesive, paper tape","Secondary Keywords":"water-activated tape, repulpable tape, green manufacturing","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/eco.webp"},
  {"Page Type":"Blog Post","Page Name":"Future of Adhesive Technology","Full URL":"https://tapeindia.shop/blog/future-of-adhesive-technology-smart-tapes-iot","Title (≤60 chars)":"The Future of Adhesive Technology: Smart Tapes & IoT","Meta Description (≤160 chars)":"Look ahead at the future of adhesive technology, including the development of smart tapes with embedded sensors for IoT applications and structural monitoring.","H1":"The Future is Sticky: Smart Tapes and IoT Integration","Primary Keywords":"smart tapes, future of adhesives, iot sensors","Secondary Keywords":"adhesive technology, sensor tapes, structural health monitoring","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/future.webp"},
  {"Page Type":"Blog Post","Page Name":"Heat-Resistant Tapes in Electric Vehicles","Full URL":"https://tapeindia.shop/blog/heat-resistant-tapes-electric-vehicles","Title (≤60 chars)":"Heat-Resistant Tapes in Electric Vehicle (EV) Battery Manufacturing","Meta Description (≤160 chars)":"Discover the critical role of heat-resistant tapes like Kapton and polyester in the manufacturing of electric vehicle (EV) batteries for insulation and safety.","H1":"The Role of Heat-Resistant Tapes in EV Battery Production","Primary Keywords":"heat-resistant tape, ev battery tape, electric vehicle tapes","Secondary Keywords":"kapton tape, polyester tape, battery insulation","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/ev.webp"},
  {"Page Type":"Blog Post","Page Name":"Adhesive Tapes in Renewable Energy","Full URL":"https://tapeindia.shop/blog/adhesive-tapes-in-renewable-energy","Title (≤60 chars)":"Adhesive Tapes in Renewable Energy | Solar & Wind Applications","Meta Description (≤160 chars)":"Learn how high-performance adhesive tapes are driving efficiency and durability in the renewable energy sector, from solar panel bonding to wind turbine manufacturing.","H1":"How Adhesive Tapes Power the Renewable Energy Sector","Primary Keywords":"renewable energy tapes, solar panel tape, wind turbine tapes","Secondary Keywords":"vhb tape, bonding tapes, structural adhesives","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/renewable.webp"},
  {"Page Type":"Blog Post","Page Name":"Industrial Tape Testing for Quality","Full URL":"https://tapeindia.shop/blog/industrial-tape-testing-quality-durability","Title (≤60 chars)":"Industrial Tape Testing for Quality & Durability | Tape India","Meta Description (≤160 chars)":"Go behind the scenes to learn about the rigorous testing methods used to ensure the quality, durability, and performance of industrial tapes.","H1":"How Industrial Tapes are Tested for Quality and Durability","Primary Keywords":"tape testing, quality control tape, adhesive testing","Secondary Keywords":"peel adhesion test, shear strength, tensile strength","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/testing.webp"},
  {"Page Type":"Blog Post","Page Name":"Proper Tape Application Reduces Downtime","Full URL":"https://tapeindia.shop/blog/proper-tape-application-reduces-downtime","Title (≤60 chars)":"How Proper Tape Application Reduces Manufacturing Downtime","Meta Description (≤160 chars)":"Learn how training your team on proper industrial tape application techniques can significantly reduce manufacturing downtime and improve production efficiency.","H1":"Reduce Downtime with Proper Tape Application Techniques","Primary Keywords":"tape application, reduce downtime, manufacturing efficiency","Secondary Keywords":"adhesive bonding, surface preparation, operator training","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/downtime.webp"},
  {"Page Type":"Blog Post","Page Name":"Lifecycle of High-Performance Industrial Tape","Full URL":"https://tapeindia.shop/blog/lifecycle-of-high-performance-industrial-tape","Title (≤60 chars)":"The Lifecycle of a High-Performance Industrial Tape","Meta Description (≤160 chars)":"From raw material sourcing to end-of-life, explore the complete lifecycle of a high-performance industrial tape and the sustainability efforts involved.","H1":"From Polymer to Performance: The Lifecycle of an Industrial Tape","Primary Keywords":"tape lifecycle, industrial tape manufacturing, sustainable adhesives","Secondary Keywords":"raw materials tape, tape production, adhesive technology","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":null,"LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Read More","Schema Type":"Article","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/blog-images/lifecycle.webp"},
  
  // --- ALL PRODUCTS (100+) ---
  {"Page Type":"Product","Page Name":"Hazard Tape","Full URL":"https://tapeindia.shop/product/hazard-tape","Title (≤60 chars)":"Hazard Tape | Black & Yellow Warning Tape | Tape India","Meta Description (≤160 chars)":"Manufacturer of durable PVC Hazard Warning Tape for marking physical hazards and safety zones. Available in black/yellow and red/white. Bulk orders.","H1":"Hazard Warning & Safety Stripe Tape","Primary Keywords":"hazard tape, warning tape, safety stripe tape","Secondary Keywords":"pvc warning tape, floor marking, hazard marking","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/hazard-tape.webp"},
  {"Page Type":"Product","Page Name":"Floor Marking Tape","Full URL":"https://tapeindia.shop/product/floor-marking-tape","Title (≤60 chars)":"Floor Marking Tape | Heavy-Duty Vinyl Safety Tape | Tape India","Meta Description (≤160 chars)":"Durable floor marking tapes for aisle marking, workflow organization, and safety warnings in warehouses and factories. Available in multiple colors.","H1":"Heavy-Duty Floor Marking Tape","Primary Keywords":"floor marking tape, aisle marking tape, warehouse tape","Secondary Keywords":"safety floor tape, vinyl tape, social distancing tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/floor-marking-tape.webp"},
  {"Page Type":"Product","Page Name":"Anti Skid Tape","Full URL":"https://tapeindia.shop/product/anti-skid-tape","Title (≤60 chars)":"Anti-Skid Tape | Heavy-Duty Anti-Slip Safety Tape | Tape India","Meta Description (≤160 chars)":"Prevent slips and falls with heavy-duty anti-skid tape from Tape India. Our abrasive anti-slip tapes are perfect for stairs, ramps, and industrial floors.","H1":"Heavy-Duty Anti-Skid & Anti-Slip Tape","Primary Keywords":"anti skid tape, anti slip tape, safety tape","Secondary Keywords":"stair grip tape, floor safety tape, abrasive tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/anti-skid-tape.webp"},
  {"Page Type":"Product","Page Name":"Caution Tape","Full URL":"https://tapeindia.shop/product/caution-tape","Title (≤60 chars)":"Caution Tape | Non-Adhesive Barricade Tape | Tape India","Meta Description (≤160 chars)":"High-visibility, non-adhesive caution tape for cordoning off restricted areas and communicating warnings. Durable and weather-resistant.","H1":"Non-Adhesive Caution & Warning Tape","Primary Keywords":"caution tape, warning tape, barricade tape","Secondary Keywords":"danger tape, construction tape, safety tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/caution-tape.webp"},
  {"Page Type":"Product","Page Name":"VHB Tape","Full URL":"https://tapeindia.shop/product/vhb-tape","Title (≤60 chars)":"VHB Tape | High-Strength Double-Sided Bonding | Tape India","Meta Description (≤160 chars)":"Tape India supplies high-strength VHB (Very High Bond) Tapes for permanent bonding in construction, automotive, and electronics. An alternative to rivets.","H1":"VHB (Very High Bond) Double-Sided Tape","Primary Keywords":"vhb tape, high bond tape, permanent bonding tape","Secondary Keywords":"3m vhb tape alternative, structural adhesive tape, double sided tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/vhb-tape.webp"},
  {"Page Type":"Product","Page Name":"Kapton Tape","Full URL":"https://tapeindia.shop/product/kapton-tape","Title (≤60 chars)":"Kapton Tape | High-Temperature Polyimide Film Tape | Tape India","Meta Description (≤160 chars)":"Source high-temperature Kapton tape (polyimide film) from Tape India. Ideal for masking PCBs during wave soldering, 3D printing, and electrical insulation.","H1":"High-Temperature Kapton Polyimide Tape","Primary Keywords":"kapton tape, polyimide tape, high temperature tape","Secondary Keywords":"pcb masking tape, 3d printer tape, electrical insulation tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/kapton-tape.webp"},
  {"Page Type":"Product","Page Name":"Copper Foil Tape","Full URL":"https://tapeindia.shop/product/copper-foil-tape","Title (≤60 chars)":"Copper Foil Tape with Conductive Adhesive | EMI Shielding","Meta Description (≤160 chars)":"Tape India supplies single-sided copper foil tape with conductive adhesive for EMI/RFI shielding, grounding, and PCB repair. Available in various widths.","H1":"Conductive Copper Foil Tape for EMI Shielding","Primary Keywords":"copper foil tape, emi shielding tape, conductive adhesive tape","Secondary Keywords":"grounding tape, guitar shielding, electronics tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/copper-foil-tape.webp"},
  {"Page Type":"Product","Page Name":"PTFE Silicone Adhesive Tape","Full URL":"https://tapeindia.shop/product/ptfe-silicone-adhesive-tape","Title (≤60 chars)":"PTFE Tape with Silicone Adhesive | High-Temp Non-Stick","Meta Description (≤160 chars)":"High-temperature PTFE (Teflon) tape with silicone adhesive. Provides a non-stick, low-friction surface for heat sealing machines, chutes, and guide rails.","H1":"PTFE (Teflon) Coated Tape with Silicone Adhesive","Primary Keywords":"ptfe tape, teflon tape, heat sealer tape","Secondary Keywords":"non-stick tape, high temperature adhesive, silicone adhesive tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/ptfe-tape.webp"},
  {"Page Type":"Product","Page Name":"Silver Tc Reflective Tape","Full URL":"https://tapeindia.shop/product/silver-tc-reflective-tape","Title (≤60 chars)":"Silver TC Reflective Tape | Sew-On High Visibility Tape","Meta Description (≤160 chars)":"High-quality silver TC reflective tape for sewing onto safety vests, jackets, and workwear. Enhances visibility in low-light conditions. EN 20471 compliant.","H1":"Silver TC Sew-On Reflective Tape","Primary Keywords":"reflective tape, silver tc tape, sew-on reflective tape","Secondary Keywords":"high visibility tape, safety vest tape, en 20471 tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/silver-reflective-tape.webp"},
  {"Page Type":"Product","Page Name":"Aluminium Foil Tape","Full URL":"https://tapeindia.shop/product/aluminium-foil-tape","Title (≤60 chars)":"Aluminium Foil Tape | HVAC & High-Temperature Sealing Tape","Meta Description (≤160 chars)":"Tape India's aluminium foil tape is ideal for HVAC duct sealing, thermal insulation, and heat shielding applications. High-performance adhesive for a durable seal.","H1":"High-Performance Aluminium Foil Tape","Primary Keywords":"aluminium foil tape, hvac tape, foil tape","Secondary Keywords":"duct tape, heat resistant tape, insulation tape","FAQ Schema (JSON-LD)":"{}","Product Schema (JSON-LD)":"{}","LocalBusiness Schema (JSON-LD)":"{}","Combined Schema (JSON-LD)":"{}","CTA":"Request a Quote","Schema Type":"Product","Image URL":"https://file.garden/aIULwzQ_QkPKQcGw/product-images/aluminium-foil-tape.webp"}
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
  'VHB Tape': 'double-sided-tapes',
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
        const featuresFromSummary = p.summary.split('. ').slice(1, 4); // Take a few sentences as features

        return {
            id,
            name: p.H1,
            shortDescription: p["Meta Description (≤160 chars)"],
            description: p.summary,
            features: p.faqs.length > 0 ? p.faqs.map(f => f.name) : featuresFromSummary,
            uses: allKeywords.split(',').map(u => u.trim()).slice(0,5),
            category: productNameToCategoryId[p["Page Name"]] || 'specialty-tapes',
            industries: [], // This data is populated via IndustryContext
            images: p["Image URL"] ? [p["Image URL"]] : [],
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
            content: `<p>${p.summary}</p><p>Further details on ${p["Primary Keywords"]} will be discussed. This includes insights into ${p["Secondary Keywords"]}. Stay tuned for an in-depth analysis from our experts at Tape India, where we explore the nuances of industrial adhesive solutions.</p>`,
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
