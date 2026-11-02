import { Link } from 'react-router-dom';
import type { FC } from 'react';
import { Category } from '../types';
import { ICONS_MAP, SparklesIcon } from './icons/CategoryIcons';
import { getCategoryTheme } from '../utils/categoryThemes';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const Icon = ICONS_MAP[category.icon] || SparklesIcon;
  const theme = getCategoryTheme(category.id);

  return (
    <Link 
      to={`/category/${category.id}`} 
      className={`group flex flex-col justify-between ${theme.cardBg} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border ${theme.cardBorder} transform hover:-translate-y-1.5 p-6 sm:p-8 h-full relative overflow-hidden`}
      aria-label={`Browse ${category.name}`}
    >
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.accentGradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

      <div>
        <div className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:scale-110`}>
          <Icon className="h-7 w-7 transition-colors duration-300" />
        </div>
        
        <h3 className={`text-xl font-bold text-slate-900 mb-2 ${theme.titleHover} transition-colors`}>
          {category.name}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
          {category.subtitle || category.description}
        </p>
      </div>

      <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-auto">
        <span className={`font-semibold ${theme.subtext} text-sm transition-colors inline-flex items-center gap-1.5`}>
          View Products
          <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
        </span>
        <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
          Explore &rarr;
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
