import { createContext, useContext, ReactNode, useCallback, FC, useMemo } from 'react';
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
  const [storedCategories, setCategories] = useLocalStorage<Category[]>('tapeindia_categories_v12', INITIAL_CATEGORIES);

  const categories = useMemo(() => {
    // Robustness check: Ensure stored data is a valid array. If not, or if it's an empty array
    // (which could indicate corruption), reset to the initial data from the codebase.
    if (!Array.isArray(storedCategories) || (storedCategories.length === 0 && INITIAL_CATEGORIES.length > 0)) {
      setCategories(INITIAL_CATEGORIES); // Correct the corrupted value in localStorage for next load
      return INITIAL_CATEGORIES;
    }
    return storedCategories;
  }, [storedCategories, setCategories]);

  const addCategory = useCallback((categoryData: Pick<Category, 'name' | 'subtitle' | 'icon'>) => {
    const newCategory: Category = {
      ...categoryData,
      id: `${categoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`,
    };
    setCategories(prev => [...prev, newCategory]);
  }, [setCategories]);

  const updateCategory = useCallback((id: string, updatedCategoryData: Category) => {
    setCategories(prev => prev.map(c => (c.id === id ? updatedCategoryData : c)));
  }, [setCategories]);

  const deleteCategory = useCallback((id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  }, [setCategories]);

  const value = { categories, addCategory, updateCategory, deleteCategory };

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export const useCategories = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};
