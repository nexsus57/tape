import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import SearchBar from './SearchBar';
import { useSearchModal } from '../context/SearchModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSearchModal } = useSearchModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = NAV_LINKS.filter(l => !l.isButton);
  const ctaItem = NAV_LINKS.find(l => l.isButton);

  return (
    <>
      <header className={`bg-white sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0" aria-label="Tape India Home" onClick={closeMenu}>
              <img src="https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png" alt="Tape India Logo" className="h-14 w-auto" loading="eager" width="56" height="56" />
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((link) => (
                 <NavLink 
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-base font-semibold transition-colors duration-200 ${isActive ? 'text-brand-accent' : 'text-gray-700 hover:text-brand-accent'}`
                    }
                  >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            
            <div className="hidden lg:flex items-center gap-4">
                <SearchBar />
                {ctaItem && (
                  <Link
                    to={ctaItem.path}
                    className="bg-brand-yellow text-brand-blue-dark font-bold py-2.5 px-6 rounded-md text-base hover:bg-yellow-400 transition-colors transform hover:scale-105 whitespace-nowrap"
                  >
                    {ctaItem.name}
                  </Link>
                )}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-brand-accent focus:outline-none z-50 relative p-2 -mr-2"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        
        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-40 shadow-xl transition-transform duration-300 ease-in-out lg:hidden transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
             <Link to="/" className="flex-shrink-0" aria-label="Tape India Home" onClick={closeMenu}>
                <img src="https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png" alt="Tape India Logo" className="h-12 w-auto" loading="eager" width="48" height="48" />
             </Link>
             <button
                onClick={closeMenu}
                className="text-gray-600 hover:text-brand-accent focus:outline-none"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
          </div>
          
          <nav className="p-4 space-y-2">
            {navItems.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-md text-lg font-semibold transition-colors ${isActive ? 'bg-blue-50 text-brand-accent' : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {ctaItem && (
               <div className="px-2 pt-4">
                 <Link 
                    to={ctaItem.path}
                    onClick={closeMenu}
                    className="block w-full text-center bg-brand-yellow text-brand-blue-dark font-bold py-3 px-4 rounded-md text-lg hover:bg-yellow-400 transition-colors"
                  >
                   {ctaItem.name}
                  </Link>
               </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
