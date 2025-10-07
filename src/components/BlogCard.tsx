
import { Link, useHref } from 'react-router-dom';
import type { FC } from 'react';
import { BlogArticle } from '../types';

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: FC<BlogCardProps> = ({ article }) => {
    // We construct the href manually to point to the anchor on the main blog page.
    // This avoids a full page navigation, allowing smooth scrolling.
    const blogPageHref = useHref('/blog');
    const fullArticleLink = `${blogPageHref}#${article.id}`;

    return (
        <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-200/50 h-full transform hover:-translate-y-1.5">
            <a href={fullArticleLink} className="block overflow-hidden">
                <img
                    src={article.image}
                    alt={`Featured image for article titled: ${article.title}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                    width="400"
                    height="225"
                />
            </a>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-bold text-brand-accent uppercase tracking-wider">
                        {article.category}
                    </p>
                    <div className="text-sm text-slate-500 flex items-center">
                        <i className="far fa-clock mr-1.5"></i>
                        <span>{article.readTime} min read</span>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-brand-blue-dark mb-3 leading-snug">
                    <a href={fullArticleLink} className="hover:text-brand-accent transition-colors duration-200">
                        {article.title}
                    </a>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed flex-grow line-clamp-3">
                    {article.summary}
                </p>
                <div className="mt-6">
                    <a href={fullArticleLink} className="font-bold text-brand-accent hover:text-brand-accent-dark transition-colors group-hover:translate-x-1 inline-block duration-300">
                        Read More &rarr;
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
