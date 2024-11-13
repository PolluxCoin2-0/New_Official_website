


"use client";

import React, { useState, useCallback } from "react";


import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image"; // Import the Image component
// import { PopupWidget } from "react-calendly";

export default function Navbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  // const [showCalendly, setShowCalendly] = useState(false); // State to toggle Calendly popup

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    setOpenDropdownIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setTimeout(() => {
      if (hoveredIndex === null) {
        setOpenDropdownIndex(null);
      }
    }, 200);
  }, [hoveredIndex]);

  // const handleContactClick = () => {
  //   setShowCalendly(true); // Show Calendly popup on contact click
  // };

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: [
        { title: "Documentation", href: "" },
        { title: "Grant Program", href: "/Grant" },
        { title: "Build", href: "" },
      ],
    },
    {
      title: "Networks",
      dropdown: [
        { title: "Validator App", href: "" },
        { title: "Nominator App", href: "" },
        { title: "Pollux Explorer", href: "" },
        { title: "Pollux Staking", href: "" },
      ],
    },
    {
      title: "Community",
      dropdown: [
        { title: "Community", href: "/Community" },
        { title: "Partner With Us", href: "" },
        { title: "Blog", href: "" },
        { title: "News & Events", href: "X" },
      ],
    },
    { title: "Ecosystem", 
      dropdown: [
        { title: "Wallet", href: "/Community" },
        { title: "Explorer", href: "" },
        { title: "Extension", href: "" },
        { title: "Uvi Mining", href: "",  },
      ],
     },
    {
      title: "About",
      dropdown: [
        { title: "About Us", href: "/AboutUs" },
        { title: "Contact", href: "" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row items-center justify-between bg-black backdrop-blur-sm bg-opacity-30 px-20 py-2">
        {/* Left: Logo */}
        <div className="cursor-pointer">

        <Image
    src="/polluxlogowhite.png"
    alt="Polluxcoin Logo"
    // fill
    height={44}
    width={124}
    style={{ objectFit: "contain" }}
    className=""
  />

        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu className="flex space-x-6">
          <NavigationMenuList className="flex space-x-14">
            {menuItems.map((item, index) => (
              <NavigationMenuItem
                key={index}      
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavigationMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#8af969]">
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  )}
                </NavigationMenuTrigger>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdownIndex === index && (
                  <NavigationMenuContent
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-0 mt-2 w-max bg-black text-white rounded-lg shadow-lg"
                  >
                    <ul className="p-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-[#8af969] hover:text-black rounded-md transition-all"
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2"
                            >
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Get $POLLUX Button */}
        <Button
          variant="primary"
          className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] hover:bg-[#8af969] hover:text-black transition-all duration-300 relative flex items-center justify-center h-12 w-40 px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <Image
              src="/polluxicon.png"
              alt="Pollux Icon"
              width={24} // Set the width
              height={24} // Set the height
              className="h-6 w-6"
            />
          ) : (
            <p className="font-semibold">GET $POX</p>
          )}
        </Button>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      {/* Calendly Popup */}
      {/* {showCalendly && (
       <PopupWidget
       url="https://calendly.com/durgeshgichi789/30min"
       rootElement={document.body}  // Use document.body as the root element
       text="Click here to schedule!"
       textColor="#ffffff"
       color="linear-gradient(to right, #37dd00, #8af969)"
     />
      )} */}
    </nav>
  );
}
