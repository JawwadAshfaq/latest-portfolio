"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const accordionData = [
  {
    title: "🎯 Do you offer custom website development?",
    content: "Yes, I specialize in developing custom websites from scratch to meet your specific needs, whether it's for an eCommerce store or a corporate site.",
  },
  {
    title: "💰 How do you determine the cost of a project?",
    content: "The cost depends on the project's complexity and requirements. Contact me with details, and I'll provide a tailored quote.",
  },
  {
    title: "🛠️ What technologies do you specialize in?",
    content: "I work with React.js, Next.js, Tailwind CSS, TypeScript, Shopify, and WordPress to create scalable web solutions.",
  },
  {
    title: "📈 Can you improve my website’s speed and SEO performance?",
    content: "Absolutely! I offer Website Speed Optimization, On-Page SEO, and Technical SEO to boost your website's performance and ranking.",
  },
  {
    title: "🎯 What makes you the right choice for my project?",
    content:
      "With 3 years of experience and 50+ completed projects, I deliver high-quality, optimized, and scalable web solutions tailored to your business.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="max-w-[1300px] mx-auto p-6">
    <hr className="h-[1px] border-[#800080] mt-15 mb-6 md:mt-20 md:mb-10" />
    </div>
    <div className="max-w-[1000px] mx-auto p-6">
      
      {/* FAQ's Heading */}
      <h4 className="text-[16px] md:text-[22px] font-bold text-center text-[#800080]">
            <span className="text-[#800080]">THINGS YOU MIGHT TO KNOW</span>
        </h4>
        <h2 className="text-[34px] md:text-5xl font-bold text-center mb-10 md:mb-18 text-[#c4cfde]">
          <span className="text-[#c4cfde]">Frequently Asked Questions</span>
        </h2>

      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 bg-white/10 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full px-5 py-4 text-[16px] md:text-lg font-medium text-white rounded-xl focus:outline-none cursor-pointer transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: "#800080", // Set the background color to #800080
            }}
          >
            {item.title}
            <FaChevronDown
              className={`transition-transform duration-300 text-white ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-900/80 rounded-b-xl"
          >
            <p className="px-5 py-3 text-gray-200">{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Accordion;
