"use client"; // Ensure this is at the top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

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
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainable",
      heading: "What To Expect From The Pollux Mainnet",
      description:
        "The Pollux Ecosystem is on the cusp of a significant milestone as Pollux Mainnet Beta goes live. This event marks a crucial step in the evolution of Pollux vision.",
      buttonText: "More →",
      buttonLink: "/learn-more",
    },
    {
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainable",
      heading: "The Road to Pollux's Mainnet",
      description:
        "As Pollux Mainnet Beta progresses, we will see the emergence of new decentralized applications that align with the sustainable ethos of Pollux.",
      buttonText: "More →",
      buttonLink: "/explore-more",
    },
    {
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainable",
      heading: "Building a Green Future with Pollux",
      description:
        "With Pollux focus on sustainability, the upcoming mainnet will pave the way for a decentralized future with a positive environmental impact.",
      buttonText: "More →",
      buttonLink: "/join-us",
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
    }, 2000); // Change slide every 2 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-24 mb-24 px-2 md:px-4 lg:px-6 xl:px-40 relative bg-gradient-to-r from-black/30 to-black/60  overflow-hidden shadow-lg pt-4 pb-4"
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
              className="px-1 py-1 md:px-2 md:py-2 border-[1px] rounded-full border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
            >
              <span className="text-white text-2xl font-bold">
                <FaLongArrowAltLeft />
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="px-1 py-1 md:px-2 md:py-2 border-[1px] rounded-full border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
            >
              <span className="text-white text-2xl font-bold">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
          {/* <p className="text-md md:text-lg font-medium mb-4 text-nowrap">{slides[currentSlide].title}</p> */}
          <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].heading}</h2>
          <p className="text-md md:text-lg text-[#a7a4a4] mb-6">{slides[currentSlide].description}</p>
          <a
            href={slides[currentSlide].buttonLink}
            className="text-center text-lg font-medium bg-[#8af969] text-black px-12 rounded-2xl py-2 "
          >
            {slides[currentSlide].buttonText}
          </a>

        
        </div>
      </div>
    </div>
  );
};

export default Slider;
