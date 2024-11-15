"use client";
import React from "react";
import JoinUs from "../components/ui/JoinUs";
import { GiHammerSickle } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { SiVagrant } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowUpRightDots } from "react-icons/fa6";

type CardProps = {
  title: string;
  description: string;
};

const data = [
  {
    title: "Gas Fee Back to the Developers",
    description:
      "Receive 50% of the gas fees back, reducing operational costs and incentivizing innovation within our developer community - making development on 5ire more sustainable and financially attractive. By reinvesting in our developer ecosystem, we ensure continuous growth and the creation of high-quality dApps, driving forward the capabilities of the 5ireChain network.",
  },
  {
    title: "Gas Fee Back to the Developers",
    description:
      "Receive 50% of the gas fees back, reducing operational costs and incentivizing innovation within our developer community - making development on 5ire more sustainable and financially attractive. By reinvesting in our developer ecosystem, we ensure continuous growth and the creation of high-quality dApps, driving forward the capabilities of the 5ireChain network.",
  },
  {
    title: "Gas Fee Back to the Developers",
    description:
      "Receive 50% of the gas fees back, reducing operational costs and incentivizing innovation within our developer community - making development on 5ire more sustainable and financially attractive. By reinvesting in our developer ecosystem, we ensure continuous growth and the creation of high-quality dApps, driving forward the capabilities of the 5ireChain network.",
  },
  {
    title: "Gas Fee Back to the Developers",
    description:
      "Receive 50% of the gas fees back, reducing operational costs and incentivizing innovation within our developer community - making development on 5ire more sustainable and financially attractive. By reinvesting in our developer ecosystem, we ensure continuous growth and the creation of high-quality dApps, driving forward the capabilities of the 5ireChain network.",
  },
];

// Reusable Card Component
const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="text-start w-full sm:w-[48%] md:w-[100%] lg:w-[48%] xl:w-[48%] border-[1px] border-[#72a861] p-4 md:p-8 rounded-3xl">
    <div className="flex flex-row justify-between">
      <p className="text-xl md:text-2xl font-semibold">{title}</p>
      <p className="mr-0 md:mr-12">
        <FaArrowUpRightDots color="#ffffff" size={24} />
      </p>
    </div>
    <p className="text-md font-medium text-[#a7a4a4] pt-8">{description}</p>
  </div>
);

