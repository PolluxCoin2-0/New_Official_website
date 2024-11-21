"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import communeImg from "../../../public/community.png";
import ambasImg from "../../../public/Ambas.svg";
import JoinUs from "../components/ui/JoinUs";
import Newsletter from "../components/ui/Newsletter";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";

const Page = () => {
  const [bgPosition, setBgPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("Twitter"); // Set default to Twitter

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

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
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-44 mt-32 lg:mt-48">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1400}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.04}
      >
        <div
          className="flex flex-col md:flex-row justify-between items-center w-full px-4 lg:px-32 pt-0 md:pt-12 pb-12 rounded-2xl "
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
          <div className="w-full md:w-[40%] flex justify-center item-center md:justify-start">
            <Image
              src={communeImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "60%" }}
              className="rounded-2xl"
            />
          </div>

          <div className="w-full md:w-[60%] text-start">
            <p className="text-2xl md:text-4xl font-medium mt-6 md:mt-0">
              Join the Community
            </p>
            <p className="pt-4 text-md md:text-lg font-medium text-[#a7a4a4] justify-content">
              At Pollux, we believe in creating a sustainable and innovative
              blockchain ecosystem that benefits everyone. Our community is the
              backbone of this mission, driving forward with passion and
              collaboration. Whether you&apos;re a developer, a token holder, or
              simply a blockchain enthusiast, there&apos;s a place for you here.
              Join us to connect, learn, and grow within our vibrant and diverse
              community.
            </p>
          </div>
        </div>
      </Tilt>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 shadow-inner shadow-[#8AF969] rounded-2xl px-20 md:px-12 "
      
      style={{
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
        background: "radial-gradient(circle at 50% 50%, rgba(138, 249, 105, 0.1), transparent)", // Fixed position
      }}>
        <div className="text-start">
          <p className="text-2xl md:text-3xl font-medium pt-4 pb-4">
            Become a Pollux Ambassador
          </p>
          <p className="text-lg font-medium pt-4">What You Get:</p>

          <ul className="list-disc mt-4">
            <li className="text-lg font-bold">
              Earn Rewards:
              <span className="text-md font-normal text-[#a7a4a4]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Delectus, quaerat!
              </span>{" "}
            </li>
            <li className="text-lg font-bold">
              Earn Rewards:
              <span className="text-md font-normal text-[#a7a4a4]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Delectus, quaerat!
              </span>{" "}
            </li>
            <li className="text-lg font-bold">
              Earn Rewards:
              <span className="text-md font-normal text-[#a7a4a4]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Delectus, quaerat!
              </span>{" "}
            </li>
          </ul>

          <button
            className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
              transform transition-transform duration-200 hover:scale-105"
          >
            <span
              className="text-white text-md md:text-xl relative text-nowrap px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] rounded-md group-hover:bg-opacity-0
              "
            >
              Become a Ambassador
            </span>
          </button>
        </div>

        <div className="flex justify-end pb-8">
          <Image
            src={ambasImg}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }}
            className="rounded-2xl "
          />
        </div>
      </div>

      <div className="mt-12 md:mt-24 mb-6 ">
        <p className="text-3xl md:text-4xl font-medium  rounded-2xl">
          Welcome to our Community
        </p>
        <p className="text-md md:text-xl font-normal mt-4 text-[#a7a4a4]">
          Empowering the Future of Decentralization where Innovation<br /> Meets
          Community on the 
          Blockchain Frontier.
        </p>

        <div className="rounded-2xl p-12">
          <div className="flex justify-center ">
            <div className="flex flex-col md:flex-row space-x-0 lg:space-x-2 justify-between items-center p-2 bg-[#0c0c0c] w-[80%] md:w-[100%] lg:w-[60%] rounded-2xl">
              {["Twitter", "Telegram", "Instagram", "LinkedIn", "Medium"].map(
                (button) => (
                  <p
                    key={button}
                    onClick={() => handleButtonClick(button)}
                    className={`text-lg font-medium px-12 md:px-6 lg:px-8 py-3 rounded-lg cursor-pointer ${
                      activeButton === button
                        ? "bg-gradient-to-l from-[#1C5A04] to-[#68A541] text-white shadow-sm shadow-[#68A541]"
                        : "hover:bg-[#68A541] hover:shadow-sm hover:shadow-[#68A541]"
                    }`}
                  >
                    {button}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Conditionally Render Social Media Content */}
          {activeButton === "Twitter" && (
            <div className="flex justify-center items-center mt-16">
              <div className="flex justify-center items-center space-x-6 shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <BsTwitterX size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
          )}

          {activeButton === "Telegram" && (
            <div className="flex flex-col md:flex-row justify-center space-x-4 items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <FaTelegramPlane size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
              <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 mt-6 md:mt-0  rounded-xl transform transition-transform duration-200 hover:scale-105 ">
                <p>
                  <FaTelegramPlane size={24} />
                </p>
                <p className="text-xl font-medium">Pollux_Announcements</p>
              </div>
            </div>
          )}

          {activeButton === "Instagram" && (
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <GrInstagram size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
          )}

          {activeButton === "LinkedIn" && (
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <FaLinkedin size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
          )}

          {activeButton === "Medium" && (
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <BsMedium size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter */}
      <div className=" rounded-2xl">
        <Newsletter />
      </div>

      {/* Join us Page */}
      <div>
        <JoinUs />
      </div>
    </div>
  );
};

export default Page;
