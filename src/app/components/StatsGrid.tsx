'use client';

import React from "react";
import Image from 'next/image'; // Import Image from next/image

type Stat = {
  label: string;
  value: string;
  icon: string;
};

const stats: Stat[] = [
  { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
  { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
  { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
  { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
];

export default function StatsGrid() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: HTMLDivElement) => {
    const { offsetWidth: width, offsetHeight: height } = element;
    const { clientX: mouseX, clientY: mouseY } = e;

    const moveX = (mouseX / width - 0.5) * 5;
    const moveY = (mouseY / height - 0.5) * 5;

    element.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  };

  const handleMouseLeave = (element: HTMLDivElement) => {
    element.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="px-0 md:px-4 lg:px-6 xl:px-40 py-4 mt-8">
    
      {/* Grid layout with responsive classes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 ">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-2xl transition transform 
            flex items-center space-x-3 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent
             hover:via-transparent hover:to-[#8bf969] hover:scale-105"
            style={{ boxShadow: "none", transformStyle: "flat" }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="flex-shrink-0">
              <Image
                src={stat.icon}
                alt={`${stat.label} Icon`}
                width={32}  // Adjust width
                height={32} // Adjust height
                onError={(e) => {
                  e.currentTarget.src = "/default-icon.svg"; // Fallback icon
                }}
                className="w-8 h-8" // You can keep the same size here
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-nowrap">{stat.label}</h3>
              <p className="text-2xl font-bold text-nowrap">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
