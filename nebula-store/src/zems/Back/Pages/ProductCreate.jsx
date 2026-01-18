import { useState } from 'react';
import { Save, X, Plus, Image as ImageIcon, Trash2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCreate = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => navigate('/admin/products')}
                        className="p-3 bg-white border border-gray-100 hover:border-black transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Add New Product</h2>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Expand your galactic collection.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => navigate('/admin/products')} className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-all">Discard</button>
                    <button className="bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl">
                        <Save size={16} /> Save Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: General Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Details */}
                    <div className="bg-white border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">General Information</h3>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product Name</label>
                                <input type="text" placeholder="e.g., Neural Link v3" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Description</label>
                                <textarea rows="8" placeholder="Detailed product specifications..." className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all resize-none"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Media Upload */}
                    <div className="bg-white border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Product Images</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-300 hover:border-black hover:text-black transition-all group">
                                <Plus size={24} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[8px] font-black uppercase tracking-widest mt-2">Upload</span>
                            </button>
                            {/* Placeholder for uploaded images */}
                            <div className="aspect-square bg-gray-100 relative group overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1544117518-2b49c0c88349?w=300&h=300&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Preview" />
                                <button className="absolute top-2 right-2 p-2 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12} /></button>
                            </div>
                        </div>
                    </div>

                    {/* Inventory & Pricing */}
                    <div className="bg-white border border-gray-100 p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Pricing</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Base Price (USD)</label>
                                        <input type="text" placeholder="0.00" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sale Price (Optional)</label>
                                        <input type="text" placeholder="0.00" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Inventory</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">SKU Code</label>
                                        <input type="text" placeholder="NB-9921-X" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Quantity</label>
                                        <input type="number" defaultValue="0" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Organization & Status */}
                <div className="space-y-8">
                    {/* Status */}
                    <div className="bg-white border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <input type="radio" name="status" defaultChecked className="h-4 w-4 accent-black" />
                                <div>
                                    <p className="text-xs font-black uppercase text-black">Publish</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase">Visible to all explorers.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="radio" name="status" className="h-4 w-4 accent-black" />
                                <div>
                                    <p className="text-xs font-black uppercase text-black">Draft</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase">Hidden from store.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Organization */}
                    <div className="bg-white border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Organization</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Category</label>
                                <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                    <option>Wearables</option>
                                    <option>Optics</option>
                                    <option>Audio</option>
                                    <option>Hardware</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tags</label>
                                <input type="text" placeholder="e.g., tech, new-arrival, neon" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Attributes */}
                    <div className="bg-white border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Attributes</h3>
                        <button className="w-full py-4 border-2 border-dashed border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:border-black hover:text-black transition-all">
                            + Add Custom Attribute
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;
