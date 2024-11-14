


"use client"; // Ensure this is at the top

import React, { useState } from "react";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Slider = () => {
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

  

  return (
    <div className="px-2 md:px-4 lg:px-6 xl:px-40 relative bg-gradient-to-r from-black/30 to-black/60  rounded-xl overflow-hidden shadow-lg">
      {/* Slider Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-8 border border-white rounded-2xl w-full ">
        {/* Image */}
        <div className="w-full lg:w-[40%] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={slides[currentSlide].imageSrc}
            alt="Slide Image"
            width={500}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-[60%] p-6 text-white rounded-lg shadow-lg">
          {/* Navigation Arrows inside the border */}
          <div className="flex flex-row space-x-2 justify-end -mt-6">
          <button
            onClick={prevSlide}
            className="px-2 py-2 border-[1px]  rounded-full border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
          >
            <span className="text-white text-2xl font-bold"><FaLongArrowAltLeft /></span>
          </button>
          <button
            onClick={nextSlide}
            className="px-2 py-2 border-[1px] rounded-full border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
          >
            <span className="text-white text-2xl font-bold"><FaLongArrowAltRight /></span>
          </button>
        </div>
          <p className=" text-lg font-medium mb-4">{slides[currentSlide].title}</p>
          <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].heading}</h2>
          <p className="text-lg mb-6">{slides[currentSlide].description}</p>
          <a
            href={slides[currentSlide].buttonLink}
            className="inline-block py-1 px-6 border-2 text-lg font-medium border-[#8AF969] text-[#8AF969] hover:bg-green-400 hover:text-black transition duration-300 rounded-full"
          >
            {slides[currentSlide].buttonText}
          </a>
        </div>
       
      </div>

    
    </div>
  );
};

export default Slider;
