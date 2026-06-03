import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";

import "swiper/css";

const slides = [
  {
    id: "01",
    image: Hero1,
    title: "Nature's Beauty Delivered to You",
    desc: "Nature's beauty is just a click away with our online flower and plant shop.",
  },
  {
    id: "02",
    image: Hero2,
    title: "Bring Nature Into Your Home",
    desc: "Discover beautiful plants and flowers carefully selected for every space.",
  },
  {
    id: "03",
    image: Hero3,
    title: "Plants For Every Lifestyle",
    desc: "Find indoor and outdoor plants that perfectly match your environment.",
  },
];

const Hero = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-screen min-h-[800px]">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-screen min-h-[800px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
                    {slide.title}
                  </h1>

                  <p className="text-white/90 max-w-2xl mx-auto mb-10">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-green-700 text-white px-10 py-3 hover:bg-green-800 transition duration-300 cursor-pointer">
                      Book Now
                    </button>

                    <button className="border border-white text-white px-10 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Side Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`text-sm transition-all duration-300 cursor-pointer ${
              activeSlide === index
                ? "text-green-700 font-bold"
                : "text-white hover:text-green-200"
            }`}
          >
            {slide.id}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;