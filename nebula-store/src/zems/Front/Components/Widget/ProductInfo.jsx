import { useState } from 'react';
import { Star, Plus, Minus, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Black');
    const [quantity, setQuantity] = useState(1);

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const colors = ['Black', 'Navy', 'Dark Gray'];

    // Conditional visibility logic
    const showSelectors = !['Accessories', 'Electronics'].includes(product.category);

    return (
        <div className="space-y-8">
            {/* Header Info */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                        {product.category || 'Premium Collection'}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                    {product.name}
                </h1>
                <div className="flex items-center gap-4">
                    <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={16} fill={s <= 4 ? "currentColor" : "none"} />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">(24 Customer Reviews)</span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                    <span className="text-3xl font-black text-black">{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-xl text-gray-400 line-through font-bold">{product.oldPrice}</span>
                    )}
                </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                Elevate your daily rotation with this premium quality piece. Crafted from high-grade materials, it offers unmatched comfort and
                a sleek, minimalist aesthetic that fits perfectly into any modern wardrobe. Designed for durability and style.
            </p>

            {/* Selectors */}
            <div className="space-y-8 pt-4 border-t border-gray-100">
                {showSelectors && (
                    <>
                        {/* Color Selector */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Color: <span className="text-gray-400 ml-2">{selectedColor}</span></h4>
                            <div className="flex gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 ${selectedColor === color ? 'border-black scale-110' : 'border-transparent'}`}
                                    >
                                        <div className={`w-full h-full rounded-full ${color === 'Black' ? 'bg-black' : color === 'Navy' ? 'bg-blue-900' : 'bg-gray-600'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Select Size: <span className="text-gray-400 ml-2">{selectedSize}</span></h4>
                                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-0.5 hover:text-black transition-colors">Size Guide</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-12 text-xs font-black uppercase border transition-all ${selectedSize === size ? 'bg-black text-white border-black shadow-lg -translate-y-1' : 'border-gray-100 text-gray-400 hover:border-black'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Quantity & Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <div className="flex items-center border border-gray-200 w-full sm:w-48 h-14 bg-white">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-14 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-r border-gray-100"
                        >
                            <Minus size={16} />
                        </button>
                        <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="flex-1 h-full text-center text-sm font-black focus:outline-none bg-transparent"
                        />
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-14 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-l border-gray-100"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                    <button className="w-full sm:flex-1 bg-black text-white h-14 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-900 transition-all active:scale-95 shadow-xl">
                        <ShoppingBag size={18} /> Add to Cart
                    </button>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-t border-gray-100">
                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                        <Truck size={18} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Secure Delivery</span>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Standard or Express Shipping</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                        <ShieldCheck size={18} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Quality Warranty</span>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">100% Authentic Products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
