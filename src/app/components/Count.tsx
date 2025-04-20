"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Count = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1300px] mx-auto text-white py-6 md:py-16 text-center"
      role="region"
      aria-labelledby="facts-section"
    >
      <hr className="h-[1px] border-[#800080] mb-18 md:mb-24 mt-15" />

      <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
        <span className="text-[#800080]">KNOW SOME FACTS</span>
      </h4>

      <h2 id="facts-section" className="text-[34px] md:text-5xl font-bold mb-5 md:mb-18 text-[#c4cfde]">
        <span className="text-[#c4cfde]">Some Numbers</span>
      </h2>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-[60px] md:text-6xl font-bold text-gray-300">
            {inView && <CountUp end={3} duration={10} />}
            +
          </h3>
          <p className="text-[24px] md:text-2xl text-[#800080] mt-2">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-[60px] md:text-6xl font-bold text-gray-300">
            {inView && <CountUp end={50} duration={10} />}
            +
          </h3>
          <p className="text-[24px] md:text-2xl text-[#800080] mt-2">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-[60px] md:text-6xl font-bold text-gray-300">
            {inView && <CountUp end={40} duration={10} />}
            +
          </h3>
          <p className="text-[24px] md:text-2xl text-[#800080] mt-2">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-[60px] md:text-6xl font-bold text-gray-300">
            {inView && <CountUp end={100} duration={10} />}
            %
          </h3>
          <p className="text-[24px] md:text-2xl text-[#800080] mt-2">Services Guarantee</p>
        </div>
      </div>

      <hr className="h-[1px] border-[#800080] mt-18 md:mt-24" />
    </section>
  );
};

export default Count;
