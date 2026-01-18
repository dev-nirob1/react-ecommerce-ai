import { Timer, Zap, ArrowRight, Tag } from 'lucide-react';
import PageHeader from '../../../components/Widget/PageHeader';

const campaigns = [
    {
        id: 1,
        title: "Winter Solstice Sale",
        discount: "UP TO 60% OFF",
        expiry: "Ends in 02d : 14h : 45m",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
        theme: "bg-black text-white",
        tag: "Seasonal"
    },
    {
        id: 2,
        title: "Flash Midnight Drop",
        discount: "FLAT 30% OFF",
        expiry: "Started: 12:00 AM",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
        theme: "bg-yellow-400 text-black",
        tag: "Flash Sale"
    },
    {
        id: 3,
        title: "New Year Essentials",
        discount: "BUY 1 GET 1",
        expiry: "Valid till Jan 5",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop",
        theme: "bg-white text-black border border-gray-100",
        tag: "New Arrivals"
    }
];

const Campaign = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHeader title="Active Campaigns" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Campaigns', path: null }]} />

            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Zap size={20} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Limited Time Offers</span>
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                            Hottest <br /> Deals of the Week
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 border border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">All Campaigns</button>
                        <button className="px-6 py-3 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400">Upcoming</button>
                    </div>
                </div>

                <div className="space-y-8">
                    {campaigns.map((camp) => (
                        <div key={camp.id} className={`group flex flex-col lg:flex-row border border-gray-100 overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-700`}>
                            {/* Image Section */}
                            <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden relative">
                                <img
                                    src={camp.image}
                                    alt={camp.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        {camp.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className={`lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center ${camp.theme}`}>
                                <div className="flex items-center gap-3 mb-6 opacity-60">
                                    <Timer size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{camp.expiry}</span>
                                </div>

                                <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                    {camp.title}
                                </h1>

                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[2px] w-12 bg-current opacity-30" />
                                    <span className="text-xl font-black uppercase tracking-widest">{camp.discount}</span>
                                </div>

                                <button className={`w-fit px-10 py-5 border-2 border-current text-xs font-black uppercase tracking-[0.2em] hover:bg-current hover:invert transition-all flex items-center gap-4 group/btn`}>
                                    Shop Collection <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Box inside Campaign */}
                <div className="mt-24 p-12 lg:p-24 bg-gray-50 border border-gray-100 relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <Tag size={48} className="mx-auto text-gray-200" />
                        <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black">
                            Don't miss the next big <br /> drop in the galaxy.
                        </h2>
                        <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">
                            Join 50,000+ explorers and get early access to campaigns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="flex-1 bg-white border border-gray-200 px-6 py-5 text-xs font-bold focus:outline-none focus:border-black"
                            />
                            <button className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {/* Decorative Background Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-black/[0.02] select-none pointer-events-none tracking-tighter">
                        NEBULA
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
