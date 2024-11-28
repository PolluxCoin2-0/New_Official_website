"use client";



import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import visionImg from "../../../public/visions.svg";
import missionImg from "../../../public/mission.svg";
import aboutBgImg from "../../../public/OBJECTS.svg";
import { BsTwitterX } from "react-icons/bs";
import JoinUs from "../components/ui/JoinUs";
import avatar1 from "../../../public/avatar1 (2).png";
import avatar2 from "../../../public/avatar10.png";
import avatar3 from "../../../public/avatar1.png";
import avatar4 from "../../../public/avatar4.png";
import avatar5 from "../../../public/avatar5.png";
import avatar6 from "../../../public/avatar4.png";
import avatar7 from "../../../public/avatar7 (2).png";
import avatar8 from "../../../public/avatar6.png";
import avatar9 from "../../../public/avatar9.png"
import avatar10 from "../../../public/avatar9 (2).png";
import avatar11 from "../../../public/avatar7.png"
import avatar12 from "../../../public/avatar12.png";
// Define the TeamMember type
interface TeamMember {
  name: string;
  role: string;
  img: StaticImageData; // Updated type for images
}

const teamMembers: TeamMember[] = [
  {
    name: "Priyanshu",
    role: "CTO",
   
    img: avatar1,
  },
  {
    name: "Shivam Singh",
    role: "Blockchain Developer",
    
    img: avatar2,
  },
  { name: "Charil Saini", role: "Blockchain Developer", img: avatar3, },
  { name: "Sukirat", role: "Blockchain Developer",  img: avatar6, },
  { name: "Abhishek Harta", role: "UI/UX Designer",   img: avatar9, },
  { name: "Shubham Gupta", role: "Frontend Developer",  img: avatar8,},
  { name: "Durgesh Yadav", role: "Frontend Developer",   img: avatar7, },
  { name: "Saurabh Singh", role: "App Developer",  img: avatar10, },
  { name: "Chandra Shekhar Bala", role: "App Developer",  img: avatar5, },
  { name: "Hritik Raj", role: "Devops Engineer",   img: avatar4,},
];

const page = () => {
  
  const TeamMemberCard: React.FC<TeamMember> = ({ name, role,  img}) => (
    <div className="flex flex-col md:flex-row items-center space-x-4 rounded-lg w-full h-full pt-4   ">
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

      <div className="flex flex-col justify-start ">
      <p className="text-start text-lg font-medium ">{name}</p>
      <div className="flex flex-row space-x-4 items-center pt-2 ">
      <p className=" text-md text-[#a7a4a4]">{role}</p>
      {/* <p className="pt-1 text-[#a7a4a4]">{position}</p> */}
      <p className="">
        <BsTwitterX />
      </p>
      </div>
      </div>
    </div>
  );
  return (
    <div className=" min-h-screen px-2 md:px-4 lg:px-6 xl:px-44 mt-32  ">
      {/* About us  */}
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-3xl md:text-4xl font-semibold ">About Pollux</p>
          <p className="text-[#a7a4a4] mt-5 text-md md:text-lg font-medium text-justify leading-relaxed">
            At Pollux, we are dedicated to leveraging blockchain technology to
            build a sustainable <br />
            future. Our ecosystem represents a paradigm shift from a for-profit
            economy to a for- <br />
            benefit economy, where sustainable practices are at the forefront of
            innovation.
          </p>
          <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] hover:text-white dark:text-white focus:outline-none ">
            <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
              Contact Us
            </span>
          </button>
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
          <p className="text-[#a7a4a4] mt-5 text-md font-medium text-justify leading-relaxed">
            PolluxChain envisions itself as a leading blockchain ecosystem for
            the 5th Industrial Revolution (5IR), fostering and incentivizing
            self-governing DAOs towards sustainable development. Our core
            business concept revolves around the for-benefit paradigm,
            encapsulated in our proof-of-benefit model. This model promotes
            sustainable practices that benefit the environment, ensuring that
            business entities not only focus on profitability but also integrate
            sustainability into their fundamental operations.
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
          <p className="text-[#a7a4a4] mt-5 text-md font-medium text-justify leading-relaxed">
            PolluxChain envisions itself as a leading blockchain ecosystem for
            the 5th Industrial Revolution (5IR), fostering and incentivizing
            self-governing DAOs towards sustainable development. Our core
            business concept revolves around the for-benefit paradigm,
            encapsulated in our proof-of-benefit model. This model promotes
            sustainable practices that benefit the environment, ensuring that
            business entities not only focus on profitability but also integrate
            sustainability into their fundamental operations.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mt-16 md:mt-24">
        <p className="text-2xl md:text-4xl font-semibold ">
          Meet the Visionaries Driving PolluxChain Forward
        </p>
        {/* <div className="w-[80%] h-10 md:h-44 bg-green-600 rounded-2xl bg-gradient-to-b from-[#1C5A04] to-[#68A541] flex flex-row justify-center mx-auto mt-8"></div> */}

        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-16 lg:space-x-24 w-full mt-12">
          <div className="flex flex-col items-center w-full md:w-[40%] lg:w-[30%] xl:w-[20%]   mt-16 md:mt-0  rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105"
          style={{
            boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>
            <p className="bg-opacity-10 rounded-full w-40 h-40 text-center"
             >
            <Image
              src={avatar11}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "100%" }}
              className="rounded-2xl"
            />
            </p>
            

           
            <p className="pt-5 text-2xl font-semibold">Ram Bilas Rana</p>
            <p className="pt-1 text-[#a7a4a4]">Founder</p>
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
            
          </div>

          <div className="flex flex-col items-center w-full md:w-[40%] lg:w-[30%] xl:w-[20%] mt-8 md:mt-0 p-4 rounded-4xl  rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105"
          style={{
            boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>
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
            <p className="pt-5 text-2xl font-semibold">Kamal Kundal</p>
            <p className="pt-1 text-[#a7a4a4]">Co-Founder</p>
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
          </div>
        </div>

        <div className="w-[80%] mt-24 mx-auto">
          <p className="text-center text-3xl md:text-4xl font-semibold mb-20">
            Our Expert Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-x-0 gap-y-0 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TeamMemberCard
                img={member.img}
                  name={member.name}
                  role={member.role}
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
