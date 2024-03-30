"use client"
import React from "react";
import { Meteors } from "../ui/meteors";
import ProjectDetail from "../ui/ProjectDetail";
import {motion} from "framer-motion";

const ProjectSection = () => {
  return (
    <motion.div
    whileInView={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8}}
      id="3"
      className="w-full relative  flex flex-col gap-24 justify-between items-center bg-black overflow-y-auto py-12 overflow-x-hidden "
    >
      <div className="absolute ">

      <Meteors number={30} className="z-30"></Meteors>
      </div>
      <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.3}} className="  text-center text-3xl md:text-5xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-600 to-neutral-200 font-bold">
        PROJECTS
      </motion.div>
     
       
        <ProjectDetail/>
      </motion.div>
  

  );
};

export default ProjectSection;
