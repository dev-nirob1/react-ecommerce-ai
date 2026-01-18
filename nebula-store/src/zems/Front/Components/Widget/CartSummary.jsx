import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CartSummary = ({ subtotal, shipping, total }) => {
    return (
        <div className="bg-gray-50 border border-gray-100 p-8 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-200 pb-4">Order Summary</h3>

            <div className="space-y-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="font-black text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Shipping</span>
                    <span className="font-black text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <div className="flex flex-col">
                        <span className="text-gray-500 font-medium">Estimated Tax</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Calculated at checkout</span>
                    </div>
                    <span className="font-black text-gray-900">$0.00</span>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-end mb-8">
                    <span className="text-sm font-black uppercase tracking-widest text-gray-900">Total</span>
                    <span className="text-3xl font-black tracking-tighter text-black">${total.toFixed(2)}</span>
                </div>

                <Link
                    to="/checkout"
                    className="w-full bg-black text-white h-16 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
                >
                    Proceed to Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-6 flex flex-col items-center gap-4 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Secure Checkout Guaranteed
                    </p>
                    <div className="flex gap-4 opacity-30 grayscale pointer-events-none">
                        <span className="text-sm font-black italic">VISA</span>
                        <span className="text-sm font-black italic">AMEX</span>
                        <span className="text-sm font-black italic">DISCOVER</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
