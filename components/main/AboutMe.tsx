"use client";
import React, { useState } from "react";
import { SparklesCore } from "../ui/Sparkles";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { AboutMeSection } from "@/conifg";

const AboutMe = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView }: any = useInView({
    //@ts-ignore
    triggerOnce: true, // Ensures the observer is disconnected after the first animation
    threshold: 0.1, // The animation will trigger when 50% of the element is visible
  });
  return (
    <div
      id="2"
      className="w-full h-screen flex flex-col gap-24 items-center bg-black relative overflow-x-hidden overflow-y-hidden "
    >
      <motion.div className="z-20 mt-12 2xl:max-w-7xl text-2xl md:text-5xl 2xl:text-6xl  text-center font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        About Me
      </motion.div>
      <div className=" w-full 2xl:max-w-7xl h-full absolute flex-grow flex items-center justify-center  ">
        <div className="w-full md:w-4/6 p-6">
          <div className=" dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex gap-1 items-center  justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className=" relative w-11/12 md:w-full lg:w-11/12 2xl:max-w-7xl">
              <motion.div
                ref={ref}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -300, opacity: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className=" opacity-80 my-8 text-white text-xs md:text-sm 2xl:text-[15px] tracking-wide leading-normal font-normal w-full"
              >
                {
                  AboutMeSection.map((details:string)=>{
                    return <><p className="text-sm font-normal">&middot; {details}</p><br></br></>
                  })
                }
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div className="md:flex-grow h-1/2 lg:h-1/2 hidden md:block  bg-center bg-cover bg-no-repeat rounded-full ">
          <motion.img
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-full w-9/12 rounded-full ml-4 object-cover"
            src="/bgimage2.jpg"
          ></motion.img>
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
