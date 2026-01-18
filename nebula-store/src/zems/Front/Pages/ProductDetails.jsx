import { useParams } from 'react-router-dom';
import PageHeader from '../../../components/Widget/PageHeader';
import SectionHeader from '../../../components/Widget/SectionHeader';
import ProductCard from '../../../components/Widget/ProductCard';
import ProductGallery from '../Components/Widget/ProductGallery';
import ProductInfo from '../Components/Widget/ProductInfo';
import ProductReviews from '../Components/Widget/ProductReviews';

// Mock data for a single product (In a real app, this would come from an API/Redux)
const productData = {
    id: 1,
    name: "Elite Performance Hoodie",
    price: "$120.00",
    oldPrice: "$150.00",
    category: "Men's Apparel",
    images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1374&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1374&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1374&auto=format&fit=crop"
    ]
};

const relatedProducts = [
    {
        id: 7,
        name: "Classic Cotton Tee",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1374&auto=format&fit=crop",
        category: "Men"
    },
    {
        id: 8,
        name: "Slim Fit Chinos",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1374&auto=format&fit=crop",
        category: "Men"
    },
    {
        id: 9,
        name: "Urban Track Jacket",
        price: "$110.00",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
        category: "Men"
    },
    {
        id: 10,
        name: "Athletic Shorts",
        price: "$35.00",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1470&auto=format&fit=crop",
        category: "Men"
    }
];

const ProductDetails = () => {
    const { id } = useParams();

    // Use productData as the source for now
    const product = productData;

    return (
        <div className="bg-white">
            <PageHeader
                title="Product Details"
                breadcrumbs={[
                    { label: 'Shop', path: '/shop' },
                    { label: product.name, path: null }
                ]}
            />

            <section className="py-6 lg:py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left Side: Image Gallery */}
                        <ProductGallery images={product.images} />

                        {/* Right Side: Product Details */}
                        <ProductInfo product={product} />
                    </div>
                </div>
            </section>

            {/* Reviews Section - Light Background */}
            <section className="bg-gray-50/50 py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    {/* Reviews Section */}
                    <ProductReviews />
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Complete The Look"
                        subtitle="You might also like these premium additions"
                        linkText="View All Products"
                        linkPath="/shop"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
