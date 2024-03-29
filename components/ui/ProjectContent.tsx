"use client"
import React from "react";
import TechStackHolder from "./TechStackHolder";
import {motion} from "framer-motion";

const ProjectContent = ({
  title,
  description,
  Techstack
}: {
  title: string;
  description: string;
  Techstack:string[]
}) => {
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.2}} className="flex-grow flex gap-6 flex-col justify-between h-full  md:p-4  text-white hover:shadow-lg hover:shadow-white/30 hover:border hover:border-1 hover:border-gray-300 hover:bg-black transform transition duration-200 hover:text-white hover:scale-105 rounded-xl delay-0.6 ">
      <div className="text-xl font-semibold">{title}</div>
      <div className=" text-xs font-normal text-white/80">{description}</div>
      <div className="flex gap-2">
        <div className="text-sm"> Tech Stack:</div>
        {Techstack.map((stack)=>{
          return <TechStackHolder Techname={stack}></TechStackHolder>
        })}

      </div>
    </motion.div>
  );
};

export default ProjectContent;
