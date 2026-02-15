import React from 'react'
import {motion} from "framer-motion"
import { FaShareSquare } from 'react-icons/fa'

const ResumeButton = () => {
  return (
      <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.05 } }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 px-3 py-2 bg-black/90  bg-opacity-80   border-white/20 hover:border-white/60 hover:text-white  text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_1px_#08f,0_0_15px_#08f]"
          >
            <a href="https://drive.google.com/file/d/1rhB9aWAa-lR6dytNlKw94Dn0Ns7pC8AN/view?usp=sharing" target="_blank" className="text-md font-medium bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text">
              Resume{" "}
            </a>
            <FaShareSquare className="w-4  h-4 opacity-70 text-white"></FaShareSquare>
          </motion.button>
  )
}

export default ResumeButton