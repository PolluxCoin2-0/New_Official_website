// // 'use client';

// // import React, { useEffect } from 'react';
// // import { gsap } from 'gsap';
// // import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger

// // // Register the ScrollTrigger plugin with GSAP
// // gsap.registerPlugin(ScrollTrigger);

// // export default function ImageGallery() {
// //   useEffect(() => {
// //     // Scroll-triggered animation
// //     const images = document.querySelectorAll('.gallery-image');
// //     images.forEach((image) => {
// //       gsap.from(image, {
// //         opacity: 0,
// //         y: 100,
// //         duration: 1.5,
// //         scrollTrigger: {
// //           trigger: image,
// //           start: 'top 80%', // Animation starts when image reaches 80% of the viewport
// //           end: 'top 40%', // Animation ends when image reaches 40% of the viewport
// //           scrub: true, // Syncs the animation with the scroll
// //         },
// //       });
// //     });
// //   }, []);

// //   return (
// //     <section className="py-16 px-4 sm:px-8 md:px-16 bg-transparent">
// //       <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
// //         Image Gallery
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {/* Image 1 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 1"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>

// //         {/* Image 2 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 2"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>

// //         {/* Image 3 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 3"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>

// //         {/* Image 4 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 4"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>

// //         {/* Image 5 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 5"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>
// //         {/* Image 6 */}
// //         <div className="gallery-image">
// //           <img
// //             src="/banner.jpg"
// //             alt="Image 6"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "/banner.jpg", // Replace with your actual image paths
  "/banner.jpg",
  "/banner.jpg",
  "/banner.jpg",
  "/banner.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden w-screen h-64 md:h-96 left-1/2 transform -translate-x-1/2">
      <motion.div
        className="flex items-center"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: images.length * 3, // Adjust speed based on number of images
          ease: "linear",
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{
              minWidth: "33.33%", // Display 3 images per phase
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const images = [
//   "/banner.jpg", // Replace with your actual image paths
//   "/banner.jpg",
//   "/banner.jpg",
//   "/banner.jpg",
//   "/banner.jpg",
// ];

// const ImageCarousel = () => {
//   return (
//     <div className="relative overflow-hidden w-screen h-64 md:h-96 left-1/2 transform -translate-x-1/2">
//       <motion.div
//         className="flex items-center"
//         initial={{ x: 0 }}
//         animate={{ x: "-100%" }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: images.length * 3, // Adjust speed based on number of images
//           ease: "linear",
//         }}
//       >
//         {[...images, ...images].map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 h-full"
//             style={{
//               minWidth: "33.33%", // Display 3 images per phase
//             }}
//           >
//             <Image
//               src={image}
//               alt={`Slide ${index + 1}`}
//               layout="fill" // Ensures the image covers the entire container
//               objectFit="cover" // Maintains aspect ratio and covers the container
//               priority={index < 3} // Optimize loading for the first few images
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ImageCarousel;
