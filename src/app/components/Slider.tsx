"use client"; // Ensure this is at the top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import protectImg from "../../../public/protectBanner.png";
import createImg from "../../../public/createBanner.png";
import expandImg from "../../../public/expandBanner.png";
import optimizeImg from "../../../public/optimizeBanner.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBgPosition({ x, y });
    }
  };

  const slides = [
    {
      imageSrc: protectImg, // Replace with your image path
      title: "PROTECT",
      heading: "Security You Can Trust with PolluxChain!",
      description:
        "In the blockchain industry, performance is the difference between success and stagnation. Whether it’s transaction speed, energy efficiency, or network reliability.",
      buttonText: "More →",
      link: "https://medium.com/@PolluxDao/security-you-can-trust-with-polluxchain-b51da3cb0388",
    },
    {
      imageSrc: expandImg, // Replace with your image path
      title: "EXPAND",
      heading: "Scale Your Solutions to Global Heights!",
      description:
        "Scalability is the cornerstone of successful blockchain projects. As blockchain adoption grows, so does the need for networks that can handle increasing demands.",
      buttonText: "More →",
      link: "https://medium.com/@PolluxDao/expand-grow-without-limits-4e8bf5d97759",
    },
    {
      imageSrc: optimizeImg, // Replace with your image path
      title: "OPTIMIZE",
      heading: "Experience Next-Level Blockchain Performance!",
      description:
        "In the digital era, security is paramount. Blockchain promises decentralized trust, but achieving true security demands robust infrastructure. ",
      buttonText: "More →",
      link: "https://medium.com/@PolluxDao/experience-next-level-blockchain-performance-1fae5d621083",
    },
    {
      imageSrc: createImg, // Replace with your image path
      title: "CREATE",
      heading: "Unleash Your Creativity with PolluxChain!",
      description:
        "Innovation is the driving force behind groundbreaking solutions. For developers and businesses looking to make their mark in blockchain technology, ",
      buttonText: "More →",
      link: "https://medium.com/@PolluxDao/create-unlock-endless-possibilities-with-polluxchain-288f41ef59e0",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle next slide click
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle previous slide click
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide(); // Change to the next slide
    }, 5000); // Change slide every 2 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-16 mb-16 px-2 md:px-4 lg:px-6 xl:px-20 relative bg-gradient-to-r from-black/30 to-black/60  overflow-hidden shadow-lg pt-4 pb-4"
    >
      {/* Slider Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 border border-[#5a5858] w-full"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          boxShadow: isHovered
            ? "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "
            : "none",
          background: isHovered
            ? `radial-gradient(circle at ${bgPosition.x}% ${bgPosition.y}%, rgba(138, 249, 105, 0.1), transparent) `
            : "transparent",
        }}>
        {/* Image */}
        <div className="w-full lg:w-[40%] rounded-lg flex justify-center overflow-hidden shadow-lg">
          <Image
            src={slides[currentSlide].imageSrc}
            alt="Slide Image"
            width={500}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-[60%] p-0 md:p-6 text-white rounded-lg shadow-lg mt-12 mb-8 md:mt-6 lg:mt-0 ">
          {/* Navigation Arrows inside the border */}
          <div className="flex flex-row space-x-2 justify-end -mt-6">
            <button
              onClick={prevSlide}
              className="px-1 py-1 md:px-2 md:py-2 border-[1px] rounded-full border-white hover:border-green-400 hover:bg-[#8af969]  transition-all duration-300"
            >
              <span className="text-white hover:text-black text-2xl font-bold">
                <FaLongArrowAltLeft />
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="px-1 py-1 md:px-2 md:py-2 border-[1px] rounded-full border-white hover:border-green-400 hover:bg-[#8af969] transition-all duration-300"
            >
              <span className="text-white hover:text-black  text-2xl font-bold">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
          <p className="text-lg md:text-lg font-bold mb-4 text-nowrap inline-block bg-[#8af969] px-4 md:px-8 rounded-2xl py-2 text-black">{slides[currentSlide].title}</p>
          <h2 className="text-2xl font-bold mt-2 mb-4">{slides[currentSlide].heading}</h2>
          <p className="text-md md:text-lg text-[#a7a4a4] mb-6 text-justify leading-relaxed">{slides[currentSlide].description}</p>
          {/* <a
            href={slides[currentSlide].buttonLink}
            className="text-center text-lg font-medium bg-[#8af969] text-black px-12 rounded-2xl py-2 "
          >
            {slides[currentSlide].buttonText}
          </a> */}
          <div className="flex flex-row items-center pt-4">
        <a href={slides[currentSlide].link} className="text-[#8AF969] text-lg font-medium">
          Read More
        </a>
        <p>
          <MdOutlineKeyboardArrowRight size={24} color="#8AF969" />
        </p>
      </div>

        
        </div>
      </div>
    </div>
  );
};

export default Slider;
