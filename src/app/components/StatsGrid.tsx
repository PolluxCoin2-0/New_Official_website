// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19' },
//     { label: 'Avg Block Time', value: '3.00 Sec' },
//     { label: 'TPS', value: '1,500+' },
//     { label: 'Latest Block', value: '3,777,402' },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
//       {stats.map((stat, idx) => (
//         <div key={idx} className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition">
//           <h3 className="text-lg font-semibold">{stat.label}</h3>
//           <p className="text-2xl font-bold">{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19' },
//     { label: 'Avg Block Time', value: '3.00 Sec' },
//     { label: 'TPS', value: '1,500+' },
//     { label: 'Latest Block', value: '3,777,402' },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-grid text-white bg-white/10 bg-opacity-20">
//       {stats.map((stat, idx) => (
//         <div
//           key={idx}
//           className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition transform"
//         >
//           <h3 className="text-lg font-semibold">{stat.label}</h3>
//           <p className="text-2xl font-bold">{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19' },
//     { label: 'Avg Block Time', value: '3.00 Sec' },
//     { label: 'TPS', value: '1,500+' },
//     { label: 'Latest Block', value: '3,777,402' },
//   ];

//   return (
//     <div className="container mx-auto px-2 py-8">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white  bg-opacity-20">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition transform"
//           >
//             <h3 className="text-lg font-semibold">{stat.label}</h3>
//             <p className="text-2xl font-bold">{stat.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19', icon: '/icons/no-of-nodes.png' },
//     { label: 'Avg Block Time', value: '3.00 Sec', icon: '/icons/block-time.png' },
//     { label: 'TPS', value: '1,500+', icon: '/icons/tps.png' },
//     { label: 'Latest Block', value: '3,777,402', icon: '/icons/latest-block.png' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
//           >
//             {/* Custom icon image on the left side of the text */}
//             <div className="flex-shrink-0">
//               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
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

// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19', icon: '/icons/no-of-nodes.png' },
//     { label: 'Avg Block Time', value: '3.00 Sec', icon: '/icons/block-time.png' },
//     { label: 'TPS', value: '1,500+', icon: '/icons/tps.png' },
//     { label: 'Latest Block', value: '3,777,402', icon: '/icons/latest-block.png' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
//           >
//             {/* Custom icon image on the left side of the text */}
//             <div className="flex-shrink-0">
//               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
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



// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19', icon: '/nodes.svg' },
//     { label: 'Avg Block Time', value: '3.00 Sec', icon: 'avgtime.svg' },
//     { label: 'TPS', value: '1,500+', icon: 'tpc.svg' },
//     { label: 'Latest Block', value: '3,777,402', icon: 'blocks.svg' },
//   ];


//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg shadow-md hover:scale-105 transition transform flex
//              items-center space-x-4  border border-gray-500 hover:border-[1px] hover:border-white hover:bg-gradient-to-r hover:from-transparent
//               hover:via-transparent hover:to-[#8bf969]"
//           >
//             {/* Custom icon image on the left side of the text */}
//             <div className="flex-shrink-0">
//               <img src={stat?.icon} alt={stat?.label} className="w-8 h-8" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">{stat?.label}</h3>
//               <p className="text-2xl font-bold">{stat?.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



  //   return (
  //     <div className="container mx-auto px-4 py-8">
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grid text-white bg-opacity-20">
  //         {stats.map((stat, idx) => (
  //           <div
  //             key={idx}
  //             className="bg-transparent border border-white/20 p-4 rounded-lg shadow-md hover:scale-105 transition transform flex items-center space-x-4"
  //           >
  //             {/* Custom icon image on the left side of the text */}
  //             <div className="flex-shrink-0">
  //               <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
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


"use client";

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          perspective: 1000, // Adjusted to reduce cuboid effect
          easing: "cubic-bezier(.03,.98,.52,.99)",
          speed: 1200,
          glare: false, // Disable glare
          scale: 1.04,
          reset: true,
        });
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-gradient-to-r from-transparent via-transparent to-[#8bf969c2] p-4 rounded-lg transition transform flex items-center space-x-4 border border-gray-500 hover:border-white hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-[#8bf969] hover:scale-105"
            style={{ boxShadow: "none", transformStyle: "flat" }} // Disable depth effect
          >
            <div className="flex-shrink-0">
              <img
                src={stat.icon}
                alt={`${stat.label} Icon`} // Improved accessibility
                className="w-8 h-8"
                onError={(e) => {
                  e.currentTarget.src = "/default-icon.svg"; // Fallback image if icon doesn't load
                }}
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
