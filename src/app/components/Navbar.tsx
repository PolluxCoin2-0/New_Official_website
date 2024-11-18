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
import { ChevronDown } from "lucide-react"; // Keep this for the dropdown icon
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// Importing social media icons from react-icons
import Image from "next/image";

export default function Navbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: [
        { title: "Documentation →", href: "https://docpolluxchain.netlify.app/" },
        { title: "Grant Program", href: "/Grant" },
        { title: "Build", href: "/Build" },
      ],
    },
    {
      title: "Networks",
      dropdown: [
        { title: "Validator App →", href: "" },
        { title: "Nominator App →", href: "" },
        { title: "Pollux Explorer →", href: "" },
        { title: "Pollux Staking →", href: "" },
      ],
    },
    {
      title: "Community",
      dropdown: [
        { title: "Community", href: "/Community" },
        { title: "Partner With Us", href: "" },
        { title: "Blog →", href: "" },
        { title: "News & Events", href: "/Events" },
      ],
    },
    {
      title: "Ecosystem",
      href: "/Ecosystem",
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
    <nav className="fixed top-0 left-0 w-full z-50 px-2 md:px-4 lg:px-6 xl:px-64 ">
      {/* Desktop Navbar (lg and larger) */}
      <div className="hidden lg:flex flex-row items-center justify-between bg-black backdrop-blur-sm bg-opacity-30 py-2 ">
        {/* Left: Logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/polluxlogowhite.png"
              alt="Polluxcoin Logo"
              height={44}
              width={124}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu className="flex space-x-4">
          <NavigationMenuList className="flex space-x-8">
            {menuItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {!item.dropdown ? (
                  <Link
                    href={item.href}
                    className="flex items-center text-md font-medium space-x-1 text-white hover:text-[#8af969]"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger className="flex items-center text-md font-medium space-x-1 text-white hover:text-[#8af969]">
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          openDropdownIndex === index ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    </NavigationMenuTrigger>

                    {/* Dropdown Menu */}
                    {openDropdownIndex === index && (
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
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Social Media Icons and Get $POLLUX Button */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <Link href="https://x.com/" target="_blank" className="text-white hover:text-[#8af969]">
            <BsTwitterX size={18} />
          </Link>
          <Link href="https://t.me/" target="_blank" className="text-white hover:text-[#8af969]">
            <FaTelegramPlane size={20} />
          </Link>
          <Link href="https://instagram.com/" target="_blank" className="text-white hover:text-[#8af969]">
            <FaInstagram size={20} />
          </Link>

          {/* Get $POLLUX Button */}
          <Button
            variant="primary"
            className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] hover:bg-[#8af969] hover:text-black transition-all rounded-xl duration-300 relative flex items-center justify-center h-10 w-36 px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <Image
                src="/polluxicon.png"
                alt="Pollux Icon"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            ) : (
              <p className="font-semibold text-sm">GET $POX</p>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navbar (For 1024px and 768px screens) */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}
