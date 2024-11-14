"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import banner1Img from "../../../public/banner.jpg";
import banner2Img from "../../../public/banner 2.jpg";
import Image from "next/image";
import JoinUs from "../components/ui/JoinUs";
import { SiEventstore } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-24 lg:mt-32 xl:mt-48">
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

      {/* Events Card */}
      <p className="mt-16 md:mt-20 lg:mt-32 mb-8 md:mb-16 text-start text-4xl font-semibold">
        Events
      </p>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 lg:space-x-12 w-full ">
        <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[25%] bg-[#0e0d0d] rounded-3xl h-auto p-4">
          <div className="w-full">
            <Image
              src={banner1Img}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "100%" }} // Set default width to 100% for mobile
              className="rounded-3xl w-full md:w-[70%]" // Use Tailwind's responsive width utilities
            />
          </div>
          <p className="text-start pt-6 text-xl font-semibold">Twitter Space</p>
          <p className="text-start text-[#a7a4a4] pt-4 leading-6">
            🎙️We are excited to have our founders, xyz x and our CMO , join us
            for a special AMA on Nov 14, 10 PM IST, as we gear up for our highly
            anticipated Mainnet launch! 🌐
          </p>
          <p className="text-start text-[#a7a4a4] pt-4 leading-6">
            We will be focusing on the journey of 5ire, our commitment to
            sustainability, support for builders, and much more.
          </p>

          <div className="flex flex-row items-center pt-4 ">
            <p className="text-[#8AF969] text-md font-medium">Read More</p>
            <p>
              <MdOutlineKeyboardArrowRight size={24} color="#8AF969" />
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[25%] bg-[#0e0d0d] rounded-3xl h-auto p-4 mt-8 md:mt-0">
          <div className="w-full">
            <Image
              src={banner1Img}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "100%" }} // Set default width to 100% for mobile
              className="rounded-3xl w-full md:w-[70%]" // Use Tailwind's responsive width utilities
            />
          </div>
          <p className="text-start pt-6 text-xl font-semibold">Twitter Space</p>
          <p className="text-start text-[#a7a4a4] pt-4 leading-6">
            🎙️We are excited to have our founders, xyz x and our CMO , join us
            for a special AMA on Nov 14, 10 PM IST, as we gear up for our highly
            anticipated Mainnet launch! 🌐
          </p>
          <p className="text-start text-[#a7a4a4] pt-4 leading-6">
            We will be focusing on the journey of 5ire, our commitment to
            sustainability, support for builders, and much more.
          </p>

          <div className="flex flex-row items-center pt-4 ">
            <p className="text-[#8AF969] text-md font-medium">Read More</p>
            <p>
              <MdOutlineKeyboardArrowRight size={24} color="#8AF969" />
            </p>
          </div>
        </div>
      </div>

      {/* Ready for the next step */}
      <div className="mt-24">
        <JoinUs />
      </div>
    </div>
  );
};

export default Page;
