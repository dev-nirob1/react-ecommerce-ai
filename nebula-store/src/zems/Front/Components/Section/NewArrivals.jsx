import { Link } from 'react-router-dom';

const products = [
    { id: 101, name: "Smart Speaker", price: "$99", image: "🔊" },
    { id: 102, name: "Running Shoes", price: "$75", image: "👟" },
    { id: 103, name: "Gaming Mouse", price: "$60", image: "🖱️" },
    { id: 104, name: "Mechanical Keyboard", price: "$130", image: "⌨️" },
];

const NewArrivals = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
                    <p className="text-gray-500 mt-2">Check out the latest additions to our store.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="bg-gray-100 rounded-xl mb-4 h-64 flex items-center justify-center text-6xl relative overflow-hidden">
                                <span className="transform group-hover:scale-110 transition duration-500">{product.image}</span>
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
