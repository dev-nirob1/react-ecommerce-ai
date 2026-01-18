import { ShoppingBag, Package, MapPin, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className="space-y-10">
            {/* Welcome */}
            <div className="p-10 bg-black text-white relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Welcome back, <br /> Nirob Al Hasan.</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">You have 02 active orders in transit.</p>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] text-[10rem] font-black text-white/[0.03] select-none pointer-events-none">EXPLORER</div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Recent Orders', count: '12', path: '/account/orders', icon: <ShoppingBag size={24} /> },
                    { label: 'Saved Addresses', count: '03', path: '/account/addresses', icon: <MapPin size={24} /> },
                    { label: 'Profile Settings', count: 'Edit', path: '/account/profile', icon: <User size={24} /> },
                    { label: 'Active Wishlist', count: '00', path: '#', icon: <Package size={24} />, disabled: true },
                ].map((item, i) => (
                    <Link
                        key={i}
                        to={item.disabled ? '#' : item.path}
                        className={`bg-white border border-gray-100 p-8 flex flex-col justify-between h-48 transition-all group ${item.disabled ? 'opacity-30 cursor-not-allowed' : 'hover:border-black'}`}
                    >
                        <div className="text-gray-300 group-hover:text-black transition-colors">{item.icon}</div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                            <h4 className="text-2xl font-black text-black">{item.count}</h4>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Recent Order Preview */}
            <div className="bg-white border border-gray-100 p-8 space-y-8">
                <div className="flex justify-between items-center border-b border-gray-50 pb-6">
                    <h3 className="text-sm font-black uppercase tracking-widest text-black">Latest Order Status</h3>
                    <Link to="/account/orders" className="text-[10px] font-black underline uppercase tracking-widest">View History</Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-16 bg-gray-50 flex items-center justify-center font-black text-xs border border-gray-100 italic">#NB-9921</div>
                        <div>
                            <p className="text-xs font-black uppercase text-black tracking-tight">Neural Link v2 x 01</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Status: Out for Delivery • ETD: 2 Hours</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-gray-50 text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:border-black transition-all">Track LIVE</button>
                        <button className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95">Support</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
