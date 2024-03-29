"use client"
import React from "react";
import { AuroraBackground } from "../ui/Aurora";
import { SparklesCore } from "../ui/Sparkles";
import { TextGenerateEffect } from "../ui/text-generate";
import { TypewriterEffectSmooth } from "../ui/type-writer";
import { Meteors } from "../ui/meteors";
import { Spotlight } from "../ui/SpotLight";
import { MdOutlineStart } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import {motion} from "framer-motion";

const Hero = () => {
  type WordsType = {
    text: string;
    className?: string | undefined;
  }[];
  const words: WordsType = [
    {
      text: "I am a Full Stack developer !",
      className:
        "text-center text-xl md:text-3xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500",
    },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="1"
      className=" flex  items-center justify-center w-full h-screen bg-black overflow-x-hidden "
    >
      <Spotlight className='pt-12 '></Spotlight>
      <div className="relative w-full h-full ">
        <Meteors number={30} className='absolute z-10'></Meteors>
      </div>
      <SparklesCore
          id="1"
          speed={23}
          background="transparent"
          minSize={1}
          maxSize={1.4}
          particleDensity={40}
          className="absolute w-full h-full  bg-black/60"
          particleColor="#FFFFFF"
        />
      <div className="absolute text-center  ">
        <div className="text-4xl md:text-6xl font-bold text-white ">
          <TextGenerateEffect
            words="Rahul Soni"
            className="  font-semibold bg-clip-text text-transparent text-4xl md:text-6xl leading-snug tracking-wide"
          />
        </div>
        <hr className="mt-4 w-full"></hr>
        <div className=" text-sm md:text-xl">
          <TypewriterEffectSmooth words={words} className="text-sm" />
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <motion.button
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1,y:0}}
           whileHover={{scale:1.05,transition:{duration:0.05}}}
           transition={{duration:0.4}}
            onClick={() => scrollToSection("5")}
            className="flex items-center gap-2 px-3 py-2 bg-black/90  bg-opacity-80  border-white/20 hover:border-white/60 hover:text-white text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_1px_#08f,0_0_15px_#08f] "
          >
            <p className="text-md font-medium bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text">
              Contact{" "}
            </p>
            <MdOutlineStart className="w-6 h-4 opacity-70 text-white"></MdOutlineStart>
          </motion.button>
          <motion.button
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1,y:0}}
           whileHover={{scale:1.05,transition:{duration:0.05}}}
           transition={{duration:0.2}}
            className="flex items-center gap-2 px-3 py-2 bg-black/90  bg-opacity-80   border-white/20 hover:border-white/60 hover:text-white  text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_1px_#08f,0_0_15px_#08f]"
            
          >
            <a href="/Resume.pdf" download={true} className="text-md font-medium bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text">
              Download Resume{" "}
            </a>
            <FaDownload className="w-4  h-4 opacity-70 text-white"></FaDownload>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
