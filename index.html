import { useState, useEffect, useRef, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

// Local heuristic search (Fallback & Instant)
const calculateScore = (product: Product, query: string) => {
    const q = query.toLowerCase();
    const name = product.name.toLowerCase();
    const desc = product.shortDescription.toLowerCase();
    const cat = product.category.toLowerCase();
    let score = 0;

    if (name === q) score += 100;
    else if (name.startsWith(q)) score += 50;
    else if (name.includes(q)) score += 20;

    if (cat.includes(q)) score += 10;
    if (desc.includes(q)) score += 5;

    const words = q.split(' ');
    if (words.length > 1) {
        words.forEach(word => {
            if (name.includes(word)) score += 5;
        });
    }

    return score;
};

const SearchBar = ({ onResultClick }: { onResultClick?: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { products } = useProducts();
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // AI Search Logic
  const performAiSearch = async (searchQuery: string) => {
    // Basic local filter first for instant feedback while AI loads
    const localResults = products.map(p => ({
        product: p,
        score: calculateScore(p, searchQuery)
    })).filter(item => item.score > 0).sort((a, b) => b.score - a.score).map(i => i.product).slice(0, 6);
    
    setResults(localResults);

    // If we have an API Key, try to enhance with AI
    // NOTE: process.env.API_KEY is defined in vite.config.ts
    if (process.env.API_KEY) {
        setIsAiLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Create a lightweight catalog context
            const catalogContext = products.map(p => 
                `ID: ${p.id} | Name: ${p.name} | Cat: ${p.category} | Desc: ${p.shortDescription.slice(0, 100)}`
            ).join('\n');

            const systemInstruction = `
                You are an AI-powered ecommerce search engine for a tape-selling website.
                Your job is to understand ANY user input and return the most relevant product IDs from the catalogue.
                
                Rules:
                - Fix spelling mistakes (e.g., "reflcitve tap" -> "reflective tape")
                - Auto-complete partial words ("haz" -> "hazard tape")
                - Understand semantic meaning (e.g., "tape that shines" -> "reflective tape", "heat proof" -> "kapton/teflon")
                - Match vague queries to correct products
                - Handle short queries ("copp", "gree", "ther")
                - Rank results by relevance and confidence
                - Return clean JSON output.
            `;

            const prompt = `
                Catalogue:
                ${catalogContext}

                User Query: "${searchQuery}"
                
                Return ONLY a JSON array of matching Product IDs (strings). No markdown formatting.
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: systemInstruction,
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    }
                },
                contents: prompt
            });

            // Robust JSON parsing to handle potential Markdown code blocks
            let jsonString = response.text || '[]';
            // Strip markdown code blocks if present (e.g. ```json [ ... ] ```)
            if (jsonString.startsWith('```json')) {
                jsonString = jsonString.replace(/^```json\s*/, '').replace(/\s*```$/, '');
            } else if (jsonString.startsWith('```')) {
                jsonString = jsonString.replace(/^```\s*/, '').replace(/\s*```$/, '');
            }

            const matchedIds = JSON.parse(jsonString);
            
            if (Array.isArray(matchedIds) && matchedIds.length > 0) {
                // Map IDs back to full product objects
                const aiProducts = matchedIds
                    .map(id => products.find(p => p.id === id))
                    .filter((p): p is Product => !!p);
                
                // If AI found results, update the list
                if (aiProducts.length > 0) {
                    setResults(aiProducts.slice(0, 6));
                }
            }
        } catch (error) {
            console.error("AI Search failed, keeping local results", error);
        } finally {
            setIsAiLoading(false);
        }
    }
  };

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (query.trim().length > 1) {
        // Debounce API calls by 500ms to avoid rate limits
        debounceRef.current = setTimeout(() => {
            performAiSearch(query);
        }, 500);
    } else {
        setResults([]);
        setIsAiLoading(false);
    }

    return () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, products]);
  
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
        if (results.length > 0) {
            navigate(`/product/${results[0].id}`);
            handleReset();
        } else {
            navigate(`/products`);
            handleReset();
        }
    }
  };

  return (
    <div className="relative w-full max-w-xs" ref={searchRef}>
      <form onSubmit={handleSearchSubmit} role="search">
        <div className="relative">
          <i className={`fas ${isAiLoading ? 'fa-sparkles animate-pulse text-brand-accent' : 'fa-search text-gray-400'} absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300`}></i>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={isAiLoading ? "AI is thinking..." : "Search products..."}
            className={`w-full pl-11 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300 ${isAiLoading ? 'bg-blue-50 border-brand-accent' : 'border-gray-300'}`}
            aria-label="Search products"
          />
        </div>
      </form>

      {isFocused && query.length > 1 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in">
            {isAiLoading && results.length === 0 && (
                <div className="p-4 text-center text-gray-500 flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">AI is searching...</span>
                </div>
            )}
            
            {!isAiLoading && results.length > 0 ? (
                 <ul className="divide-y divide-gray-100">
                    {results.map(product => (
                    <li key={product.id}>
                        <Link
                        to={`/product/${product.id}`}
                        onClick={handleReset}
                        className="block px-4 py-3 hover:bg-gray-100 transition-colors group"
                        >
                        <p className="font-semibold text-brand-blue-dark group-hover:text-brand-accent text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500 truncate">{product.category.replace(/-/g, ' ')}</p>
                        </Link>
                    </li>
                    ))}
                    <li className="text-center p-2 bg-gray-50">
                        <Link to="/products" onClick={handleReset} className="text-xs font-bold text-brand-accent hover:underline uppercase tracking-wide">
                            View all matching products
                        </Link>
                    </li>
                </ul>
            ) : !isAiLoading && results.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                    No products found for "{query}".
                </div>
            ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
