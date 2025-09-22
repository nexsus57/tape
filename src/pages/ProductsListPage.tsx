
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { useMemo, useState, useEffect, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useIndustry } from '../context/IndustryContext';
import { INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';

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
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const { products } = useProducts();
    const { categories } = useCategories();
    const { industries: detailedIndustries } = useIndustry();
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const categoryMap = useMemo(() => new Map(categories.map(c => [c.id, c.name])), [categories]);
    
    const breadcrumbTitle = useMemo(() => {
        const categoryId = searchParams.get('category');
        const industryId = searchParams.get('industry');
        if (industryId) return INDUSTRIES.find(i => i.id === industryId)?.name || 'Industry';
        if (categoryId) return categories.find(c => c.id === categoryId)?.name || 'Category';
        return 'All Products';
    }, [searchParams, categories]);
    
    const { filteredProducts, pageTitle, pageDescription, breadcrumb, pageContent, breadcrumbSchema, categoryH1 } = useMemo(() => {
        const industryId = searchParams.get('industry');
        const categoryId = searchParams.get('category');
        
        let prods = products;
        let title = 'All Products';
        let desc = `Browse our complete range of over ${products.length} industrial adhesive tapes. As a leading manufacturer in India, we supply solutions for every application.`;
        let crumb = null;
        let pageContent: string | null = null;
        let catH1: string | null = null;

        if (industryId) {
            const industry = INDUSTRIES.find(i => i.id === industryId);
            const industryDetail = detailedIndustries.find(i => i.id === industryId);
            if (industry) {
                prods = products.filter(p => p.industries?.includes(industryId));
                title = industryDetail?.seo?.title || industry.name;
                desc = industryDetail?.seo?.description || `Explore specialized tapes for the ${industry.name} industry.`;
                pageContent = industryDetail?.description || null;
                crumb = { name: 'Industries', link: '/industries' };
            }
        } else if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (category) {
                prods = products.filter(p => p.category === categoryId);
                title = category.seo?.title || category.name;
                desc = category.seo?.description || `View all products in the ${category.name} category.`;
                pageContent = category.description || null;
                crumb = null; // Direct child of "Products"
                catH1 = category.seo?.h1 || category.name;
            }
        }
        
        const listItems = [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tapeindia.shop/" },
        ];
        
        if (crumb) { 
            listItems.push({ "@type": "ListItem", "position": 2, "name": crumb.name, "item": `https://tapeindia.shop${crumb.link}` });
        } else {
            listItems.push({ "@type": "ListItem", "position": 2, "name": "Products", "item": "https://tapeindia.shop/products" });
        }
        
        if (breadcrumbTitle !== 'All Products') {
             const canonicalUrl = `https://tapeindia.shop${location.pathname}${location.search}`;
             listItems.push({ "@type": "ListItem", "position": listItems.length + 1, "name": breadcrumbTitle, "item": canonicalUrl });
        }

        const bSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": listItems
        };

        return {
            filteredProducts: prods,
            pageTitle: title,
            pageDescription: desc,
            breadcrumb: crumb,
            pageContent,
            breadcrumbSchema: JSON.stringify(bSchema),
            categoryH1: catH1 || breadcrumbTitle,
        };
    }, [searchParams, products, categories, detailedIndustries, breadcrumbTitle, location.pathname, location.search]);
    
    const faqSchema = useMemo(() => {
        const categoryId = searchParams.get('category');
        if (categoryId === 'reflective-tapes') {
            return {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"What are reflective tapes used for?","acceptedAnswer":{"@type":"Answer","text":"Reflective tapes and reflector stickers are used to enhance visibility and safety on roads, vehicles, industrial equipment, and safety apparel in low-light conditions."}},
                {"@type":"Question","name":"Do you offer different colors for reflective tapes?","acceptedAnswer":{"@type":"Answer","text":"Yes, we supply reflective tapes in multiple colors and widths, including options suitable for vehicle markings and industrial safety applications."}}
              ]
            };
        }
        return null;
    }, [searchParams]);

    useEffect(() => {
        // Close mobile filter when route changes
        setIsMobileFilterOpen(false);
    }, [location]);
    
    const currentCategoryId = searchParams.get('category');
    const currentIndustryId = searchParams.get('industry');

    return (
        <main className="py-16 md:py-24 bg-brand-gray min-h-[60vh]">
            <Helmet>
                <title>{`${pageTitle} | Tape India`}</title>
                <meta name="description" content={pageDescription} />
                <script type="application/ld+json">{breadcrumbSchema}</script>
                {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            </Helmet>
            <CanonicalTag />
            <div className="container mx-auto px-5 lg:px-8">
                <AnimatedSection>
                    <div className="mb-12 text-center">
                        <nav className="text-sm font-semibold mb-2" aria-label="Breadcrumb">
                          <ol className="list-none p-0 inline-flex items-center justify-center flex-wrap gap-y-2">
                            <li className="flex items-center">
                              <Link to="/" className="text-gray-500 hover:text-brand-blue">Home</Link>
                              <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                            </li>
                            {breadcrumb ? (
                               <li className="flex items-center">
                                  <Link to={breadcrumb.link} className="text-gray-500 hover:text-brand-blue">{breadcrumb.name}</Link>
                                  <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                               </li>
                            ) : (
                                <li className="flex items-center">
                                  <Link to="/products" className="text-gray-500 hover:text-brand-blue">Products</Link>
                                  <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                               </li>
                            )}
                            <li className="text-brand-blue-dark" aria-current="page">{breadcrumbTitle}</li>
                          </ol>
                        </nav>
                        <h1 className="font-extrabold">{categoryH1}</h1>
                    </div>
                </AnimatedSection>
                
                {pageContent && (
                    <AnimatedSection className="delay-100">
                        <div className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-lg shadow-sm border-l-4 border-brand-accent">
                            <div className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: pageContent }} />
                        </div>
                    </AnimatedSection>
                )}
                
                {/* Filters Section */}
                <aside className="mb-14 p-6 bg-white rounded-lg shadow-sm">
                    {/* Desktop Filters */}
                    <div className="hidden md:block space-y-5">
                        <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                            <h3 className="text-base font-bold flex-shrink-0 pr-2 text-slate-600 tracking-wider">CATEGORY:</h3>
                            <div className="flex flex-wrap gap-2">
                                <FilterButton label="All Products" isActive={!currentIndustryId && !currentCategoryId} to="/products" />
                                {categories.map(cat => (
                                    <FilterButton key={cat.id} label={cat.name} isActive={currentCategoryId === cat.id} to={`/products?category=${cat.id}`} />
                                ))}
                            </div>
                        </div>
                         <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                            <h3 className="text-base font-bold flex-shrink-0 pr-2 text-slate-600 tracking-wider">INDUSTRY:</h3>
                            <div className="flex flex-wrap gap-2">
                                {INDUSTRIES.map(ind => (
                                    <FilterButton key={ind.id} label={ind.name} isActive={currentIndustryId === ind.id} to={`/products?industry=${ind.id}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Filters */}
                    <div className="md:hidden relative">
                         <button
                            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-white border border-gray-300 rounded-lg text-left"
                            aria-haspopup="true"
                            aria-expanded={isMobileFilterOpen}
                         >
                            <span className="font-semibold">{breadcrumbTitle}</span>
                            <i className={`fas fa-chevron-down text-gray-500 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`}></i>
                         </button>
                         {isMobileFilterOpen && (
                             <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-72 overflow-y-auto">
                                 <ul className="py-1">
                                    <li><Link to="/products" className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-semibold">All Products</Link></li>
                                    <li className="px-4 py-2 text-xs font-bold uppercase text-gray-500 mt-2">Categories</li>
                                    {categories.map(cat => (
                                        <li key={`mob-${cat.id}`}><Link to={`/products?category=${cat.id}`} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">{cat.name}</Link></li>
                                    ))}
                                    <li className="px-4 py-2 text-xs font-bold uppercase text-gray-500 mt-2">Industries</li>
                                    {INDUSTRIES.map(ind => (
                                        <li key={`mob-${ind.id}`}><Link to={`/products?industry=${ind.id}`} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">{ind.name}</Link></li>
                                    ))}
                                 </ul>
                             </div>
                         )}
                    </div>
                </aside>
                
                <section>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    categoryName={categoryMap.get(product.category) || 'Uncategorized'}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                            <p className="text-gray-500 mb-4">No products found for this selection.</p>
                            <Link to="/products" className="text-brand-accent font-semibold hover:underline transition-colors group">
                                View All Products <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
