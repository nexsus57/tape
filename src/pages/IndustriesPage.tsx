
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
      
      <main className="bg-[#050B14] min-h-screen text-white">
        {/* Premium Hero Section */}
        <header className="relative bg-[#050B14] lg:pb-40 lg:pt-32 pt-24 pb-24 overflow-hidden border-b border-brand-accent/20">
          {/* Subtle background overlay/texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] mix-blend-overlay"></div>
          
          {/* Animated Glow Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/30 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent/20 blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>

          {/* Floating Product Elements - Desktop Only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
             <img src="https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp" className="absolute top-[15%] left-[5%] w-32 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-float opacity-70 rotate-[-15deg]" alt="" />
             <img src="https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp" className="absolute bottom-[10%] left-[15%] w-40 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-float opacity-80 rotate-[10deg]" style={{animationDelay: '1s'}} alt="" />
             <img src="https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp" className="absolute top-[20%] right-[8%] w-36 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-float opacity-70 rotate-[20deg]" style={{animationDelay: '1.5s'}} alt="" />
             <img src="https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp" className="absolute bottom-[15%] right-[10%] w-28 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-float opacity-60 rotate-[-25deg]" style={{animationDelay: '0.5s'}} alt="" />
             <img src="https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp" className="absolute top-[5%] right-[30%] w-24 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] animate-float opacity-50 rotate-[45deg]" style={{animationDelay: '2s'}} alt="" />
          </div>

          <div className="container relative z-10 mx-auto px-5 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                <span className="text-gray-300 uppercase tracking-wider font-semibold text-xs">Premium Industrial Adhesives</span>
              </div>
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-6 text-5xl md:text-6xl lg:text-7xl drop-shadow-lg tracking-tight">
                Industries We Serve
              </h1>
              <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
                Engineered adhesive solutions tailored for the most demanding <span className="text-white font-medium">industrial environments</span>.
              </p>
            </AnimatedSection>
          </div>
        </header>

        {/* Industry Section */}
        <div className="container mx-auto px-5 lg:px-8 -mt-16 relative z-20 mb-24">
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
                        className="group flex flex-col h-full bg-[#0a1628]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
                    >
                        {/* Premium Card Effects */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.gradientClasses} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>

                        <div className="p-8 flex flex-col items-start h-full relative z-10">
                            <div className="flex justify-between items-start w-full mb-6">
                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div className="text-xs font-mono font-bold tracking-widest text-brand-accent/80 bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                                    INDUSTRY
                                </div>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">
                                {industry.name}
                            </h2>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                {industry.description.length > 100 ? industry.description.substring(0, 100) + '...' : industry.description}
                            </p>
                            
                            <div className="flex items-center text-brand-accent font-semibold text-sm mt-auto group-hover:text-blue-400 transition-colors pt-4 border-t border-white/10 w-full relative">
                                <span className="relative overflow-hidden inline-flex items-center">
                                    <span className="transform transition-transform duration-300 group-hover:-translate-y-full absolute">View Solutions</span>
                                    <span className="transform transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">Explore Catalog</span>
                                </span>
                                <i className="fas fa-arrow-right ml-auto text-xs transition-all opacity-50 group-hover:opacity-100 group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </Link>
                 </AnimatedSection>
               );
             })}
          </div>
        </div>

        {/* Not Sure Which Industry? Section */}
        <section className="py-24 relative overflow-hidden">
           {/* Section Background & Glow */}
           <div className="absolute inset-0 bg-[#08111f] border-y border-white/5"></div>
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue-deep/20 blur-[120px] rounded-full pointer-events-none"></div>
           
           <div className="container mx-auto px-5 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                 
                 {/* Decorative elements within the panel */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                 <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left flex-1 relative z-10">
                       <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-md">Not Sure Which Industry?</h2>
                       <p className="text-lg text-gray-400 mb-10 max-w-2xl font-light">
                          Explore our entire arsenal of high-performance tapes, categorized by material and specific application requirements.
                       </p>
                       
                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 text-sm font-semibold text-gray-300">
                          <div className="flex flex-col items-center lg:items-start gap-3 group">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                                <i className="fas fa-layer-group text-xl"></i>
                             </div>
                             <span className="group-hover:text-white transition-colors">By Material</span>
                          </div>
                          <div className="flex flex-col items-center lg:items-start gap-3 group">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                                <i className="fas fa-cogs text-xl"></i>
                             </div>
                             <span className="group-hover:text-white transition-colors">By App</span>
                          </div>
                          <div className="flex flex-col items-center lg:items-start gap-3 group">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                                <i className="fas fa-boxes text-xl"></i>
                             </div>
                             <span className="group-hover:text-white transition-colors">Bulk Supply</span>
                          </div>
                          <div className="flex flex-col items-center lg:items-start gap-3 group">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                                <i className="fas fa-shield-alt text-xl"></i>
                             </div>
                             <span className="group-hover:text-white transition-colors">OEM Trusted</span>
                          </div>
                       </div>

                       <Link to="/products" className="group inline-flex items-center justify-center space-x-3 bg-brand-accent text-white font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all text-lg w-full sm:w-auto overflow-hidden relative">
                          <span className="relative z-10 text-gray-900 group-hover:text-black">Browse Full Catalog</span>
                          <i className="fas fa-arrow-right relative z-10 text-gray-900 group-hover:text-black group-hover:translate-x-1 transition-transform"></i>
                       </Link>
                    </div>
                    
                    <div className="hidden lg:block w-[40%] relative z-10">
                       <div className="relative">
                          {/* Floating tape visual */}
                          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
                          <img src="https://file.garden/aIULwzQ_QkPKQcGw/3M%20Foam%20Tape%20with%20Liner.webp" alt="Industrial Tapes" className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)] animate-float" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Popular Categories Preview */}
        <section className="py-24 relative overflow-hidden">
           <div className="container mx-auto px-5 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                 <span className="text-brand-accent uppercase tracking-widest font-semibold text-sm mb-4 inline-block">Product Families</span>
                 <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Popular Tape Categories</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto text-lg">Detailed categories structured by adhesive type, backing material, and core application logic.</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                 {categories.slice(0, 6).map((category, idx) => {
                    // Determine styling based on category
                    let glowColor = 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]';
                    let borderColor = 'group-hover:border-blue-500/30';
                    let accentColor = 'text-blue-400';
                    let label = 'STANDARD';
                    
                    if (category.id.includes('safe')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]'; 
                        borderColor = 'group-hover:border-yellow-500/30';
                        accentColor = 'text-yellow-400';
                        label = 'SAFETY';
                    } else if (category.id.includes('reflect')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]'; 
                        borderColor = 'group-hover:border-blue-400/30';
                        accentColor = 'text-blue-400';
                        label = 'HI-VIS';
                    } else if (category.id.includes('anti') || category.id.includes('esd')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'; 
                        borderColor = 'group-hover:border-cyan-500/30';
                        accentColor = 'text-cyan-400';
                        label = 'ESD SAFE';
                    } else if (category.id.includes('teflon') || category.id.includes('ptfe')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]'; 
                        borderColor = 'group-hover:border-teal-500/30';
                        accentColor = 'text-teal-400';
                        label = 'HIGH TEMP';
                    } else if (category.id.includes('double')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'; 
                        borderColor = 'group-hover:border-red-500/30';
                        accentColor = 'text-red-400';
                        label = 'BONDING';
                    } else if (category.id.includes('special')) { 
                        glowColor = 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]'; 
                        borderColor = 'group-hover:border-orange-500/30';
                        accentColor = 'text-orange-400';
                        label = 'SPECIALTY';
                    }

                    return (
                    <AnimatedSection key={category.id} delay={`delay-${(idx % 4) * 100}`}>
                       <Link to={`/category/${category.id}`} className={`group block bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden ${glowColor} ${borderColor} hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative`}>
                          
                          <div className={`absolute top-4 left-4 z-20 text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-black/50 border border-white/10 ${accentColor}`}>
                             {label}
                          </div>

                          <div className="h-48 md:h-56 overflow-hidden bg-gradient-to-b from-gray-900 to-[#0a1628] relative flex items-center justify-center p-6">
                             {/* Abstract background glow behind image */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 w-full h-full"></div>
                             
                             <img 
                                src={category.image} 
                                alt={category.name} 
                                className="relative z-0 max-h-full max-w-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out" 
                                loading="lazy"
                             />
                          </div>
                          
                          <div className="p-6 flex-1 flex flex-col border-t border-white/5 bg-[#08111f]/80 relative z-20">
                             <h3 className="font-bold text-white text-xl mb-3 tracking-wide">{category.name}</h3>
                             <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-2 font-light leading-relaxed">{category.description || category.subtitle}</p>
                             
                             <div className={`mt-auto text-sm font-semibold flex items-center ${accentColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                Explore Category <i className="fas fa-long-arrow-alt-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                             </div>
                          </div>
                       </Link>
                    </AnimatedSection>
                 )}) }
              </div>
              
              <div className="text-center mt-16">
                 <Link to="/products" className="text-gray-400 hover:text-white font-semibold transition-colors inline-flex items-center text-sm tracking-wider uppercase border-b border-gray-600 hover:border-white pb-1">
                    View All Categories <i className="fas fa-chevron-right ml-2 text-[10px]"></i>
                 </Link>
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-brand-blue-deep to-gray-900 border-t border-white/10 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
          <div className="container mx-auto px-5 lg:px-8 text-center relative z-10">
             <AnimatedSection>
                <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-accent/50">
                    <i className="fas fa-hard-hat text-3xl text-brand-accent"></i>
                </div>
                <h2 className="mb-6 text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Need a Custom Solution?</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">
                  If your industry isn't listed or you have highly specific technical requirements, our engineering team can formulate the exact adhesive you need.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Link 
                     to="/contact" 
                     className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-10 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all shadow-lg"
                   >
                     Contact Engineering
                   </Link>
                   <Link 
                     to="/request-quote" 
                     className="bg-brand-accent text-gray-900 font-extrabold py-4 px-10 rounded-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
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
