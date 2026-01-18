import { Megaphone, Plus, Search, Trash2, Calendar, Target, MousePointer2 } from 'lucide-react';

const Campaigns = () => {
    const campaigns = [
        { id: 1, name: "Winter Solstice Sale", type: "Seasonal", discount: "60%", reach: "12,400", conversion: "3.2%", status: "Active" },
        { id: 2, name: "Midnight Flash Drop", type: "Flash Sale", discount: "30%", reach: "45,000", conversion: "1.8%", status: "Scheduled" },
        { id: 3, name: "New Year Bash", type: "Standard", discount: "BOGO", reach: "0", conversion: "0%", status: "Draft" },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Campaigns & Marketing</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Launch and track your cosmic promotions.</p>
                </div>
                <button className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                    <Plus size={16} /> Create Campaign
                </button>
            </div>

            {/* Quick Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-100 p-8 space-y-4">
                    <Target className="text-gray-300" size={32} />
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Campaign Reach</p>
                    <h3 className="text-4xl font-black text-black">840K</h3>
                </div>
                <div className="bg-white border border-gray-100 p-8 space-y-4">
                    <MousePointer2 className="text-gray-300" size={32} />
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Avg. Click-Through</p>
                    <h3 className="text-4xl font-black text-black">4.8%</h3>
                </div>
                <div className="bg-black text-white p-8 space-y-4 relative overflow-hidden">
                    <Megaphone className="text-white/10 absolute -right-4 -bottom-4" size={100} />
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Active Campaigns</p>
                    <h3 className="text-4xl font-black text-white">02</h3>
                </div>
            </div>

            {/* List */}
            <div className="bg-white border border-gray-100 divide-y divide-gray-50">
                {campaigns.map((camp) => (
                    <div key={camp.id} className="p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group hover:bg-gray-50/50 transition-colors">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <h4 className="text-lg font-black uppercase tracking-tight text-black">{camp.name}</h4>
                                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-yellow-400 text-black">{camp.type}</span>
                            </div>
                            <div className="flex items-center gap-6 opacity-60">
                                <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Calendar size={12} /> Ends in 12 Days</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Target size={12} /> {camp.reach} Reached</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-12">
                            <div className="text-center">
                                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Impact</p>
                                <p className="text-sm font-black text-black">{camp.discount} OFF</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Status</p>
                                <p className={`text-[9px] font-black uppercase tracking-widest ${camp.status === 'Active' ? 'text-green-600' : 'text-gray-400'}`}>{camp.status}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-4 border border-gray-100 hover:border-black transition-all">Edit</button>
                                <button className="p-4 border border-gray-100 hover:border-red-500 hover:text-red-500 transition-all text-gray-300">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Campaigns;
