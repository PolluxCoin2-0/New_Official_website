// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import Link from "next/link";
// // // // import { Button } from "@/app/components/ui/button";
// // // // import { ChevronDown, Menu, X } from "lucide-react";

// // // // export default function MobileNavbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

// // // //   const menuItems = [
// // // //     { title: "Home", href: "/" },
// // // //     {
// // // //       title: "Developers",
// // // //       dropdown: ["Documentation", "Grant Program", "Build"],
// // // //     },
// // // //     {
// // // //       title: "Networks",
// // // //       dropdown: [
// // // //         "Validator App",
// // // //         "Nominator App",
// // // //         "Pollux Explorer",
// // // //         "Pollux Staking",
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Community",
// // // //       dropdown: ["Community", "Partner With Us", "Blog", "News & Events"],
// // // //     },
// // // //     { title: "Ecosystem", href: "/ecosystem" },
// // // //     { title: "About", dropdown: ["About Us", "Contact"] },
// // // //   ];

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
// // // //       <div className="flex items-center justify-between px-4 py-4">
// // // //         {/* Left: Logo */}
// // // //         <div className="cursor-pointer">
// // // //           <img
// // // //             src="/polluxlogowhite.png"
// // // //             alt="Polluxcoin Logo"
// // // //             className="h-10 w-auto"
// // // //           />
// // // //         </div>

// // // //         {/* Right: Menu Toggle */}
// // // //         <div
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //           className="cursor-pointer text-white"
// // // //         >
// // // //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       {menuOpen && (
// // // //         <div className="bg-black text-white px-6 py-4">
// // // //           <ul className="space-y-4">
// // // //             {menuItems.map((item, index) => (
// // // //               <li key={index} className="group">
// // // //                 <div
// // // //                   className="flex items-center justify-between cursor-pointer"
// // // //                   onClick={() =>
// // // //                     setOpenDropdownIndex(
// // // //                       openDropdownIndex === index ? null : index
// // // //                     )
// // // //                   }
// // // //                 >
// // // //                   <span className="hover:text-[#8af969]">{item.title}</span>
// // // //                   {item.dropdown && (
// // // //                     <ChevronDown
// // // //                       size={16}
// // // //                       className={`transition-transform duration-300 ${
// // // //                         openDropdownIndex === index ? "rotate-180" : ""
// // // //                       }`}
// // // //                     />
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Dropdown Menu */}
// // // //                 {item.dropdown && openDropdownIndex === index && (
// // // //                   <ul className="pl-4 pt-2 space-y-2">
// // // //                     {item.dropdown.map((subItem, subIndex) => (
// // // //                       <li key={subIndex}>
// // // //                         <Link
// // // //                           href={`/${subItem
// // // //                             .toLowerCase()
// // // //                             .replace(/\s+/g, "-")}`}
// // // //                           className="block hover:text-[#8af969] transition-all"
// // // //                         >
// // // //                           {subItem}
// // // //                         </Link>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 )}
// // // //               </li>
// // // //             ))}
// // // //           </ul>

// // // //           {/* Get $POLLUX Button */}
// // // //           <div className="mt-6">
// // // //             <Button
// // // //               variant="primary"
// // // //               className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full"
// // // //             >
// // // //               Get $POLLUX
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }


// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import Link from "next/link";
// // // // import { Button } from "@/app/components/ui/button";
// // // // import { ChevronDown, Menu, X } from "lucide-react";
// // // // import Image from "next/image";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // export default function MobileNavbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

// // // //   const menuItems = [
// // // //     { title: "Home", href: "/" },
// // // //     {
// // // //       title: "Developers",
// // // //       dropdown: ["Documentation", "Grant Program", "Build"],
// // // //     },
// // // //     {
// // // //       title: "Networks",
// // // //       dropdown: [
// // // //         "Validator App",
// // // //         "Nominator App",
// // // //         "Pollux Explorer",
// // // //         "Pollux Staking",
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Community",
// // // //       dropdown: ["Community", "Partner With Us", "Blog", "News & Events"],
// // // //     },
// // // //     { title: "Ecosystem", href: "/ecosystem" },
// // // //     { title: "About", dropdown: ["About Us", "Contact"] },
// // // //   ];

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
// // // //       <div className="flex items-center justify-between px-4 py-4">
// // // //         {/* Left: Logo */}
// // // //         <div className="cursor-pointer">
// // // //           <Image
// // // //             src="/polluxlogowhite.png"
// // // //             alt="Polluxcoin Logo"
// // // //             width={40}
// // // //             height={40}
// // // //             className="h-10 w-auto"
// // // //           />
// // // //         </div>

