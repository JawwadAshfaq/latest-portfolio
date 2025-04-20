'use client';

import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section
      id="about"
      className="max-w-[1300px] mx-auto text-white mt-10 flex items-center justify-center scroll-mt-20"
    >
      <article className="container m-6 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left">
        {/* Left Content */}
        <div className="md:w-7/12 flex flex-col items-center md:items-start mt-10 md:mt-30 mr-0 md:mr-10">
          {/* First Paragraph */}
          <p className="text-[16px] md:text-[22px] uppercase tracking-wide text-gray-400 mb-2 pb-4">
            Welcome to my portfolio
          </p>

          {/* Heading with Typewriter */}
          <h2 className="about-head text-3xl md:text-5xl font-bold pb-4 leading-snug">
            Hi, I’m <span className="text-[#800080]">Jawwad Ashfaq</span>
            <span className="text-white">, </span>
            <Typewriter
              options={{
                strings: ['Full Stack Developer.', 'CMS Developer.'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 10,
              }}
            />
          </h2>

          {/* Main Paragraph */}
          <p className="text-[16px] md:text-lg mt-[20px] md:mt-4 text-gray-300 mx-[20px] md:mx-0">
            Passionate Web Developer with a deep expertise in modern technologies, dedicated to
            crafting dynamic, high-performance websites that are fast, user-friendly, and optimized
            for seamless user experience. With 3 years of experience and over 50+ completed
            projects, committed to delivering visually appealing and functionally rich websites that
            drive engagement and business growth.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4 custom-icons">
            <a
              href="https://www.facebook.com/jawwadashfaqwebdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#800080] p-3 rounded-full text-white text-xl hover:bg-[#9a009a] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/jawwad-ashfaq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#800080] p-3 rounded-full text-white text-xl hover:bg-[#9a009a] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/923191542621"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-[#25D366] p-3 rounded-full text-white text-xl hover:bg-[#1EBE57] focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-5/12 flex justify-center mb-5 md:mb-0">
          <Image
            src="/profile.png"
            alt="Jawwad Ashfaq - Web Developer"
            width={500}
            height={450}
            priority
            className="rounded-lg"
          />
        </div>
      </article>
    </section>
  );
}
