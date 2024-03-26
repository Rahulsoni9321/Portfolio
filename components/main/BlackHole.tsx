import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { Meteors } from "../ui/meteors";

const BlackHole = () => {
  return (
    <div id="5" className=" w-full relative flex items-center overflow-y-auto  ">
      {/* <Meteors number={7}></Meteors> */}
      {/* <SparklesCore
        id="5"
        speed={23}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={40}
        className="absolute w-full h-full  bg-black/60"
        particleColor="#FFFFFF"
      /> */}
      <div className="absolute w-full  z-10">
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
      <video muted autoPlay loop className=" object-cover w-full h-full">
        <source src="/blackhole.webm" />
      </video>
    </div>
  );
};

export default BlackHole;
