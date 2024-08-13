"use client"
import React from 'react'
import { motion} from "framer-motion";
import { Generictype } from './TechStackdetail';

interface typeTechnologies{
    name:string,
    Domain:Generictype[],
}

const Technologies = ({name,Domain}:typeTechnologies) => {
    const iconVariants:any = (duration: number) => ({
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
    <div className="flex flex-col items-center  text-white z-10 gap-8">
    <div
    
      className="text-xl md:text-2xl 2xl:text-3xl font-medium font-inter text-white/80"
    >
      {name}
    </div>
    <div  className="md:flex hidden  items-center gap-8">
      {Domain.map((language,index) => {
        return (
            <motion.div
            key={index}
              variants={iconVariants(Math.random() + 0.8)}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-2 md:gap-3 items-center "
            >
              <div className="border-2  border-gray-600 p-2 md:p-4 rounded-full bg-gray-100 flex justify-center items-center">
              {language.children}
              </div>
              <div className="text-sm text-gray-100">{language.name}</div>
            </motion.div>
        );
      })}
    </div>
    <motion.div whileInView={{y:0,opacity:1}} initial={{y:-40,opacity:0}} transition={{duration:0.2}}  className="flex md:hidden items-center gap-8">
      {Domain.map((language,index) => {
        return (
            <div
            key={index}
              
              className="flex flex-col gap-2 md:gap-3 items-center "
            >
              <div className="border-2  border-gray-600 p-2 md:p-4 rounded-full bg-gray-100 flex justify-center items-center">
              {language.children}
              </div>
              <div className="text-sm text-gray-100">{language.name}</div>
            </div>
        );
      })}
    </motion.div>
  </div>
  )
}

export default Technologies
