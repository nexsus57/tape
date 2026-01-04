
import { Link } from 'react-router-dom';
import { type MouseEvent, useState, type FC } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { AIIcon } from './icons/AIIcon';

interface AIRecommendationCardProps {
  product: Product;
  categoryName: string;
  rank: number;
}

const AIRecommendationCard: FC<AIRecommendationCardProps> = ({ product, categoryName, rank }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToQuote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isTopPick = rank === 0;
  // Simulate a match score based on rank for UI effect (Top result = 98%, others degrade slightly)
  const matchScore = 98 - (rank * 3); 

  return (
    <Link
      to={`/product/${product.id}`}
      className={`group relative flex flex-col h-full bg-white rounded-xl transition-all duration-300 overflow-hidden
        ${isTopPick 
            ? 'shadow-[0_0_20px_rgba(245,197,24,0.25)] border-2 border-brand-yellow scale-[1.02] z-10' 
            : 'shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-accent/30'
        }
      `}
    >
      {/* Top Pick Gradient Line */}
      {isTopPick && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellow z-20"></div>
      )}

      {/* Badges Container */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
         {isTopPick && (
             <span className="bg-brand-yellow text-brand-blue-dark text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 uppercase tracking-wide">
                <i className="fas fa-crown text-xs"></i> Expert Choice
             </span>
         )}
         <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm backdrop-blur-md border flex items-center gap-1.5 ${isTopPick ? 'bg-black/80 text-white border-black/50' : 'bg-white/90 text-brand-blue-dark border-gray-200'}`}>
            <AIIcon className={`w-3 h-3 ${isTopPick ? 'text-brand-yellow' : 'text-brand-accent'}`} />
            {matchScore}% Match
         </span>
      </div>

      {/* Rank Number (Subtle Watermark) */}
      <div className="absolute top-3 right-3 z-20">
         <span className="text-gray-400/20 font-black text-4xl select-none font-heading">
            0{rank + 1}
         </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white p-6 overflow-hidden border-b border-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-brand-blue-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="bg-white/95 backdrop-blur text-brand-blue-dark text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-gray-100">
                View Specifications
            </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow relative">
        {/* Category Tag */}
        <div className="mb-2">
            <span className="inline-block text-[9px] font-bold text-gray-400 uppercase tracking-wider border border-gray-100 px-1.5 py-0.5 rounded bg-gray-50">
                {categoryName}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-brand-blue-dark mb-3 leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Technical Tags / Features - Prioritize Tags over Features */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
            {(product.tags && product.tags.length > 0 ? product.tags : product.features).slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-100 truncate max-w-full">
                    {tag.replace(/-/g, ' ')}
                </span>
            ))}
        </div>

        {/* Bottom Action Area */}
        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
            <button
                onClick={handleAddToQuote}
                disabled={isAdded}
                className={`flex-1 text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm transform active:scale-95
                    ${isAdded 
                        ? 'bg-green-500 text-white border border-green-500 cursor-default' 
                        : 'bg-brand-blue-dark text-white hover:bg-brand-accent hover:shadow-md'
                    }`}
            >
                {isAdded ? (
                    <>
                        <i className="fas fa-check"></i> Added
                    </>
                ) : (
                    <>
                        <i className="fas fa-file-invoice"></i> Add to Quote
                    </>
                )}
            </button>
        </div>
      </div>
    </Link>
  );
};

export default AIRecommendationCard;
