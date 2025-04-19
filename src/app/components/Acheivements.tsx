"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";

const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
  "/video5.mp4",
  "/video6.mp4",
  "/video7.mp4",
  "/video8.mp4",
  "/video9.mp4",
  "/video10.mp4",
];

const VideoSection = () => {
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null); // Properly typed reference

  const handleVideoPlay = () => {
    setIsAutoplayEnabled(false);
    setIsVideoPlaying(true);
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      swiperRef.current.disable();
    }
  };

  const handleVideoPause = () => {
    setIsAutoplayEnabled(true);
    setIsVideoPlaying(false);
    if (swiperRef.current) {
      swiperRef.current.enable(); // FIX: Do not call start() to prevent instant slide movement
    }
  };

  const handleVideoEnded = () => {
    setIsAutoplayEnabled(true);
    setIsVideoPlaying(false);
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
      swiperRef.current.enable();
    }
  };

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-2">
        <hr className="h-[1px] border-[#800080] mt-5 mb-8 md:mt-12 md:mb-15" />
      </div>
      <div className="max-w-[1300px] mx-auto p-4 text-center mb-15 md:mb-20">
        <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
          <span className="text-[#800080]">MEDIA APPEARANCES</span>
        </h4>
        <h2 className="text-[34px] md:text-5xl font-bold mb-10 md:mb-18 text-[#c4cfde]">
          <span className="text-[#c4cfde]">Other Achievements</span>
        </h2>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={isAutoplayEnabled ? { delay: 6000 } : false}
          navigation
          modules={[Autoplay, Navigation]}
          className="rounded-lg shadow-lg"
        >
          {videos.map((video) => (
            <SwiperSlide key={video}>
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default VideoSection;
