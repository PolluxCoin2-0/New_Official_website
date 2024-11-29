"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import visionImg from "../../../public/visions.svg";
import missionImg from "../../../public/mission.svg";
import aboutBgImg from "../../../public/OBJECTS.svg";
import { BsTwitterX } from "react-icons/bs";
import ramImg from "../../../public/ram bhaiya (2).png";
import kamalImg from "../../../public/kamal bhaiya (2).png";
import priyanshImg from "../../../public/avatar1 (2).png";
import shivamImg from "../../../public/shivam.png";
import charilImg from "../../../public/charil.png";
import sukiratImg from "../../../public/sukirat.png";
import abhishakImg from "../../../public/abhishek.png"
import shubhamImg from "../../../public/shubham.png";
import durgesh from "../../../public/durgesh.png";
import sauravImg from "../../../public/saurav.png";
import balaImg from "../../../public/bala.png";
import ritikImg from "../../../public/hritik.png";
import JoinUs from "../components/ui/JoinUs";
// Define the TeamMember type
interface TeamMember {
  name: string;
  role: string;
  img: StaticImageData; // Updated type for images
  socialLink: string;
}

const teamMembers: TeamMember[] = [
  {
    name: " Ram Bilas Rana",
    role: "Founder",
    img: ramImg,
    socialLink: "https://x.com/DiamondRamRana1",
  },
  {
    name: " Kamal Kundal",
    role: "Co-Founder",
    img: kamalImg,
    socialLink: "https://x.com/kamalkundal91",
  },
  {
    name: "Priyanshu",
    role: "CTO",
    img: priyanshImg,
    socialLink: "https://x.com/Mundr1Priyanshu",
  },
  {
    name: "Shivam Singh",
    role: "Blockchain Developer",
    img: shivamImg,
    socialLink: "https://x.com/ShivamS96168034",
  },
  {
    name: "Charil Saini",
    role: "Blockchain Developer",
    img: charilImg,
    socialLink: "https://x.com/ethgodseye",
  },
  {
    name: "Sukirat Singh",
    role: "Blockchain Developer",
    img: sukiratImg,
    socialLink: "https://x.com/SinghSukirat",
  },
  {
    name: "Abhishek Harta",
    role: "UI/UX Designer",
    img: abhishakImg,
    socialLink: "https://www.linkedin.com/in/abhishak-harta-4a3a96252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Shubham Gupta",
    role: "Frontend Developer",
    img: shubhamImg,
    socialLink: "https://x.com/jointoshubham?t=Eg-K68yKWfJIclx8frcUIQ&s=09",
  },
  {
    name: "Durgesh Yadav",
    role: "Frontend Developer",
    img: durgesh,
    socialLink: "https://x.com/durgesh_yadav21?t=ZR9rJohqnxXZaOBP2IaQKA&s=09",
  },
  {
    name: "Saurabh Singh",
    role: "App Developer",
    img: sauravImg,
    socialLink: "https://www.linkedin.com/in/saurav-kumar-174a4a174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Chandra Shekhar Bala",
    role: "App Developer",
    img: balaImg,
    socialLink: "https://x.com/chandrastwt",
  },
  {
    name: "Hritik Raj",
    role: "Devops Engineer",
    img: ritikImg,
    socialLink: "https://x.com/rhrits",
  },
];

const page = () => {
  const TeamMemberCard: React.FC<TeamMember> = ({
    name,
    role,
    img,
    socialLink,
  }) => (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-0 lg:space-x-4 rounded-lg w-full h-full pt-4   ">
      <div>
        <p className="rounded-full w-28 h-28 text-center  p-6">
          <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }}
            className="rounded-full"
          />
        </p>
      </div>

      <div className="flex flex-col justify-center md:justify-start ">
        <p className="text-center md:text-start text-lg font-medium pt-1 md:pt-0 text-nowrap">
          {name}
        </p>
        <div className="flex flex-row space-x-4 md:space-x-2 lg:space-x-4 items-center pt-0 md:pt-2 ">
          <p className=" text-md text-[#a7a4a4] text-nowrap">{role}</p>
          {/* <p className="pt-1 text-[#a7a4a4]">{position}</p> */}
          <a
            href={socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <div className=" min-h-screen px-2 md:px-4 lg:px-6 xl:px-44 mt-32  ">
      {/* About us  */}
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-3xl md:text-4xl font-semibold ">About PolluxChain</p>
          <p className="text-[#a7a4a4] mt-5 text-md md:text-lg font-medium  leading-relaxed">
          At PolluxChain, we are committed to revolutionizing the blockchain space with <br/>cutting-edge 
technology and innovative solutions. Our hybrid Layer 1 ecosystem <br/>is designed to empower users 
and developers, offering unparalleled scalability, efficiency, <br/>and adaptability.
PolluxChain drives a shift towards a decentralized future, where innovation <br/>and community collaboration 
fuel growth and opportunities for all.

          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScf1JyE_H4GUiJNSBvdcK4-7xDYB_c1GaMbsvSkkXZJR8rDBQ/viewform">
          <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] hover:text-white dark:text-white focus:outline-none ">
            <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
              Contact Us
            </span>
          </button>
          </Link>
        </div>

        <div className="hidden lg:block -mt-32">
          <Image
            src={aboutBgImg}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "90%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[70%]" // Use Tailwind's responsive width utilities
          />
        </div>
      </div>

      {/* Mission, Vision */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 w-full mt-16">
        <div className="w-full md:w-[50%] shadow-inner shadow-[#8af969] rounded-2xl p-6 transform transition-transform duration-200 hover:scale-105">
          <div className="flex flex-row justify-start space-x-2 items-center">
            <Image
              src={visionImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "5%" }}
              className="rounded-2xl"
            />

            <p className="text-2xl font-semibold">Our Vision</p>
          </div>
          <p className="text-[#a7a4a4] mt-5 text-md font-medium text-justify leading-loose">
          PolluxChain envisions itself as a pioneering hybrid Layer 1 blockchain ecosystem,
