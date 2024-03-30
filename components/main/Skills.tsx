"use client";
import React, { ReactNode } from "react";
import { AuroraBackground } from "../ui/Aurora";
import {
  Backend,
  Frontend,
  Database,
  Tools,
  Programming,
} from "../ui/TechStackdetail";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteors";

const Skills = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  });
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
        transition={{ duration: 0.4 }}
        className=" text-center text-5xl  bg-clip-text  text-transparent bg-gradient-to-r from-neutral-600 to-white font-bold z-20 tracking-wide"
      >
        Skills
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.4 }}
        className="text-center text-lg  text-white/70 font-thin z-10  px-12"
      >
        Although i'm a techstack independent developer throw any challenges in
        front of me i am ready to thrive through it . But below are the
        techologies i had my hands dirty with.
      </motion.div>
      <div className="flex flex-col items-center   z-10 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-white"
        >
          Programming Languages
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}}  className="flex items-center gap-8">
          {Programming.map((language) => {
            return (
              <SkillContainer
                variants={iconVariants(Math.random() + 0.8)}
                children={language.children}
                Skillname={language.name}
              ></SkillContainer>
            );
          })}
        </motion.div>
      </div>
      <div className="flex flex-col items-center  text-white z-10 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-white"
        >
          Frontend
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}}  className="flex items-center gap-8">
          {Frontend.map((language) => {
            return (
              <SkillContainer
                variants={iconVariants(Math.random() + 0.8)}
                children={language.children}
                Skillname={language.name}
              ></SkillContainer>
            );
          })}
        </motion.div>
      </div>
      <div className="flex flex-col items-center  text-white z-10 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold bg-clip-text relative text-transparent bg-gradient-to-r from-neutral-600 to-white"
        >
           <div className="absolute mt-12">
      <Meteors number={50} ></Meteors>
      </div>
          Backend
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}}  className="flex items-center gap-8">
          {Backend.map((language) => {
            return (
              <>
                <SkillContainer
                  variants={iconVariants(Math.random() + 0.8)}
                  children={language.children}
                  Skillname={language.name}
                ></SkillContainer>
              </>
            );
          })}
        </motion.div>
      </div>
      <div className="flex flex-col items-center  text-white z-10 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-white"
        >
          Database
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}}  className="flex items-center gap-8">
          {Database.map((language) => {
            return (
              <SkillContainer
                variants={iconVariants(Math.random() + 0.8)}
                children={language.children}
                Skillname={language.name}
              ></SkillContainer>
            );
          })}
        </motion.div>
      </div>
      <div className="flex flex-col items-center  text-white z-10 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-white"
        >
          Tools
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}} className="flex items-center gap-1 md:gap-8 ">
          {Tools.map((language) => {
            return (
              <SkillContainer
                variants={iconVariants(Math.random() + 0.8)}
                children={language.children}
                Skillname={language.name}
              ></SkillContainer>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

function SkillContainer({
  children,
  Skillname,
  variants,
}: {
  children: ReactNode;
  Skillname: string;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-2 md:gap-3 items-center "
    >
      <div className="border-2  border-gray-600 p-2 md:p-4 rounded-full bg-gray-100 flex justify-center items-center">
        {children}
      </div>
      <div className="text-sm text-gray-100">{Skillname}</div>
    </motion.div>
  );
}

export default Skills;