// // // //         {/* Right: Menu Toggle */}
// // // //         <div
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //           className="cursor-pointer text-white"
// // // //         >
// // // //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -10 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="bg-black text-white px-6 py-4"
// // // //           >
// // // //             <ul className="space-y-4">
// // // //               {menuItems.map((item, index) => (
// // // //                 <li
// // // //                   key={index}
// // // //                   className="group"
// // // //                   tabIndex={0}
// // // //                   onClick={() =>
// // // //                     setOpenDropdownIndex(openDropdownIndex === index ? null : index)
// // // //                   }
// // // //                   onKeyDown={(e) => {
// // // //                     if (e.key === "Enter" || e.key === " ") {
// // // //                       setOpenDropdownIndex(openDropdownIndex === index ? null : index);
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   <div className="flex items-center justify-between cursor-pointer">
// // // //                     <span className="hover:text-[#8af969]">{item.title}</span>
// // // //                     {item.dropdown && (
// // // //                       <ChevronDown
// // // //                         size={16}
// // // //                         className={`transition-transform duration-300 ${
// // // //                           openDropdownIndex === index ? "rotate-180" : ""
// // // //                         }`}
// // // //                       />
// // // //                     )}
// // // //                   </div>

// // // //                   {/* Dropdown Menu */}
// // // //                   {item.dropdown && openDropdownIndex === index && (
// // // //                     <ul className="pl-4 pt-2 space-y-2">
// // // //                       {item.dropdown.map((subItem, subIndex) => (
// // // //                         <li key={subIndex}>
// // // //                           <Link
// // // //                             href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
// // // //                             className="block hover:text-[#8af969] transition-all"
// // // //                           >
// // // //                             {subItem}
// // // //                           </Link>
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                   )}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>

// // // //             {/* Get $POLLUX Button */}
// // // //             <div className="mt-6">
// // // //               <Button
// // // //                 variant="primary"
// // // //                 className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full"
// // // //               >
// // // //                 Get $POLLUX
// // // //               </Button>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </nav>
// // // //   );
// // // // }


// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import Link from "next/link";
// // // // import { Button } from "@/app/components/ui/button";
// // // // import { ChevronDown, Menu, X } from "lucide-react";
// // // // import Image from "next/image";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // export default function MobileNavbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

// // // //   const menuItems = [
// // // //     { title: "Home", href: "/" },
// // // //     {
// // // //       title: "Developers",
// // // //       dropdown: [
// // // //         { title: "Documentation", href: "/documentation" },
// // // //         { title: "Grant Program", href: "/Grant" },
// // // //         { title: "Build", href: "/build" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Networks",
// // // //       dropdown: [
// // // //         { title: "Validator App", href: "/validator" },
// // // //         { title: "Nominator App", href: "/nominator" },
// // // //         { title: "Pollux Explorer", href: "/explorer" },
// // // //         { title: "Pollux Staking", href: "/staking" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: "Community",
// // // //       dropdown: [
// // // //         { title: "Community", href: "/community" },
// // // //         { title: "Partner With Us", href: "/partner" },
// // // //         { title: "Blog", href: "/blog" },
// // // //         { title: "News & Events", href: "/news" },
// // // //       ],
// // // //     },
// // // //     { title: "Ecosystem", href: "/ecosystem" },
// // // //     {
// // // //       title: "About",
// // // //       dropdown: [
// // // //         { title: "About Us", href: "/about-us" },
// // // //         { title: "Contact", href: "/contact" },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
// // // //       <div className="flex items-center justify-between px-4 py-4">
// // // //         {/* Left: Logo */}
// // // //         <div className="cursor-pointer">
// // // //           <Image
// // // //             src="/polluxlogowhite.png"
// // // //             alt="Polluxcoin Logo"
// // // //             width={40}
// // // //             height={40}
// // // //             className="h-10 w-auto"
// // // //           />
// // // //         </div>

