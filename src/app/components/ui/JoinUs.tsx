import React from "react";
import Image from "next/image";
import Link from "next/link";
import connectImg from "../../../../public/paper-plane 1.svg";
import documentImg from "../../../../public/google-docs 1.svg";
import communityImg from "../../../../public/group 1 1.svg";

const JoinUs = () => {
  return (
    <div>
      {/* Ready for next step */}
      <div className="text-center px-2 md:px-6 lg:px-12 2xl:px-32">
        <p className="text-xl md:text-4xl font-semibold">
          Ready for the Next Steps?
        </p>

        <div className="flex flex-col lg:flex-row justify-between  space-x-0 lg:space-x-24 mt-8 md:mt-16 w-full">
          <div className="rounded-2xl text-start p-4 md:p-6 w-full lg:w-[50%] transform transition-transform duration-200 hover:scale-105 bg-black border-[1px] border-[#504f4f] ">
            <Image
              src={connectImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "10%" }}
              className="rounded-2xl"
            />
            <p className="text-xl md:text-2xl font-semibold pt-3">Reach Out </p>
            <p className="text-md md:text-lg font-medium pt-2 text-[#a7a4a4]">
              Want to partner with us or innovate on PolluxChain? <br/>
              <span className="font-bold">Connect with our core team and start collaborating.</span>
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScf1JyE_H4GUiJNSBvdcK4-7xDYB_c1GaMbsvSkkXZJR8rDBQ/viewform">
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] hover:text-white dark:text-white  focus:outline-none  "
            >
              <span className="text-white text-nowrap text-md md:text-xl relative px-6 md:px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Get in Touch
              </span>
            </button>
            </Link>
          </div>

          <div className="border-[1px] border-[#504f4f] bg-black rounded-2xl  text-start p-4 md:p-6 w-full lg:w-[50%] transform transition-transform duration-200 hover:scale-105 mt-10 md:mt-5 lg:mt-0">
            <Image
              src={documentImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "10%" }}
              className="rounded-2xl"
            />
            <p className="text-xl md:text-2xl font-semibold pt-3">Start Building</p>
            <p className="text-md md:text-lg font-medium pt-2 text-[#a7a4a4]">
              Access all the tools and resources you need to start developing on
              PolluxChain today.
            </p>
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
               hover:text-white dark:text-white focus:outline-none "
            >
              <span className="text-white text-md md:text-xl text-nowrap relative px-4 md:px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Explore Developer Resources
              </span>
            </button>
          </div>
        </div>

        <div className="w-full  flex justify-center mt-10 md:mt-5 lg:mt-12 xl:mt-12 2xl:mt-16">
          <div className="border-[1px] bg-black rounded-2xl text-start p-4 md:p-6 w-full lg:w-[44%] transform transition-transform duration-200 hover:scale-105 border-[#504f4f]">
            <Image
              src={communityImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "12%" }}
              className="rounded-2xl"
            />
            <p className="text-xl md:text-2xl font-semibold pt-3">Join the Community</p>
            <p className="text-md md:text-lg font-medium pt-2 text-[#a7a4a4]">
              Engage with a global network of enthusiasts and contributors.
              Let’s grow together.
            </p>

            <Link href="https://t.me/polluxchainDAO">
            <button
              className=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
               hover:text-white dark:text-white focus:outline-none "
            >
              <span className="text-white text-md md:text-xl relative px-6 md:px-10 py-2.5 transition-all ease-in duration-75 bg-[#181717]  rounded-md group-hover:bg-opacity-0">
                Connect with Us
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
