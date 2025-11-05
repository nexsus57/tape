import { useMemo } from 'react';
// FIX: The reported error is likely a cascade issue. This import is correct for react-router-dom v5.
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useSettings } from '../context/SettingsContext';
import { INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import IndustryCard from '../components/IndustryCard';
import AnimatedSection from '../components/AnimatedSection';
import { ExperienceIcon, QualityIcon, RangeIcon } from '../components/icons/WhyChooseUsIcons';
import { type Product } from '../types';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import CanonicalTag from '../components/CanonicalTag';

export default function HomePage() {
    const { products } = useProducts();
    const { categories } = useCategories();
    const { settings } = useSettings();

    const categoryMap = useMemo(() => {
        const map = new Map<string, string>();
        categories.forEach(cat => map.set(cat.id, cat.name));
        return map;
    }, [categories]);

    const popularProducts = useMemo(() => {
        const productMap = new Map(products.map(p => [p.id, p]));
        return settings.popularProductIds.map(id => productMap.get(id)).filter((p): p is Product => Boolean(p));
    }, [products, settings.popularProductIds]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are you a tape manufacturer in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Tape India is a leading tape manufacturer based in Chennai, serving businesses locally and across India with a wide range of industrial adhesive tapes for various applications."
                }
            },
            {
                "@type": "Question",
                "name": "What types of industrial tapes do you supply?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We supply a vast range of over 85 industrial tapes, including BOPP tapes, VHB tapes, reflective tapes, safety tapes, high-temperature tapes like Kapton and polyester, and specialized tapes for electronics, automotive, and packaging industries."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer bulk pricing for B2B orders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. As a B2B supplier, we specialize in bulk orders and offer competitive pricing for businesses across India. Please use our 'Request a Quote' form for a personalized quotation."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Industrial Tape Manufacturer & B2B Supplier in India | Tape India</title>
                <meta name="description" content="Tape India is a leading manufacturer & B2B supplier of over 85 industrial adhesive tapes. From packaging to electronics, get quality solutions with Pan-India delivery from Chennai." />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <CanonicalTag />
            
            <main>
                {/* Hero Section */}
                <header className="relative bg-brand-blue-deep text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://file.garden/aIULwzQ_QkPKQcGw/banner.webp" 
                            alt="Industrial tape manufacturing facility"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
                    </div>
                    <div className="container mx-auto px-5 lg:px-8 py-24 md:py-32 text-center relative z-10">
                        <AnimatedSection>
                            <h1 className="font-extrabold mb-4 text-white">
                                The Ultimate B2B Supplier for Industrial Tapes in India
                            </h1>
                            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                                With over 65 years of expertise, we are a leading manufacturer and supplier of 85+ specialized adhesive tape solutions for every industry.
                            </p>
                            <div className="mt-10 flex justify-center items-center flex-col sm:flex-row gap-4">
                                <Link to="/products" className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors w-full sm:w-auto text-lg">
                                    Explore Products
                                </Link>
                                <Link to="/request-quote" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue-dark transition-colors w-full sm:w-auto text-lg">
                                    Request a Quote
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </header>

                {/* About Us Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-8">
                        <AnimatedSection>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <img 
                                        src="https://file.garden/aIULwzQ_QkPKQcGw/about-us-homepage.webp" 
                                        alt="Tape India manufacturing facility showing rolls of industrial tape"
                                        className="rounded-lg shadow-xl w-full h-full object-cover"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h2 className="text-3xl font-bold mb-4 text-brand-blue-dark">Your Adhesive Solutions Partner Since 1957</h2>
                                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                        Founded as Sha Kundanmal Misrimal, Tape India has grown from a local Chennai supplier to a national leader in industrial adhesive solutions. With over 65 years of expertise, we are committed to delivering unmatched quality, reliability, and innovation to industries across India.
                                    </p>
                                    <Link to="/about" className="bg-brand-accent text-white font-bold py-3 px-6 rounded-md hover:bg-brand-accent-dark transition-colors text-base inline-flex items-center">
                                        Learn More About Us <i className="fas fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Popular Products Section */}
                {popularProducts.length > 0 && (
                    <section className="py-16 md:py-24 bg-brand-gray">
                        <div className="container mx-auto px-5 lg:px-8">
                            <AnimatedSection>
                                <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue-dark">Popular Products</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {popularProducts.map(product => (
                                        <ProductCard key={product.id} product={product} categoryName={categoryMap.get(product.category) || ''} />
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>
                )}

                {/* Categories Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-8">
                        <AnimatedSection>
                             <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4 text-brand-blue-dark">Browse by Category</h2>
                                <p className="text-slate-600 text-lg">
                                    From safety and marking to high-performance bonding, find the right tape category for your specific application.
                                </p>
                             </div>
                        </AnimatedSection>
                        <AnimatedSection className="mt-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {categories.slice(0, 8).map(category => (
                                    <CategoryCard key={category.id} category={category} />
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-16 md:py-24 bg-brand-blue-deep bg-pattern-circles">
                    <div className="container mx-auto px-5 lg:px-8">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold mb-12 text-center text-white">Solutions for Every Industry</h2>
                        </AnimatedSection>
                         <AnimatedSection className="delay-100">
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {INDUSTRIES.map(industry => (
                                    <IndustryCard key={industry.id} industry={industry} />
                                ))}
                            </div>
                         </AnimatedSection>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-8">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold mb-16 text-center text-brand-blue-dark">Why Partner with Tape India?</h2>
                        </AnimatedSection>
                         <AnimatedSection className="delay-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                                <div className="text-center">
                                    <ExperienceIcon className="h-16 w-16 mx-auto text-brand-accent mb-4" />
                                    <h3 className="text-xl font-bold text-brand-blue-dark mb-2">65+ Years of Experience</h3>
                                    <p className="text-slate-600">Our deep-rooted expertise since 1957 ensures you get reliable advice and proven solutions.</p>
                                </div>
                                <div className="text-center">
                                    <RangeIcon className="h-16 w-16 mx-auto text-brand-accent mb-4" />
                                    <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Unmatched Product Range</h3>
                                    <p className="text-slate-600">With over 85 specialized tapes, we are your single-source supplier for all industrial adhesive needs.</p>
                                </div>
                                <div className="text-center">
                                    <QualityIcon className="h-16 w-16 mx-auto text-brand-accent mb-4" />
                                    <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Assured Quality & Pan-India Delivery</h3>
                                    <p className="text-slate-600">As a leading manufacturer, we guarantee product quality and provide fast, reliable delivery across India.</p>
                                </div>
                            </div>
                         </AnimatedSection>
                    </div>
                </section>

                 {/* Testimonials Section */}
                 {settings.testimonials && settings.testimonials.length > 0 && (
                    <section className="py-16 md:py-24 bg-brand-gray">
                        <div className="container mx-auto px-5 lg:px-8">
                             <AnimatedSection>
                                 <h2 className="text-3xl font-bold mb-12 text-center text-brand-blue-dark">What Our Clients Say</h2>
                             </AnimatedSection>
                             <AnimatedSection className="delay-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {settings.testimonials.map((testimonial, index) => (
                                        <TestimonialCard key={index} {...testimonial} />
                                    ))}
                                </div>
                             </AnimatedSection>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
