'use Client'

import Image from "next/image";
import polluxLogo from "../../../public/polluxlogowhite.png";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
    return (
      <footer className="p-6 text-center px-4 md:px-4 lg:px-6 xl:px-64 mt-0 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="w-[40%] md:w-[10%]">
          <Image
              src={polluxLogo}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "100%" }}
              className="rounded-2xl"
            />
          </div>

          <div className="text-start mt-5 md:mt-0">
            <p className="text-xl font-bold text-[#8AF969]">Company</p>
            <p className="text-lg font-semibold pt-4">About Us </p>
            <p className="text-lg font-semibold pt-2">Contact</p>
          </div>

          <div className="text-start  mt-5 md:mt-0">
            <p className="text-xl font-bold text-[#8AF969]">Quick Links</p>
            <p className="text-lg font-semibold pt-4">Pollux Explorer</p>
            <p className="text-lg font-semibold pt-2">Pollux Staking</p>
            <p className="text-lg font-semibold pt-2">Validator</p>
          </div>

          <div className="text-start  mt-5 md:mt-0">
            <p className="text-xl font-bold text-[#8AF969]">Explore</p>
            <p className="text-lg font-semibold pt-4">Ecosystem</p>
            <p className="text-lg font-semibold pt-2">Blog</p>
            <p className="text-lg font-semibold pt-2">Community</p>
            <p className="text-lg font-semibold pt-2">Brand Kit</p>
          </div>

          <div className="text-start  mt-5 md:mt-0">
            <p className="text-xl font-bold text-[#8AF969]">Learn </p>
            <p className="text-lg font-semibold pt-4">Documentation</p>
            <p className="text-lg font-semibold pt-2">Whitepaper</p>
            <p className="text-lg font-semibold pt-2">Become an Ambassador</p>
          </div>

          <div className="flex flex-row space-x-3  mt-5 md:mt-0">
            <p><BsTwitterX size={28}/></p>
            <p><FaTelegramPlane size={28}/></p>
            <p><SiDiscord size={28}/></p>
          </div>
        </div>
         
          <p className="mt-16 mb-16 text-lg md:text-xl font-bold border-t-[1px] border-[#4e4c4c] pt-8">© 2024 Polluxchain. All rights reserved.</p>
      </footer>
    );
  }
  