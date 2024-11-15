"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img from "../../../public/ele2.svg";

// Define the type for each section object
interface Section {
  id: string;
  title: string;
  description: string;
  imageSrc: string; // Assuming the src is a string representing the image path
  energyUsage: string; // Energy usage in percentage
}

// CardSection Props Type
interface CardSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  energyUsage: string;
}

// CardSection Component
const CardSection: React.FC<CardSectionProps> = ({ title, description, imageSrc, energyUsage }) => {
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
      className="flex flex-col md:flex-row py-5 space-x-0 md:space-x-32 items-center mt-16 p-12 pt-16 pb-16 "
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
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={320}
          height={320}
          className="w-64"
        />
      </div>

      <div className="text-start mt-8 md:mt-0">
        <p className="text-center text-xl font-medium bg-gradient-to-r from-[#1C5A04] to-[#68A541] w-[180px] rounded-2xl py-2">
          {title}
        </p>
        <p className="text-2xl font-semibold pt-4">{description}</p>
        <p className="text-[#a7a4a4] pt-2 text-md font-medium">
          With EVM/Wasm compatibility, easily deploy Solidity smart contracts on
          the 5ireEVM chain and leverage WASM environment for future-proofing
          and high performance.
        </p>
        <div className="flex flex-row items-center space-x-4 pt-4">
          <p className="text-2xl font-bold text-[#68A541]">{energyUsage}</p>
          <p className="text-xl font-semibold">Less Energy Usage</p>
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
      description: "Positioned for Scalability",
      imageSrc: Img,
      energyUsage: "50%",
    },
    {
      id: "Fast",
      title: "FAST",
      description: "Optimized for Speed",
      imageSrc: Img,
      energyUsage: "30%",
    },
    {
      id: "Focused",
      title: "RWA FOCUSED",
      description: "Designed for Real-World Applications",
      imageSrc: Img,
      energyUsage: "20%",
    },
    {
      id: "Future",
      title: "FUTURE PROOF",
      description: "Built for Longevity",
      imageSrc: Img,
      energyUsage: "40%",
    },
    {
      id: "Demand",
      title: "ON DEMANDING",
      description: "Scalable to Meet Demands",
      imageSrc: Img,
      energyUsage: "35%",
    },
  ];

  // State to track the active section
  const [activeSection, setActiveSection] = useState<string>("Sustain");

  // Handle section click (manual navigation)
  const toggleSection = (sectionId: string) => {
    setActiveSection(sectionId); // Set the active section when clicked
  };

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
    <div className="text-center px-2 md:px-4 lg:px-6 xl:px-40 mt-20">
      <p className="text-5xl font-semibold leading-snug">
        Designed for
        <br />
        Sustainable Evolution
      </p>

      <div className="mt-12">
        <ul className="flex flex-col md:flex-row space-x-0 md:space-x-8 justify-center ">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`text-[#ffffff] border-[1px] border-[#72a861] text-lg lg:text-xl font-medium cursor-pointer px-8 py-2 rounded-full mt-4 md:mt-0
                hover:scale-105 transition-all duration-300 ease-in-out ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-[#1C5A04] to-[#68A541]"
                    : ""
                }`}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally render the CardSection component based on the activeSection */}
      {activeSectionContent && (
        <CardSection
          title={activeSectionContent.title}
          description={activeSectionContent.description}
          imageSrc={activeSectionContent.imageSrc}
          energyUsage={activeSectionContent.energyUsage}
        />
      )}
    </div>
  );
};

export default Evolution;
