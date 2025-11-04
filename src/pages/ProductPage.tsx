
import { useMemo, useState, type ReactNode, useEffect, FC } from 'react';
// FIX: The reported errors are likely a cascade issue. These imports are correct for react-router-dom v5.
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INDUSTRIES } from '../constants';
import NotFoundPage from './NotFoundPage';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';

// Helper to convert simple markdown to HTML
const markdownToHtml = (text: string | undefined): string => {
  if (!text) return '';
  return text
    .replace(/^### (.*$)/gim, '<h4 class="text-xl font-bold text-brand-blue-dark mb-4 mt-6">$1</h4>') // Process headings first
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Then process bold
    .replace(/\n/g, '<br />'); // Then handle line breaks
};

const InfoList = ({ items, icon }: { items: string[], icon: 'arrow' | 'cog' }) => {
    const iconMap = {
        arrow: 'fa-check-circle text-brand-accent',
        cog: 'fa-cog text-gray-500',
    };
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-base">
            <i className={`fas ${iconMap[icon]} w-5 text-center mt-1 mr-3 flex-shrink-0`}></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
};
  
const DetailSection = ({ title, children }: { title: string, children?: ReactNode }) => (
    <div className="mb-10">
      <h3 className="font-bold text-2xl mb-6 text-brand-blue-dark">{title}</h3>
      {children}
    </div>
);

// FIX: Explicitly type ColorSwatch as a React.FC to resolve the 'key' prop issue.
interface ColorSwatchProps {
    name: string;
    colors: string[];
}

const ColorSwatch: FC<ColorSwatchProps> = ({ name, colors }) => {
    let swatchClasses = "w-6 h-6 rounded-full border border-gray-300 flex-shrink-0";
    let swatchStyle = {};

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
        <div className="flex items-center gap-3">
            <div
                className={swatchClasses}
                style={swatchStyle}
                title={name}
            ></div>
            <span className="text-gray-700">{name}</span>
        </div>
    );
};

const TabButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`py-4 px-1 text-base md:text-lg font-semibold border-b-2 transition-colors duration-300 whitespace-nowrap ${
            isActive 
            ? 'border-brand-accent text-brand-accent' 
            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
        }`}
        role="tab"
        aria-selected={isActive}
    >
        {label}
    </button>
);


