"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import banner1Img from "../../../public/banner.jpg";
import banner2Img from "../../../public/banner 2.jpg";
import createBannerImg from "../../../public/createBanner.png";
import optimizeBannerImg from "../../../public/optimizeBanner.png";
import protectBannerImg from "../../../public/protectBanner.png";
import expandBannerImg from "../../../public/expandBanner.png";
import Image, { StaticImageData } from "next/image"; 
import JoinUs from "../components/ui/JoinUs";
import { SiEventstore } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



// Blogs Data
const blogs = [
  {
    image: protectBannerImg,
    title: "Security You Can Trust with PolluxChain!",
    description:
      "In the blockchain industry, performance is the difference between success and stagnation. Whether it’s transaction speed, energy efficiency, or network reliability. PolluxChain excels in delivering optimal performance to developers and users alike.",
    link: "https://medium.com/@PolluxDao/security-you-can-trust-with-polluxchain-b51da3cb0388",
  },
  {
    image: expandBannerImg,
    title: "Scale Your Solutions to Global Heights!",
    description:
      "Scalability is the cornerstone of successful blockchain projects. As blockchain adoption grows, so does the need for networks that can handle increasing demands. PolluxChain is designed to scale with your vision, ensuring seamless growth without compromising performance.",
 
    link: "https://medium.com/@PolluxDao/expand-grow-without-limits-4e8bf5d97759",
  },
  {
    image: optimizeBannerImg,
    title: "Experience Next-Level Blockchain Performance!",
    description:
      "In the digital era, security is paramount. Blockchain promises decentralized trust, but achieving true security demands robust infrastructure. At PolluxChain, we prioritize safety and confidence in every layer of our blockchain, ensuring developers and users alike can interact without fear of vulnerabilities.",
    
    link: "https://medium.com/@PolluxDao/experience-next-level-blockchain-performance-1fae5d621083",
  },
  {
    image: createBannerImg,
    title: "Unleash Your Creativity with PolluxChain!",
    description:
      "Innovation is the driving force behind groundbreaking solutions. For developers and businesses looking to make their mark in blockchain technology, PolluxChain offers a hybrid Layer 1 platform designed to unleash creativity.",
   
    link: "https://medium.com/@PolluxDao/create-unlock-endless-possibilities-with-polluxchain-288f41ef59e0",
  },
];

const events = [
  {
    image: banner1Img,
    title: "Twitter Space AMA",
    description:
      "Join our founders for a special AMA on Nov 14, 10 PM IST, as we gear up for our highly anticipated Mainnet launch! 🌐",
    dateStart: "14/11/2024",
    dateEnd: "14/11/2024",
    category: "Twitter Space",
    link: "/event/ama",
  },
  {
    image: banner1Img,
    title: "Mainnet Launch Celebration",
    description:
      "We are gearing up for our highly anticipated Mainnet launch and would love for you to join us in celebrating this exciting milestone.",
    dateStart: "15/11/2024",
    dateEnd: "16/11/2024",
    category: "Launch Event",
    link: "/event/mainnet-launch",
  },
];

interface CardData {
  image: string | StaticImageData; // Updated to accept both types
  title: string;
  description: string;
  link: string;
  category?: string; // Optional category for events
  dateStart?: string; // Optional start date for events
  dateEnd?: string; // Optional end date for events
}


// Function to render cards (blogs or events)
const renderCards = (data: CardData[]) => {
  return data.map((card, index) => (
    <div
      key={index}
      className="w-full md:w-[50%] lg:w-[40%] xl:w-[25%] bg-[#0e0d0d] rounded-3xl h-auto p-4 transform transition-transform duration-200 hover:scale-105"
    >
      <div className="w-full ">
        <Image
          src={card.image}
          alt="card-image"
          width={0}
          height={0}
          style={{ width: "100%" }}
          className="rounded-3xl w-full md:w-[70%]"
        />
      </div>
      <div className="flex flex-col justify-between">
      <p className="text-start pt-6 text-xl font-semibold">{card.title}</p>
      <p className="text-start text-[#a7a4a4] pt-4 leading-7 truncate-description">{card.description}</p>

   
      {card.category && (
        <div className="flex flex-row items-center pt-2 space-x-2">
          <p>
            <RiSpaceShipFill color="#a7a4a4" />
          </p>
          <p className="text-[#a7a4a4]">{card.category}</p>
        </div>
      )}

      <div className="flex flex-row items-center pt-4">
        <a href={card.link} className="text-[#8AF969] text-md font-medium">
          Read More
        </a>
        <p>
          <MdOutlineKeyboardArrowRight size={24} color="#8AF969" />
        </p>
      </div>
      </div>
    </div>
  ));
};




