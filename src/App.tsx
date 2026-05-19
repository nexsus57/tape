
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './components/PublicLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Use direct imports instead of lazy loading to allow synchronous SSR prerendering
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ProductsListPage from './pages/ProductsListPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin components
import AdminLoginPage from './pages/admin/AdminLoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsListPage from './pages/admin/AdminProductsListPage';
import AdminProductEditPage from './pages/admin/AdminProductEditPage';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';
import AdminIndustriesPage from './pages/admin/AdminIndustriesPage';
import AdminIndustryEditPage from './pages/admin/AdminIndustryEditPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import AdminBlogListPage from './pages/admin/AdminBlogListPage';
import AdminBlogEditPage from './pages/admin/AdminBlogEditPage';
import SeoContentHubPage from './pages/SeoContentHubPage';


export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Admin login is a public route */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          
          {/* All routes under /admin/ are protected and use the AdminLayout */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="products" element={<AdminProductsListPage />} />
              <Route path="products/new" element={<AdminProductEditPage />} />
              <Route path="products/edit/:productId" element={<AdminProductEditPage />} />
              <Route path="categories" element={<AdminCategoriesPage />} />
              <Route path="industries" element={<AdminIndustriesPage />} />
              <Route path="industries/edit/:industryId" element={<AdminIndustryEditPage />} />
              <Route path="blog" element={<AdminBlogListPage />} />
              <Route path="blog/new" element={<AdminBlogEditPage />} />
              <Route path="blog/edit/:slug" element={<AdminBlogEditPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
              <Route path="seo-content-hub" element={<SeoContentHubPage />} />
          </Route>
          
          {/* Public-facing website routes with PublicLayout */}
          <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="industries" element={<IndustriesPage />} />
              <Route path="products" element={<ProductsListPage />} />
              <Route path="industry/:industryId" element={<ProductsListPage />} />
              <Route path="category/:categoryId" element={<ProductsListPage />} />
              <Route path="tag/:tagId" element={<ProductsListPage />} />
              <Route path="search/:searchQuery" element={<ProductsListPage />} />
              <Route path="product/:productId" element={<ProductPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog">
                <Route index element={<BlogPage />} />
                <Route path=":slug" element={<BlogPostPage />} />
              </Route>
              <Route path="request-quote" element={<RequestQuotePage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              {/* Catch-all for any other route */}
              <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
