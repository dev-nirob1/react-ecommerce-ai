import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import PageHeader from '../../../components/Widget/PageHeader';
import CartItem from '../Components/Widget/CartItem';
import CartSummary from '../Components/Widget/CartSummary';

const mockCartItems = [
    {
        id: 1,
        name: "Elite Performance Hoodie",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1374&auto=format&fit=crop",
        category: "Apparel",
        size: "M",
        color: "Black",
        quantity: 1
    },
    {
        id: 2,
        name: "Urban Track Jacket",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
        category: "Men",
        size: "L",
        color: "Dark Gray",
        quantity: 2
    }
];

const Cart = () => {
    const [items, setItems] = useState(mockCartItems);

    const updateQuantity = (id, delta) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 15.00;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="bg-white min-h-screen">
                <PageHeader title="Shopping Cart" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Cart', path: null }]} />
                <div className="container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-gray-50 flex items-center justify-center mb-8 border border-gray-100">
                        <ShoppingBag size={40} className="text-gray-300" />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Your cart is empty</h2>
                    <p className="text-gray-500 mb-10 max-w-sm">Looks like you haven't added anything to your cart yet. Explore our latest collections to find something you love.</p>
                    <Link to="/shop" className="bg-black text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHeader
                title="Shopping Cart"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Cart', path: null }
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Items List */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            <div className="col-span-6">Product Details</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                        <CartSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
