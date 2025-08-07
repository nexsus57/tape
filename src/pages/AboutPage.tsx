import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { QualityIcon, TeamIcon, InnovationIcon, IntegrityIcon } from '../components/icons/WhyChooseUsIcons';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | 65+ Years as India's Leading Tape Manufacturer</title>
        <meta
          name="description"
          content="Learn about Tape India's history since 1957. Discover our mission to be India's most trusted partner in engineered adhesion, and our commitment to quality, partnership, and innovation."
        />
        <link rel="canonical" href="https://delightful-panda-036f75.netlify.app/about" />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-brand-blue text-white">
        <div className="container mx-auto px-5 lg:px-8 py-20 md:py-24 text-center">
          <AnimatedSection>
            <h1 className="font-extrabold mb-4 text-white">
              A Legacy of Adhesion Since 1957
            </h1>
            <p className="text-gray-200 max-w-4xl mx-auto">
              For over 65 years, Tape India has been more than just a manufacturer; we are the foundational B2B partner for India’s leading industries, delivering reliability you can trust.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">

          {/* Our Story */}
          <AnimatedSection className="max-w-4xl mx-auto mb-20 lg:mb-24">
            <h2 className="mb-8 text-center">
              Our Story: From Local Roots to National Reach
            </h2>
            <div className="text-gray-700 space-y-6">
              <p>
                Our journey began in 1957 when Sha Kundanmal Misrimal was founded in Chennai with a clear vision: to supply high-quality adhesive materials to local businesses. Fueled by a commitment to excellence and customer satisfaction, we quickly grew from a small proprietorship into a trusted name in the industrial supply sector.
              </p>
              <p>
                Through decades of technological evolution and changing market demands, we have consistently invested in advanced manufacturing, rigorous quality control, and a diverse product portfolio. Today, Tape India stands as a testament to that legacy—a modern, dynamic company with a national footprint, still guided by the core principles of quality and reliability that our founders instilled.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission and Vision Section */}
          <AnimatedSection className="mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-brand-gray p-10 md:p-16 rounded-lg">
              <div className="text-center lg:text-left">
                <h3 className="mb-4 flex items-center justify-center lg:justify-start">
                  <i className="fas fa-bullseye text-brand-accent mr-3"></i>
                  Our Mission
                </h3>
                <p>To empower Indian industries with superior adhesive solutions that enhance operational efficiency, ensure product integrity, and drive innovation.</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="mb-4 flex items-center justify-center lg:justify-start">
                  <i className="fas fa-eye text-brand-accent mr-3"></i>
                  Our Vision
                </h3>
                <p>To be India’s most trusted and pioneering partner in engineered adhesion, setting the benchmark for quality, reliability, and customer-centric solutions.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Our Core Values Section */}
          <AnimatedSection>
            <h2 className="mb-16 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-accent">
                <QualityIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                <h3 className="mb-3">Uncompromising Quality</h3>
                <p className="text-gray-600">Our name is synonymous with reliability. Every product undergoes rigorous testing to meet the highest performance standards.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-accent">
                <TeamIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                <h3 className="mb-3">Customer Partnership</h3>
                <p className="text-gray-600">We succeed when our clients succeed. We work collaboratively to understand your unique challenges and find the perfect solution.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-accent">
                <InnovationIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                <h3 className="mb-3">Driven by Innovation</h3>
                <p className="text-gray-600">Industries evolve, and so do we. We invest in R&D to stay ahead of the curve, creating next-generation products for tomorrow's challenges.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-accent">
                <IntegrityIcon className="h-12 w-12 mx-auto text-brand-accent mb-5" />
                <h3 className="mb-3">Integrity in Action</h3>
                <p className="text-gray-600">Trust is earned. We conduct our business with unwavering integrity and transparency to build lasting, ethical relationships.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-brand-blue-dark">
        <div className="container mx-auto px-5 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-white mb-5">Partner with an Industry Leader</h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10">
              Ready to experience the Tape India difference? Explore our extensive product range or contact our technical experts to discuss your specific requirements.
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors w-full sm:w-auto">View Our Products</Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue-dark transition-colors w-full sm:w-auto">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
