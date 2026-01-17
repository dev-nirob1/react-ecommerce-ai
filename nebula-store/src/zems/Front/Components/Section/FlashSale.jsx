import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const FlashSale = () => {
    return (
        <section
            className="relative h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1470&auto=format&fit=crop')`
            }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">

                    {/* Flash Tag */}
                    <div className="flex justify-center">
                        <span className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl animate-pulse">
                            <Zap size={14} className="fill-black" /> Flash Sale
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
                            Season Finale <br />
                            <span className="text-yellow-400">Up to 70% Off</span>
                        </h2>
                        <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto font-medium">
                            Don't miss out on our biggest sale of the year. Premium quality items at unbeatable prices. Limited time only.
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex justify-center gap-4 md:gap-8">
                        {[
                            { label: 'Days', value: '02' },
                            { label: 'Hours', value: '14' },
                            { label: 'Mins', value: '45' },
                            { label: 'Secs', value: '18' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="text-3xl md:text-5xl font-black text-white leading-none">
                                    {item.value}
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Link
                            to="/flash-sale"
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-yellow-400 transition-all duration-300 shadow-2xl active:scale-95 group"
                        >
                            Shop the Sale <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
