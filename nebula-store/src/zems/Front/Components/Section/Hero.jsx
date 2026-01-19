import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const sliderData = [
    {
        id: 1,
        title: "The Future of Sound",
        description: "Experience crystal clear audio with active noise cancellation and 40-hour battery life.",
        price: "$299.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Precision Timekeeping",
        description: "Handcrafted aesthetics meets modern precision. Sapphire glass and premium Italian leather strap.",
        price: "$195.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Step into Comfort",
        description: "Revolutionary cushioning for your morning runs. Lightweight, breathable, and sustainably made.",
        price: "$140.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
    },
];

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#f8f9fa]">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={1200}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-auto lg:h-[650px]"
                breakpoints={{
                    992: {
                        height: 650
                    }
                }}
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="w-full h-full flex flex-col lg:flex-row items-center">

                            {/* Image Side - Full width on mobile, half on desktop */}
                            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Side - Full width on mobile, half on desktop */}
                            <div className="w-full lg:w-1/2 flex items-center">
                                <div className="p-8 sm:p-12 lg:p-20 w-full max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
                                    <div className="space-y-4">
                                        <div className="flex justify-center lg:justify-start">
                                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 inline-block">
                                                New Collection
                                            </span>
                                        </div>
                                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                                            {slide.title}
                                        </h1>
                                    </div>

                                    <p className="text-gray-500 text-sm md:text-lg mt-6 leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-8">
                                        <div className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                                            {slide.price}
                                        </div>
                                        <Link
                                            to={`/product/${slide.id}`}
                                            className="w-full sm:w-auto bg-black text-white px-10 py-4 text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95"
                                        >
                                            SHOP NOW <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons - Hidden below 992px */}
            <div className="hidden lg:flex absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 justify-between px-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="swiper-button-prev-custom pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all cursor-pointer">
                    <ChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all cursor-pointer">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
