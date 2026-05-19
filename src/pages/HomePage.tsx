import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';
import { useSettings } from '../context/SettingsContext';
import { INDUSTRIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { ExperienceIcon, QualityIcon, RangeIcon } from '../components/icons/WhyChooseUsIcons';
import { INDUSTRY_ICONS_MAP } from '../components/icons/IndustryIcons';
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
        const popular = settings.popularProductIds.map(id => productMap.get(id)).filter((p): p is Product => Boolean(p));
        // Force polyimide-tape to be included per user request, if not already there
        if (!popular.find(p => p.id === 'polyimide-tape')) {
            const polyimide = productMap.get('polyimide-tape');
            if (polyimide) popular.push(polyimide);
        }
        return popular;
    }, [products, settings.popularProductIds]);

  return (
    <>
      <CanonicalTag />
      
      <main className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden pb-20">
        {/* Premium Architectural Hero Section */}
        <section className="relative text-white overflow-hidden pb-8 md:pb-10 pt-12 md:pt-16 border-b border-gray-800 bg-[#0F172A]">
          {/* Base Background layer */}
          <div className="absolute inset-0 bg-[#0F172A] z-0"></div>
          
          <div className="absolute inset-0 z-10 opacity-30">
            <img 
              src="https://file.garden/aIULwzQ_QkPKQcGw/banner.webp" 
              alt="Industrial tapes manufacturing"
              className="w-full h-full object-cover object-bottom mix-blend-overlay filter grayscale"
              loading="eager"
            />
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/40 blur-[120px] pointer-events-none z-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-[#0F172A] to-transparent z-20"></div>

          <div className="relative container mx-auto px-4 lg:px-8 z-30 max-w-7xl flex flex-col items-start lg:items-center text-left lg:text-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm self-start lg:self-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-slate-300 uppercase tracking-widest font-medium text-[10px] md:text-xs">Premium OEM Partner Since 1957</span>
              </div>

              <h1 className="font-bold mb-3 text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] drop-shadow-lg">
                {homeData?.H1 || 'Industrial Tape Manufacturer & Bulk Supplier in India'}
              </h1>
              
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                For over 65 years, Tape India has engineered high-performance adhesive solutions. From heavy-duty packaging to precision electronics, we deliver <span className="text-white font-medium">reliability across India.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-start lg:justify-center w-full">
                <Link 
                  to="/products" 
                  className="bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-all shadow-sm text-sm md:text-base"
                >
                  Explore Products
                </Link>
                <Link 
                  to="/request-quote" 
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-all text-sm md:text-base shadow-sm"
                >
                  {homeData?.CTA || 'Request Bulk Quote'}
                </Link>
              </div>

            </AnimatedSection>
          </div>
        </section>

        {/* Global Stats / Trust Strip */}
        <section className="bg-slate-900 border-b border-slate-800 relative z-30 py-6">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x divide-slate-800">
                    <div className="text-center px-2 md:px-4">
                        <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">65+</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wide uppercase">Years Experience</div>
                    </div>
                    <div className="text-center px-2 md:px-4">
                        <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">100+</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wide uppercase">Tape Variants</div>
                    </div>
                    <div className="text-center px-2 md:px-4">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">OEM</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wide uppercase">Certified Partner</div>
                    </div>
                    <div className="text-center px-2 md:px-4">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">PAN</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wide uppercase">India Supply</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section - Bento Grid */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
              <AnimatedSection className="text-center mb-10">
                  <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">The Engineering Advantage</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
                      It's not just tape. It's the structural integrity of your product.
                  </p>
              </AnimatedSection>
              <AnimatedSection className="delay-200">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
                  
                  {/* Big Card 1 */}
                  <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-10 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col items-start justify-end relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-amber-100/50 rounded-full blur-3xl group-hover:bg-amber-200/50 transition-colors"></div>
                    <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-16 shadow-sm">
                        <ExperienceIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight relative z-10">Decades of Expertise</h3>
                    <p className="text-slate-600 leading-relaxed font-light relative z-10 max-w-md">Since 1957, our deep-rooted expertise ensures you get knowledgeable advice and proven solutions engineered for extreme conditions.</p>
                  </div>
                  
                  {/* Smaller Card 2 */}
                  <div className="md:col-span-2 md:row-span-1 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <QualityIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unmatched Quality</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">We adhere to strict quality parameters, delivering reliable high-performance tapes.</p>
                    </div>
                  </div>
                  
                  {/* Smaller Card 3 */}
                  <div className="md:col-span-2 md:row-span-1 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center gap-6">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <RangeIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Over 250+ Solutions</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">Extensive product range for diverse industries, ensuring you find the right configuration.</p>
                    </div>
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
                        {popularProducts.slice(0, 4).map(product => (
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
                      {INDUSTRIES.map((industry, index) => {
                          const iconName = industry.id === 'packaging-industry' ? 'BoxIcon' : 
                                       industry.id === 'hvac-industry' ? 'WindIcon' :
                                       industry.id === 'electronic-industry' ? 'CpuIcon' :
                                       industry.id === 'print-labels-signage-industry' ? 'LayersIcon' :
                                       industry.id === 'reflective-safety-industry' ? 'SunIcon' : 'SparklesIcon';
                          const Icon = INDUSTRY_ICONS_MAP[iconName] || INDUSTRY_ICONS_MAP.SparklesIcon;

                          return (
                          <div key={industry.id} className="group flex flex-col h-full bg-white rounded-3xl border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300 relative overflow-hidden">
                              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${industry.gradientClasses}`}></div>
                              
                              <div className="flex items-center space-x-4 mb-6">
                                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${industry.gradientClasses} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                      <Icon className="w-7 h-7" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{industry.name}</h3>
                              </div>
                              
                              <p className="text-slate-600 font-light leading-relaxed mb-6 flex-1 text-sm">{industry.subtitle}</p>
                              
                              <Link to={`/industry/${industry.id}`} className="text-amber-600 font-semibold group-hover:text-amber-700 flex items-center mt-auto">
                                  Explore Sector <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                              </Link>
                          </div>
                          );
                      })}
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
