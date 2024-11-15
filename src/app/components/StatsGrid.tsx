// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19' },
// //     { label: 'Avg Block Time', value: '3.00 Sec' },
// //     { label: 'TPS', value: '1,500+' },
// //     { label: 'Latest Block', value: '3,777,402' },
// //   ];

// //   return (
// //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
// //       {stats.map((stat, idx) => (
// //         <div key={idx} className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition">
// //           <h3 className="text-lg font-semibold">{stat.label}</h3>
// //           <p className="text-2xl font-bold">{stat.value}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19' },
// //     { label: 'Avg Block Time', value: '3.00 Sec' },
// //     { label: 'TPS', value: '1,500+' },
// //     { label: 'Latest Block', value: '3,777,402' },
// //   ];

// //   return (
// //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-grid text-white bg-white/10 bg-opacity-20">
// //       {stats.map((stat, idx) => (
// //         <div
// //           key={idx}
// //           className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition transform"
// //         >
// //           <h3 className="text-lg font-semibold">{stat.label}</h3>
// //           <p className="text-2xl font-bold">{stat.value}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19' },
// //     { label: 'Avg Block Time', value: '3.00 Sec' },
// //     { label: 'TPS', value: '1,500+' },
// //     { label: 'Latest Block', value: '3,777,402' },
// //   ];

// //   return (
// //     <div className="container mx-auto px-2 py-8">
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white  bg-opacity-20">
// //         {stats.map((stat, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition transform"
// //           >
// //             <h3 className="text-lg font-semibold">{stat.label}</h3>
// //             <p className="text-2xl font-bold">{stat.value}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19', icon: '/icons/no-of-nodes.png' },
// //     { label: 'Avg Block Time', value: '3.00 Sec', icon: '/icons/block-time.png' },
// //     { label: 'TPS', value: '1,500+', icon: '/icons/tps.png' },
// //     { label: 'Latest Block', value: '3,777,402', icon: '/icons/latest-block.png' },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
// //         {stats.map((stat, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
// //           >
// //             {/* Custom icon image on the left side of the text */}
// //             <div className="flex-shrink-0">
// //               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold">{stat.label}</h3>
// //               <p className="text-2xl font-bold">{stat.value}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19', icon: '/icons/no-of-nodes.png' },
// //     { label: 'Avg Block Time', value: '3.00 Sec', icon: '/icons/block-time.png' },
// //     { label: 'TPS', value: '1,500+', icon: '/icons/tps.png' },
// //     { label: 'Latest Block', value: '3,777,402', icon: '/icons/latest-block.png' },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
// //         {stats.map((stat, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
// //           >
// //             {/* Custom icon image on the left side of the text */}
// //             <div className="flex-shrink-0">
// //               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold">{stat.label}</h3>
// //               <p className="text-2xl font-bold">{stat.value}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// // import React from 'react';

// // export default function StatsGrid() {
// //   const stats = [
// //     { label: 'No. of Nodes', value: '19', icon: '/nodes.svg' },
// //     { label: 'Avg Block Time', value: '3.00 Sec', icon: 'avgtime.svg' },
// //     { label: 'TPS', value: '1,500+', icon: 'tpc.svg' },
// //     { label: 'Latest Block', value: '3,777,402', icon: 'blocks.svg' },
// //   ];


// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //         {stats.map((stat, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg shadow-md hover:scale-105 transition transform flex
// //              items-center space-x-4  border border-gray-500 hover:border-[1px] hover:border-white hover:bg-gradient-to-r hover:from-transparent
// //               hover:via-transparent hover:to-[#8bf969]"
// //           >
// //             {/* Custom icon image on the left side of the text */}
// //             <div className="flex-shrink-0">
// //               <img src={stat?.icon} alt={stat?.label} className="w-8 h-8" />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold">{stat?.label}</h3>
// //               <p className="text-2xl font-bold">{stat?.value}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



//   //   return (
//   //     <div className="container mx-auto px-4 py-8">
//   //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
//   //         {stats.map((stat, idx) => (
//   //           <div
//   //             key={idx}
//   //             className="bg-transparent border border-white/20 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
//   //           >
//   //             {/* Custom icon image on the left side of the text */}
//   //             <div className="flex-shrink-0">
//   //               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
//   //             </div>
//   //             <div>
//   //               <h3 className="text-lg font-semibold">{stat.label}</h3>
//   //               <p className="text-2xl font-bold">{stat.value}</p>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   );
//   // }



// // "use client";

// // import React, { useEffect, useRef } from "react";
// // import VanillaTilt from "vanilla-tilt";

