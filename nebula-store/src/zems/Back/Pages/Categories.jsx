import { useState } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2, Folder, ChevronRight } from 'lucide-react';

const Categories = () => {
    const categories = [
        { id: 1, name: "Wearables", slug: "wearables", items: 24, status: "Active" },
        { id: 2, name: "Optics", slug: "optics", items: 12, status: "Active" },
        { id: 3, name: "Audio", slug: "audio", items: 45, status: "Active" },
        { id: 4, name: "Hardware", slug: "hardware", items: 0, status: "Inactive" },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Taxonomy</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Organize your cosmic catalog by groups.</p>
                </div>
                <button className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                    <Plus size={16} /> New Category
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Add/Edit Form Sidebar */}
                <div className="bg-white border border-gray-100 p-8 space-y-8 h-fit lg:sticky lg:top-32">
                    <div className="space-y-2 pb-6 border-b border-gray-50">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black">Quick Action</h3>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Create a new root or sub-category.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
                            <input type="text" placeholder="e.g., Cyberwear" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Parent Category</label>
                            <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                <option>None (Root)</option>
                                <option>Wearables</option>
                                <option>Optics</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Thumb Icon (Optional)</label>
                            <div className="h-20 w-full border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300">
                                <Plus size={20} />
                            </div>
                        </div>
                        <button className="w-full bg-black text-white py-5 text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                            Create Category
                        </button>
                    </div>
                </div>

                {/* Right: List & Management */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Find category..."
                            className="w-full bg-white border border-gray-100 px-16 py-5 text-xs font-bold focus:outline-none focus:border-black transition-all"
                        />
                    </div>

                    {/* Table */}
                    <div className="bg-white border border-gray-100 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category Name</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Slug</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Count</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {categories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-6 flex items-center gap-4">
                                            <div className="h-10 w-10 bg-black text-white flex items-center justify-center font-black">
                                                <Folder size={16} />
                                            </div>
                                            <span className="text-sm font-black text-black uppercase tracking-tight">{cat.name}</span>
                                        </td>
                                        <td className="px-8 py-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase italic">/{cat.slug}</td>
                                        <td className="px-8 py-6">
                                            <span className="text-xs font-black text-black tabular-nums">{cat.items} Products</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`h-2 w-2 ${cat.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-black">{cat.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-black hover:text-white transition-all"><Edit size={16} /></button>
                                                <button className="p-2 hover:bg-red-500 hover:text-white transition-all text-red-500"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Hierarchy Note */}
                    <div className="p-8 bg-black text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose flex justify-between items-center group overflow-hidden">
                        <span>Drag and drop to reorder hierarchy (Upcoming feature)</span>
                        <ChevronRight size={16} className="group-hover:translate-x-4 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
