
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
    ? product.tags.slice(0, 2) 
    : (product.features ? product.features.slice(0, 2) : []);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden transform hover:-translate-y-1 product-card"
    >
      <div className="relative overflow-hidden bg-white p-6 sm:p-8 aspect-[4/3] flex items-center justify-center border-b border-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="300"
          height="300"
          onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1.5">
             <span className="inline-block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {categoryName}
            </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-brand-blue-dark mb-2 leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
          {product.name}
        </h3>

        {specs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 mt-auto"> 
                {specs.map((spec, i) => (
                    <span key={i} className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 truncate max-w-[120px] uppercase tracking-wide">
                        {spec.replace(/-/g, ' ')}
                    </span>
                ))}
            </div>
        )}

        <div className={`mt-auto pt-3 border-t border-gray-50 flex items-center justify-between gap-3 ${specs.length === 0 ? 'mt-auto' : ''}`}>
            <button
                onClick={handleAddToQuote}
                className="w-full bg-brand-yellow text-brand-blue-dark text-xs sm:text-sm font-bold py-2.5 px-4 rounded hover:bg-yellow-400 transition-colors duration-300 shadow-sm z-10 whitespace-nowrap"
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
