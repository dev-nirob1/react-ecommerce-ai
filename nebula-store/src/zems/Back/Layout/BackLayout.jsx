import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Settings,
    Megaphone,
    Package,
    Menu,
    X,
    LogOut,
    UserCircle,
    Bell,
    MessageSquare,
    Star,
    ClipboardList,
    BarChart3,
    Layers
} from 'lucide-react';

const BackLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    // Determine navigation based on path
    const isAdmin = location.pathname.startsWith('/admin');

    const adminNav = [
        { label: 'Overview', path: '/admin', icon: <LayoutDashboard size={20} /> },
        { label: 'Products', path: '/admin/products', icon: <Package size={20} /> },
        { label: 'Categories', path: '/admin/categories', icon: <Layers size={20} /> },
        { label: 'Inventory', path: '/admin/inventory', icon: <ClipboardList size={20} /> },
        { label: 'Orders', path: '/admin/orders', icon: <ShoppingBag size={20} /> },
        { label: 'Customers', path: '/admin/customers', icon: <Users size={20} /> },
        { label: 'Reviews', path: '/admin/reviews', icon: <Star size={20} /> },
        { label: 'Support', path: '/admin/support', icon: <MessageSquare size={20} /> },
        { label: 'Campaigns', path: '/admin/campaigns', icon: <Megaphone size={20} /> },
        { label: 'Reports', path: '/admin/reports', icon: <BarChart3 size={20} /> },
        { label: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
    ];

    const userNav = [
        { label: 'My Dashboard', path: '/account/dashboard', icon: <LayoutDashboard size={20} /> },
        { label: 'My Orders', path: '/account/orders', icon: <ShoppingBag size={20} /> },
        { label: 'My Profile', path: '/account/profile', icon: <UserCircle size={20} /> },
        { label: 'Addresses', path: '/account/addresses', icon: <Settings size={20} /> },
    ];

    const navigation = isAdmin ? adminNav : userNav;

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">

            {/* Sidebar Overlay (Mobile Only) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-black text-white transform transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="h-full flex flex-col pt-10">
                    {/* Brand */}
                    <Link to="/" className="px-8 mb-16 block group">
                        <span className="text-xl font-black uppercase tracking-[0.4em] text-white">Nebula</span>
                        <span className="block text-[8px] font-black uppercase tracking-[0.6em] text-gray-500 mt-1">Store / {isAdmin ? 'Admin' : 'Account'}</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 px-4">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-4 px-6 py-4 transition-all duration-300 relative overflow-hidden group
                                        ${isActive ? 'bg-white text-black font-black' : 'text-gray-400 hover:text-white'}
                                    `}
                                >
                                    <span className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:translate-x-1'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-[10px] uppercase font-black tracking-[0.2em]">{item.label}</span>
                                    {isActive && <div className="absolute right-0 top-0 h-full w-1 bg-yellow-400" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer / Logout */}
                    <div className="p-4 mt-auto">
                        <button className="w-full flex items-center justify-between px-6 py-5 bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white transition-colors">
                            <span className="text-[10px] font-black uppercase tracking-widest">Sign Out</span>
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Header */}
                <header className="bg-white border-b border-gray-100 flex items-center justify-between h-20 px-6 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 text-black hover:bg-gray-50 transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-none">Accessing /</span>
                            <h2 className="text-xs font-black uppercase tracking-tighter text-black">
                                {isAdmin ? 'Management Console' : 'Customer Workspace'}
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-400 hover:text-black transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 border border-white" />
                        </button>
                        <div className="h-10 w-[1px] bg-gray-100" />
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-[10px] font-black uppercase text-black leading-none">Nirob Al Hasan</p>
                                <p className="text-[9px] font-bold uppercase text-gray-400 mt-1">{isAdmin ? 'Super Admin' : 'Customer'}</p>
                            </div>
                            <div className="h-10 w-10 bg-black text-white flex items-center justify-center font-black text-xs">
                                N
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 lg:p-10">
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BackLayout;
