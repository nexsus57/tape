import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useSettings } from '../context/SettingsContext';
import { INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { ExperienceIcon, QualityIcon, RangeIcon } from '../components/icons/WhyChooseUsIcons';
import { type Product } from '../types';
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

  return (
    <>
      <CanonicalTag />
      
      <main className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden pb-20">
        {/* Premium Architectural Hero Section */}
        <section className="relative text-white overflow-hidden pb-16 md:pb-20 pt-24 md:pt-32 border-b border-gray-800 bg-[#0F172A]">
          {/* Base Background layer */}
          <div className="absolute inset-0 bg-[#0F172A] z-0"></div>
          
          <div className="absolute inset-0 z-10 opacity-30">
            <img 
              src="https://file.garden/aIULwzQ_QkPKQcGw/banner.webp" 
              alt="Industrial tapes manufacturing"
              className="w-full h-full object-cover mix-blend-overlay filter grayscale"
              loading="eager"
            />
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/40 blur-[120px] pointer-events-none z-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#0F172A] to-transparent z-20"></div>

          <div className="relative container mx-auto px-6 lg:px-8 z-30 max-w-7xl flex flex-col items-start lg:items-center text-left lg:text-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm self-start lg:self-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-slate-300 uppercase tracking-widest font-medium text-xs">Premium OEM Partner Since 1957</span>
              </div>

              <h1 className="font-extrabold mb-4 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] drop-shadow-lg">
                {homeData?.H1 || 'Industrial Tape Manufacturer & Bulk Supplier in India'}
              </h1>
              
              <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                For over 65 years, Tape India has engineered high-performance adhesive solutions. From heavy-duty packaging to precision electronics, we deliver <span className="text-white font-medium">reliability across India.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-center w-full">
                <Link 
                  to="/products" 
                  className="bg-amber-500 text-slate-900 font-bold py-3.5 px-8 rounded-xl hover:bg-amber-400 transition-all shadow-sm text-base md:text-lg"
                >
                  Explore Products
                </Link>
                <Link 
                  to="/request-quote" 
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-slate-700 transition-all text-base md:text-lg shadow-sm"
                >
                  {homeData?.CTA || 'Request Bulk Quote'}
                </Link>
              </div>

            </AnimatedSection>
          </div>
        </section>

        {/* Global Stats / Trust Strip */}
        <section className="bg-slate-900 border-b border-slate-800 relative z-30 py-8">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
                    <div className="text-center px-4">
                        <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-1">65+</div>
                        <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">Years Experience</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-1">100+</div>
                        <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">Tape Variants</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-1">OEM</div>
                        <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">Certified Partner</div>
                    </div>
                    <div className="text-center px-4">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-1">PAN</div>
                        <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">India Supply</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
              <AnimatedSection>
                  <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Engineering Advantage</h2>
                  <p className="text-slate-500 mb-16 max-w-3xl mx-auto text-xl font-light">
                      It's not just tape. It's the structural integrity of your product.
                  </p>
              </AnimatedSection>
              <AnimatedSection className="delay-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                    <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ExperienceIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Decades of Expertise</h3>
                    <p className="text-slate-600 leading-relaxed font-light">Since 1957, our deep-rooted expertise ensures you get knowledgeable advice and proven solutions engineered for extreme conditions.</p>
                  </div>
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <QualityIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Unmatched Quality</h3>
                    <p className="text-slate-600 leading-relaxed font-light">We adhere to strict quality parameters, delivering reliable, high-performance tapes that meet your exact manufacturing specifications.</p>
                  </div>
                  <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-100 text-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <RangeIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Over 250+ Solutions</h3>
                    <p className="text-slate-600 leading-relaxed font-light">Our extensive product range caters to diverse industries, ensuring you find the right high-performance adhesive configuration.</p>
                  </div>
                </div>
              </AnimatedSection>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-24 bg-slate-50 border-b border-gray-200">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <AnimatedSection className="text-center md:flex md:items-end md:justify-between mb-16 text-left border-b border-gray-200 pb-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Popular Industrial Tapes</h2>
                        <p className="text-slate-500 mt-3 max-w-2xl text-lg font-light">
                            Explore our most trusted solutions, engineered for performance.
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="hidden md:inline-flex items-center bg-slate-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-slate-800 transition-all shadow-sm"
                    >
                        View Full Catalog <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </AnimatedSection>
                
                <AnimatedSection className="delay-200">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 gap-y-12">
                        {popularProducts.slice(0, 8).map(product => (
                            <ProductCard key={product.id} product={product} categoryName={categoryMap.get(product.category) || ''} />
                        ))}
                    </div>
                </AnimatedSection>
                
                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/products"
                        className="inline-flex items-center w-full justify-center bg-slate-900 text-white font-medium py-3.5 px-8 rounded-lg hover:bg-slate-800 transition-all shadow-sm"
                    >
                        View Full Catalog <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-24 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
              <AnimatedSection className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Mission Critical Sectors</h2>
                  <p className="text-slate-500 max-w-3xl mx-auto text-xl font-light">
                      High-performance tapes engineered for the unique demands of heavy industry.
                  </p>
              </AnimatedSection>
              
              <AnimatedSection className="delay-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                      {INDUSTRIES.map(industry => (
                          <div key={industry.id} className="group flex flex-col h-full bg-slate-50 rounded-3xl border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{industry.name}</h3>
                              <p className="text-slate-600 font-light leading-relaxed mb-6 flex-1 text-sm">{industry.subtitle}</p>
                              <Link to={`/industry/${industry.id}`} className="text-amber-600 font-semibold group-hover:text-amber-700 flex items-center mt-auto">
                                  Explore Sector <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                              </Link>
                          </div>
                      ))}
                  </div>
              </AnimatedSection>
          </div>
        </section>
        
        {/* Testimonials Section */}
         <section className="py-24 bg-slate-50 mb-12">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
              <AnimatedSection className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
                  <p className="text-slate-500 max-w-3xl mx-auto text-xl font-light">
                      Our commitment to quality and service has earned us the trust of businesses across India.
                  </p>
              </AnimatedSection>
              <AnimatedSection className="delay-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {settings.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
                          <i className="fas fa-quote-left text-slate-200 text-4xl absolute top-6 left-6"></i>
                          <p className="text-slate-600 relative z-10 pt-8 pb-6 font-light leading-relaxed italic text-lg">"{testimonial.quote}"</p>
                          <div className="border-t border-gray-100 pt-6">
                              <p className="font-bold text-slate-900">{testimonial.author}</p>
                              <p className="text-sm text-amber-600 font-medium tracking-wide uppercase">{testimonial.company}</p>
                          </div>
                      </div>
                  ))}
                </div>
              </AnimatedSection>
          </div>
        </section>

      </main>
    </>
  );
}
