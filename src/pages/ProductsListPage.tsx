
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useMemo, FC, useState, useEffect } from 'react';
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
    onClick: () => void;
    variant?: 'default' | 'industry';
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, onClick, variant = 'default' }) => {
    const activeClass = variant === 'industry'
        ? 'bg-brand-blue-deep text-white border-brand-blue-deep shadow-md'
        : 'bg-brand-accent text-white border-brand-accent shadow-md';
    
    const inactiveClass = 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50';

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap border flex-shrink-0 ${
                isActive ? activeClass : inactiveClass
            }`}
        >
            {label}
        </button>
    );
}

const ProductSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
    <div className="bg-gray-100 aspect-[4/3] w-full rounded-t-xl"></div>
    <div className="p-5 space-y-3 flex-grow">
        <div className="h-3 bg-gray-100 rounded w-1/4"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
        <div className="flex gap-2 mt-4">
            <div className="h-6 bg-gray-100 rounded w-16"></div>
            <div className="h-6 bg-gray-100 rounded w-16"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
    </div>
  </div>
);

const COMMON_USE_CASES = [
    { label: 'High Heat', tag: 'High Temperature' },
    { label: 'Waterproof', tag: 'Waterproof' },
    { label: 'Electrical', tag: 'Insulation' },
    { label: 'Anti-Slip', tag: 'Anti-Slip' },
    { label: 'Packaging', tag: 'Packaging' },
    { label: 'EMI Shielding', tag: 'EMI' },
];

export default function ProductsListPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { products: contextProducts } = useProducts();
    const { categories } = useCategories();
    const [isLoading, setIsLoading] = useState(true);
    const [isIndustrySheetOpen, setIsIndustrySheetOpen] = useState(false);

    const products = (contextProducts && contextProducts.length > 0) ? contextProducts : (STATIC_PRODUCTS as any[]);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, [location.search]);

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);
    
    const searchParams = new URLSearchParams(location.search);
    const activeCategory = searchParams.get('category'); 
    const activeIndustry = searchParams.get('industry');
    const activeTag = searchParams.get('tag');
    const searchQuery = searchParams.get('q');

    const handleFilterChange = (key: string, value: string | null) => {
        const newParams = new URLSearchParams(location.search);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        navigate({ search: newParams.toString() });
        if (key === 'industry') setIsIndustrySheetOpen(false);
    };

    const clearAllFilters = () => {
        navigate({ search: '' });
        setIsIndustrySheetOpen(false);
    };

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

        const availableProducts = products || [];

        if (activeIndustry) {
            const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === activeIndustry);
            if (industryDetail) {
                prods = availableProducts.filter(p => 
                    industryDetail.products.includes(p.id) || 
                    p.industries?.includes(activeIndustry)
                );
                
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
            const category = categories.find(c => c.id === activeCategory);
            prods = availableProducts.filter(p => p.category === activeCategory);
            
            if (category) {
                pageData = seoData.find(p => p.id === activeCategory || p["Page Name"] === category.name);
            }
        } else if (activeTag) {
             const normalizedTag = activeTag.toUpperCase().replace(/-/g, ' ');
             prods = availableProducts.filter(p => 
                 p.tags?.some(t => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
                 "Title (≤60 chars)": `${activeTag.replace(/-/g, ' ')} Tapes | Tape India`,
             };
        } else if (searchQuery) {
             const q = searchQuery.trim().toLowerCase();
             // Escape special regex characters
             const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
             const regex = new RegExp(safeQ, 'i');

             prods = availableProducts.filter(p => {
                 // Check Tags
                 if (p.tags?.some(t => t.toLowerCase().includes(q))) return true;
                 // Check Name
                 if (regex.test(p.name)) return true;
                 // Check Uses/Applications
                 if (p.uses?.some(u => u.toLowerCase().includes(q))) return true;
                 // Check Category Name (loose match)
                 if (p.category.includes(q)) return true;
                 
                 // Fallback: Check if description contains the word
                 if (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) return true;

                 return false;
             });

             pageData = {
                 H1: `Search Results: "${searchQuery}"`,
                 "Title (≤60 chars)": `Search: ${searchQuery} | Tape India`,
             };
        } else {
            prods = availableProducts;
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
            <CanonicalTag />

            <main className="bg-gray-50 min-h-screen pb-20">
                {/* Mobile Header Title */}
                <div className="bg-white border-b border-gray-100 py-4 px-4 lg:hidden">
                    <h1 className="text-xl font-extrabold text-brand-blue-dark">{pageH1}</h1>
                    {activeIndustry || activeTag ? (
                        <button onClick={clearAllFilters} className="text-xs text-brand-accent mt-1 font-medium">Clear Filters</button>
                    ) : null}
                </div>

                {/* Desktop Hero */}
                <div className="hidden lg:block bg-brand-blue-deep text-white py-12 md:py-16">
                    <div className="container mx-auto px-5 lg:px-8 text-center">
                        <AnimatedSection>
                            <h1 className="font-extrabold mb-4 text-white capitalize">{pageH1}</h1>
                            {pageContent && <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">{pageContent}</p>}
                        </AnimatedSection>
                    </div>
                </div>

                {/* Sticky Filter Bar (Desktop) */}
                <div className="hidden lg:block sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap w-20">Categories</span>
                            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                                <FilterButton 
                                    label="All Products" 
                                    isActive={!activeCategory || activeCategory === 'all'} 
                                    onClick={() => handleFilterChange('category', null)} 
                                />
                                {categories.map(cat => (
                                    <FilterButton 
                                        key={cat.id} 
                                        label={cat.name} 
                                        isActive={activeCategory === cat.id} 
                                        onClick={() => handleFilterChange('category', cat.id)} 
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap w-20">Industries</span>
                            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                                <FilterButton 
                                    label="All Industries" 
                                    isActive={!activeIndustry} 
                                    onClick={() => handleFilterChange('industry', null)}
                                    variant="industry"
                                />
                                {INDUSTRIES.map(ind => (
                                    <FilterButton 
                                        key={ind.id} 
                                        label={ind.name} 
                                        isActive={activeIndustry === ind.id} 
                                        onClick={() => handleFilterChange('industry', ind.id)}
                                        variant="industry"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE FILTERS STRUCTURE */}
                <div className="lg:hidden sticky top-[115px] z-20 bg-gray-50/95 backdrop-blur-sm border-b border-gray-200 shadow-sm pt-2 pb-2">
                    <div className="px-4 space-y-3">
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                            <button 
                                onClick={() => handleFilterChange('category', null)}
                                className={`px-3 py-1.5 text-xs font-bold rounded-full whitespace-nowrap border ${!activeCategory || activeCategory === 'all' ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white text-gray-600 border-gray-200'}`}
                            >
                                All
                            </button>
                            {categories.map(cat => (
                                <button 
                                    key={cat.id}
                                    onClick={() => handleFilterChange('category', cat.id)}
                                    className={`px-3 py-1.5 text-xs font-bold rounded-full whitespace-nowrap border ${activeCategory === cat.id ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white text-gray-600 border-gray-200'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center gap-4">
                            <button 
                                onClick={() => setIsIndustrySheetOpen(true)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${activeIndustry ? 'bg-brand-blue-deep text-white shadow-md' : 'bg-white text-gray-700 border border-gray-200 shadow-sm'}`}
                            >
                                <i className="fas fa-filter"></i>
                                {activeIndustry ? INDUSTRIES.find(i => i.id === activeIndustry)?.name : 'Filter by Industry'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* "What are you trying to solve?" - Use Case Chips */}
                <div className="lg:hidden px-4 py-4 bg-gray-50">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">What are you trying to solve?</p>
                    <div className="flex flex-wrap gap-2">
                        {COMMON_USE_CASES.map(useCase => (
                            <button
                                key={useCase.tag}
                                onClick={() => handleFilterChange('tag', useCase.tag)}
                                className={`px-3 py-1 text-xs font-medium rounded border ${activeTag === useCase.tag ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-500 border-gray-200'}`}
                            >
                                {useCase.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Industry Bottom Sheet (Mobile) */}
                {isIndustrySheetOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsIndustrySheetOpen(false)}></div>
                        <div className="relative bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto animate-slide-up shadow-2xl">
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <h3 className="text-lg font-bold text-gray-800">Select Industry</h3>
                                <button onClick={() => setIsIndustrySheetOpen(false)} className="text-gray-500 text-2xl">&times;</button>
                            </div>
                            <div className="p-4 space-y-2">
                                <button 
                                    onClick={() => handleFilterChange('industry', null)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium ${!activeIndustry ? 'bg-blue-50 text-brand-accent' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    All Industries
                                </button>
                                {INDUSTRIES.map(ind => (
                                    <button 
                                        key={ind.id}
                                        onClick={() => handleFilterChange('industry', ind.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 ${activeIndustry === ind.id ? 'bg-blue-50 text-brand-accent' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${ind.gradientClasses}`}></div>
                                        {ind.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* PRODUCT GRID */}
                    <div className="min-h-[50vh]">
                        {isLoading ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                                {[1, 2, 3, 4, 5, 6].map(i => <ProductSkeleton key={i} />)}
                            </div>
                        ) : filteredProducts.length > 0 ? (
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
                                <p className="text-gray-500 mt-2 max-w-md mx-auto px-4">
                                    We couldn't find any products matching your selection. Try clearing filters or using broader terms.
                                </p>
                                <button onClick={clearAllFilters} className="mt-6 inline-block bg-brand-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-accent-dark transition-colors">
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
