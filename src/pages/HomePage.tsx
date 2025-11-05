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
import { seoData } from '../data/seoData';

export default function HomePage() {
    const { products } = useProducts();
    const { categories } = useCategories();
    const { settings } = useSettings();

    const homeData = useMemo(() => seoData.find(p => p["Page Name"] === "Home"), []);

    const categoryMap = useMemo(() => {
        const map = new Map<string, string>();
        categories.forEach(cat => map.set(cat.id, cat.name));
        return map;
    }, [categories]);

    const popularProducts = useMemo(() => {
        const productMap = new Map(products.map(p => [p.id, p]));
        return settings.popularProductIds.map(id => productMap.get(id)).filter((p): p is Product => Boolean(p));
    }, [products, settings.popularProductIds]);

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://tapeindia.shop/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tapeindia.shop/products?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

  return (
    <>
      <Helmet>
        <title>{homeData?.["Title (≤60 chars)"] || 'Industrial Tape Manufacturer & Wholesaler | Chennai'}</title>
        <meta name="description" content={homeData?.["Meta Description (≤160 chars)"] || 'Default Description'} />
        {homeData && <script type="application/ld+json">{homeData["Combined Schema (JSON-LD)"]}</script>}
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <CanonicalTag />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://file.garden/aIULwzQ_QkPKQcGw/banner.webp" 
            alt="Banner showing various industrial tapes from Tape India, a leading manufacturer and supplier in Chennai"
            className="w-full h-full object-cover"
            loading="eager"
            aria-hidden="true"
          />
        </div>

        <div className="relative container mx-auto px-5 lg:px-8 py-20 md:py-24 text-center">
          <AnimatedSection>
            <h1 className="font-extrabold mb-5 text-white">
              {homeData?.H1 || 'Industrial Tape Manufacturer & Bulk Supplier in India'}
            </h1>
            <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
              {homeData?.summary || "For over 65 years, Tape India has been the trusted B2B supplier of high-performance adhesive tapes. From heavy-duty packaging tapes to precision electronics solutions, we deliver quality and reliability to industries across India. As a Chennai-based manufacturer, we supply industrial and speciality tapes nationwide, handling bulk orders and fast delivery to all major cities."}
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-brand-amber text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg"
              >
                Explore Products
              </Link>
              <Link 
                to="/request-quote" 
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-blue-deep transition-all duration-300 w-full sm:w-auto text-lg"
              >
                {homeData?.CTA || 'Request a Quote'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Brief Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Your Adhesive Solutions Partner Since 1957</h2>
              <p className="text-gray-600 mb-10">
                Tape India is a leading manufacturer and B2B supplier of an extensive range of industrial tapes. We are committed to providing cost-effective, high-performance adhesive solutions to diverse industries across India. Our reputation is built on quality, reliability, and prompt delivery, making us the preferred choice for businesses seeking a dependable supply chain partner.
              </p>
              <Link to="/about" className="font-semibold text-brand-accent hover:text-brand-accent-dark transition-colors text-lg group">
                Learn More About Our History <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">&rarr;</span>
              </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-5 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="mb-6">Why Partner with Tape India?</h2>
                <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
                    With decades of experience and a commitment to excellence, we are your trusted partner for industrial adhesive solutions.
                </p>
            </AnimatedSection>
            <AnimatedSection className="delay-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-brand-accent hover:shadow-xl transition-shadow duration-300">
                  <ExperienceIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                  <h3 className="mb-3">Decades of Experience</h3>
                  <p className="text-gray-600">Since 1957, our deep-rooted expertise ensures you get knowledgeable advice and proven solutions.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-brand-accent hover:shadow-xl transition-shadow duration-300">
                  <QualityIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                  <h3 className="mb-3">Unmatched Quality</h3>
                  <p className="text-gray-600">We adhere to strict quality parameters, delivering reliable, high-performance tapes that meet your exact specifications.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-brand-accent hover:shadow-xl transition-shadow duration-300">
                  <RangeIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                  <h3 className="mb-3">Over {products.length} Solutions</h3>
                  <p className="text-gray-600">Our extensive product range caters to diverse industries, ensuring you find the perfect tape for any application.</p>
                </div>
              </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 lg:px-8">
              <AnimatedSection className="text-center">
                  <h2 className="font-extrabold mb-6">Our Popular Industrial Tapes</h2>
                  <p className="text-slate-600 mb-16 max-w-3xl mx-auto">
                      Explore some of our most trusted and sought-after taping solutions, engineered for performance and reliability across key industries.
                  </p>
              </AnimatedSection>
              <AnimatedSection className="delay-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {popularProducts.slice(0, 6).map(product => (
                          <ProductCard key={product.id} product={product} categoryName={categoryMap.get(product.category) || ''} />
                      ))}
                  </div>
              </AnimatedSection>
               <AnimatedSection className="text-center mt-20">
                   <Link
                      to="/products"
                      className="bg-brand-accent text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-brand-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                    >
                      View All Products
                    </Link>
               </AnimatedSection>
          </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-5 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="font-extrabold mb-6">Solutions For Every Industry</h2>
                <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
                    We provide high-performance tapes engineered for the unique demands of packaging, electronics, HVAC, and more. Discover products tailored for your sector.
                </p>
            </AnimatedSection>
            <AnimatedSection className="delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INDUSTRIES.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
                 <div className="text-center mt-20">
                   <Link
                      to="/industries"
                      className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-brand-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Explore All Industries
                    </Link>
               </div>
            </AnimatedSection>
        </div>
      </section>
      
      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 lg:px-8">
              <AnimatedSection className="text-center">
                  <h2 className="font-bold mb-6">Explore Our Product Categories</h2>
                  <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
                      From safety and packaging to specialty applications, we have a tape for every need. Browse our categories to find your perfect solution.
                  </p>
              </AnimatedSection>
              <AnimatedSection className="delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
              </AnimatedSection>
          </div>
      </section>

      {/* Testimonials Section */}
       <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-5 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="font-bold mb-6">Trusted by Industry Leaders</h2>
                <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
                    Our commitment to quality and service has earned us the trust of businesses across India.
                </p>
            </AnimatedSection>
            <AnimatedSection className="delay-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {settings.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </AnimatedSection>
        </div>
      </section>
    </>
  );
}
