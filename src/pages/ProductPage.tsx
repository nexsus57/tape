import { useMemo, useState, type FC, useEffect, type CSSProperties } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INDUSTRIES } from '../constants';
import NotFoundPage from './NotFoundPage';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';
import { ColorOption } from '../types';
import { seoData } from '../data/seoData';
import FaqAccordion from '../components/FaqAccordion';
import { extendedProductDescriptions } from '../data/extendedProductDescriptions2';
import { useSeoEnhancedContent } from '../hooks/useSeoEnhancedContent';

interface ColorSwatchProps {
    name: string;
    colors: string[];
}

const ColorSwatch: FC<ColorSwatchProps> = ({ name, colors }) => {
    let swatchClasses = "w-6 h-6 rounded-full border border-gray-200 flex-shrink-0 shadow-sm";
    // FIX: Use CSSProperties type from react import
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
          
          // 1. Category Match (Base relevance - 10 pts)
          if (p.category === product.category) score += 10;
          
          // 2. Industry Overlap (Context relevance - 5 pts per shared industry)
          const commonIndustries = p.industries?.filter(ind => product.industries?.includes(ind));
          if (commonIndustries && commonIndustries.length > 0) {
              score += (commonIndustries.length * 5);
          }

          // 3. Name/Keyword Similarity (Specific relevance - 2 pts per shared significant word)
          const pTokens = p.name.toLowerCase().split(/[\s-]+/);
          const currentTokens = product.name.toLowerCase().split(/[\s-]+/);
          // Filter only meaningful words > 3 chars
          const commonTokens = pTokens.filter(t => t.length > 3 && currentTokens.includes(t));
          score += (commonTokens.length * 2);

          return { product: p, score };
      });

      // Sort by Score Descending
      scoredCandidates.sort((a, b) => b.score - a.score);

      // Return top 3 highest scored products (modified to slice Top 4 to match grid layout of 4 cols)
      return scoredCandidates.slice(0, 4).map(item => item.product);
    }, [product, products]);

    if (!product) {
        // Find a product that might exist in seoData but not in products constant (edge case)
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
    const pageDescription = productSeoData["Meta Description (≤160 chars)"];
    const imageAltText = pageTitle;
    const h1Text = productSeoData.H1;

    // Apply aggressive internal linking to the summary
    const { enhancedContent: enhancedSummary } = useSeoEnhancedContent(productSeoData.summary);

    const hasOptions = (product.availableColors && product.availableColors.length > 0) || product.customizable;
    
    // Process extended descriptions for internal linking
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
    
    // Apply aggressive internal linking to the extended content
    const { enhancedContent: enhancedExtendedContent } = useSeoEnhancedContent(
        extendedContent.split('\n\n').map(p => p.trim() && !p.startsWith('<p>') ? `<p>${p}</p>` : p).join('')
    );
    
    return (
        <>
            <main className="py-12 md:py-16 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
                    {/* Breadcrumbs */}
                    <nav className="text-sm font-semibold mb-6" aria-label="Breadcrumb">
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
                            <li className="text-slate-900 truncate max-w-[200px]" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Left Column: Product Image */}
                        <div className="lg:col-span-2">
                             <div className="sticky top-28 self-start">
                                <div 
                                    className="product-detail-image-container relative bg-slate-50/50 border border-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center mix-blend-multiply"
                                >
                                    <img
                                        src={product.image}
                                        alt={imageAltText}
                                        className="rounded-lg object-contain w-full h-full filter drop-shadow-sm mix-blend-multiply"
                                        crossOrigin="anonymous"
                                        onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
                                        width="400"
                                        height="400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Product Details */}
                        <div className="lg:col-span-3">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{h1Text}</h1>
                            
                             <div className="space-y-8 text-slate-700">
                                <div className="prose prose-lg max-w-none text-base leading-relaxed text-slate-600">
                                   <p className="font-light text-lg tracking-wide" dangerouslySetInnerHTML={{ __html: enhancedSummary }}></p>
                                   
                                   {/* Dynamically generated expanded unique content for SEO (150+ words) */}
                                   <div 
                                       className="mt-8 space-y-4 text-base font-light text-slate-500 pt-6 border-t border-gray-100" 
                                       dangerouslySetInnerHTML={{ __html: enhancedExtendedContent }} 
                                   />
                                </div>

                                {product.features && product.features.length > 0 && (
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                                        <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-4">Key Features</h3>
                                        <ul className="list-disc list-outside pl-5 space-y-2 text-base text-slate-700 font-medium">
                                            {product.features.map((feature, index) => <li key={`feat-${index}`}>{feature}</li>)}
                                        </ul>
                                    </div>
                                )}
                                
                                {product.uses && product.uses.length > 0 && (
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-4">Common Applications</h3>
                                        <ul className="list-disc list-outside pl-5 space-y-2 text-base text-slate-700 font-medium">
                                            {product.uses.map((use, index) => <li key={`use-${index}`}>{use}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {hasOptions && (
                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-6">Options & Customization</h3>
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
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-2 text-slate-700">Custom Sizes:</h4>
                                                    <p className="text-sm text-slate-500 font-light">This product can be slit to custom widths or die-cut. Contact us with your requirements.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {relatedIndustries.length > 0 && (
                                    <div className="hidden lg:block pt-6 border-t border-gray-100">
                                        <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-4">Relevant Industries</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {relatedIndustries.map(industry => (
                                                <Link key={industry.id} to={`/industry/${industry.id}`} className="bg-slate-100 text-slate-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors text-sm">
                                                    {industry.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Request Quote Section */}
                                <div className="!mt-12 pt-8 border-t border-gray-200">
                                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Ready to order {product.name}?</h3>
                                  <p className="text-slate-500 my-4 font-light text-lg">
                                      For competitive B2B pricing, custom sizes, and Pan-India delivery, contact our engineering team.
                                  </p>
                                  <Link
                                      to={`/request-quote?product=${product.id}`}
                                      className="inline-block bg-slate-900 text-white font-bold py-4 px-10 rounded-xl text-base hover:bg-amber-500 hover:text-slate-900 transition-colors shadow-sm"
                                  >
                                      {productSeoData.CTA || "Request a Quote"}
                                  </Link>
                                </div>
                           </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    {productSeoData.faqs && productSeoData.faqs.length > 0 && (
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 mt-12">
                           <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                           <div className="space-y-4">
                               {productSeoData.faqs.map((faq, index) => (
                                   <FaqAccordion key={index} question={faq.name} answer={faq.acceptedAnswer.text} />
                               ))}
                           </div>
                        </div>
                    )}
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
