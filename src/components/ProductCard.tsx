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
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 overflow-hidden"
    >
      <div className="relative overflow-hidden bg-gray-50/50 p-6 sm:p-8 aspect-[4/3] flex items-center justify-center border-b border-gray-100 mix-blend-multiply">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105 filter drop-shadow-sm mix-blend-multiply"
          loading="lazy"
          width="300"
          height="300"
          onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="mb-2 flex items-center">
             <span className="inline-block text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">
              {categoryName}
            </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2 tracking-tight">
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

        <div className={`mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3 ${specs.length === 0 ? 'mt-auto' : ''}`}>
            <button
                onClick={handleAddToQuote}
                className="w-full bg-slate-900 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300 shadow-sm z-10 whitespace-nowrap"
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
