import { useState, useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';

export default function CombinedContactColumn() {
    const { settings } = useSettings();
    const { contact } = settings;
    const [redirectUrl, setRedirectUrl] = useState('');

    useEffect(() => {
        // Formsubmit requires an absolute URL for the redirect.
        if (typeof window !== 'undefined') {
            setRedirectUrl(`${window.location.origin}/thank-you.html`);
        }
    }, []);

    return (
        <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-6">
                Engineering Support
            </h4>
            
            <form action="https://formsubmit.co/tapeindiain@yahoo.com" method="POST" className="space-y-3 mb-8">
                {/* FormSubmit settings */}
                <input type="hidden" name="_next" value={redirectUrl} />
                <input type="hidden" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_subject" value="New Quick Enquiry from Website Footer!" />

                <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="w-full bg-slate-800/50 p-3 text-slate-200 border border-slate-700/50 rounded-lg placeholder-slate-500 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-sm shadow-sm"
                    aria-label="Name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    required
                    className="w-full bg-slate-800/50 p-3 text-slate-200 border border-slate-700/50 rounded-lg placeholder-slate-500 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-sm shadow-sm"
                    aria-label="E-mail"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="w-full bg-slate-800/50 p-3 text-slate-200 border border-slate-700/50 rounded-lg placeholder-slate-500 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-sm shadow-sm"
                    aria-label="Phone Number"
                />
                <button
                    type="submit"
                    className="w-full bg-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg hover:bg-amber-400 transition-colors text-sm shadow-sm"
                >
                    Submit Enquiry
                </button>
            </form>
            
            <div className="space-y-5">
                <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-slate-500 w-5 text-center mt-1 mr-3 flex-shrink-0 text-sm"></i>
                    <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: contact.address.replace(/\n/g, '<br />') }}/>
                </div>
                <div className="flex items-start">
                    <i className="fas fa-phone-alt text-slate-500 w-5 text-center mt-1 mr-3 flex-shrink-0 text-sm"></i>
                    <div className="text-sm">
                        <a href={`tel:${contact.phone1}`} className="text-slate-400 hover:text-amber-500 transition-colors">{contact.phone1}</a>
                        {contact.phone2 && (
                            <>
                                , <a href={`tel:${contact.phone2}`} className="text-slate-400 hover:text-amber-500 transition-colors">{contact.phone2}</a>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex items-start">
                    <i className="fas fa-envelope text-slate-500 w-5 text-center mt-1 mr-3 flex-shrink-0 text-sm"></i>
                    <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-amber-500 transition-colors text-sm">{contact.email}</a>
                </div>
            </div>
        </div>
    );
}
