import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-gray-100 group">
            {/* Product Info */}
            <div className="md:col-span-6 flex gap-6">
                <div className="w-24 h-32 bg-gray-50 shrink-0 overflow-hidden border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{item.category} • {item.size} • {item.color}</p>
                    <button
                        onClick={() => removeItem(item.id)}
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
                    >
                        <Trash2 size={12} /> Remove Item
                    </button>
                </div>
            </div>

            {/* Price */}
            <div className="hidden md:block md:col-span-2 text-center font-bold text-gray-900">
                ${item.price.toFixed(2)}
            </div>

            {/* Quantity Control */}
            <div className="md:col-span-2 flex justify-start md:justify-center">
                <div className="flex items-center border border-gray-200 h-10 w-32 md:w-full max-w-[120px]">
                    <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <Minus size={12} />
                    </button>
                    <span className="flex-1 text-center text-xs font-black">{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <Plus size={12} />
                    </button>
                </div>
            </div>

            {/* Row Total */}
            <div className="md:col-span-2 text-right">
                <span className="md:hidden text-xs text-gray-400 mr-2 uppercase font-black tracking-widest">Subtotal:</span>
                <span className="font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartItem;
