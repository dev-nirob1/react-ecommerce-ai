import SectionHeader from '../../../../components/Widget/SectionHeader';
import ProductCard from '../../../../components/Widget/ProductCard';

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: "$299.00",
        oldPrice: "$350.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
        tag: "Hot"
    },
    {
        id: 2,
        name: "Classic Chronograph Watch",
        price: "$195.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
        tag: null
    },
    {
        id: 3,
        name: "CloudRunner Gen 2",
        price: "$140.00",
        oldPrice: "$160.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
        tag: "-15%"
    },
    {
        id: 4,
        name: "Leather Messenger Bag",
        price: "$120.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
        tag: "New"
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-[#fbfbfb]">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <SectionHeader
                    title="Featured Products"
                    subtitle="Selected for You"
                    linkText="View All Products"
                    linkPath="/shop"
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

export default FeaturedProducts;
