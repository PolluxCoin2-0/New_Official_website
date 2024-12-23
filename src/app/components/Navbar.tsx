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
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi"; // Social dropdown icon
import Image from "next/image";
import polluxBlackLogo from "../../../public/polluxBlackLogo.png";

export default function Navbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

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

  const handleSocialDropdownToggle = () => {
    setIsSocialDropdownOpen(!isSocialDropdownOpen);
  };

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: [
        { title: "Documentation ➚", href: "/" },
        { title: "Grant Program", href: "/" },
        { title: "Build", href: "/" },
      ],
    },
    // {
    //   title: "Networks",
    //   dropdown: [
    //     { title: "Validator App ➚", href: "" },
    //     { title: "Nominator App ➚", href: "" },
    //     { title: "Pollux Explorer ➚", href: "" },
    //     { title: "Pollux Staking ➚", href: "" },
    //   ],
    // },
    {
      title: "Community",
      dropdown: [
        { title: "Community", href: "/Community" },
        { title: "Partner With Us", href: "https://docs.google.com/forms/d/e/1FAIpQLScf1JyE_H4GUiJNSBvdcK4-7xDYB_c1GaMbsvSkkXZJR8rDBQ/viewform" },
        { title: "Blog ➚", href: "https://medium.com/@PolluxDao" },
        { title: "News & Events", href: "/" },
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
        { title: "Contact", href: "https://docs.google.com/forms/d/e/1FAIpQLScf1JyE_H4GUiJNSBvdcK4-7xDYB_c1GaMbsvSkkXZJR8rDBQ/viewform" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-2 md:px-4 lg:px-6 xl:px-44 ">
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
        <NavigationMenu className="flex space-x-6">
          <NavigationMenuList className="flex space-x-12">
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
                        className="absolute left-0 mt-4 w-max bg-black text-white rounded-lg shadow-lg"
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
        <div className="flex items-center space-x-4 relative">
          {/* Social Media Dropdown */}
          <button
            onClick={handleSocialDropdownToggle}
            className="text-white hover:text-[#8af969]"
          >
            <HiOutlineShare size={24} />
          </button>

          {/* Dropdown Content */}
          {isSocialDropdownOpen && (
            <div className="absolute top-10 right-0 mt-2 w-max bg-black text-white rounded-lg shadow-lg">
              <ul className="p-2">
                <li>
                  <Link
                    href="https://x.com/PolluxChain"
                    target="_blank"
                    className="flex items-center space-x-2 text-sm px-4 py-2 hover:bg-[#8af969] hover:text-black rounded-md"
                  >
                    <BsTwitterX size={18} />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/polluxchainDAO"
                    target="_blank"
                    className="flex items-center space-x-2 text-sm px-4 py-2 hover:bg-[#8af969] hover:text-black rounded-md"
                  >
                    <FaTelegramPlane size={20} />
                    <span>Telegram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/polluxchainofficial/"
                    target="_blank"
                    className="flex items-center space-x-2 text-sm px-4 py-2 hover:bg-[#8af969] hover:text-black rounded-md"
                  >
                    <FaInstagram size={20} />
                    <span>Instagram</span>
                  </Link>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/polluxchain/"
                      target="_blank"
                      className="flex items-center space-x-2 text-sm px-4 py-2 hover:bg-[#8af969] hover:text-black rounded-md"
                    >
                      <FaLinkedinIn size={20} />
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
          )}

          {/* Get $POLLUX Button */}
          <Link href="https://linktr.ee/polluxchain"   target="_blank">
          <Button
            variant="primary"
            className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] hover:bg-[#8af969] hover:text-black transition-all rounded-xl duration-300 relative flex items-center justify-center h-10 w-36 px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <Image
                src={polluxBlackLogo}
                alt="Pollux Icon"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            ) : (
              <p className="font-semibold text-sm ">GET $POX</p>
            )}
          </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar (For 1024px and 768px screens) */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}
