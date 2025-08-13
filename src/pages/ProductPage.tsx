import { useMemo, useState, type ReactNode, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { INDUSTRIES } from '../constants';
import NotFoundPage from './NotFoundPage';
import ProductCard from '../components/ProductCard';
import CanonicalTag from '../components/CanonicalTag';

const InfoList = ({ items, icon }: { items: string[], icon: 'arrow' | 'cog' }) => {
    const iconMap = {
        arrow: 'fa-arrow-right text-brand-accent',
        cog: 'fa-cog text-gray-500',
    };
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
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
    <div className="mt-10">
      <h3 className="font-bold mb-5 border-b-2 border-gray-200 pb-3">{title}</h3>
      {children}
    </div>
);

const ColorSwatch = ({ name, colors }: { name: string, colors: string[] }) => {
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


export default function ProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();
    const product = products.find(p => p.id === productId);

    const [isImageZoomed, setIsImageZoomed] = useState(false);
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

    if (!product) {
        return <NotFoundPage />;
    }
    
    const pageTitle = product.seo?.title || `${product.name} | Tape India`;
    const pageDescription = product.seo?.description || product.shortDescription;
    const imageAltText = product.seo?.title || product.name;

    const hasImage = product.images && product.images.length > 0;
    const showPlaceholder = !hasImage || isImageBroken;
    const canZoom = hasImage && !isImageBroken;

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
        "image": product.images || [],
        "description": pageDescription,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": product.brand || "Tape India"
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
    
    const breadcrumbItems = [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tapeindia.shop/" }
    ];
    if (category) {
        breadcrumbItems.push({ "@type": "ListItem", "position": 2, "name": category.name, "item": `https://tapeindia.shop/products?category=${category.id}` });
    } else {
        breadcrumbItems.push({ "@type": "ListItem", "position": 2, "name": "Products", "item": "https://tapeindia.shop/products" });
    }
    breadcrumbItems.push({ "@type": "ListItem", "position": 3, "name": product.name, "item": productUrl });
    
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>
            <CanonicalTag stripQuery={true} />

            {isImageZoomed && canZoom && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsImageZoomed(false)}
                    aria-label="Close zoomed image"
                    role="dialog"
                >
                    <img 
                        src={product.images?.[0]} 
                        alt={`Zoomed view of ${product.name}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                    <button 
                        className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
                        aria-label="Close zoomed image"
                    >&times;</button>
                </div>
            )}


            <main className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-5 lg:px-8">
                    <nav className="text-sm font-semibold mb-8" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex items-center flex-wrap gap-y-2">
                          <li className="flex items-center">
                            <Link to="/" className="text-gray-500 hover:text-brand-blue">Home</Link>
                            <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                          </li>
                           {category && (
                            <li className="flex items-center">
                                 <Link to={`/products?category=${category.id}`} className="text-gray-500 hover:text-brand-blue">{category.name}</Link>
                                 <i className="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
                            </li>
                           )}
                          <li className="text-brand-blue-dark max-w-xs truncate" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                        
                        <aside className="w-full md:w-2/5 flex-shrink-0 md:sticky md:top-28 self-start">
                           <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200/80">
                               <div 
                                    className={`p-4 md:p-8 h-80 md:h-96 flex items-center justify-center ${canZoom ? 'md:cursor-zoom-in' : ''}`}
                                    onClick={handleImageContainerClick}
                                    role={canZoom ? "button" : "img"}
                                    tabIndex={canZoom ? 0 : -1}
                                    onKeyDown={(e) => canZoom && e.key === 'Enter' && setIsImageZoomed(true)}
                                    aria-label={`View larger image for ${product.name}`}
                               >
                                    {showPlaceholder ? (
                                        <h2 className="text-center font-bold text-gray-400 leading-tight p-4">{product.name}</h2>
                                    ) : (
                                        <img 
                                            src={product.images![0]} 
                                            alt={imageAltText} 
                                            className="max-w-full max-h-full object-contain" 
                                            loading="eager"
                                            onError={() => setIsImageBroken(true)}
                                            width="384"
                                            height="384"
                                        />
                                    )}
                                </div>
                           </div>
                        </aside>

                        <section className="w-full md:w-3/5 flex-grow">
                           <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6 md:p-8 border border-gray-200/80">
                                <h1 className="font-bold text-brand-blue-dark">
                                    {product.name}
                                </h1>
                                
                                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed">{product.shortDescription}</p>
                                
                                {product.description && product.description.trim() !== '' && (
                                    <DetailSection title="Product Description">
                                        <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br />') }} />
                                    </DetailSection>
                                )}

                                {product.features && product.features.length > 0 && (
                                    <DetailSection title="Features">
                                        <InfoList items={product.features} icon="arrow" />
                                    </DetailSection>
                                )}
                                
                                {product.uses && product.uses.length > 0 && (
                                    <DetailSection title="Common Uses">
                                        <InfoList items={product.uses} icon="cog" />
                                    </DetailSection>
                                )}
                                
                                {hasOptions && (
                                    <DetailSection title="Available Options">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                                            {product.availableColors?.map(colorOpt => (
                                                <ColorSwatch key={colorOpt.name} name={colorOpt.name} colors={colorOpt.colors} />
                                            ))}
                                            {product.customizable && (
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 flex-shrink-0" title="Customizable">
                                                        <i className="fas fa-paint-brush text-brand-accent text-sm"></i>
                                                    </span>
                                                    <span className="text-gray-700">Customizable</span>
                                                </div>
                                            )}
                                        </div>
                                    </DetailSection>
                                )}

                                {relatedIndustries.length > 0 && (
                                    <DetailSection title="Related Industries">
                                        <div className="flex flex-wrap gap-3">
                                            {relatedIndustries.map(ind => (
                                                <Link to={`/products?industry=${ind.id}`} key={ind.id} className="bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-full text-base hover:bg-gray-300 hover:text-brand-blue-dark transition-colors">{ind.name}</Link>
                                            ))}
                                        </div>
                                    </DetailSection>
                                )}

                                <div className="mt-12">
                                    <Link 
                                        to={`/request-quote?product=${product.id}`}
                                        className="block w-full text-center bg-brand-yellow text-brand-blue-dark font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105"
                                    >
                                        Get a Personalized Quote
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 bg-brand-gray">
                    <div className="container mx-auto px-5 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
