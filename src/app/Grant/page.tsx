"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import bannerImg from "../../../public/banner.jpg";
import Image from "next/image";

const page = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (isHovered) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBgPosition({ x, y });
    }
  };

  return (
    <div className="text-center min-h-screen px-64 mt-32 ">
      <div className="flex flex-col justify-center items-center space-y-4">
        
        <p
          className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Innovate with Pollux
          </span>
        </p>
        <p className="text-4xl font-medium ">The $10 Million Grant Program</p>
      </div>

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1400}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.04}
      >
        <div
          className="flex flex-row justify-between items-center  p-10 mt-16 w-full  rounded-2xl pt-12 pb-12"
          onMouseMove={(e: any) => handleMouseMove(e)}
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
          <div className="text-start w-[40%]">
            <p className="text-3xl font-semibold">Pollux Grant Program</p>
            <p className="text-lg font-medium mt-6 text-justify text-[#a7a4a4]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Suscipit veniam magnam iste, maxime porro repudiandae,
              <br /> provident Suscipit veniam magnam iste, maxime porro <br />{" "}
              repudiandae, provident qui itaque rem quaerat aperiam dolorum, nam
              deserunt pariatur?
            </p>

            <button
              className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Apply Now
              </span>
            </button>
          </div>
          <div className="flex justify-end w-[60%]">
            <Image
              src={bannerImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "70%" }}
              className="rounded-2xl"
            />
          </div>
        </div>
      </Tilt>

      <div className="flex flex-row justify-between items-center  p-10 mt-32 w-full  border-b-[1px] border-[#b1b0b0]">
        <div className="w-[50%]">{/* image */}</div>

        <div className="  flex flex-col justify-start items-start w-[50%] ">
          <div className=" flex flex-col justify-start items-start">
            <p className="text-3xl font-semibold">
              The Grant Application Journey
            </p>
            <p className="text-start text-lg font-medium mt-6 text-[#8d8b8b]">
              Prospective projects undergo a meticulous application process. The
              range of grant amounts, from $10,000 to $100,000, adds a layer of
              flexibility to accommodate projects at various stages of
              development. What sets this program apart is the option for grants
              to be disbursed in either USDT or 5ire Token, providing applicants
              with a choice that aligns with their strategic objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-baseline w-full mt-16 mb-16 ">
        <div className="">
          <p className="text-3xl font-semibold">How to Apply?</p>
        </div>

        <div className="flex flex-col justify-start items-start">
          <div className="text-start text-lg font-medium mt-6 text-[#ccc7c7]">
            <p>
              Applicants can easily navigate the application process through our
              dedicated portal. Please visit to get started. <br />
              Detailed guidelines and criteria are available to assist you in
              preparing your submission.
            </p>
            <p className="mt-5">
              The journey from application submission to grant disbursement
              involves a thorough evaluation by the <br />
              Grants Committee, team interviews, and the formation of a
              multi-sig wallet upon approval. This approach <br />
              ensures not only financial support but a commitment to achieving
              measurable milestones.
            </p>
            <p className="mt-5">
              *Please take a look at the milestone-based funding plan.
            </p>
          </div>
          <div>
            <button
              className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Apply Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full pt-24 pb-24">
        <div className="text-start mt-6 w-[60%]">
          <p className="text-2xl font-semibold">
            Nurturing Beyond Finance: <br />
            The Support Ecosystem
          </p>

          <p className="mt-6 text-md font-medium leading-7 text-[#ccc7c7]">
            The Pollux Grants Program is committed to providing comprehensive
            support to projects beyond financial backing. Our goal is to create
            a nurturing environment where projects can thrive. Through our
            support ecosystem, we offer a range of resources and assistance
            tailored to the needs of each project, including:
          </p>
          <ul className="list-disc pl-5 text-[#ccc7c7] leading-6 mt-6">
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
          </ul>
        </div>
        <div className="w-[40%]"></div>
      </div>

      <div className="flex flex-row justify-between w-full pt-24 pb-24">
        <div className="w-[40%]"></div>

        <div className="w-[60%] text-start">
          <p>Key Areas of Growth: Fostering Sustainability</p>

          <p>
            The 5ire Grants Program strategically focuses on key areas essential
            for the sustainable growth of the ecosystem. These include:
          </p>
          <ul className="list-disc pl-5 text-[#ccc7c7] leading-6 mt-6">
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
            <li>
              Early-stage project grants: Financial support to kickstart
              projects at their inception.
            </li>
          </ul>
        </div>
      </div>


      {/* Ready for next step */}
      <div className="text-center px-32">
        <p className="text-4xl font-semibold">Ready for the next step?</p>

        <div className="flex flex-row justify-between space-x-24 mt-16 w-full">
            <div className="border-[1px] border-[#badfaf] rounded-2xl text-start p-8 w-[50%]">
                <p className="text-2xl font-semibold">React Out</p>
                <p className="text-lg font-medium pt-4">Lorem ipsum, dolor sit amet adipisicing elit. Praesentium, dolores.</p>
                <button
              className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get in Touch
              </span>
            </button>
            </div>

             <div className="border-[1px] rounded-2xl border-[#badfaf] text-start p-8 w-[50%]">
                <p className="text-2xl font-semibold">Start Building</p>
                <p  className="text-lg font-medium pt-4">Lorem ipsum, dolor sit amet adipisicing elit. Praesentium, dolores.</p>
                <button
              className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Documentation
              </span>
            </button>
            </div>
        </div>

        <div className="w-full  flex justify-center mt-16">
        <div className="border-[1px] border-[#badfaf] rounded-2xl text-start p-8 w-[44%]">
                <p className="text-2xl font-semibold">Join the Community</p>
                <p className="text-lg font-medium pt-4">Lorem ipsum, dolor sit amet adipisicing elit. Praesentium, dolores.</p>
                <button
              className=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn More
              </span>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
//  onMouseMove={(e: any) => handleMouseMove(e)}
