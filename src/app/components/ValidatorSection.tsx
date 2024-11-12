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


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValidatorCard = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [gradientVisible, setGradientVisible] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setGradientVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setGradientVisible(false);
//   };

//   return (
//     <div
//       className="relative flex flex-col lg:flex-row items-center p-5 rounded-xl shadow-xl border border-gray-400"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         background: gradientVisible
//           ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
//           : undefined,
//         borderImageSource: gradientVisible
//           ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.8), transparent 50%)`
//           : "none",
//         borderImageSlice: 1,
//       }}
//     >
//       {/* Image Section */}
//       <div className="flex-1">
//         <Image
//           src="/validator-image.jpg" // Replace this with your actual image
//           alt="Validator Node"
//           width={400}
//           height={250}
//           className="rounded-lg object-cover"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white">
//         {/* Button Heading */}
//         <button className="border border-green-400 text-green-400 px-4 py-2 rounded-lg bg-transparent mb-4">
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
//         {/* <Link href="/learn-more">
//           <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all">
//             Learn More
//           </button>
//         </Link> */}

// <Link href="/learn-more">
//   <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//     <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//       Learn More
//     </span>
//   </button>
// </Link>

//       </div>
//     </div>
//   );
// };

// export default ValidatorCard;


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValidatorCard = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [gradientVisible, setGradientVisible] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setGradientVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setGradientVisible(false);
//   };

//   return (
//     <div
//       className="relative flex flex-col lg:flex-row items-center p-5 rounded-xl shadow-xl border border-gray-400"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         background: gradientVisible
//           ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
//           : undefined,
//       }}
//     >
//       {/* Image Section */}
//       <div className="flex-1">
//         <Image
//           src="/validator-image.jpg" // Replace this with your actual image
//           alt="Validator Node"
//           width={400}
//           height={250}
//           className="rounded-lg object-cover"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white">
//         {/* Button Heading */}
//         <button className="border border-green-400 text-green-400 px-4 py-2 rounded-lg bg-transparent mb-4">
//           Validator
//         </button>

//         {/* Main Heading */}
//         <h2 className="text-2xl lg:text-3xl font-bold mb-4">
//           How to Run a Pollux Validator Node and Participate in the Network
//         </h2>

//         {/* Description */}
//         <p className="text-lg mb-6">
//           Running a Pullux validator node allows you to participate in the
//           network, contribute to its security and decentralization, and be
//           rewarded for your participation.
//         </p>

