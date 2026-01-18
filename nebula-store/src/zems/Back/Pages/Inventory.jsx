import { Minus, Plus, Save, AlertCircle, RefreshCcw, Search } from 'lucide-react';

const Inventory = () => {
    const stockItems = [
        { id: "NB-881", name: "Nebula Glass Air", category: "Optics", sku: "OPT-G-01", current: 12, lowLevel: 10, price: "$850.00" },
        { id: "NB-882", name: "Core Processor X1", category: "Hardware", sku: "HW-P-02", current: 2, lowLevel: 5, price: "$1,200.00" },
        { id: "NB-883", name: "Neural Link v2", category: "Wearables", sku: "W-NL-03", current: 45, lowLevel: 15, price: "$299.00" },
        { id: "NB-884", name: "Audio Void Pro", category: "Audio", sku: "A-VP-04", current: 0, lowLevel: 20, price: "$450.00" },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-yellow-400 p-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Inventory Control</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/60">Fast-track stock management and low-stock alerts.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                        <RefreshCcw size={16} /> Batch Update
                    </button>
                </div>
            </div>

            {/* Warnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { label: 'Out of Stock', count: '02', color: 'bg-red-50 border-red-100 text-red-600' },
                    { label: 'Low Stock Alert', count: '14', color: 'bg-orange-50 border-orange-100 text-orange-600' },
                    { label: 'Stock Value', count: '$1.2M', color: 'bg-black text-white' }
                ].map((stat, i) => (
                    <div key={i} className={`p-8 border ${stat.color} flex items-center justify-between`}>
                        <div className="space-y-1">
                            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{stat.label}</span>
                            <h4 className="text-2xl font-black">{stat.count}</h4>
                        </div>
                        {i < 2 && <AlertCircle size={24} className="opacity-30" />}
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Quick find by SKU, ID or Product Name..."
                    className="w-full bg-white border border-gray-100 px-16 py-5 text-xs font-bold focus:outline-none focus:border-black transition-all"
                />
            </div>

            {/* Matrix */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">SKU / Item</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Price</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Current Stock</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Low Limit</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {stockItems.map((item) => {
                            const isLow = item.current <= item.lowLevel;
                            return (
                                <tr key={item.id} className={`hover:bg-gray-50 transition-colors ${isLow ? 'bg-red-50/20' : ''}`}>
                                    <td className="px-8 py-6">
                                        <p className="text-[9px] font-black text-gray-400 tracking-widest mb-1">{item.sku}</p>
                                        <p className="text-sm font-black text-black uppercase tracking-tight">{item.name}</p>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black">{item.price}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-center gap-6">
                                            <button className="p-2 border border-black hover:bg-black hover:text-white transition-all"><Minus size={14} /></button>
                                            <span className={`text-lg font-black w-12 text-center ${isLow ? 'text-red-600' : 'text-black'}`}>{item.current}</span>
                                            <button className="p-2 border border-black hover:bg-black hover:text-white transition-all"><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <input type="number" defaultValue={item.lowLevel} className="w-20 bg-transparent border border-gray-100 px-3 py-2 text-xs font-black focus:outline-none focus:border-black" />
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-4 bg-black text-white hover:bg-gray-800 transition-all shadow-lg">
                                            <Save size={18} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Help Note */}
            <div className="p-6 bg-gray-50 border-l-4 border-black border-dashed" style={{ borderLeftStyle: 'solid' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                    Note: Adjusting stock manually here will bypass the automatic logging for 5 minutes. Persistent stock issues should be reported to the IT department.
                </p>
            </div>
        </div>
    );
};

export default Inventory;
