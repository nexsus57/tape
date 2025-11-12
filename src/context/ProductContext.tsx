import { createContext, useContext, ReactNode, useCallback, FC, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Product, SeoPageData } from '../types';
import { PRODUCTS as CONTENT_PRODUCTS } from '../constants';
import { seoData } from '../data/seoData';

const PLACEHOLDER_IMAGE = 'https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png';

// --- MERGE LOGIC ---
// Create the authoritative, combined product list here.
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
    // Combine content and SEO, then derive the guaranteed `image` property.
    const merged = { ...productContent, seo: productSeo || fallbackSeo };
    return {
        ...merged,
        image: merged.images?.[0]?.trim() || PLACEHOLDER_IMAGE
    };
});

interface ProductContextType {
  products: Product[];
  addProduct: (productData: Omit<Product, 'id' | 'image'>) => void;
  updateProduct: (id: string, updatedProduct: Omit<Product, 'image'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useLocalStorage<Product[]>('tapeindia_products_v19', INITIAL_PRODUCTS);

  useEffect(() => {
    if (!Array.isArray(products) || (products.length === 0 && INITIAL_PRODUCTS.length > 0)) {
      setProducts(INITIAL_PRODUCTS);
    }
  }, [products, setProducts]);

  const addProduct = useCallback((productData: Omit<Product, 'id' | 'image'>) => {
    const newProduct: Product = {
      ...productData,
      id: `${productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`,
      image: productData.images?.[0]?.trim() || PLACEHOLDER_IMAGE
    };
    setProducts(prev => (Array.isArray(prev) ? [...prev, newProduct] : [newProduct]));
  }, [setProducts]);

  const updateProduct = useCallback((id: string, updatedProductData: Omit<Product, 'image'>) => {
    const finalProductData: Product = {
        ...updatedProductData,
        image: updatedProductData.images?.[0]?.trim() || PLACEHOLDER_IMAGE
    };
    setProducts(prev => (Array.isArray(prev) ? prev.map(p => (p.id === id ? finalProductData : p)) : [finalProductData]));
  }, [setProducts]);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => (Array.isArray(prev) ? prev.filter(p => p.id !== id) : []));
  }, [setProducts]);

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
