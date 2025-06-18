"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const images = ["/img.png", "/iamge4.png", "/iamge1.png", "/adfad.png"];

const Adds = () => {
  return (
    <div className="relative w-[1100px] h-[200px]  pt-[15px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "bullets" }}
        className="rounded-[5px] shadow-md"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[200px]">
              <Image
                src={src}
                alt={`slide-${i}`}
                fill
                className="object-cover bg-top cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Adds;
