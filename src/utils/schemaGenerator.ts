import { Product, Category, BlogArticle } from '../types';

export const generateBreadcrumbsSchema = (
  path: string, 
  search: string,
  products: Product[],
  categories: Category[],
  articles: BlogArticle[],
  seoMatchPageName?: string
) => {
  const items = [
      {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tapeindia.shop/"
      }
  ];

  let i = 2;
  if (path.startsWith('/product/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      const productId = path.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
      const p = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
      if (p) {
          const cat = categories.find(c => c.id === p.category);
          if (cat) {
              items.push({
                  "@type": "ListItem",
                  "position": i++,
                  "name": cat.name,
                  "item": `https://tapeindia.shop/category/${cat.id}`
              });
          }
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": p.name,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path.startsWith('/category/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      const catId = path.replace('/category/', '');
      const cat = categories.find(c => c.id === catId);
      if (cat) {
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": cat.name,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path.startsWith('/industry/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Industries",
          "item": "https://tapeindia.shop/industries"
      });
      const indId = path.replace('/industry/', '');
      const indName = indId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      items.push({
          "@type": "ListItem",
          "position": i,
          "name": indName,
          "item": `https://tapeindia.shop${path}`
      });
  } else if (path.startsWith('/products')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Products",
          "item": "https://tapeindia.shop/products"
      });
      if (search.includes('category=')) {
          const catId = new URLSearchParams(search).get('category');
          const cat = categories.find(c => c.id === catId);
          if (cat) {
              items.push({
                  "@type": "ListItem",
                  "position": i,
                  "name": cat.name,
                  "item": `https://tapeindia.shop${path}${search}`
              });
          }
      }
  } else if (path.startsWith('/blog/')) {
      items.push({
          "@type": "ListItem",
          "position": i++,
          "name": "Blog",
          "item": "https://tapeindia.shop/blog"
      });
      const articleId = path.replace('/blog/', '');
      const article = articles.find(a => a.id === articleId);
      if(article) {
          items.push({
              "@type": "ListItem",
              "position": i,
              "name": article.title,
              "item": `https://tapeindia.shop${path}`
          });
      }
  } else if (path !== '/' && seoMatchPageName) {
      items.push({
          "@type": "ListItem",
          "position": i,
          "name": seoMatchPageName,
          "item": `https://tapeindia.shop${path}`
      });
  }

  if (items.length > 1) {
      return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items
      };
  }
  return null;
};

export const generateWebsiteSchema = (path: string) => {
    return path === '/' ? {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Tape India",
      "url": "https://tapeindia.shop/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tapeindia.shop/search/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    } : null;
};

export const generateOrganizationSchema = (settings?: any) => {
    const contact = settings?.contact || {
        address: "18, 5th Main Rd, \nNew Colony, \nChromepet, Chennai – 600044",
        phone1: "+91-9876543210",
        phone2: "",
        email: "info@tapeindia.shop"
    };

    const reviewSchema = settings?.testimonials?.length > 0 ? settings.testimonials.map((t: any) => ({
        "@type": "Review",
        "reviewBody": t.quote,
        "author": {
            "@type": "Person",
            "name": t.author
        },
        "itemReviewed": {
            "@type": "Organization",
            "name": "Tape India"
        }
    })) : undefined;

    const addressParts = contact.address.split(',\n');
    const streetAddress = addressParts.length > 1 ? `${addressParts[0]}, ${addressParts[1]}` : contact.address;
    const locality = addressParts.length > 2 ? addressParts[2].split(' – ')[0] : 'Chennai';
    const postalCode = contact.address.match(/\d{6}/)?.[0] || '600044';

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tape India",
        "url": "https://tapeindia.shop",
        "logo": "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png",
        "description": "Tape India is a leading manufacturer and supplier of industrial tapes, providing high-performance adhesive solutions.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+91-${contact.phone1.replace(/[^0-9]/g, '')}`,
            "contactType": "customer service",
            "email": contact.email,
            "areaServed": "IN",
            "availableLanguage": "en"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": streetAddress,
          "addressLocality": locality,
          "postalCode": postalCode,
          "addressCountry": "IN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "10:30",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "10:15",
                "closes": "19:30"
            }
        ],
        "sameAs": [
            settings?.socialLinks?.facebook,
            settings?.socialLinks?.linkedin,
            settings?.socialLinks?.instagram,
            "https://twitter.com/tapeindia"
        ].filter(Boolean),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "37"
        },
        "review": reviewSchema
    };
};

export const generateProductSchema = (product: Product, categoryName: string = "") => {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.seo?.["Meta Description (≤160 chars)"] || product.shortDescription || product.description,
        "image": product.image,
        "sku": product.id,
        "mpn": product.id,
        "category": categoryName,
        "brand": {
            "@type": "Brand",
            "name": product.brand || "Tape India"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Tape India"
        },
        "keywords": product.tags ? product.tags.join(', ') : "",
        "material": product.features?.find(f => f.toLowerCase().includes('material')) || undefined,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": `https://tapeindia.shop/product/${product.id}`,
            "offerCount": "1",
            "price": "0.00" // Optional default, but often required by validators if priceCurrency is provided
        }
    };
};

export const generateCategorySchema = (category: Category, products: Product[]) => {
    const categoryProducts = products.filter(p => p.category === category.id);
    
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": category.name,
        "description": category.description || category.subtitle,
        "url": `https://tapeindia.shop/category/${category.id}`,
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": categoryProducts.length,
            "itemListElement": categoryProducts.map((p, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Product",
                    "name": p.name,
                    "url": `https://tapeindia.shop/product/${p.id}`,
                    "image": p.image
                }
            }))
        }
    };
};

export const generateArticleSchema = (article: BlogArticle) => {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "image": article.image,
        "description": article.summary || article.seo?.["Meta Description (≤160 chars)"],
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "author": {
            "@type": "Organization",
            "name": article.author || "Tape India Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Tape India",
            "logo": {
                "@type": "ImageObject",
                "url": "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://tapeindia.shop/blog/${article.id}`
        },
        "keywords": article.tags ? article.tags.join(', ') : undefined
    };
};

export const generateFAQSchema = (faqs: any[]) => {
    if (!faqs || faqs.length === 0) return null;
    
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.name || faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.acceptedAnswer?.text || faq.answer
            }
        }))
    };
};

