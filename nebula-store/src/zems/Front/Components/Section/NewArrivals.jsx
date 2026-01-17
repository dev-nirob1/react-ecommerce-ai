import SectionHeader from '../../../../components/Widget/SectionHeader';
import ProductCard from '../../../../components/Widget/ProductCard';

const products = [
    {
        id: 101,
        name: "Ergonomic Smart Desk Lamp",
        price: "$85.00",
        oldPrice: "$120.00",
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1374&auto=format&fit=crop",
        tag: "New"
    },
    {
        id: 102,
        name: "Eco-Friendly Yoga Mat",
        price: "$45.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1374&auto=format&fit=crop",
        tag: "Eco"
    },
    {
        id: 103,
        name: "Portable Bluetooth Speaker",
        price: "$110.00",
        oldPrice: "$150.00",
        image: "https://images.unsplash.com/photo-1608156639585-34a0a0ea92bb?q=80&w=1470&auto=format&fit=crop",
        tag: "Limited"
    },
    {
        id: 104,
        name: "Minimalist Ceramic Vase",
        price: "$35.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1374&auto=format&fit=crop",
        tag: "Handmade"
    },
];

const NewArrivals = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <SectionHeader
                    title="New Arrivals"
                    subtitle="Just Landed"
                    linkText="Expore All"
                    linkPath="/shop?latest=true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
