import { Star, CheckCircle, XCircle, Trash2, Search, Filter } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        { id: 1, user: "John Wick", product: "Void Headphones", rating: 5, comment: "I used these during a mission. The sound is so clear, I could hear a pin drop in another room. Professional quality.", date: "2 hours ago", status: "Pending" },
        { id: 2, user: "Maleficent", product: "Core Processor X1", rating: 2, comment: "It's too fast. I prefer things to move slower and more magically. Not for me.", date: "1 day ago", status: "Approved" },
        { id: 3, user: "Spider-Man", product: "Nebula Glass Air", rating: 5, comment: "It helps with my focus during web swinging! Absolute game changer.", date: "3 days ago", status: "Pending" },
        { id: 4, user: "Thanos", product: "Power Stone v0.1", rating: 1, comment: "I ordered 6 stones, only 1 arrived. Disappointing customer service.", date: "1 week ago", status: "Hidden" },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center bg-black text-white p-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Review Moderation</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Approve or hide customer feedback.</p>
                </div>
                <div className="text-right">
                    <p className="text-5xl font-black tracking-tighter">4.8</p>
                    <div className="flex gap-1 text-yellow-500 mt-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input
                        type="text"
                        placeholder="Search reviews by keyword or user..."
                        className="w-full bg-white border border-gray-100 px-16 py-5 text-xs font-bold focus:outline-none focus:border-black transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Pending', 'Approved', 'Hidden'].map(tab => (
                        <button key={tab} className={`px-6 py-5 border text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'Pending' ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-100 hover:border-black'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* List */}
            <div className="space-y-6">
                {reviews.map((rev) => (
                    <div key={rev.id} className="bg-white border border-gray-100 p-8 flex flex-col lg:flex-row gap-10 items-start hover:border-black transition-all group">
                        {/* Summary */}
                        <div className="lg:w-1/4 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-gray-100 flex items-center justify-center font-black text-xs">{rev.user.charAt(0)}</div>
                                <div>
                                    <p className="text-xs font-black uppercase text-black">{rev.user}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">{rev.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Product</p>
                                <p className="text-xs font-black text-black underline mt-1">{rev.product}</p>
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="flex-1">
                            <p className="text-xs font-bold text-gray-600 leading-relaxed uppercase tracking-wide">
                                "{rev.comment}"
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex lg:flex-col gap-3 shrink-0">
                            {rev.status === 'Pending' ? (
                                <>
                                    <button className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all">
                                        <CheckCircle size={14} /> Approve
                                    </button>
                                    <button className="flex items-center gap-3 px-6 py-3 bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                                        <XCircle size={14} /> Hide
                                    </button>
                                </>
                            ) : (
                                <div className="text-right">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 border ${rev.status === 'Approved' ? 'border-green-100 text-green-600' : 'border-gray-100 text-gray-400'}`}>
                                        Status: {rev.status}
                                    </span>
                                </div>
                            )}
                            <button className="p-3 text-gray-300 hover:text-red-500 transition-colors">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
