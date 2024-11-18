'use Client'
import Image from "next/image";
import polluxLogo from "../../../public/polluxlogowhite.png";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="p-6 text-center px-4 md:px-4 lg:px-6 xl:px-64 mt-0 md:mt-16">
      <div className="flex flex-col md:flex-row justify-between">
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
          <a href="/AboutUs" className="text-lg font-semibold pt-4 block">About Us</a>
          <a href="/Contact" className="text-lg font-semibold pt-2 block">Contact</a>
        </div>

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Quick Links</p>
          <a href="/explorer" className="text-lg font-semibold pt-4 block">Pollux Explorer</a>
          <a href="/staking" className="text-lg font-semibold pt-2 block">Pollux Staking</a>
          <a href="/validator" className="text-lg font-semibold pt-2 block">Validator</a>
        </div>

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Explore</p>
          <a href="/Ecosystem" className="text-lg font-semibold pt-4 block">Ecosystem</a>
          <a href="/Blog" className="text-lg font-semibold pt-2 block">Blog</a>
          <a href="/Community" className="text-lg font-semibold pt-2 block">Community</a>
          <a href="/Brandkit" className="text-lg font-semibold pt-2 block">Brand Kit</a>
        </div>

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Learn</p>
          <a href="https://docpolluxchain.netlify.app/" className="text-lg font-semibold pt-4 block">Documentation</a>
          <a href="/whitepaper" className="text-lg font-semibold pt-2 block">Whitepaper</a>
          <a href="/ambassador" className="text-lg font-semibold pt-2 block">Become an Ambassador</a>
        </div>

        <div className="flex flex-row space-x-3 mt-5 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={28} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={28} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <SiInstagram size={28} />
          </a>
        </div>
      </div>

      <p className="mt-16 mb-16 text-lg md:text-xl font-bold border-t-[1px] border-[#4e4c4c] pt-8">
        © 2024 Polluxchain. All rights reserved.
      </p>
    </footer>
  );
}