
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useMemo, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INITIAL_INDUSTRIES_DETAILED, PRODUCTS as STATIC_PRODUCTS, INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';
import AnimatedSection from '../components/AnimatedSection';
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
        ? 'bg-brand-blue-deep text-white border-brand-blue-deep shadow-md ring-2 ring-brand-blue-deep/20'
        : 'bg-brand-accent text-white border-brand-accent shadow-md ring-2 ring-brand-accent/20';
    
    const inactiveClass = 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900';

    return (
        <Link
            to={to}
            className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap border flex-shrink-0 ${
                isActive ? activeClass : inactiveClass
            }`}
        >
            {label}
        </Link>
    );
}

export default function ProductsListPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { products: contextProducts } = useProducts();
    const { categories } = useCategories();

    // 1. IMMEDIATE RENDER FIX: Use static products as fallback immediately.
    const products = (contextProducts && contextProducts.length > 0) ? contextProducts : (STATIC_PRODUCTS as any[]);

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);
    
    const searchParams = new URLSearchParams(location.search);
    const activeCategory = searchParams.get('category'); 
    const activeIndustry = searchParams.get('industry');
    const activeTag = searchParams.get('tag');
    const searchQuery = searchParams.get('q');

    // "All Products" is active if no specific category is set (or explicitly 'all')
    const isAllCategoriesActive = !activeCategory || activeCategory === 'all';
    
    // "All Industries" is active if no specific industry is set.
    const isAllIndustriesActive = !activeIndustry;

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

        // Ensure we have a pool of products to filter
        const availableProducts = products || [];

        if (activeIndustry) {
            // Industry Filter
            const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === activeIndustry);
            if (industryDetail) {
                // Filter by industry first
                prods = availableProducts.filter(p => 
                    industryDetail.products.includes(p.id) || 
                    p.industries?.includes(activeIndustry)
                );
                
                // If category is also active, filter further (Intersection)
                if (activeCategory && activeCategory !== 'all') {
                    prods = prods.filter(p => p.category === activeCategory);
                }
                
                pageData = {
                    "Title (≤60 chars)": industryDetail.seo?.title || `${industryDetail.name} Solutions | Tape India`,
                    "Meta Description (≤160 chars)": industryDetail.seo?.description || `Explore our range of tapes specialized for the ${industryDetail.name}.`,
                    H1: `${industryDetail.name} Solutions`,
                    summary: industryDetail.description,
                };
            } else {
                prods = availableProducts.filter(p => p.industries?.includes(activeIndustry));
                if (activeCategory && activeCategory !== 'all') {
                    prods = prods.filter(p => p.category === activeCategory);
                }
                const simpleInd = INDUSTRIES.find(i => i.id === activeIndustry);
                pageData = {
                    H1: simpleInd ? `${simpleInd.name} Tapes` : 'Industry Products',
                }
            }
        } else if (activeCategory && activeCategory !== 'all') {
            // Category Filter Only (No Industry)
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
                 const looseMatch = q.length > 3 && p.name.toLowerCase().includes(q);
                 
                 return nameMatch || looseMatch;
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

    // Helper to generate URL for "All Industries" button (preserves category if set)
    const allIndustriesUrl = useMemo(() => {
        if (activeCategory && activeCategory !== 'all') {
            return `/products?category=${activeCategory}`;
        }
        return '/products';
    }, [activeCategory]);

    // Helper to generate URL for "All Products" (Categories) button (preserves industry if set)
    const allCategoriesUrl = useMemo(() => {
        if (activeIndustry) {
            return `/products?industry=${activeIndustry}`;
        }
        return '/products?category=all';
    }, [activeIndustry]);

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

                {/* STICKY FILTER BAR */}
                <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        
                        {/* ROW 1: CATEGORIES */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap md:w-20 pt-2 md:pt-0">Categories</span>
                            <div className="flex items-center gap-2 overflow-x-auto w-full md:flex-wrap md:justify-start hide-scrollbar pb-1">
                                <FilterButton 
                                    label="All Products" 
                                    isActive={isAllCategoriesActive} 
                                    to={allCategoriesUrl} 
                                />
                                {categories.map(cat => (
                                    <FilterButton 
                                        key={cat.id} 
                                        label={cat.name} 
                                        isActive={activeCategory === cat.id} 
                                        to={`/products?category=${cat.id}${activeIndustry ? `&industry=${activeIndustry}` : ''}`} 
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ROW 2: INDUSTRIES */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 border-t border-gray-100 pt-4 md:border-none md:pt-0">
                            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap md:w-20 pt-2 md:pt-0">Industries</span>
                            <div className="flex items-center gap-2 overflow-x-auto w-full md:flex-wrap md:justify-start hide-scrollbar pb-1">
                                <FilterButton 
                                    label="All Industries" 
                                    isActive={isAllIndustriesActive} 
                                    to={allIndustriesUrl}
                                    variant="industry"
                                />
                                {INDUSTRIES.map(ind => (
                                    <FilterButton 
                                        key={ind.id} 
                                        label={ind.name} 
                                        isActive={activeIndustry === ind.id} 
                                        to={`/products?industry=${ind.id}${activeCategory ? `&category=${activeCategory}` : ''}`}
                                        variant="industry"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* PRODUCT GRID - Immediate rendering (no Animation delay) */}
                    <div className="min-h-[50vh]">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 animate-fade-in">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        categoryName={categoryMap.get(product.category) || ''} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                    <i className="fas fa-search text-gray-400 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-700">
                                    {products.length === 0 ? 'Loading Products...' : 'No products found'}
                                </h3>
                                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                    We couldn't find any products matching your selection. Try clearing filters.
                                </p>
                                <Link to="/products?category=all" className="mt-6 inline-block bg-brand-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-accent-dark transition-colors">
                                    Clear Filters
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
