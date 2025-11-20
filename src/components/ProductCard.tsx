
import { Link } from 'react-router-dom';
import { type FC, useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, categoryName }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const imageAltText = product.seo?.["Title (≤60 chars)"] || product.name;

  const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault();
      addToCart(product.id);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 flex flex-col overflow-hidden border border-slate-200/50 h-full transform hover:-translate-y-1.5">
      
      <Link to={`/product/${product.id}`} className="relative w-full flex-shrink-0" aria-label={`View details for ${product.name}`}>
        <div className="bg-slate-50 flex items-center justify-center overflow-hidden p-2">
           <img 
             src={product.image} 
             alt={imageAltText}
             className="group-hover:scale-105 transition-transform duration-300"
             style={{ borderRadius: "12px" }}
             loading="lazy"
             crossOrigin="anonymous"
             onError={(e) => (e.currentTarget.src = 'https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png')}
           />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow w-full">
        <p className="text-brand-accent font-semibold text-sm mb-1 uppercase tracking-wide">
          {categoryName}
        </p>
        
        <h4 className="text-lg font-bold text-brand-blue-dark mb-2 leading-tight">
          <Link to={`/product/${product.id}`} className="hover:text-brand-accent transition-colors duration-200 line-clamp-2">
            {product.name}
          </Link>
        </h4>

        <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow line-clamp-3">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100">
           <div className="flex flex-col md:flex-row items-center gap-2">
                <Link
                  to={`/product/${product.id}`}
                  className="w-full md:flex-1 text-center bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-md text-sm hover:bg-slate-200 transition-colors"
                >
                  Details
                </Link>
                <button
                  onClick={handleAddToCart}
                  className={`w-full md:flex-1 text-center font-semibold py-2.5 px-4 rounded-md text-sm transition-all duration-300 flex items-center justify-center ${
                      added 
                      ? 'bg-green-500 text-white' 
                      : 'bg-brand-accent text-white hover:bg-brand-accent-dark'
                  }`}
                >
                  {added ? (
                      <>
                        <i className="fas fa-check mr-2"></i> Added
                      </>
                  ) : 'Add to Quote'}
                </button>
            </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
