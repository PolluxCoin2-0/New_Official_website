"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
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
          <div className="w-full md:w-[40%] flex justify-center item-center md:justify-start pt-6 md:pt-0">
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
            <p className="pt-8 text-md md:text-lg font-medium text-[#a7a4a4] justify-content text-justify leading-relaxed">
              At PolluxChain, we are committed to building a cutting-edge
              blockchain ecosystem that empowers everyone. Our community is the
              heart of this mission, thriving on passion and collaboration.
              Whether you’re a developer, token holder, or blockchain
              enthusiast, you’ll find a home here. Join us to connect, innovate,
              and grow with a vibrant and inclusive community.
            </p>
          </div>
        </div>
      </Tilt>

      <div
        className="flex flex-col md:flex-row space-x-0 md:space-x-28 justify-between items-center mt-16 shadow-inner shadow-[#8AF969] rounded-2xl px-5 md:px-12 text-justify leading-relaxed"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
          background:
            "radial-gradient(circle at 50% 50%, rgba(138, 249, 105, 0.1), transparent)", // Fixed position
        }}
      >
        <div className="text-start w-full md:w-[60%] pt-4 pb-4 md:pt-8 md:pb-8">
          <p className="text-2xl md:text-3xl font-semibold">
            Become a PolluxChain Ambassador
          </p>
          <p className="text-md font-medium pt-4">
            Join the PolluxChain ecosystem as an ambassador and help shape the
            future of decentralized technology.
          </p>
          <p className="text-lg font-bold pt-2">Why Join?</p>

          <ul className="list-disc mt-4">
            <li className="text-md font-bold">
              Earn POX Rewards{" "}:{"  "}
              <span className="text-md font-normal text-[#a7a4a4]">
                Be rewarded for your efforts in content creation, community building, and spreading the word about PolluxChain.
              </span>{" "}
            </li>
            <li className="text-md font-bold pt-2">
              Exclusive Access{" "}:{"  "}
              <span className="text-md font-normal text-[#a7a4a4]">
                Collaborate directly with our team and gain insights into upcoming developments.
              </span>{" "}
            </li>
            <li className="text-md font-bold pt-2">
              Recognition & Growth{" "}:{"  "}
              <span className="text-md font-normal text-[#a7a4a4]">
                Build your presence in the blockchain space and grow with the PolluxChain community.
              </span>{" "}
            </li>
          </ul>

          <p className="text-lg font-semibold pt-4">Who Can Apply?</p>
          <p className="text-md font-medium text-[#a7a4a4] pt-2"> We are looking for creative minds, community enthusiasts, and blockchain advocates ready to make an impact.
          </p>

          <button
            className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
               hover:text-white dark:text-white  focus:outline-none 
              transform transition-transform duration-200 hover:scale-105"
          >
            <span
              className="text-white text-md md:text-lg relative text-nowrap px-2 md:px-6 py-2.5 transition-all ease-in duration-75 bg-[#181717] rounded-md group-hover:bg-opacity-0
              "
            >
              Apply to be an Ambassador today
            </span>
          </button>
        </div>

        <div className="flex justify-end pb-8 w-full md:w-[40%]">
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
        <p className="text-md md:text-xl font-normal mt-4 text-[#a7a4a4] ">
          Empowering the Future of Decentralization where Innovation
          <br /> Meets Community on the Blockchain Frontier.
        </p>

        <div className="rounded-2xl p-12">
          <div className="flex justify-center ">
            <div className="flex flex-col md:flex-row space-x-0 lg:space-x-2 justify-between items-center p-2 bg-[#0c0c0c] w-[80%] md:w-[100%] 2xl:w-[60%] rounded-2xl">
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
            <Link href="https://x.com/Polluxchain" target="_blank">
            <div className="flex justify-center items-center mt-16">
              <div className="flex justify-center items-center space-x-4 shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <BsTwitterX size={24} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
            </Link>
          )}

          {activeButton === "Telegram" && (

            <div className="flex flex-col md:flex-row justify-center space-x-4 items-center mt-8 md:mt-16">
              <Link href="https://t.me/polluxchainDAO" target="_blank">
              <div className="flex flex-row space-x-4 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <FaTelegramPlane size={32} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
              </Link>
              {/* <div className="flex flex-row space-x-2 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 mt-6 md:mt-0  rounded-xl transform transition-transform duration-200 hover:scale-105 ">
                <p>
                  <FaTelegramPlane size={24} />
                </p>
                <p className="text-xl font-medium">Pollux_Announcements</p>
              </div> */}
            </div>
          )}

          {activeButton === "Instagram" && (
            <Link href="https://www.instagram.com/polluxchainofficial/" target="_blank">
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-4 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <GrInstagram size={28} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
            </Link>
          )}

          {activeButton === "LinkedIn" && (
            <Link href="https://www.linkedin.com/company/polluxchain/" target="_blank">
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-4 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <FaLinkedin size={28} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
            </Link>
          )}

          {activeButton === "Medium" && (
            <Link href="https://medium.com/@PolluxDao" target="_blank">
            <div className="flex justify-center items-center mt-8 md:mt-16">
              <div className="flex flex-row space-x-4 items-center shadow-inner shadow-[#8AF969] bg-black p-4 pl-8 pr-8 rounded-xl transform transition-transform duration-200 hover:scale-105">
                <p>
                  <BsMedium size={32} />
                </p>
                <p className="text-xl font-medium">PolluxChain</p>
              </div>
            </div>
            </Link>
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
