import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seoData';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useBlog } from '../context/BlogContext';
import { 
    generateBreadcrumbsSchema, 
    generateWebsiteSchema,
    generateOrganizationSchema,
    generateProductSchema,
    generateCategorySchema,
    generateArticleSchema,
    generateFAQSchema
} from '../utils/schemaGenerator';

export default function DynamicSEOTags() {
    const location = useLocation();
    const { products } = useProducts();
    const { categories } = useCategories();
    const { articles } = useBlog();
    
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }
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

    // Fallback logic for Categories (Static and Query)
    if ((path.startsWith('/category/') || (path === '/products' && search.includes('category=')))) {
        const catId = path.startsWith('/category/') ? path.replace('/category/', '') : new URLSearchParams(search).get('category');
        const cat = categories.find(c => c.id === catId);
        if (cat) {
             if (cat.image) dynamicImage = cat.image;
             if (!seoMatch) {
                seoMatch = {
                    "Page Type": "Category List",
                    "Page Name": cat.name,
                    "Full URL": `https://tapeindia.shop/category/${cat.id}`,
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
                } as any;
             }
        }
    } else if (path.startsWith('/industry/') || (path === '/products' && search.includes('industry='))) {
        const indId = path.startsWith('/industry/') ? path.replace('/industry/', '') : new URLSearchParams(search).get('industry');
        // We know INDUSTRIES from constants are used. Let's just create a dynamic match based on ID.
        // We capitalize it simply if we don't have the exact text.
        const indName = indId ? indId.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Industry';
        if (!seoMatch) {
            seoMatch = {
                "Page Type": "Industry List",
                "Page Name": `${indName} Solutions`,
                "Full URL": `https://tapeindia.shop/industry/${indId}`,
                "Title (≤60 chars)": `${indName} Tapes & Solutions | Tape India`,
                "Meta Description (≤160 chars)": `Explore our range of industrial tapes specialized for the ${indName} sector. High-performance adhesive solutions from Tape India.`,
                "H1": `${indName} Solutions`,
                "Primary Keywords": indName,
                "Secondary Keywords": "industrial tape",
                "Schema Type": "CollectionPage",
                "faqs": []
            } as any;
        }
    } else if (path.startsWith('/tag/') || (path === '/products' && search.includes('tag='))) {
        const tag = path.startsWith('/tag/') ? path.replace('/tag/', '') : new URLSearchParams(search).get('tag') || '';
        const tagName = tag.replace(/-/g, ' ');
        if (!seoMatch) {
             seoMatch = {
                "Page Type": "Tag List",
                "Page Name": `${tagName} Tapes`,
                "Full URL": `https://tapeindia.shop/tag/${tag}`,
                "Title (≤60 chars)": `${tagName} Tapes | Tape India`,
                "Meta Description (≤160 chars)": `High-performance ${tagName} tapes designed for industrial applications. Shop online at Tape India.`,
                "H1": `${tagName} Solutions`,
                "Schema Type": "CollectionPage",
                "faqs": []
            } as any;
        }
    } else if (path.startsWith('/search/') || (path === '/products' && search.includes('q='))) {
        const q = path.startsWith('/search/') ? decodeURIComponent(path.replace('/search/', '')) : new URLSearchParams(search).get('q') || '';
        if (!seoMatch) {
             seoMatch = {
                "Page Type": "Search results",
                "Page Name": `Search Results for "${q}"`,
                "Full URL": `https://tapeindia.shop/search/${encodeURIComponent(q)}`,
                "Title (≤60 chars)": `Search: ${q} | Tape India`,
                "Meta Description (≤160 chars)": `Search results for ${q} at Tape India.`,
                "H1": `Search Results for ${q}`,
                "Schema Type": "CollectionPage",
                "faqs": []
            } as any;
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

    if (!seoMatch) {
        console.log('NO SEO MATCH EVEN FALLBACK FOR PATH:', path);
        return null;
    }

    const title = seoMatch['Title (≤60 chars)'];
    const description = seoMatch['Meta Description (≤160 chars)'];
    
    // --- PRODUCTION-GRADE DETERMINISTIC CANONICAL ALIGNMENT ---
    // Rule 1: Always enforce absolute HTTPS with tapeindia.shop domain
    // Rule 2: Remove trailing slash from all URLs EXCEPT the root home page "/"
    let canonicalPath = path;
    if (canonicalPath.endsWith('/') && canonicalPath.length > 1) {
        canonicalPath = canonicalPath.slice(0, -1);
    }
    
    let url = `https://tapeindia.shop${canonicalPath}`;
    
    // Rule 3: Map any dynamic path variations or query strings (e.g. products?category=...)
    // back to their single, authoritative, indexable, clean canonical URL.
    if (canonicalPath.startsWith('/category/')) {
        const catId = canonicalPath.replace('/category/', '').toLowerCase();
        url = `https://tapeindia.shop/category/${catId}`;
    } else if (canonicalPath === '/products' && search.includes('category=')) {
        const catId = new URLSearchParams(search).get('category')?.toLowerCase();
        if (catId) {
            url = `https://tapeindia.shop/category/${catId}`;
        }
    } else if (canonicalPath.startsWith('/industry/')) {
        const indId = canonicalPath.replace('/industry/', '').toLowerCase();
        url = `https://tapeindia.shop/industry/${indId}`;
    } else if (canonicalPath === '/products' && search.includes('industry=')) {
        const indId = new URLSearchParams(search).get('industry')?.toLowerCase();
        if (indId) {
            url = `https://tapeindia.shop/industry/${indId}`;
        }
    } else if (canonicalPath.startsWith('/tag/')) {
        const tagId = canonicalPath.replace('/tag/', '').toLowerCase();
        url = `https://tapeindia.shop/tag/${tagId}`;
    } else if (canonicalPath === '/products' && search.includes('tag=')) {
        const tagId = new URLSearchParams(search).get('tag')?.toLowerCase();
        if (tagId) {
            url = `https://tapeindia.shop/tag/${tagId}`;
        }
    } else if (canonicalPath.startsWith('/product/')) {
        const prodId = canonicalPath.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
        url = `https://tapeindia.shop/product/${prodId}`;
    } else if (canonicalPath.startsWith('/blog/')) {
        const articleId = canonicalPath.replace('/blog/', '').toLowerCase();
        url = `https://tapeindia.shop/blog/${articleId}`;
    }

    // Rule 4: Apply indexing safeguards (noindex, nofollow) for search queries,
    // parameter-rich, staging/dev, and thin URLs to protect Google crawl-trust.
    const isNoIndex = 
        canonicalPath.startsWith('/search/') || 
        search.includes('q=') || 
        canonicalPath.startsWith('/admin') ||
        (search && !search.includes('category=') && !search.includes('industry=') && !search.includes('tag='));

    console.log('DynamicSEOTags canonical formulation:', url, 'noindex:', isNoIndex);

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

    const breadcrumbsSchema = generateBreadcrumbsSchema(
        path, 
        search, 
        products, 
        categories, 
        articles, 
        seoMatch['Page Name'] || title
    );

    const websiteSchema = generateWebsiteSchema(path);
    const organizationSchema = path === '/' ? generateOrganizationSchema() : null;
    const faqSchema = seoMatch.faqs && seoMatch.faqs.length > 0 ? generateFAQSchema(seoMatch.faqs) : null;

    let productSchema = null;
    if (path.startsWith('/product/')) {
        const productId = path.replace('/product/', '').toLowerCase().replace(/[^a-z0-9-]+/g, '');
        const p = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
        if (p) {
            const cat = categories.find(c => c.id === p.category);
            productSchema = generateProductSchema(p, cat ? cat.name : "");
        }
    }

    let categorySchema = null;
    if (path.startsWith('/category/') || (path === '/products' && search.includes('category='))) {
        const catId = path.startsWith('/category/') ? path.replace('/category/', '') : new URLSearchParams(search).get('category');
        const cat = categories.find(c => c.id === catId);
        if (cat) {
             categorySchema = generateCategorySchema(cat, products);
        }
    }

    let articleSchema = null;
    if (path.startsWith('/blog/')) {
        const articleId = path.replace('/blog/', '');
        const article = articles.find(a => a.id === articleId);
        if (article) {
             articleSchema = generateArticleSchema(article);
        }
    }

    return (
        <Helmet prioritizeSeoTags={true}>
            {/* Standard HTML Tags */}
            {isNoIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}
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

            {/* Canonical Link */}
            <link rel="canonical" href={url} />

            {/* Dynamic Structured Data (JSON-LD) */}
            
            {breadcrumbsSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbsSchema)}
                </script>
            )}

            {websiteSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(websiteSchema)}
                </script>
            )}

            {organizationSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            )}

            {productSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>
            )}

            {categorySchema && (
                <script type="application/ld+json">
                    {JSON.stringify(categorySchema)}
                </script>
            )}

            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}

            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
        </Helmet>
    );
}


