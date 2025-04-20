// import Image from "next/image";
import StarCanvas from "./components/StarCanvas";
import Service from "./components/About";
import Count from "./components/Count"
import Services from "./components/Services";
import Skills from "./components/Skills"
import Prac from "./components/Acheivements"
import Accordions from "./components/Accordions";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
    <StarCanvas />
    <Service />
    <Services />
    <Count />
    <Portfolio />
    <Skills />
    <Accordions />
    <Prac />    
    </>
  );
}
