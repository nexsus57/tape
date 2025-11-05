


import { createContext, useContext, ReactNode, useCallback, FC } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BlogArticle } from '../types';
import { seoData } from '../data/seoData';

const INITIAL_ARTICLES: BlogArticle[] = seoData
    .filter(page => page["Page Type"] === 'Blog')
    .map(blog => {
        const title = blog["Page Name"];
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 50);

        return {
            id: id,
            title: blog.H1.split('—')[0].trim(),
            summary: blog["Meta Description (≤160 chars)"],
            content: `
              <p>${blog.summary}</p>
              <h2>${blog.H2_1 || ''}</h2>
              <p>Details about ${blog.H2_1?.toLowerCase() || 'this topic'}.</p>
              <h2>${blog.H2_2 || ''}</h2>
              <p>Details about ${blog.H2_2?.toLowerCase() || 'this topic'}.</p>
            `, // NOTE: This is a placeholder. Real content would be needed.
            category: blog["Secondary Keywords"].split(',')[0].trim(), // Heuristic
            tags: blog["Primary Keywords"].split(', ').slice(0, 3), // Heuristic
            readTime: 5, // Placeholder
            image: 'https://file.garden/aIULwzQ_QkPKQcGw/banner.webp', // Placeholder
            author: 'Tape India Experts',
            datePublished: new Date().toISOString().split('T')[0], // Placeholder
            dateModified: new Date().toISOString().split('T')[0], // Placeholder
        };
    });


interface BlogContextType {
  articles: BlogArticle[];
  addArticle: (articleData: Omit<BlogArticle, 'id'>) => void;
  updateArticle: (id: string, updatedArticle: BlogArticle) => void;
  deleteArticle: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
    children: ReactNode;
}

export const BlogProvider: FC<BlogProviderProps> = ({ children }) => {
  const [articles, setArticles] = useLocalStorage<BlogArticle[]>('tapeindia_articles_v5', INITIAL_ARTICLES);

  const addArticle = useCallback((articleData: Omit<BlogArticle, 'id'>) => {
    const newArticle: BlogArticle = {
      ...articleData,
      id: `${articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 50)}`
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
}

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
