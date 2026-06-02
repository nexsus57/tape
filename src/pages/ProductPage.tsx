import { useMemo, type FC, useEffect, type CSSProperties, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INDUSTRIES } from '../constants';
import NotFoundPage from './NotFoundPage';
import ProductCard from '../components/ProductCard';
import { ColorOption } from '../types';
import { seoData } from '../data/seoData';
import FaqAccordion from '../components/FaqAccordion';
import { extendedProductDescriptions } from '../data/extendedProductDescriptions2';
import { useSeoEnhancedContent } from '../hooks/useSeoEnhancedContent';
import { PRODUCT_SPECIFICATIONS } from '../data/productSpecifications';

interface ColorSwatchProps {
    name: string;
    colors: string[];
}

const ColorSwatch: FC<ColorSwatchProps> = ({ name, colors }) => {
    let swatchClasses = "w-6 h-6 rounded-full border border-gray-200 flex-shrink-0 shadow-sm";
    let swatchStyle: CSSProperties = {};

    if (colors[0] === 'transparent') {
        swatchClasses += " bg-white";
        swatchStyle = {
             backgroundImage: `url("data:image/svg+xml,%3csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='5' height='5' x='0' y='0' fill='rgb(229, 231, 235)'/%3e%3crect width='5' height='5' x='5' y='5' fill='rgb(229, 231, 235)'/%3e%3c/svg%3e")`,
        }
    } else if (colors.length > 1) {
        swatchStyle = { background: `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)` };
    } else {
        swatchStyle = { backgroundColor: colors[0] };
    }

    return (
        <div className="flex items-center gap-2">
            <div
                className={swatchClasses}
                style={swatchStyle}
                title={name}
            ></div>
            <span className="text-slate-600 text-sm font-medium">{name}</span>
        </div>
    );
};

