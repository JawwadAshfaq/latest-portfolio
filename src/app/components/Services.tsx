"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaWordpress, FaSyncAlt, FaCogs, FaSearch, FaCartPlus } from "react-icons/fa"; // Importing FaCartPlus for Shopify

const services = [
  { title: "Custom Web Development", description: "Crafting unique and responsive web solutions tailored to your business requirements.", icon: <FaLaptopCode className="text-[#800080] text-5xl" /> },
  { title: "WordPress Development", description: "Designing dynamic WordPress websites that align with your business goals.", icon: <FaWordpress className="text-[#800080] text-5xl" /> },
  { title: "Shopify Store Development", description: "Building high-performance Shopify stores to elevate your online business.", icon: <FaCartPlus className="text-[#800080] text-5xl" /> }, // Changed to FaCartPlus
  { title: "Website Redesign", description: "Transforming and optimizing existing websites to boost their performance.", icon: <FaSyncAlt className="text-[#800080] text-5xl" /> },
  { title: "Website Maintenance", description: "Keeping your website updated, secure, and running smoothly.", icon: <FaCogs className="text-[#800080] text-5xl" /> },
  { title: "SEO Optimization", description: "Enhancing your website’s visibility and driving more traffic with targeted SEO strategies.", icon: <FaSearch className="text-[#800080] text-5xl" /> }
];

export default function Services() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (section) {
        const top = section.getBoundingClientRect().top;
        setInView(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="max-w-[1300px] mx-auto mt-16 md:mt-30 px-6">
      <hr className="h-[1px] border-[#800080] mb-14 md:mb-24" />
      <div className="container mx-auto text-center">
        <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
          <span className="text-[#800080]">SERVICES</span>
        </h4>
        <h2 className="text-[34px] md:text-5xl font-bold mb-10 md:mb-18 text-[#c4cfde]">
          <span className="text-[#c4cfde]">What I Do</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg border border-gray-300 shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Moving Border Animation */}
              <span className="absolute top-0 left-0 w-full h-full border-animation"></span>
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
