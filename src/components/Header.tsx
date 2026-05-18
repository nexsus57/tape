
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, INDUSTRIES } from '../constants';
import SearchBar from './SearchBar';
import { useCategories } from '../context/CategoryContext';
import { useCart } from '../context/CartContext';
import { ICONS_MAP, SparklesIcon } from './icons/CategoryIcons';
import { AIIcon } from './icons/AIIcon';
import AITapeFinder from './AITapeFinder';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAIFinderOpen, setIsAIFinderOpen] = useState(false);
  
  const { categories } = useCategories();
  const { cartCount } = useCart();
  const location = useLocation();
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      setIsMenuOpen(false);
      setIsMegaMenuOpen(false);
      setIsAIFinderOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const navItems = NAV_LINKS.filter(l => !l.isButton);
  const ctaItem = NAV_LINKS.find(l => l.isButton);

  const getLinkClass = (path: string, isMegaMenu: boolean = false) => {
      const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
      const activeState = isActive || isMegaMenu;
      return `text-base font-semibold transition-colors duration-200 flex items-center ${activeState ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'}`;
  };

  return (
    <>
      <header className={`bg-white sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-start h-14 lg:h-20 gap-4 lg:gap-0">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-50 mr-8" aria-label="Tape India Home">
              <img src="https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png" alt="Tape India Logo" className="h-9 lg:h-14 w-auto" loading="eager" width="56" height="56" />
            </Link>
            
            {/* Desktop Navigation - Moved to Left Group */}
            <nav className="hidden lg:flex items-center space-x-6 mr-4 xl:mr-8">
              {navItems.map((link) => {
                  if (link.name === 'Products') {
                      return (
                          <div 
                            key={link.name} 
                            className="relative h-full flex items-center"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                              <Link 
                                to={link.path}
                                className={getLinkClass(link.path, isMegaMenuOpen)}
                              >
                                {link.name}
                                <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}></i>
                              </Link>

                              {/* MEGA MENU - Updated Positioning (Left Aligned to avoid overflow) */}
                              <div 
                                className={`absolute top-[48px] -left-4 transform w-[80vw] max-w-4xl bg-white shadow-2xl rounded-2xl border border-gray-100 transition-all duration-300 origin-top-left ${isMegaMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                              >
                                  <div className="flex p-8 gap-8 border-b border-gray-100">
                                      <div className="w-2/3 pr-8 border-r border-gray-100">
                                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">By Category</h3>
                                          <div className="grid grid-cols-2 gap-2">
                                              {categories.slice(0, 8).map(cat => {
                                                  const Icon = ICONS_MAP[cat.icon] || SparklesIcon;
                                                  return (
                                                      <Link key={cat.id} to={`/category/${cat.id}`} className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                                          <div className="mt-0.5 mr-3 text-slate-400 group-hover:text-amber-500 transition-colors">
                                                              <Icon className="w-5 h-5" />
                                                          </div>
                                                          <div>
                                                              <span className="block font-semibold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">{cat.name}</span>
                                                          </div>
                                                      </Link>
                                                  );
                                              })}
                                          </div>
                                          <Link to="/products" className="inline-block mt-4 text-sm font-semibold text-amber-600 hover:text-amber-700">
                                              View All Categories &rarr;
                                          </Link>
                                      </div>

                                      <div className="w-1/3">
                                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">By Industry</h3>
                                          <ul className="space-y-1">
                                              {INDUSTRIES.slice(0, 6).map(ind => (
                                                  <li key={ind.id}>
                                                      <Link to={`/industry/${ind.id}`} className="block text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all text-sm font-medium py-2">
                                                          {ind.name}
                                                      </Link>
                                                  </li>
                                              ))}
                                          </ul>
                                          <Link to="/industries" className="inline-block mt-4 text-sm font-semibold text-amber-600 hover:text-amber-700">
                                              View All Industries &rarr;
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="bg-slate-50 px-8 py-4 rounded-b-2xl flex justify-between items-center">
                                      <p className="text-sm font-medium text-slate-600">Need specific custom configurations?</p>
                                      <Link to="/contact" className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors">Contact Engineering &rarr;</Link>
                                  </div>
                              </div>
                          </div>
                      );
                  }
                  return (
                    <NavLink 
                        key={link.name}
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }: { isActive: boolean }) => 
                            `text-base font-semibold transition-colors duration-200 text-slate-700 hover:text-amber-600 ${isActive ? 'text-amber-600' : ''}`
                        }
                    >
                    {link.name}
                    </NavLink>
                  );
              })}
            </nav>

            {/* Central Search Bar */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-auto px-4">
                <SearchBar />
            </div>
            
            {/* Desktop Actions - Right */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-auto flex-shrink-0">
                <button
                  onClick={() => setIsAIFinderOpen(true)}
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-slate-800 transition-all text-sm whitespace-nowrap"
                >
                  <AIIcon className="w-4 h-4 text-amber-400" />
                  <span>AI Finder</span>
                </button>
                <Link to="/request-quote" className="relative p-2 text-slate-600 hover:text-amber-600 transition-colors" aria-label="View Quote Basket">
                    <i className="fas fa-file-invoice text-xl"></i>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
                            {cartCount}
                        </span>
                    )}
                </Link>
                {ctaItem && (
                  <Link
                    to={ctaItem.path}
                    className="bg-amber-500 text-slate-900 font-bold py-2.5 px-6 rounded-lg text-sm xl:text-base hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap"
                  >
                    {ctaItem.name}
                  </Link>
                )}
            </div>

            {/* Mobile Actions (Right aligned on mobile) */}
            <div className="lg:hidden flex items-center gap-2 ml-auto">
               <button
                  onClick={() => setIsAIFinderOpen(true)}
                  className="p-2 text-slate-900 flex items-center gap-1 bg-amber-50 rounded-lg px-3"
                  aria-label="Open AI Finder"
               >
                  <AIIcon className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700">AI</span>
               </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-amber-600 focus:outline-none p-2 ml-1"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Search Bar */}
        <div className="lg:hidden px-4 pb-3 pt-1 bg-white">
            <SearchBar />
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out lg:hidden transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
             <Link to="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <img src="https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png" alt="Tape India" className="h-10 w-auto" loading="lazy" />
             </Link>
             <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 p-2"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
          </div>
          
          <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
            {navItems.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) => 
                    `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive ? 'bg-amber-50 text-amber-600' : 'text-slate-700 hover:bg-slate-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {ctaItem && (
               <div className="mt-6">
                 <Link 
                    to={ctaItem.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-amber-500 text-slate-900 font-bold py-4 rounded-lg text-lg shadow-sm hover:bg-amber-400"
                  >
                   {ctaItem.name}
                  </Link>
               </div>
            )}
          </nav>
        </div>
      </header>

      {/* AI TAPE FINDER MODAL */}
      <AITapeFinder isOpen={isAIFinderOpen} onClose={() => setIsAIFinderOpen(false)} />
    </>
  );
}
