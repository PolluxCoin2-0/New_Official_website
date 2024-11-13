// // src/app/components/ui/ValidatorCard.tsx

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValidatorCard = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl">
//       {/* Image Section */}
//       <div className="flex-1">
//         <Image
//           src="/validator-image.jpg" // Replace this with your actual image in public folder
//           alt="Validator Node"
//           width={400}
//           height={250}
//           className="rounded-lg object-cover"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white">
//         {/* Button Heading */}
//         <button className="border border-green-400 text-green-400 px-4 py-2 rounded-md bg-transparent hover:bg-green-400 hover:text-white transition-all mb-4">
//           Validator
//         </button>

//         {/* Main Heading */}
//         <h2 className="text-2xl lg:text-3xl font-bold mb-4">
//           How to Run a 5ire Validator Node and Participate in the Network
//         </h2>

//         {/* Description */}
//         <p className="text-lg mb-6">
//           Running a 5ire validator node allows you to participate in the
//           network, contribute to its security and decentralization, and be
//           rewarded for your participation.
//         </p>

//         {/* Learn More Button */}
//         <Link href="/learn-more">
//           <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
//             Learn More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ValidatorCard;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ValidatorCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientVisible, setGradientVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setGradientVisible(true);
  };

  const handleMouseLeave = () => {
    setGradientVisible(false);
  };

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center p-4 sm:p-6 lg:p-8 w-full max-w-3xl bg-transparent rounded-xl shadow-xl border border-gray-400"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: gradientVisible
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
          : undefined,
        borderImageSource: gradientVisible
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.8), transparent 50%)`
          : "none",
        borderImageSlice: 1,
      }}
    >
      {/* Image Section */}
      {/* <div className="flex-1">
        <Image
          src="/banner.jpg" // Replace with actual image path
          alt="Validator Node"
          width={350}
          height={220}
          className="rounded-lg object-cover"
        />
      </div> */}
      {/* Image Section */}
<div className="flex-1">
  <Image
    src="/banner.jpg" // Correct path to image in public folder
    alt="Validator Node"
    width={350}
    height={220}
    className="rounded-lg object-cover"
  />
</div>


      {/* Text Content */}
      <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white">
        {/* Button Heading */}
        <button className="border border-green-400 text-green-400 px-4 py-2 rounded-md bg-transparent mb-4">
          Validator
        </button>

        {/* Main Heading */}
        <h2 className="text-xl lg:text-2xl font-bold mb-4">
          How to Run a 5ire Validator Node and Participate in the Network
        </h2>

        {/* Description */}
        <p className="text-base lg:text-lg mb-6">
          Running a 5ire validator node allows you to participate in the
          network, contribute to its security and decentralization, and be
          rewarded for your participation.
        </p>

        {/* Learn More Button */}
        <Link href="/learn-more">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ValidatorCard;
