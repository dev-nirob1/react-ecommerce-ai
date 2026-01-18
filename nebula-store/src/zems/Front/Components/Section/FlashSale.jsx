import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const FlashSale = () => {
    return (
        <section className="relative min-h-[400px] lg:min-h-[500px] w-full overflow-hidden flex items-center py-12 lg:py-24">

            {/* 1. Background Layer - REMOVED bg-fixed to fix scroll lag */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full w-full"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop')`,
                }}
            />

            {/* 2. Overlays */}
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            {/* 3. Marquee Text (Background Layer) */}
            <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden opacity-[0.12]">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-[100px] md:text-[180px] font-black text-white uppercase tracking-tighter mx-10">
                            LIMITED SALE • HURRY UP • MEGA OFFER •
                        </span>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex justify-start">
                {/* Content Side - Left Aligned Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-12 w-full max-w-[600px] shadow-2xl relative overflow-hidden group text-left">

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
                            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                                Flash <span className="text-yellow-400 italic">Clearance.</span>
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base font-medium max-w-md">
                                Save up to <span className="text-white font-bold">70% OFF</span> on our most popular collections. This is a limited time offer you don't want to miss.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link
                                to="/flash-sale"
                                className="inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-3.5 text-sm font-black uppercase tracking-widest hover:bg-yellow-400 transition-all duration-300 shadow-xl active:scale-95 group/btn"
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
