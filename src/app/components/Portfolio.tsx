'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Ensure these paths and filenames exactly match what's in your public directory
const portfolioItems = [
  { image: '/public/project1.png', alt: 'Project 1' },
  { image: '/project2.jpg', alt: 'Project 2' },
  { image: '/project3.jpg', alt: 'Project 3' },
  { image: '/project4.jpg', alt: 'Project 4' },
  { image: '/project1.jpg', alt: 'Project 1 Duplicate' },
  { image: '/project2.jpg', alt: 'Project 2 Duplicate' },
  { image: '/project3.jpg', alt: 'Project 3 Duplicate' },
  { image: '/project4.jpg', alt: 'Project 4 Duplicate' },
];

const PortfolioSlider = () => {
  return (
    <section id="portfolio" className="max-w-[1300px] mx-auto mt-10 mb-6 md:mb-30 text-white text-center">
      <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
        <span className="text-[#800080]">PORTFOLIO</span>
      </h4>
      <h2 className="text-[34px] md:text-5xl font-bold mb-18 text-[#c4cfde]">
        <span className="text-[#c4cfde]">Recent Work</span>
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-slider"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div className="relative rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                width={350}
                height={400}
                layout="intrinsic"
                className="w-full h-auto border-4 border-[#c4cfde] rounded-[10px]"
                objectFit="cover" // Makes sure the image covers the container without distortion
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PortfolioSlider;
