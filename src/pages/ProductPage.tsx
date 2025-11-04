
import { useMemo, useState, type FC, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INDUSTRIES } from '../constants';
import NotFoundPage from './NotFoundPage';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';
import { ColorOption } from '../types';

// Helper to convert simple markdown to HTML
const markdownToHtml = (text: string | undefined): string => {
  if (!text) return '';

  return text
    .split(/\n\n+/) // Split into paragraphs by one or more blank lines
    .map(paragraph => {
      const trimmedParagraph = paragraph.trim();
      if (!trimmedParagraph) return '';

      // Check if the paragraph is a heading
      if (trimmedParagraph.startsWith('### ')) {
        // More space above heading, less below to reduce gap to the question.
        return `<h4 class="text-lg font-bold text-brand-blue-dark mb-2 mt-6">${trimmedParagraph.substring(4)}</h4>`;
      }
      
      // Process bold within the paragraph
      const withBold = trimmedParagraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Add margin below regular paragraphs for spacing, and handle line breaks internally.
      return `<p class="mb-4">${withBold.replace(/\n/g, '<br />')}</p>`;
    })
    .join('');
};


interface ColorSwatchProps {
    name: string;
    colors: string[];
}

const ColorSwatch: FC<ColorSwatchProps> = ({ name, colors }) => {
    let swatchClasses = "w-6 h-6 rounded-full border border-gray-300 flex-shrink-0 shadow-inner";
    let swatchStyle: React.CSSProperties = {};

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
            <span className="text-gray-600 text-sm">{name}</span>
        </div>
    );
};


