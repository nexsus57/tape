
import { Link } from 'react-router-dom';
import { useIndustry } from '../context/IndustryContext';
import { useCategories } from '../context/CategoryContext';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { INDUSTRY_ICONS_MAP } from '../components/icons/IndustryIcons';

export default function IndustriesPage() {
  const { industries } = useIndustry();
  const { categories } = useCategories();

  return (
    <>
      <CanonicalTag />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Premium Hero Section */}
        <header className="relative bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-dark lg:pb-32 lg:pt-24 pt-16 pb-20">
          {/* Subtle background overlay/texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
          
          <div className="container relative z-10 mx-auto px-5 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-brand-accent uppercase tracking-widest font-semibold text-sm mb-4 inline-block">Industrial Solutions</span>
              <h1 className="font-extrabold text-white mb-6 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
                Industries We Serve
              </h1>
              <p className="text-blue-100 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                We provide engineered adhesive solutions tailored to meet the unique challenges of your sector. Select your industry to find the right industrial tape.
              </p>
            </AnimatedSection>
          </div>
        </header>

        {/* Industry Section (Kept on top) */}
        <div className="container mx-auto px-5 lg:px-8 -mt-12 lg:-mt-20 relative z-20 mb-16">
          <div className="text-center mb-8 bg-white py-6 rounded-t-2xl shadow-sm border-b border-gray-100 hidden lg:block">
             <h2 className="text-2xl font-bold text-gray-800">Browse by Industry</h2>
             <p className="text-gray-500">Select your industry to find the right adhesive tape solutions for your applications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
               // Resolve Icon dynamically based on ID
               const iconName = industry.id === 'packaging-industry' ? 'BoxIcon' : 
                            industry.id === 'hvac-industry' ? 'WindIcon' :
                            industry.id === 'electronic-industry' ? 'CpuIcon' :
                            industry.id === 'print-labels-signage-industry' ? 'LayersIcon' :
                            industry.id === 'reflective-safety-industry' ? 'SunIcon' : 'SparklesIcon';
               
               const Icon = INDUSTRY_ICONS_MAP[iconName] || INDUSTRY_ICONS_MAP.SparklesIcon;

               return (
                 <AnimatedSection key={industry.id} delay={`delay-${(index % 3) * 100}`} className="h-full">
                    <Link 
                        to={`/industry/${industry.id}`}
                        className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-300 overflow-hidden"
                    >
                        <div className="p-8 flex flex-col items-center text-center h-full relative">
                            {/* Icon Container */}
                            <div className={`w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-blue-deep group-hover:bg-brand-blue-deep group-hover:text-brand-accent transition-colors duration-300 mb-6 shadow-sm border border-gray-100`}>
                                <Icon className="w-10 h-10" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brand-blue-deep transition-colors">
                                {industry.name}
                            </h2>
                            
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {industry.description.length > 90 ? industry.description.substring(0, 90) + '...' : industry.description}
                            </p>
                            
                            <div className="flex items-center text-brand-blue-deep font-semibold text-sm mt-auto group-hover:text-brand-accent transition-colors">
                                View Solutions 
                                <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-2"></i>
                            </div>
                        </div>
                    </Link>
                 </AnimatedSection>
               );
            })}
          </div>
        </div>

        {/* IMPORTANT SECTION: Browse All Products CTA */}
        <section className="bg-white py-20 border-t border-b border-gray-200">
           <div className="container mx-auto px-5 lg:px-8">
              <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                 <div className="text-center lg:text-left flex-1">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-blue-deep mb-4">Not Sure Which Industry?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                       Browse our complete catalog of high-performance industrial tapes and adhesive solutions structured by product category.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-sm font-semibold text-gray-700">
                       <div className="flex flex-col items-center lg:items-start gap-2">
                          <i className="fas fa-layer-group text-2xl text-brand-accent"></i>
                          <span>All Categories</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-2">
                          <i className="fas fa-cogs text-2xl text-brand-accent"></i>
                          <span>All Applications</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-2">
                          <i className="fas fa-truck-loading text-2xl text-brand-accent"></i>
                          <span>Bulk Supply</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-2">
                          <i className="fas fa-headset text-2xl text-brand-accent"></i>
                          <span>Expert Support</span>
                       </div>
                    </div>

                    <Link to="/products" className="inline-flex items-center justify-center space-x-2 bg-brand-blue-deep text-white font-bold py-4 px-10 rounded-xl hover:bg-brand-blue transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
                       <span>Browse All Products</span>
                       <i className="fas fa-arrow-right"></i>
                    </Link>
                 </div>
                 
                 <div className="hidden lg:block w-1/3">
                    <div className="relative">
                       <div className="absolute inset-0 bg-brand-accent transform rotate-3 rounded-2xl opacity-20"></div>
                       <img src="https://file.garden/aIULwzQ_QkPKQcGw/roll-duct-tape.png" alt="Industrial Tapes" className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl bg-white p-6 border border-gray-100" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Popular Categories Preview */}
        <section className="py-20 bg-gray-50">
           <div className="container mx-auto px-5 lg:px-8">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Industrial Tape Categories</h2>
                 <p className="text-gray-500 max-w-2xl mx-auto">Explore our extensive range of specialized adhesive tapes organized by product type and material.</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                 {categories.slice(0, 6).map((category, idx) => (
                    <AnimatedSection key={category.id} delay={`delay-${(idx % 4) * 100}`}>
                       <Link to={`/category/${category.id}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col">
                          <div className="h-40 overflow-hidden bg-gray-100 relative">
                             <img 
                                src={category.image} 
                                alt={category.name} 
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" 
                                loading="lazy"
                             />
                             <div className="absolute inset-0 bg-brand-blue-deep/0 group-hover:bg-brand-blue-deep/10 transition-colors duration-300"></div>
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                             <h3 className="font-bold text-gray-800 group-hover:text-brand-blue-deep transition-colors text-lg mb-2">{category.name}</h3>
                             <p className="text-gray-500 text-xs mb-3 flex-1 line-clamp-2">{category.description || category.subtitle}</p>
                             <div className="text-brand-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Explore <i className="fas fa-arrow-right ml-1"></i>
                             </div>
                          </div>
                       </Link>
                    </AnimatedSection>
                 ))}
              </div>
              
              <div className="text-center mt-10">
                 <Link to="/products" className="text-brand-blue-deep font-semibold hover:text-brand-accent transition-colors inline-flex items-center">
                    View All Categories <i className="fas fa-chevron-right ml-2 text-xs"></i>
                 </Link>
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-blue-dark text-white py-16 border-t-4 border-brand-accent">
          <div className="container mx-auto px-5 lg:px-8 text-center">
             <AnimatedSection>
                <h2 className="mb-4 text-3xl font-bold">Need a Custom Solution?</h2>
                <p className="text-blue-200 max-w-xl mx-auto mb-8 text-lg">
                  If your industry isn't listed or you have specific requirements, our technical team can help you find or develop the right adhesive tape.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <Link 
                     to="/contact" 
                     className="bg-white text-brand-blue-deep font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                   >
                     Contact Experts
                   </Link>
                   <Link 
                     to="/request-quote" 
                     className="bg-brand-accent text-white font-bold py-4 px-10 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-brand-accent/20"
                   >
                     Request Bulk Quote
                   </Link>
                </div>
             </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
