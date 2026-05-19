
import { createContext, useContext, ReactNode, useCallback, FC, useMemo, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { BlogArticle, SeoPageData } from '../types';
import { ALL_BLOG_ARTICLES } from '../data/seoData';
import { TECHNICAL_BLOGS } from '../data/blogData';

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

// Combine existing general blogs with new technical blogs
const INITIAL_ARTICLES = [...ALL_BLOG_ARTICLES, ...TECHNICAL_BLOGS];

export const BlogProvider: FC<BlogProviderProps> = ({ children }) => {
  // Use v10 to ensure we run the new migration/merge logic cleanly
  const [storedArticles, setArticles] = useLocalStorage<BlogArticle[]>('tapeindia_blog_v10', []);

  useEffect(() => {
    // Attempt recovery from older versions to preserve user's custom posts
    let legacyArticles: BlogArticle[] = [];
    try {
        const v8 = localStorage.getItem('tapeindia_blog_v8');
        const v9 = localStorage.getItem('tapeindia_blog_v9');
        const vX = v9 ? JSON.parse(v9) : (v8 ? JSON.parse(v8) : null);
        if (Array.isArray(vX)) {
            legacyArticles = vX;
        }
    } catch(e) {
        console.error("Could not recover legacy articles");
    }

    // Combine legacy, current stored, and INITIAL_ARTICLES, ensuring uniqueness by ID
    const allKnown = [...legacyArticles, ...(Array.isArray(storedArticles) ? storedArticles : []), ...INITIAL_ARTICLES];
    
    // De-duplicate by ID, prioritizing newer or custom entries if they share an ID with INITIAL
    const mergedMap = new Map<string, BlogArticle>();
    
    // First, insert INITIAL_ARTICLES as base
    INITIAL_ARTICLES.forEach(a => mergedMap.set(a.id, a));
    
    // Then overwrite/append with anything in legacy/stored matching
    allKnown.forEach(a => {
        if (!INITIAL_ARTICLES.find(initA => initA.id === a.id)) {
            // It's a custom article, retain it!
            mergedMap.set(a.id, a);
        } else if (a.dateModified > mergedMap.get(a.id)!.dateModified) {
             // If a saved version of a default article is newer, keep it
             mergedMap.set(a.id, a);
        }
    });

    const finalArticles = Array.from(mergedMap.values());

    // Only update if the merged length or content differs to avoid infinite loops
    if (!Array.isArray(storedArticles) || storedArticles.length !== finalArticles.length) {
        setArticles(finalArticles);
    }
  }, []); // Run only on mount to stabilize state

  const articles = useMemo(() => {
    const validArticles = Array.isArray(storedArticles) && storedArticles.length > 0 ? storedArticles : INITIAL_ARTICLES;
    return [...validArticles].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
  }, [storedArticles]);

  const addArticle = useCallback((articleData: Omit<BlogArticle, 'id' | 'seo'>) => {
    const newSlug = `${articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

    const newSeo: SeoPageData = {
        "Page Type": "Blog Post",
        "Page Name": articleData.title,
        "Full URL": `https://tapeindia.shop/blog/${newSlug}`,
        "Title (≤60 chars)": `${articleData.title} | Tape India Blog`,
        "Meta Description (≤160 chars)": articleData.summary,
        "H1": articleData.title,
        "Primary Keywords": articleData.tags?.join(', ') || articleData.title,
        "Secondary Keywords": articleData.category,
        summary: articleData.summary,
        "CTA": "Read More",
        "Schema Type": "Article",
        faqs: [],
        "Product Schema (JSON-LD)": null,
        "LocalBusiness Schema (JSON-LD)": "{}",
        "FAQ Schema (JSON-LD)": "{}",
        "Combined Schema (JSON-LD)": "{}",
        id: newSlug,
    };
    
    const newArticle: BlogArticle = {
      ...articleData,
      id: newSlug,
      seo: newSeo,
    };

    setArticles(prev => (Array.isArray(prev) ? [newArticle, ...prev] : [newArticle]));
  }, [setArticles]);

  const updateArticle = useCallback((id: string, updatedArticleData: BlogArticle) => {
    setArticles(prev => (Array.isArray(prev) ? prev.map(a => (a.id === id ? updatedArticleData : a)) : [updatedArticleData]));
  }, [setArticles]);

  const deleteArticle = useCallback((id: string) => {
    setArticles(prev => (Array.isArray(prev) ? prev.filter(a => a.id !== id) : []));
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
