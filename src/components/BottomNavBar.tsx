
import { NavLink } from 'react-router-dom';
import { useSearchModal } from '../context/SearchModalContext';

const WHATSAPP_NUMBER = '917010530018';

export default function BottomNavBar() {
  const { openSearchModal } = useSearchModal();
  const navItems = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'Products', path: '/products', icon: 'fas fa-tape' },
  ];

  const activeClass = 'text-brand-accent';
  const inactiveClass = 'text-gray-500';

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40 h-[72px] pb-safe">
      <div className="grid grid-cols-5 h-full max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => 
                `inline-flex flex-col items-center justify-center font-medium group transition-colors ${isActive ? activeClass : inactiveClass}`
            }
          >
            <i className={`${item.icon} text-xl mb-1`}></i>
            <span className="text-[10px]">{item.name}</span>
          </NavLink>
        ))}
        
        {/* Dominant Search Button */}
        <button
          onClick={openSearchModal}
          className="inline-flex flex-col items-center justify-center font-bold group text-brand-blue-deep hover:bg-gray-50 transition-colors relative"
          aria-label="Open product search"
        >
          <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow-sm">
             <i className="fas fa-search text-lg text-brand-blue-deep"></i>
          </div>
          <span className="text-[10px]">Search</span>
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center font-medium text-gray-500 hover:text-green-600 transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl mb-1"></i>
          <span className="text-[10px]">WhatsApp</span>
        </a>
        
        {/* Dominant Quote Button */}
        <NavLink
          to="/request-quote"
          className={({ isActive }) => 
            `inline-flex flex-col items-center justify-center font-bold group transition-colors ${isActive ? 'text-brand-blue-dark bg-amber-50' : 'text-gray-600'}`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow-sm ${isActive ? 'bg-brand-amber text-brand-blue-dark' : 'bg-brand-yellow text-brand-blue-dark'}`}>
                 <i className="fas fa-file-invoice text-lg"></i>
              </div>
              <span className="text-[10px] font-bold text-brand-blue-dark">Quote</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
