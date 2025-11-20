
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { PlusCircleIcon } from '../../components/icons/AdminIcons';

const AdminProductsListPage = () => {
  const { products, deleteProduct } = useProducts();
  const { categories } = useCategories();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const categoryMap = useMemo(() => {
    return new Map(categories.map(c => [c.id, c.name]));
  }, [categories]);

  const getCategoryName = (categoryId: string) => {
    return categoryMap.get(categoryId) || 'Uncategorized';
  };

  const filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = () => {
      if (selectedIds.size === filteredProducts.length) {
          setSelectedIds(new Set());
      } else {
          setSelectedIds(new Set(filteredProducts.map(p => p.id)));
      }
  };

  const toggleSelectOne = (id: string) => {
      const newSet = new Set(selectedIds);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      setSelectedIds(newSet);
  };

  const handleBulkDelete = () => {
      if (window.confirm(`Are you sure you want to delete ${selectedIds.size} products? This cannot be undone.`)) {
          selectedIds.forEach(id => deleteProduct(id));
          setSelectedIds(new Set());
      }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-admin-text">Products</h1>
        <div className="flex gap-2">
            <input 
                type="text" 
                placeholder="Search products..." 
                className="p-2 border rounded-md text-sm w-64"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <Link 
              to="/admin/products/new" 
              className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors duration-300 flex items-center"
            >
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Add Product
            </Link>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedIds.size > 0 && (
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-md mb-4 flex justify-between items-center animate-fade-in">
              <span className="text-sm font-semibold text-blue-800">{selectedIds.size} items selected</span>
              <div className="space-x-2">
                  <button 
                    onClick={handleBulkDelete}
                    className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded hover:bg-red-200 font-semibold"
                  >
                      Delete Selected
                  </button>
              </div>
          </div>
      )}

      <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-admin-border bg-gray-50">
                <th className="px-5 py-3 text-left w-10">
                    <input 
                        type="checkbox" 
                        checked={selectedIds.size === filteredProducts.length && filteredProducts.length > 0}
                        onChange={toggleSelectAll}
                        className="rounded border-gray-300"
                    />
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Image</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Product Name</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className={`border-b border-admin-border hover:bg-gray-50 ${selectedIds.has(product.id) ? 'bg-blue-50/50' : ''}`}>
                  <td className="px-5 py-4">
                    <input 
                        type="checkbox" 
                        checked={selectedIds.has(product.id)}
                        onChange={() => toggleSelectOne(product.id)}
                        className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-contain rounded-md bg-slate-100 p-1" />
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <p className="text-admin-text font-semibold whitespace-no-wrap">{product.name}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <p className="text-admin-text-light whitespace-no-wrap">{getCategoryName(product.category)}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <Link to={`/admin/products/edit/${product.id}`} className="text-admin-accent hover:text-admin-accent-hover font-semibold">Edit</Link>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-500">
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
