import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import polluxLogo from "../../../public/pollux logo.svg";
import UvitokenLogo from "../../../public/uviLogo.png";
import SulmineLogo from "../../../public/SulmineLogo.svg";
import PolinkLogo from "../../../public/PolinkLogo.png";
import SulLogo from "../../../public/sulLogo.svg";
import CrowdLogo from "../../../public/crowdLogo.png";

const Index = () => {
  const distances = [350, 350, 350, 350, 350, 350];

  const images = [
    { src: UvitokenLogo, url: "https://uvi.network/", rotation: "90deg" },
    { src: SulLogo, url: "", rotation: "30deg" },
    {
      src: UvitokenLogo,
      url: "https://play.google.com/store/apps/details?id=com.app.PoLink&hl=en_IN&pli=1",
      rotation: "330deg",
    },
    { src: PolinkLogo, url: "https://crowd1.club/", rotation: "270deg" },
    { src: SulmineLogo, url: "https://polluxchain.com/", rotation: "210deg" },
    {
      src: CrowdLogo,
      url: "https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm",
      rotation: "90deg",
    },
  ];

  const descriptions = [
    {
      name: "UVI SWAP",
      url: "https://uviswap.org/",
      description:
        "PolluxChain decentralized exchange (DEX) for seamless token swaps, liquidity provision, and yield farming.",
    },

    {
      name: "SULMINE",
      url: "",
      description:
        "Unlock Sulana mining opportunities! Designed for crypto enthusiasts aiming to maximize their passive income streams through efficient mining operations.",
    },
    {
      name: "UVI MINING",
      url: "https://uvi.network/",
      description:
        "Mine UVI Tokens effortlessly! Participate in PolluxChain mining program to earn rewards while contributing to network security and decentralization.",
    },
    {
      name: "POLINK",
      url: "https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm",
      description:
        "A non-custodial wallet designed to securely manage your digital assets while ensuring complete control over your funds",
    },
    {
      name: "SULAANA",
      url: "https://sulaana.com/",
      description:
        "A revolutionary decentralized exchange offering seamless token swaps, liquidity pooling, and enhanced trading experiences.",
    },
   
    {
      name: "CROWD1",
      url: "https://crowd1.club/",
      description:
        "A crowdfunding platform that bridges innovators with investors, enabling secure, transparent, and efficient fundraising for Web3 projects.",
    },
  ];

  return (
    <div className="relative text-center px-2 md:px-4 lg:px-6 xl:px-44 mt-0 md:mt-24 pb-0 md:pb-64">
      {/* Animated Rockets Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={`rocket-${index}`}
            className="absolute rounded-full shadow-lg"
            style={{
              width: "15px",
              height: "15px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "#77af54", // Green rocket color
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={{
              y: ["0%", "-50%", "-100%"],
              opacity: [1, 0.5, 0],
              scale: [1, 1.2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {[...Array(150)].map((_, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-white ">
        <p className="text-2xl md:text-4xl font-bold">
          Discover the Pollux Ecosystem{" "}
        </p>
        <p className="text-md md:text-lg font-semibold pt-4 text-[#a7a4a4]">
          Empowering the future of blockchain innovation with a suite of
          cutting-edge decentralized applications and platforms.
        </p>

        <div className="hidden md:flex justify-center md:mt-72 lg:mt-60">
          <div className="relative flex justify-center items-center md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-dashed border-2 border-white rounded-full">
            <div className="absolute flex justify-center items-center w-[320px] h-[320px] rounded-full">
              <motion.div
                className="absolute flex justify-center items-center w-[320px] h-[320px] rounded-full"
                animate={{
                  rotate: [0, 360], // Rotate from 0 to 360 degrees
                }}
                transition={{
                  duration: 10, // Duration of one full rotation (in seconds)
                  repeat: Infinity, // Infinite rotation
                  ease: "linear", // Smooth and continuous rotation
                }}
              >
                <Image
                  src={polluxLogo}
                  alt="Polluxcoin Logo"
                  width={200}
                  height={200}
                  className="w-48 sm:w-64 md:w-48 lg:w-52"
                />
              </motion.div>
            </div>

            {/* Rotating Logos */}
            {[...Array(images.length)].map((_, index) => {
              const angle = (index * 360) / images.length;
              const translateX = distances[index] || 350;
              const description = descriptions[index] || {};

              const imageTransform = `rotate(${
                angle - 90
              }deg) translateX(${translateX}px)`;

              return (
                <React.Fragment key={index}>
                  {/* Connecting Line */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "2px",
                      height: `${translateX}px`,
                      background: "linear-gradient(45deg, #55E128, #0A2505)",
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: "top",
                      zIndex: -1,
                    }}
                    animate={{
                      height: ["350px", "360px", "350px"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Logo and Tooltip */}
                  <div
                    className="absolute"
                    style={{
                      transform: imageTransform,
                      transformOrigin: "center",
                    }}
                  >
                    
                    <Link href={images[index]?.url || "#"} target="_blank">
                      <div className="group relative rounded-full w-32 h-32 bg-black shadow-inner shadow-green-500 flex justify-center items-center ">
                        {/* Logo */}
                        <Image
                          src={images[index]?.src}
                          alt={`Logo ${index}`}
                          width={70}
                          height={70}
                          style={{
                            transform: `rotate(${
                              images[index]?.rotation || "0deg"
                            })`,
                          }}
                        />

                        {/* Tooltip */}
                        {description?.name && (
                          <div
                            className={`absolute ${
                              index === 0 // Top
                                ? "rotate-[90deg] -left-20 top-44" // Bottom of image for top positioned image
                                : index === 1 // Right
                                ? "left-full -ml-4 top-16 rotate-[30deg]" // Right side of image for right positioned image
                                : index === 2 // Bottom
                                ? "left-28 bottom-16 -rotate-[30deg]" // Top of image for bottom positioned image
                                : index === 3
                                ? "-right-20 top-44 -rotate-[90deg]" // Tooltip for index 3 (Left)
                                : index === 4
                                ? "rotate-[210deg] left-24 top-20" // Custom position for index 4 (Top)
                                : index === 5 // Custom Position Bottom-Left
                                ? "rotate-[150deg] left-24 -top-24" // Custom tooltip near the bottom-left
                                : ""
                            } opacity-0 group-hover:opacity-100 text-white text-sm rounded-lg py-2 px-4 w-64 shadow-lg z-10 transition-opacity duration-300`}
                          >
                            {/* Tooltip Arrow */}
                            <div
                              className={`absolute w-3 h-3 rotate-45 ${
                                index === 0 // Top
                                  ? "left-1/2 -translate-x-1/2" // Arrow below for top
                                  : index === 1 // Right
                                  ? "left-[-5px] top-1/2 -translate-y-1/2" // Arrow to the left for right
                                  : index === 2 // Bottom
                                  ? " left-1/2 -translate-x-1/2" // Arrow above for bottom
                                  : index === 3
                                  ? "right-full top-1/2 -translate-y-1/2" // Arrow for index 3 (Left)
                                  : index === 4
                                  ? " top-12" // Arrow for index 4 (Top)
                                  : index === 5 // Custom Bottom-Left
                                  ? "top-[-6px] left-1/2 -translate-x-1/2" // Arrow above tooltip
                                  : ""
                              }`}
                            ></div>

                            <p className="text-start">
                              <a
                                href={description?.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#8af969] no-underline text-black p-1 pl-2 pr-2 rounded-sm text-md font-semibold"
                              >
                                Visit Website
                              </a>
                              <br />
                              <p className="mt-3 text-xl font-medium">
                                <strong>
                                  {description?.name || "No Name"}
                                </strong>
                              </p>

                              <br />
                              <p className="-mt-3 text-[#a7a4a4] leading-6">
                                {" "}
                                {description?.description || "No Description"}
                              </p>
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
