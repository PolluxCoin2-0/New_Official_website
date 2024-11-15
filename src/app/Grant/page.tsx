"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import bannerImg from "../../../public/banner.jpg";
import banner2Img from "../../../public/banner 2.jpg";
import Image from "next/image";
import Calendly from "../Calendly/page";
import JoinUs from "../components/ui/JoinUs";

const Page = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
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
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-32  ">
      <div className="flex flex-col justify-center items-center space-y-4 ">
        <p
          className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
            Innovate with Pollux
          </span>
        </p>
        <p className="text-xl md:text-4xl font-medium ">
          The $10 Million Grant Program
        </p>
      </div>

      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1400}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.04}
      >
        <div
          className="flex flex-col md:flex-row justify-between items-center  space-x-0 md:space-x-6 p-2 md:p-4 lg:p-10 mt-0 md:mt-16 w-full  rounded-2xl pt-12 pb-12"
          onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
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
          <div className="text-start w-full lg:w-[40%]">
            <p className="text-2xl lg:text-3xl font-semibold">
              Pollux Grant Program
            </p>
            <p className="text-md lg   :text-lg font-medium mt-6 text-justify text-[#a7a4a4]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Suscipit veniam magnam iste, maxime porro repudiandae,
              <br /> provident Suscipit veniam magnam iste, maxime porro <br />{" "}
              repudiandae, provident qui itaque rem quaerat aperiam dolorum, nam
              deserunt pariatur?
            </p>

            <button
              className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Apply Now
              </span>
            </button>
          </div>
          <div className="flex justify-center  md:justify-end w-full md:w-[60%] mt-6 md:mt-0">
            <Image
              src={bannerImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "70%" }} // Set default width to 100% for mobile
              className="rounded-2xl w-full md:w-[70%]" // Use Tailwind's responsive width utilities
            />
          </div>
        </div>
      </Tilt>

      <div className="flex flex-col md:flex-row  justify-between space-x-8 items-center w-full   pt-12 pb-12 mt-16 mb-16 border-b-[1px] border-[#504f4f]">
        <div className="w-full md:w-[30%] flex justify-center md:justify-start">
          <Image
            src={banner2Img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "90%" }}
            className="rounded-2xl"
          />
        </div>

        <div className=" flex flex-col justify-start items-start w-full lg:w-[70%]  ">
          <div className=" flex flex-col justify-start items-start">
            <p className="text-start text-2xl lg:text-3xl font-semibold">
              The Grant Application Journey
            </p>
            <p className="text-start text-md lg:text-lg font-medium mt-6 text-[#8d8b8b]">
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

      <div className="flex flex-col md:flex-row  space-x-8 justify-between items-baseline  pb-12 border-b-[1px] border-[#504f4f] w-full">
        <div className="w-full md:w-[30%] flex justify-start">
          <p className="text-3xl font-semibold">How to Apply?</p>
        </div>

        <div className="flex flex-col justify-start items-start w-full lg:w-[70%] ">
          <div className="text-start text-md lg:text-lg font-medium mt-6 text-[#ccc7c7]">
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
              <span className="text-white text-xl relative px-20 md:px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Apply Now
              </span>
            </button>
          </div>
        </div>
      </div>

   
   <div className="mt-12">
   <JoinUs/>
   </div>
      
      <div>
        <Calendly />
      </div>
    </div>
  );
};

export default Page;
//  onMouseMove={(e: any) => handleMouseMove(e)}
