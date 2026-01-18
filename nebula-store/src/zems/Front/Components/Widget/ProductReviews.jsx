import { useState } from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';

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
    const [showAll, setShowAll] = useState(false);
    const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* 1. Sidebar: Rating Summary - Now on the right on desktop */}
            <div className="lg:col-span-4 lg:order-last space-y-8">
                <div className="sticky top-24 space-y-8">
                    <div className="flex flex-col items-center justify-center bg-gray-50/50 p-8 rounded-xl border border-gray-100">
                        <span className="text-6xl font-black text-black tracking-tighter">4.8</span>
                        <div className="flex text-yellow-500 my-3">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={18} fill={s <= 4.8 ? "currentColor" : "none"} strokeWidth={1} />
                            ))}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">24 authenticated reviews</p>
                    </div>

                    {/* Rating Distribution Bars */}
                    <div className="flex flex-col space-y-3 px-2">
                        {[
                            { stars: 5, width: '85%' },
                            { stars: 4, width: '10%' },
                            { stars: 3, width: '3%' },
                            { stars: 2, width: '1%' },
                            { stars: 1, width: '1%' },
                        ].map((row) => (
                            <div key={row.stars} className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-gray-900 w-2">{row.stars}</span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-black transition-all duration-500" style={{ width: row.width }} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 w-8">{row.width}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg active:scale-95">
                        Write a Review
                    </button>
                </div>
            </div>

            {/* 2. Main Content: Reviews List - Now on the left on desktop */}
            <div className="lg:col-span-8 lg:order-first space-y-10">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Customer Feedback</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {displayedReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* View More Toggle */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">
                            {showAll ? 'Show Fewer Reviews' : 'View All Reviews'}
                        </span>
                        <div className="w-12 h-[1px] bg-gray-200 group-hover:w-20 group-hover:bg-black transition-all" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;
