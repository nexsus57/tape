import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES, NAV_LINKS } from '../constants';
import { useCategories } from '../context/CategoryContext';
import CombinedContactColumn from './CombinedContactColumn';

// Helper component for a single accordion item
function AccordionColumn({
  title,
  sectionId,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  sectionId: string;
  children?: ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="border-t border-slate-800 md:border-none">
      {/* Desktop Title */}
      <h3 className="hidden md:block text-sm uppercase tracking-widest font-bold text-white mb-6">
        {title}
      </h3>
      {/* Mobile Accordion Button */}
      <button
        onClick={() => onToggle(sectionId)}
        className="w-full flex justify-between items-center py-4 text-base font-semibold text-white md:hidden"
        aria-expanded={isOpen}
        aria-controls={`footer-section-${sectionId}`}
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down transform transition-transform duration-300 text-slate-500 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {/* Content */}
      <div
        id={`footer-section-${sectionId}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out md:!max-h-full md:!overflow-visible md:block ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="pb-4 pt-1 md:pb-0 md:pt-0">
          <ul className="space-y-3">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default function Footer() {
  const { categories } = useCategories();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (sectionId: string) => {
    setOpenAccordion(prev => (prev === sectionId ? null : sectionId));
  };

  return (
    <footer id="contact" className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Combined Enquiry and Contact */}
          <div className="pb-6 md:pb-0 md:col-span-2 lg:col-span-1">
            <CombinedContactColumn />
          </div>

          {/* Column 2: Quick Links */}
          <AccordionColumn title="Quick Links" sectionId="quick-links" isOpen={openAccordion === 'quick-links'} onToggle={toggleAccordion}>
            {NAV_LINKS.filter(l => !l.isButton).map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-slate-400 hover:text-amber-500 transition-colors inline-block py-1 text-sm font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
          </AccordionColumn>

          {/* Column 3: Product Categories */}
          <AccordionColumn title="Categories" sectionId="categories" isOpen={openAccordion === 'categories'} onToggle={toggleAccordion}>
            {categories.slice(0, 7).map(category => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`} className="text-slate-400 hover:text-amber-500 transition-colors inline-block py-1 text-sm font-medium line-clamp-1">
                  {category.name}
                </Link>
              </li>
            ))}
             <li>
              <Link to="/products" className="text-amber-600 font-semibold hover:text-amber-500 transition-colors inline-block py-1 text-sm">
                View All Categories &rarr;
              </Link>
            </li>
          </AccordionColumn>

          {/* Column 4: Industries */}
          <AccordionColumn title="Industries" sectionId="industries" isOpen={openAccordion === 'industries'} onToggle={toggleAccordion}>
            {INDUSTRIES.slice(0, 6).map(industry => (
              <li key={industry.id}>
                <Link to={`/industry/${industry.id}`} className="text-slate-400 hover:text-amber-500 transition-colors inline-block py-1 text-sm font-medium">
                  {industry.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/industries" className="text-amber-600 font-semibold hover:text-amber-500 transition-colors inline-block py-1 text-sm">
                View All Industries &rarr;
              </Link>
            </li>
          </AccordionColumn>
          
        </div>
      </div>
      <div className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-sm text-slate-500 md:flex justify-between items-center">
          <div className="mb-4 md:mb-0 space-x-6 flex items-center">
            <img src="https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png" alt="Tape India Logo" className="h-6 w-auto opacity-50 grayscale" loading="lazy" />
            <span>&copy; 2025–26 Tape India. All Rights Reserved.</span>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
          <div className="space-x-6">
            <Link to="/admin/seo-content-hub" className="hover:text-slate-300 transition-colors">SEO Hub</Link>
            <Link to="/admin/login" className="hover:text-slate-300 transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
