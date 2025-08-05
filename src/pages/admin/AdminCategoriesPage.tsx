
import { useState, type FormEvent, ChangeEvent } from 'react';
import { useCategories } from '../../context/CategoryContext';
import { Category } from '../../types';

const AdminCategoriesPage = () => {
    const { categories, addCategory, deleteCategory, updateCategory } = useCategories();
    const [newCategoryName, setNewCategoryName] = useState('');
    
    // State for edit modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    const handleAddCategory = (e: FormEvent) => {
        e.preventDefault();
        if (newCategoryName.trim() === '') return;
        addCategory({ name: newCategoryName, subtitle: 'New category subtitle', icon: 'SparklesIcon' });
        setNewCategoryName('');
        alert('Category added successfully!');
    };
    
    const handleDelete = (categoryId: string, categoryName: string) => {
        if (window.confirm(`Are you sure you want to delete the category "${categoryName}"? This may affect products in this category.`)) {
            deleteCategory(categoryId);
            alert(`Category "${categoryName}" deleted.`);
        }
    };
    
    const handleOpenEditModal = (category: Category) => {
        setEditingCategory(category);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingCategory(null);
    };

    const handleUpdateCategory = (e: FormEvent) => {
        e.preventDefault();
        if (editingCategory) {
            updateCategory(editingCategory.id, editingCategory);
            alert('Category updated successfully!');
            handleCloseModal();
        }
    };

    const handleModalInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!editingCategory) return;
        const { name, value } = e.target;
        setEditingCategory(prev => prev ? { ...prev, [name]: value } : null);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Categories</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Add New Category Form */}
                <div className="lg:col-span-1">
                    <div className="bg-admin-card p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-admin-text mb-4">Add New Category</h2>
                        <form onSubmit={handleAddCategory}>
                            <div>
                                <label htmlFor="category-name" className="block text-sm font-medium text-admin-text-light mb-1">Category Name</label>
                                <input
                                    id="category-name"
                                    type="text"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"
                                    placeholder="e.g., Waterproof Tapes"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors"
                            >
                                Add Category
                            </button>
                        </form>
                    </div>
                </div>

                {/* Categories List */}
                <div className="lg:col-span-2">
                     <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr className="border-b-2 border-admin-border bg-gray-50">
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category</th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Slug</th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Actions</th>
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
                                            <td className="px-5 py-4 text-sm">
                                                 <div className="flex items-center space-x-3">
                                                    <button 
                                                        onClick={() => handleOpenEditModal(category)} 
                                                        className="text-admin-accent hover:text-admin-accent-hover"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(category.id, category.name)} 
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Category Modal */}
            {isModalOpen && editingCategory && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Category</h2>
                        <form onSubmit={handleUpdateCategory} className="space-y-4">
                            <div>
                                <label htmlFor="edit-category-name" className="block text-sm font-medium text-admin-text-light mb-1">Category Name</label>
                                <input
                                    id="edit-category-name"
                                    name="name"
                                    type="text"
                                    value={editingCategory.name}
                                    onChange={handleModalInputChange}
                                    className="w-full p-2 border border-admin-border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="edit-category-subtitle" className="block text-sm font-medium text-admin-text-light mb-1">Subtitle</label>
                                <input
                                    id="edit-category-subtitle"
                                    name="subtitle"
                                    type="text"
                                    value={editingCategory.subtitle}
                                    onChange={handleModalInputChange}
                                    className="w-full p-2 border border-admin-border rounded-md"
                                />
                            </div>
                             <div>
                                <label htmlFor="edit-category-image" className="block text-sm font-medium text-admin-text-light mb-1">Image URL</label>
                                <input
                                    id="edit-category-image"
                                    name="image"
                                    type="text"
                                    value={editingCategory.image || ''}
                                    onChange={handleModalInputChange}
                                    className="w-full p-2 border border-admin-border rounded-md"
                                    placeholder="https://example.com/image.png"
                                />
                            </div>
                            <div>
                                <label htmlFor="edit-category-desc" className="block text-sm font-medium text-admin-text-light mb-1">Description</label>
                                <textarea
                                    id="edit-category-desc"
                                    name="description"
                                    rows={4}
                                    value={editingCategory.description || ''}
                                    onChange={handleModalInputChange}
                                    className="w-full p-2 border border-admin-border rounded-md"
                                />
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCategoriesPage;