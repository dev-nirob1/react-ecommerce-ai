import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    CreditCard
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 pt-20 pb-10">
            <div className="container mx-auto px-6">

                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="text-3xl font-black text-white tracking-tighter">
                            NEBULA<span className="text-yellow-400">.</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Redefining the digital shopping experience with curated premium collections and unparalleled customer service. Your journey into luxury starts here.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="bg-white/5 p-8 md:p-10 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-all duration-500" />
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Subscribe to our Galaxy</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Get 15% off your first order</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                    />
                                    <button className="bg-white text-black px-6 py-4 hover:bg-yellow-400 transition-all duration-300 active:scale-95">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-16">
                    {/* Shop */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Shop</h4>
                        <ul className="space-y-4 text-sm">
                            {['New Arrivals', 'Best Sellers', 'Men Collections', 'Women Collections', 'Flash Sale'].map((link) => (
                                <li key={link}>
                                    <Link to="/shop" className="hover:text-yellow-400 transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Information</h4>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((link) => (
                                <li key={link}>
                                    <Link to="/about" className="hover:text-yellow-400 transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Customer Service</h4>
                        <ul className="space-y-4 text-sm">
                            {['Shipping Policy', 'Returns & Refunds', 'Tracking Order', 'Gift Cards', 'FAQs'].map((link) => (
                                <li key={link}>
                                    <Link to="/support" className="hover:text-yellow-400 transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex gap-4">
                                <MapPin size={18} className="text-yellow-400 shrink-0" />
                                <span>123 Nebula Street, Digital Galaxy, NY 10001</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone size={18} className="text-yellow-400 shrink-0" />
                                <span>+1 (234) 567 890</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail size={18} className="text-yellow-400 shrink-0" />
                                <span>support@nebulastore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Payments */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-medium uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Nebula Store. Built by Antigravity Design.
                    </p>
                    <div className="flex items-center gap-6 opacity-30">
                        <CreditCard size={24} />
                        <span className="text-xl font-black italic">VISA</span>
                        <span className="text-xl font-black italic">DISCOVER</span>
                        <span className="text-xl font-black italic">AMEX</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
