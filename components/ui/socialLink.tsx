import React from 'react'
import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoYoutube } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
const SocialLink = () => {
    return (
        <motion.div className="flex justify-around  md:hidden items-center mt-12 text-xl">
            <a href={"https://github.com/Rahulsoni9321"} target="_blank">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <BiLogoGithub className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400"></BiLogoGithub>
                </motion.div>
            </a>
            <a
                href={"https://www.linkedin.com/in/rahul-soni-50b806203/"}
                target="_blank"
            >
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}>
                    <FaLinkedin className="cursor-pointer transform transition text-cyan-600  hover:scale-110 hover:text-gray-400"></FaLinkedin>
                </motion.div>
            </a>
            <a href={"https://twitter.com/SoniRahul3108"} target="_blank">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <BsTwitterX className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400"></BsTwitterX>
                </motion.div>
            </a>
            <a href={"https://www.youtube.com/@index.developers"} target="_blank">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    <BiLogoYoutube className="cursor-pointer transform transition text-2xl lg:text-3xl hover:scale-110 text-red-600 hover:text-gray-400"></BiLogoYoutube>
                </motion.div>
            </a>
            <a
                href={"https://www.instagram.com/index.developers/"}
                target="_blank"
            >
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}>
                    <AiOutlineInstagram className="cursor-pointer transform transition text-2xl lg:text-3xl text-pink-800 hover:scale-110 hover:text-gray-400"></AiOutlineInstagram>
                </motion.div>
            </a>
        </motion.div>
    )
}

export default SocialLink