export default function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();
    const product = products.find(p => p.id === productId);

    const [isImageBroken, setIsImageBroken] = useState(false);
    
    useEffect(() => {
        setIsImageBroken(false);
    }, [productId]);

    const { categories } = useCategories();
    const category = useMemo(() => categories.find(c => c.id === product?.category), [categories, product]);
    
    const relatedIndustries = useMemo(() => {
        if (!product?.industries) return [];
        return INDUSTRIES.filter(ind => product.industries?.includes(ind.id));
    }, [product]);
    
    const relatedProducts = useMemo(() => {
      if (!product || !category) return [];
      return products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
    }, [product, category, products]);

    const faqSchema = useMemo(() => {
        if (!productId) return null;

        const productFaqs: { [key: string]: object } = {
            'tissue-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"What is tissue cutting tape used for?","acceptedAnswer":{"@type":"Answer","text":"Tissue cutting tapes are used for bonding, lamination, and precise applications in manufacturing."}},
                {"@type":"Question","name":"Do you provide custom widths?","acceptedAnswer":{"@type":"Answer","text":"Yes — custom slit rolls are available for tissue tapes."}},
                {"@type":"Question","name":"Do you supply double-sided tissue tape?","acceptedAnswer":{"@type":"Answer","text":"Yes — we supply double-sided tissue tapes in standard and custom widths for industrial use, with Pan-India delivery."}}
              ]
            },
            'heat-transfer-reflective-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"What is heat transfer paper used for?","acceptedAnswer":{"@type":"Answer","text":"It is used for transferring designs, logos, and images onto fabrics in garment manufacturing and textile printing."}},
                {"@type":"Question","name":"Do you supply bulk heat transfer paper?","acceptedAnswer":{"@type":"Answer","text":"Yes — we supply bulk rolls and sheets of heat transfer paper for printing houses and textile units across India."}}
              ]
            },
             '3m-double-sided-foam-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"Do you supply 3M products?","acceptedAnswer":{"@type":"Answer","text":"Yes — we are a trusted supplier of 3M tapes, adhesives, and specialty products, providing Pan-India distribution for industrial needs."}}
              ]
            },
            'aluminium-foil-tape': {
                "@context":"https://schema.org",
                "@type":"FAQPage",
                "mainEntity":[
                    {"@type":"Question","name":"What is aluminium foil tape used for?","acceptedAnswer":{"@type":"Answer","text":"Aluminium foil tape is primarily used for sealing HVAC ducts, various insulation applications, and for heat reflection purposes in industrial and construction settings."}}
                ]
            },
            'caution-tape': {
                "@context":"https://schema.org",
                "@type":"FAQPage",
                "mainEntity":[
                    {"@type":"Question","name":"Where can I buy caution tape?","acceptedAnswer":{"@type":"Answer","text":"You can order caution tapes for hazard marking and safety directly from TapeIndia. We are a Chennai-based supplier and we deliver Pan-India."}}
                ]
            },
            'glow-in-the-dark-tape': {
                "@context":"https://schema.org",
                "@type":"FAQPage",
                "mainEntity":[
                    {"@type":"Question","name":"Where can I use glow tape?","acceptedAnswer":{"@type":"Answer","text":"Glow tapes are ideal for safety marking in emergency exits, stairways, corridors, and other low-light safety zones to ensure visibility during power outages."}}
                ]
            },
            'ptfe-coated-fiberglass-fabric-non-adhesive': {
                "@context":"https://schema.org",
                "@type":"FAQPage",
                "mainEntity":[
                    {"@type":"Question","name":"What is a PTFE sheet used for?","acceptedAnswer":{"@type":"Answer","text":"PTFE (Teflon) sheets are used for industrial applications requiring heat insulation, chemical resistance, and non-stick surfaces, such as gaskets and release liners."}}
                ]
            },
            'copper-foil-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"Where can I buy copper tape near me?","acceptedAnswer":{"@type":"Answer","text":"Tape India is a Chennai-based supplier, but we deliver copper tape and copper foil sheets Pan-India. You can order from anywhere and we will ship it to you."}},
                {"@type":"Question","name":"What is copper tape used for?","acceptedAnswer":{"@type":"Answer","text":"Copper tape is primarily used for electrical applications such as EMI/RFI shielding, grounding circuits, and electronics repair. It is also popular for craft projects like stained glass."}}
              ]
            },
            'bopp-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"Are you a packaging tape manufacturer near me?","acceptedAnswer":{"@type":"Answer","text":"We are a Chennai-based BOPP packaging tape manufacturer. We offer Pan-India shipping, so we can be your supplier regardless of your location."}},
                {"@type":"Question","name":"Do you offer wholesale cello tape?","acceptedAnswer":{"@type":"Answer","text":"Yes, we supply BOPP tape (commonly known as cello tape) at wholesale rates for bulk and commercial buyers across India."}},
                {"@type":"Question","name":"Do you supply to nearby cities from Chennai?","acceptedAnswer":{"@type":"Answer","text":"Yes — as a manufacturer in Chennai, we supply to nearby cities and across all of India with fast dispatch for bulk orders."}}
              ]
            },
            'floor-marking-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"What is Floor Marking Tape?","acceptedAnswer":{"@type":"Answer","text":"Floor marking tape, a type of industrial marking tape, is a durable adhesive used in warehouses, factories, and public spaces to delineate aisles, walkways, and hazardous areas. Made from robust materials like PVC, it ensures safety compliance and enhances organizational efficiency."}},
                {"@type":"Question","name":"What are the benefits of using Floor Marking Tape?","acceptedAnswer":{"@type":"Answer","text":"The primary benefits include improved safety by marking hazardous zones, enhanced visibility for clear navigation, long-lasting durability against traffic and wear, and slip resistance to prevent accidents. This makes it an essential warehouse safety tape and safety line tape."}},
                {"@type":"Question","name":"In which applications is Floor Marking Tape commonly used?","acceptedAnswer":{"@type":"Answer","text":"This tape is widely used in warehouses for aisle marking, factories for designating work zones, public spaces for crowd control, and on sports floors for boundary lines. As an adhesive tape for factories, it is indispensable for maintaining an organized and safe environment."}},
                {"@type":"Question","name":"How do I choose the right Floor Marking Tape?","acceptedAnswer":{"@type":"Answer","text":"When selecting PVC marking tape, consider factors like width for visibility, color for coding specific areas (e.g., yellow for caution), adhesive strength for surface compatibility, and proper installation for longevity. For specialized needs, consider industrial adhesive products tailored to your environment."}}
              ]
            },
            'anti-skid-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"Where can I buy anti-skid tape?","acceptedAnswer":{"@type":"Answer","text":"You can order high-quality anti-skid tape directly from Tape India. We are a Chennai-based supplier and deliver our safety grip tapes across India."}},
                {"@type":"Question","name":"What sizes of anti-skid tape are available?","acceptedAnswer":{"@type":"Answer","text":"We supply anti-skid tape in various standard widths. We can also provide custom lengths and potentially custom widths based on your bulk order requirements."}}
              ]
            },
            'masking-tape': {
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity":[
                {"@type":"Question","name":"Do you manufacture masking tape in Chennai?","acceptedAnswer":{"@type":"Answer","text":"Yes — we have a manufacturing and dispatch facility in Chennai for producing high-quality masking tapes for automotive, painting, and industrial use."}},
                {"@type":"Question","name":"Are custom widths available for masking tape?","acceptedAnswer":{"@type":"Answer","text":"Yes, we can slit masking tapes to custom widths based on your specific requirements for bulk orders."}}
              ]
            }
        };
        
        return productFaqs[productId] || null;
    }, [productId]);

    if (!product) {
        return <NotFoundPage />;
    }
    
    const pageTitle = product.seo?.title || `${product.name} | Tape India`;
    const pageDescription = product.seo?.description || product.shortDescription;
    const imageAltText = product.seo?.imageAlt || product.seo?.title || product.name;
    const h1Text = product.seo?.h1 || product.name;

    const hasImages = product.images && product.images.length > 0;
    const showPlaceholder = !hasImages || isImageBroken;

    const hasOptions = (product.availableColors && product.availableColors.length > 0) || product.customizable;
    
    const productUrl = `https://tapeindia.shop/product/${product.id}`;

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": (product.images && product.images.length > 0 ? product.images[0] : []),
        "description": pageDescription,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": product.brand || 'Tape India'
        },
        "offers": {
            "@type": "Offer",
            "url": productUrl,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Tape India"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
                {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            </Helmet>
            <CanonicalTag />
            
            <main className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-5 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="text-sm font-semibold mb-6" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex items-center flex-wrap">
                            <li className="flex items-center">
                                <Link to="/" className="text-gray-500 hover:text-brand-blue">Home</Link>
                                <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                            </li>
                            <li className="flex items-center">
                                <Link to="/products" className="text-gray-500 hover:text-brand-blue">Products</Link>
                                <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                            </li>
                                {category && (
                                <li className="flex items-center">
                                    <Link to={`/products?category=${category.id}`} className="text-gray-500 hover:text-brand-blue">{category.name}</Link>
                                    <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                                </li>
                            )}
                            <li className="text-brand-blue-dark truncate max-w-[200px]" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Column: Product Image */}
                        <div className="lg:col-span-2">
                             <div className="sticky top-24 self-start">
                                <div 
                                    className="relative aspect-square w-full bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4"
                                >
                                    {showPlaceholder ? (
                                        <div className="text-center">
                                            <h3 className="font-bold text-slate-700 text-xl">{product.name}</h3>
                                            <p className="text-slate-500 mt-2 text-sm">Image Coming Soon</p>
                                        </div>
                                    ) : (
                                        <img
                                            src={product.images![0]}
                                            alt={imageAltText}
                                            className="max-w-[85%] max-h-[85%] object-contain"
                                            onError={() => setIsImageBroken(true)}
                                            width="300"
                                            height="300"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Product Details */}
                        <div className="lg:col-span-3">
                            <h1 className="font-extrabold text-brand-blue-dark mb-3 leading-tight">{h1Text}</h1>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">{product.shortDescription}</p>
                            
                             <div className="space-y-6 text-slate-700">
                               {product.description && (
                                   <div className="text-base leading-relaxed">
                                       <h2 className="text-xl font-bold text-brand-blue-dark border-b border-gray-200 pb-2">Product Description</h2>
                                       <div className="mt-4" dangerouslySetInnerHTML={{ __html: markdownToHtml(product.description) }} />
                                   </div>
                                )}

                                {product.features && product.features.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-blue-dark mb-2">Key Features</h3>
                                        <ul className="list-disc list-outside pl-5 space-y-1 text-base">
                                            {product.features.map((feature, index) => <li key={`feat-${index}`}>{feature}</li>)}
                                        </ul>
                                    </div>
                                )}
                                
                                {product.uses && product.uses.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-blue-dark mb-2">Common Applications</h3>
                                        <ul className="list-disc list-outside pl-5 space-y-1 text-base">
                                            {product.uses.map((use, index) => <li key={`use-${index}`}>{use}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {hasOptions && (
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-blue-dark mb-3">Options & Customization</h3>
                                        <div className="space-y-4">
                                            {product.availableColors && product.availableColors.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-base mb-2 text-gray-800">Available Colors:</h4>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                        {product.availableColors.map((opt: ColorOption) => <ColorSwatch key={opt.name} {...opt} />)}
                                                    </div>
                                                </div>
                                            )}
                                            {product.customizable && (
                                                <div>
                                                    <h4 className="font-semibold text-base mb-2 text-gray-800">Custom Sizes:</h4>
                                                    <p className="text-base text-gray-700">This product can be slit to custom widths or die-cut. Contact us with your requirements.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {relatedIndustries.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-blue-dark mb-3">Relevant Industries</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {relatedIndustries.map(industry => (
                                                <Link key={industry.id} to={`/products?industry=${industry.id}`} className="bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-md hover:bg-brand-accent hover:text-white transition-colors text-sm">
                                                    {industry.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Request Quote Section */}
                                <div className="!mt-10 pt-6 border-t border-gray-200">
                                  <h3 className="text-xl font-bold text-brand-blue-dark">Get a Quote for {product.name}</h3>
                                  <p className="text-gray-600 my-3">
                                      For competitive B2B pricing, custom sizes, and Pan-India delivery, contact our team for a personalized quote.
                                  </p>
                                  <Link
                                      to={`/request-quote?product=${product.id}`}
                                      className="inline-block bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md text-base hover:bg-yellow-400 transition-colors transform hover:scale-105"
                                  >
                                      Request a Quote
                                  </Link>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 bg-brand-gray">
                    <div className="container mx-auto px-5 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue-dark">Related Products in {category?.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