// // type Stat = {
// //   label: string;
// //   value: string;
// //   icon: string;
// // };

// // const stats: Stat[] = [
// //   { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
// //   { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
// //   { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
// //   { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
// // ];

// // export default function StatsGrid() {
// //   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

// //   useEffect(() => {
// //     cardRefs.current.forEach((card) => {
// //       if (card) {
// //         VanillaTilt.init(card, {
// //           max: 15,
// //           perspective: 1000, // Adjusted to reduce cuboid effect
// //           easing: "cubic-bezier(.03,.98,.52,.99)",
// //           speed: 1200,
// //           glare: false, // Disable glare
// //           scale: 1.04,
// //           reset: true,
// //         });
// //       }
// //     });

// //     return () => {
// //       cardRefs.current.forEach((card) => {
// //         if (card && card.vanillaTilt) {
// //           card.vanillaTilt.destroy();
// //         }
// //       });
// //     };
// //   }, []);

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //         {stats.map((stat, idx) => (
// //           <div
// //             key={idx}
// //             ref={(el) => (cardRefs.current[idx] = el)}
// //             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
// //             style={{ boxShadow: "none", transformStyle: "flat" }} // Disable depth effect
// //           >
// //             <div className="flex-shrink-0">
// //               <img
// //                 src={stat.icon}
// //                 alt={`${stat.label} Icon`} // Improved accessibility
// //                 className="w-8 h-8"
// //                 onError={(e) => {
// //                   e.currentTarget.src = "/default-icon.svg"; // Fallback image if icon doesn't load
// //                 }}
// //               />
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold">{stat.label}</h3>
// //               <p className="text-2xl font-bold">{stat.value}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useEffect, useRef } from "react";
// import VanillaTilt from "vanilla-tilt";

// type Stat = {
//   label: string;
//   value: string;
//   icon: string;
// };

// const stats: Stat[] = [
//   { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
//   { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
//   { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
//   { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
// ];

