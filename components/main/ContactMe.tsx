import React from 'react'
import LabelledInput from '../ui/LabelledInput'
import { FaDownload } from "react-icons/fa6";
import {motion} from "framer-motion";


const ContactMe = () => {
  return (
    
  <div className='w-full flex md:flex-row flex-col gap-12 md:mb-12'>
     <div className='flex-grow  flex flex-col gap-8 justify-center items-center '>
          <div className=' text-3xl md:text-6xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#45337d] via-[#d6b3e8] to-[#f7cee7]'>Get in Touch...</div>
          <motion.button
           initial={{opacity:0, y:100}}
           animate={{opacity:1,y:0}}
           whileHover={{scale:1.05,transition:{duration:0.05}}}
           transition={{delay:0.2,duration:0.1}}
            className="flex items-center gap-2 px-3 py-2 bg-black/90 shadow-xl hover:bg-gray-950 bg-opacity-80 rounded-lg border border-white/20 hover:border-white/60 hover:text-white"
            
          >
            <a href="/Resume(1).pdf" download={true} className="text-md font-medium bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text">
              Download Resume{" "}
            </a>
            <FaDownload className="w-4  h-4 opacity-70 text-white"></FaDownload>
          </motion.button>
    </div>
    <div className='w-11/12 md:w-1/2 p-6 text-white z-50 flex flex-col gap-4'>
        <div className='flex  gap-6'>

         <LabelledInput label={"Name"}></LabelledInput>
         <LabelledInput label={"Email"}></LabelledInput>
        </div>
        <p className='text-md text-white -mb-2'>Message..</p>
        <textarea placeholder='Start typing here...' className='h-44 text-gray-200 placeholder-gray-500 rounded-xl px-3 py-2 text-sm bg-transparent/95 shadow-lg shadow-violet-400/20 border border-gradient-to-r from-[#000000] to-[#fcabdd]'></textarea>

       <button className='px-3 py-4 text-sm text-white bg-gradient-to-r from-[#663dff]/70 via-[#aa00ff]/60 to-[#ffc4e9] shadow-lg shadow-[#cc4499]/30 rounded-full mt-3 transition hover:scale-95'>Submit</button>
    </div>
   
    </div>
   
  )

}

// background-color: #663dff;
// background-image: linear-gradient(319deg,  0%,  37%,  100%);

export default ContactMe
