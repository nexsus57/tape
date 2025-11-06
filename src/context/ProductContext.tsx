import { createContext, useContext, ReactNode, useCallback, useMemo, FC } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Product } from '../types';
import { ALL_PRODUCTS as INITIAL_PRODUCTS } from '../data/seoData'; // Correctly import from the new single source of truth

interface ProductContextType {
  products: Product[];
  addProduct: (productData: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [storedProducts, setProducts] = useLocalStorage<Product[]>('tapeindia_products_v14', INITIAL_PRODUCTS);

  const products = useMemo(() => {
    if (!storedProducts || storedProducts.length === 0) {
      return INITIAL_PRODUCTS;
    }
    return storedProducts;
  }, [storedProducts]);

  const addProduct = useCallback((productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `${productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`
    };
    setProducts(prev => [...prev, newProduct]);
  }, [setProducts]);

  const updateProduct = useCallback((id: string, updatedProductData: Product) => {
    setProducts(prev => prev.map(p => (p.id === id ? updatedProductData : p)));
  }, [setProducts]);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, [setProducts]);


  const value = { products, addProduct, updateProduct, deleteProduct };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
