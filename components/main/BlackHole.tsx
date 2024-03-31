"use client"
import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import ContactMe from "./ContactMe";
import { Meteors } from "../ui/meteors";
import {motion} from "framer-motion"

const BlackHole = () => {
  return (
    <div id="5" className=" w-full h-screen relative  overflow-x-hidden  ">
      <div className="absolute z-10 mt-28 ">
      <Meteors number={20} ></Meteors>
      </div>
    <div  className=" w-full h-full  flex items-center">

       <motion.video 
       whileInView={{opacity:1}}
       initial={{opacity:0}}
       transition={{duration:0.5}} muted autoPlay className=" -z-10 absolute object-cover w-full h-full">
        <source src="/blackhole.webm" />
      </motion.video>
      
      <SparklesCore
        id="10"
        speed={23}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={40}
        className="absolute w-full h-full   bg-black/60"
        particleColor="#FFFFFF"
      />
      <div className="absolute w-full  z-10">
        <ContactMe></ContactMe>
      </div>
      
    </div>
    </div>
  );
};

export default BlackHole;
