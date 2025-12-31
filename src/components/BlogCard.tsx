
import { Link } from 'react-router-dom';
import { type FC } from 'react';
import { BlogArticle } from '../types';

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: FC<BlogCardProps> = ({ article }) => {
    const articleUrl = `/blog/${article.id}`;

    return (
        <article className="group bg-white rounded-lg border border-slate-200 hover:border-brand-accent transition-all duration-200 flex flex-col h-full hover:shadow-md">
            <div className="p-6 flex flex-col flex-grow">
                {/* Header: Category & Meta */}
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-brand-blue-deep bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                        {article.category}
                    </span>
                    <div className="text-xs text-slate-500 font-mono">
                        {article.readTime} MIN READ
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-brand-blue-dark mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                    <Link to={articleUrl} className="block">
                        {article.title}
                    </Link>
                </h2>

                {/* Technical Summary */}
                <p className="text-slate-600 text-sm leading-relaxed flex-grow font-medium">
                    {article.summary}
                </p>

                {/* Footer: Date & Link */}
                <div className="mt-6 pt-4 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">
                        {new Date(article.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase()}
                    </span>
                    <Link to={articleUrl} className="font-bold text-brand-accent hover:underline uppercase tracking-wide flex items-center">
                        Read Analysis <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
