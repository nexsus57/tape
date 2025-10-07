
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CategoryProvider } from './context/CategoryContext';
import { SettingsProvider } from './context/SettingsContext';
import { IndustryProvider } from './context/IndustryContext';
import { SearchModalProvider } from './context/SearchModalContext';
import { BlogProvider } from './context/BlogContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SearchModalProvider>
          <AuthProvider>
            <SettingsProvider>
              <ProductProvider>
                <CategoryProvider>
                  <IndustryProvider>
                    <BlogProvider>
                      <App />
                    </BlogProvider>
                  </IndustryProvider>
                </CategoryProvider>
              </ProductProvider>
            </SettingsProvider>
          </AuthProvider>
        </SearchModalProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
