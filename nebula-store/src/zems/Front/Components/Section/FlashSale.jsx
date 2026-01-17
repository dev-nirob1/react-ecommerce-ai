import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const FlashSale = () => {
    return (
        <section className="relative min-h-[500px] lg:min-h-[600px] w-full overflow-hidden flex items-center py-20 lg:py-32">

            {/* 1. Parallax Background Layer */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center h-full w-full"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop')`,
                }}
            />

            {/* 2. Overlays */}
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            {/* 3. Marquee Text (Background Layer) */}
            <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden opacity-5">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-[120px] md:text-[200px] font-black text-white uppercase tracking-tighter mx-10">
                            LIMITED SALE • HURRY UP • MEGA OFFER •
                        </span>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex justify-start">
                {/* Content Side - Left Aligned Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-14 w-full max-w-[650px] shadow-2xl relative overflow-hidden group text-left">

                    {/* Decorative internal glow */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700" />

                    <div className="relative space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-start gap-3">
                                <div className="p-2 bg-yellow-400 rounded-full">
                                    <Zap size={14} className="fill-black text-black" />
                                </div>
                                <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.3em]">
                                    Exclusive Deal
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
                                Flash <span className="text-yellow-400 italic">Clearance.</span>
                            </h2>
                            <p className="text-gray-300 text-sm md:text-lg font-medium max-w-lg">
                                Save up to <span className="text-white font-bold">70% OFF</span> on our most popular collections. This is a limited time offer you don't want to miss.
                            </p>
                        </div>

                        {/* Modern Timer */}
                        <div className="flex justify-start gap-6 md:gap-12 border-y border-white/10 py-8">
                            {[
                                { label: 'Days', value: '01' },
                                { label: 'Hours', value: '12' },
                                { label: 'Mins', value: '45' },
                                { label: 'Secs', value: '30' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="text-3xl md:text-5xl font-black text-white">
                                        {item.value}
                                    </div>
                                    <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Link
                                to="/flash-sale"
                                className="inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-yellow-400 transition-all duration-300 shadow-xl active:scale-95 group/btn"
                            >
                                SHOP THE SALE <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default FlashSale;
