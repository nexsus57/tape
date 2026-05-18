import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { seoData } from '../data/seoData';
import { useMemo } from 'react';

export default function AboutPage() {
  const aboutData = useMemo(() => seoData.find(p => p["Page Name"] === "About Us"), []);

  return (
    <>
      <CanonicalTag />
      
      <main className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden pb-20">
        
        {/* 1. HERO SECTION UPGRADE - Cinematic */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-gray-800 pt-20">
          {/* Layered cinematic backgrounds */}
          <div className="absolute inset-0 bg-[#0F172A]"></div>
          
          {/* Subtle Factory Blueprint / Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdi00MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 blur-[100px] pointer-events-none"></div>

          {/* Floating Product Elements */}
          <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp" className="absolute top-[20%] right-[15%] w-48 lg:w-64 filter drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] opacity-90 animate-float rotate-[-15deg]" alt="Copper Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp" className="absolute bottom-[15%] right-[25%] w-40 lg:w-56 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-70 animate-float rotate-[25deg]" style={{ animationDelay: '2s' }} alt="Reflective Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp" className="absolute top-[30%] left-[10%] w-32 lg:w-48 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-50 animate-float rotate-[10deg]" style={{ animationDelay: '1s' }} alt="PTFE Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp" className="absolute bottom-[25%] left-[15%] w-36 lg:w-44 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-60 animate-float rotate-[-20deg]" style={{ animationDelay: '3s' }} alt="ESD Tape" />
          </div>

          <div className="container relative mx-auto px-6 lg:px-8 z-20 text-center md:text-left flex flex-col items-center md:items-start max-w-7xl">
            <AnimatedSection>
               <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 shadow-sm">
                 <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                 <span className="text-slate-300 uppercase tracking-[0.2em] font-medium text-xs lg:text-sm">Engineering Adhesion Since 1957</span>
               </div>
               
               <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl w-full text-white mb-6 drop-shadow-lg leading-[1.1] tracking-tight">
                 {aboutData?.H1 || 'Precision Tapes. \nFlawless Execution.'}
               </h1>
               
               <p className="text-slate-300 max-w-2xl text-xl lg:text-2xl font-light mb-12 leading-relaxed border-l-4 border-amber-500 pl-6 bg-gradient-to-r from-amber-500/5 to-transparent py-2">
                 We manufacture industrial-grade adhesive solutions engineered to perform in the world's most <span className="text-white font-medium">extreme manufacturing environments</span>.
               </p>

               {/* Trust Badges - Desktop Floating, Mobile Grid */}
               <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                 {["ISO 9001:2015", "Made in India", "PAN India Supply", "OEM Trusted", "100+ Solutions"].map((badge, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 rounded-lg px-4 py-2 text-sm font-medium tracking-wider flex items-center cursor-default">
                       <i className="fas fa-check-circle text-amber-500 mr-2"></i> {badge}
                    </div>
                 ))}
               </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. Visual Timeline Section (The Story) */}
        <section className="py-24 relative bg-white border-b border-gray-200">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
               <AnimatedSection className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 inline-block tracking-tight">{aboutData?.H2_1 || "Our Industrial Evolution"}</h2>
                  <p className="text-slate-500 max-w-3xl mx-auto text-lg font-light">From a local supplier to a Pan-India manufacturing powerhouse.</p>
               </AnimatedSection>

               <div className="relative max-w-5xl mx-auto">
                  {/* Vertical Line for Desktop */}
                  <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-200 -translate-x-1/2"></div>

                  {[
                    { year: "1957", title: "Foundation", desc: "Sha Kundanmal Misrimal established in Chennai, supplying foundational adhesive materials to local businesses.", icon: "fa-building" },
                    { year: "1990", title: "National Expansion", desc: "Expanded operations across multiple states, introducing new specialized tape categories.", icon: "fa-truck" },
                    { year: "2005", title: "Manufacturing Innovation", desc: "Invested in advanced slitting, rewinding, and coating machinery to control quality at the source.", icon: "fa-cogs" },
                    { year: "2015", title: "Industrial Specialization", desc: "Launched specialized product lines including High-Temp PTFE, EMI Shielding, and ESD Safe tapes.", icon: "fa-microchip" },
                    { year: "2025", title: "Pan-India Leader", desc: "Recognized as a premier B2B partner for India's largest OEMs, delivering thousands of miles of tape annually.", icon: "fa-globe-asia" },
                  ].map((item, idx) => (
                    <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       
                       <div className={`md:w-5/12 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-6 md:mb-0`}>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{item.year} <span className="text-gray-300 mx-2">|</span> {item.title}</h3>
                          <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                       </div>

                       {/* Central Node */}
                       <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center -my-4 md:my-0 flex-shrink-0 group hover:border-amber-500 transition-colors">
                           <i className={`fas ${item.icon} text-slate-400 group-hover:text-amber-500 text-lg relative z-10 transition-colors`}></i>
                       </div>

                       <div className="md:w-5/12"></div>
                    </AnimatedSection>
                  ))}
               </div>
            </div>
        </section>

        {/* 3. Why Choose Us (Premium Features) */}
        <section className="py-24 relative bg-slate-50 border-b border-gray-200">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{aboutData?.H2_2 || "The Engineering Advantage"}</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">It's not just tape. It's the structural integrity of your product.</p>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "OEM Focused", desc: "Designed explicitly for high-volume automated assembly lines and heavy industry.", icon: "fa-robot", bg: "bg-cyan-50", color: "text-cyan-600" },
                      { title: "Custom Solutions", desc: "Specific width slitting, custom die-cuts, and specialized adhesive formulations.", icon: "fa-sliders-h", bg: "bg-amber-50", color: "text-amber-600" },
                      { title: "Quality Assured", desc: "Strict batch testing for tensile strength, peel adhesion, and temperature resistance.", icon: "fa-shield-check", bg: "bg-blue-50", color: "text-blue-600" },
                      { title: "Bulk Availability", desc: "Massive inventory capable of sustaining continuous supply chains Pan-India.", icon: "fa-warehouse", bg: "bg-teal-50", color: "text-teal-600" }
                    ].map((feature, idx) => (
                      <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className="h-full">
                         <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                             <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                                <i className={`fas ${feature.icon} text-2xl ${feature.color}`}></i>
                             </div>
                             
                             <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                             <p className="text-slate-500 text-sm leading-relaxed font-light">{feature.desc}</p>
                         </div>
                      </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Product Showcase (Cinematic Horizontal Layout) */}
        <section className="py-24 bg-white border-b border-gray-200 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 text-center mb-16">
                 <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Engineered Product Lines</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Visualizing our core high-performance adhesive solutions.</p>
            </div>

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
               <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                 {[
                    { name: 'Copper Foil', img: 'https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp' },
                    { name: 'Reflective', img: 'https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp' },
                    { name: 'EMI Shielding', img: 'https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp' },
                    { name: 'Floor Marking', img: 'https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp' },
                    { name: 'PTFE Teflon', img: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp' },
                    { name: 'ESD Kapton', img: 'https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp' }
                 ].map((prod, idx) => (
                    <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className="group relative">
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl aspect-square flex items-center justify-center p-6 mb-4 relative overflow-hidden transition-colors mix-blend-multiply group-hover:border-gray-300">
                            <img src={prod.img} alt={prod.name} className="relative z-20 w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                        </div>
                        <h4 className="text-center text-sm font-semibold text-slate-700">{prod.name}</h4>
                    </AnimatedSection>
                 ))}
               </div>
            </div>
        </section>

        {/* 5. Certification / Trust Strip */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between opacity-90 gap-8">
                <p className="text-slate-400 uppercase tracking-widest font-semibold text-xs md:text-sm whitespace-nowrap hidden lg:block">Industry Certified Standard</p>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {['ISO 9001', 'RoHS Compliant', 'REACH', 'CE Marking', 'Make In India'].map((cert, i) => (
                        <div key={i} className="flex items-center space-x-3 text-slate-400">
                           <i className="fas fa-certificate text-lg opacity-50"></i>
                           <span className="font-semibold text-sm tracking-wider uppercase">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. Cinematic CTA Section */}
        <section className="bg-[#0F172A] py-20 relative overflow-hidden mt-12 mx-4 lg:mx-8 rounded-3xl mb-12">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <AnimatedSection>
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-sm">
                        <i className="fas fa-hard-hat text-2xl text-amber-500"></i>
                    </div>
                    <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Ready to Build Something Great Together?
                    </h2>
                    <p className="text-slate-300 mb-10 text-lg font-light">
                        Secure your supply chain with premium industrial tapes manufactured to exacting specifications.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/request-quote" 
                            className="bg-amber-500 text-slate-900 font-semibold py-3.5 px-8 rounded-lg hover:bg-amber-400 transition-all shadow-sm"
                        >
                            {aboutData?.CTA || 'Request a Bulk Quote'}
                        </Link>
                        <Link 
                            to="/products" 
                            className="bg-white/10 text-white border border-white/20 font-medium py-3.5 px-8 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all shadow-sm"
                        >
                            Explore Full Catalog
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
      </main>
    </>
  );
}
