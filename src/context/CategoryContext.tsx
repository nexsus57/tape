import { createContext, useContext, ReactNode, useCallback, FC, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Category } from '../types';
import { ALL_CATEGORIES as INITIAL_CATEGORIES } from '../data/seoData';

interface CategoryContextType {
  categories: Category[];
  addCategory: (categoryData: Pick<Category, 'name' | 'subtitle' | 'icon'>) => void;
  updateCategory: (id: string, updatedCategoryData: Category) => void;
  deleteCategory: (id: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: FC<CategoryProviderProps> = ({ children }) => {
  const [categories, setCategories] = useLocalStorage<Category[]>('tapeindia_categories_v12', INITIAL_CATEGORIES);

  useEffect(() => {
    // Data validation: If localStorage is cleared, empty, or data is corrupted (not an array),
    // reset it to the initial data from the codebase.
    if (!Array.isArray(categories) || (categories.length === 0 && INITIAL_CATEGORIES.length > 0)) {
      setCategories(INITIAL_CATEGORIES);
    }
  }, [categories, setCategories]);

  const addCategory = useCallback((categoryData: Pick<Category, 'name' | 'subtitle' | 'icon'>) => {
    const newCategory: Category = {
      ...categoryData,
      id: `${categoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`,
    };
    setCategories(prev => (Array.isArray(prev) ? [...prev, newCategory] : [newCategory]));
  }, [setCategories]);

  const updateCategory = useCallback((id: string, updatedCategoryData: Category) => {
    setCategories(prev => (Array.isArray(prev) ? prev.map(c => (c.id === id ? updatedCategoryData : c)) : [updatedCategoryData]));
  }, [setCategories]);

  const deleteCategory = useCallback((id: string) => {
    setCategories(prev => (Array.isArray(prev) ? prev.filter(c => c.id !== id) : []));
  }, [setCategories]);

  // Ensure the context always provides a valid array to consumers.
  const validCategories = Array.isArray(categories) ? categories : INITIAL_CATEGORIES;

  const value = { categories: validCategories, addCategory, updateCategory, deleteCategory };

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export const useCategories = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};
