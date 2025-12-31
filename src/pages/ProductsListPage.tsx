

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
    
    const { 
      filteredProducts, 
      pageTitle, 
      pageDescription, 
      pageContent, 
      breadcrumbSchema, 
      pageH1,
      pageSeoData,
    } = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const industryId = searchParams.get('industry');
        const categoryId = searchParams.get('category');
        const searchQuery = searchParams.get('q');
        const tagQuery = searchParams.get('tag'); // Support for strict tag filtering
        
        let prods = products;
        let pageData: Partial<SeoPageData> | undefined;

        if (industryId) {
            const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === industryId);
            
            if (industryDetail) {
                prods = products.filter(p => 
                    industryDetail.products.includes(p.id) || 
                    p.industries?.includes(industryId)
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
            }
        } else if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (category) {
                prods = products.filter(p => p.category === categoryId);
                pageData = seoData.find(p => p.id === categoryId || p["Page Name"] === category.name);
            }
        } else if (tagQuery) {
             // Strict Tag Filtering
             const normalizedTag = tagQuery.toUpperCase().replace(/-/g, ' ');
             prods = products.filter(p => 
                 p.tags?.some(t => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 "Title (≤60 chars)": `${tagQuery.replace(/-/g, ' ')} Tapes | Tape India`,
                 "Meta Description (≤160 chars)": `Explore our range of ${tagQuery.replace(/-/g, ' ')} tapes. High-quality industrial solutions.`,
                 H1: `${tagQuery.replace(/-/g, ' ')} Solutions`,
                 summary: `Browse our curated collection of ${tagQuery.replace(/-/g, ' ')} tapes designed for specific industrial applications.`,
             };
        } else if (searchQuery) {
             const q = searchQuery.toLowerCase();
             prods = products.filter(p => 
                 p.name.toLowerCase().includes(q) || 
                 p.shortDescription.toLowerCase().includes(q) ||
                 p.tags?.some(t => t.toLowerCase().includes(q)) // Search tags too
             );
             pageData = {
                 "Title (≤60 chars)": `Search Results for "${searchQuery}" | Tape India`,
                 "Meta Description (≤160 chars)": `Search results for ${searchQuery} - Tape India`,
                 H1: `Search Results: "${searchQuery}"`,
                 summary: `Showing results for "${searchQuery}"`,
             };
        }

        if (!pageData) {
            pageData = seoData.find(p => p["Page Name"] === "All Products List");
        }

        const title = pageData?.["Title (≤60 chars)"] || 'All Industrial Tapes | Tape India';
        const desc = pageData?.["Meta Description (≤160 chars)"] || 'Browse our complete catalog of industrial tapes.';
        const h1 = pageData?.H1 || 'All Products';
        const content = pageData?.summary || '';
        
        // Breadcrumb Schema
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
    }, [location.search, products, categories]);

    const searchParams = new URLSearchParams(location.search);
    const activeCategory = searchParams.get('category');
    const activeIndustry = searchParams.get('industry');
    const activeTag = searchParams.get('tag');

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

                <div className="container mx-auto px-5 lg:px-8 py-8">
                    {/* Filters */}
                    <AnimatedSection className="mb-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Categories Filter */}
                            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                                <div className="flex gap-2">
                                    <FilterButton 
                                        label="All Products" 
                                        isActive={!activeCategory && !activeIndustry && !activeTag} 
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

                    {/* Products Grid */}
                    <AnimatedSection delay="delay-100">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                                <h3 className="text-xl font-bold text-gray-700">No products found.</h3>
                                <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
                                <Link to="/products" className="mt-4 inline-block text-brand-accent font-semibold hover:underline">
                                    View All Products
                                </Link>
                            </div>
                        )}
                    </AnimatedSection>
                </div>
            </main>
        </>
    );
}
