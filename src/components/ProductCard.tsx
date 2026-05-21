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
    e.preventDefault(); 
    e.stopPropagation();
    addToCart(product.id);
    alert(`${product.name} added to quote basket!`);
  };

  const specs = (product.tags && product.tags.length > 0) 
    ? product.tags.slice(0, 3) 
    : (product.features ? product.features.slice(0, 3) : []);

  return (
    <Link
      to={`/product/${product.id.toLowerCase().replace(/[^a-z0-9-]+/g, '')}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 overflow-hidden"
    >
      <div className="relative overflow-hidden bg-white pt-[80%] sm:pt-[90%] w-full flex items-center justify-center border-b border-gray-100 group-hover:bg-gray-50 transition-colors duration-300">
        <div className="absolute inset-0 p-2 sm:p-4 flex items-center justify-center">
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain filter drop-shadow-md sm:drop-shadow-xl transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            width="350"
            height="350"
            onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
            />
        </div>
        {/* Mock Heart Icon or Best Seller Tag if needed */}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
        <div className="mb-2 flex items-center">
             <span className="inline-block text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-sm">
              {categoryName}
            </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4 mt-auto"> 
                {specs.map((spec, i) => (
                    <span key={i} className="text-[10px] font-medium text-gray-600 bg-gray-50 px-2 rounded-full border border-gray-200 truncate flex items-center py-0.5 max-w-full">
                        {/* Dummy icon could go here if we knew what it was */}
                        <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="truncate">{spec.replace(/-/g, ' ')}</span>
                    </span>
                ))}
            </div>
        )}

        <div className={`mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2 sm:gap-3 ${specs.length === 0 ? 'mt-auto' : ''}`}>
             <div className="flex-1 hidden sm:flex items-center justify-center text-[13px] md:text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg py-2.5">
                 Details
             </div>
             <button
                 onClick={handleAddToQuote}
                 className="w-full sm:flex-[2] bg-amber-500 text-gray-900 text-[15px] font-bold py-3 sm:py-2.5 px-4 rounded-lg hover:bg-amber-400 transition-colors duration-300 shadow-sm z-10 whitespace-nowrap flex items-center justify-center"
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
