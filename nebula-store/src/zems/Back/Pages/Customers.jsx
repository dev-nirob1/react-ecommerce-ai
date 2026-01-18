import { Search, Mail, Phone, Calendar, ArrowRight, UserCheck, Star } from 'lucide-react';

const Customers = () => {
    const customers = [
        { id: 1, name: "Nirob Al Hasan", email: "nirob@example.com", phone: "+880 1712 345678", orders: 12, spent: "$12,450.00", registered: "Jan 12, 2023", level: "VIP" },
        { id: 2, name: "Sarah Connor", email: "sarah@resistance.net", phone: "+1 555-9087", orders: 3, spent: "$850.00", registered: "Aug 24, 2023", level: "Regular" },
        { id: 3, name: "Tony Stark", email: "tony@stark.id", phone: "+1 999-0001", orders: 45, spent: "$450,000.00", registered: "Feb 01, 2023", level: "Platinum" },
        { id: 4, name: "Wanda Maximoff", email: "wanda@hex.io", phone: "+1 444-2221", orders: 1, spent: "$120.00", registered: "Sep 15, 2023", level: "New" },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Customer base</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total 2,450 explorers registered.</p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Retention Rate</p>
                        <h4 className="text-xl font-black text-green-600">84%</h4>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Search by name, email, or phone number..."
                    className="w-full bg-white border border-gray-100 px-16 py-6 text-xs font-bold focus:outline-none focus:border-black transition-all"
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {customers.map((c) => (
                    <div key={c.id} className="bg-white border border-gray-100 p-8 flex flex-col sm:flex-row items-center gap-8 hover:border-black transition-colors group relative">
                        {/* Avatar */}
                        <div className="h-24 w-24 bg-black text-white flex items-center justify-center font-black text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                            {c.name.charAt(0)}
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-4 text-center sm:text-left">
                            <div>
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <h3 className="text-lg font-black uppercase tracking-tight text-black">{c.name}</h3>
                                    {c.level === 'VIP' || c.level === 'Platinum' ? <Star size={14} className="text-yellow-500 fill-yellow-500" /> : null}
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 opacity-60">
                                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Mail size={12} /> {c.email}</span>
                                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Phone size={12} /> {c.phone}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-50">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Orders</p>
                                    <p className="text-sm font-black text-black">{c.orders}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Lifetime</p>
                                    <p className="text-sm font-black text-black">{c.spent}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Status</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-black/60 px-2 py-0.5 bg-gray-100 w-fit">{c.level}</p>
                                </div>
                            </div>
                        </div>

                        {/* Action */}
                        <button className="absolute bottom-8 right-8 p-3 bg-gray-50 group-hover:bg-black group-hover:text-white transition-all">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Empty Spot for Load More */}
            <button className="w-full py-6 border-2 border-dashed border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-black hover:text-black transition-all">
                Load More Explorers (2,446 remaining)
            </button>
        </div>
    );
};

export default Customers;
