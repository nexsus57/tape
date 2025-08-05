import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';
import AnimatedSection from '../components/AnimatedSection';

export default function RequestQuotePage() {
    const [searchParams] = useSearchParams();
    const { products } = useProducts();

    const [message, setMessage] = useState('');
    const [redirectUrl, setRedirectUrl] = useState('');

    useEffect(() => {
        // Formsubmit requires an absolute URL for the redirect.
        // We construct it from the current location.
        setRedirectUrl(`${window.location.origin}/thank-you.html`);
    }, []);

    useEffect(() => {
        const productId = searchParams.get('product');
        if (productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                setMessage(`I'm interested in getting a quote for: ${product.name}.\n\n`);
            }
        }
    }, [searchParams, products]);

    const formFields = [
        { name: 'name', label: 'Full Name', type: 'text', required: true, autoComplete: 'name' },
        { name: 'email', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true, autoComplete: 'tel' },
    ];

    return (
        <>
            <Helmet>
                <title>Request a Quote | Tape India</title>
                <meta name="description" content="Get a personalized quote for your industrial tape needs. Fill out our form, and our experts will get back to you with pricing and information." />
                <link rel="canonical" href="https://delightful-panda-036f75.netlify.app/request-quote" />
            </Helmet>
            <main className="bg-brand-gray py-16 md:py-24">
                <div className="container mx-auto px-5 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h1 className="font-extrabold">Request a Quote</h1>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                Tell us about your project, and our adhesive experts will provide a customized quote to meet your needs.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="delay-100">
                        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-lg">
                             <form action="https://formsubmit.co/tapeindiain@yahoo.com" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {formFields.map(field => (
                                        <div key={field.name}>
                                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                                                {field.label}<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                autoComplete={field.autoComplete}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* FormSubmit settings */}
                                <input type="hidden" name="_next" value={redirectUrl} />
                                <input type="hidden" name="_honey" style={{ display: 'none' }} />
                                <input type="hidden" name="_subject" value="New Quote Request from Website!" />

                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message / Product Requirements<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                                        required
                                        placeholder="Please describe your application, required dimensions, quantity, and any other specifications."
                                    ></textarea>
                                </div>

                                <div className="mt-8 text-center">
                                    <button
                                        type="submit"
                                        className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-12 rounded-lg text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </main>
        </>
    );
}