// // // //         {/* Right: Menu Toggle */}
// // // //         <div
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //           className="cursor-pointer text-white"
// // // //         >
// // // //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -10 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="bg-black text-white px-6 py-4"
// // // //           >
// // // //             <ul className="space-y-4">
// // // //               {menuItems.map((item, index) => (
// // // //                 <li key={index} className="group">
// // // //                   {item.href ? (
// // // //                     <Link
// // // //                       href={item.href}
// // // //                       className="flex items-center justify-between cursor-pointer hover:text-[#8af969]"
// // // //                     >
// // // //                       {item.title}
// // // //                     </Link>
// // // //                   ) : (
// // // //                     <div
// // // //                       className="flex items-center justify-between cursor-pointer"
// // // //                       onClick={() =>
// // // //                         setOpenDropdownIndex(
// // // //                           openDropdownIndex === index ? null : index
// // // //                         )
// // // //                       }
// // // //                     >
// // // //                       <span className="hover:text-[#8af969]">{item.title}</span>
// // // //                       <ChevronDown
// // // //                         size={16}
// // // //                         className={`transition-transform duration-300 ${
// // // //                           openDropdownIndex === index ? "rotate-180" : ""
// // // //                         }`}
// // // //                       />
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Dropdown Menu */}
// // // //                   {item.dropdown && openDropdownIndex === index && (
// // // //                     <ul className="pl-4 pt-2 space-y-2">
// // // //                       {item.dropdown.map((subItem, subIndex) => (
// // // //                         <li key={subIndex}>
// // // //                           <Link
// // // //                             href={subItem.href}
// // // //                             className="block hover:text-[#8af969] transition-all"
// // // //                           >
// // // //                             {subItem.title}
// // // //                           </Link>
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                   )}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
            

// // // //             {/* Get $POLLUX Button */}
// // // //             <div className="mt-6">
// // // //               <Button
// // // //                 variant="primary"
// // // //                 className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full"
// // // //               >
// // // //                 Get $POLLUX
// // // //               </Button>
// // // //             </div>
            
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
      
// // // //     </nav>
// // // //   );
// // // // }



// // // import React, { useState } from "react";
// // // import Link from "next/link";
// // // import { Button } from "@/app/components/ui/button";
// // // import { ChevronDown, Menu, X } from "lucide-react";
// // // import Image from "next/image";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import the social media icons
// // // import { BsTwitterX } from "react-icons/bs";

// // // export default function MobileNavbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

// // //   const menuItems = [
// // //     { title: "Home", href: "/" },
// // //     {
// // //       title: "Developers",
// // //       dropdown: [
// // //         { title: "Documentation", href: "/documentation" },
// // //         { title: "Grant Program", href: "/Grant" },
// // //         { title: "Build", href: "/build" },
// // //       ],
// // //     },
// // //     {
// // //       title: "Networks",
// // //       dropdown: [
// // //         { title: "Validator App", href: "/validator" },
// // //         { title: "Nominator App", href: "/nominator" },
// // //         { title: "Pollux Explorer", href: "/explorer" },
// // //         { title: "Pollux Staking", href: "/staking" },
// // //       ],
// // //     },
// // //     {
// // //       title: "Community",
// // //       dropdown: [
// // //         { title: "Community", href: "/community" },
// // //         { title: "Partner With Us", href: "/partner" },
// // //         { title: "Blog", href: "/blog" },
// // //         { title: "News & Events", href: "/news" },
// // //       ],
// // //     },
// // //     { title: "Ecosystem", href: "/ecosystem" },
// // //     {
// // //       title: "About",
// // //       dropdown: [
// // //         { title: "About Us", href: "/about-us" },
// // //         { title: "Contact", href: "/contact" },
// // //       ],
// // //     },
// // //   ];

// // //   return (
// // //     <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
// // //       <div className="flex items-center justify-between px-4 py-4">
// // //         {/* Left: Logo */}
// // //         <div className="cursor-pointer">
// // //           <Image
// // //             src="/polluxlogowhite.png"
// // //             alt="Polluxcoin Logo"
// // //             width={40}
// // //             height={40}
// // //             className="h-10 w-auto"
// // //           />
// // //         </div>

// // //         {/* Right: Menu Toggle */}
// // //         <div
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //           className="cursor-pointer text-white"
// // //         >
// // //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <AnimatePresence>
// // //         {menuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -10 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="bg-black text-white px-6 py-4"
// // //           >
// // //             <ul className="space-y-4">
// // //               {menuItems.map((item, index) => (
// // //                 <li key={index} className="group">
// // //                   {item.href ? (
// // //                     <Link
// // //                       href={item.href}
// // //                       className="flex items-center justify-between cursor-pointer hover:text-[#8af969]"
// // //                     >
// // //                       {item.title}
// // //                     </Link>
// // //                   ) : (
// // //                     <div
// // //                       className="flex items-center justify-between cursor-pointer"
// // //                       onClick={() =>
// // //                         setOpenDropdownIndex(
// // //                           openDropdownIndex === index ? null : index
// // //                         )
// // //                       }
// // //                     >
// // //                       <span className="hover:text-[#8af969]">{item.title}</span>
// // //                       <ChevronDown
// // //                         size={16}
// // //                         className={`transition-transform duration-300 ${
// // //                           openDropdownIndex === index ? "rotate-180" : ""
// // //                         }`}
// // //                       />
// // //                     </div>
// // //                   )}

