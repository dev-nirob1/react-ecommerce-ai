import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        { id: 1, name: "Neural Link v2", category: "Wearables", price: "$299.00", stock: 45, status: "Active", image: "https://images.unsplash.com/photo-1544117518-2b49c0c88349?w=100&h=100&fit=crop" },
        { id: 2, name: "Nebula Glass Air", category: "Optics", price: "$850.00", stock: 12, status: "Active", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop" },
        { id: 3, name: "Core Processor X1", category: "Hardware", price: "$1,200.00", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=100&h=100&fit=crop" },
        { id: 4, name: "Void Headphones", category: "Audio", price: "$450.00", stock: 89, status: "Active", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Products</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Manage your cosmic inventory and details.</p>
                </div>
                <Link to="/admin/products/create" className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                    <Plus size={16} /> Add New Product
                </Link>
            </div>

            {/* Filters / Search */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search products by name or SKU..."
                        className="w-full bg-white border border-gray-100 px-16 py-5 text-xs font-bold focus:outline-none focus:border-black transition-all"
                    />
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-5 bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:border-black transition-all">
                        <Filter size={16} /> Filter
                    </button>
                    <select className="px-8 py-5 bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                        <option>Current View: Active</option>
                        <option>Archived</option>
                        <option>All Products</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Product</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Price</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Stock</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 flex-shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-sm font-black text-black uppercase tracking-tight">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1">{product.category}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-sm font-black text-black">{product.price}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`text-xs font-bold ${product.stock === 0 ? 'text-red-500' : 'text-gray-900'}`}>{product.stock} Units</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 ${product.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-black">{product.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-black hover:text-white transition-all"><Eye size={16} /></button>
                                            <button className="p-2 hover:bg-black hover:text-white transition-all"><Edit size={16} /></button>
                                            <button className="p-2 hover:bg-red-500 hover:text-white transition-all text-red-500"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-between items-center px-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Showing 1 to 4 of 48 products</p>
                <div className="flex gap-2">
                    <button className="px-6 py-3 border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:border-black disabled:opacity-30" disabled>Prev</button>
                    <button className="px-6 py-3 border border-black bg-black text-white text-[10px] font-black uppercase tracking-widest">1</button>
                    <button className="px-6 py-3 border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:border-black">2</button>
                    <button className="px-6 py-3 border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:border-black">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
