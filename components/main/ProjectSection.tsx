"use client"
import React from "react";
import { Meteors } from "../ui/meteors";
import ProjectDetail from "../ui/ProjectDetail";
import {motion} from "framer-motion";

const ProjectSection = () => {
  return (
    <div
      id="3"
      className="w-full   flex flex-col gap-16 items-center bg-black overflow-y-auto py-4 overflow-x-hidden "
    >
      <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:0.3}} className="  text-center text-3xl md:text-5xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-600 to-neutral-200 font-bold">
        PROJECTS
      </motion.div>
     
      <Meteors number={20}></Meteors>
       
        <ProjectDetail/>
      </div>
  
  );
};

export default ProjectSection;
