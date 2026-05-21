
import React, { useState, useEffect, useRef, useMemo, type KeyboardEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import { performSearch, SearchResult } from './search/SearchService';

const MAX_RECENT_SEARCHES = 5;

const SearchBar = ({ onResultClick }: { onResultClick?: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { settings } = useSettings();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tapeindia_recent_searches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load recent searches", e);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setResults(performSearch(query));
    }, 150); 
    return () => clearTimeout(timer);
  }, [query]);

  const handleRecentSearchClick = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  const saveRecentSearch = (term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      localStorage.setItem('tapeindia_recent_searches', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelection = (result: SearchResult) => {
    saveRecentSearch(query || result.name);
    setQuery('');
    setResults([]);
    setIsFocused(false);
    navigate(result.url);
    onResultClick?.();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        handleSelection(results[activeIndex]);
      } else if (query) {
        saveRecentSearch(query);
        setIsFocused(false);
        navigate(`/search/${encodeURIComponent(query)}`);
        onResultClick?.();
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleAddToQuote = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(productId);
    
    const btn = e.currentTarget as HTMLButtonElement;
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('bg-green-500', 'text-white', 'border-green-500');
    btn.classList.remove('text-brand-accent', 'border-gray-200', 'hover:border-brand-accent');
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.classList.remove('bg-green-500', 'text-white', 'border-green-500');
        btn.classList.add('text-brand-accent', 'border-gray-200', 'hover:border-brand-accent');
    }, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularProductsList = useMemo(() => {
    if (!settings.popularProductIds) return [];
    return products
      .filter(p => settings.popularProductIds.includes(p.id))
      .slice(0, 3);
  }, [products, settings.popularProductIds]);

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative group">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-400 group-focus-within:text-brand-accent transition-colors"></i>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search tape type, app, industry (EMI, HVAC...)"
          className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300 shadow-sm bg-gray-50 focus:bg-white text-sm lg:text-base"
          autoComplete="off"
          aria-label="Search products"
        />
      </div>

      {isFocused && (
        <div className="absolute top-full mt-2 w-full md:w-[120%] md:-left-[10%] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in-up">
          
          {query.trim().length === 0 && (
            <div className="p-4">
              {recentSearches.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map(term => (
                      <button
                        key={term}
                        onClick={() => handleRecentSearchClick(term)}
                        className="px-3 py-1 bg-gray-100 hover:bg-brand-gray text-gray-600 text-xs rounded-full transition-colors flex items-center"
                      >
                        <i className="fas fa-history mr-1.5 text-gray-400"></i>
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Popular Products</h4>
                <ul className="space-y-2">
                  {popularProductsList.map(product => (
                    <li key={product.id}>
                        <Link 
                            to={`/product/${product.id.toLowerCase().replace(/[^a-z0-9-]+/g, '')}`}
                            onClick={() => { setIsFocused(false); onResultClick?.(); }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group transition-colors"
                        >
                            <img src={product.image} alt={product.name} className="w-8 h-8 object-contain rounded bg-white border border-gray-100" loading="lazy" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue-dark line-clamp-1">{product.name}</span>
                        </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {query.trim().length > 0 && results.length > 0 && (
            <ul className="divide-y divide-gray-50">
              {results.map((result, index) => (
                <li 
                    key={result.id} 
                    className={`${index === activeIndex ? 'bg-blue-50' : ''} hover:bg-gray-50 transition-colors`}
                >
                  <div
                    onClick={() => handleSelection(result)}
                    className="flex items-center p-3 cursor-pointer group"
                  >
                    {result.image ? (
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded border border-gray-200 p-0.5 mr-3 overflow-hidden">
                            <img 
                                src={result.image} 
                                alt={result.name} 
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center mr-3 text-gray-400">
                            <i className="fas fa-tag"></i>
                        </div>
                    )}

                    <div className="flex-grow min-w-0 mr-2">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-bold text-gray-800 truncate group-hover:text-brand-accent transition-colors">
                            {result.name}
                        </p>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 gap-2">
                         <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 truncate max-w-[120px] uppercase">
                            {result.type}
                         </span>
                      </div>
                    </div>

                    {result.type === 'product' && (
                        <button
                            onClick={(e) => handleAddToQuote(e, result.id)}
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-200 shadow-sm z-10"
                            title="Add to Quote"
                            aria-label="Add to quote"
                        >
                            <i className="fas fa-plus text-xs"></i>
                        </button>
                    )}
                  </div>
                </li>
              ))}
              
              <li className="bg-gray-50 p-2 text-center">
                 <Link 
                    to={`/search/${encodeURIComponent(query)}`}
                    onClick={() => { setIsFocused(false); onResultClick?.(); }}
                    className="text-xs font-bold text-brand-accent hover:underline uppercase tracking-wider block w-full"
                 >
                    View All Results
                 </Link>
              </li>
            </ul>
          )}

          {query.trim().length > 0 && results.length === 0 && (
            <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3 text-gray-400">
                    <i className="fas fa-search-minus text-xl"></i>
                </div>
                <p className="text-sm font-medium text-gray-900">No products found</p>
                <p className="text-xs text-gray-500 mt-1">Try generic terms like "tape", "safety", or "insulation".</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

