
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INITIAL_INDUSTRIES_DETAILED, PRODUCTS as STATIC_PRODUCTS, INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';
import AnimatedSection from '../components/AnimatedSection';
import { seoData } from '../data/seoData';
import type { SeoPageData } from '../types';
import { INDUSTRY_ICONS_MAP } from '../components/icons/IndustryIcons';
import { useSeoEnhancedContent } from '../hooks/useSeoEnhancedContent';

const ProductSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full animate-pulse">
    <div className="bg-slate-50/50 aspect-[4/3] w-full rounded-t-2xl border-b border-gray-100"></div>
    <div className="p-6 space-y-4 flex-grow">
        <div className="h-3 bg-slate-100 rounded-full w-1/4"></div>
        <div className="h-5 bg-slate-100 rounded-full w-3/4"></div>
        <div className="h-4 bg-slate-50 rounded-full w-1/2"></div>
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
            <div className="h-10 bg-slate-100 rounded-lg w-full mt-4"></div>
        </div>
    </div>
  </div>
);

export default function ProductsListPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const { products: contextProducts } = useProducts();
    const { categories } = useCategories();
    const [isLoading, setIsLoading] = useState(true);

    const products = (contextProducts && contextProducts.length > 0) ? contextProducts : (STATIC_PRODUCTS as any[]);

    const searchParams = new URLSearchParams(location.search);
    const activeCategoryParam = searchParams.get('category') || searchParams.get('categories'); 
    const activeIndustryParam = searchParams.get('industry') || searchParams.get('industries');
    const activeTag = params.tagId || searchParams.get('tag');
    const searchQuery = params.searchQuery || searchParams.get('q');
    
    // Support parsing multiple values like ?category=c1,c2
    const activeCategories = useMemo(() => {
        if (activeCategoryParam) return activeCategoryParam.split(',');
        if (params.categoryId) return [params.categoryId];
        return [];
    }, [activeCategoryParam, params.categoryId]);

    const activeIndustries = useMemo(() => {
        if (activeIndustryParam) return activeIndustryParam.split(',');
        if (params.industryId) return [params.industryId];
        return [];
    }, [activeIndustryParam, params.industryId]);

    // SEO Redirect Logic: We remove the auto-redirects for category/industry 
    // to allow query params to work alongside or multi-select without forcing 
    // a redirect to a single path. We keep them for tag/q as fallback.
    useEffect(() => {
        if (searchParams.has('tag') && !params.tagId) {
            const tag = searchParams.get('tag');
            navigate(`/tag/${tag}`, { replace: true });
        } else if (searchParams.has('q') && !params.searchQuery) {
            const q = searchParams.get('q');
            navigate(`/search/${q}`, { replace: true });
        }
    }, [location.search, navigate, searchParams, params.tagId, params.searchQuery]);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, [location.pathname, location.search]);

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);

    const clearAllFilters = () => {
        navigate('/products');
    };

    const { 
      filteredProducts, 
      pageContent, 
      pageH1,
    } = useMemo(() => {
        let prods = products || [];
        let pageData: Partial<SeoPageData> | undefined;

        if (activeIndustries.length > 0 || (activeCategories.length > 0 && !activeCategories.includes('all'))) {
            prods = prods.filter(p => {
                const matchesIndustry = activeIndustries.length === 0 || activeIndustries.some(ind => {
                    const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === ind);
                    if (industryDetail) {
                        return industryDetail.products.includes(p.id) || p.industries?.includes(ind);
                    }
                    return p.industries?.includes(ind);
                });
                const matchesCategory = activeCategories.length === 0 || activeCategories.includes('all') || activeCategories.includes(p.category);
                
                return matchesIndustry && matchesCategory;
            });

            if (activeIndustries.length === 1 && activeCategories.length === 0) {
                const ind = activeIndustries[0];
                const industryDetail = INITIAL_INDUSTRIES_DETAILED.find(i => i.id === ind);
                if (industryDetail) {
                    pageData = {
                        "Title (≤60 chars)": industryDetail.seo?.title || `${industryDetail.name} Solutions | Tape India`,
                        "Meta Description (≤160 chars)": industryDetail.seo?.description || `Explore our range of tapes specialized for the ${industryDetail.name}.`,
                        H1: `${industryDetail.name} Solutions`,
                        summary: industryDetail.description,
                    };
                } else {
                    const simpleInd = INDUSTRIES.find(i => i.id === ind);
                    pageData = {
                        H1: simpleInd ? `${simpleInd.name} Tapes` : 'Industry Products',
                    };
                }
            } else if (activeCategories.length === 1 && activeIndustries.length === 0) {
                const cat = activeCategories[0];
                const category = categories.find(c => c.id === cat);
                if (category) {
                    pageData = seoData.find(p => p.id === cat || p["Page Name"] === category.name);
                    if (!pageData) {
                        pageData = { H1: category.name, summary: category.description || category.subtitle };
                    }
                }
            } else {
                pageData = { H1: 'Filtered Products' };
            }
        } else if (activeTag) {
             const normalizedTag = activeTag.toUpperCase().replace(/-/g, ' ');
             prods = prods.filter(p => 
                 p.tags?.some((t: string) => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
             };
        } else if (searchQuery) {
             const q = searchQuery.trim().toLowerCase();
             const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
             const regex = new RegExp(safeQ, 'i');

             prods = prods.filter(p => {
                 if (p.tags?.some((t: string) => t.toLowerCase().includes(q))) return true;
                 if (regex.test(p.name)) return true;
                 if (p.uses?.some((u: string) => u.toLowerCase().includes(q))) return true;
                 if (p.category.includes(q)) return true;
                 if (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) return true;
                 return false;
             });

             pageData = {
                 H1: `Search Results: "${searchQuery}"`,
             };
        } else {
            prods = prods;
        }

        if (!pageData) {
            pageData = seoData.find(p => p["Page Name"] === "All Products List");
        }

        return {
            filteredProducts: prods,
            pageContent: pageData?.summary || '',
            pageH1: pageData?.H1 || 'All Products',
        };
    }, [activeCategories, activeIndustries, activeTag, searchQuery, products, categories]);

    const { enhancedContent: enhancedPageContent } = useSeoEnhancedContent(pageContent);
    const { enhancedContent: enhancedCategoryText } = useSeoEnhancedContent(
        `Welcome to the ${pageH1} section of Tape India's comprehensive product catalog. As a pioneering manufacturer and B2B supplier of advanced adhesive solutions across India, we are proud to offer an extensive array of tapes specifically engineered for this category. Our commitment to excellence spanning several decades ensures that every product in this collection meets rigorous quality standards, providing you with dependable performance in even the most demanding environments. Whether you require robust holding power, specialized resistance, or precise dimensional stability, our ${pageH1} solutions are designed to address the complex challenges faced by modern industries.`
    );

    const isAllProductsView = activeCategories.length === 0 && activeIndustries.length === 0 && !activeTag && !searchQuery;

    const updateFilters = (cats: string[], inds: string[]) => {
        const qs = new URLSearchParams(location.search);
        
        if (cats.length > 0) {
            qs.set('categories', cats.join(','));
        } else {
            qs.delete('categories');
        }

        if (inds.length > 0) {
            qs.set('industries', inds.join(','));
        } else {
            qs.delete('industries');
        }

        // Clear legacy singles
        qs.delete('category');
        qs.delete('industry');

        navigate({
            pathname: '/products',
            search: qs.toString()
        });
    };

    const handleToggleCategory = (e: React.MouseEvent, catId: string) => {
        e.preventDefault();
        let newCats = [...activeCategories];
        if (newCats.includes(catId)) {
            newCats = newCats.filter(c => c !== catId);
        } else {
            newCats.push(catId);
        }
        updateFilters(newCats, activeIndustries);
    };

    const handleToggleIndustry = (e: React.MouseEvent, indId: string) => {
        e.preventDefault();
        let newInds = [...activeIndustries];
        if (newInds.includes(indId)) {
            newInds = newInds.filter(i => i !== indId);
        } else {
            newInds.push(indId);
        }
        updateFilters(activeCategories, newInds);
    };

    return (
        <>
            <CanonicalTag />

            <main className="bg-[#F8FAFC] min-h-screen pb-16">
                {/* Clean Premium Hero Section - Compact */}
                <div className="bg-slate-900 pt-6 pb-6 md:pt-8 md:pb-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
                    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <h1 className="font-bold mb-2 text-2xl md:text-4xl lg:text-5xl text-white tracking-tight capitalize">
                                {isAllProductsView ? "Industrial Tapes Collection" : pageH1}
                            </h1>
                            <div className="text-sm md:text-base font-light text-slate-300 leading-relaxed max-w-2xl line-clamp-2">
                                {isAllProductsView ? (
                                    "Explore our complete range of high-performance industrial adhesive solutions."
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: enhancedPageContent || enhancedCategoryText }} />
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-8 lg:flex lg:gap-10 lg:items-start">
                    
                    {/* Sidebar Filters (Desktop) */}
                    <div className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                                <h3 className="font-bold text-gray-900">Categories</h3>
                                {(activeIndustries.length > 0 || activeCategories.length > 0 || activeTag || searchQuery) && (
                                    <button onClick={clearAllFilters} className="text-xs font-semibold text-amber-600 hover:text-amber-700">Clear</button>
                                )}
                            </div>
                            <ul className="space-y-1">
                                <li>
                                    <Link 
                                        to="/products"
                                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            isAllProductsView 
                                                ? 'bg-amber-50 text-amber-700' 
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        All Products
                                    </Link>
                                </li>
                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <a 
                                            href={`/category/${cat.id}`}
                                            onClick={(e) => handleToggleCategory(e, cat.id)}
                                            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                                                activeCategories.includes(cat.id)
                                                    ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm' 
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{cat.name}</span>
                                                {activeCategories.includes(cat.id) && (
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between mt-8 mb-4 border-b border-gray-100 pb-3">
                                <h3 className="font-bold text-gray-900">Industries</h3>
                            </div>
                            <ul className="space-y-1">
                                {INDUSTRIES.map(ind => (
                                    <li key={ind.id}>
                                        <a 
                                            href={`/industry/${ind.id}`}
                                            onClick={(e) => handleToggleIndustry(e, ind.id)}
                                            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                                                activeIndustries.includes(ind.id)
                                                    ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm' 
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{ind.name}</span>
                                                {activeIndustries.includes(ind.id) && (
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* PRODUCT GRID SECTION */}
                    <div className="flex-1">
                        
                        {/* Mobile Inline Category Filters */}
                        <div className="lg:hidden mb-6 overflow-x-auto pb-2 hide-scrollbar">
                            <div className="flex items-center space-x-2 min-w-max">
                                <Link 
                                    to="/products"
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                                        isAllProductsView
                                            ? 'bg-amber-500 text-gray-900 border-amber-500 shadow-sm' 
                                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    All Products
                                </Link>
                                {categories.map(cat => (
                                    <a 
                                        key={cat.id}
                                        href={`/category/${cat.id}`}
                                        onClick={(e) => handleToggleCategory(e, cat.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-1 ${
                                            activeCategories.includes(cat.id)
                                                ? 'bg-amber-500 text-gray-900 border-amber-500 shadow-sm' 
                                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        {cat.name}
                                        {activeCategories.includes(cat.id) && (
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        )}
                                    </a>
                                ))}
                                {INDUSTRIES.map(ind => (
                                    <a 
                                        key={ind.id}
                                        href={`/industry/${ind.id}`}
                                        onClick={(e) => handleToggleIndustry(e, ind.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-1 ${
                                            activeIndustries.includes(ind.id)
                                                ? 'bg-amber-500 text-gray-900 border-amber-500 shadow-sm' 
                                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        {ind.name}
                                        {activeIndustries.includes(ind.id) && (
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                {isAllProductsView ? "Our Products" : "Filtered Results"}
                            </h2>
                            <span className="text-gray-500 font-medium text-xs md:text-sm bg-gray-100 px-3 py-1 rounded-full">
                                {filteredProducts.length} Items
                            </span>
                        </div>
                        
                        <div className="min-h-[50vh]">
                            {isLoading ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {[1, 2, 3, 4, 5, 6].map(i => <ProductSkeleton key={i} />)}
                                </div>
                            ) : filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 hover-grid">
                                    {filteredProducts.map(product => (
                                        <ProductCard 
                                            key={product.id} 
                                            product={product} 
                                            categoryName={categoryMap.get(product.category) || ''} 
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-4">
                                        <i className="fas fa-search text-gray-400 text-xl"></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        No products found
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1 max-w-sm mx-auto">
                                        Try adjusting your filters or browse all products.
                                    </p>
                                    <button onClick={clearAllFilters} className="mt-6 bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
