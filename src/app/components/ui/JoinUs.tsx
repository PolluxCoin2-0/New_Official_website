
import React from 'react'
import Image from "next/image";
import connectImg from "../../../../public/paper-plane 1.svg";
import documentImg from "../../../../public/google-docs 1.svg";
import communityImg from "../../../../public/group 1 1.svg";

const JoinUs = () => {
  return (
    <div>
      {/* Ready for next step */}
      <div className="text-center px-2 md:px-6 lg:px-12 2xl:px-32">
        <p className="text-2xl md:text-4xl font-semibold">
          Ready for the next step?
        </p>

        <div className="flex flex-col lg:flex-row justify-between  space-x-0 lg:space-x-24 mt-8 md:mt-16 w-full">
          <div className="border-[1px] rounded-2xl text-start p-4 md:p-6 w-full lg:w-[50%] transform transition-transform duration-200 hover:scale-105 ">
            <Image
              src={connectImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "8%" }}
              className="rounded-2xl"
            />
            <p className="text-2xl font-semibold pt-4">Reach Out</p>
            <p className="text-lg font-medium pt-2 text-[#a7a4a4]">
              Lorem ipsum, dolor sit amet adipisicing elit. Praesentium,
              dolores.
            </p>
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-nowrap text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Get in Touch
              </span>
            </button>
          </div>

          <div className="border-[1px] rounded-2xl  text-start p-4 md:p-6 w-full lg:w-[50%] transform transition-transform duration-200 hover:scale-105 mt-10 md:mt-5 lg:mt-0">
            <Image
              src={documentImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "8%" }}
              className="rounded-2xl"
            />
            <p className="text-2xl font-semibold pt-4">Start Building</p>
            <p className="text-lg font-medium pt-2 text-[#a7a4a4]">
              Lorem ipsum, dolor sit amet adipisicing elit. Praesentium,
              dolores.
            </p>
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl text-nowrap relative px-6 md:px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                View Documentation
              </span>
            </button>
          </div>
        </div>

        <div className="w-full  flex justify-center mt-10 md:mt-5 lg:mt-12 xl:mt-12 2xl:mt-16">
          <div className="border-[1px]  rounded-2xl text-start p-4 md:p-6 w-full lg:w-[44%] transform transition-transform duration-200 hover:scale-105">
            <Image
              src={communityImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "8%" }}
              className="rounded-2xl"
            />
            <p className="text-2xl font-semibold pt-4">Join the Community</p>
            <p className="text-lg font-medium pt-2 text-[#a7a4a4]">
              Lorem ipsum, dolor sit amet adipisicing elit. Praesentium,
              dolores.
            </p>
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;
