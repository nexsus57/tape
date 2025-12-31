
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useMemo, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INITIAL_INDUSTRIES_DETAILED, PRODUCTS as STATIC_PRODUCTS, INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { seoData } from '../data/seoData';
import type { SeoPageData } from '../types';

interface FilterButtonProps {
    label: string;
    isActive: boolean;
    to: string;
    variant?: 'default' | 'industry';
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, to, variant = 'default' }) => {
    const activeClass = variant === 'industry' 
        ? 'bg-brand-blue-deep text-white border-brand-blue-deep shadow-md' 
        : 'bg-brand-accent text-white border-brand-accent shadow-md';
    
    const inactiveClass = 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400';

    return (
        <Link
            to={to}
            className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap border flex-shrink-0 ${
                isActive ? activeClass : inactiveClass
            }`}
        >
            {label}
        </Link>
    );
}

export default function ProductsListPage() {
    const location = useLocation();
    const { products: contextProducts } = useProducts();
    const { categories } = useCategories();

    // 1. IMMEDIATE RENDER FIX: Use static products as fallback if context is hydrating.
    // This ensures the page is NEVER blank on first load.
    const products = contextProducts.length > 0 ? contextProducts : (STATIC_PRODUCTS as any[]);

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);
    
    const searchParams = new URLSearchParams(location.search);
    const rawCategory = searchParams.get('category');
    const activeCategory = rawCategory; 
    const activeIndustry = searchParams.get('industry');
    const activeTag = searchParams.get('tag');
    const searchQuery = searchParams.get('q');

    // Determine if we are in "All" mode (no specific filters active)
    const isAllActive = !activeCategory && !activeIndustry && !activeTag && !searchQuery;

    const { 
      filteredProducts, 
      pageTitle, 
      pageDescription, 
      pageContent, 
      breadcrumbSchema, 
      pageH1,
      pageSeoData,
    } = useMemo(() => {
        let prods = [];
        let pageData: Partial<SeoPageData> | undefined;

        // Base pool of products
        const availableProducts = products || [];

        // --- FILTERING LOGIC ---
        
        if (activeIndustry) {
            // Industry Filter
            const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === activeIndustry);
            if (industryDetail) {
                prods = availableProducts.filter(p => 
                    industryDetail.products.includes(p.id) || 
                    p.industries?.includes(activeIndustry)
                );
                
                pageData = {
                    "Title (≤60 chars)": industryDetail.seo?.title || `${industryDetail.name} Solutions | Tape India`,
                    "Meta Description (≤160 chars)": industryDetail.seo?.description || `Explore our range of tapes specialized for the ${industryDetail.name}.`,
                    H1: `${industryDetail.name} Solutions`,
                    summary: industryDetail.description,
                };
            } else {
                // Fallback if industry ID not found in details but exists in URL
                prods = availableProducts.filter(p => p.industries?.includes(activeIndustry));
                const simpleInd = INDUSTRIES.find(i => i.id === activeIndustry);
                pageData = {
                    H1: simpleInd ? `${simpleInd.name} Tapes` : 'Industry Products',
                }
            }
        } else if (activeCategory && activeCategory !== 'all') {
            // Category Filter
            const category = categories.find(c => c.id === activeCategory);
            prods = availableProducts.filter(p => p.category === activeCategory);
            
            if (category) {
                pageData = seoData.find(p => p.id === activeCategory || p["Page Name"] === category.name);
            }
        } else if (activeTag) {
             // Tag Filter
             const normalizedTag = activeTag.toUpperCase().replace(/-/g, ' ');
             prods = availableProducts.filter(p => 
                 p.tags?.some(t => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
                 "Title (≤60 chars)": `${activeTag.replace(/-/g, ' ')} Tapes | Tape India`,
             };
        } else if (searchQuery) {
             // Search Filter
             const q = searchQuery.trim().toLowerCase();
             const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
             const regex = new RegExp(`\\b${safeQ}\\b`, 'i');

             prods = availableProducts.filter(p => {
                 const hasTagMatch = p.tags?.some(t => t.toLowerCase().includes(q));
                 if (hasTagMatch) return true;
                 const nameMatch = regex.test(p.name);
                 const descMatch = regex.test(p.shortDescription);
                 const looseMatch = q.length > 3 && (p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q));
                 return nameMatch || descMatch || looseMatch;
             });

             pageData = {
                 H1: `Search Results: "${searchQuery}"`,
                 "Title (≤60 chars)": `Search: ${searchQuery} | Tape India`,
             };
        } else {
            // Default: Show All
            prods = availableProducts;
        }

        // Fallback SEO Data
        if (!pageData) {
            pageData = seoData.find(p => p["Page Name"] === "All Products List");
        }

        const title = pageData?.["Title (≤60 chars)"] || 'All Industrial Tapes | Tape India';
        const desc = pageData?.["Meta Description (≤160 chars)"] || 'Browse our complete catalog of industrial tapes.';
        const h1 = pageData?.H1 || 'All Products';
        const content = pageData?.summary || '';
        
        const breadcrumbList = [
             { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tapeindia.shop/" },
             { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://tapeindia.shop/products" }
        ];
        
        const bcSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbList
        };

        return {
            filteredProducts: prods,
            pageTitle: title,
            pageDescription: desc,
            pageContent: content,
            breadcrumbSchema: JSON.stringify(bcSchema),
            pageH1: h1,
            pageSeoData: pageData
        };
    }, [activeCategory, activeIndustry, activeTag, searchQuery, products, categories]);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <script type="application/ld+json">{breadcrumbSchema}</script>
                {pageSeoData && pageSeoData["Combined Schema (JSON-LD)"] && (
                    <script type="application/ld+json">{pageSeoData["Combined Schema (JSON-LD)"]}</script>
                )}
            </Helmet>
            <CanonicalTag />

            <main className="bg-gray-50 min-h-screen">
                <div className="bg-brand-blue-deep text-white py-12 md:py-16">
                    <div className="container mx-auto px-5 lg:px-8 text-center">
                        <AnimatedSection>
                            <h1 className="font-extrabold mb-4 text-white capitalize">{pageH1}</h1>
                            {pageContent && <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">{pageContent}</p>}
                        </AnimatedSection>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    
                    {/* --- FILTER BARS --- */}
                    <AnimatedSection className="space-y-8 mb-12">
                        
                        {/* 1. Industry View Bar */}
                        <div className="w-full">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Browse by Industry</h3>
                            <div className="w-full overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
                                <div className="flex flex-nowrap md:flex-wrap gap-3 md:justify-center">
                                    <FilterButton 
                                        label="All Industries" 
                                        isActive={isAllActive} 
                                        to="/products"
                                        variant="industry"
                                    />
                                    {INDUSTRIES.map(ind => (
                                        <FilterButton 
                                            key={ind.id} 
                                            label={ind.name} 
                                            isActive={activeIndustry === ind.id} 
                                            to={`/products?industry=${ind.id}`}
                                            variant="industry"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. Category View Bar */}
                        <div className="w-full border-t border-gray-200 pt-6">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Browse by Category</h3>
                            <div className="w-full overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
                                <div className="flex flex-nowrap md:flex-wrap gap-3 md:justify-center">
                                    <FilterButton 
                                        label="All Categories" 
                                        isActive={isAllActive} 
                                        to="/products" 
                                    />
                                    {categories.map(cat => (
                                        <FilterButton 
                                            key={cat.id} 
                                            label={cat.name} 
                                            isActive={activeCategory === cat.id} 
                                            to={`/products?category=${cat.id}`} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </AnimatedSection>

                    {/* --- PRODUCT GRID --- */}
                    <AnimatedSection delay="delay-100">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        categoryName={categoryMap.get(product.category) || ''} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                    <i className="fas fa-search text-gray-400 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-700">
                                    {products.length === 0 ? 'Loading Products...' : 'No products found'}
                                </h3>
                                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                    We couldn't find any products matching your selection. Try selecting "All Industries" or "All Categories".
                                </p>
                                <Link to="/products" className="mt-6 inline-block bg-brand-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-accent-dark transition-colors">
                                    Clear Filters
                                </Link>
                            </div>
                        )}
                    </AnimatedSection>
                </div>
            </main>
        </>
    );
}
