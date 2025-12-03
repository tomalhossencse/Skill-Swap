import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  return (
    <div className="w-full h-[500px] my-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-clip-border flex items-center justify-center text-white bg-[url('https://i.ibb.co.com/Y75r2j5G/id-9.jpg')]">
            <div className="p-8 rounded-lg text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 animate__animated animate__bounce ">
                Personal Fitness Coaching
              </h2>
              <p className="text-lg">
                Custom workout plans and one-on-one coaching sessions focused on
                fat loss and strength training.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center text-white bg-[url('https://i.ibb.co.com/4gZVthdq/full-shot-man-doing-yoga-mat.jpg')]">
            <div className="p-8 rounded-lg text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 animate__animated animate__bounce">
                Yoga & Fitness
              </h2>
              <p className="text-lg">
                Relax and strengthen your body through guided yoga sessions.
                Perfect for beginners seeking balance.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center text-white bg-[url('https://i.ibb.co.com/5X077R4V/cdc-T9-Swa-Yf6g40-unsplash.jpg')]">
            <div className="p-8 rounded-lg text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 animate__animated animate__bounce">
                Home Gardening Tips
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Get hands-on advice on how to grow herbs, vegetables, and
                flowers in small home spaces.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
