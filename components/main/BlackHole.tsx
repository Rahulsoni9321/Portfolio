"use client"
import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import ContactMe from "./ContactMe";

const BlackHole = () => {
  return (
    <div
      id="contact"
      className="w-full relative overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-full h-full min-h-screen flex items-center relative">
        {/* Background video */}
        <video
          muted
          autoPlay
          loop
          className="-z-10 absolute inset-0 object-cover w-full h-full opacity-40"
          aria-hidden="true"
        >
          <source src="/blackhole.webm" />
        </video>

        {/* Sparkles overlay — darkened */}
        <SparklesCore
          id="10"
          speed={5}
          background="rgba(0,0,0,0.6)"
          minSize={1}
          maxSize={1.4}
          particleDensity={12}
          className="absolute inset-0 w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Contact section */}
        <div className="relative z-10 w-full">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