shaping the future of decentralized innovation and empowering self-governing communities.
Our core mission centers around enabling efficient, scalable, and inclusive blockchain solutions 
that drive real-world impact.{" "} <br/>
 Through advanced consensus mechanisms and a seamless ecosystem, 
we aim to foster equitable participation, facilitate technological excellence, and redefine the 
possibilities of blockchain for the modern world.
          </p>
        </div>

        <div className="w-full md:w-[50%] shadow-inner shadow-[#8af969] rounded-2xl p-6 transform transition-transform duration-200 hover:scale-105 mt-10 md:mt-0">
          <div className="flex flex-row justify-start space-x-2 items-center">
            <Image
              src={missionImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "5%" }}
              className="rounded-2xl"
            />

            <p className="text-2xl font-semibold">Our Mission</p>
          </div>
          <p className="text-[#a7a4a4] mt-5 text-md font-medium text-justify leading-loose">
          At PolluxChain, our mission is to build a robust and dynamic hybrid Layer 1 blockchain ecosystem that
empowers decentralized innovation and redefines the future of finance. We are dedicated to creating
opportunities for individuals, organizations, and communities by enabling efficient, secure, and scalable 
blockchain solutions.
{" "}<br/>
Our goal is to unlock transformative potential through innovative platforms that drive transparency,
financial inclusion, and technological progress, fostering a decentralized economy that empowers users 
and builds a sustainable digital future.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mt-16 md:mt-24">
        <p className="text-xl md:text-4xl font-semibold ">
          Meet the Visionaries Driving PolluxChain Forward
        </p>
        {/* <div className="w-[80%] h-10 md:h-44 bg-green-600 rounded-2xl bg-gradient-to-b from-[#1C5A04] to-[#68A541] flex flex-row justify-center mx-auto mt-8"></div> */}

        {/* <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-16 lg:space-x-24 w-full mt-0 md:mt-12">
          <div
            className="flex flex-col items-center w-full md:w-[40%] lg:w-[30%] xl:w-[20%]   mt-16 md:mt-0  rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) ",
            }}
          >
            <p className="bg-opacity-10 rounded-full w-40 h-40 text-center">
              <Image
                src={avatar11}
                alt="banner-image"
                width={0}
                height={0}
                style={{ width: "100%" }}
                className="rounded-2xl"
              />
            </p>

            <p className="pt-5 text-xl md:text-2xl font-semibold">
              Ram Bilas Rana
            </p>
            <p className="pt-1 text-[#a7a4a4]">Founder</p>
            <Link href="https://x.com/DiamondRamRana1"
             target="_blank"
             rel="noopener noreferrer">
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
            </Link>
          </div>

          <div
            className="flex flex-col items-center w-full md:w-[40%] lg:w-[30%] xl:w-[20%] mt-8 md:mt-0 p-4 rounded-4xl  rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105"
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) ",
            }}
          >
            <p className=" bg-opacity-10 rounded-full w-40 h-40 text-center ">
              <Image
                src={avatar12}
                alt="banner-image"
                width={0}
                height={0}
                style={{ width: "100%" }}
                className="rounded-2xl"
              />
            </p>
            <p className="pt-5 text-xl md:text-2xl font-semibold">
              Kamal Kundal
            </p>
            <p className="pt-1 text-[#a7a4a4]">Co-Founder</p>
            <Link href="https://x.com/kamalkundal91"
             target="_blank"
             rel="noopener noreferrer">
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
            </Link>
          </div>
        </div> */}

        <div className="w-[80%] mt-12  mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-x-0 md:gao-x-4 lg:gap-x-0 gap-y-0 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center ">
                <TeamMemberCard
                  img={member.img}
                  name={member.name}
                  role={member.role}
                  socialLink={member.socialLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to connect */}
      <div className="mt-24">
        <JoinUs />
      </div>
    </div>
  );
};

export default page;
