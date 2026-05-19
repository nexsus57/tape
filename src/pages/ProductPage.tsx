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
import { useCart } from '../context/CartContext';

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
            <span className="text-gray-600 text-sm font-medium">{name}</span>
        </div>
    );
};

export default function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();
    const product = products.find(p => p.id.toLowerCase().replace(/[^a-z0-9-]+/g, '') === productId);
    const { addToCart } = useCart();
    
    const [activeTab, setActiveTab] = useState<'overview'|'specifications'|'applications'|'industries'|'faq'>('overview');
    
    const handleAddToQuote = () => {
        if (product) {
            addToCart(product.id);
            alert(`${product.name} added to quote basket!`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    const { categories } = useCategories();
    const category = useMemo(() => categories.find(c => c.id === product?.category), [categories, product]);
    
    const relatedIndustries = useMemo(() => {
        if (!product?.industries) return [];
        return INDUSTRIES.filter(ind => product.industries?.includes(ind.id));
    }, [product]);
    
    // --- SMART RELATED PRODUCTS ALGORITHM (Weighted Scoring) ---
    const relatedProducts = useMemo(() => {
      if (!product) return [];
      const candidates = products.filter(p => p.id !== product.id);
      const scoredCandidates = candidates.map(p => {
          let score = 0;
          if (p.category === product.category) score += 10;
          const commonIndustries = p.industries?.filter(ind => product.industries?.includes(ind));
          if (commonIndustries && commonIndustries.length > 0) score += (commonIndustries.length * 5);
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
        if (seoProduct) return <NotFoundPage message="This product is valid but is missing from the main product list." />
        return <NotFoundPage />;
    }
    
    const productSeoData = product.seo;
    const pageTitle = productSeoData["Title (≤60 chars)"];
    const imageAltText = pageTitle;
    const h1Text = productSeoData.H1;

    // Apply aggressive internal linking to the summary
    const { enhancedContent: enhancedSummary } = useSeoEnhancedContent(productSeoData.summary);

    const hasOptions = (product.availableColors && product.availableColors.length > 0) || product.customizable;
    
    const extendedContent = useMemo(() => {
        if (extendedProductDescriptions[product.id]) return extendedProductDescriptions[product.id];
        return `<p>The ${product.name} stands as a premier solution within our ${category?.name || 'industrial tape'} category, meticulously engineered to meet the demanding standards of modern industrial applications. As a leading manufacturer and supplier of adhesive technologies across India, Tape India ensures that every roll of this tape delivers exceptional performance and reliability, making it a critical component for businesses seeking optimal operational efficiency.</p>
        
        <p>Designed specifically for professional environments, this tape offers unique advantages that set it apart. Its superior material composition provides robust durability, ensuring it can withstand rigorous conditions without compromising on adhesive strength or structural integrity. ${relatedIndustries.length > 0 ? `This makes the ${product.name} particularly well-suited for sectors such as ${relatedIndustries.map(i => i.name).join(', ')}. Professionals in these fields rely on our tapes to tackle complex challenges, trusting in the consistent quality that Tape India has delivered for over six decades.` : ''}</p>
        
        <p>${product.features && product.features.length > 0 ? `When evaluating adhesive solutions, the critical features of the ${product.name} become readily apparent. Notable characteristics such as ${product.features.slice(0, 3).join(', ')} provide the specific performance metrics required for specialized tasks. These attributes ensure that the tape not only adheres securely but also maintains its hold under varying environmental stresses, temperature fluctuations, and mechanical wear.` : ''} ${product.uses && product.uses.length > 0 ? `Commonly utilized for tasks including ${product.uses.slice(0,3).join(' and ')}, this versatile tape adapts to a multitude of scenarios. Whether you are addressing heavy-duty packaging needs, intricate electronic insulation, or long-term structural bonding, it provides a steadfast solution.` : ''}</p>
        
        <p>By choosing Tape India as your bulk supplier for the ${product.name}, you are partnering with an experienced manufacturer dedicated to excellence. We understand that in an industrial context, the reliability of your materials directly impacts your bottom line. Therefore, we subject our products to stringent quality control processes, guaranteeing that you receive an adhesive product that performs flawlessly, order after order. Contact our sales team today to discuss your specific requirements, request custom sizes, or inquire about wholesale pricing tailored to your business needs.</p>`;
    }, [product, category, relatedIndustries]);
    
    const { enhancedContent: enhancedExtendedContent } = useSeoEnhancedContent(
        extendedContent.split('\n\n').map(p => p.trim() && !p.startsWith('<p>') ? `<p>${p}</p>` : p).join('')
    );

    const featurePills = (product.tags && product.tags.length > 0) 
        ? product.tags 
        : (product.features ? product.features.slice(0, 5) : []);

    return (
        <>
            <main className="bg-gray-50 min-h-screen pb-24 md:pb-16 pt-4 md:pt-6">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    
                    {/* Top Row: Breadcrumbs */}
                    <nav className="text-xs md:text-sm font-medium mb-6" aria-label="Breadcrumb">
                        <ol className="list-none p-0 flex items-center flex-wrap gap-2 text-gray-500">
                            <li><Link to="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
                            <li><i className="fas fa-chevron-right text-[10px] opacity-50"></i></li>
                            <li><Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link></li>
                            {category && (
                                <>
                                    <li><i className="fas fa-chevron-right text-[10px] opacity-50"></i></li>
                                    <li><Link to={`/category/${category.id}`} className="hover:text-amber-600 transition-colors">{category.name}</Link></li>
                                </>
                            )}
                            <li><i className="fas fa-chevron-right text-[10px] opacity-50"></i></li>
                            <li className="text-gray-900 truncate max-w-[150px] sm:max-w-xs">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
                        
                        {/* LEFT: Product Gallery (Sticky) */}
                        <div className="lg:w-[55%]">
                            <div className="sticky top-24">
                                <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden shadow-sm pt-[75%] relative mb-4 flex items-center justify-center group cursor-zoom-in">
                                    <div className="absolute inset-0 p-8 flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={imageAltText}
                                            className="w-full h-full object-contain filter drop-shadow-xl transform transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                                            crossOrigin="anonymous"
                                            onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                                    {/* Mock thumbnails, ideally mapped from product.images */}
                                    {[product.image, product.image, product.image].map((img, idx) => (
                                        <div key={idx} className={`w-20 h-20 rounded-xl border-2 flex-shrink-0 cursor-pointer bg-white p-2 ${idx === 0 ? 'border-amber-500 shadow-sm' : 'border-gray-200 opacity-60 hover:opacity-100'}`}>
                                             <img src={img} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Product Information & CTA */}
                        <div className="lg:w-[45%] flex flex-col">
                            {/* Feature Pills */}
                            {featurePills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {featurePills.slice(0, 4).map((feat, idx) => (
                                        <span key={idx} className="bg-amber-50 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider border border-amber-100/50">
                                            {feat.replace(/-/g, ' ')}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                                {h1Text}
                            </h1>

                            <div className="prose prose-sm md:prose-base text-gray-600 mb-6 font-light leading-relaxed">
                                <p dangerouslySetInnerHTML={{ __html: enhancedSummary }}></p>
                            </div>

                            {/* Key Highlights Grid */}
                            {product.features && product.features.length > 0 && (
                                <div className="mb-8 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                    <ul className="space-y-3">
                                        {product.features.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <i className="fas fa-check-circle text-amber-500 mt-1 mr-3 text-sm"></i>
                                                <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Call to Action Container */}
                            <div className="bg-white border border-gray-200 shadow-xl shadow-gray-200/40 rounded-2xl p-6 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4">Request a Quote</h3>
                                <p className="text-sm text-gray-500 mb-6">Get the best pricing for bulk orders and custom requirements.</p>
                                
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to={`/request-quote?product=${product.id}`}
                                        className="flex-1 bg-amber-500 text-gray-900 font-bold py-3.5 px-6 rounded-lg hover:bg-amber-400 transition-colors shadow-sm text-center flex items-center justify-center"
                                    >
                                        <span className="mr-2">Get Quote Now</span>
                                        <i className="fas fa-arrow-right text-sm"></i>
                                    </Link>
                                    <button
                                        onClick={handleAddToQuote}
                                        className="flex-1 bg-white text-gray-900 font-semibold py-3.5 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        Add to List
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center justify-between text-xs font-medium text-gray-500 pt-4 border-t border-gray-100">
                                    <div className="flex items-center"><i className="fas fa-truck text-gray-400 mr-2"></i> Pan-India</div>
                                    <div className="flex items-center"><i className="fas fa-boxes text-gray-400 mr-2"></i> Bulk Welcome</div>
                                    <div className="flex items-center"><i className="fas fa-cut text-gray-400 mr-2"></i> Custom Sizes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO-Rich Content in Tabs */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
                        <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar scroll-smooth">
                            {(['overview', 'specifications', 'applications', 'industries', 'faq'] as const).map(tab => {
                                if (tab === 'faq' && (!productSeoData.faqs || productSeoData.faqs.length === 0)) return null;
                                if (tab === 'industries' && relatedIndustries.length === 0) return null;
                                
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap outline-none transition-colors ${
                                            activeTab === tab 
                                                ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50/30' 
                                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                )
                            })}
                        </div>
                        
                        <div className="p-6 md:p-10">
                            {/* OVERVIEW TAB (Holds the dense SEO content) */}
                            {activeTab === 'overview' && (
                                <div className="animate-in fade-in duration-300 relative">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h3>
                                    <div className="prose prose-base md:prose-lg max-w-4xl text-gray-600 font-light">
                                        <div dangerouslySetInnerHTML={{ __html: enhancedExtendedContent }} />
                                    </div>
                                </div>
                            )}

                            {/* SPECIFICATIONS TAB */}
                            {activeTab === 'specifications' && (
                                <div className="animate-in fade-in duration-300 max-w-4xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                                    {hasOptions ? (
                                        <div className="space-y-6">
                                            {product.availableColors && product.availableColors.length > 0 && (
                                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                    <h4 className="font-semibold text-sm mb-4 text-gray-700 uppercase tracking-widest">Available Colors</h4>
                                                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                                                        {product.availableColors.map((opt: ColorOption) => <ColorSwatch key={opt.name} {...opt} />)}
                                                    </div>
                                                </div>
                                            )}
                                            {product.customizable && (
                                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                    <h4 className="font-semibold text-sm mb-2 text-gray-700 uppercase tracking-widest">Custom Dimensions</h4>
                                                    <p className="text-gray-600 font-light">Products can be slit to custom widths or die-cut to specific shapes. Please contact our technical team with your exact requirements.</p>
                                                </div>
                                            )}
                                            {/* Dummy Tech Table for visual effect */}
                                            <div className="border border-gray-200 rounded-xl overflow-hidden mt-6">
                                                <table className="w-full text-left text-sm text-gray-600">
                                                    <tbody className="divide-y divide-gray-200">
                                                        {(product.tags || []).slice(0, 4).map((tag, i) => (
                                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                                <th className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50 w-1/3 border-r border-gray-200 capitalize">{tag.replace(/-/g, ' ')}</th>
                                                                <td className="px-6 py-4">High Performance / Industrial Grade</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">Standard specifications apply. Please contact us for a detailed technical datasheet.</p>
                                    )}
                                </div>
                            )}

                            {/* APPLICATIONS TAB */}
                            {activeTab === 'applications' && (
                                <div className="animate-in fade-in duration-300">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Applications</h3>
                                    {product.uses && product.uses.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {product.uses.map((use, index) => (
                                                <div key={index} className="bg-gray-50 border border-gray-200 p-5 rounded-xl flex items-start gap-4 hover:bg-white hover:shadow-md transition-all">
                                                    <div className="bg-amber-100 text-amber-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <i className="fas fa-cogs"></i>
                                                    </div>
                                                    <p className="text-gray-800 font-medium text-sm mt-1 leading-snug">{use}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">Multipurpose industrial applications.</p>
                                    )}
                                </div>
                            )}

                            {/* INDUSTRIES TAB */}
                            {activeTab === 'industries' && relatedIndustries.length > 0 && (
                                <div className="animate-in fade-in duration-300">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries Served</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {relatedIndustries.map(industry => (
                                            <Link 
                                                key={industry.id} 
                                                to={`/industry/${industry.id}`} 
                                                className="group block bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gray-300 transition-all"
                                            >
                                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                                                    <i className="fas fa-industry text-xl text-gray-400 group-hover:text-amber-500"></i>
                                                </div>
                                                <h4 className="font-bold text-gray-900">{industry.name}</h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQ TAB */}
                            {activeTab === 'faq' && productSeoData.faqs && productSeoData.faqs.length > 0 && (
                                <div className="animate-in fade-in duration-300 max-w-4xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                    <div className="space-y-3">
                                        {productSeoData.faqs.map((faq, index) => (
                                            <FaqAccordion key={index} question={faq.name} answer={faq.acceptedAnswer.text} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Related Products Section (Redesigned) */}
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">You Might Also Need</h2>
                            <Link to="/products" className="hidden sm:inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700">
                                View All Tapes <i className="fas fa-arrow-right ml-2 text-xs"></i>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 hover-grid">
                            {relatedProducts.map(p => (
                               <ProductCard key={p.id} product={p} categoryName={category?.name || ''} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Sticky Mobile CTA Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden z-50 animate-in slide-in-from-bottom flex gap-2">
                 <Link
                    to={`/request-quote?product=${product.id}`}
                    className="flex-1 bg-amber-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-sm text-center flex items-center justify-center transition-colors hover:bg-amber-400"
                >
                    Get Quote
                </Link>
                <button
                    onClick={handleAddToQuote}
                    className="flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg text-sm text-center flex items-center justify-center transition-colors hover:bg-gray-800"
                >
                    Add to List
                </button>
            </div>
        </>
    );
}
