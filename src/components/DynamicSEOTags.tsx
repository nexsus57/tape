import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seoData';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useBlog } from '../context/BlogContext';

export default function DynamicSEOTags() {
    const location = useLocation();
    const { products } = useProducts();
    const { categories } = useCategories();
    const { articles } = useBlog();
    
    const path = location.pathname;
    const search = location.search;
    const currentFullUrl = `https://tapeindia.shop${path}${search}`;
    const currentPathUrl = `https://tapeindia.shop${path}`;
    
    // Attempt to match with search (exact match first) or path
    let seoMatch = seoData.find(seo => seo['Full URL'] === currentFullUrl || seo['Full URL'] === currentPathUrl);
    let dynamicImage = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png";

    // Fallback logic for Products
    if (!seoMatch && path.startsWith('/product/')) {
        const productId = path.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
        const p = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
        if (p && p.seo) {
            seoMatch = p.seo;
        }
        if (p && p.image) {
            dynamicImage = p.image;
        }
    }
    
    // Match Images if it's already a product url even if seoMatch was found in seoData
    if (seoMatch && path.startsWith('/product/')) {
        const productId = path.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
        const p = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
        if (p && p.image) dynamicImage = p.image;
    }

    // Fallback logic for Categories
    if (path === '/products' && search.includes('category=')) {
        const catId = new URLSearchParams(search).get('category');
        const cat = categories.find(c => c.id === catId);
        if (cat) {
             if (cat.image) dynamicImage = cat.image;
             if (!seoMatch) {
                seoMatch = {
                    "Page Type": "Category List",
                    "Page Name": cat.name,
                    "Full URL": `https://tapeindia.shop/products?category=${cat.id}`,
                    "Title (≤60 chars)": `${cat.name} Manufacturer & Supplier | Tape India`,
                    "Meta Description (≤160 chars)": (cat.description || cat.subtitle || '').substring(0, 160),
                    "H1": cat.name,
                    "Primary Keywords": cat.name,
                    "Secondary Keywords": "industrial tape, manufacturer",
                    "summary": cat.description || cat.subtitle,
                    "CTA": "Get a Quote",
                    "Schema Type": "CollectionPage",
                    "faqs": [],
                    "Product Schema (JSON-LD)": null,
                    "LocalBusiness Schema (JSON-LD)": "{}",
                    "FAQ Schema (JSON-LD)": "{}",
                    "Combined Schema (JSON-LD)": "{}"
                };
             }
        }
    }

    // Fallback logic for Blog
    if (path.startsWith('/blog/')) {
        const articleId = path.replace('/blog/', '');
        const article = articles.find(a => a.id === articleId);
        if (article) {
            if (article.seo && !seoMatch) seoMatch = article.seo;
            if (article.image) dynamicImage = article.image;
        }
    }

    // Default Fallback
    if (!seoMatch) {
         seoMatch = seoData.find(seo => seo['Page Type'] === 'Homepage');
    }

    if (!seoMatch) return null;

    const title = seoMatch['Title (≤60 chars)'];
    const description = seoMatch['Meta Description (≤160 chars)'];
    const url = seoMatch['Full URL'] || currentFullUrl;
    const siteName = "Tape India";
    // If seoMatch specifies an image property directly, use it, else dynamicImage
    const finalImage = seoMatch['image'] || dynamicImage;
    
    let keywords = "";
    if (seoMatch['Primary Keywords']) {
        keywords += seoMatch['Primary Keywords'];
    }
    if (seoMatch['Secondary Keywords']) {
        keywords += (keywords ? ", " : "") + seoMatch['Secondary Keywords'];
    }

    return (
        <Helmet>
            {/* Standard HTML Tags */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={seoMatch['Schema Type'] === 'Article' ? 'article' : 'website'} />
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={finalImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:domain" content="tapeindia.shop" />
            <meta name="twitter:url" content={url} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={finalImage} />

            {/* Structured Data (JSON-LD) */}
            {seoMatch['Combined Schema (JSON-LD)'] && seoMatch['Combined Schema (JSON-LD)'] !== "{}" ? (
                <script type="application/ld+json">
                    {seoMatch['Combined Schema (JSON-LD)']}
                </script>
            ) : (
                <>
                    {seoMatch['Product Schema (JSON-LD)'] && seoMatch['Product Schema (JSON-LD)'] !== "{}" && (
                        <script type="application/ld+json">
                            {seoMatch['Product Schema (JSON-LD)']}
                        </script>
                    )}
                    {seoMatch['FAQ Schema (JSON-LD)'] && seoMatch['FAQ Schema (JSON-LD)'] !== "{}" && (
                        <script type="application/ld+json">
                            {seoMatch['FAQ Schema (JSON-LD)']}
                        </script>
                    )}
                    {seoMatch['LocalBusiness Schema (JSON-LD)'] && seoMatch['LocalBusiness Schema (JSON-LD)'] !== "{}" && (
                        <script type="application/ld+json">
                            {seoMatch['LocalBusiness Schema (JSON-LD)']}
                        </script>
                    )}
                </>
            )}
        </Helmet>
    );
}
