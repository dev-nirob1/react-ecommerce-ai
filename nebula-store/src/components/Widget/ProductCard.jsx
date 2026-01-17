import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react';

/**
 * ProductCard Widget
 * 
 * @param {Object} product - Product data object
 */
const ProductCard = ({ product }) => {
    return (
        <div className="group flex flex-col bg-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer">
            {/* Product Image Container */}
            <div className="relative h-[320px] md:h-[380px] bg-gray-50 overflow-hidden">
                {product.tag && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-wider">
                        {product.tag}
                    </span>
                )}

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Action Buttons Overlay */}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer" title="Add to Cart">
                        <ShoppingBag size={16} />
                    </button>
                    <Link to={`/product/${product.id}`} className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer" title="Quick View">
                        <Eye size={16} />
                    </Link>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer" title="Add to Wishlist">
                        <Heart size={16} />
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-1 space-y-1.5 p-5">
                <Link to={`/product/${product.id}`} className="text-sm md:text-base font-bold text-gray-900 hover:text-gray-600 transition-colors line-clamp-1">
                    {product.name}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1">(45)</span>
                </div>

                <div className="flex items-center gap-3 pt-0.5">
                    <span className="text-base md:text-lg font-black text-gray-900">{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