const Page = () => {
  const [bgPosition, setBgPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBgPosition({ x, y });
    }
  };

  return (
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-44 mt-24 lg:mt-32 xl:mt-48">
      <div className="flex flex-row space-x-2 md:space-x-4 items-start md:items-center">
        <p>
          <SiEventstore size={32} />
        </p>
        <p className="text-xl md:text-3xl font-semibold">
          Latest News and Events
        </p>
      </div>

      {/* Latest News and Events */}
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1400}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.04}
      >
        <div
          className="flex flex-col md:flex-row justify-start items-center w-full mt-8 md:mt-16 p-2 md:p-4 lg:p-10 "
          onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
            handleMouseMove(e)
          }
          onMouseEnter={() => setIsHovered(true)}
          style={{
            boxShadow: isHovered
              ? "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "
              : "none",
            background: isHovered
              ? `radial-gradient(circle at ${bgPosition.x}% ${bgPosition.y}%, rgba(138, 249, 105, 0.1), transparent) `
              : "transparent",
          }}
        >
          <div className="w-full md:w-[30%] flex justify-center md:justify-normal">
            <Image
              src={banner2Img}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "80%" }} // Set default width to 100% for mobile
              className="rounded-2xl w-full md:w-[70%]" // Use Tailwind's responsive width utilities
            />
          </div>

          <div className="w-full md:w-[70%] text-start mt-6 md:mt-0">
            <p className="text-2xl md:text-3xl font-semibold">
              Journey Of Pollux
            </p>
            <p className="text-[#a7a4a4] pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              saepe, voluptatum voluptatibus fugit, voluptatum voluptatibus
              fugit, consequatur labore sapiente dicta cum ipsa nisi nobis
              numquam nisi nobis numquam corporis, iste consequuntur.
            </p>

            <p className="text-[#a7a4a4] pt-2">
              We will be focusing on the journey of 5ire, our commitment to
              sustainability, sustainability, support for builders, and much
              more.{" "}
            </p>

            <div className="flex flex-row items-center pt-4 space-x-2">
              <p>
                <FaCalendarAlt color="#a7a4a4" />
              </p>
              <p className="text-[#a7a4a4]">14/11/2024</p>
              <p>
                <FaLongArrowAltRight color="#a7a4a4" />
              </p>
              <p className="text-[#a7a4a4]">15/11/2023</p>
            </div>

            <div className="flex flex-row items-center pt-2 space-x-2">
              <p>
                <RiSpaceShipFill color="#a7a4a4" />
              </p>
              <p className="text-[#a7a4a4]">Twitter Space</p>
            </div>

            <div className="flex flex-row items-center pt-2 space-x-2">
              <p className="text-[#8AF969]">Read More</p>
              <p>
                <MdOutlineKeyboardArrowRight size={24} color="#8AF969" />
              </p>
            </div>
          </div>
        </div>
      </Tilt>


       {/* Blogs Section */}
       <p className="mt-16 md:mt-20 lg:mt-32 mb-8 md:mb-16 text-start text-4xl font-semibold">
        Blogs
      </p>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 lg:space-x-12 w-full">
        {renderCards(blogs)}
      </div>

    {/* Events Section */}
    <p className="mt-16 md:mt-20 lg:mt-32 mb-8 md:mb-16 text-start text-4xl font-semibold">
        Events
      </p>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 lg:space-x-12 w-full">
        {renderCards(events)}
      </div>

      {/* Ready for the next step */}
      <div className="mt-24">
        <JoinUs />
      </div>
    </div>
  );
};

export default Page;
