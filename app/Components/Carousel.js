"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const images = ["/img_1.PNG", "/img_2.PNG", "/img_3.PNG", "/img_4.PNG"];

  return (
    <div className="w-96 lg:w-full  h-64 lg:h-96">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

