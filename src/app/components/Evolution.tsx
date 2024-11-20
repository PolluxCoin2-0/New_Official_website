"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData }from "next/image";
import sustainImg from "../../../public/sustain.png";
import scalableImg from "../../../public/scalable.png";
import defiImg from "../../../public/defi.png";
import secureImg from "../../../public/secure.png";
import fastImg from "../../../public/fast.png";

// Define the type for each section object
interface Section {
  id: string;
  title: string;
  description: string;
  para: string;
  imageSrc: StaticImageData; // Assuming the src is a string representing the image path
  energyUsage: string; 
  energyTag: string;// Energy usage in percentage
}

// CardSection Props Type
interface CardSectionProps {
  title: string;
  description: string;
  para: string;
  imageSrc: StaticImageData;
  energyUsage: string;
  energyTag: string;// Energy usage in percentage

}

// CardSection Component
const CardSection: React.FC<CardSectionProps> = ({ title, description, para, imageSrc, energyUsage, energyTag }) => {
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
    <div
      className="flex flex-col lg:flex-row py-5 space-x-0 lg:space-x-32 items-center mt-16 p-0 lg:p-12  h-auto"
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
      <div className="w-[80%] md:w-[0%] lg:w-[20%] ml-0 lg:ml-20">
        <Image
          src={imageSrc}
          alt={title}
          width={350}
          height={350}
          className="w-80"
        />
      </div>

      <div className="text-start mt-8 md:mt-0 w-[80%]">
        <p className=" inline-block text-center text-md md:text-xl bg-[#8af969] px-4 md:px-8 rounded-2xl py-2 truncate text-black font-bold">
          {title}
        </p>
        <p className="text-2xl font-semibold pt-4">{description}</p>
        <p className="text-[#a7a4a4] pt-2 text-md font-medium">
        {para}
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-4 pt-4">
          <p className="text-2xl font-bold text-[#68A541]">{energyUsage}</p>
          <p className="text-md lg:text-xl font-semibold ">{energyTag}</p>
        </div>
      </div>
    </div>
  );
};

const Evolution = () => {
  // Define the sections content dynamically
  const sections: Section[] = [
    {
      id: "Sustain",
      title: "SUSTAINABLE",
      description: "Driving Eco-Conscious Blockchain Solutions",
      para: "PolluxChain leverages a unique proof-of-stake mechanism and innovative consensus algorithms to promote energy efficiency, reducing environmental impact while delivering unmatched blockchain performance.",
      imageSrc: sustainImg,
      energyUsage: "50%",
      energyTag: "Reduction in Energy Consumption",
    },
    {
      id: "Scalable",
      title: "SCALABLE",
      description: "Ready for Infinite Growth",
      para: "Designed to scale effortlessly, PolluxChain supports thousands of transactions per second without sacrificing reliability. Its modular infrastructure paves the way for sustainable growth and high adaptability in expanding markets.",
      imageSrc: scalableImg,
      energyUsage: "30%",
      energyTag: "Seamless Scaling Without Performance Trade-Offs",
    },
    {
      id: "defi",
      title: "DEFI-OPTIMIZED",
      description: "Transformative Infrastructure for DeFi",
      para: "Built to power the next wave of decentralized finance, PolluxChain integrates a suite of features that supports DeFi applications with low latency, high liquidity, and secure operations, enabling endless opportunities for innovation.",
      imageSrc: defiImg,
      energyUsage: "20%",
      energyTag: "Enhanced Smart Contract Interoperability",
    },
    {
      id: "Secure",
      title: "SECURE",
      description: "Uncompromised Security Protocols",
      para: "PolluxChain incorporates multi-layered encryption and zero-trust architecture to fortify the platform against emerging threats, ensuring a resilient and trustworthy ecosystem for users and developers.",
      imageSrc: secureImg,
      energyUsage: "40%",
      energyTag: "State-of-the-Art Cryptographic Safeguards",
    },
    {
      id: "Fast",
      title: "Fast",
      description: "Engineered for Lightning-Speed Performance",
      para: "PolluxChain is optimized for speed with native EVM and WASM compatibility, enabling developers to deploy smart contracts swiftly. This ensures seamless transactions and high processing power to meet the demands of an evolving decentralized ecosystem.",
      imageSrc:  fastImg,
      energyUsage: "Up to 2x ",
      energyTag: " Faster Transaction Speeds",
    },
  ];

  // State to track the active section
  const [activeSection, setActiveSection] = useState<string>("Sustain");

  // Handle section click (manual navigation)
  // const toggleSection = (sectionId: string) => {
  //   setActiveSection(sectionId); // Set the active section when clicked
  // };

  // Set up automatic cycling of sections every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the index of the current active section
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );
      
      // Calculate the next section index
      const nextIndex = (currentIndex + 1) % sections.length; // Loop back to the first section if at the end
      
      // Set the next section as active
      setActiveSection(sections[nextIndex].id);
    }, 2000); // Change section every 2 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeSection]); // Dependency array to trigger the effect when activeSection changes

  // Get the content of the active section
  const activeSectionContent = sections.find(
    (section) => section.id === activeSection
  );

  return (
    <div className="text-center px-2 md:px-4 lg:px-6 xl:px-20 mt-16 xl:mt-6 2xl:mt-12">
      <p className="text-3xl md:text-4xl xl:text-5xl  font-semibold leading-snug">
        Designed for
        <br />
        Sustainable Evolution
      </p>

      {/* <div className="mt-6">
  <ul className="flex flex-col md:flex-row space-x-0 md:space-x-3 lg:space-x-8 justify-center">
    {sections.map((section) => (
      <li
        key={section.id}
        className={`text-[#ffffff] font-bold border-[1px] border-[#72a861] text-nowrap text-md md:text-sm lg:text-lg xl:text-xl cursor-pointer px-8 py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 rounded-full mt-4 md:mt-0
          hover:scale-105 transition-all duration-300 ease-in-out ${
            activeSection === section.id ? "bg-[#8af969] text-black" : ""
          }`}
        onClick={() => toggleSection(section.id)}
      >
        {section.title}
      </li>
    ))}
  </ul>
      </div> */}


      {/* Conditionally render the CardSection component based on the activeSection */}
      {activeSectionContent && (
        <CardSection
          title={activeSectionContent.title}
          description={activeSectionContent.description}
          para={activeSectionContent.para}
          imageSrc={activeSectionContent.imageSrc}
          energyUsage={activeSectionContent.energyUsage}
          energyTag={activeSectionContent.energyTag}
        />
      )}
    </div>
  );
};

export default Evolution;
