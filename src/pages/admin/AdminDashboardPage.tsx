import { Link } from 'react-router-dom';
import StatCard from '../../components/admin/StatCard';
import { ProductsIcon, CategoriesIcon, PlusCircleIcon, SettingsIcon, IndustryIcon } from '../../components/icons/AdminIcons';
import { ALL_CATEGORIES } from '../../data/seoData';
import { PRODUCTS, INITIAL_INDUSTRIES_DETAILED } from '../../constants';


const AdminDashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Dashboard</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={ProductsIcon} title="Total Products" value={PRODUCTS.length} />
                <StatCard icon={CategoriesIcon} title="Total Categories" value={ALL_CATEGORIES.length} />
                <StatCard icon={IndustryIcon} title="Total Industries" value={INITIAL_INDUSTRIES_DETAILED.length} />
            </div>
            
            {/* Other Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/* Google Analytics Placeholder */}
                <div className="lg:col-span-2 bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-4">Website Traffic</h2>
                    <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                        <p className="text-admin-text-light">Analytics Widget Placeholder</p>
                    </div>
                </div>

                {/* Recent Activity or Quick Links */}
                <div className="bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-4">Quick Links</h2>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/admin/products/new" className="text-admin-accent hover:text-admin-accent-hover font-medium flex items-center">
                                <PlusCircleIcon className="w-5 h-5 mr-2" />
                                Add New Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products" className="text-admin-accent hover:text-admin-accent-hover font-medium">Manage Products</Link>
                        </li>
                         <li>
                            <Link to="/admin/categories" className="text-admin-accent hover:text-admin-accent-hover font-medium">Manage Categories</Link>
                        </li>
                         <li>
                            <Link to="/admin/industries" className="text-admin-accent hover:text-admin-accent-hover font-medium">Manage Industries</Link>
                        </li>
                        <li className="pt-4 border-t border-admin-border">
                            <Link to="/admin/settings" className="text-admin-accent hover:text-admin-accent-hover font-medium flex items-center">
                                <SettingsIcon className="w-5 h-5 mr-2" />
                                Site Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
