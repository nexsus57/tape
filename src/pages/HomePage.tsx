import { useMemo } from 'react';
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
// NOTE: Replaced CanonicalTag with an explicit dynamic canonical tag to avoid duplicates and enforce https://tapeindia.shop

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

  const CANONICAL_BASE = 'https://tapeindia.shop';
  const canonicalUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      const { pathname, search } = window.location;
      return `${CANONICAL_BASE}${pathname}${search || ''}`;
    }
    return `${CANONICAL_BASE}/`;
  }, []);

  // Build Organization + AggregateRating + mapped Reviews (fixes "Multiple reviews without aggregateRating")
  const reviewsForSchema = (settings?.testimonials || []).map((t: any) => ({
    "@type": "Review",
    "reviewBody": t?.quote || t?.text || "",
    "author": t?.author ? {
      "@type": "Person",
      "name": t.author
    } : undefined,
    "itemReviewed": {
      "@type": "Organization",
      "name": "Tape India",
      "url": CANONICAL_BASE
    }
  }));

  const averageRating = useMemo(() => {
    const list = (settings?.testimonials || []);
    if (!list.length) return 5;
    const sum = list.reduce((acc: number, t: any) => acc + (typeof t?.rating === 'number' ? t.rating : 5), 0);
    return Math.round((sum / list.length) * 10) / 10; // one decimal place
  }, [settings?.testimonials]);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tape India",
    "url": CANONICAL_BASE,
    "logo": `${CANONICAL_BASE}/logo512.png`,
    "telephone": settings?.contact?.phone || undefined,
    "address": settings?.contact?.address ? {
      "@type": "PostalAddress",
      "streetAddress": settings.contact.address,
      "addressLocality": settings?.contact?.city || undefined,
      "addressRegion": settings?.contact?.state || undefined,
      "postalCode": settings?.contact?.zip || undefined,
      "addressCountry": "IN"
    } : undefined,
    "sameAs": (settings?.social || []).filter(Boolean),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(averageRating || 5),
      "reviewCount": String((settings?.testimonials || []).length || 0)
    },
    "review": reviewsForSchema
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": CANONICAL_BASE
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Industrial Adhesive Tape Manufacturer & Supplier | Tape India</title>
        <meta
          name="description"
          content={
            `Tape India is a leading B2B manufacturer and supplier of over ${products.length} industrial adhesive tapes. We provide high-performance solutions for packaging, HVAC, electronics, and more. Request a quote.`
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://file.garden/aIULwzQ_QkPKQcGw/banner.webp"
            alt="Industrial adhesive tape solutions banner"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            width={1920}
            height={720}
            aria-hidden="true"
          />
        </div>

        <div className="relative container mx-auto px-5 lg:px-8 py-20 md:py-24 text-center">
          <AnimatedSection>
            <h1 className="font-extrabold mb-5 text-white">
              India's Leading Industrial Adhesive Tape Manufacturer
            </h1>
            <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
              For over 65 years, Tape India has been the trusted B2B supplier of high-performance adhesive tapes. From
              heavy-duty packaging tapes to precision electronics solutions, we deliver quality and reliability to
              industries across India.
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
                Request a Quote
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
              Tape India is a leading manufacturer and B2B supplier of an extensive range of industrial tapes. We are
              committed to providing cost-effective, high-performance adhesive solutions to diverse industries across
              India. Our reputation is built on quality, reliability, and prompt delivery, making us the preferred
              choice for businesses seeking a dependable supply chain partner.
            </p>
            <Link to="/about" className="font-semibold text-brand-accent hover:text-brand-accent-dark transition-colors text-lg group">
              Learn More About Our History <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
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
              With decades of experience and a commitment to excellence, we are your trusted partner for industrial
              adhesive solutions.
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
