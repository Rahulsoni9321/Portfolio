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
      className="w-full flex flex-col relative gap-12 py-12 justify-between overflow-y-auto bg-[#090018]  overflow-x-hidden"
    >
      <div className="absolute mt-44">
      <Meteors number={60} ></Meteors>
      </div>
  
      <motion.video
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        autoPlay
        loop
        muted
        className="absolute  w-full h-11/12  z-0 opacity-60 object-contain mt-72 "
      >
        <source src="/cards-video.webm"></source>
      </motion.video>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.3 }}
        className=" text-center text-5xl bg-clip-text  text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold z-20 tracking-wide"
      >
        Skills
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.4 }}
        className="text-center text-lg  text-white/80 font-thin z-10 px-8  md:px-12"
      >
        I thrive on diverse challenges, embodying a techstack-independent approach. Additionally, I&apos;ve gained experience with:
      </motion.div>
     <Technologies name="Programming Languages" Domain={Programming}/>
     <Technologies name="Frontend" Domain={Frontend}/>
     <Technologies name="Backend" Domain={Backend}/>
      <Technologies name="Database" Domain={Database}/>
      <Technologies name="Tools" Domain={Tools}></Technologies>
     
    </motion.div>
  );
};


export default Skills;
