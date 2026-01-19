import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import PageHeader from '../../../components/Widget/PageHeader';
import PaymentMethods from '../Components/Widget/PaymentMethods';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('bkash');
    const [isOrdered, setIsOrdered] = useState(true);

    // Mock summary data
    const summary = {
        subtotal: 340.00,
        shipping: 15.00,
        tax: 0.00,
        total: 355.00,
        items: [
            { id: 1, name: "Elite Performance Hoodie", qty: 1, price: 120, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1374&auto=format&fit=crop" },
            { id: 2, name: "Urban Track Jacket", qty: 2, price: 110, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop" }
        ]
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsOrdered(true);
    };

    if (isOrdered) {
        return (
            <div className="bg-white min-h-screen py-32 flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 bg-black text-yellow-400 flex items-center justify-center mb-8 border border-white/10">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Order Received!</h2>
                <p className="text-gray-500 mb-10 max-w-sm font-medium">Your order has been placed successfully. We've sent a confirmation email to your inbox.</p>
                <Link to="/" className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-2xl active:scale-95">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHeader title="Checkout" breadcrumbs={[{ label: 'Cart', path: '/cart' }, { label: 'Checkout', path: null }]} />

            <div className="container mx-auto px-6 py-12">
                <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Form Details */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Shipping Address */}
                        <div className="space-y-8">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4">Shipping Address</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="sm:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input required type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="sm:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Street Address</label>
                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">City</label>
                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Zip / Postal Code</label>
                                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm focus:outline-none focus:border-black transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Payment Selection */}
                        <PaymentMethods selectedMethod={paymentMethod} setSelectedMethod={setPaymentMethod} />

                        <div className="pt-6">
                            <Link to="/cart" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                                <ArrowLeft size={14} /> Back to Cart
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Order Review Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-50 border border-gray-100 p-8 lg:sticky lg:top-24">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4 mb-6">Order Review</h3>

                            {/* Items Preview */}
                            <div className="space-y-6 mb-10">
                                {summary.items.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-20 bg-white border border-gray-100 shrink-0 overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-[10px] font-black uppercase tracking-tight text-gray-900 leading-tight mb-1">{item.name}</h4>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Qty: {item.qty} • ${item.price}</p>
                                        </div>
                                        <div className="flex items-center font-black text-gray-900 text-xs">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cost Breakdown */}
                            <div className="space-y-4 border-t border-gray-200 pt-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-500 font-bold uppercase tracking-widest">Subtotal</span>
                                    <span className="font-black text-gray-900">${summary.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-500 font-bold uppercase tracking-widest">Shipping</span>
                                    <span className="font-black text-gray-900">${summary.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-end pt-6 border-t border-gray-200">
                                    <span className="text-sm font-black uppercase tracking-widest text-gray-900">Total</span>
                                    <span className="text-3xl font-black tracking-tighter text-black">${summary.total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white h-16 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 mt-10"
                            >
                                Place Order Now
                            </button>

                            <p className="mt-6 text-[9px] text-gray-400 font-bold uppercase tracking-widest text-center leading-relaxed">
                                By placing an order, you agree to our <br />
                                <Link to="/terms" className="text-gray-900 underline">Terms and Conditions</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
