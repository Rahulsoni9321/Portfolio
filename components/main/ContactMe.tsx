"use client"
import React from "react";
import { FaDownload } from "react-icons/fa6";
import ContactForm from "../ui/ContactForm";
import ResumeButton from "../ui/resumeButton";

const ContactMe = () => {
  return (
    <div className="w-11/12 2xl:max-w-7xl md:mx-auto  flex md:flex-row flex-col items-center justify-center gap-12 md:mb-12">
      <div className="flex-grow   flex flex-col gap-8 justify-center items-center ">
        <div  className=" text-3xl md:text-6xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#45337d] via-[#d6b3e8] to-[#f7cee7]">
          Get in Touch...
        </div>
        <ResumeButton></ResumeButton>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};




export default ContactMe;
