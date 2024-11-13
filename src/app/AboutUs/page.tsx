"use client";

// Define the TeamMember type
interface TeamMember {
  name: string;
  role: string;
  position: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ram Bilash Rana",
    role: "Chief Executive Officer",
    position: "Founder",
  },
  {
    name: "Kamal Kundal",
    role: "Chief Executive Officer",
    position: "Co-Founder",
  },
  { name: "John Doe", role: "Chief Technology Officer", position: "CTO" },
  { name: "Jane Smith", role: "Chief Marketing Officer", position: "CMO" },
  { name: "Mike Jordan", role: "Chief Operations Officer", position: "COO" },
  { name: "Sara Lee", role: "Chief Financial Officer", position: "CFO" },
  { name: "John Doe", role: "Chief Technology Officer", position: "CTO" },
  { name: "Jane Smith", role: "Chief Marketing Officer", position: "CMO" },
  { name: "Mike Jordan", role: "Chief Operations Officer", position: "COO" },
  { name: "Sara Lee", role: "Chief Financial Officer", position: "CFO" },

 
];


import React from "react";
import Image from "next/image";
import visionImg from "../../../public/visions.svg";
import missionImg from "../../../public/mission.svg";
import { BsTwitterX } from "react-icons/bs";
import JoinUs from "../components/ui/JoinUs";

const page = () => {
  const TeamMemberCard: React.FC<TeamMember> = ({ name, role, position }) => (
    <div className="flex flex-col items-center">
      <p className="bg-white bg-opacity-20 rounded-full w-24 h-24 text-center"></p>
      <p className="pt-4 text-xl font-semibold">{name}</p>
      <p className="pt-1 text-[#a7a4a4]">{role}</p>
      <p className="pt-1 text-[#a7a4a4]">{position}</p>
      <p className="pt-2">
        <BsTwitterX />
      </p>
    </div>
  );
  return (
    <div className=" min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-32  ">
      {/* About us  */}
      <div>
        <p className="text-4xl font-semibold ">About Pollux</p>
        <p className="text-[#a7a4a4] mt-5 text-lg font-medium">
          At Pollux, , we are dedicated to leveraging blockchain technology to
          build a <br />
          sustainable future. Our ecosystem represents a paradigm shift from a
          for-profit <br />
          economy to a for-benefit economy, where sustainable practices are at
          the forefront <br />
          of innovation.
        </p>
        <button
          className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Contact Us
          </span>
        </button>
      </div>

      {/* Mission, Vision */}
      <div className="flex flex-row space-x-10 w-full mt-16">
        <div className="w-[50%] border-[1px] rounded-2xl p-6 transform transition-transform duration-200 hover:scale-105">
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
          <p className="text-[#a7a4a4] mt-5 text-md font-medium">
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

        <div className="w-[50%] border-[1px] rounded-2xl p-6 transform transition-transform duration-200 hover:scale-105">
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
          <p className="text-[#a7a4a4] mt-5 text-md font-medium">
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
      <div className="text-center mt-24">
        <p className="text-4xl font-semibold ">
          Meet the Visionaries Driving PolluxChain Forward
        </p>
        <div className="w-[80%] h-44 bg-green-600 rounded-2xl bg-gradient-to-b from-[#032100] to-[#289c0e] flex flex-row justify-center mx-auto mt-8"></div>

        <div className="flex flex-row justify-center space-x-24 w-full -mt-28">
          <div className="flex flex-col items-center w-[25%] border-[1px] border-[#575555]  p-4 rounded-4xl bg-[#0e0d0d] rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105">
            <p className="  bg-white bg-opacity-10 rounded-full w-40 h-40 text-center "></p>
            <p className="pt-5 text-2xl font-semibold">Ram Bilash Rana</p>
            <p className="pt-2 text-[#a7a4a4]">Chief Executive Officers</p>
            <p className="pt-1 text-[#a7a4a4]">Founder</p>
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
          </div>

          <div className="flex flex-col items-center w-[25%] border-[1px] border-[#575555] p-4 rounded-4xl bg-[#0e0d0d] rounded-2xl pt-12 pb-12 transform transition-transform duration-200 hover:scale-105">
            <p className="  bg-white bg-opacity-10 rounded-full w-40 h-40 text-center "></p>
            <p className="pt-5 text-2xl font-semibold">Kamal Kundal</p>
            <p className="pt-2 text-[#a7a4a4]">Chief Executive Officers</p>
            <p className="pt-1 text-[#a7a4a4]">Co-Founder</p>
            <p className="pt-4">
              <BsTwitterX size={24} />
            </p>
          </div>
        </div>

        <div className=" mt-20 mx-auto">
          <p className="text-center text-4xl font-semibold mb-12">
            Our Expert Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-x-6 gap-y-6 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  position={member.position}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to connect */}
      <div className="mt-16">
        <JoinUs/>
      </div>
    </div>
  );
};

export default page;
