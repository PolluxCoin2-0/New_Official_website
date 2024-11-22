'use Client'
import Image from "next/image";
import Link from "next/link";
import polluxLogo from "../../../public/polluxlogowhite.png";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-6 text-center px-4 md:px-4 lg:px-6 xl:px-44 mt-0 md:mt-16">
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
          <Link href="/">
          <p  className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">About Us</p>
          </Link>
          <Link href="/">
          <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Contact</p>
          </Link>
        </div>

        {/* <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Quick Links</p>
          <a href="/explorer" className="text-lg font-semibold pt-4 block">Pollux Explorer</a>
          <a href="/staking" className="text-lg font-semibold pt-2 block">Pollux Staking</a>
          <a href="/validator" className="text-lg font-semibold pt-2 block">Validator</a>
        </div> */}

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Explore</p>
          <Link href="/" target="_blank">
          <p className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">Ecosystem</p>
          </Link>
          <Link href="https://medium.com/@PolluxDao" target="_blank">
          <p  className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Blog</p>
          </Link>
          <Link href="/" target="_blank">
          <p  className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Community</p>
          </Link>
          <Link href="/" target="_blank">
          <p  className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Brand Kit</p>
          </Link>
        </div>

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Learn</p>
          <Link href="/" target="_blank">
          <p  className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">Documentation</p>
          </Link>
          <Link href="/Whitepaper.pdf" target="_blank">
          <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Whitepaper</p>
          </Link>
          <Link href="/" target="_blank">
          <p  className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">Become an Ambassador</p>
          </Link>
        </div>

        <div className="flex flex-row space-x-3 mt-5 md:mt-0">
          <a href="https://x.com/Polluxchain" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={28} />
          </a>
         
          <a href="https://www.instagram.com/polluxchainofficial/" target="_blank" rel="noopener noreferrer">
            <SiInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com/company/polluxchain/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={28} />
          </a>
          <a href="https://t.me/polluxchainDAO" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={32} />
          </a>
        </div>
      </div>
      
      <div className="flex flex-row justify-center items-center space-x-2 mt-16 mb-8  border-t-[1px] border-[#4e4c4c] pt-8">
      <p><FaRegCopyright size={20}/></p>
      <p className="text-lg md:text-xl font-bold">
      2024 Polluxchain. All rights reserved.
      </p>
      </div>
    </footer>
  );
}