const page = () => {
  return (
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-24 lg:mt-32 xl:mt-48">
      {/* Sustainable Development */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-b-[1px]  border-[#464545] pb-8 md:pb-24">
        <div className="text-start w-full lg:w-[60%]">
          <div className="flex flex-row items-center space-x-2 ">
            <p>
              <GiHammerSickle size={32} color="#8AF969" />
            </p>
            <p className="text-md md:text-3xl font-semibold">
              Sustainable Development Starts Here
            </p>
          </div>
          <p className="mt-8 text-sm md:text-md lg:text-lg font-medium">
            Pollux enables developers to build scalable, eco-friendly dApps
            using the <br />
            Sustainable Proof of Stake (SPoS) consensus mechanism. This unique{" "}
            <br />
            approach incentivizes projects prioritising sustainability and
            making a <br />
            positive real-world impact.
          </p>

          <div className="mt-4 lg:mt-8">
            <button
              className="mt-4 md:mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
           text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
           group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
           transform transition-transform duration-200 hover:scale-105"
            >
              <div className="flex items-center space-x-2 px-6 py-2.5 bg-[#181717] rounded-md transition-all ease-in duration-75 group-hover:bg-opacity-0">
                <RiBuilding2Fill className="text-xl text-white" />
                <span className="text-white text-xl whitespace-nowrap">
                  Build on Pollux
                </span>
              </div>
            </button>

            <button
              className="ml-0 md:ml-4 mt-2 md:mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
           text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
           group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
           transform transition-transform duration-200 hover:scale-105"
            >
              <div className="flex items-center space-x-2 px-6  py-2.5 bg-[#181717] rounded-md transition-all ease-in duration-75 group-hover:bg-opacity-0">
                <SiVagrant className="text-xl text-white" />
                <span className="text-white text-xl whitespace-nowrap">
                  Build on Pollux
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* image */}
        <div className="w-full lg:w-[40%]"></div>
      </div>

      {/* Sustainable Proof of Stake */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full border-[1px] border-[#72a861] mt-16 p-4 md:p-8 rounded-3xl pt-16 pb-16 ">
        <div className="text-start w-full lg:w-[60%] ">
          {/* SPOs */}
          <p className="text-2xl md:text-3xl font-semibold">
            Sustainable Proof Of Stake (SPoS)
          </p>
          <p className="text-sm md:text-md font-medium text-[#a7a4a4] mt-8">
            The 5ire ecosystem embarks on a holistic journey towards
            sustainability. <br />
            Its very foundation lies in sustainability, entrenched within its
            core via <br />
            the Sustainable Proof of Stake (SPoS) consensus mechanism.
          </p>
          <p className="text-sm md:text-md font-medium text-[#a7a4a4] mt-4">
            Sustainable Proof of Stake is the world’s first ESG compliance-based
            reward <br />
            distribution mechanism that emerges as a governance-based system
            powering
          </p>
          <p className="text-sm md:text-md font-medium text-[#a7a4a4] mt-4">
            SPoS lays a strong foundation for building the next generation of
            dApps, <br />
            prioritising both security and real-world impact. It operates a
            dual-chain <br />
            architecture that empowers developers to choose the chain that best
            suits their <br />
            the high-performance 5ire Native chain or the widely compatible 5ire
            EVM chain. <br />
            This ensures seamless migration for existing Ethereum dApps.
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <div className="flex flex-row items-center">
              <p className="text-md font-semibold text-[#8AF969]">
                Learn More About SPOPs
              </p>
              <p>
                <MdKeyboardArrowRight size={24} color="#8AF969" />
              </p>
            </div>

            <div className="flex flex-row items-center mt-4 md:mt-0">
              <p className="text-md font-semibold text-[#8AF969]">
                Start Building
              </p>
              <p>
                <MdKeyboardArrowRight size={24} color="#8AF969" />
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full lg:w-[40%]"></div>
      </div>

      {/* More Powers of Pollux */}

      <div className="flex flex-wrap gap-8 mt-16 w-full">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>

      {/* Get Started with Pollux */}
      <div className="mt-20 md:mt-32 mb-16">
        <p className="text-2xl md:text-3xl font-semibold">Get Started With Pollux</p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 lg:space-x-10 items-center w-full mt-12 md:mt-40   ">
       
          <div className="flex flex-col space-y-4 items-center justify-between w-full md:w-[25%] h-[350px] md:h-[300px] lg:h-[350px] transform transition-transform duration-200 hover:scale-105
          md:border-dashed md:border-l-2 md:border-r-2 -ml-[3px]  top-0 md:border-b-2 md:rounded-b-[48px] p-4 lg:p-6">
            <p className="border-[1px] border-[#72a861] h-8 w-8  rounded-full "> 01</p>
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl md:rounded-[48px] p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-start text-xl md:text-md lg:text-xl font-semibold">Create a Pollux Wallet</p>
                </div>
          </div>

          <div className="flex flex-col space-y-4 items-center justify-between w-full md:w-[25%] h-[350px] md:h-[300px] lg:h-[350px] mt-0 md:-mt-48 transform transition-transform duration-200 hover:scale-105
          md:border-dashed md:border-l-2 md:border-r-2 -ml-[3px]  top-0 md:border-t-2 md:rounded-t-[48px] p-4 lg:p-6">
            <p className="block md:hidden border-[1px] border-[#72a861] h-8 w-8 rounded-full "> 02</p>
            <div className="border-[1px] border-[#72a861] w-full rounded-3xl md:rounded-[48px] p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-center text-xl md:text-md lg:text-xl font-semibold">Get Pollux</p>
            </div>
                <p className="hidden md:block border-[1px] border-[#72a861] h-8 w-8 rounded-full "> 02</p>
          </div>

          <div className="flex flex-col space-y-4 items-center justify-between   w-full md:w-[25%] h-[350px] md:h-[300px] lg:h-[350px] transform transition-transform duration-200 hover:scale-105
            md:border-dashed md:border-l-2 md:border-r-2 -ml-[3px]  top-0 md:border-b-2 md:rounded-b-[48px] p-4 lg:p-6">
            <p className="border-[1px] border-[#72a861] h-8 w-8 rounded-full "> 03</p>
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl md:rounded-[48px] p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-center text-xl md:text-md lg:text-xl font-semibold">Explore the Ecosystem</p>
                </div>
          </div>

          <div className="flex flex-col space-y-4 items-center justify-between  w-full md:w-[25%] h-[350px] md:h-[300px] lg:h-[350px] mt-0 md:-mt-48  transform transition-transform duration-200 hover:scale-105
          md:border-dashed md:border-l-2 md:border-r-2 -ml-[3px]  top-0 md:border-t-2 md:rounded-t-[48px] p-4 lg:p-6">
           <p className="block md:hidden border-[1px] border-[#72a861] h-8 w-8 rounded-full "> 04</p>
            <div className="border-[1px] border-[#72a861]  w-full rounded-3xl md:rounded-[48px] p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-center text-xl md:text-md lg:text-xl font-semibold">Bridge Assests </p>
                </div>
                <p className="hidden md:block border-[1px] border-[#72a861] h-8 w-8 rounded-full "> 04</p>
          </div>
        </div>

      </div>

      {/*Quick Links */}
      <div className="mt-16 md:mt-32 mb-8 md:mb-16">
        <p className="text-3xl font-semibold">Quick Links</p>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 lg:space-x-8 mt-16 ">
      <div className="flex flex-col sitems-center justify-between w-full md:w-[25%] h-[200px] transform transition-transform duration-200 hover:scale-105
         ">
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-start md:text-md lg:text-xl font-semibold">Launch a DApp</p>
                </div>
          </div>

          <div className="flex flex-col sitems-center justify-between w-full md:w-[25%] h-[200px] mt-6 md:mt-0 transform transition-transform duration-200 hover:scale-105
         ">
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl  p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-start md:text-md lg:text-xl font-semibold">Run a Node</p>
                </div>
          </div>

          <div className="flex flex-col sitems-center justify-between w-full md:w-[25%] h-[200px]  mt-6 md:mt-0 transform transition-transform duration-200 hover:scale-105
         ">
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl  p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-start md:text-md lg:text-xl font-semibold">Run Validator</p>
                </div>
          </div>
          <div className="flex flex-col sitems-center justify-between w-full md:w-[25%] h-[200px]  mt-6 md:mt-0 transform transition-transform duration-200 hover:scale-105
         ">
               <div className="border-[1px] border-[#72a861] w-full rounded-3xl  p-4 md:p-6 flex flex-col justify-between h-full">
                   <p className="flex justify-end"><FaArrowUpRightDots color="#ffffff" size={24} /></p>
                   <p className="mt-auto mb-0 text-start md:text-md lg:text-xl font-semibold">Stake Pollux</p>
                </div>
          </div>
      </div>

      </div>

      {/* Ready for Next Step */}
      <div className="mt-20 md:mt-32 mb-16">
        <JoinUs />
      </div>
    </div>
  );
};

export default page;
