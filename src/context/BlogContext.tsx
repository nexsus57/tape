

import { createContext, useContext, ReactNode, useCallback, FC } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BlogArticle } from '../types';
// FIX: Import SeoPageData to explicitly type the dummy SEO object.
import { ALL_BLOG_ARTICLES as INITIAL_ARTICLES, type SeoPageData } from '../data/seoData';

interface BlogContextType {
  articles: BlogArticle[];
  addArticle: (articleData: Omit<BlogArticle, 'id' | 'seo'>) => void;
  updateArticle: (id: string, updatedArticleData: BlogArticle) => void;
  deleteArticle: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
    children: ReactNode;
}

export const BlogProvider: FC<BlogProviderProps> = ({ children }) => {
  const [articles, setArticles] = useLocalStorage<BlogArticle[]>('tapeindia_blog_v3', INITIAL_ARTICLES);

  const addArticle = useCallback((articleData: Omit<BlogArticle, 'id' | 'seo'>) => {
    // A real implementation would fetch the full SEO data or generate it.
    // For now, we create a placeholder SEO object.
    // FIX: Explicitly type dummySeoData as SeoPageData to ensure its shape matches the required interface, particularly the string literal union for "Page Type".
    const dummySeoData: SeoPageData = {
        "Page Type": "Blog Post",
        "Page Name": articleData.title,
        "Full URL": `https://tapeindia.shop/blog/${articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        "Title (≤60 chars)": articleData.title,
        "Meta Description (≤160 chars)": articleData.summary,
        H1: articleData.title,
        "Primary Keywords": articleData.tags?.join(', ') || '',
        "Secondary Keywords": '',
        "FAQ Schema (JSON-LD)": "{}",
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}",
        CTA: "Read More",
        "Schema Type": "Article",
        summary: articleData.content,
        faqs: [],
    };

    const newArticle: BlogArticle = {
      ...articleData,
      id: `${articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`,
      seo: dummySeoData,
    };
    setArticles(prev => [newArticle, ...prev]);
  }, [setArticles]);

  const updateArticle = useCallback((id: string, updatedArticleData: BlogArticle) => {
    setArticles(prev => prev.map(a => (a.id === id ? updatedArticleData : a)));
  }, [setArticles]);

  const deleteArticle = useCallback((id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  }, [setArticles]);

  const value = { articles, addArticle, updateArticle, deleteArticle };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
