"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import communeImg from "../../../public/Frame.svg";
import telegramImg from "../../../public/telegram.svg";
import twitterImg from "../../../public/twitter 1 1 (1).svg";
import linkedinImg from "../../../public/linkedin.svg";
import discordImg from "../../../public/discord.svg";
import instaImg from "../../../public/instagram.svg";
import mediumImg from "../../../public/medium 1.svg";
import ambasImg from "../../../public/Ambas.svg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Page = () => {
  const [bgPosition, setBgPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
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
          onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
          onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => {
          //   setIsHovered(false);
          //   setBgPosition({ x: 0, y: 0 }); // Reset background position on mouse leave
          // }}
          style={{
            boxShadow: isHovered
              ? "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "
              : "none",
            background: isHovered
              ? `radial-gradient(circle at ${bgPosition.x}% ${bgPosition.y}%, rgba(138, 249, 105, 0.2), transparent) `
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
              collaboration. Whether you&apos;sre a developer, a token holder, or
              simply a blockchain enthusiast, there&apos;s a place for you here. Join
              us to connect, learn, and grow within our vibrant and diverse
              community.
            </p>
          </div>
        </div>
      </Tilt>

      <div className="flex flex-col md:flex-row justify-between items-center rounded-2xl  px-12 mt-16">
        <div className="text-start ">
          <p className="text-2xl md:text-3xl font-medium ">
            Become a Pollux Ambassadar
          </p>
          <p className="text-lg font-medium pt-4">What You Get:</p>

          <ul className="list-disc  mt-4">
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
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
              transform transition-transform duration-200 hover:scale-105"
          >
            <span
              className="text-white text-xl relative text-nowrap px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] rounded-md group-hover:bg-opacity-0
              "
            >
              Become a Ambassador
            </span>
          </button>
        </div>

        <div className="flex justify-end">
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

      <div className="mt-12 md:mt-24 mb-16">
        <p className="text-3xl md:text-4xl font-medium">
          Welcome to our Community
        </p>
        <p className="text-md md:text-xl font-normal mt-4 text-[#a7a4a4]">
          Empowering the Future of Decentralization where Innovation Meets
          Community on the <br />
          Blockchain Frontier.
        </p>

        <div className="grid grid-cols-3 gap-y-8 gap-x-4 md:flex md:flex-row md:justify-evenly items-center mt-12">
          {[
            { img: telegramImg, label: "Telegram" },
            { img: twitterImg, label: "Twitter" },
            { img: linkedinImg, label: "LinkedIn" },
            { img: discordImg, label: "Discord" },
            { img: instaImg, label: "Instagram" },
            { img: mediumImg, label: "Medium" },
          ].map(({ img, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-white"
            >
              <div
                className="flex justify-center items-center bg-white bg-opacity-10 rounded-full 
                        w-12 h-12 md:w-20 md:h-20 p-3 md:p-5"
              >
                <Image
                  src={img}
                  alt={`${label} icon`}
                  width={0}
                  height={0}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <FaArrowUpRightFromSquare />
                <p className="text-sm md:text-lg font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 justify-center items-center mt-16">
          <div className="flex flex-row space-x-2 items-center border-[1px] border-[#8AF969] p-4 rounded-xl transform transition-transform duration-200 hover:scale-105">
            <p>
              <FaTelegramPlane size={24} />
            </p>
            <p className="text-xl font-semibold">OfficalPolluxChain</p>
          </div>

          <div className="flex flex-row space-x-2 items-center border-[1px] border-[#8AF969] p-4 rounded-xl transform transition-transform duration-200 hover:scale-105 mt-6 md:mt-0">
            <p>
              <FaTelegramPlane size={24} />
            </p>
            <p className="text-xl font-semibold">Pollux_Announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
