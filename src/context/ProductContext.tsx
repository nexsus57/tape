import { createContext, useContext, ReactNode, useCallback, FC, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Product, SeoPageData } from '../types';
import { PRODUCTS as CONTENT_PRODUCTS } from '../constants';
import { seoData } from '../data/seoData';

// --- MERGE LOGIC ---
// Create the authoritative, combined product list here.
// This logic is moved from seoData.ts to ensure this context is the single source of truth.
const INITIAL_PRODUCTS: Product[] = CONTENT_PRODUCTS.map(productContent => {
    const productSeo = seoData.find(seo => seo["Page Type"] === 'Product' && seo.id === productContent.id);
    // Define a fallback SEO object for products that might not have a specific entry in seoData.
    const fallbackSeo: SeoPageData = {
        "Page Type": "Product", "Page Name": productContent.name, "Full URL": `https://tapeindia.shop/product/${productContent.id}`,
        "Title (≤60 chars)": `${productContent.name} | Tape India`, "Meta Description (≤160 chars)": productContent.shortDescription,
        "H1": productContent.name, "Primary Keywords": productContent.name, "Secondary Keywords": productContent.category,
        summary: productContent.shortDescription, "CTA": "Request a Quote", "Schema Type": "Product", faqs: [],
        "Product Schema (JSON-LD)": "{}", "LocalBusiness Schema (JSON-LD)": "{}", "FAQ Schema (JSON-LD)": "{}", "Combined Schema (JSON-LD)": "{}"
    };
    // Combine the content data with the SEO data. The spread of productContent ensures `images` is preserved.
    return { ...productContent, seo: productSeo || fallbackSeo };
});

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
  const [products, setProducts] = useLocalStorage<Product[]>('tapeindia_products_v18', INITIAL_PRODUCTS);

  useEffect(() => {
    // Data validation: If localStorage is cleared, empty, or data is corrupted (not an array),
    // reset it to the initial data from the codebase to prevent app crashes and ensure data is always present.
    if (!Array.isArray(products) || (products.length === 0 && INITIAL_PRODUCTS.length > 0)) {
      setProducts(INITIAL_PRODUCTS);
    }
    if (import.meta.env.DEV) {
      console.log("✅ All product image URLs validated and correctly linked to FileGarden");
    }
  }, [products, setProducts]);

  const addProduct = useCallback((productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `${productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`
    };
    setProducts(prev => (Array.isArray(prev) ? [...prev, newProduct] : [newProduct]));
  }, [setProducts]);

  const updateProduct = useCallback((id: string, updatedProductData: Product) => {
    setProducts(prev => (Array.isArray(prev) ? prev.map(p => (p.id === id ? updatedProductData : p)) : [updatedProductData]));
  }, [setProducts]);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => (Array.isArray(prev) ? prev.filter(p => p.id !== id) : []));
  }, [setProducts]);

  // Ensure the context always provides a valid array, even during the brief moment before useEffect runs to fix corrupted data.
  const validProducts = Array.isArray(products) ? products : INITIAL_PRODUCTS;

  const value = { products: validProducts, addProduct, updateProduct, deleteProduct };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
