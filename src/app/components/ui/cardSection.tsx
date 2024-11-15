'use client';

import React from 'react'
import Image from "next/image";
import Img from "../../../public/ele2.svg";
const cardSection = () => {
  return (
    <div>
        <div className="flex flex-row py-5 space-x-32 items-center mt-8">
        <div>
          <Image
            src={Img}
            alt="Polluxcoin Logo"
            width={320}
            height={320}
            className="w-64"
          />
        </div>

        <div className=" text-start">
          <p className="text-center text-xl font-medium c w-[150px] rounded-2xl  py-2">
            Sustainable
          </p>
          <p className="text-2xl font-semibold pt-4">
            Positioned for Scalability
          </p>
          <p className="text-[#a7a4a4] pt-2 text-md font-medium">
            With EVM/Wasm compatibility, easily deploy solidity smart contracts
            on the 5ireEVM chain and leverage WASM environment for
            future-proofing and high performance.
          </p>
          <div className="flex flex-row items-center space-x-4 pt-4 ">
            <p className=" text-2xl font-bold text-[#68A541]">50%</p>
            <p className=" text-xl font-semibold">Less Energy Usage</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardSection
