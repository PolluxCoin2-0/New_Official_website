"use Client";
import Image from "next/image";
import Link from "next/link";
import polluxLogo from "../../../public/polluxlogowhite.png";
import polinkLogo from "../../../public/polluxLogo (2).png";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-6 text-center px-4 md:px-4 lg:px-6 xl:px-44 mt-8 md:mt-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-[40%] md:w-[10%] -mt-6">
          <Image
            src={polluxLogo}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }}
            className=""
          />

          {/* polink */}
          <div>
            <Link href="https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm">
              <button
                type="button"
                className="flex items-center justify-center w-48 lg:w-44 xl:w-44 mt-3 text-white bg-black h-14 rounded-lg border-[1px] border-[#ffffff] "
              >
                <div className="w-[30%] mr-1 pl-2">
                  <Image
                    src={polinkLogo}
                    alt="banner-image"
                    width={0}
                    height={0}
                    style={{ width: "90%" }}
                    className=""
                  />
                </div>
                <div className="w-[70%] pr-2 ">
                <div className="text-start text-[10px]">Add</div>
                  <div className="-mt-1 font-sans text-md font-semibold text-nowrap text-start">
                  POLink Network
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="text-start mt-5 lg:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Company</p>
          <Link href="/AboutUs" target="_blank">
            <p className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">
              About Us
            </p>
          </Link>
          <Link href="/">
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Contact
            </p>
          </Link>
        </div>

        {/* <div className="text-start mt-5 md:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Quick Links</p>
          <a href="/explorer" className="text-lg font-semibold pt-4 block">Pollux Explorer</a>
          <a href="/staking" className="text-lg font-semibold pt-2 block">Pollux Staking</a>
          <a href="/validator" className="text-lg font-semibold pt-2 block">Validator</a>
        </div> */}

        <div className="text-start mt-5 lg:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Explore</p>
          <Link href="/Ecosystem" target="_blank">
            <p className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">
              Ecosystem
            </p>
          </Link>
          <Link href="https://medium.com/@PolluxDao" target="_blank">
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Blog
            </p>
          </Link>
          <Link href="/Community" target="_blank">
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Community
            </p>
          </Link>
          <Link href="/" target="_blank">
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Brand Kit
            </p>
          </Link>
        </div>

        <div className=" text-start mt-5 lg:mt-0">
          <p className="text-xl font-bold text-[#8AF969]">Learn</p>
          <Link href="/" target="_blank">
            <p className="text-lg font-medium pt-4 block hover:text-[#a7a4a4]">
              Documentation
            </p>
          </Link>
          <Link href="/Whitepaper.pdf" target="_blank">
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Whitepaper
            </p>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSee5dvxl7dq0Hei0dq4i7pkeM3iU7u3x46IMR1oDR6Loqc2mw/viewform"
            target="_blank"
          >
            <p className="text-lg font-medium pt-2 block hover:text-[#a7a4a4]">
              Become an Ambassador
            </p>
          </Link>
        </div>

        <div className=" flex flex-col">
          <div className="flex flex-row space-x-4 mt-5 lg:mt-0">
            <a
              href="https://x.com/Polluxchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX size={28} />
            </a>

            <a
              href="https://www.instagram.com/polluxchainofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/polluxchain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={28} />
            </a>
            <a
              href="https://t.me/polluxchainDAO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={36} />
            </a>
          </div>

          {/* Google Play */}
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1OwHb07DaJIphbDnRVoOf5d62KM2VkwrZ"
              download
            >
              <button
                type="button"
                className="flex items-center justify-center w-36 lg:w-40 xl:w-40 text-white bg-black rounded-lg h-12 border-[1px] border-[#ffffff]"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="22">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-start text-[10px]">GET IT ON</div>
                  <div className="-mt-1 font-sans text-lg font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
            </a>
          </div>

          {/*  App store  */}
          <div>
            <a
              href="https://apps.apple.com/in/app/polink-wallet/id6736746385"
              download
            >
              <button
                type="button"
                className="flex items-center justify-center w-36 lg:w-40 xl:w-40 mt-3 text-white bg-black h-12 rounded-lg border-[1px] border-[#ffffff] "
              >
                <div className="mr-6">
                  <svg viewBox="0 0 384 512" width="24">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-start text-[10px]">Download on the</div>
                  <div className="-mt-1 font-sans text-lg font-semibold">
                    App Store
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-1 md:space-x-2 mt-16 mb-8  border-t-[1px] border-[#4e4c4c] pt-8">
        <p className="block md:hidden">
          <FaRegCopyright size={14} />
        </p>
        <p className="hidden md:block">
          <FaRegCopyright size={20} />
        </p>
        <p className="text-sm md:text-xl font-bold text-nowrap ">
          2024 Polluxchain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
