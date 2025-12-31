
import { useLocation, Link } from 'react-router-dom';
import { useMemo, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INITIAL_INDUSTRIES_DETAILED } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { seoData } from '../data/seoData';
import type { SeoPageData } from '../types';

interface FilterButtonProps {
    label: string;
    isActive: boolean;
    to: string;
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, to }) => {
    return (
        <Link
            to={to}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 whitespace-nowrap border ${
                isActive 
                ? 'bg-brand-accent text-white border-brand-accent shadow' 
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
            }`}
        >
            {label}
        </Link>
    );
}

export default function ProductsListPage() {
    const location = useLocation();
    const { products } = useProducts();
    const { categories } = useCategories();

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);
    
    // 1. Single Source of Truth: Derive state directly from URL
    // Default 'category' to 'all' if missing to satisfy "Default Category State MUST be 'all'"
    const searchParams = new URLSearchParams(location.search);
    const rawCategory = searchParams.get('category');
    const activeCategory = rawCategory || 'all'; 
    const activeIndustry = searchParams.get('industry');
    const activeTag = searchParams.get('tag');
    const searchQuery = searchParams.get('q');

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

        // 3. Products must render ONLY after data exists
        // If products are not loaded yet, return empty (or full list if using optimistic loading)
        // We use 'products' from context which should be populated.
        const availableProducts = products || [];

        // 4. Logic Execution
        if (activeIndustry) {
            const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === activeIndustry);
            if (industryDetail) {
                prods = availableProducts.filter(p => 
                    industryDetail.products.includes(p.id) || 
                    p.industries?.includes(activeIndustry)
                );
                
                pageData = {
                    "Title (≤60 chars)": industryDetail.seo?.title || `${industryDetail.name} | Tape India`,
                    "Meta Description (≤160 chars)": industryDetail.seo?.description || industryDetail.description,
                    H1: industryDetail.name,
                    summary: industryDetail.description,
                    "Page Name": industryDetail.name,
                    "Page Type": "Industry List",
                    "Combined Schema (JSON-LD)": "{}" 
                };
            } else {
                prods = availableProducts; // Fallback
            }
        } else if (activeTag) {
             // Strict Tag Filtering
             const normalizedTag = activeTag.toUpperCase().replace(/-/g, ' ');
             prods = availableProducts.filter(p => 
                 p.tags?.some(t => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 "Title (≤60 chars)": `${activeTag.replace(/-/g, ' ')} Tapes | Tape India`,
                 "Meta Description (≤160 chars)": `Explore our range of ${activeTag.replace(/-/g, ' ')} tapes. High-quality industrial solutions.`,
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
                 summary: `Browse our curated collection of ${activeTag.replace(/-/g, ' ')} tapes designed for specific industrial applications.`,
             };
        } else if (searchQuery) {
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
                 "Title (≤60 chars)": `Search Results for "${searchQuery}" | Tape India`,
                 "Meta Description (≤160 chars)": `Search results for ${searchQuery} - Tape India`,
                 H1: `Search Results: "${searchQuery}"`,
                 summary: `Showing results for "${searchQuery}"`,
             };
        } else {
            // 2. “All Products” MUST be explicitly handled in logic
            // If category is 'all' (default), show ALL products.
            if (activeCategory === 'all') {
                prods = availableProducts;
            } else {
                // Otherwise filter by category
                const category = categories.find(c => c.id === activeCategory);
                if (category) {
                    prods = availableProducts.filter(p => p.category === activeCategory);
                    pageData = seoData.find(p => p.id === activeCategory || p["Page Name"] === category.name);
                } else {
                    // Fallback if category ID is invalid but URL has it
                    prods = availableProducts;
                }
            }
        }

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
                            {pageContent && <p className="text-blue-100 max-w-3xl mx-auto text-lg">{pageContent}</p>}
                        </AnimatedSection>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filters */}
                    <AnimatedSection className="mb-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Categories Filter */}
                            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                                <div className="flex gap-2">
                                    <FilterButton 
                                        label="All Products" 
                                        // Explicit check: Active if category is 'all' AND no other filters are present
                                        isActive={activeCategory === 'all' && !activeIndustry && !activeTag && !searchQuery} 
                                        to="/products?category=all" 
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

                    {/* Products Grid */}
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
                            <div className="text-center py-20">
                                <h3 className="text-xl font-bold text-gray-700">
                                    {products.length === 0 ? 'Loading Products...' : 'No products found.'}
                                </h3>
                                {products.length > 0 && (
                                    <>
                                        <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
                                        <Link to="/products?category=all" className="mt-4 inline-block text-brand-accent font-semibold hover:underline">
                                            View All Products
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </AnimatedSection>
                </div>
            </main>
        </>
    );
}
