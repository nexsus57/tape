import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { useIndustry } from '../../context/IndustryContext';
import { useBlog } from '../../context/BlogContext';
import StatCard from '../../components/admin/StatCard';
import { ProductsIcon, CategoriesIcon, IndustryIcon, BlogIcon, PlusCircleIcon, SettingsIcon, SeoIcon } from '../../components/icons/AdminIcons';

export default function AdminDashboardPage() {
  const { products } = useProducts();
  const { categories } = useCategories();
  const { industries } = useIndustry();
  const { articles } = useBlog();

  const stats = [
    { title: 'Total Products', value: products.length, icon: ProductsIcon, link: '/admin/products' },
    { title: 'Total Categories', value: categories.length, icon: CategoriesIcon, link: '/admin/categories' },
    { title: 'Total Industries', value: industries.length, icon: IndustryIcon, link: '/admin/industries' },
    { title: 'Total Blog Posts', value: articles.length, icon: BlogIcon, link: '/admin/blog' },
  ];

  const quickActions = [
    { text: 'Add New Product', link: '/admin/products/new', icon: PlusCircleIcon, external: false },
    { text: 'Manage Site Settings', link: '/admin/settings', icon: SettingsIcon, external: false },
    { text: 'View SEO Hub', link: '/admin/seo-content-hub', icon: SeoIcon, external: false },
    { text: 'View Live Site', link: '/', icon: null, external: true },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-admin-text mb-6">Dashboard</h1>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <Link to={stat.link} key={stat.title} className="hover:scale-105 transform transition-transform duration-200">
            <StatCard icon={stat.icon} title={stat.title} value={stat.value} />
          </Link>
        ))}
      </div>

      {/* Quick Actions & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-admin-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-admin-text mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map(action => (
              <Link
                key={action.text}
                to={action.link}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="flex items-center p-4 bg-gray-50 hover:bg-admin-accent hover:text-white rounded-lg transition-colors group"
              >
                {action.icon && <action.icon className="h-6 w-6 mr-3 text-admin-accent group-hover:text-white transition-colors" />}
                <span className="font-semibold">{action.text}</span>
                {action.external && <i className="fas fa-external-link-alt ml-auto text-xs text-gray-400 group-hover:text-white"></i>}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-admin-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-admin-text mb-4">System Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-admin-text-light">Products Loaded</span>
              <span className="font-bold text-green-500 flex items-center">
                {products.length} <span className="ml-1 text-xs">✅</span>
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-admin-text-light">Data Sources</span>
              <span className="font-bold text-green-500">
                Connected <span className="text-xs">✅</span>
              </span>
            </div>
             <div className="mt-4 text-xs text-gray-400 border-t border-admin-border pt-3">
                Dashboard provides a real-time overview of your site's content.
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
