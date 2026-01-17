import { useState } from 'react';
import ProductCard from '../../../components/Widget/ProductCard';
import PageHeader from '../../../components/Widget/PageHeader';
import FilterSidebar from '../../../components/Widget/FilterSidebar';
import ListToolbar from '../../../components/Widget/ListToolbar';

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: "$299.00",
        oldPrice: "$350.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
        tag: "Hot",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Classic Chronograph Watch",
        price: "$195.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
        tag: null,
        category: "Accessories"
    },
    {
        id: 3,
        name: "CloudRunner Gen 2",
        price: "$140.00",
        oldPrice: "$160.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
        tag: "-15%",
        category: "Men"
    },
    {
        id: 4,
        name: "Leather Messenger Bag",
        price: "$120.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
        tag: "New",
        category: "Accessories"
    },
    {
        id: 5,
        name: "Minimalist Ceramic Vase",
        price: "$35.00",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1374&auto=format&fit=crop",
        tag: "Handmade",
        category: "Accessories"
    },
    {
        id: 6,
        name: "Ergonomic Smart Desk Lamp",
        price: "$85.00",
        oldPrice: "$120.00",
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1374&auto=format&fit=crop",
        tag: "New",
        category: "Electronics"
    },
];

const categories = ["All", "Men", "Women", "Accessories", "Electronics", "Lifestyle"];
const brands = ["Nike", "Apple", "Sony", "Casio", "Nebula Exclusive"];

const Shop = () => {
    const [view, setView] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="bg-white min-h-screen">
            {/* Page Header Widget */}
            <PageHeader
                title="The Collection"
                breadcrumbs={[{ label: 'Shop', path: null }]}
            />

            <div className="container mx-auto px-6 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Filter Sidebar Widget */}
                    <FilterSidebar
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                        categories={categories}
                        brands={brands}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    {/* Main Content Area */}
                    <main className="flex-1">

                        {/* List Toolbar Widget */}
                        <ListToolbar
                            view={view}
                            setView={setView}
                            onOpenFilter={() => setIsFilterOpen(true)}
                            showingCount={products.length}
                            totalCount={120}
                        />

                        {/* Product Grid */}
                        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-20 flex justify-center gap-2">
                            {[1, 2, 3, '...', 12].map((page, idx) => (
                                <button
                                    key={idx}
                                    className={`w-12 h-12 flex items-center justify-center text-xs font-black border ${page === 1 ? 'bg-black text-white border-black' : 'border-gray-100 hover:border-black transition-colors'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;
