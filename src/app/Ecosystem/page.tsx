"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import polluxLogo from "../../../public/pollux logo.svg";
import { GiConcentricCrescents } from "react-icons/gi";
import UvitokenLogo from "../../../public/uviLogo.png";
import SulLogo from "../../../public/sulLogo.svg";
import PolinkLogo from "../../../public/PolinkLogo.png";
import CrowdLogo from "../../../public/crowdLogo.png";
import PolluxLogo from "../../../public/polluxLogo (2).png";
import polinkextLogo from "../../../public/PoxscanImage.png";
import spotLogo from "../../../public/SpotLogo.png";

const page = () => {

  const distances = [350, 350, 350, 350, 350, 350];

  // Define the interface for the project data
interface Project {
  name: string;
  description: string;
  image: string; // Image paths can be typed as 'string' because we are using URLs for the images
  url: string;
}

  const images = [
    { src: UvitokenLogo, url: "https://uvi.network/" },
    { src: SulLogo, url: "https://sulaana.com/" },
    { src: PolinkLogo, url: "https://play.google.com/store/apps/details?id=com.app.PoLink&hl=en_IN&pli=1" },
    { src: CrowdLogo, url: "https://crowd1.club/" },
    { src: PolluxLogo, url: "https://polluxchain.com/" },
    { src: polinkextLogo, url: "https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm" },
  ];

  
  const projects = [
    {
      name: "Uvitoken",
      description:
        "A decentralized token offering cutting-edge DeFi solutions. Learn more about its unique ecosystem.",
      image:  UvitokenLogo, // Replace with your actual image path
      url: "https://www.uvitoken.com",
    },
    {
      name: "SulToken",
      description:
        "SulToken is revolutionizing blockchain with high scalability and low transaction fees.",
      image: SulLogo,
      url: "https://www.sultoken.com",
    },
    {
      name: "Polink",
      description:
        "Polink connects ecosystems, enabling seamless interoperability across blockchain networks.",
      image: PolinkLogo,
      url: "https://www.polink.com",
    },
    {
      name: "CrowdToken",
      description:
        "Empowering communities with decentralized governance and collaborative decision-making.",
      image: CrowdLogo,
      url: "https://www.crowdtoken.com",
    },
   
    {
      name: "CrowdToken",
      description:
        "Empowering communities with decentralized governance and collaborative decision-making.",
      image: polinkextLogo,
      url: "https://www.crowdtoken.com",
    },
    {
      name: "CrowdToken",
      description:
        "Empowering communities with decentralized governance and collaborative decision-making.",
      image: spotLogo,
      url: "https://www.crowdtoken.com",
    },
    
  ];

  // Reusable Card Component
  const ProjectCard = ({ name, description, image, url }: Project) => {
  return (
    <div className="relative bg-black p-6 pt-10 pb-12 border-[1px] border-[#444343] rounded-tl-3xl rounded-br-3xl hover:border-r-[4px] hover:border-b-[4px] hover:border-r-[#8af969] hover:border-b-[#8af969] transform transition-transform duration-200 hover:scale-105">
      <div className="absolute top-[-20px] right-[-20px] z-10 bg-black w-[100px] h-[100px] shadow-inner shadow-[#8af969] rounded-full flex justify-center p-2">
        <Image
          src={image}
          alt={`${name} Logo`}
          width={60}
          height={60}
          className="rounded-full object-contain"
        />
      </div>
      <h3 className="text-start text-xl font-semibold mb-8 text-white mt-4">{name}</h3>
      <p className="text-gray-300 text-start">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5FE768] mt-4 block underline text-start"
      >
        Visit Website
      </a>
    </div>
  );
};

  return (
    <div className="relative text-center px-2 md:px-4 lg:px-6 xl:px-44 mt-24 pb-64">
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
          >
            {[...Array(5)].map((_, sparkIndex) => (
              <motion.div
                key={`spark-${index}-${sparkIndex}`}
                className="absolute bg-yellow-300 rounded-full"
                style={{
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`,
                  bottom: 0,
                  left: `${Math.random() * 100 - 50}%`,
                }}
                animate={{
                  y: [0, -10],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: Math.random() * 0.5 + 0.5,
                  repeat: Infinity,
                  delay: Math.random() * 0.2,
                }}
              />
            ))}
          </motion.div>
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
      <div className="relative z-10 text-white pb-64">
        <p className="text-2xl md:text-4xl font-bold">Our Diverse Ecosystem</p>
        <p className="text-md md:text-lg font-semibold pt-4 text-gray-300">
          Integrated Excellence with Pollux Chain
        </p>

        <div className="hidden md:flex justify-center md:mt-72 lg:mt-60">
          <div className="relative flex justify-center items-center md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-dashed border-2 border-white rounded-full">
            <div className="absolute flex justify-center items-center w-[320px] h-[320px] rounded-full">
              <Image
                src={polluxLogo}
                alt="Polluxcoin Logo"
                width={200}
                height={200}
                className="w-48 sm:w-64 md:w-48 lg:w-52"
              />
            </div>

            {[...Array(6)].map((_, index) => {
              const angle = (index * 360) / 6;
              const translateX = distances[index];

              // Fix for Framer Motion style compatibility

              const imageTransform = `rotate(${
                angle - 90
              }deg) translateX(${translateX}px)`;

              return (
                <React.Fragment key={index}>
                  {/* Ensuring Framer Motion's type compatibility */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "2px",
                      height: `${translateX}px`,
                      background: "linear-gradient(45deg, #55E128, #0A2505)", // Green gradient for the line
                      boxShadow:
                        "0 0 5px rgba(85,224,40, 0.6), 0 0 20px rgba(255, 255, 255, 0.5)",
                      transform: `rotate(${angle}deg)`, // Rotate the line
                      transformOrigin: "top",
                      zIndex: -1,
                    }}
                    animate={{
                      height: ["350px", "360px", "350px"], // Move the line up and down
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />

                  <div
                    className="absolute"
                    style={{
                      transform: imageTransform,
                      transformOrigin: "center",
                    }}
                  >
                    <motion.div
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "50%",
                      }}
                    >
                    <motion.div
                        animate={{ rotate: 360 }}
                        whileHover={{ rotate: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                          ease: "linear",
                        }}
                      >
                    <Link href={images[index].url} target="_blank">
                    <div
                      className="group relative rounded-full w-32 h-32 bg-black shadow-inner shadow-green-500 flex justify-center items-center">
                      <Image
                        src={images[index].src}
                        alt={`Polluxcoin Logo ${index}`}
                        width={70}
                        height={70}
                      />
                     </div>
                    </Link>
                    </motion.div> 
                     </motion.div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Projects */}
      <div className="relative text-center px-4 lg:px-16 mt-24 pb-64">
      <div className="flex flex-row space-x-4 items-center  ">
        <p>
          <GiConcentricCrescents size={32} color="#8af969" />
        </p>
        <p className="text-4xl font-semibold">Discover our Ecosystem</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default page;
