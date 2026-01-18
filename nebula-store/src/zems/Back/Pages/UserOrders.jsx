import { ArrowUpRight, CheckCircle2, Clock, XCircle, Search } from 'lucide-react';

const UserOrders = () => {
    const orders = [
        { id: "#NB-9921", date: "Oct 24, 2023", total: "$299.00", items: "1 Item", status: "Processing" },
        { id: "#NB-9812", date: "Sep 12, 2023", total: "$1,250.00", items: "2 Items", status: "Delivered" },
        { id: "#NB-9755", date: "Aug 05, 2023", total: "$85.00", items: "1 Item", status: "Delivered" },
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Delivered': return 'text-green-600 bg-green-50 px-3 py-1 border border-green-100';
            case 'Processing': return 'text-yellow-600 bg-yellow-50 px-3 py-1 border border-yellow-100';
            case 'Cancelled': return 'text-red-600 bg-red-50 px-3 py-1 border border-red-100';
            default: return 'text-gray-400 bg-gray-50 px-3 py-1 border border-gray-100';
        }
    };

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Purchase History</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total 03 galaxies discovered via orders.</p>
            </div>

            {/* List */}
            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/30">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Items</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Total</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-8 py-6 text-xs font-black text-black tracking-widest">{order.id}</td>
                                    <td className="px-8 py-6 text-[10px] font-bold uppercase text-gray-400">{order.date}</td>
                                    <td className="px-8 py-6 text-xs font-bold text-gray-700">{order.items}</td>
                                    <td className="px-8 py-6">
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${getStatusStyles(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-black">{order.total}</td>
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

            {/* Empty State Mockup */}
            <div className="p-10 border-2 border-dashed border-gray-100 text-center space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Searching for older records?</p>
                <button className="text-xs font-black underline uppercase tracking-widest text-black hover:no-underline">Request Full Data Archive</button>
            </div>
        </div>
    );
};

export default UserOrders;
