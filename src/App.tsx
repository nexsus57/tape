
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './components/PublicLayout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductsListPage = lazy(() => import('./pages/ProductsListPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy load Admin components
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminProductsListPage = lazy(() => import('./pages/admin/AdminProductsListPage'));
const AdminProductEditPage = lazy(() => import('./pages/admin/AdminProductEditPage'));
const AdminCategoriesPage = lazy(() => import('./pages/admin/AdminCategoriesPage'));
const AdminIndustriesPage = lazy(() => import('./pages/admin/AdminIndustriesPage'));
const AdminIndustryEditPage = lazy(() => import('./pages/admin/AdminIndustryEditPage'));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'));
const AdminBlogListPage = lazy(() => import('./pages/admin/AdminBlogListPage'));
const AdminBlogEditPage = lazy(() => import('./pages/admin/AdminBlogEditPage'));
const SeoContentHubPage = lazy(() => import('./pages/SeoContentHubPage.tsx'));


export default function App() {
  return (
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
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="request-quote" element={<RequestQuotePage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Catch-all for any other route */}
            <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
