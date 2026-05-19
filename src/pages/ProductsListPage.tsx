
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
    const activeCategory = params.categoryId || searchParams.get('category'); 
    const activeIndustry = params.industryId || searchParams.get('industry');
    const activeTag = params.tagId || searchParams.get('tag');
    const searchQuery = params.searchQuery || searchParams.get('q');

    // SEO Redirect Logic: Convert query params to clean URLs
    useEffect(() => {
        if (searchParams.has('industry')) {
            const ind = searchParams.get('industry');
            navigate(`/industry/${ind}`, { replace: true });
        } else if (searchParams.has('category')) {
            const cat = searchParams.get('category');
            navigate(`/category/${cat}`, { replace: true });
        } else if (searchParams.has('tag')) {
            const tag = searchParams.get('tag');
            navigate(`/tag/${tag}`, { replace: true });
        } else if (searchParams.has('q')) {
            const q = searchParams.get('q');
            navigate(`/search/${q}`, { replace: true });
        }
    }, [location.search, navigate, searchParams]);

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
                if (!pageData) {
                    pageData = { H1: category.name, summary: category.description || category.subtitle };
                }
            }
        } else if (activeTag) {
             const normalizedTag = activeTag.toUpperCase().replace(/-/g, ' ');
             prods = availableProducts.filter(p => 
                 p.tags?.some((t: string) => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
             };
        } else if (searchQuery) {
             const q = searchQuery.trim().toLowerCase();
             const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Fix regex escaping issue
             const regex = new RegExp(safeQ, 'i');

             prods = availableProducts.filter(p => {
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
            prods = availableProducts;
        }

        if (!pageData) {
            pageData = seoData.find(p => p["Page Name"] === "All Products List");
        }

        const h1 = pageData?.H1 || 'All Products';
        const content = pageData?.summary || '';
        
        return {
            filteredProducts: prods,
            pageContent: content,
            pageH1: h1,
        };
    }, [activeCategory, activeIndustry, activeTag, searchQuery, products, categories]);

    const { enhancedContent: enhancedPageContent } = useSeoEnhancedContent(pageContent);
    const { enhancedContent: enhancedCategoryText } = useSeoEnhancedContent(
        `Welcome to the ${pageH1} section of Tape India's comprehensive product catalog. As a pioneering manufacturer and B2B supplier of advanced adhesive solutions across India, we are proud to offer an extensive array of tapes specifically engineered for this category. Our commitment to excellence spanning several decades ensures that every product in this collection meets rigorous quality standards, providing you with dependable performance in even the most demanding environments. Whether you require robust holding power, specialized resistance, or precise dimensional stability, our ${pageH1} solutions are designed to address the complex challenges faced by modern industries.`
    );

    const isAllProductsView = !activeCategory && !activeIndustry && !activeTag && !searchQuery;

    return (
        <>
            <CanonicalTag />

            <main className="bg-[#F8FAFC] min-h-screen pb-24">
                {/* Clean Premium Hero Section */}
                <div className="relative bg-[#0F172A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 blur-[100px] pointer-events-none"></div>
                    
                    <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
                        <AnimatedSection className="max-w-4xl">
                            <span className="uppercase tracking-widest font-semibold text-xs md:text-sm mb-4 inline-block text-amber-500">
                                {isAllProductsView ? "Complete Catalog" : "Product Filtering"}
                            </span>
                            <h1 className="font-extrabold mb-4 md:mb-6 text-4xl md:text-5xl lg:text-7xl text-white tracking-tight capitalize">
                                {isAllProductsView ? "All Industrial Tapes" : pageH1}
                            </h1>
                            <div className="text-base md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl">
                                {isAllProductsView ? (
                                    "Explore our complete range of high-performance industrial adhesive solutions, trusted by businesses across India for demanding applications."
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: enhancedPageContent || enhancedCategoryText }} />
                                )}
                            </div>
                            
                            {(activeIndustry || activeCategory || activeTag || searchQuery) && (
                                <div className="mt-8">
                                    <button onClick={clearAllFilters} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-lg font-medium transition-all backdrop-blur-sm shadow-sm flex items-center">
                                        <i className="fas fa-times mr-2 opacity-70"></i> Clear Filters
                                    </button>
                                </div>
                            )}
                        </AnimatedSection>
                    </div>
                </div>

                {isAllProductsView && (
                    <>
                        {/* Shop by Category Section - Light & Clean */}
                        <div className="py-6 md:py-8 bg-white border-b border-gray-200">
                            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                                <div className="mb-6 md:mb-8 text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Browse by Category</h2>
                                    <p className="text-slate-500 text-base md:text-lg mt-2 font-light">Select a category to view specialized adhesive tapes.</p>
                                </div>
                                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
                                    {categories.map(cat => {
                                        const count = products.filter(p => p.category === cat.id).length;
                                        
                                        // Product accents
                                        let accentColor = 'bg-slate-100 text-slate-600';
                                        if (cat.id.includes('safe') || cat.id.includes('special')) accentColor = 'bg-amber-100 text-amber-700';
                                        if (cat.id.includes('reflect') || cat.id.includes('anti')) accentColor = 'bg-blue-100 text-blue-700';
                                        if (cat.id.includes('teflon')) accentColor = 'bg-teal-100 text-teal-700';

                                        return (
                                        <Link key={cat.id} to={`/category/${cat.id}`} className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 relative">
                                                <div className={`absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-10 transition-all duration-500 ${accentColor.split(' ')[0]}`}></div>
                                                <img src={cat.image} alt={cat.name} className="relative z-10 w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <h3 className="font-semibold text-slate-900 text-center text-sm mb-2">{cat.name}</h3>
                                            <div className="flex justify-center mt-auto">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${accentColor}`}>
                                                    {count} Items
                                                </span>
                                            </div>
                                        </Link>
                                    )})}
                                </div>
                            </div>
                        </div>

                        {/* Shop by Industry Section - Soft Gray */}
                        <div className="py-8 md:py-12 bg-slate-50 border-b border-gray-200">
                            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-200 pb-4">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Shop by Industry</h2>
                                        <p className="text-slate-500 text-base md:text-lg mt-2 font-light hidden md:block">Engineered for your specific sector.</p>
                                    </div>
                                    <Link to="/industries" className="text-amber-600 font-medium hover:text-amber-700 transition-colors text-sm mt-4 md:mt-0 flex items-center group">
                                        View All Industries <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                                    {INDUSTRIES.map(ind => {
                                        const iconName = ind.id === 'packaging-industry' ? 'BoxIcon' : 
                                            ind.id === 'hvac-industry' ? 'WindIcon' :
                                            ind.id === 'electronic-industry' ? 'CpuIcon' :
                                            ind.id === 'print-labels-signage-industry' ? 'LayersIcon' :
                                            ind.id === 'reflective-safety-industry' ? 'SunIcon' : 'SparklesIcon';
                                        const Icon = INDUSTRY_ICONS_MAP[iconName] || INDUSTRY_ICONS_MAP.SparklesIcon;
                                        const count = products.filter(p => p.industries?.includes(ind.id) || INITIAL_INDUSTRIES_DETAILED.find(i => i.id === ind.id)?.products.includes(p.id)).length;
                                        
                                        return (
                                        <Link key={ind.id} to={`/industry/${ind.id}`} className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-left">
                                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                                                 <Icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="font-semibold text-slate-900 text-sm mb-2">{ind.name}</h3>
                                            <div className="text-xs text-slate-500 mt-auto">{count} Products</div>
                                        </Link>
                                    )})}
                                </div>
                            </div>
                        </div>
                        
                        {/* Trust Bar - Dark Accent */}
                        <div className="bg-[#0F172A] py-16">
                            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-slate-800">
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-history text-2xl text-slate-400 mb-4"></i>
                                        <span className="font-medium text-slate-300 text-sm">65+ Years Experience</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-truck text-2xl text-slate-400 mb-4"></i>
                                        <span className="font-medium text-slate-300 text-sm">PAN-India Delivery</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-cogs text-2xl text-slate-400 mb-4"></i>
                                        <span className="font-medium text-slate-300 text-sm">Custom Solutions</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-boxes text-2xl text-slate-400 mb-4"></i>
                                        <span className="font-medium text-slate-300 text-sm">Bulk Supply</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-check-circle text-2xl text-slate-400 mb-4"></i>
                                        <span className="font-medium text-slate-300 text-sm">Quality Assured</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className={`container mx-auto px-6 lg:px-8 max-w-7xl ${isAllProductsView ? 'py-8' : 'py-6'}`}>
                    {/* PRODUCT GRID SECTION */}
                    {isAllProductsView ? (
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">All Catalog Products</h2>
                        </div>
                    ) : (
                        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Filtered Results</h2>
                            <span className="text-slate-500 font-medium text-sm bg-slate-100 px-3 py-1 rounded-full">{filteredProducts.length} Items</span>
                        </div>
                    )}
                    
                    <div className="min-h-[50vh]">
                        {isLoading ? (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <ProductSkeleton key={i} />)}
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 hover-grid">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        categoryName={categoryMap.get(product.category) || ''} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-200">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-6">
                                    <i className="fas fa-search text-slate-400 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    No products found
                                </h3>
                                <p className="text-slate-500 mt-2 max-w-md mx-auto">
                                    We couldn't find any products matching your selection. Try clearing filters.
                                </p>
                                <button onClick={clearAllFilters} className="mt-8 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors">
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