// export default function StatsGrid() {
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       if (card) {
//         VanillaTilt.init(card, {
//           max: 15,
//           perspective: 1000, // Adjusted to reduce cuboid effect
//           easing: "cubic-bezier(.03,.98,.52,.99)",
//           speed: 1200,
//           glare: false, // Disable glare
//           scale: 1.04,
//           reset: true,
//         });
//       }
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card && card.vanillaTilt) {
//           card.vanillaTilt.destroy();
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             ref={(el) => (cardRefs.current[idx] = el)}
//             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
//             style={{ boxShadow: "none", transformStyle: "flat" }} // Disable depth effect
//           >
//             <div className="flex-shrink-0">
//               <img
//                 src={stat.icon}
//                 alt={`${stat.label} Icon`} // Improved accessibility
//                 className="w-8 h-8"
//                 onError={(e) => {
//                   e.currentTarget.src = "/default-icon.svg"; // Fallback image if icon doesn't load
//                 }}
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">{stat.label}</h3>
//               <p className="text-2xl font-bold">{stat.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useRef } from "react";
// import VanillaTilt from "vanilla-tilt";

// // Define the custom type for a div with a vanillaTilt property
// interface TiltedDiv extends HTMLDivElement {
//   vanillaTilt?: VanillaTilt; // Make this optional for now
// }

// type Stat = {
//   label: string;
//   value: string;
//   icon: string;
// };

// const stats: Stat[] = [
//   { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
//   { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
//   { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
//   { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
// ];

// export default function StatsGrid() {
//   // Update cardRefs type to use the custom TiltedDiv type
//   const cardRefs = useRef<(TiltedDiv | null)[]>([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       if (card) {
//         // Initialize VanillaTilt on the element
//         const tiltInstance = VanillaTilt.init(card, {
//           max: 15,
//           perspective: 1000, // Adjusted to reduce cuboid effect
//           easing: "cubic-bezier(.03,.98,.52,.99)",
//           speed: 1200,
//           glare: false, // Disable glare
//           scale: 1.04,
//           reset: true,
//         });

//         // Initialize vanillaTilt property with the created tilt instance
//         card.vanillaTilt = tiltInstance; // Explicitly assign the instance to the vanillaTilt property
//       }
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card && card.vanillaTilt) {
//           card.vanillaTilt.destroy(); // Clean up the tilt instance on unmount
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             // Ensure TypeScript is aware of the correct ref type
//             ref={(el) => {
//               if (el) cardRefs.current[idx] = el as TiltedDiv;
//             }}
//             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
//             style={{ boxShadow: "none", transformStyle: "flat" }} // Disable depth effect
//           >
//             <div className="flex-shrink-0">
//               <img
//                 src={stat.icon}
//                 alt={`${stat.label} Icon`} // Improved accessibility
//                 className="w-8 h-8"
//                 onError={(e) => {
//                   e.currentTarget.src = "/default-icon.svg"; // Fallback image if icon doesn't load
//                 }}
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">{stat.label}</h3>
//               <p className="text-2xl font-bold">{stat.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import React from "react";

// type Stat = {
//   label: string;
//   value: string;
//   icon: string;
// };

// const stats: Stat[] = [
//   { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
//   { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
//   { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
//   { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
// ];

// export default function StatsGrid() {
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: HTMLDivElement) => {
//     const { offsetWidth: width, offsetHeight: height } = element;
//     const { clientX: mouseX, clientY: mouseY } = e;

//     const moveX = (mouseX / width - 0.5) * 10;
//     const moveY = (mouseY / height - 0.5) * 10;

//     element.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
//   };

//   const handleMouseLeave = (element: HTMLDivElement) => {
//     element.style.transform = "rotateX(0deg) rotateY(0deg)";
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
//             style={{ boxShadow: "none", transformStyle: "flat" }}
//             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//           >
//             <div className="flex-shrink-0">
//               <img
//                 src={stat.icon}
//                 alt={`${stat.label} Icon`}
//                 className="w-8 h-8"
//                 onError={(e) => {
//                   e.currentTarget.src = "/default-icon.svg";
//                 }}
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">{stat.label}</h3>
//               <p className="text-2xl font-bold">{stat.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// 'use client';

// import React from "react";
// import Image from 'next/image'; // Import Image from next/image

// type Stat = {
//   label: string;
//   value: string;
//   icon: string;
// };

// const stats: Stat[] = [
//   { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
//   { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
//   { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
//   { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
// ];

// export default function StatsGrid() {
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: HTMLDivElement) => {
//     const { offsetWidth: width, offsetHeight: height } = element;
//     const { clientX: mouseX, clientY: mouseY } = e;

//     const moveX = (mouseX / width - 0.5) * 5;
//     const moveY = (mouseY / height - 0.5) * 5;

//     element.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
//   };

//   const handleMouseLeave = (element: HTMLDivElement) => {
//     element.style.transform = "rotateX(0deg) rotateY(0deg)";
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
//             style={{ boxShadow: "none", transformStyle: "flat" }}
//             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//           >
//             <div className="flex-shrink-0">
//               <Image
//                 src={stat.icon}
//                 alt={`${stat.label} Icon`}
//                 width={32}  // Adjust width
//                 height={32} // Adjust height
//                 onError={(e) => {
//                   e.currentTarget.src = "/default-icon.svg"; // Fallback icon
//                 }}
//                 className="w-8 h-8" // You can keep the same size here
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">{stat.label}</h3>
//               <p className="text-2xl font-bold">{stat.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client';

import React from "react";
import Image from 'next/image'; // Import Image from next/image

type Stat = {
  label: string;
  value: string;
  icon: string;
};

const stats: Stat[] = [
  { label: "No. of Nodes", value: "19", icon: "/nodes.svg" },
  { label: "Avg Block Time", value: "3.00 Sec", icon: "/avgtime.svg" },
  { label: "TPS", value: "1,500+", icon: "/tpc.svg" },
  { label: "Latest Block", value: "3,777,402", icon: "/blocks.svg" },
];

export default function StatsGrid() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: HTMLDivElement) => {
    const { offsetWidth: width, offsetHeight: height } = element;
    const { clientX: mouseX, clientY: mouseY } = e;

    const moveX = (mouseX / width - 0.5) * 5;
    const moveY = (mouseY / height - 0.5) * 5;

    element.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  };

  const handleMouseLeave = (element: HTMLDivElement) => {
    element.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className=" px-2 md:px-4 lg:px-6 xl:px-40 py-8">
      {/* Grid layout with responsive classes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 ">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-2xl transition transform 
            flex items-center space-x-3 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent
             hover:via-transparent hover:to-[#8bf969] hover:scale-105"
            style={{ boxShadow: "none", transformStyle: "flat" }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="flex-shrink-0">
              <Image
                src={stat.icon}
                alt={`${stat.label} Icon`}
                width={32}  // Adjust width
                height={32} // Adjust height
                onError={(e) => {
                  e.currentTarget.src = "/default-icon.svg"; // Fallback icon
                }}
                className="w-8 h-8" // You can keep the same size here
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
