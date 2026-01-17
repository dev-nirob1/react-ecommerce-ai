import { Link } from 'react-router-dom';

const categories = [
    { id: 1, name: "Men's Fashion", image: "👔", color: "bg-blue-100" },
    { id: 2, name: "Women's Fashion", image: "👗", color: "bg-pink-100" },
    { id: 3, name: "Electronics", image: "🎧", color: "bg-gray-100" },
    { id: 4, name: "Home & Lifestyle", image: "🏠", color: "bg-green-100" },
];

const Categories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat.id} to={`/shop?category=${cat.name.toLowerCase()}`} className="group block">
                            <div className={`${cat.color} rounded-xl h-40 flex items-center justify-center text-5xl mb-4 transition transform group-hover:-translate-y-2 group-hover:shadow-lg`}>
                                {cat.image}
                            </div>
                            <h3 className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                                {cat.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
