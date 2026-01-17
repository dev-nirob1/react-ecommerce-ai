import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        name: "Men",
        image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1471&auto=format&fit=crop",
        path: "/shop/men"
    },
    {
        id: 2,
        name: "Women",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
        path: "/shop/women"
    },
    {
        id: 3,
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
        path: "/shop/accessories"
    },
    {
        id: 4,
        name: "Electronics",
        image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1364&auto=format&fit=crop",
        path: "/shop/electronics"
    },
];

const Categories = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
                    <div className="space-y-2">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                            Explore Collections
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
                            Shop by Category
                        </h2>
                    </div>
                    <Link to="/shop" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all uppercase tracking-wider">
                        View All Collections
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={cat.path}
                            className="group relative h-[450px] md:h-[550px] overflow-hidden block"
                        >
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                                {/* Category Name */}
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                                    {cat.name}
                                </h3>

                                {/* Hover Link Button - Animating from bottom */}
                                <div className="overflow-hidden">
                                    <div className="flex items-center justify-center gap-2 text-white font-bold uppercase text-sm tracking-widest translate-y-20 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        Shop Now <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
