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
      
      <main className="bg-[#050B14] min-h-screen text-white overflow-hidden">
        
        {/* 1. HERO SECTION UPGRADE - Cinematic */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-accent/20 pt-20">
          {/* Layered cinematic backgrounds */}
          <div className="absolute inset-0 bg-[#02050A]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-deep/80 via-transparent to-[#050B14] z-0"></div>
          
          {/* Subtle Factory Blueprint / Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdi00MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>

          {/* Large Glowing Orbs */}
          <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-brand-blue/20 rounded-full blur-[150px] mix-blend-screen opacity-50 z-0"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-50 z-0"></div>

          {/* Floating Product Elements */}
          <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp" className="absolute top-[20%] right-[15%] w-48 lg:w-64 filter drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] opacity-90 animate-float rotate-[-15deg]" alt="Copper Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp" className="absolute bottom-[15%] right-[25%] w-40 lg:w-56 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-70 animate-float rotate-[25deg]" style={{ animationDelay: '2s' }} alt="Reflective Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp" className="absolute top-[30%] left-[10%] w-32 lg:w-48 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-50 animate-float rotate-[10deg]" style={{ animationDelay: '1s' }} alt="PTFE Tape" />
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp" className="absolute bottom-[25%] left-[15%] w-36 lg:w-44 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-60 animate-float rotate-[-20deg]" style={{ animationDelay: '3s' }} alt="ESD Tape" />
          </div>

          <div className="container relative mx-auto px-5 lg:px-8 z-20 text-center md:text-left flex flex-col items-center md:items-start max-w-7xl">
            <AnimatedSection>
               <div className="inline-flex items-center space-x-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                 <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
                 <span className="text-gray-300 uppercase tracking-[0.2em] font-medium text-xs lg:text-sm">Engineering Adhesion Since 1957</span>
               </div>
               
               <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl w-full text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-gray-500 mb-6 drop-shadow-2xl leading-[1.1] tracking-tighter">
                 {aboutData?.H1 || 'Precision Tapes. \nFlawless Execution.'}
               </h1>
               
               <p className="text-gray-400 max-w-2xl text-xl lg:text-2xl font-light mb-12 leading-relaxed border-l-4 border-brand-accent pl-6 bg-gradient-to-r from-brand-accent/5 to-transparent py-2">
                 We manufacture industrial-grade adhesive solutions engineered to perform in the world's most <span className="text-white font-medium">extreme manufacturing environments</span>.
               </p>

               {/* Trust Badges - Desktop Floating, Mobile Grid */}
               <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                 {["ISO 9001:2015", "Made in India", "PAN India Supply", "OEM Trusted", "100+ Solutions"].map((badge, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-lg px-4 py-2 text-sm font-semibold tracking-wider flex items-center hover:bg-white/10 hover:border-brand-accent/30 transition-colors cursor-default">
                       <i className="fas fa-check-circle text-brand-accent/80 mr-2"></i> {badge}
                    </div>
                 ))}
               </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. Visual Timeline Section (The Story) */}
        <section className="py-24 relative bg-[#03070E]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="container mx-auto px-5 lg:px-8">
               <AnimatedSection className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4 inline-block">{aboutData?.H2_1 || "Our Industrial Evolution"}</h2>
                  <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light">From a local supplier to a Pan-India manufacturing powerhouse.</p>
               </AnimatedSection>

               <div className="relative max-w-5xl mx-auto">
                  {/* Vertical Line for Desktop */}
                  <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-accent to-transparent -translate-x-1/2 opacity-30 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>

                  {[
                    { year: "1957", title: "Foundation", desc: "Sha Kundanmal Misrimal established in Chennai, supplying foundational adhesive materials to local businesses.", icon: "fa-building" },
                    { year: "1990", title: "National Expansion", desc: "Expanded operations across multiple states, introducing new specialized tape categories.", icon: "fa-truck" },
                    { year: "2005", title: "Manufacturing Innovation", desc: "Invested in advanced slitting, rewinding, and coating machinery to control quality at the source.", icon: "fa-cogs" },
                    { year: "2015", title: "Industrial Specialization", desc: "Launched specialized product lines including High-Temp PTFE, EMI Shielding, and ESD Safe tapes.", icon: "fa-microchip" },
                    { year: "2025", title: "Pan-India Leader", desc: "Recognized as a premier B2B partner for India's largest OEMs, delivering thousands of miles of tape annually.", icon: "fa-globe-asia" },
                  ].map((item, idx) => (
                    <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       
                       <div className={`md:w-5/12 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-6 md:mb-0`}>
                          <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">{item.year} <span className="text-brand-accent/50 mx-2">|</span> {item.title}</h3>
                          <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                       </div>

                       {/* Central Glow Node */}
                       <div className="relative z-10 w-16 h-16 rounded-full bg-[#0a1628] border-2 border-brand-accent shadow-[0_0_30px_rgba(250,204,21,0.2)] flex items-center justify-center -my-4 md:my-0 flex-shrink-0 group hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-shadow">
                           <div className="absolute inset-0 rounded-full bg-brand-accent/10 animate-ping opacity-50"></div>
                           <i className={`fas ${item.icon} text-brand-accent text-xl relative z-10`}></i>
                       </div>

                       <div className="md:w-5/12"></div>
                    </AnimatedSection>
                  ))}
               </div>
            </div>
        </section>

        {/* 3. Why Choose Us (Premium Features) */}
        <section className="py-24 relative overflow-hidden bg-[#050B14]">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[150px] pointer-events-none skew-x-12 translate-x-1/4"></div>

            <div className="container mx-auto px-5 lg:px-8 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{aboutData?.H2_2 || "The Engineering Advantage"}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">It's not just tape. It's the structural integrity of your product.</p>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                      { title: "OEM Focused", desc: "Designed explicitly for high-volume automated assembly lines and heavy industry.", icon: "fa-robot", glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]", color: "text-cyan-400", border: "border-cyan-500/30" },
                      { title: "Custom Solutions", desc: "Specific width slitting, custom die-cuts, and specialized adhesive formulations.", icon: "fa-sliders-h", glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]", color: "text-yellow-400", border: "border-yellow-500/30" },
                      { title: "Quality Assured", desc: "Strict batch testing for tensile strength, peel adhesion, and temperature resistance.", icon: "fa-shield-check", glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]", color: "text-blue-400", border: "border-blue-500/30" },
                      { title: "Bulk Availability", desc: "Massive inventory capable of sustaining continuous supply chains Pan-India.", icon: "fa-warehouse", glow: "shadow-[0_0_30px_rgba(20,184,166,0.15)]", color: "text-teal-400", border: "border-teal-500/30" }
                    ].map((feature, idx) => (
                      <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className="h-full">
                         <div className={`h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden ${feature.glow}`}>
                             <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${feature.color}`}></div>
                             
                             <div className={`w-14 h-14 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center mb-6 group-hover:border-current transition-colors ${feature.color} ${feature.border}`}>
                                <i className={`fas ${feature.icon} text-2xl`}></i>
                             </div>
                             
                             <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                             <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                         </div>
                      </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Product Showcase (Cinematic Horizontal Layout) */}
        <section className="py-24 bg-[#0a1628] border-y border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] to-transparent h-32 opacity-50"></div>
            
            <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center mb-16">
                 <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Engineered Product Lines</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">Visualizing our core high-performance adhesive solutions.</p>
            </div>

            <div className="container mx-auto px-5 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                 {[
                    { name: 'Copper Foil', img: 'https://file.garden/aIULwzQ_QkPKQcGw/copper%20tape%202.webp' },
                    { name: 'Reflective', img: 'https://file.garden/aIULwzQ_QkPKQcGw/pvc%20reflective%20tape.webp' },
                    { name: 'EMI Shielding', img: 'https://file.garden/aIULwzQ_QkPKQcGw/emi%20sheliding%20tape.webp' },
                    { name: 'Floor Marking', img: 'https://file.garden/aIULwzQ_QkPKQcGw/floor%20marking%20tape.webp' },
                    { name: 'PTFE Teflon', img: 'https://file.garden/aIULwzQ_QkPKQcGw/ptef%20silicone%20adhe.webp' },
                    { name: 'ESD Kapton', img: 'https://file.garden/aIULwzQ_QkPKQcGw/esd%20kapton.webp' }
                 ].map((prod, idx) => (
                    <AnimatedSection key={idx} delay={`delay-${idx * 100}`} className="group relative">
                        <div className="bg-white/5 border border-white/10 rounded-xl aspect-square flex items-center justify-center p-6 mb-4 relative overflow-hidden hover:border-brand-accent/40 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            
                            {/* Inner Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-brand-accent blur-xl"></div>
                            
                            <img src={prod.img} alt={prod.name} className="relative z-20 w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h4 className="text-center text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{prod.name}</h4>
                    </AnimatedSection>
                 ))}
               </div>
            </div>
        </section>

        {/* 5. Certification / Trust Strip */}
        <section className="py-16 bg-[#03070E] border-b border-white/5 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQgMCAwIDQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>
            <div className="container mx-auto px-5 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between opacity-80 mt-4 gap-8">
                <p className="text-gray-500 uppercase tracking-widest font-semibold text-xs md:text-sm whitespace-nowrap hidden lg:block">Industry Certified Standard</p>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {['ISO 9001', 'RoHS Compliant', 'REACH', 'CE Marking', 'Make In India'].map((cert, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors filter grayscale hover:grayscale-0">
                           <i className="fas fa-certificate text-xl opacity-50"></i>
                           <span className="font-bold text-sm tracking-wider uppercase">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. Cinematic CTA Section */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] to-brand-blue-deep z-0"></div>
            
            <div className="absolute inset-0 opacity-20 z-0">
                <img src="https://file.garden/aIULwzQ_QkPKQcGw/roll-duct-tape.png" className="w-full h-full object-cover mix-blend-luminosity filter blur-sm grayscale" alt="" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#050B14]/80 to-transparent z-10"></div>

            <div className="container mx-auto px-5 lg:px-8 relative z-20">
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tighter drop-shadow-2xl">
                        Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-600">Great</span> Together?
                    </h2>
                    <p className="text-gray-300 mb-12 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Secure your supply chain with premium industrial tapes manufactured to exacting specifications.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link 
                            to="/request-quote" 
                            className="bg-brand-accent text-gray-900 font-extrabold py-5 px-12 rounded-xl text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(250,204,21,0.4)] relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10">{aboutData?.CTA || 'Request a Bulk Quote'}</span>
                        </Link>
                        <Link 
                            to="/products" 
                            className="bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold py-5 px-12 rounded-xl text-lg hover:bg-white/10 transition-all hover:border-white/40"
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
