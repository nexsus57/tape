// This file holds the static SEO data to be displayed on the content hub page.

export interface SeoPageData {
    "Page Type": string;
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
    "FAQ Schema (JSON-LD)": string;
    "Product Schema (JSON-LD)": string | null;
    "LocalBusiness Schema (JSON-LD)": string;
    "Combined Schema (JSON-LD)": string;
    "CTA": string;
    "Schema Type": string;
    summary: string;
    faqs: { name: string; acceptedAnswer: { text: string } }[];
}

const rawSeoData = [
  {
    "Page Type": "Static",
    "Page Name": "Home",
    "Full URL": "https://tapeindia.shop/",
    "Title (≤60 chars)": "Industrial Tape Manufacturer India | Bulk Supplier Since 1957",
    "Meta Description (≤160 chars)": "Tape India (Sha Kundanmal Misrimal)—ISO-certified industrial tape manufacturer in India since 1957. Bulk orders, OEM/private label, custom sizes, pan-India delivery.",
    "H1": "Industrial Tape Manufacturer & Bulk Supplier in India",
    "H2_1": "High-Performance Tapes for Every Industrial Application",
    "H2_2": "Custom Slitting, Die-Cutting & OEM Solutions",
    "H2_3": "Reliable Pan-India Supply Chain for Bulk Orders",
    "H2_4": "Our Commitment to Quality, Compliance & ISO Standards",
    "H2_5": "Why Choose Tape India (Sha Kundanmal Misrimal)?",
    "H3": "Serving OEMs, Distributors & Key Industries Nationwide",
    "H4": "Technical Datasheets, Storage & Handling Guides",
    "H5": "Request Your Bulk Quote Today",
    "Primary Keywords": "industrial tape manufacturer, industrial tape supplier, bulk tape india",
    "Secondary Keywords": "oem tape manufacturer, custom size tape, pan india delivery, iso certified, since 1957",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are you an industrial tape manufacturer in India?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Tape India (Sha Kundanmal Misrimal) is a leading industrial tape manufacturer based in Chennai with over 65 years of experience supplying businesses Pan-India.\"}},{\"@type\":\"Question\",\"name\":\"Do you offer bulk pricing for industrial tapes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. We specialize in bulk and wholesale orders for our entire range of over 200 industrial tapes. Contact us for a competitive quote.\"}},{\"@type\":\"Question\",\"name\":\"Can you provide custom-sized tapes for OEM applications?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we provide custom slitting and die-cutting services to meet the precise specifications of OEM and high-volume manufacturing clients.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"IN\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"sales\",\"availableLanguage\":[\"en\",\"hi\",\"ta\"]}]}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"IN\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"sales\",\"availableLanguage\":[\"en\",\"hi\",\"ta\"]}]},{\"@type\":\"WebPage\",\"name\":\"Industrial Tape Manufacturer India | Bulk Supplier Since 1957\",\"url\":\"https://tapeindia.shop/\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are you an industrial tape manufacturer in India?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Tape India (Sha Kundanmal Misrimal) is a leading industrial tape manufacturer based in Chennai with over 65 years of experience supplying businesses Pan-India.\"}},{\"@type\":\"Question\",\"name\":\"Do you offer bulk pricing for industrial tapes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. We specialize in bulk and wholesale orders for our entire range of over 200 industrial tapes. Contact us for a competitive quote.\"}},{\"@type\":\"Question\",\"name\":\"Can you provide custom-sized tapes for OEM applications?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, we provide custom slitting and die-cutting services to meet the precise specifications of OEM and high-volume manufacturing clients.\"}}]}]}",
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
    "H2_3": "Manufacturing & Conversion Capabilities for OEM Partners",
    "H2_4": "Our Commitment to ISO 9001 and Industry Standards",
    "H2_5": "Partner with a Trusted Name in Industrial Tapes",
    "H3": "Our Mission & Vision for the Indian Manufacturing Sector",
    "H4": "Meet the Team Driving Our Legacy Forward",
    "H5": "Request a Corporate Profile",
    "Primary Keywords": "about tape india, industrial tape manufacturer history, tape company since 1957",
    "Secondary Keywords": "b2b tape supplier, oem tape solutions, sha kundanmal misrimal, made in india tapes",
    "FAQ Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long has Tape India been in the industrial tape business?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tape India (Sha Kundanmal Misrimal) has been a trusted manufacturer and supplier of industrial tapes since our founding in 1957. We have over 65 years of experience serving India's manufacturing sector.\"}},{\"@type\":\"Question\",\"name\":\"What makes Tape India a reliable B2B supplier?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our reliability stems from our deep industry knowledge, commitment to ISO-grade quality, in-house manufacturing capabilities, and a focus on building long-term partnerships with our B2B clients.\"}},{\"@type\":\"Question\",\"name\":\"Do you work with OEMs and large-scale distributors?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, serving OEMs, bulk buyers, and distributors is our core business. We provide custom solutions, private labeling, and dedicated support for large-volume industrial supply chains.\"}}]}",
    "Product Schema (JSON-LD)": null,
    "LocalBusiness Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"}",
    "Combined Schema (JSON-LD)": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"IndustrialBusiness\",\"name\":\"Tape India (Sha Kundanmal Misrimal)\",\"url\":\"https://tapeindia.shop\",\"foundingDate\":\"1957\",\"areaServed\":\"IN\"},{\"@type\":\"WebPage\",\"name\":\"About Us | Tape India (Sha Kundanmal Misrimal) | Since 1957\",\"url\":\"https://tapeindia.shop/about\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long has Tape India been in the industrial tape business?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tape India (Sha Kundanmal Misrimal) has been a trusted manufacturer and supplier of industrial tapes since our founding in 1957. We have over 65 years of experience serving India's manufacturing sector.\"}},{\"@type\":\"Question\",\"name\":\"What makes Tape India a reliable B2B supplier?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Our reliability stems from our deep industry knowledge, commitment to ISO-grade quality, in-house manufacturing capabilities, and a focus on building long-term partnerships with our B2B clients.\"}},{\"@type\":\"Question\",\"name\":\"Do you work with OEMs and large-scale distributors?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, serving OEMs, bulk buyers, and distributors is our core business. We provide custom solutions, private labeling, and dedicated support for large-volume industrial supply chains.\"}}]}]}",
    "CTA": "Partner With Us",
    "Schema Type": "WebPage + FAQ + IndustrialBusiness"
  }
];

export const seoData: SeoPageData[] = rawSeoData.map(page => {
    let faqs = [];
    try {
        const parsedFaq = JSON.parse(page["FAQ Schema (JSON-LD)"]);
        if (parsedFaq && parsedFaq.mainEntity) {
            faqs = parsedFaq.mainEntity.map((faqItem: any) => ({
                name: faqItem.name,
                acceptedAnswer: {
                    text: faqItem.acceptedAnswer.text
                }
            }));
        }
    } catch (e) {
        // console.error("Could not parse FAQ for", page["Page Name"]);
    }

    return {
        ...page,
        "Product Schema (JSON-LD)": page["Product Schema (JSON-LD)"] || null,
        summary: `Tape India (Sha Kundanmal Misrimal), a leading industrial tape manufacturer in India since 1957, offers a comprehensive range of high-performance adhesive solutions for the ${page["Page Name"]}. We specialize in bulk orders, OEM/private label manufacturing, and custom sizing to meet the diverse needs of industries from automotive to packaging. Our ISO-grade products and reliable Pan-India delivery ensure that businesses receive quality and consistency they can trust. Contact our expert team for technical support and to request a competitive bulk quote for your specific application.`,
        faqs: faqs,
    };
});
