import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-xl hover:shadow-sm transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                {/* Left Side: User Info */}
                <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:w-32 shrink-0">
                    <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center text-xs font-black uppercase tracking-widest rounded-full">
                        {review.avatar}
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-tight text-gray-900">{review.user}</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest whitespace-nowrap">Verified Buyer</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Comment */}
                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={14} fill={s <= review.rating ? "currentColor" : "none"} strokeWidth={1} />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                    </div>
                    <h5 className="text-sm font-black uppercase tracking-tight text-gray-900">Highly Recommended</h5>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed italic pr-4">
                        "{review.comment}"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
