
import { NavLink } from 'react-router-dom';
import { useSearchModal } from '../context/SearchModalContext';

const WHATSAPP_NUMBER = '918072468057';

export default function BottomNavBar() {
  const { openSearchModal } = useSearchModal();
  const navItems = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'Products', path: '/products', icon: 'fas fa-tape' },
  ];

  const activeClass = 'text-brand-accent';
  const inactiveClass = 'text-gray-500';

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40 h-20">
      <div className="grid grid-cols-5 h-full max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center font-medium group ${isActive ? activeClass : inactiveClass} hover:bg-gray-50 transition-colors`
            }
          >
            <i className={`${item.icon} text-2xl mb-1`}></i>
            <span className="text-xs">{item.name}</span>
          </NavLink>
        ))}
        <button
          onClick={openSearchModal}
          className="inline-flex flex-col items-center justify-center font-medium group text-gray-500 hover:bg-gray-50 transition-colors"
          aria-label="Open product search"
        >
          <i className="fas fa-search text-2xl mb-1"></i>
          <span className="text-xs">Search</span>
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center font-medium text-gray-500 hover:bg-gray-50 transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl mb-1"></i>
          <span className="text-xs">WhatsApp</span>
        </a>
        <NavLink
          to="/request-quote"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center font-bold group ${isActive ? 'text-brand-amber' : 'text-gray-600'} bg-amber-50 hover:bg-amber-100 transition-colors`
          }
        >
          <i className="fas fa-file-alt text-2xl mb-1"></i>
          <span className="text-xs">Get Quote</span>
        </NavLink>
      </div>
    </nav>
  );
}
