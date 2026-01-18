import { Search, Filter, ArrowUpRight, CheckCircle2, Clock, XCircle, Package } from 'lucide-react';

const Orders = () => {
    const orders = [
        { id: "#NB-9921", customer: "Al Hasan Nirob", date: "Oct 24, 2023", total: "$1,250.00", payment: "bKash", status: "Processing" },
        { id: "#NB-9920", customer: "Sarah Jenkins", date: "Oct 23, 2023", total: "$450.00", payment: "COD", status: "Delivered" },
        { id: "#NB-9919", customer: "Mark Ruffalo", date: "Oct 23, 2023", total: "$2,100.00", payment: "Nagad", status: "Delivered" },
        { id: "#NB-9918", customer: "Chris Evans", date: "Oct 22, 2023", total: "$89.00", payment: "Rocket", status: "Cancelled" },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-50 text-green-600 border-green-100';
            case 'Processing': return 'bg-yellow-50 text-yellow-600 border-yellow-100';
            case 'Cancelled': return 'bg-red-50 text-red-600 border-red-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered': return <CheckCircle2 size={14} />;
            case 'Processing': return <Clock size={14} />;
            case 'Cancelled': return <XCircle size={14} />;
            default: return <Package size={14} />;
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Order Management</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Track and fulfill your cosmic transactions.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Unfulfilled', count: '12', color: 'bg-yellow-400' },
                    { label: 'Out for Delivery', count: '08', color: 'bg-blue-400' },
                    { label: 'Recent Refunds', count: '02', color: 'bg-red-400' },
                    { label: 'Total Completed', count: '1.4k', color: 'bg-black text-white' }
                ].map((stat, i) => (
                    <div key={i} className={`${stat.color || 'bg-white'} border border-gray-100 p-6 flex flex-col justify-between h-32`}>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color === 'bg-black text-white' ? 'text-gray-400' : 'text-gray-400'}`}>{stat.label}</span>
                        <h4 className="text-3xl font-black">{stat.count}</h4>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Order ID, Customer, or Phone..."
                        className="w-full bg-white border border-gray-100 px-16 py-5 text-xs font-bold focus:outline-none focus:border-black transition-all"
                    />
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-5 bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:border-black transition-all">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="px-8 py-5 bg-black text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all">
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Entries Table */}
            <div className="bg-white border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Customer</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Payment</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Draft</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-black text-black tracking-widest">{order.id}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold text-gray-900">{order.customer}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-[10px] font-bold uppercase text-gray-400">{order.date}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/60 px-2 py-1 bg-gray-100">{order.payment}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[10px] font-black uppercase tracking-widest ${getStatusStyle(order.status)}`}>
                                            {getStatusIcon(order.status)}
                                            {order.status}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm font-black text-black">{order.total}</span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-3 bg-gray-50 hover:bg-black hover:text-white transition-all">
                                            <ArrowUpRight size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
