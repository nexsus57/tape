
import { Link } from 'react-router-dom';
import { useIndustry } from '../context/IndustryContext';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import { INDUSTRY_ICONS_MAP } from '../components/icons/IndustryIcons';

export default function IndustriesPage() {
  const { industries } = useIndustry();

  return (
    <>
      <CanonicalTag />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Header */}
        <header className="bg-brand-blue-deep text-white py-16 text-center">
          <div className="container mx-auto px-5 lg:px-8">
            <AnimatedSection>
              <h1 className="font-extrabold text-white mb-4 text-3xl md:text-4xl">
                Industries We Serve
              </h1>
              <p className="text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
                We provide engineered adhesive solutions tailored to meet the unique challenges of your sector.
              </p>
            </AnimatedSection>
          </div>
        </header>

        <div className="container mx-auto px-5 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
               // Resolve Icon dynamically based on ID
               const iconName = industry.id === 'packaging-industry' ? 'BoxIcon' : 
                            industry.id === 'hvac-industry' ? 'WindIcon' :
                            industry.id === 'electronic-industry' ? 'CpuIcon' :
                            industry.id === 'print-labels-signage-industry' ? 'LayersIcon' :
                            industry.id === 'reflective-safety-industry' ? 'SunIcon' : 'SparklesIcon';
               
               const Icon = INDUSTRY_ICONS_MAP[iconName] || INDUSTRY_ICONS_MAP.SparklesIcon;

               // Resolve Gradient for Icon Background
               const gradientClasses = industry.id === 'packaging-industry' ? 'from-amber-500 to-orange-600' :
                                       industry.id === 'hvac-industry' ? 'from-cyan-500 to-blue-600' :
                                       industry.id === 'print-labels-signage-industry' ? 'from-slate-500 to-slate-700' :
                                       industry.id === 'electronic-industry' ? 'from-blue-600 to-indigo-700' :
                                       industry.id === 'reflective-safety-industry' ? 'from-yellow-400 to-orange-500' :
                                       'from-green-500 to-teal-600';

               return (
                 <AnimatedSection key={industry.id} delay={`delay-${(index % 3) * 100}`} className="h-full">
                    <Link 
                        to={`/products?industry=${industry.id}`}
                        className="group flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                    >
                        <div className="p-6 md:p-8 flex flex-col items-start h-full relative">
                            {/* Icon Container */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClasses} flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-7 h-7" />
                            </div>
                            
                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-accent transition-colors">
                                {industry.name}
                            </h2>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {industry.description}
                            </p>
                            
                            <div className="flex items-center text-brand-accent font-bold text-sm mt-auto group-hover:underline">
                                Browse Products 
                                <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                        {/* Decorative animated bottom bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${gradientClasses} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                    </Link>
                 </AnimatedSection>
               );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-white border-t border-gray-100 py-16">
          <div className="container mx-auto px-5 lg:px-8 text-center">
             <AnimatedSection>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Need a Custom Solution?</h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-8">
                  If your industry isn't listed or you have specific requirements, our technical team can help you find or develop the right adhesive tape.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <Link 
                     to="/contact" 
                     className="bg-white border-2 border-brand-blue-deep text-brand-blue-deep font-bold py-3 px-8 rounded-lg hover:bg-brand-blue-deep hover:text-white transition-all shadow-sm"
                   >
                     Contact Experts
                   </Link>
                   <Link 
                     to="/request-quote" 
                     className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
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
