
import { useState } from 'react';

const WHATSAPP_NUMBERS = [
    { name: 'Sayam', number: '917010530018' },
];

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);

    // If only one contact, the button is a direct link, improving UX.
    if (WHATSAPP_NUMBERS.length === 1) {
        const singleContact = WHATSAPP_NUMBERS[0];
        return (
            <div className="hidden lg:block fixed bottom-6 right-6 z-50">
                <a
                    href={`https://wa.me/${singleContact.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label={`Contact ${singleContact.name} on WhatsApp`}
                >
                    <i className="fab fa-whatsapp text-4xl"></i>
                </a>
            </div>
        );
    }
    
    // If no contacts are listed, render nothing.
    if (WHATSAPP_NUMBERS.length === 0) {
        return null;
    }

    // Original logic for multiple contacts
    return (
        <>
            {/* Overlay to catch clicks and close the menu */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-transparent z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div className="hidden lg:block fixed bottom-6 right-6 z-50">
                {/* Contact List - absolutely positioned to not affect layout flow */}
                <div 
                    className={`absolute bottom-full right-0 mb-3 w-72 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-white rounded-lg shadow-xl p-4">
                      <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-gray-800 text-base">Contact Us on WhatsApp</h4>
                          <button onClick={() => setIsOpen(false)} aria-label="Close WhatsApp contacts" className="text-gray-400 hover:text-gray-800 text-2xl leading-none">&times;</button>
                      </div>
                      <ul className="space-y-3">
                          {WHATSAPP_NUMBERS.map(contact => (
                              <li key={contact.number}>
                                  <a 
                                      href={`https://wa.me/${contact.number}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors group"
                                  >
                                      <i className="fab fa-whatsapp text-green-500 text-3xl mr-4"></i>
                                      <div className="flex-grow">
                                          <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
                                          <p className="text-sm text-gray-500 group-hover:text-green-600 transition-colors">+{contact.number}</p>
                                      </div>
                                      <i className="fas fa-external-link-alt text-gray-400 text-xs"></i>
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>
                </div>

                {/* Main Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label={isOpen ? "Close WhatsApp contacts" : "Open WhatsApp contacts"}
                    aria-expanded={isOpen}
                >
                    <i className={`text-4xl transition-all duration-300 transform ${isOpen ? 'fas fa-times' : 'fab fa-whatsapp'}`}></i>
                </button>
            </div>
        </>
    );
}
