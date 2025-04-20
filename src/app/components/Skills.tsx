import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiJquery className="text-blue-400" />, name: "jQuery" },
  { icon: <SiNextdotjs className="bg-black text-white p-1 rounded-full" />, name: "Next.js" },
  { icon: <FaPython className="text-yellow-300" />, name: "Python" },
  { icon: <FaPhp className="text-indigo-400" />, name: "PHP" },
  { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
  { icon: <FaWordpress className="text-blue-600" />, name: "WordPress" },
  { icon: <FaShopify className="text-green-500" />, name: "Shopify" },
];

const SkillsSection = () => {
  return (
    <>
     <div className="max-w-[1300px] mx-auto mb-16 md:mb-25">
        <hr className="h-[1px] border-[#800080] mt-20 md:mt-24" />
      </div>
    <section className="text-white text-center">
      <h4 className="text-[16px] md:text-[22px] font-bold text-[#800080]">
            <span className="text-[#800080]">TECHNOLOGIES</span>
        </h4>
        <h2 className="text-[34px] md:text-5xl font-bold mb-12 md:mb-18 text-[#c4cfde]">
          <span className="text-[#c4cfde]">Professional Skills</span>
        </h2>

      {/* First Row - 6 Icons */}
      {/* ✅ Desktop View: Show full rows as before */}
<div className="hidden md:flex flex-wrap justify-center gap-6">
  {skills.slice(0, 6).map((skill, index) => (
    <div key={index} className="flex flex-col items-center w-30">
      <div className="text-7xl mb-2">{skill.icon}</div>
      <span className="text-[18px]">{skill.name}</span>
    </div>
  ))}
</div>

<div className="hidden md:flex flex-wrap justify-center gap-6 mt-6">
  {skills.slice(6, 11).map((skill, index) => (
    <div key={index} className="flex flex-col items-center w-30">
      <div className="text-7xl mb-2">{skill.icon}</div>
      <span className="text-[18px]">{skill.name}</span>
    </div>
  ))}
</div>

<div className="hidden md:flex flex-wrap justify-center gap-6 mt-6">
  {skills.slice(11, 15).map((skill, index) => (
    <div key={index} className="flex flex-col items-center w-30">
      <div className="text-7xl mb-2">{skill.icon}</div>
      <span className="text-[18px]">{skill.name}</span>
    </div>
  ))}
</div>

{/* ✅ Mobile View: Custom rows */}
<div className="flex flex-col gap-6 md:hidden">
  {/* Row 1 - 3 icons */}
  <div className="flex justify-center gap-6 flex-wrap">
    {skills.slice(0, 3).map((skill, index) => (
      <div key={index} className="flex flex-col items-center w-24">
        <div className="text-6xl mb-2">{skill.icon}</div>
        <span className="text-[14px]">{skill.name}</span>
      </div>
    ))}
  </div>

  {/* Row 2 - 3 icons */}
  <div className="flex justify-center gap-6 flex-wrap">
    {skills.slice(3, 6).map((skill, index) => (
      <div key={index} className="flex flex-col items-center w-24">
        <div className="text-6xl mb-2">{skill.icon}</div>
        <span className="text-[14px]">{skill.name}</span>
      </div>
    ))}
  </div>

  {/* Row 3 - 3 icons */}
  <div className="flex justify-center gap-6 flex-wrap">
    {skills.slice(6, 9).map((skill, index) => (
      <div key={index} className="flex flex-col items-center w-24">
        <div className="text-6xl mb-2">{skill.icon}</div>
        <span className="text-[14px]">{skill.name}</span>
      </div>
    ))}
  </div>

  {/* Row 4 - 2 icons */}
  <div className="flex justify-center gap-6 flex-wrap">
    {skills.slice(9, 11).map((skill, index) => (
      <div key={index} className="flex flex-col items-center w-24">
        <div className="text-6xl mb-2">{skill.icon}</div>
        <span className="text-[14px]">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

    </section>
    </>
  );
};

export default SkillsSection;
