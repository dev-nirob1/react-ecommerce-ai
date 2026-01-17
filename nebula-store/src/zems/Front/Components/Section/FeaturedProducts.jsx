import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Minimalist Watch", price: "$120", image: "⌚" },
    { id: 2, name: "Leather Bag", price: "$85", image: "👜" },
    { id: 3, name: "Wireless Headphones", price: "$150", image: "🎧" },
    { id: 4, name: "Sunglasses", price: "$45", image: "🕶️" },
];

const FeaturedProducts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
                    <Link to="/shop" className="text-blue-600 font-semibold hover:underline">View All</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="h-64 bg-gray-200 flex items-center justify-center text-6xl">
                                {product.image}
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
                                <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