export default function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();
    const product = products.find(p => p.id === productId);

    const [mainImage, setMainImage] = useState<string>('');
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const [isImageBroken, setIsImageBroken] = useState(false);
    const [activeTab, setActiveTab] = useState('description');
    
    useEffect(() => {
        setIsImageBroken(false);
        if (product?.images?.[0]) {
            setMainImage(product.images[0]);
        }
        setActiveTab('description');
    }, [productId, product]);


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
                {"@type":"Question","name":"What colors are available for floor marking tape?","acceptedAnswer":{"@type":"Answer","text":"We supply floor marking tape in a variety of standard safety colors including yellow, red, green, and white. Custom colors may be available for bulk orders."}},
                {"@type":"Question","name":"Are these tapes suitable for factory floors?","acceptedAnswer":{"@type":"Answer","text":"Yes, our floor marking tapes are designed for industrial durability, resisting abrasion from foot traffic, pallet jacks, and forklifts, making them ideal for factory and warehouse safety."}}
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
    const canZoom = hasImages && !isImageBroken;

    const hasOptions = (product.availableColors && product.availableColors.length > 0) || product.customizable;

    const handleImageContainerClick = () => {
        if (canZoom) {
            setIsImageZoomed(true);
        }
    };
    
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

    const TABS = {
        description: {
            label: 'Description',
            isRendered: product.description,
        },
        specs: {
            label: 'Features & Applications',
            isRendered: product.features || product.uses,
        },
        options: {
            label: 'Options & Industries',
            isRendered: hasOptions || relatedIndustries.length > 0,
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
            
            <main className="py-12 md:py-16 bg-white">
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
                            <li className="text-brand-blue-dark" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Product Image Gallery */}
                        <div className="flex flex-col gap-4 sticky top-24 self-start">
                            <div 
                                className={`relative aspect-square w-full bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 transition-shadow hover:shadow-lg ${canZoom ? 'cursor-zoom-in' : ''}`}
                                onClick={handleImageContainerClick}
                            >
                                {showPlaceholder ? (
                                    <div className="text-center">
                                        <h3 className="font-bold text-slate-700 text-2xl">{product.name}</h3>
                                        <p className="text-slate-500 mt-2">Image Coming Soon</p>
                                    </div>
                                ) : (
                                    <img
                                        src={mainImage}
                                        alt={imageAltText}
                                        className="max-w-full max-h-full object-contain"
                                        onError={() => setIsImageBroken(true)}
                                    />
                                )}
                            </div>
                             {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-5 gap-3">
                                    {product.images.map((imgSrc, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setMainImage(imgSrc)}
                                            className={`aspect-square w-full rounded-md overflow-hidden border-2 transition-colors ${mainImage === imgSrc ? 'border-brand-accent' : 'border-transparent hover:border-gray-300'}`}
                                        >
                                            <img src={imgSrc} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-contain bg-white"/>
                                        </button>
                                    ))}
                                </div>
                             )}
                        </div>

                        {/* Product Details */}
                        <div>
                            <h1 className="font-extrabold text-brand-blue-dark mb-4">{h1Text}</h1>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">{product.shortDescription}</p>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 my-6">
                                {category && <div className="flex items-center gap-2"><i className="fas fa-tag text-gray-400"></i><span className="font-semibold">Category:</span> {category.name}</div>}
                                {product.brand && <div className="flex items-center gap-2"><i className="fas fa-building text-gray-400"></i><span className="font-semibold">Brand:</span> {product.brand}</div>}
                                {product.minOrderQty && <div className="flex items-center gap-2"><i className="fas fa-box-open text-gray-400"></i><span className="font-semibold">Min. Order:</span> {product.minOrderQty}</div>}
                            </div>
                            
                             <div className="bg-blue-50 border-l-4 border-brand-accent p-6 rounded-r-lg mt-8">
                                <h3 className="font-bold text-xl text-brand-blue-dark mb-3">Request a Bulk Quote</h3>
                                <p className="text-gray-700 mb-5">
                                    For competitive B2B pricing, custom sizes, and Pan-India delivery, contact our team for a personalized quote.
                                </p>
                                <Link
                                    to={`/request-quote?product=${product.id}`}
                                    className="inline-block bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Full Description & Details via Tabs */}
                    <div className="mt-20">
                        <div className="border-b border-gray-200">
                           <div className="flex items-center gap-4 md:gap-8 overflow-x-auto hide-scrollbar" role="tablist">
                                {Object.entries(TABS).map(([key, tab]) => 
                                    tab.isRendered && (
                                        <TabButton
                                            key={key}
                                            label={tab.label}
                                            isActive={activeTab === key}
                                            onClick={() => setActiveTab(key)}
                                        />
                                    )
                                )}
                           </div>
                        </div>

                        <div className="py-10" role="tabpanel">
                            {activeTab === 'description' && TABS.description.isRendered && (
                                <div className="text-slate-600 text-lg leading-relaxed animate-fade-in" dangerouslySetInnerHTML={{ __html: markdownToHtml(product.description) }} />
                            )}
                             {activeTab === 'specs' && TABS.specs.isRendered && (
                                <div className="space-y-12 animate-fade-in">
                                    {product.features && product.features.length > 0 && (
                                        <DetailSection title="Key Features">
                                            <InfoList items={product.features} icon="arrow" />
                                        </DetailSection>
                                    )}
                                    {product.uses && product.uses.length > 0 && (
                                        <DetailSection title="Common Applications">
                                            <InfoList items={product.uses} icon="cog" />
                                        </DetailSection>
                                    )}
                                </div>
                            )}
                             {activeTab === 'options' && TABS.options.isRendered && (
                                <div className="space-y-12 animate-fade-in">
                                    {hasOptions && (
                                        <DetailSection title="Customization & Options">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                {product.availableColors && product.availableColors.length > 0 && (
                                                    <div>
                                                        <h4 className="font-semibold text-xl mb-4 text-brand-blue-dark">Available Colors:</h4>
                                                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                                                            {product.availableColors.map((opt) => <ColorSwatch key={opt.name} {...opt} />)}
                                                        </div>
                                                    </div>
                                                )}
                                                {product.customizable && (
                                                    <div>
                                                        <h4 className="font-semibold text-xl mb-4 text-brand-blue-dark">Custom Sizes Available:</h4>
                                                        <p className="text-gray-700">This product can be slit to custom widths or die-cut into specific shapes to meet your exact manufacturing requirements. Please mention your needs in your quote request.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </DetailSection>
                                    )}
                                    {relatedIndustries.length > 0 && (
                                        <DetailSection title="Relevant Industries">
                                            <div className="flex flex-wrap gap-3">
                                                {relatedIndustries.map(industry => (
                                                    <Link key={industry.id} to={`/products?industry=${industry.id}`} className="bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-md hover:bg-brand-accent hover:text-white transition-colors">
                                                        {industry.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </DetailSection>
                                    )}
                                </div>
                            )}
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

            {/* Image Zoom Modal */}
            {isImageZoomed && mainImage && (
                 <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setIsImageZoomed(false)}
                >
                    <img 
                        src={mainImage} 
                        alt={`Zoomed view of ${product.name}`}
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                    />
                     <button
                        onClick={() => setIsImageZoomed(false)}
                        className="absolute top-4 right-4 text-white text-4xl font-bold"
                        aria-label="Close zoomed image"
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}
