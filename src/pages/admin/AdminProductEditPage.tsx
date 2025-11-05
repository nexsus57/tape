import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { INDUSTRIES } from '../../constants';
import type { Product } from '../../types';

type EditableProduct = Omit<Product, 'id'> & { id?: string };

const AdminProductEditPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const { products, addProduct, updateProduct } = useProducts();
    const { categories } = useCategories();
    const isEditing = Boolean(productId);

    const [product, setProduct] = useState<EditableProduct>({
        name: '',
        shortDescription: '',
        description: '',
        category: categories[0]?.id || '',
        features: [''],
        uses: [''],
        industries: [],
        images: [''],
        brand: '',
        color: '',
        minOrderQty: '',
    });

    useEffect(() => {
        if (isEditing) {
            const existingProduct = products.find(p => p.id === productId);
            if (existingProduct) {
                setProduct({
                    ...existingProduct,
                    features: existingProduct.features?.length ? existingProduct.features : [''],
                    uses: existingProduct.uses?.length ? existingProduct.uses : [''],
                    industries: existingProduct.industries || [],
                    images: existingProduct.images?.length ? existingProduct.images : [''],
                });
            } else {
                navigate('/admin/products');
            }
        }
    }, [productId, products, isEditing, navigate]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: 'features' | 'uses' | 'images') => {
        const newArray = [...(product[field] || [])];
        newArray[index] = e.target.value;
        setProduct(prev => ({...prev, [field]: newArray }));
    };

    const addArrayItem = (field: 'features' | 'uses' | 'images') => {
        setProduct(prev => ({ ...prev, [field]: [...(prev[field] || []), ''] }));
    };

    const removeArrayItem = (index: number, field: 'features' | 'uses' | 'images') => {
        if (product[field] && product[field]!.length <= 1) {
            setProduct(prev => ({...prev, [field]: ['']}))
            return;
        }
        const newArray = product[field]?.filter((_, i) => i !== index);
        setProduct(prev => ({ ...prev, [field]: newArray }));
    };

    const handleIndustryCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setProduct(prev => {
            const currentIndustries = prev.industries || [];
            if (checked) {
                return { ...prev, industries: [...currentIndustries, value] };
            } else {
                return { ...prev, industries: currentIndustries.filter(id => id !== value) };
            }
        });
    };
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const cleanedProductData = {
          ...product,
          features: (product.features || []).filter(f => f && f.trim() !== ''),
          uses: (product.uses || []).filter(u => u && u.trim() !== ''),
          images: (product.images || []).filter(i => i && i.trim() !== ''),
          industries: product.industries || [],
        };

        if (isEditing && cleanedProductData.id) {
            updateProduct(cleanedProductData.id, cleanedProductData as Product);
        } else {
            const { id, ...productToAdd } = cleanedProductData;
            addProduct(productToAdd);
        }
        
        alert(`Product ${isEditing ? 'updated' : 'created'} successfully!`);
        navigate('/admin/products');
    };

    const pageTitle = isEditing ? 'Edit Product' : 'Add New Product';

    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">{pageTitle}</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 bg-admin-card p-6 rounded-lg shadow-md space-y-6">
                        <section>
                            <label htmlFor="name" className="block text-sm font-medium text-admin-text-light mb-1">Product Name</label>
                            <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent" required/>
                        </section>
                        <section>
                            <label htmlFor="shortDescription" className="block text-sm font-medium text-admin-text-light mb-1">Short Description</label>
                            <textarea id="shortDescription" name="shortDescription" value={product.shortDescription} onChange={handleInputChange} rows={3} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent" required></textarea>
                        </section>
                         <section>
                            <label htmlFor="description" className="block text-sm font-medium text-admin-text-light mb-1">Full Description</label>
                            <textarea id="description" name="description" value={product.description || ''} onChange={handleInputChange} rows={6} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"></textarea>
                        </section>
                        
                        {['features', 'uses', 'images'].map(field => (
                            <section key={field}>
                                <label className="block text-sm font-medium text-admin-text-light mb-2 capitalize">{field}</label>
                                {(product[field as keyof EditableProduct] as string[] || []).map((item, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input type="text" value={item} onChange={(e) => handleArrayChange(e, index, field as 'features' | 'uses' | 'images')} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"/>
                                        <button type="button" onClick={() => removeArrayItem(index, field as 'features' | 'uses' | 'images')} className="ml-2 text-red-500 hover:text-red-700 font-bold text-xl px-2">&times;</button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => addArrayItem(field as 'features' | 'uses' | 'images')} className="text-sm text-admin-accent hover:underline">+ Add {field.slice(0, -1)}</button>
                            </section>
                        ))}
                    </div>

                    {/* Sidebar/Metadata */}
                    <div className="space-y-6">
                         <div className="bg-admin-card p-6 rounded-lg shadow-md space-y-4">
                            <h3 className="text-lg font-semibold text-admin-text mb-4">Organize</h3>
                            <section>
                                <label htmlFor="category" className="block text-sm font-medium text-admin-text-light mb-1">Category</label>
                                <select id="category" name="category" value={product.category} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent">
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </section>
                            <section>
                                <label className="block text-sm font-medium text-admin-text-light mb-1">Industries</label>
                                <div className="max-h-36 overflow-y-auto border border-admin-border rounded-md p-2 space-y-1">
                                    {INDUSTRIES.map(ind => (
                                        <label key={ind.id} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={ind.id}
                                                checked={(product.industries || []).includes(ind.id)}
                                                onChange={handleIndustryCheckboxChange}
                                                className="h-4 w-4 rounded border-gray-300 text-admin-accent focus:ring-admin-accent"
                                            />
                                            <span className="ml-2 text-sm text-admin-text">{ind.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </section>
                         </div>
                         <div className="bg-admin-card p-6 rounded-lg shadow-md space-y-4">
                            <h3 className="text-lg font-semibold text-admin-text mb-4">Detailed Info</h3>
                            <section>
                                <label htmlFor="brand" className="block text-sm font-medium text-admin-text-light mb-1">Brand</label>
                                <input type="text" id="brand" name="brand" value={product.brand || ''} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md" />
                            </section>
                             <section>
                                <label htmlFor="color" className="block text-sm font-medium text-admin-text-light mb-1">Color(s)</label>
                                <input type="text" id="color" name="color" value={product.color || ''} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md" />
                            </section>
                             <section>
                                <label htmlFor="minOrderQty" className="block text-sm font-medium text-admin-text-light mb-1">Min. Order Qty</label>
                                <input type="text" id="minOrderQty" name="minOrderQty" value={product.minOrderQty || ''} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md" />
                            </section>
                         </div>
                    </div>
                </div>

                 <div className="flex justify-end space-x-4 mt-6">
                    <Link to="/admin/products" className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">Cancel</Link>
                    <button type="submit" className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors">
                        {isEditing ? 'Save Changes' : 'Publish Product'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminProductEditPage;
