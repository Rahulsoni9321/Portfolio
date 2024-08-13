"use client";
import React from "react";
import {
  Backend,
  Frontend,
  Database,
  Tools,
  Programming,
} from "../ui/TechStackdetail";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteors";
import Technologies from "../ui/Technologies";

const Skills = () => {

  return (
    <motion.div
    whileInView={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.5}}
      id="4"
      className="w-full flex flex-col font-serif relative gap-12 py-12 justify-between overflow-y-auto bg-gradient-to-b from-[#090018] via-[#090018] to-[#010008]  overflow-x-hidden"
    >
     
  
      <video
        
        autoPlay
        loop
        muted
        className="absolute  w-full h-11/12  z-0 opacity-50 object-contain mt-72 "
      >
        <source src="/cards-video.webm"></source>
      </video>

      <div
       
        className=" text-center text-3xl md:text-5xl 2xl:text-6xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white  font-bold  tracking-wide"
      >
        Skills
      </div>
      <div
        
        className="text-center text-lg  text-white/80 font-thin z-10 px-8  md:px-12"
      >
        I thrive on diverse challenges, embodying a techstack-independent approach. Additionally, I&apos;ve gained experience with:
      </div>
     <Technologies name="Programming Languages" Domain={Programming}/>
     <Technologies name="Frontend" Domain={Frontend}/>
     <Technologies name="Backend" Domain={Backend}/>
      <Technologies name="Database" Domain={Database}/>
      <Technologies name="Tools" Domain={Tools}></Technologies>
     
    </motion.div>
  );
};


export default Skills;
