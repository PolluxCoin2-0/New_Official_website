"use client";

import { TypewriterEffect } from "./ui/Typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import { useEffect, useState } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";

const AnimatedText = () => {
  const words = ["POLLUXCHAIN", "REDEFINING", "DECENTRALIZED", "SOLUTION"];
  const colors = [
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
  ];
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    setOpacity(0);
    setScale(0.8);

    const fadeIn = setTimeout(() => {
      setOpacity(1);
      setScale(1);
    }, 400);

    return () => clearTimeout(fadeIn);
  }, [index]);

  return (
    <p className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold mt-0 md:mt-6">
      {" "}
      <span
        className={`${colors[index]} transition-all duration-500 inline-block`}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        {words[index]}
      </span>{" "}
    </p>
  );
};

const AnimatedText2 = () => {
  const words = ["SCALABILITY", "INNOVATION", "SEAMLESS", "WEB3 INTEGRATION"];
  const colors = [
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
    "text-[#8af969]",
  ];

  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    setOpacity(0);
    setScale(0.8);

    const fadeIn = setTimeout(() => {
      setOpacity(1);
      setScale(1);
    }, 400);

    return () => clearTimeout(fadeIn);
  }, [index]);

  return (
    <p className="text-2xl  font-bold mt-8">
      {" "}
      <span
        className={`${colors[index]} transition-all duration-500 inline-block`}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        {words[index]}
      </span>{" "}
    </p>
  );
};

export default function HeroSection() {
  const words = [
    {
      text: "UNLEASE",
    },
    {
      text: "THE",
    },
    {
      text: "POWER",
    },
    {
      text: "OF",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center space-y-4 px-0 sm:px-8 md:px-4 bg-transparent">
      {/* Logo with Tilt Effect */}

      {/* Logo with Continuous Rotation and Gradient Hover Effect */}
      <motion.div
        className="relative mt-10 sm:mt-14 md:mt-20"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          background: { duration: 0.3 },
        }}
        style={{ background: "transparent" }} // Default background
      >
        <motion.div
          animate={{ rotate: 360 }}
          whileHover={{ rotate: 0 }} // Stops rotation on hover
          transition={{
            repeat: Infinity,
            duration: 10, // Continuous rotation speed
            ease: "linear",
          }}
        >
          <Image
            src="/token3.png"
            alt="Polluxcoin Logo"
            width={320}
            height={320}
            className="w-48 sm:w-64 md:w-72 lg:w-80"
          />
        </motion.div>
      </motion.div>

      {/* Typewriter effect for BUILD AWESOME WITH POLLUX */}
      <div className="flex flex-col 2xl:flex-row items-center">
        <TypewriterEffect
          words={words}
          className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold mt-0 md:mt-6"
        />
        <AnimatedText />
      </div>

      {/* Headline: Decentralize the web */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#fff] mt-12">
        Your gateway to a hybrid Layer 1 blockchain designed for{" "}
      </h2>
      <AnimatedText2 />

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
        <button className="flex items-center justify-center text-lg font-semibold px-6 py-3 rounded-xl bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] transition-all w-full sm:w-auto">
          <MdOutlineRestartAlt className="mr-2" size={24} /> GET STARTED
        </button>

        <button className=" flex items-center justify-center text-lg border-[1px] border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black w-full sm:w-auto">
          <MdDocumentScanner className="mr-2" size={20} /> EXPLORE DOCS
        </button>
      </div>
    </section>
  );
}
