// // // "use client";

// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // const images = [
// // //   "/banner.jpg", // Replace with your actual image paths
// // //   "/banner.jpg",
// // //   "/banner.jpg",
// // //   "/banner.jpg",
// // //   "/banner.jpg",
// // // ];

// // // const ImageCarousel = () => {
// // //   return (
// // //     <div className="relative overflow-hidden w-full h-64 md:h-96">
// // //       <motion.div
// // //         className="flex space-x-4 items-center"
// // //         initial={{ x: 0 }}
// // //         animate={{ x: ["0%", "-100%"] }}
// // //         transition={{
// // //           repeat: Infinity,
// // //           duration: images.length * 4, // Adjust speed based on number of images
// // //           ease: "linear",
// // //         }}
// // //       >
// // //         {[...images, ...images].map((image, index) => (
// // //           <div
// // //             key={index}
// // //             className="flex-shrink-0 h-full"
// // //             style={{
// // //               minWidth: "33%", // Adjust this to fit 2-3 images in one phase
// // //             }}
// // //           >
// // //             <img
// // //               src={image}
// // //               alt={`Slide ${index + 1}`}
// // //               className="w-full h-full object-cover rounded-lg shadow-lg"
// // //             />
// // //           </div>
// // //         ))}
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default ImageCarousel;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const images = [
// //   "/banner.jpg", // Replace with your actual image paths
// //   "/banner.jpg",
// //   "/banner.jpg",
// //   "/banner.jpg",
// //   "/banner.jpg",
// // ];

// // const ImageCarousel = () => {
// //   return (
// //     <div className="relative overflow-hidden w-full h-64 md:h-96">
// //       <motion.div
// //         className="flex items-center"
// //         initial={{ x: 0 }}
// //         animate={{ x: ["0%", "-100%"] }}
// //         transition={{
// //           repeat: Infinity,
// //           duration: images.length * 3, // Adjust speed based on number of images
// //           ease: "linear",
// //         }}
// //       >
// //         {[...images, ...images].map((image, index) => (
// //           <div
// //             key={index}
// //             className="flex-shrink-0 h-full"
// //             style={{
// //               minWidth: "33.33%", // Display 3 images per phase
// //             }}
// //           >
// //             <img
// //               src={image}
// //               alt={`Slide ${index + 1}`}
// //               className="w-full h-full object-cover rounded-lg shadow-lg"
// //             />
// //           </div>
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default ImageCarousel;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const images = [
//   "/banner.jpg", // Replace with your actual image paths
//   "/banner.jpg",
//   "/banner.jpg",
//   "/banner.jpg",
//   "/banner.jpg",
// ];

// const ImageCarousel = () => {
//   return (
//     <div className="relative overflow-hidden w-full h-64 md:h-96">
//       <motion.div
//         className="flex items-center"
//         initial={{ x: 0 }}
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
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
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover shadow-lg"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ImageCarousel;


"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "/banner.jpg", // Replace with your actual image paths
  "/banner.jpg",
  "/banner.jpg",
  "/banner.jpg",
  "/banner2.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden w-screen h-64 md:h-96 left-1/2 transform -translate-x-1/2">
      <motion.div
        className="flex items-center"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
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
