
import { useState, useEffect, useRef, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';

const SearchBar = ({ onResultClick }: { onResultClick?: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const { products } = useProducts();
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 1) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.shortDescription.toLowerCase().includes(lowercasedQuery)
      );
      setResults(filtered.slice(0, 5)); // Limit results to 5
    } else {
      setResults([]);
    }
  }, [query, products]);
  
  // Handle clicks outside of the search component to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReset = () => {
    setQuery('');
    setResults([]);
    setIsFocused(false);
    onResultClick?.();
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
        if (results.length === 1) {
            navigate(`/product/${results[0].id}`);
            handleReset();
        }
    }
  };


  return (
    <div className="relative w-full max-w-xs" ref={searchRef}>
      <form onSubmit={handleSearchSubmit} role="search">
        <div className="relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"></i>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-shadow"
            aria-label="Search products"
          />
        </div>
      </form>

      {isFocused && query.length > 1 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
            {results.length > 0 ? (
                 <ul className="divide-y divide-gray-100">
                    {results.map(product => (
                    <li key={product.id}>
                        <Link
                        to={`/product/${product.id}`}
                        onClick={handleReset}
                        className="block px-4 py-3 hover:bg-gray-100 transition-colors"
                        >
                        <p className="font-semibold text-brand-blue-dark">{product.name}</p>
                        <p className="text-sm text-gray-500 truncate">{product.shortDescription}</p>
                        </Link>
                    </li>
                    ))}
                    <li className="text-center p-2 bg-gray-50">
                        <Link to="/products" onClick={handleReset} className="text-sm font-semibold text-brand-accent hover:underline">
                            View all products
                        </Link>
                    </li>
                </ul>
            ) : (
                <div className="p-4 text-center text-gray-500">
                    No products found for "{query}".
                </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
