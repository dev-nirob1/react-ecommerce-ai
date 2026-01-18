import { Star, MessageSquare } from 'lucide-react';

const reviews = [
    {
        id: 1,
        user: "James Wilson",
        date: "October 12, 2025",
        rating: 5,
        comment: "Absolutely love the quality. The fit is perfect and the material feels premium. Definitely worth the price!",
        avatar: "JW"
    },
    {
        id: 2,
        user: "Sarah Chen",
        date: "September 28, 2025",
        rating: 4,
        comment: "Great minimalist design. The color is slightly darker than the photo, but it still looks amazing.",
        avatar: "SC"
    },
    {
        id: 3,
        user: "Michael Ross",
        date: "September 15, 2025",
        rating: 5,
        comment: "The best customer service I've experienced. Fast shipping and the product exceeded my expectations.",
        avatar: "MR"
    }
];

const ProductReviews = () => {
    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
                <div className="space-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900">Customer Feedback</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Based on 24 reviews</p>
                </div>
                <button className="bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all">
                    Write a Review
                </button>
            </div>

            <div className="space-y-10">
                {reviews.map((review) => (
                    <div key={review.id} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* User Info */}
                        <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xs font-black uppercase tracking-widest">
                                {review.avatar}
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">{review.user}</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                            </div>
                        </div>

                        {/* Comment Content */}
                        <div className="md:col-span-9 space-y-4">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={14} fill={s <= review.rating ? "currentColor" : "none"} />
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed italic">
                                "{review.comment}"
                            </p>
                            <div className="flex gap-4 pt-2">
                                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black flex items-center gap-2">
                                    <MessageSquare size={12} /> Reply
                                </button>
                                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">
                                    Helpful? Yes(2)
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-1 hover:text-black hover:border-black transition-all">
                    View All Reviews
                </button>
            </div>
        </div>
    );
};

export default ProductReviews;
