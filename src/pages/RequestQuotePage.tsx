
import { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';

export default function RequestQuotePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { products } = useProducts();
    const { cart, removeFromCart, clearCart, addToCart } = useCart();
    
    // Memoize search params to avoid unnecessary re-creation
    const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

    const [message, setMessage] = useState('');
    const [redirectUrl, setRedirectUrl] = useState('');
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle direct link from product page query param without client-side redirect
    const hasAddedFromQuery = useRef(false);
    useEffect(() => {
        if (hasAddedFromQuery.current) return;
        const productId = searchParams.get('product');
        if (productId) {
            hasAddedFromQuery.current = true;
            const isAlreadyInCart = cart.some(item => item.productId === productId);
            if (!isAlreadyInCart) {
                addToCart(productId);
            }
        }
    }, [searchParams, addToCart, cart]);

    useEffect(() => {
        setRedirectUrl(`${window.location.origin}/thank-you.html`);
    }, []);

    const cartProducts = useMemo(() => {
        return cart.map(item => {
            const product = products.find(p => p.id === item.productId);
            return {
                ...item,
                details: product
            };
        }).filter(item => item.details);
    }, [cart, products]);

    // Generate the message based on cart contents
    const generatedMessage = useMemo(() => {
        if (cartProducts.length === 0) return '';
        let msg = "I would like to request a quote for the following items:\n\n";
        cartProducts.forEach((item, index) => {
            msg += `${index + 1}. ${item.details?.name} (Qty: ${item.quantity})\n`;
        });
        msg += "\nAdditional Requirements:\n";
        return msg;
    }, [cartProducts]);

    useEffect(() => {
        if (generatedMessage && !message) {
            setMessage(generatedMessage);
        }
    }, [generatedMessage, message]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            if (fileInputRef.current) {
                fileInputRef.current.files = e.dataTransfer.files;
                setFileName(e.dataTransfer.files[0].name);
            }
        }
    };

    const formFields = [
        { name: 'name', label: 'Full Name', type: 'text', required: true, autoComplete: 'name' },
        { name: 'email', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true, autoComplete: 'tel' },
        { name: 'company', label: 'Company Name', type: 'text', required: false, autoComplete: 'organization' },
    ];

    const trustBadges = [
        { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Best Price Guarantee", desc: "For bulk and industrial orders" },
        { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Fast Response", desc: "Quotes returned within 2 hours" },
        { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />, title: "Custom Solutions", desc: "Tailored to your exact specs" }
    ];

    return (
        <>
            <CanonicalTag />
            <main className="bg-slate-50 py-10 md:py-16 min-h-screen">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <AnimatedSection>
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Request a Quote</h1>
                            <p className="mt-2 text-slate-600 font-medium max-w-xl">
                                Submit your requirements below. Our engineering and sales team will provide a customized bulk pricing proposal quickly.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left Column: Cart Summary & Trust */}
                        <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                            <AnimatedSection className="delay-100">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                    <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                            Quote Basket <span className="bg-slate-100 text-slate-700 text-xs py-1 px-2.5 rounded-full ml-1">{cart.length}</span>
                                        </h2>
                                        {cart.length > 0 && (
                                            <button onClick={clearCart} className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider">Clear All</button>
                                        )}
                                    </div>
                                    
                                    {cartProducts.length > 0 ? (
                                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {cartProducts.map((item) => (
                                                <div key={item.productId} className="flex items-center gap-4 bg-slate-50 border border-gray-100 p-3 rounded-xl group hover:border-amber-200 transition-colors">
                                                    <div className="relative flex-shrink-0">
                                                        <img 
                                                            src={item.details?.image} 
                                                            alt={item.details?.name} 
                                                            className="w-[72px] h-[72px] object-cover rounded-lg bg-white border border-gray-100 mix-blend-multiply"
                                                            loading="lazy"
                                                        />
                                                        <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{item.quantity}</span>
                                                    </div>
                                                    <div className="flex-grow min-w-0">
                                                        <h3 className="font-bold text-sm text-slate-800 line-clamp-2 leading-tight mb-1">{item.details?.name}</h3>
                                                        <div className="flex items-center gap-3 mt-2">
                                                             <Link to={`/product/${item.productId.toLowerCase().replace(/[^a-z0-9-]+/g, '')}`} className="text-xs font-semibold text-slate-500 hover:text-amber-600 transition-colors">View Product</Link>
                                                             <span className="text-gray-300">|</span>
                                                             <button onClick={() => removeFromCart(item.productId)} className="text-xs font-semibold text-red-400 hover:text-red-600 transition-colors">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 px-4 bg-slate-50 border border-dashed border-gray-200 rounded-xl">
                                            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                            <p className="text-slate-500 font-medium mb-4">Your quote basket is empty.</p>
                                            <Link to="/products" className="inline-block bg-white border shadow-sm border-gray-200 text-slate-700 font-bold py-2.5 px-6 rounded-lg text-sm hover:border-slate-300 transition-colors">Explore Products</Link>
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection className="delay-200">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-slate-900 shadow-sm relative overflow-hidden">
                                     <div className="absolute top-0 right-0 p-8 opacity-5">
                                         <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
                                     </div>
                                     <h3 className="font-extrabold text-lg mb-6 flex items-center gap-2">
                                         Why Choose Tape India?
                                     </h3>
                                     <ul className="space-y-5">
                                         <li className="flex items-start gap-4">
                                             <div className="bg-amber-50 p-2 rounded-lg text-amber-600 border border-amber-100 mt-0.5"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                                             <div>
                                                 <h4 className="font-bold text-sm">Premium Quality Products</h4>
                                                 <p className="text-slate-500 text-xs mt-1">Stringent quality control for industrial applications.</p>
                                             </div>
                                         </li>
                                         <li className="flex items-start gap-4">
                                             <div className="bg-amber-50 p-2 rounded-lg text-amber-600 border border-amber-100 mt-0.5"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                             <div>
                                                 <h4 className="font-bold text-sm">Pan India Delivery</h4>
                                                 <p className="text-slate-500 text-xs mt-1">Reliable shipping network across all major cities.</p>
                                             </div>
                                         </li>
                                         <li className="flex items-start gap-4">
                                             <div className="bg-amber-50 p-2 rounded-lg text-amber-600 border border-amber-100 mt-0.5"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg></div>
                                             <div>
                                                 <h4 className="font-bold text-sm">Custom Sizes Available</h4>
                                                 <p className="text-slate-500 text-xs mt-1">Die-cutting and slitting exactly to your requirements.</p>
                                             </div>
                                         </li>
                                     </ul>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column: Premium Form */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                             <AnimatedSection className="delay-150 h-full">
                                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
                                    
                                    {/* Trust Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                        {trustBadges.map((badge, idx) => (
                                            <div key={idx} className="flex flex-col gap-2 p-4 bg-slate-50 border border-gray-100 rounded-xl">
                                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-700 shadow-sm">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">{badge.icon}</svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-sm leading-tight">{badge.title}</h4>
                                                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">{badge.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                     <form action="https://formsubmit.co/tapeindiain@yahoo.com" method="POST" encType="multipart/form-data" className="flex flex-col flex-grow">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
                                            {formFields.map(field => (
                                                <div key={field.name}>
                                                    <label htmlFor={field.name} className="block text-sm font-bold text-slate-700 mb-1.5">
                                                        {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        id={field.name}
                                                        name={field.name}
                                                        autoComplete={field.autoComplete}
                                                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium text-slate-800"
                                                        required={field.required}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* FormSubmit settings */}
                                        <input type="hidden" name="_next" value={redirectUrl} />
                                        <input type="hidden" name="_honey" style={{ display: 'none' }} />
                                        <input type="hidden" name="_subject" value={`New Quote Request (${cart.length} items)`} />

                                        <div className="mb-8">
                                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1.5">
                                                Order Details & Requirements<span className="text-red-500 ml-1">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                defaultValue={generatedMessage}
                                                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium text-slate-700 leading-relaxed custom-scrollbar"
                                                required
                                                placeholder="Please describe your application, required dimensions (width/length), target quantity, and any other specifications."
                                            ></textarea>
                                            <p className="text-[11px] font-medium text-slate-500 mt-2 flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                You can edit the prepopulated message above.
                                            </p>
                                        </div>

                                        <div className="mb-10">
                                            <label className="block text-sm font-bold text-slate-700 mb-1.5">
                                                Attach Drawing/Specification (Optional)
                                            </label>
                                            <div 
                                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative"
                                                onDragOver={handleDragOver}
                                                onDrop={handleDrop}
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                <div className="space-y-2 text-center pointer-events-none">
                                                    <svg className="mx-auto h-8 w-8 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="flex text-sm text-slate-600 justify-center">
                                                        <span className="relative rounded-md font-bold text-amber-600 focus-within:outline-none">
                                                            <span>Upload a file</span>
                                                        </span>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-slate-500 font-medium">PNG, JPG, PDF up to 10MB</p>
                                                    {fileName && (
                                                        <p className="text-sm font-bold text-slate-900 mt-2 bg-white inline-block px-3 py-1 rounded-md shadow-sm border border-gray-100">Attached: {fileName}</p>
                                                    )}
                                                </div>
                                                <input 
                                                    id="attachment" 
                                                    name="attachment" 
                                                    type="file" 
                                                    className="sr-only" 
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <button
                                                type="submit"
                                                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-amber-500 hover:to-amber-500 hover:text-slate-900 transition-all shadow-md transform hover:-translate-y-0.5"
                                            >
                                                Submit Quote Request
                                                <svg className="w-5 h-5 text-white/70 group-hover:text-slate-900 transition-colors group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </button>
                                        </div>
                                    </form>

                                    {/* Bottom Trust Strip */}
                                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> 100% Secure</span>
                                        <span className="hidden sm:inline text-gray-200">|</span>
                                        <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> No Spam</span>
                                        <span className="hidden sm:inline text-gray-200">|</span>
                                        <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg> Expert Support</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

