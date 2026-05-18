
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
                 p.tags?.some(t => t.toUpperCase().includes(normalizedTag))
             );
             pageData = {
                 H1: `${activeTag.replace(/-/g, ' ')} Solutions`,
             };
        } else if (searchQuery) {
             const q = searchQuery.trim().toLowerCase();
             const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
             const regex = new RegExp(safeQ, 'i');

             prods = availableProducts.filter(p => {
                 if (p.tags?.some(t => t.toLowerCase().includes(q))) return true;
                 if (regex.test(p.name)) return true;
                 if (p.uses?.some(u => u.toLowerCase().includes(q))) return true;
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
    const { enhancedContent: enhancedIndustryText } = useSeoEnhancedContent(
        `Welcome to our specialized collection of industrial tapes for the ${pageH1}. At Tape India, we recognize that this sector demands adhesive solutions that can perform reliably under highly specific and often extreme conditions. As a trusted manufacturer and nationwide supplier, we have meticulously curated this selection of high-performance tapes to meet the stringent requirements of your industry.`
    );

    const isAllProductsView = !activeCategory && !activeIndustry && !activeTag && !searchQuery;

    return (
        <>
            <CanonicalTag />

            <main className="bg-gray-50 min-h-screen pb-20">
                {/* Premium Hero Section */}
                <div className="relative bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-dark py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
                    <div className="container relative z-10 mx-auto px-5 lg:px-8 text-center text-white">
                        <AnimatedSection>
                            <span className="uppercase tracking-widest font-semibold text-sm mb-4 inline-block text-brand-accent">
                                {isAllProductsView ? "Complete Catalog" : "Product Filtering"}
                            </span>
                            <h1 className="font-extrabold mb-6 text-4xl md:text-5xl lg:text-6xl drop-shadow-md capitalize">
                                {isAllProductsView ? "All Industrial Tapes" : pageH1}
                            </h1>
                            <div className="max-w-3xl mx-auto text-lg md:text-xl font-light text-blue-100 leading-relaxed">
                                {isAllProductsView ? (
                                    "Explore our complete range of high-performance industrial adhesive solutions, trusted by businesses across India for demanding applications."
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: enhancedPageContent || enhancedCategoryText }} />
                                )}
                            </div>
                            
                            {(activeIndustry || activeCategory || activeTag || searchQuery) && (
                                <div className="mt-8">
                                    <button onClick={clearAllFilters} className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-2 rounded-full font-semibold transition-all backdrop-blur-sm">
                                        <i className="fas fa-times mr-2"></i> Clear Filters
                                    </button>
                                </div>
                            )}
                        </AnimatedSection>
                    </div>
                </div>

                {isAllProductsView && (
                    <>
                        {/* Shop by Category Section */}
                        <div className="container mx-auto px-5 lg:px-8 -mt-8 relative z-20 mb-16">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
                                    <p className="text-gray-500">Select a category to view specialized adhesive tapes.</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {categories.map(cat => {
                                        const count = products.filter(p => p.category === cat.id).length;
                                        return (
                                        <Link key={cat.id} to={`/category/${cat.id}`} className="group flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-brand-blue-deep transition-colors duration-300 border border-gray-100 hover:border-brand-blue-deep">
                                            <div className="w-16 h-16 bg-white rounded-full p-2 shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 group-hover:text-white text-center text-sm mb-1">{cat.name}</h3>
                                            <span className="text-xs text-gray-500 group-hover:text-brand-accent">{count} Products</span>
                                        </Link>
                                    )})}
                                </div>
                            </div>
                        </div>

                        {/* Shop by Industry Section */}
                        <div className="container mx-auto px-5 lg:px-8 mb-16">
                            <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">Shop by Industry</h2>
                                    <p className="text-gray-500 text-sm mt-1">Industrial solutions engineered for your specific sector.</p>
                                </div>
                                <Link to="/industries" className="text-brand-blue-deep font-semibold hover:text-brand-accent text-sm hidden sm:block">View All Industries &rarr;</Link>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                                {INDUSTRIES.map(ind => {
                                    const iconName = ind.id === 'packaging-industry' ? 'BoxIcon' : 
                                        ind.id === 'hvac-industry' ? 'WindIcon' :
                                        ind.id === 'electronic-industry' ? 'CpuIcon' :
                                        ind.id === 'print-labels-signage-industry' ? 'LayersIcon' :
                                        ind.id === 'reflective-safety-industry' ? 'SunIcon' : 'SparklesIcon';
                                    const Icon = INDUSTRY_ICONS_MAP[iconName] || INDUSTRY_ICONS_MAP.SparklesIcon;
                                    const count = products.filter(p => p.industries?.includes(ind.id) || INITIAL_INDUSTRIES_DETAILED.find(i => i.id === ind.id)?.products.includes(p.id)).length;
                                    
                                    return (
                                    <Link key={ind.id} to={`/industry/${ind.id}`} className="group relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ind.gradientClasses} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                        <Icon className="w-8 h-8 text-brand-blue-deep group-hover:text-brand-accent transition-colors mb-4" />
                                        <h3 className="font-bold text-gray-800 text-sm mb-1">{ind.name}</h3>
                                        <div className="text-xs text-gray-500">{count} Products</div>
                                    </Link>
                                )})}
                            </div>
                        </div>
                        
                        {/* Trust Bar */}
                        <div className="bg-white border-y border-gray-200 py-8 mb-16">
                            <div className="container mx-auto px-5 lg:px-8">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-gray-100">
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-history text-2xl text-brand-accent mb-2"></i>
                                        <span className="font-bold text-gray-800 text-sm">65+ Years Experience</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-truck text-2xl text-brand-accent mb-2"></i>
                                        <span className="font-bold text-gray-800 text-sm">PAN-India Delivery</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-cogs text-2xl text-brand-accent mb-2"></i>
                                        <span className="font-bold text-gray-800 text-sm">Custom Solutions</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-boxes text-2xl text-brand-accent mb-2"></i>
                                        <span className="font-bold text-gray-800 text-sm">Bulk Supply</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <i className="fas fa-check-circle text-2xl text-brand-accent mb-2"></i>
                                        <span className="font-bold text-gray-800 text-sm">Quality Assurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${!isAllProductsView ? 'py-12' : ''}`}>
                    {/* PRODUCT GRID SECTION */}
                    {isAllProductsView && (
                        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                            <h2 className="text-3xl font-extrabold text-brand-blue-deep">All Products</h2>
                            <span className="text-gray-500 font-medium">{filteredProducts.length} Items</span>
                        </div>
                    )}
                    
                    <div className="min-h-[50vh]">
                        {isLoading ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <ProductSkeleton key={i} />)}
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 animate-fade-in">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        categoryName={categoryMap.get(product.category) || ''} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
                                    <i className="fas fa-search text-gray-400 text-3xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {products.length === 0 ? 'Loading Products...' : 'No products found'}
                                </h3>
                                <p className="text-gray-500 mt-3 max-w-md mx-auto px-4 text-lg">
                                    We couldn't find any products matching your selection. Try clearing filters or using broader terms.
                                </p>
                                <button onClick={clearAllFilters} className="mt-8 inline-block bg-brand-blue-deep text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-accent transition-colors shadow-md">
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
