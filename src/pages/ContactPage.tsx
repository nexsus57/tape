import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AnimatedSection from "../components/AnimatedSection";
import { useSettings } from '../context/SettingsContext';

export default function ContactPage() {
  const { settings } = useSettings();
  const { contact } = settings;

  return (
    <>
      <Helmet>
        <title>Contact Us | Tape India | Get In Touch</title>
        <meta name="description" content="Get in touch with Tape India. Find our address, phone number, and email. Reach out for technical support or to request a quote for your industrial tape needs." />
        <link rel="canonical" href="https://delightful-panda-036f75.netlify.app/contact" />
      </Helmet>
      <main className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <AnimatedSection>
              <div className="text-center mb-16">
                  <h1 className="font-extrabold">Contact Us</h1>
                  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                      We're here to help. Reach out to us with any questions, for technical support, or to request a personalized quote.
                  </p>
              </div>
          </AnimatedSection>

          <AnimatedSection className="delay-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                  {/* Left Column: Contact Details */}
                  <div className="bg-brand-gray p-8 md:p-10 rounded-lg shadow-sm">
                      <h2 className="mb-8">Get in Touch</h2>
                      <ul className="space-y-10">
                          <li className="flex items-start">
                              <i className="fas fa-map-marker-alt text-brand-accent w-6 text-center mt-1 mr-5 flex-shrink-0"></i>
                              <div>
                                  <h3 className="font-semibold text-gray-800">Our Address</h3>
                                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: contact.address.replace(/\n/g, '<br />') }} />
                              </div>
                          </li>
                           <li className="flex items-start">
                              <i className="fas fa-phone-alt text-brand-accent w-6 text-center mt-1 mr-5 flex-shrink-0"></i>
                              <div>
                                  <h3 className="font-semibold text-gray-800">Phone</h3>
                                  <a href={`tel:${contact.phone1}`} className="text-gray-600 hover:text-brand-blue transition-colors">{contact.phone1}</a>
                                  {contact.phone2 && (
                                    <>
                                        <span className="text-gray-500">, </span>
                                        <a href={`tel:${contact.phone2}`} className="text-gray-600 hover:text-brand-blue transition-colors">{contact.phone2}</a>
                                    </>
                                  )}
                              </div>
                          </li>
                           <li className="flex items-start">
                              <i className="fas fa-envelope text-brand-accent w-6 text-center mt-1 mr-5 flex-shrink-0"></i>
                              <div>
                                  <h3 className="font-semibold text-gray-800">Email</h3>
                                  <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-brand-blue transition-colors">{contact.email}</a>
                              </div>
                          </li>
                      </ul>
                       <div className="mt-12 border-t border-gray-200 pt-8">
                          <h3 className="font-bold">Need a Quote?</h3>
                          <p className="text-gray-600 mt-2 mb-5">For pricing and product inquiries, please use our dedicated quote request form for a faster response.</p>
                          <Link 
                              to="/request-quote"
                              className="inline-block bg-brand-accent text-white font-bold py-3 px-6 rounded-md hover:bg-brand-accent-dark transition-colors duration-300"
                          >
                            Request a Quote
                          </Link>
                      </div>
                  </div>

                  {/* Right Column: Map Placeholder */}
                  <div className="rounded-lg overflow-hidden shadow-md h-[400px] lg:h-auto">
                      <iframe 
                        src="https://maps.google.com/maps?q=Sha%20Kundanmal%20Misrimal%2C%2052%2C%20Narayana%20Mudali%20Street%2C%20Chennai&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="Sha Kundanmal Misrimal Location"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
              </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
