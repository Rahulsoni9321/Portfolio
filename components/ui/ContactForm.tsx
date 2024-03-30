"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface typeinputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [inputs, setinputs] = useState<typeinputs>({
    name: "",
    email: "",
    message: "",
  });
  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.PUBLIC_KEY,
    template_params: {
      from_name: inputs.name,
      from_email: inputs.email,
      to_name: "Rahul Soni",
      message: inputs.message,
    },
  };

  const handlesubmit = async () => {
    try {
      if (inputs.name === "" || inputs.email === "" || inputs.message === "") {
        toast.error("Email cannot be sent empty");
        return;
      }
      if (!inputs.email.includes("@gmail.com")) {
        toast.error("Please enter valid email address.");
        return;
      }
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      toast.success("Email sent successfully.");
      setinputs({ name: "", email: "", message: "" });
    } catch (e) {
      toast.error("Error while sending Email.");
      console.error("Error while sending Email", e);
    }
  };
  return (
    <div className="w-11/12 md:w-1/2 p-6 text-white z-50 flex flex-col gap-4">
      <div className="flex  gap-6">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full "
        >
          <input
            onChange={(e) => {
              setinputs({ ...inputs, name: e.target.value });
            }}
            className="peer bg-black/70 shadow-md shadow-white/30 w-full h-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-white-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-400 before:border-blue-gray-200 peer-focus:before:!border-gray-200 after:border-blue-gray-400 peer-focus:after:!border-gray-500">
            Name
          </label>
        </motion.div>{" "}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full "
        >
          <input
            onChange={(e) => {
              setinputs({ ...inputs, email: e.target.value });
            }}
            className="peer bg-black/70 shadow-md shadow-white/30 w-full h-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-white-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-400 before:border-blue-gray-200 peer-focus:before:!border-gray-200 after:border-blue-gray-400 peer-focus:after:!border-gray-500">
            Email
          </label>
        </motion.div>
      </div>
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-md text-white -mb-2"
      >
        Message..
      </motion.p>
      <motion.textarea
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onChange={(e) => {
          setinputs({ ...inputs, message: e.target.value });
        }}
        placeholder="Start typing here..."
        className="h-44 text-gray-200 placeholder-gray-500 rounded-xl px-3 py-2 text-sm bg-transparent/95 shadow-lg shadow-violet-400/20 border border-gradient-to-r from-[#000000] to-[#fcabdd]"
      ></motion.textarea>

      <motion.button
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handlesubmit}
        className="px-3 py-4 text-sm text-white bg-gradient-to-r from-[#663dff]/70 via-[#aa00ff]/60 to-[#ffc4e9] shadow-lg shadow-[#cc4499]/30 rounded-full mt-3 transition hover:scale-95"
      >
        Submit
      </motion.button>
    </div>
  );
};

export default ContactForm;
