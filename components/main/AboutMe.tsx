"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="2"
      className="w-full   h-screen flex flex-col items-center bg-black relative overflow-x-hidden"
    >
      <motion.div className="z-20 text-2xl md:text-5xl  text-center font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        About Me
      </motion.div>
      <SparklesCore
        id="2"
        speed={15}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={40}
        className="absolute w-full -z-10 bg-black/50"
        particleColor="#FFFFFF"
      />
      <div className=" w-full h-full absolute flex-grow flex items-center  ">
        <div className="w-full md:w-1/2 ">
          <div className=" dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex gap-1 items-center  justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className=" relative   w-11/12">
              <motion.div
                whileInView={{x: 0, opacity:1,display:"block"}}
                initial={{ x: -300, opacity:0,display:"hidden"  }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className=" opacity-80 my-8 text-white text-xs md:text-sm font-normal w-full"
              >
                {" "}
                Dynamic and results-driven professional with expertise in
                full-stack development, software engineering, and proficient in
                data structures and algorithms. <br></br>
                Equipped with the ability to
                architect and develop production-level applications, coupled
                with a strong aptitude for problem-solving.<br></br>
                 I am committed to
                leveraging my comprehensive skill set to excel in the tech field
                and contribute significantly to innovative projects. <br></br>
                I am eager
                to immerse myself in the business aspects of application
                development while continuously expanding my knowledge in
                emerging technologies such as AI and Web 3.0. <br></br>
                I am seeking a
                challenging role where I can apply my diverse skill set and
                dedication to drive tangible business outcomes.
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
        
          className="md:flex-grow h-3/4 hidden md:block  bg-center bg-cover bg-no-repeat rounded-full "
        >
          <motion.img   whileInView={{x:0,opacity: 1}}
          initial={{ opacity: 0,x:200 }}
        
          transition={{ delay: 0.4, duration: 0.6}}  className="h-full rounded-full" src="/bgimage2.jpg"></motion.img>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

export function GridBackgroundDemo({ content }: { content: string }) {
  return (
    <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {content}
      </p>
    </div>
  );
}
