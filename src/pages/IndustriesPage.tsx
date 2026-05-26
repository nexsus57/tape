
import { Link } from 'react-router-dom';
import { useIndustry } from '../context/IndustryContext';
import { useCategories } from '../context/CategoryContext';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { INDUSTRY_ICONS_MAP } from '../components/icons/IndustryIcons';
import { INDUSTRIES } from '../constants';

export default function IndustriesPage() {
  const { industries } = useIndustry();
  const { categories } = useCategories();

  return (
    <>
      <CanonicalTag />
      
      <div className="bg-slate-50 min-h-screen text-slate-900">
        {/* Premium Hero Section */}
        <header className="relative bg-[#0F172A] pt-24 pb-32 md:pb-40 lg:pt-32 lg:pb-48 overflow-hidden border-b border-gray-800">
          {/* Subtle background overlay/texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] mix-blend-overlay"></div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 blur-[100px] pointer-events-none"></div>

          <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center max-w-7xl">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-slate-300 uppercase tracking-wider font-medium text-xs">Premium Industrial Adhesives</span>
              </div>
              <h1 className="font-extrabold text-white mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Industries We Serve
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                Engineered adhesive solutions tailored for the most demanding <span className="text-white font-medium">industrial environments</span>.
              </p>
            </AnimatedSection>
          </div>
        </header>

        {/* Industry Section */}
        <div className="container mx-auto px-6 lg:px-8 -mt-12 md:-mt-20 relative z-20 mb-12 md:mb-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
               const staticInd = INDUSTRIES.find(i => i.id === industry.id);
               const gradientClasses = staticInd?.gradientClasses || 'from-slate-500 to-slate-700';
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
                        className="group flex flex-col h-full bg-white rounded-3xl border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${gradientClasses}`}></div>
                        
                        <div className="flex items-center space-x-4 mb-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${gradientClasses} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                {industry.name}
                            </h2>
                        </div>
                        
                        <p className="text-slate-600 font-light leading-relaxed mb-6 flex-1 text-sm">
                            {industry.description.length > 100 ? industry.description.substring(0, 100) + '...' : industry.description}
                        </p>
                        
                        <div className="text-amber-600 font-semibold group-hover:text-amber-700 flex items-center mt-auto">
                            Explore Sector <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </Link>
                 </AnimatedSection>
               );
             })}
          </div>
        </div>

        {/* Not Sure Which Industry? Section */}
        <section className="py-16 md:py-24 relative bg-gray-100/50 border-t border-gray-200">
           <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                 <div className="text-center lg:text-left flex-1 relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Not Sure Which Industry?</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl font-light">
                       Explore our entire arsenal of high-performance tapes, categorized by material and specific application requirements.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 text-sm font-medium text-slate-600">
                       <div className="flex flex-col items-center lg:items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-gray-200 text-slate-500">
                             <i className="fas fa-layer-group text-lg"></i>
                          </div>
                          <span>By Material</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-gray-200 text-slate-500">
                             <i className="fas fa-cogs text-lg"></i>
                          </div>
                          <span>By App</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-gray-200 text-slate-500">
                             <i className="fas fa-boxes text-lg"></i>
                          </div>
                          <span>Bulk Supply</span>
                       </div>
                       <div className="flex flex-col items-center lg:items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-gray-200 text-slate-500">
                             <i className="fas fa-shield-alt text-lg"></i>
                          </div>
                          <span>OEM Trusted</span>
                       </div>
                    </div>

                    <Link to="/products" className="inline-flex items-center justify-center space-x-3 bg-slate-900 text-white font-medium py-3.5 px-8 rounded-lg hover:bg-slate-800 transition-colors w-full sm:w-auto shadow-sm">
                       <span>Browse Full Catalog</span>
                       <i className="fas fa-arrow-right"></i>
                    </Link>
                 </div>
                 
                 <div className="hidden lg:block w-[40%] relative z-10 px-8">
                    <img src="https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20Tape%20with%20Liner.webp" alt="Industrial Tapes" className="w-full h-auto object-contain filter drop-shadow-xl animate-float opacity-90" />
                 </div>
              </div>
           </div>
        </section>

        {/* Popular Categories Preview */}
        <section className="py-16 md:py-24 pb-12 md:pb-16 relative bg-white border-t border-gray-200">
           <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
              <div className="mb-10 md:mb-16 md:flex md:items-end justify-between border-b border-gray-200 pb-6">
                 <div>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Popular Tape Categories</h2>
                    <p className="text-slate-500 mt-2 text-lg font-light">Structured by adhesive type and core application logic.</p>
                 </div>
                 <Link to="/products" className="text-amber-600 font-medium hover:text-amber-700 transition-colors text-sm mt-4 md:mt-0 flex items-center group">
                    View All Categories <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                 </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                 {categories.slice(0, 6).map((category, idx) => {
                    // Accents based on category id
                    let accentColor = 'bg-slate-100 text-slate-700';
                    let label = 'STANDARD';
                    
                    if (category.id.includes('safe')) { 
                        accentColor = 'bg-amber-100 text-amber-700';
                        label = 'SAFETY';
                    } else if (category.id.includes('reflect')) { 
                        accentColor = 'bg-blue-100 text-blue-700';
                        label = 'HI-VIS';
                    } else if (category.id.includes('anti') || category.id.includes('esd')) { 
                        accentColor = 'bg-cyan-100 text-cyan-700';
                        label = 'ESD SAFE';
                    } else if (category.id.includes('teflon') || category.id.includes('ptfe')) { 
                        accentColor = 'bg-teal-100 text-teal-700';
                        label = 'HIGH TEMP';
                    } else if (category.id.includes('double')) { 
                        accentColor = 'bg-red-100 text-red-700';
                        label = 'BONDING';
                    } else if (category.id.includes('special')) { 
                        accentColor = 'bg-orange-100 text-orange-700';
                        label = 'SPECIALTY';
                    }

                    return (
                    <AnimatedSection key={category.id} delay={`delay-${(idx % 4) * 100}`}>
                       <Link to={`/category/${category.id}`} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden relative">
                          <div className={`absolute top-4 left-4 z-20 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${accentColor}`}>
                             {label}
                          </div>

                          <div className="h-48 md:h-56 bg-gradient-to-b from-gray-50 to-gray-100 relative flex items-center justify-center p-6 border-b border-gray-200">
                             <img 
                                src={category.image} 
                                alt={category.name} 
                                className="relative z-0 max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply" 
                                loading="lazy"
                             />
                          </div>
                          
                          <div className="p-6 flex-1 flex flex-col bg-white relative z-20 w-full">
                             <h3 className="font-bold text-slate-900 text-lg mb-2 tracking-tight">{category.name}</h3>
                             <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2 font-light leading-relaxed">{category.description || category.subtitle}</p>
                             
                             <div className="mt-auto text-sm font-medium flex items-center text-amber-600 transition-opacity">
                                Explore Category <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                             </div>
                          </div>
                       </Link>
                    </AnimatedSection>
                 )}) }
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0F172A] py-16 md:py-20 relative overflow-hidden mt-8 md:mt-12 mx-4 lg:mx-8 rounded-3xl mb-8 md:mb-12">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
             <AnimatedSection>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-sm">
                    <i className="fas fa-hard-hat text-2xl text-amber-500"></i>
                </div>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-white tracking-tight">Need a Custom Solution?</h2>
                <p className="text-slate-300 mb-10 text-lg font-light">
                  If your industry isn't listed or you have highly specific technical requirements, our engineering team can formulate the exact adhesive you need.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <Link 
                     to="/contact" 
                     className="bg-white/10 text-white border border-white/20 font-medium py-3.5 px-8 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all shadow-sm"
                   >
                     Contact Engineering
                   </Link>
                   <Link 
                     to="/request-quote" 
                     className="bg-amber-500 text-slate-900 font-semibold py-3.5 px-8 rounded-lg hover:bg-amber-400 transition-all shadow-sm"
                   >
                     Request Bulk Quote
                   </Link>
                </div>
             </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
