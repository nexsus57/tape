
import { ALL_CATEGORIES } from '../../data/seoData';

const AdminCategoriesPage = () => {
    const categories = ALL_CATEGORIES;

    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Categories</h1>

            <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr className="border-b-2 border-admin-border bg-gray-50">
                                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Slug</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Subtitle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="border-b border-admin-border hover:bg-gray-50">
                                    <td className="px-5 py-4 text-sm font-semibold text-admin-text flex items-center">
                                        {category.image ? (
                                            <img src={category.image} alt={category.name} className="w-10 h-10 object-cover rounded-md mr-4 flex-shrink-0" />
                                        ) : (
                                            <div className="w-10 h-10 bg-gray-200 rounded-md mr-4 flex-shrink-0"></div>
                                        )}
                                        <span>{category.name}</span>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-admin-text-light">{category.id}</td>
                                    <td className="px-5 py-4 text-sm text-admin-text-light">{category.subtitle}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="mt-4 text-sm text-admin-text-light">
                Note: Category management is currently read-only. Data is sourced directly from the codebase.
            </p>
        </div>
    );
};

export default AdminCategoriesPage;
