
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { useIndustry } from '../../context/IndustryContext';
import { useBlog } from '../../context/BlogContext';
import StatCard from '../../components/admin/StatCard';
import { ProductsIcon, CategoriesIcon, IndustryIcon, BlogIcon, PlusCircleIcon, SettingsIcon, SeoIcon } from '../../components/icons/AdminIcons';

// Simple Mock Chart Component using SVG
const MockTrafficChart = () => (
  <div className="w-full h-64 bg-white rounded-lg p-4 border border-gray-100 relative">
    <h3 className="text-sm font-bold text-gray-500 mb-4">Traffic Overview (Last 7 Days)</h3>
    <div className="absolute bottom-0 left-0 right-0 top-10 px-4 flex items-end justify-between gap-2">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
         <div key={i} className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: `${h}%` }}>
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                 {h * 12} Views
             </div>
         </div>
      ))}
    </div>
  </div>
);

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
      <h1 className="text-3xl font-bold text-admin-text mb-6">Dashboard Overview</h1>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <Link to={stat.link} key={stat.title} className="hover:scale-105 transform transition-transform duration-200">
            <StatCard icon={stat.icon} title={stat.title} value={stat.value} />
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
           {/* Chart */}
           <div className="bg-admin-card p-6 rounded-lg shadow-md">
               <MockTrafficChart />
           </div>
           
           {/* Quick Actions */}
           <div className="bg-admin-card p-6 rounded-lg shadow-md">
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
        </div>
        
        {/* Sidebar Status */}
        <div className="bg-admin-card p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold text-admin-text mb-4">System Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-admin-text-light">Database</span>
              <span className="font-bold text-green-500 flex items-center">
                LocalStorage <span className="ml-1 text-xs">✅</span>
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-admin-text-light">Search Index</span>
              <span className="font-bold text-green-500">
                Active <span className="text-xs">✅</span>
              </span>
            </div>
             <div className="flex items-center justify-between text-sm">
              <span className="text-admin-text-light">Sitemap</span>
              <span className="font-bold text-green-500">
                Generated <span className="text-xs">✅</span>
              </span>
            </div>
             <div className="mt-4 text-xs text-gray-400 border-t border-admin-border pt-3">
                Real-time sync enabled for all connected clients.
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
