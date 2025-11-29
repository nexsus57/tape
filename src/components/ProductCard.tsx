import { Link } from 'react-router-dom';
import { type FC } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, categoryName }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden transform hover:-translate-y-1 product-card"
    >
      <div className="relative overflow-hidden bg-gray-50 p-4 aspect-[4/3] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width="300"
          height="300"
          onError={(e) => (e.currentTarget.src = "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png")}
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
          {categoryName}
        </p>
        <h3 className="text-lg font-bold text-brand-blue-dark mb-3 leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
            <span className="text-sm font-bold text-brand-accent group-hover:text-brand-accent-dark flex items-center">
                View Product <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
