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
  description: string[];
  Techstack:string[]
}) => {
   let id=1;
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.02}} className="overflow-auto font-sans w-full flex-grow flex gap-8 flex-col justify-between  h-full p-6  text-white hover:shadow-lg hover:shadow-white/30 hover:border hover:border-1 hover:border-gray-300 hover:bg-black transform transition duration-200 hover:text-white hover:scale-105 rounded-xl delay-0.6 ">
      <div className="text-3xl  font-serif text-center font-semibold">{title}</div>
      <div className="flex flex-col gap-1 ">
        {description.map((points,index)=>{
          return <div key={index} className=" text-xs  md:text-start lg:text-[14px] 2xl:text-[15px] 2xl:leading-normal font-normal text-white/80 tracking-wide leading-5">&#xb7; {points}</div>
        })}
      </div>
      
      <div className="md:flex gap-2  hidden ">
        <div className="text-sm "> Tech Stack:</div>
        <div className=" overflow-auto flex gap-2">
        {Techstack.map((stack)=>{
          
          return <TechStackHolder key={id++} Techname={stack}></TechStackHolder>
        })}
</div>
      </div>
    </motion.div>
  );
};

export default ProjectContent;
