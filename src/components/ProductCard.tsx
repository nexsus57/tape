
import { Link } from 'react-router-dom';
import { type FC, type MouseEvent } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, categoryName }) => {
  const { addToCart } = useCart();

  const handleAddToQuote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigating to the product page
    e.stopPropagation();
    addToCart(product.id);
    // Simple feedback
    alert(`${product.name} added to quote basket!`);
  };

  // Determine what to show as "Specs". Prioritize tags for short keywords.
  // Fallback to features if tags are empty.
  const specs = (product.tags && product.tags.length > 0) 
    ? product.tags.slice(0, 3) 
    : (product.features ? product.features.slice(0, 2) : []);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 overflow-hidden transform hover:-translate-y-1 product-card"
    >
      {/* Image Section - Uniform Background */}
      <div className="relative overflow-hidden bg-slate-50 border-b border-gray-100 p-4 sm:p-6 aspect-[4/3] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
          loading="lazy"
          width="300"
          height="300"
          onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
        />
        {/* Hover Badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
            <span className="bg-white/90 text-brand-blue-dark text-xs font-bold px-2 py-1 rounded shadow-sm backdrop-blur-sm border border-gray-100">
                Quick View
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Label */}
        <div className="mb-2">
             <span className="inline-block text-[10px] font-bold text-brand-accent uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              {categoryName}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-extrabold text-brand-blue-dark mb-2 leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description - Muted */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Quick Specs Row */}
        {specs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 mt-auto"> 
                {specs.map((spec, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200 truncate max-w-[120px] uppercase tracking-wide">
                        {spec.replace(/-/g, ' ')}
                    </span>
                ))}
            </div>
        )}

        {/* Action Footer */}
        <div className={`mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3 ${specs.length === 0 ? 'mt-auto' : ''}`}>
            <span className="text-xs font-bold text-gray-500 group-hover:text-brand-accent transition-colors flex items-center">
                View Specifications
            </span>
            <button
                onClick={handleAddToQuote}
                className="bg-brand-yellow text-brand-blue-dark text-xs font-bold px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300 shadow-sm z-10 whitespace-nowrap"
                aria-label={`Add ${product.name} to quote`}
            >
                Add to Quote
            </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