// // //                   {/* Dropdown Menu */}
// // //                   {item.dropdown && openDropdownIndex === index && (
// // //                     <ul className="pl-4 pt-2 space-y-2">
// // //                       {item.dropdown.map((subItem, subIndex) => (
// // //                         <li key={subIndex}>
// // //                           <Link
// // //                             href={subItem.href}
// // //                             className="block hover:text-[#8af969] transition-all"
// // //                           >
// // //                             {subItem.title}
// // //                           </Link>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   )}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* Get $POLLUX Button */}
// // //             <div className="mt-6">
// // //               <Button
// // //                 variant="primary"
// // //                 className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full"
// // //               >
// // //                 Get $POLLUX
// // //               </Button>
// // //             </div>

// // //             {/* Social Media Icons */}
// // //             <div className="mt-6 flex justify-center space-x-4">
// // //               <Link
// // //                 href="https://x.com/"
// // //                 target="_blank"
// // //                 className="text-white hover:text-[#8af969]"
// // //               >
// // //                 <BsTwitterX size={20} />
// // //               </Link>
// // //               <Link
// // //                 href="https://t.me/"
// // //                 target="_blank"
// // //                 className="text-white hover:text-[#8af969]"
// // //               >
// // //                 <FaTelegramPlane size={20} />
// // //               </Link>
// // //               <Link
// // //                 href="https://instagram.com/"
// // //                 target="_blank"
// // //                 className="text-white hover:text-[#8af969]"
// // //               >
// // //                 <FaInstagram size={20} />
// // //               </Link>
// // //               <Link
// // //                 href="https://linkedin.com/"
// // //                 target="_blank"
// // //                 className="text-white hover:text-[#8af969]"
// // //               >
// // //                 <FaLinkedin size={20} />
// // //               </Link>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </nav>
// // //   );
// // // }








