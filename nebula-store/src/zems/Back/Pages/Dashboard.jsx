import { Link } from 'react-router-dom';
import {
    Package,
    Layers,
    ClipboardList,
    ShoppingBag,
    Users,
    Star,
    MessageSquare,
    Megaphone,
    BarChart3,
    Settings as SettingsIcon
} from 'lucide-react';

const Dashboard = () => {
    const quickLinks = [
        { label: 'Products', path: '/admin/products', icon: <Package size={24} />, count: '48 items' },
        { label: 'Categories', path: '/admin/categories', icon: <Layers size={24} />, count: '12 groups' },
        { label: 'Inventory', path: '/admin/inventory', icon: <ClipboardList size={24} />, count: '2 low stock' },
        { label: 'Orders', path: '/admin/orders', icon: <ShoppingBag size={24} />, count: '12 new' },
        { label: 'Customers', path: '/admin/customers', icon: <Users size={24} />, count: '2.4k total' },
        { label: 'Reviews', path: '/admin/reviews', icon: <Star size={24} />, count: '5 pending' },
        { label: 'Support', path: '/admin/support', icon: <MessageSquare size={24} />, count: '3 open' },
        { label: 'Campaigns', path: '/admin/campaigns', icon: <Megaphone size={24} />, count: '2 active' },
        { label: 'Reports', path: '/admin/reports', icon: <BarChart3 size={24} />, count: 'Monthly view' },
        { label: 'Settings', path: '/admin/settings', icon: <SettingsIcon size={24} />, count: 'Global config' },
    ];

    const stats = [
        { label: 'Total Revenue', value: '$24,560', change: '+12%', color: 'text-green-600' },
        { label: 'Active Orders', value: '48', change: '+5', color: 'text-yellow-600' },
        { label: 'Total Customers', value: '1,240', change: '+18%', color: 'text-blue-600' },
        { label: 'Conversion Rate', value: '3.4%', change: '-0.2%', color: 'text-red-600' },
    ];

    return (
        <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white border border-gray-100 p-8 hover:border-black transition-colors group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-black">{stat.value}</h3>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color}`}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Access Grid */}
            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-black">Management Hub</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {quickLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="bg-white border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:border-black hover:bg-black hover:text-white transition-all group"
                        >
                            <div className="text-gray-300 group-hover:text-yellow-400 transition-colors mb-3">
                                {link.icon}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest mb-1">{link.label}</p>
                            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-500">{link.count}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Placeholder Rows */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-100 p-8 space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <h3 className="text-sm font-black uppercase tracking-widest text-black">Recent Activity</h3>
                        <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                <div className="h-2 w-2 bg-yellow-400" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-900">New Order #NB-992{i} Received</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border border-gray-100 p-8 space-y-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 bg-gray-50 flex items-center justify-center mb-4">
                        <div className="h-6 w-6 border-2 border-black border-dashed rounded-full animate-spin" style={{ borderRadius: '0' }} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-black">Graphic Insights</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 max-w-[200px]">Advanced charting modules will be integrated here.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
