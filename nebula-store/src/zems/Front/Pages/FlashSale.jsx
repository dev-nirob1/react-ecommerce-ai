import { useState, useEffect } from 'react';
import { Timer, Zap, ArrowRight, ShoppingCart, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 45,
        seconds: 30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const flashProducts = [
        {
            id: 1,
            name: "Neural Link v2 - Void Edition",
            originalPrice: "$499",
            salePrice: "$299",
            discount: "40% OFF",
            claimed: 85,
            image: "https://images.unsplash.com/photo-1544117518-2b49c0c88349?w=500&h=500&fit=crop"
        },
        {
            id: 2,
            name: "Nebula Glass Air - Special White",
            originalPrice: "$1,200",
            salePrice: "$720",
            discount: "40% OFF",
            claimed: 62,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
        },
        {
            id: 3,
            name: "Void Pro Audio - Limited Neon",
            originalPrice: "$850",
            salePrice: "$425",
            discount: "50% OFF",
            claimed: 98,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
        },
        {
            id: 4,
            name: "Cyber Core V1 - Reactor",
            originalPrice: "$2,500",
            salePrice: "$1,800",
            discount: "৳700 OFF",
            claimed: 45,
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop"
        },
    ];

    const formatNum = (num) => num.toString().padStart(2, '0');

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-black text-white pt-32 pb-20 px-6 overflow-hidden relative">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <span className="h-3 w-3 bg-red-600 rounded-full animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Live Sale Window</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
                                Flash <br /> Drop
                            </h1>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-500 max-w-sm mx-auto lg:mx-0">
                                High-intensity hardware liquidations. Once the timer stops, the price returns to the void.
                            </p>
                        </div>

                        {/* Timer Card */}
                        <div className="bg-white text-black p-10 flex flex-col items-center gap-6 shadow-[20px_20px_0px_#facc15]">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em]">Hurry, Ending In:</p>
                            <div className="flex gap-4 md:gap-8">
                                {[
                                    { label: 'Hrs', val: timeLeft.hours },
                                    { label: 'Min', val: timeLeft.minutes },
                                    { label: 'Sec', val: timeLeft.seconds }
                                ].map((t, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <span className="text-4xl md:text-6xl font-black tabular-nums">{formatNum(t.val)}</span>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-400 mt-2">{t.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute right-[-100px] top-[-50px] text-[20rem] font-black text-white/[0.03] select-none pointer-events-none italic">ZAP</div>
            </div>

            {/* Sub-Nav / Filter */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6">
                <div className="container mx-auto">
                    <div className="flex overflow-x-auto no-scrollbar py-6 gap-8">
                        {['All Drops', 'Wearables', 'Optics', 'Core Tech', 'Hardware'].map((cat, i) => (
                            <button key={i} className={`whitespace-nowrap text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black transition-colors'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Matrix */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {flashProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-square bg-gray-50 overflow-hidden mb-6">
                                <img
                                    src={product.image}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    alt={product.name}
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1.5 text-[10px] font-black uppercase tracking-widest">
                                    {product.discount}
                                </div>
                                <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <button className="h-12 w-12 bg-black text-white flex items-center justify-center hover:bg-gray-800">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-black uppercase tracking-tight text-black line-clamp-1 group-hover:underline">{product.name}</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-black text-black">{product.salePrice}</span>
                                        <span className="text-xs font-bold text-gray-300 line-through">{product.originalPrice}</span>
                                    </div>
                                </div>

                                {/* Stock Urgency Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                                        <span className={product.claimed > 80 ? "text-red-600" : "text-gray-400"}>
                                            {product.claimed > 80 ? "Almost Gone!" : "Stock Remaining"}
                                        </span>
                                        <span className="text-black">{product.claimed}% Claimed</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-100 overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ${product.claimed > 80 ? 'bg-red-600' : 'bg-black'}`}
                                            style={{ width: `${product.claimed}%` }}
                                        />
                                    </div>
                                </div>

                                <button className="w-full py-4 border border-gray-100 group-hover:border-black text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                                    Claim This Drop <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Section */}
            <div className="bg-gray-50 py-32 px-6">
                <div className="container mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Next Transmission</h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Arriving in approx 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white p-8 space-y-6 relative overflow-hidden grayscale">
                                <div className="h-48 bg-gray-50 flex items-center justify-center">
                                    <Zap size={40} className="text-gray-200" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-4 w-3/4 bg-gray-200" />
                                    <div className="h-3 w-1/2 bg-gray-100" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 hover:opacity-100 transition-opacity">
                                    <span className="bg-black text-white px-4 py-2 text-[8px] font-black uppercase tracking-widest shadow-xl">Notify Me</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer-ish Banner */}
            <div className="bg-yellow-400 overflow-hidden py-4 border-y-2 border-black">
                <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap">
                    {[1, 2, 3, 4, 5].map(i => (
                        <span key={i} className="text-xs font-black uppercase tracking-[0.5em] text-black">
                            FREE SHIPPING OVER $500 • FLASH DROP LIMITED TIME ONLY • NO RETURNS ON FINAL SALE •
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
