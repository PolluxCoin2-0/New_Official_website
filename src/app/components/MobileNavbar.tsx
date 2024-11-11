"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: ["Documentation", "Grant Program", "Build"],
    },
    {
      title: "Networks",
      dropdown: [
        "Validator App",
        "Nominator App",
        "Pollux Explorer",
        "Pollux Staking",
      ],
    },
    {
      title: "Community",
      dropdown: ["Community", "Partner With Us", "Blog", "News & Events"],
    },
    { title: "Ecosystem", href: "/ecosystem" },
    { title: "About", dropdown: ["About Us", "Contact"] },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <div className="cursor-pointer">
          <img
            src="/polluxlogowhite.png"
            alt="Polluxcoin Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Right: Menu Toggle */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black text-white px-6 py-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="group">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                >
                  <span className="hover:text-[#8af969]">{item.title}</span>
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdownIndex === index && (
                  <ul className="pl-4 pt-2 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={`/${subItem
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block hover:text-[#8af969] transition-all"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Get $POLLUX Button */}
          <div className="mt-6">
            <Button
              variant="primary"
              className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full"
            >
              Get $POLLUX
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
