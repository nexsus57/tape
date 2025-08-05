
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { PlusCircleIcon } from '../../components/icons/AdminIcons';
import { useMemo } from 'react';

const AdminProductsListPage = () => {
  const { products, deleteProduct } = useProducts();
  const { categories } = useCategories();

  const categoryMap = useMemo(() => {
    return new Map(categories.map(c => [c.id, c.name]));
  }, [categories]);

  const getCategoryName = (categoryId: string) => {
    // If the category was deleted, this prevents a crash
    return categoryMap.get(categoryId) || 'Uncategorized';
  };

  const handleDelete = (productId: string, productName: string) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"? This action cannot be undone.`)) {
      deleteProduct(productId);
      alert(`Product "${productName}" deleted successfully.`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-admin-text">Products</h1>
        <Link 
          to="/admin/products/new" 
          className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors duration-300 flex items-center"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-admin-border bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Product Name</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Description</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-admin-border hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm">
                    <p className="text-admin-text font-semibold whitespace-no-wrap">{product.name}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <p className="text-admin-text-light whitespace-no-wrap">{getCategoryName(product.category)}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                     <p className="text-admin-text-light whitespace-normal max-w-xs truncate">{product.shortDescription}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <Link to={`/admin/products/edit/${product.id}`} className="text-admin-accent hover:text-admin-accent-hover font-semibold">Edit</Link>
                      <button 
                        onClick={() => handleDelete(product.id, product.name)} 
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                    <td colSpan={4} className="text-center py-10 text-gray-500">
                        No products found. <Link to="/admin/products/new" className="text-admin-accent hover:underline">Add one now!</Link>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsListPage;