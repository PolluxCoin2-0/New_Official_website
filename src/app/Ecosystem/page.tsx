"use client";
import React from "react";
import Image from "next/image";
import { FaRecycle } from "react-icons/fa6";
import UvitokenLogo from "../../../public/uviLogo.png";
import SulaanaLogo from "../../../public/sulLogo.svg";
import SulmineLogo from "../../../public/SulmineLogo.svg";
import PolinkLogo from "../../../public/PolinkLogo.png";
import CrowdLogo from "../../../public/crowdLogo.png";
import polluxLogo from "../../../public/polluxlogo.png";
import spotLogo from "../../../public/SpotLogo.png";
// import AnimatedProducts from "../../../src/app/AnimatedProduct";
import { FaLink } from "react-icons/fa6";

const page = () => {


  // Define the interface for the project data
  interface Project {
  name: string;
  description: string;
  image: string; // Image paths can be typed as 'string' because we are using URLs for the images
  url: string;
  urlTitle: string;
}

  const projects = [
    {
      name: "UVI SWAP",
      description:
        "PolluxChain decentralized exchange (DEX) for seamless token swaps, liquidity provision, and yield farming. Experience fast, secure, and decentralized trading like never before.",
      image:  UvitokenLogo, // Replace with your actual image path
      urlTitle: "Trade on UviSwap",
      url: "https://uviswap.org/",

    },
    {
      name: "UVI Mining",
      description:
        "Mine UVI Tokens effortlessly! Participate in PolluxChain mining program to earn rewards while contributing to network security and decentralization.",
      image:  UvitokenLogo,
      urlTitle: "Start Mining UVI",
      url: "https://uvi.network/",
    },
    {
      name: "POX MINING",
      description:
        "Stake and mine POX tokens, adding stability and liquidity to the ecosystem. A rewarding way to engage with PolluxChain’s vibrant community.",
      image: polluxLogo,
      urlTitle: "Join POX Mining",
      url: "https://t.me/PoxMineBot",
    },
    {
      name: "SULAANA",
      description:
        "A revolutionary decentralized exchange offering seamless token swaps, liquidity pooling, and enhanced trading experiences. Built for speed, security, and scalability.",
      image:  SulmineLogo,
      urlTitle: "Explore Sulaana",
      url: "https://sulaana.com/",
    },
   
    {
      name: "SULMINE",
      description:
        "Unlock Sulana mining opportunities! Designed for crypto enthusiasts aiming to maximize their passive income streams through efficient mining operations.",
      image: SulaanaLogo,
      urlTitle: "Get Started with Sulmine",
      url: "",
    },
    {
      name: "CROWD1",
      description:
        "A crowdfunding platform that bridges innovators with investors, enabling secure, transparent, and efficient fundraising for Web3 projects.",
      image:  CrowdLogo,
      urlTitle: "Visit Crowd1",
      url: "https://crowd1.club/",
    },
    {
      name: "POLINK",
      description:
        "A non-custodial wallet designed to securely manage your digital assets while ensuring complete control over your funds. Polink also supports a governance model, allowing users to participate in decision-making within the ecosystem. Experience seamless transactions with PolluxChain's native token and beyond.",
      image: PolinkLogo,
      urlTitle: "Explore Polink Wallet",
      url: "https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm",
    },
    {
      name: "SPOT 30 USDX",
      description:
        "Your one-stop solution for decentralized stablecoin swaps. Trade USDx with unmatched speed, low fees, and maximum security.",
      image: spotLogo,
      urlTitle: "Access Spot30 USDx",
      url: "https://spot30usdx.com/",
    },
    
  ];

  // Reusable Card Component
  const ProjectCard = ({ name, description, image, urlTitle, url }: Project) => {
  return (
    <div className="h-full relative bg-black p-6 pt-10 pb-12 border-[1px] border-[#444343] rounded-tl-3xl rounded-br-3xl hover:border-r-[4px] hover:border-b-[4px] hover:border-r-[#8af969] hover:border-b-[#8af969] transform transition-transform duration-200 hover:scale-105">
      <div className="absolute top-[-20px] right-[-20px] z-10 bg-black w-[100px] h-[100px] shadow-inner shadow-[#8af969] rounded-full flex justify-center p-2">
        <Image
          src={image}
          alt={`${name} Logo`}
          width={60}
          height={60}
          className="rounded-full object-contain"
        />
      </div>
      <h3 className="text-start text-xl font-semibold  text-white mt-4 h-[15%]">{name}</h3>
      <p className="text-start text-[#a7a4a4] leading-7 truncate-description pt-5 h-[65%]">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8af969]  mt-4 no-underline text-start flex flex-row items-center space-x-2 h-[20%]"
      >
        <p><FaLink size={20}/></p> 
        <p>{urlTitle}</p>
      </a>
    </div>
  );
};

  return (
    <div className="relative text-center px-2 md:px-4 lg:px-6 xl:px-44 mt-24 pb-16 ">
      {/* <div className="hidden lg:block">
      <AnimatedProducts/>
     </div> */}

      {/* Our Projects */}
      <div className="relative text-center px-4 lg:px-12 mt-24 pb-0 ">
      <div className="flex flex-row space-x-2 md:space-x-4 items-center  ">
      <p className="block md:hidden">
          <FaRecycle size={24} color="#8af969" />
        </p>
        <p className="hidden md:block">
          <FaRecycle size={32} color="#8af969" />
        </p>
        <p className="text-md md:text-4xl font-semibold text-nowrap">Explore our diverse projects:</p>
       
      </div>
      <p className="text-center md:text-start text-md md:text-lg font-semibold pt-4 text-[#a7a4a4] ml-0 md:ml-16">
          Empowering the future of blockchain innovation with a suite of
          cutting-edge decentralized applications and platforms.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 md:mt-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            urlTitle={project.urlTitle}
            url={project.url}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default page;
