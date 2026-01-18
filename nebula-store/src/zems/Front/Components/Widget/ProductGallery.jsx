import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ProductGallery = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image Slider */}
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs]}
                className="w-full aspect-square bg-[#f8f8f8]"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Product view ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails Slider - Smaller height for smaller thumbs */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="w-full h-16 sm:h-20 mt-2"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="cursor-pointer opacity-40 [&.swiper-slide-thumb-active]:opacity-100 transition-opacity">
                        <div className="w-full h-full border border-gray-100 overflow-hidden">
                            <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductGallery;
