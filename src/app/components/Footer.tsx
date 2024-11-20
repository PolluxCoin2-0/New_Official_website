'use Client'
import Image from "next/image";
import Link from "next/link";
import polluxLogo from "../../../public/polluxlogowhite.png";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

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
          <p  className="text-lg font-medium pt-4 block">About Us</p>
          </Link>
          <Link href="/">
          <p className="text-lg font-medium pt-2 block">Contact</p>
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
          <Link href="/">
          <p className="text-lg font-medium pt-4 block">Ecosystem</p>
          </Link>
          <Link href="/">
          <p  className="text-lg font-medium pt-2 block">Blog</p>
          </Link>
          <Link href="/">
          <p  className="text-lg font-medium pt-2 block">Community</p>
          </Link>
          <Link href="/">
          <p  className="text-lg font-medium pt-2 block">Brand Kit</p>
          </Link>
        </div>

        <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Learn</p>
          <Link href="/">
          <p  className="text-lg font-medium pt-4 block">Documentation</p>
          </Link>
          <Link href="/Whitepaper.pdf">
          <p className="text-lg font-medium pt-2 block">Whitepaper</p>
          </Link>
          <Link href="/">
          <p  className="text-lg font-medium pt-2 block">Become an Ambassador</p>
          </Link>
        </div>

        <div className="flex flex-row space-x-3 mt-5 md:mt-0">
          <a href="https://x.com/Polluxchain" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={28} />
          </a>
          <a href="https://t.me/polluxchainDAO" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={28} />
          </a>
          <a href="https://www.instagram.com/polluxchainofficial/" target="_blank" rel="noopener noreferrer">
            <SiInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com/company/polluxchain/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={28} />
          </a>
        </div>
      </div>

      <p className="mt-16 mb-8 text-lg md:text-xl font-bold border-t-[1px] border-[#4e4c4c] pt-8">
        © 2024 Polluxchain. All rights reserved.
      </p>
    </footer>
  );
}