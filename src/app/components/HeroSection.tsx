

// // 'use client';

// // import { TypewriterEffect } from './ui/Typewriter-effect';

// // export default function HeroSection() {
// //   const words = [
// //     {
// //       text: "BUILD",
// //     },
// //     {
// //       text: "AWESOME",
// //     },
// //     {
// //       text: "WITH",
// //     },
// //     {
// //       text: "POLLUX",
// //       className: "text-[#8af969]",
// //     },
// //   ];

// //   const wordsA = [
// //     {
// //       text: "web",
// //       className: "text-green-500 text-[#8af969]",
// //     },
// //   ];

// //   return (
// //     <section className="h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-8 md:px-16">
// //       {/* Typewriter effect for words */}
// //       <TypewriterEffect words={words} />
      
// //       {/* Headline with typewriter effect for 'Decentralize the' */}
// //       <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#fff]">
// //         Decentralize the
// //         <TypewriterEffect words={wordsA} />
// //       </h2>

// //       {/* Buttons Section */}
// //       <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
// //         <button className="border-2 border-[#fff] px-6 py-3 rounded-md bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] transition-all w-full sm:w-auto">
// //           START
// //         </button>
        
// //         <button className="border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black w-full sm:w-auto">
// //           Documentation
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }



// 'use client';

// import { TypewriterEffect } from './ui/Typewriter-effect';

// export default function HeroSection() {
//   const words = [
//     {
//       text: "BUILD",
//     },
//     {
//       text: "AWESOME",
//     },
//     {
//       text: "WITH",
//     },
//     {
//       text: "POLLUX",
//       className: "text-[#8af969]",
//     },
//   ];

//   const wordsA = [
//     {
//       text: "web",
//       className: "text-[#8af969]",
//     },
//   ];

//   return (
//     <section className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-8 md:px-16">
//       {/* Typewriter effect for BUILD AWESOME WITH POLLUX */}
//       <TypewriterEffect
//         words={words}
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
//       />

//       {/* Headline: Decentralize the web */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fff]">
//         Decentralize the <TypewriterEffect words={wordsA} className="inline" />
//       </h2>

//       {/* Buttons Section */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
//         <button className="border-2 border-[#fff] px-6 py-3 rounded-md bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] transition-all w-full sm:w-auto">
//           START
//         </button>

//         <button className="border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black w-full sm:w-auto">
//           Documentation
//         </button>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import { TypewriterEffect } from './ui/Typewriter-effect';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   const words = [
//     {
//       text: "BUILD",
//     },
//     {
//       text: "AWESOME",
//     },
//     {
//       text: "WITH",
//     },
//     {
//       text: "POLLUX",
//       className: "text-[#8af969]",
//     },
//   ];

//   const wordsA = [
//     {
//       text: "web",
//       className: "text-[#8af969]",
//     },
//   ];

//   return (
//     <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-8 md:px-16 bg-transparent">
//       {/* Logo with Tilt Effect */}
//       <motion.div
//         className="mt-10 sm:mt-14 md:mt-20"
//         whileHover={{
//           rotate: [0, 10, -10, 5, -5, 0], // Tilt effect
//           scale: 1.1,                    // Scale effect
//         }}
//         transition={{ type: "spring", stiffness: 200, damping: 10 }}
//       >
//         <img
//           src="/polluxtoken.png"
//           alt="Polluxcoin Logo"
//           className="w-48 sm:w-64 md:w-72 lg:w-80"
//         />
//       </motion.div>

//       {/* Typewriter effect for BUILD AWESOME WITH POLLUX */}
//       <TypewriterEffect
//         words={words}
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8"
//       />

//       {/* Headline: Decentralize the web */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fff]">
//         Decentralize the <TypewriterEffect words={wordsA} className="inline" />
//       </h2>

//       {/* Buttons Section */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
//         <button className="border-2 border-[#fff] px-6 py-3 rounded-md bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] transition-all w-full sm:w-auto">
//           START
//         </button>

//         <button className="border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black w-full sm:w-auto">
//           Documentation
//         </button>
//       </div>
//     </section>
//   );
// }


'use client';

import { TypewriterEffect } from './ui/Typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';  // Import Image from next/image
import { MdOutlineRestartAlt } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";

export default function HeroSection() {
  const words = [
    {
      text: "BUILD",
    },
    {
      text: "AWESOME",
    },
    {
      text: "WITH",
    },
    {
      text: "POLLUX",
      className: "text-[#8af969]",
    },
  ];

  const wordsA = [
    {
      text: "WEB",
      className: "text-[#8af969]",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-8 md:px-16 bg-transparent">
      {/* Logo with Tilt Effect */}



      {/* <motion.div
        className="mt-10 sm:mt-14 md:mt-20"
        whileHover={{
          rotate: [0, 10, -10, 5, -5, 0], // Tilt effect
          scale: 1.1,                    // Scale effect
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Image
          src="/token2.svg"
          alt="Polluxcoin Logo"
          width={320}  // Adjust the width as per your design
          height={320} // Adjust the height as per your design
          className="w-48 sm:w-64 md:w-72 lg:w-80"
        />
      </motion.div> */}


      {/* Logo with Continuous Rotation and Gradient Hover Effect */}
<motion.div
  className="relative mt-10 sm:mt-14 md:mt-20"
 
  transition={{
    type: 'spring',
    stiffness: 200,
    damping: 10,
    background: { duration: 0.3 },
  }}
  style={{ background: 'transparent' }} // Default background
>
  <motion.div
    animate={{ rotate: 360 }}
    whileHover={{ rotate: 0 }} // Stops rotation on hover
    transition={{
      repeat: Infinity,
      duration: 10, // Continuous rotation speed
      ease: 'linear',
    }}
  >
    <Image
      src="/token3.png"
      alt="Polluxcoin Logo"
      width={320}
      height={320}
      className="w-48 sm:w-64 md:w-72 lg:w-80"
    />
  </motion.div>
</motion.div>

{/* Typewriter effect for BUILD AWESOME WITH POLLUX */}
      <TypewriterEffect
        words={words}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8"
      />

      {/* Headline: Decentralize the web */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fff]">
        DECENTRALIZE THE </h2>

       <h2> <TypewriterEffect words={wordsA} className="inline" /></h2>
      

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
      <button className="flex items-center text-xl font-semibold px-6 py-3 rounded-xl bg-[#8af969] text-black hover:shadow-[0_0_10px_#8af969] transition-all w-full sm:w-auto">
    <MdOutlineRestartAlt className="mr-2" size={24}/> START
</button>


        

        <button className=" flex items-center border-[1px] border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black w-full sm:w-auto">
        <MdDocumentScanner className="mr-2" size={20}/> DOCUMENTATION
        </button>
      </div>
    </section>
  );
}