import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Developers",
      dropdown: [
        { title: "Documentation", href: "/" },
        { title: "Grant Program", href: "/" },
        { title: "Build", href: "/" },
      ],
    },
    // {
    //   title: "Networks",
    //   dropdown: [
    //     { title: "Validator App", href: "/validator" },
    //     { title: "Nominator App", href: "/nominator" },
    //     { title: "Pollux Explorer", href: "/explorer" },
    //     { title: "Pollux Staking", href: "/staking" },
    //   ],
    // },
    {
      title: "Community",
      dropdown: [
        { title: "Community", href: "/" },
        { title: "Partner With Us", href: "/" },
        { title: "Blog", href: "/" },
        { title: "News & Events", href: "/" },
      ],
    },
    { title: "Ecosystem", href: "/" },
    {
      title: "About",
      dropdown: [
        { title: "About Us", href: "/" },
        { title: "Contact", href: "/" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm bg-opacity-30 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <div className="cursor-pointer">
          <Image
            src="/polluxlogowhite.png"
            alt="Polluxcoin Logo"
            width={40}
            height={40}
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
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent text-white px-6 py-4 flex flex-col items-center h-screen"
    >
      <ul className="space-y-4 w-full flex flex-col items-center relative">
        {menuItems.map((item, index) => (
          <li key={index} className="group w-full text-center relative">
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center justify-center cursor-pointer hover:text-[#8af969] w-full"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            ) : (
              <div
                className="flex items-center justify-center cursor-pointer w-full"
                onClick={() =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  )
                }
              >
                <span className="hover:text-[#8af969]">{item.title}</span>
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform duration-300 ${
                    openDropdownIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}

            {/* Dropdown Menu Above Other Items */}
            {item.dropdown && openDropdownIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 mx-auto border border-gray-500 bg-[#0f0f0f] p-4 rounded-md mt-2 w-3/4 text-left z-10"
              >
                <ul className="space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block hover:text-[#8af969] transition-all"
                        onClick={() => setMenuOpen(false)} // Close menu on dropdown item click
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Insert the button and social icons after the "About" menu */}
            {item.title === "About" && (
              <>
                {/* Get $POLLUX Button */}
                <div className="mt-4 w-full flex justify-center">
                  <Button
                    variant="primary"
                    className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full max-w-xs"
                  >
                    Get $POLLUX
                  </Button>
                </div>

                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-4">
                  <Link
                    href="https://x.com/PolluxChain"
                    target="_blank"
                    className="text-white hover:text-[#8af969]"
                  >
                    <BsTwitterX size={20} />
                  </Link>
                  <Link
                    href="https://t.me/"
                    target="_blank"
                    className="text-white hover:text-[#8af969]"
                  >
                    <FaTelegramPlane size={20} />
                  </Link>
                  <Link
                    href="https://instagram.com/"
                    target="_blank"
                    className="text-white hover:text-[#8af969]"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link
                    href="https://linkedin.com/"
                    target="_blank"
                    className="text-white hover:text-[#8af969]"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>



    </nav>
  );
}


// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/app/components/ui/button";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// export default function MobileNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

//   const menuItems = [
//     { title: "Home", href: "/" },
//     {
//       title: "Developers",
//       dropdown: [
//         { title: "Documentation", href: "/documentation" },
//         { title: "Grant Program", href: "/Grant" },
//         { title: "Build", href: "/build" },
//       ],
//     },
//     {
//       title: "Networks",
//       dropdown: [
//         { title: "Validator App", href: "/validator" },
//         { title: "Nominator App", href: "/nominator" },
//         { title: "Pollux Explorer", href: "/explorer" },
//         { title: "Pollux Staking", href: "/staking" },
//       ],
//     },
//     {
//       title: "Community",
//       dropdown: [
//         { title: "Community", href: "/community" },
//         { title: "Partner With Us", href: "/partner" },
//         { title: "Blog", href: "/blog" },
//         { title: "News & Events", href: "/news" },
//       ],
//     },
//     { title: "Ecosystem", href: "/ecosystem" },
//     {
//       title: "About",
//       dropdown: [
//         { title: "About Us", href: "/about-us" },
//         { title: "Contact", href: "/contact" },
//       ],
//     },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#131212] z-50 shadow-md">
//       <div className="flex items-center justify-between px-4 py-4">
//         {/* Logo Centered */}
//         <div className="cursor-pointer mx-auto">
//           <Image
//             src="/polluxlogowhite.png"
//             alt="Polluxcoin Logo"
//             width={40}
//             height={40}
//             className="h-10 w-auto"
//           />
//         </div>

//         {/* Menu Toggle */}
//         <div
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="cursor-pointer text-white absolute right-4"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="bg-[#131212]  text-white px-60 py-6"
//           >
//             <ul className="flex flex-col items-center space-y-4">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="group w-full text-center">
//                   {item.href ? (
//                     <Link
//                       href={item.href}
//                       className="block cursor-pointer hover:text-[#8af969]"
//                     >
//                       {item.title}
//                     </Link>
//                   ) : (
//                     <div
//                       className="flex items-center justify-center cursor-pointer"
//                       onClick={() =>
//                         setOpenDropdownIndex(
//                           openDropdownIndex === index ? null : index
//                         )
//                       }
//                     >
//                       <span className="hover:text-[#8af969]">{item.title}</span>
//                       <ChevronDown
//                         size={16}
//                         className={`ml-2 transition-transform duration-300 ${
//                           openDropdownIndex === index ? "rotate-180" : ""
//                         }`}
//                       />
//                     </div>
//                   )}

//                   {/* Dropdown Menu in Square Box */}
//                   {item.dropdown && openDropdownIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{ duration: 0.3 }}
//                       className="border border-gray-500 bg-[#1a1a1a] p-4 rounded-md mt-2 w-full text-center"
//                     >
//                       <ul className="space-y-2">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               href={subItem.href}
//                               className="block hover:text-[#8af969] transition-all"
//                             >
//                               {subItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* Get $POLLUX Button */}
//             <div className="mt-6 flex justify-center">
//               <Button
//                 variant="primary"
//                 className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full max-w-xs"
//               >
//                 Get $POLLUX
//               </Button>
//             </div>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex justify-center space-x-4">
//               <Link href="https://x.com/" target="_blank" className="text-white hover:text-[#8af969]">
//                 <BsTwitterX size={20} />
//               </Link>
//               <Link href="https://t.me/" target="_blank" className="text-white hover:text-[#8af969]">
//                 <FaTelegramPlane size={20} />
//               </Link>
//               <Link href="https://instagram.com/" target="_blank" className="text-white hover:text-[#8af969]">
//                 <FaInstagram size={20} />
//               </Link>
//               <Link href="https://linkedin.com/" target="_blank" className="text-white hover:text-[#8af969]">
//                 <FaLinkedin size={20} />
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/app/components/ui/button";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// export default function MobileNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

//   const menuItems = [
//     { title: "Home", href: "/" },
//     {
//       title: "Developers",
//       dropdown: [
//         { title: "Documentation", href: "/documentation" },
//         { title: "Grant Program", href: "/Grant" },
//         { title: "Build", href: "/build" },
//       ],
//     },
//     {
//       title: "Networks",
//       dropdown: [
//         { title: "Validator App", href: "/validator" },
//         { title: "Nominator App", href: "/nominator" },
//         { title: "Pollux Explorer", href: "/explorer" },
//         { title: "Pollux Staking", href: "/staking" },
//       ],
//     },
//     {
//       title: "Community",
//       dropdown: [
//         { title: "Community", href: "/community" },
//         { title: "Partner With Us", href: "/partner" },
//         { title: "Blog", href: "/blog" },
//         { title: "News & Events", href: "/news" },
//       ],
//     },
//     { title: "Ecosystem", href: "/ecosystem" },
//     {
//       title: "About",
//       dropdown: [
//         { title: "About Us", href: "/about-us" },
//         { title: "Contact", href: "/contact" },
//       ],
//     },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#131212] z-50 shadow-md">
//       <div className="flex items-center justify-between px-4 py-4">
//         {/* Logo Centered */}
//         <div className="cursor-pointer mx-auto">
//           <Image
//             src="/polluxlogowhite.png"
//             alt="Polluxcoin Logo"
//             width={40}
//             height={40}
//             className="h-10 w-auto"
//           />
//         </div>

//         {/* Menu Toggle */}
//         <div
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="cursor-pointer text-white absolute right-4"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-[#131212]/80 backdrop-blur-lg text-white px-6 py-4"
//           >
//             <ul className="flex flex-col items-center space-y-4">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="relative group w-full text-center">
//                   {item.href ? (
//                     <Link
//                       href={item.href}
//                       className="block cursor-pointer hover:text-[#8af969]"
//                     >
//                       {item.title}
//                     </Link>
//                   ) : (
//                     <div
//                       className="flex items-center justify-center cursor-pointer"
//                       onClick={() =>
//                         setOpenDropdownIndex(
//                           openDropdownIndex === index ? null : index
//                         )
//                       }
//                     >
//                       <span className="hover:text-[#8af969]">{item.title}</span>
//                       <ChevronDown
//                         size={16}
//                         className={`ml-2 transition-transform duration-300 ${
//                           openDropdownIndex === index ? "rotate-180" : ""
//                         }`}
//                       />
//                     </div>
//                   )}

//                   {/* Dropdown Menu */}
//                   {item.dropdown && openDropdownIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute left-0 right-0 bg-[#1a1a1a] p-4 mt-2 border border-gray-500 rounded-md text-center"
//                     >
//                       <ul className="space-y-2">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               href={subItem.href}
//                               className="block hover:text-[#8af969] transition-all"
//                             >
//                               {subItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* Get $POLLUX Button */}
//             <div className="mt-6 flex justify-center">
//               <Button
//                 variant="primary"
//                 className="bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] w-full max-w-xs"
//               >
//                 Get $POLLUX
//               </Button>
//             </div>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex justify-center space-x-4">
//               <Link
//                 href="https://x.com/"
//                 target="_blank"
//                 className="text-white hover:text-[#8af969]"
//               >
//                 <BsTwitterX size={20} />
//               </Link>
//               <Link
//                 href="https://t.me/"
//                 target="_blank"
//                 className="text-white hover:text-[#8af969]"
//               >
//                 <FaTelegramPlane size={20} />
//               </Link>
//               <Link
//                 href="https://instagram.com/"
//                 target="_blank"
//                 className="text-white hover:text-[#8af969]"
//               >
//                 <FaInstagram size={20} />
//               </Link>
//               <Link
//                 href="https://linkedin.com/"
//                 target="_blank"
//                 className="text-white hover:text-[#8af969]"
//               >
//                 <FaLinkedin size={20} />
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


