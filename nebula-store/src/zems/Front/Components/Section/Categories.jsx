import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../../../components/Widget/SectionHeader';

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
                <SectionHeader
                    title="Shop by Category"
                    subtitle="Explore Collections"
                    linkText="View All Collections"
                    linkPath="/shop"
                />

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
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
                                    <Link
                                        to={cat.path}
                                        className="flex items-center justify-center gap-2 text-white font-bold uppercase text-sm tracking-widest translate-y-20 group-hover:translate-y-0 transition-transform duration-500 delay-100 cursor-pointer"
                                    >
                                        Shop Now <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
