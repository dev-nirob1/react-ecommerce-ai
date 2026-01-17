import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">NebulaStore</h3>
                    <p className="text-sm">
                        Your one-stop shop for premium products. Quality guaranteed.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Categories</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/shop?category=men" className="hover:text-white">Men's Fashion</Link></li>
                        <li><Link to="/shop?category=women" className="hover:text-white">Women's Fashion</Link></li>
                        <li><Link to="/shop?category=electronics" className="hover:text-white">Electronics</Link></li>
                        <li><Link to="/shop?category=accessories" className="hover:text-white">Accessories</Link></li>
                    </ul>
                </div>

                {/* Social / Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
                    <div className="flex space-x-4 mb-4">
                        {/* Social Icons Placeholders */}
                        <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">F</span>
                        <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 cursor-pointer">T</span>
                        <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer">I</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
                &copy; {new Date().getFullYear()} NebulaStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
