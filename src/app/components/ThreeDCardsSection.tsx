"use client"
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
// import { TypewriterEffect } from "./ui/Typewriter-effect";
import Typewriter from "../components/ui/Typerwriter";
// import Link from "next/link";



export default function ThreeDCardsSection() {
  // const words = [
  //   {
  //     text: "BUILD",
  //     className: "text-[#8af969]",
  //   },
  //   {
  //     text: "CONNECT",
  //     className: "text-[#8af969]",
  //   },
  //   {
  //     text: "THRIVE",
  //     className: "text-[#8af969]",
  //   },
    
  
  // ];
  const cards = [
    {
      title: "Create",
      tag: "Reimagine blockchain potential",
      description: "Transform ideas into impactful dApps with PolluxChain developer-friendly ecosystem.",
      image: "/create.png", // Relative path from the public directory
      link: "",
    },
    {
      title: "Protect	",
      tag: "Strengthen your applications",
      description: "Integrate advanced security measures to protect your users and data.",
      image: "/protect.png", // Relative path from the public directory
      link:"",
    },
    {
      title: "Expand	",
      tag: "Expand without limits",
      description: "Build on a platform designed to support your growth, no matter the scale. ",
      image: "/expand.png", // Relative path from the public directory
      link: "",
    },
    {
      title: "Optimize",
      tag: "Achieve peak performance",
      description: "Harness PolluxChain’s speed and efficiency to power high-performance decentralized solutions. ",
      image: "/optimize.png", // Relative path from the public directory
      link: "",
    },
  ];

  return (
    <section className="my-12 px-2 md:px-4 lg:px-6 xl:px-20 flex flex-col justify-center items-center w-full">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-8 md:mt-12 mb-2 leading-snug ">EMPOWERING DEVELOPERS AND COMMUNITIES TO </p>
        <div className="h-[60px] ">
          <Typewriter />
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-8 lg:gap-6 w-full">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var w-full h-full">
          <CardBody className="text-center relative group/card bg-black border-[1px] border-[#818080] w-full h-full rounded-2xl p-6 md:p-8 lg:p-6 flex flex-col">
            <div className="flex justify-center">
              <CardItem translateZ={50} className="text-[#8af969] text-2xl font-bold ">
                {card.title}
              </CardItem>
            </div>
            
            
            <div className="flex justify-center">
              <CardItem translateZ={60} className="text-lg mt-2 break-words overflow-hidden font-semibold">
                {card.tag}
              </CardItem>
            </div>
  
            <CardItem translateZ={100} className="w-full h-48 mt-6 flex justify-center items-center">
  <Image
    src={card.image}
    alt={`${card.title} image`}
    width={250}
    height={150}
    className="h-65 w-40 object-cover rounded-xl group-hover/card:scale-105 group-hover/card:shadow-xl transition-transform duration-200"
  />
</CardItem>

  
            <CardItem translateZ={60} className="text-lg text-neutral-500 mt-2 break-words overflow-hidden text-md font-medium">
              {card.description}
            </CardItem>
  
            <div className="flex justify-center items-center mt-auto">
              <CardItem
                translateZ={20}
                // as={Link}
                // href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xl font-semibold cursor-pointer"
              >
                Learn more →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </section>
  
  );
}