export default function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();
    const product = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
    
    const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'applications' | 'industries' | 'faq'>('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveTab('overview');
    }, [productId]);

    const { categories } = useCategories();
    const category = useMemo(() => categories.find(c => c.id === product?.category), [categories, product]);
    
    const relatedIndustries = useMemo(() => {
        if (!product?.industries) return [];
        return INDUSTRIES.filter(ind => product.industries?.includes(ind.id));
    }, [product]);
    
    const relatedProducts = useMemo(() => {
      if (!product) return [];
      
      const candidates = products.filter(p => p.id !== product.id);
      
      const scoredCandidates = candidates.map(p => {
          let score = 0;
          
          if (p.category === product.category) score += 10;
          
          const commonIndustries = p.industries?.filter(ind => product.industries?.includes(ind));
          if (commonIndustries && commonIndustries.length > 0) {
              score += (commonIndustries.length * 5);
          }

          const pTokens = p.name.toLowerCase().split(/[\s-]+/);
          const currentTokens = product.name.toLowerCase().split(/[\s-]+/);
          const commonTokens = pTokens.filter(t => t.length > 3 && currentTokens.includes(t));
          score += (commonTokens.length * 2);

          return { product: p, score };
      });

      scoredCandidates.sort((a, b) => b.score - a.score);

      return scoredCandidates.slice(0, 4).map(item => item.product);
    }, [product, products]);

    if (!product) {
        const seoProduct = seoData.find(p => p["Full URL"].includes(`/product/${productId}`));
        if (seoProduct) {
             return (
                 <>
                    <NotFoundPage message="This product is valid but is missing from the main product list." />
                 </>
             )
        }
        return <NotFoundPage />;
    }
    
    const productSeoData = product.seo;
    const pageTitle = productSeoData["Title (≤60 chars)"];
    const imageAltText = pageTitle;
    const h1Text = productSeoData.H1;

    const { enhancedContent: enhancedSummary } = useSeoEnhancedContent(productSeoData.summary);
    const hasOptions = (product.availableColors && product.availableColors.length > 0) || product.customizable;
    
    const extendedContent = useMemo(() => {
        if (!product) return '';
        if (extendedProductDescriptions[product.id]) {
            return extendedProductDescriptions[product.id];
        }
        
        return `<p>The ${product.name} stands as a premier solution within our ${category?.name || 'industrial tape'} category, meticulously engineered to meet the demanding standards of modern industrial applications. As a leading manufacturer and supplier of adhesive technologies across India, Tape India ensures that every roll of this tape delivers exceptional performance and reliability, making it a critical component for businesses seeking optimal operational efficiency.</p>
        
        <p>Designed specifically for professional environments, this tape offers unique advantages that set it apart. Its superior material composition provides robust durability, ensuring it can withstand rigorous conditions without compromising on adhesive strength or structural integrity. ${relatedIndustries.length > 0 ? `This makes the ${product.name} particularly well-suited for sectors such as ${relatedIndustries.map(i => i.name).join(', ')}. Professionals in these fields rely on our tapes to tackle complex challenges, trusting in the consistent quality that Tape India has delivered for over six decades.` : ''}</p>
        
        <p>${product.features && product.features.length > 0 ? `When evaluating adhesive solutions, the critical features of the ${product.name} become readily apparent. Notable characteristics such as ${product.features.slice(0, 3).join(', ')} provide the specific performance metrics required for specialized tasks. These attributes ensure that the tape not only adheres securely but also maintains its hold under varying environmental stresses, temperature fluctuations, and mechanical wear.` : ''} ${product.uses && product.uses.length > 0 ? `Commonly utilized for tasks including ${product.uses.slice(0,3).join(' and ')}, this versatile tape adapts to a multitude of scenarios. Whether you are addressing heavy-duty packaging needs, intricate electronic insulation, or long-term structural bonding, it provides a steadfast solution.` : ''}</p>
        
        <p>By choosing Tape India as your bulk supplier for the ${product.name}, you are partnering with an experienced manufacturer dedicated to excellence. We understand that in an industrial context, the reliability of your materials directly impacts your bottom line. Therefore, we subject our products to stringent quality control processes, guaranteeing that you receive an adhesive product that performs flawlessly, order after order. Contact our sales team today to discuss your specific requirements, request custom sizes, or inquire about wholesale pricing tailored to your business needs.</p>`;
    }, [product, category, relatedIndustries]);
    
    const { enhancedContent: enhancedExtendedContent } = useSeoEnhancedContent(
        extendedContent.split('\n\n').map(p => p.trim() && !p.startsWith('<p>') ? `<p>${p}</p>` : p).join('')
    );

    const specs = PRODUCT_SPECIFICATIONS[product.id] || product.specifications || [];
    const faqs = productSeoData.faqs || [];

    const tabs = [
        { id: 'overview', label: 'Overview' },
        ...(specs.length > 0 ? [{ id: 'specifications', label: 'Specifications' }] : []),
        ...(product.uses && product.uses.length > 0 ? [{ id: 'applications', label: 'Applications' }] : []),
        ...(relatedIndustries.length > 0 ? [{ id: 'industries', label: 'Industries' }] : []),
        ...(faqs.length > 0 ? [{ id: 'faq', label: 'FAQ' }] : [])
    ] as const;

    return (
        <>
            <main className="pt-6 pb-12 md:pt-8 md:pb-16 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
                    {/* Breadcrumbs */}
                    <nav className="text-sm font-semibold mb-8" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex items-center flex-wrap">
                            <li className="flex items-center">
                                <Link to="/" className="text-slate-500 hover:text-amber-600 transition-colors">Home</Link>
                                <i className="fas fa-chevron-right mx-2 text-slate-300 text-[10px]"></i>
                            </li>
                            <li className="flex items-center">
                                <Link to="/products" className="text-slate-500 hover:text-amber-600 transition-colors">Products</Link>
                                <i className="fas fa-chevron-right mx-2 text-slate-300 text-[10px]"></i>
                            </li>
                                {category && (
                                <li className="flex items-center">
                                    <Link to={`/category/${category.id}`} className="text-slate-500 hover:text-amber-600 transition-colors">{category.name}</Link>
                                    <i className="fas fa-chevron-right mx-2 text-slate-300 text-[10px]"></i>
                                </li>
                            )}
                            <li className="text-slate-900 truncate max-w-[200px] lg:max-w-[400px]" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    {/* Top Hero Section */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                        {/* Left Column: Product Image Gallery (Simulated) */}
                        <div className="flex flex-col gap-4">
                            <div className="product-detail-image-container relative bg-slate-50/50 border border-gray-100 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center mix-blend-multiply w-full">
                                <img
                                    src={product.image}
                                    alt={imageAltText}
                                    className="rounded-lg object-contain w-full h-full filter drop-shadow-sm mix-blend-multiply"
                                    crossOrigin="anonymous"
                                    onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
                                    width="500"
                                    height="400"
                                />
                            </div>
                            {/* Thumbnails placeholder */}
                            <div className="grid grid-cols-5 gap-3">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <div key={i} className={`aspect-square rounded-xl border flex items-center justify-center p-2 cursor-pointer transition-colors ${i === 0 ? 'border-amber-500 bg-amber-50/30' : 'border-gray-200 hover:border-amber-300 bg-slate-50/50'}`}>
                                        <img
                                            src={product.image}
                                            alt={`${product.name} view ${i+1}`}
                                            className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity"
                                            onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Product Core Info */}
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.highlights && product.highlights.map(h => (
                                    <span key={h} className="inline-block bg-amber-50 text-amber-800 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-amber-200">
                                        {h}
                                    </span>
                                ))}
                            </div>
                            
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">{h1Text}</h1>
                            
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: enhancedSummary.split('.')[0] + '.' }}></p>

                            {product.features && product.features.length > 0 && (
                                <ul className="space-y-3 mb-10">
                                    {product.features.slice(0, 4).map((feature, index) => (
                                        <li key={`feat-${index}`} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link
                                    to={`/request-quote?product=${product.id}`}
                                    rel="nofollow"
                                    className="flex-1 bg-slate-900 text-white font-bold py-4 px-8 rounded-xl text-center hover:bg-amber-500 hover:text-slate-900 transition-colors shadow-sm"
                                >
                                    {productSeoData.CTA || "Request a Quote"}
                                </Link>
                                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 font-bold py-4 px-8 rounded-xl text-center hover:border-slate-400 transition-colors">
                                    Add to Compare
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
                                <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Pan India Delivery</div>
                                <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Bulk Orders Welcome</div>
                                <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> Quality Assured</div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Framework */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        <div className="flex-1 min-w-0">
                            {/* Tab Navigation */}
                            <div className="bg-white rounded-t-2xl border-b border-gray-200 px-4 md:px-8 pt-4 flex overflow-x-auto no-scrollbar scroll-smooth">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`pb-4 px-4 font-bold text-sm md:text-base whitespace-nowrap transition-colors border-b-2 relative top-px ${
                                            activeTab === tab.id 
                                                ? 'text-slate-900 border-slate-900' 
                                                : 'text-slate-500 border-transparent hover:text-slate-700 focus:outline-none'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Tab Content Area */}
                            <div className="bg-white p-6 md:p-10 rounded-b-2xl border border-t-0 border-gray-200 shadow-sm min-h-[400px]">
                                {activeTab === 'overview' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Overview</h2>
                                        <div className="prose prose-lg max-w-none text-slate-600 font-light leading-relaxed">
                                            <p dangerouslySetInnerHTML={{ __html: enhancedSummary }}></p>
                                            <div 
                                                className="mt-6 space-y-4" 
                                                dangerouslySetInnerHTML={{ __html: enhancedExtendedContent }} 
                                            />
                                        </div>

                                        {hasOptions && (
                                            <div className="mt-10 pt-8 border-t border-gray-100">
                                                <h3 className="text-lg font-bold text-slate-900 mb-6">Options & Customization</h3>
                                                <div className="space-y-6">
                                                    {product.availableColors && product.availableColors.length > 0 && (
                                                        <div>
                                                            <h4 className="font-semibold text-sm mb-3 text-slate-700">Available Colors:</h4>
                                                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                                                                {product.availableColors.map((opt: ColorOption) => <ColorSwatch key={opt.name} {...opt} />)}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {product.customizable && (
                                                        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                                                            <h4 className="font-bold text-amber-900 mb-1 flex items-center gap-2"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg> Custom Sizes Available</h4>
                                                            <p className="text-sm text-amber-800 font-medium">This product can be slit to custom widths or die-cut exactly to your requirements.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'specifications' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
                                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                                            <table className="w-full text-left bg-white">
                                                <tbody className="divide-y divide-gray-100">
                                                    {specs.map((spec, index) => (
                                                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                            <td className="py-4 px-6 font-semibold text-slate-700 w-1/3 bg-slate-50/50 border-r border-gray-100">{spec.label}</td>
                                                            <td className="py-4 px-6 text-slate-600">{spec.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'applications' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Applications</h2>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {product.uses!.map((use, index) => (
                                                <li key={`use-${index}`} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100/50">
                                                    <div className="mt-1 bg-amber-100 text-amber-700 p-1 rounded-md">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                    <span className="text-slate-700 font-medium">{use}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'industries' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Relevant Industries</h2>
                                        <p className="text-slate-600 mb-8 font-light text-lg">We supply {product.name} across various industrial sectors that demand high performance and reliability.</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {relatedIndustries.map(industry => (
                                                <Link key={industry.id} to={`/industry/${industry.id}`} className="group bg-white border border-gray-200 p-5 rounded-xl hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between">
                                                    <span className="font-bold text-slate-800 group-hover:text-amber-700 transition-colors">{industry.name}</span>
                                                    <svg className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'faq' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <FaqAccordion key={index} question={faq.name} answer={faq.acceptedAnswer.text} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Sidebar: Sticky Quote Widget */}
                        <div className="lg:w-[380px] flex-shrink-0">
                            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Quote</h3>
                                <p className="text-slate-500 font-medium text-sm mb-6">Get the best pricing for bulk orders and custom requirements.</p>
                                
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> Fast Response
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Best Price Guarantee
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> Technical Support
                                    </li>
                                </ul>

                                <Link
                                    to={`/request-quote?product=${product.id}`}
                                    rel="nofollow"
                                    className="flex w-full items-center justify-center gap-2 bg-amber-500 text-slate-900 font-bold py-4 px-6 rounded-xl text-center hover:bg-amber-400 transition-colors shadow-sm"
                                >
                                    Get Quote Now <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Or reach out directly</p>
                                    <a href="mailto:sales@tapeindia.shop" className="block mt-2 font-medium text-slate-600 hover:text-amber-600 transition-colors">sales@tapeindia.shop</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="py-20 md:py-24 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 tracking-tight">You Might Also Need</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            {relatedProducts.map(p => (
                               <ProductCard key={p.id} product={p} categoryName={category?.name || ''} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

