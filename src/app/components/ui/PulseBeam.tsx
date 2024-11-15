"use client";

import React from "react";
import { motion } from "framer-motion";

// Gradient animation definitions
const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};

const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

export const PulseBeams = () => {
  return (
    <div className="flex h-[40rem] relative items-center justify-center antialiased bg-transparent overflow-hidden">
      {/* Button with Link */}
      <a href="https://docpolluxchain.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 w-[320px] z-40 h-[120px] no-underline group cursor-pointer relative shadow-2xl shadow-green-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex justify-center w-[320px] text-center space-x-2 h-[120px] items-center z-10 rounded-full bg-green-750 py-0.5 px-4 ring-1 ring-white/10">
            <span className="md:text-3xl text-base inline-block bg-clip-text text-white">
              Build With Pollux
            </span>
          </div>
        </button>
      </a>

      {/* Core SVGs component with animated gradients */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

// SVGs with animated gradient strokes and text labels
export const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {/* Paths with animated gradients */}
      <path
  d="M289 220.5H36.5C30.9772 220.5 26.5 224.977 26.5 230.5V330"
  stroke="url(#grad1)"
/>



    
     <path
  d="M518 200H791C796.523 200 801 195.523 801 190V40"
  stroke="url(#grad2)"
/>

<path
  d="M425.5 250V300C425.5 305.523 421.023 310 415.5 310H152C146.477 310 142 314.477 142 320V380"
  stroke="url(#grad3)"
/>

<path
  d="M493 274V310C493 315.523 497.477 320 503 320H760C765.523 320 770 324.703 770 330.226V400"
  stroke="url(#grad4)"
/>

      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="url(#grad5)"
      />
      
      {/* Text labels at the ends of the connecting lines */}
      <text x="0" y="350" className="text-xl font-medium fill-[#ffffff]">Secure</text>
      <text x="820" y="25" className="text-xl font-medium fill-[#ffffff]" textAnchor="end">Faster</text>
      <text x="120" y="400" className="text-xl font-medium fill-[#ffffff]">Scalable</text>
      <text x="820" y="420" className="text-xl font-medium fill-[#ffffff]" textAnchor="end">Sustainable</text>
      <text x="510" y="15" className="text-xl font-medium fill-[#ffffff]" textAnchor="middle">Developers Friendly</text>

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// Static gradient colors for SVG
export const GradientColors = () => (
  // <>
  //   <stop offset="0%" stopColor="#ffffff" />
  //   <stop offset="50%" stopColor="#8AF969" />
  //   <stop offset="70%" stopColor="#ffffff" />
  //   <stop offset="100%" stopColor="#89fb69" />
    
  // </>

  <>
  <stop stopColor="#8AF969" stopOpacity="1"></stop>
  <stop stopColor="#fffff"></stop>
  <stop offset="0.325" stopColor="#ffff"></stop>
  <stop offset="1" stopColor="#ffff" stopOpacity="1"></stop>
</>

);
