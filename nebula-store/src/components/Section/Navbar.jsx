import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, X, Menu, LogOut } from 'lucide-react';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                            <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">
                            NEBULA
                        </span>
                    </Link>
                </div>

                {/* Center: Nav Links - Always Visible on Desktop */}
                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right: Icons */}
                <div className="flex items-center gap-1 md:gap-2">
                    {/* Search Toggle */}
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`p-2 rounded-full transition-all cursor-pointer ${isSearchOpen ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                        title="Search"
                    >
                        {isSearchOpen ? <X size={22} className="cursor-pointer" /> : <Search size={22} className="cursor-pointer" />}
                    </button>

                    {/* User Profile - Visible only on large screens */}
                    <Link to="/login" className="hidden lg:flex p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all cursor-pointer" title="Profile">
                        <User size={22} />
                    </Link>

                    {/* Cart Icon - Visible everywhere */}
                    <Link to="/cart" className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all relative cursor-pointer" title="Cart">
                        <ShoppingBag size={22} className="cursor-pointer" />
                        <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full pointer-events-none">
                            0
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 cursor-pointer hover:bg-gray-50 rounded-full transition-all"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                <div className={`fixed inset-0 top-20 bg-white z-40 lg:hidden transition-all duration-300 border-t border-gray-100 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-gray-100" />
                        <div className="flex flex-col gap-6">
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 text-xl font-medium text-gray-600"
                            >
                                <User size={22} /> Account
                            </Link>
                            <button
                                onClick={() => {
                                    console.log('Logging out...');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 text-xl font-medium text-red-500 cursor-pointer text-left"
                            >
                                <LogOut size={22} /> Log Out
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar Row (Appears below main navbar) */}
                <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300 overflow-hidden ${isSearchOpen ? 'h-20 opacity-100 visible' : 'h-0 opacity-0 invisible pointer-events-none'}`}>
                    <div className="container mx-auto h-full flex items-center justify-center px-4 md:px-6">
                        <div className="w-full md:w-[75%] relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full bg-gray-50 border-none rounded-full py-3 px-12 text-base outline-none focus:ring-2 focus:ring-black/5"
                                autoFocus={isSearchOpen}
                            />
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer"
                                title="Clear"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