//         {/* Learn More Button */}
//         <Link href="/learn-more">
//           <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//             <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Learn More
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ValidatorCard;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValidatorCard = () => {
//   // Handle mouse movement inside the card to display the gradient
//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     setMousePosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
//     setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setGradientVisible(true);
//   };

//   // Hide the gradient when mouse leaves the card
//   const handleMouseLeave = (
//     setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     setGradientVisible(false);
//   };

//   // Validator card component
//   const ValidatorCardContent = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [gradientVisible, setGradientVisible] = useState(false);

//     return (
//       <div
//         className="relative flex flex-col items-center p-5 rounded-xl shadow-xl border border-gray-400"
//         onMouseMove={(e) =>
//           handleMouseMove(e, setMousePosition, setGradientVisible)
//         }
//         onMouseLeave={() => handleMouseLeave(setGradientVisible)}
//         style={{
//           background: gradientVisible
//             ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
//             : undefined,
//         }}
//       >
//         {/* Image Section */}
//         <div className="flex-1">
//           <Image
//             src="/validator-image.jpg" // Replace with actual image
//             alt="Validator Node"
//             width={400}
//             height={250}
//             className="rounded-lg object-cover"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white">
//           <button className="border border-green-400 text-green-400 px-4 py-2 rounded-lg bg-transparent mb-4">
//             Validator
//           </button>
//           <h2 className="text-2xl lg:text-3xl font-bold mb-4">
//             How to Run a Pollux Validator Node and Participate in the Network
//           </h2>
//           <p className="text-lg mb-6">
//             Running a Pollux validator node allows you to participate in the
//             network, contribute to its security and decentralization, and be
//             rewarded for your participation.
//           </p>
//           <Link href="/learn-more">
//             <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//               <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 Learn More
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {/* First Validator Section (Full Width) */}
//       <ValidatorCardContent />

//       {/* Second and Third Validator Sections (Side by Side) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Second Validator Section */}
//         <ValidatorCardContent />

//         {/* Third Validator Section */}
//         <ValidatorCardContent />
//       </div>
//     </div>
//   );
// };

// export default ValidatorCard;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValidatorCard = () => {
//   // Handle mouse movement inside the card to display the gradient
//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     setMousePosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
//     setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setGradientVisible(true);
//   };

//   // Hide the gradient when mouse leaves the card
//   const handleMouseLeave = (
//     setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     setGradientVisible(false);
//   };

//   // Validator card component
//   const ValidatorCardContent = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [gradientVisible, setGradientVisible] = useState(false);

//     return (
//       <div
//         className="relative flex flex-col items-center p-5 rounded-xl shadow-xl border border-gray-400"
//         onMouseMove={(e) =>
//           handleMouseMove(e, setMousePosition, setGradientVisible)
//         }
//         onMouseLeave={() => handleMouseLeave(setGradientVisible)}
//         style={{
//           background: gradientVisible
//             ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
//             : undefined,
//         }}
//       >
//         {/* Image Section */}
//         <div className="flex-1 w-full">
//           <Image
//             src="/validator-image.jpg" // Replace with actual image
//             alt="Validator Node"
//             width={400}
//             height={250}
//             className="rounded-lg object-cover w-full h-auto"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="flex-1 mt-6 lg:mt-0 lg:ml-8 text-white text-center lg:text-left">
//           <button className="border border-green-400 text-green-400 px-4 py-2 rounded-lg bg-transparent mb-4">
//             Validator
//           </button>
//           <h2 className="text-2xl lg:text-3xl font-bold mb-4">
//             How to Run a Pollux Validator Node and Participate in the Network
//           </h2>
//           <p className="text-lg mb-6">
//             Running a Pollux validator node allows you to participate in the
//             network, contribute to its security and decentralization, and be
//             rewarded for your participation.
//           </p>
//           <Link href="/learn-more">
//             <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//               <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 Learn More
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {/* First Validator Section (Full Width) */}
//       <ValidatorCardContent />

//       {/* Second and Third Validator Sections (Side by Side on Medium Screens and Larger, Stacked on Mobile) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
//         {/* Second Validator Section */}
//         <ValidatorCardContent />

//         {/* Third Validator Section */}
//         <ValidatorCardContent />
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
  // Handle mouse movement inside the card to display the gradient
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setMousePosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
    setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setGradientVisible(true);
  };

  // Hide the gradient when mouse leaves the card
  const handleMouseLeave = (
    setGradientVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setGradientVisible(false);
  };

  // Validator card component
  const ValidatorCardContent = ({ isFirstCard = false }: { isFirstCard?: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [gradientVisible, setGradientVisible] = useState(false);

    return (
      <div
        className="relative flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 rounded-lg shadow-lg border border-gray-400"
        onMouseMove={(e) =>
          handleMouseMove(e, setMousePosition, setGradientVisible)
        }
        onMouseLeave={() => handleMouseLeave(setGradientVisible)}
        style={{
          background: gradientVisible
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 249, 105, 0.3), transparent 30%)`
            : undefined,
        }}
      >
        {/* Image Section (Left side for first card) */}
        <div className={`flex-1 w-full ${isFirstCard ? "sm:order-1" : ""} max-w-[320px]`}>
          <Image
            src="/validator-image.jpg" // Replace with actual image
            alt="Validator Node"
            width={320}
            height={200}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Content (Right side for first card) */}
        <div className={`flex-1 mt-4 sm:mt-0 text-white text-center sm:text-left ${isFirstCard ? "sm:ml-8" : ""}`}>
          <button className="border border-green-400 text-green-400 px-4 py-2 rounded-lg bg-transparent mb-4">
            Validator
          </button>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            How to Run a Pollux Validator Node and Participate in the Network
          </h2>
          <p className="text-sm sm:text-lg mb-6">
            Running a Pollux validator node allows you to participate in the
            network, contribute to its security and decentralization, and be
            rewarded for your participation.
          </p>
          <Link href="/learn-more">
            <button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs sm:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="text-white relative px-12 sm:px-20 py-2.5 transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn More
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* First Validator Section (Image on left, Text on right) */}
      <ValidatorCardContent isFirstCard={true} />

      {/* Second and Third Validator Sections (Side by Side on Medium Screens and Larger, Stacked on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-8">
        {/* Second Validator Section */}
        <ValidatorCardContent />

        {/* Third Validator Section */}
        <ValidatorCardContent />
      </div>
    </div>
  );
};

export default ValidatorCard;
