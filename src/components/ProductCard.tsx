// FIX: The reported error is likely a cascade issue. This import is correct for react-router-dom v5.
import { Link } from 'react-router-dom';
import { type FC, useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, categoryName }) => {
  const hasImage = product.images && product.images.length > 0;
  const [isImageBroken, setIsImageBroken] = useState(false);

  // Reset error state when the product prop changes
  useEffect(() => {
    setIsImageBroken(false);
  }, [product.id]);

  const showPlaceholder = !hasImage || isImageBroken;
  // FIX: Property 'title' does not exist on type 'SeoPageData'. Use 'Title (≤60 chars)' instead.
  const imageAltText = product.seo?.["Title (≤60 chars)"] || product.name;

  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 flex flex-col overflow-hidden border border-slate-200/50 h-full transform hover:-translate-y-1.5">
      
      <Link to={`/product/${product.id}`} className="relative w-full flex-shrink-0" aria-label={`View details for ${product.name}`}>
        <div className="h-48 bg-slate-50 flex items-center justify-center overflow-hidden p-2">
          {showPlaceholder ? (
            <div className="w-full h-full flex items-center justify-center text-center">
              <h3 className="font-bold text-slate-700 text-xl leading-tight group-hover:scale-105 transition-transform duration-300">
                  {product.name}
              </h3>
            </div>
          ) : (
             <img 
               src={product.images?.[0]} 
               alt={imageAltText}
               className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
               loading="lazy"
               onError={() => setIsImageBroken(true)}
               width="192"
               height="192"
             />
          )}
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
                  className="w-full md:flex-1 text-center bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-md text-base sm:text-sm hover:bg-slate-200 transition-colors"
                >
                  Details
                </Link>
                <Link
                  to={`/request-quote?product=${product.id}`}
                  className="w-full md:flex-1 text-center bg-brand-accent text-white font-semibold py-3 px-4 rounded-md text-base sm:text-sm hover:bg-brand-accent-dark transition-colors"
                >
                  Get Quote
                </Link>
            </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
