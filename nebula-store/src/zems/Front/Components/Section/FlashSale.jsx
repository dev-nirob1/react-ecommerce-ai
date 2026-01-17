import { Link } from 'react-router-dom';

const FlashSale = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">FLASH SALE!</h2>
                    <p className="text-xl opacity-90 mb-6">Get up to <span className="font-bold text-yellow-300">50% OFF</span> on selected items. Limited time offer.</p>

                    <div className="flex justify-center md:justify-start space-x-4">
                        {/* Countdown timer placeholder */}
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3">
                            <span className="block text-2xl font-bold">05</span>
                            <span className="text-xs uppercase">Hours</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3">
                            <span className="block text-2xl font-bold">42</span>
                            <span className="text-xs uppercase">Minutes</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3">
                            <span className="block text-2xl font-bold">18</span>
                            <span className="text-xs uppercase">Seconds</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/shop" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                        Shop the Sale
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
