// "use client";
// import React from "react";
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";

// export const Radar = ({ className }: any) => {
//   const circles = new Array(8).fill(1);
//   return (
//     <div
//       className={twMerge(
//         "relative flex h-20 w-20 items-center justify-center rounded-full",
//         className
//       )}
//     >
//       <div
//         style={{
//           transformOrigin: "right center",
//         }}
//         className="absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] overflow-hidden animate-radar-spin items-end justify-center bg-transparent"
//       >
//         <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-green-600 to-transparent" />
//       </div>
//       {circles.map((_, idx) => (
//         <Circle
//           style={{
//             height: `${(idx + 1) * 5}rem`,
//             width: `${(idx + 1) * 5}rem`,
//             border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
//           }}
//           key={`motion-${idx}`}
//           idx={idx}
//         />
//       ))}
//     </div>
//   );
// };

// export const Circle = ({ idx, ...rest }: any) => {
//   return (
//     <motion.div
//       {...rest}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: idx * 0.1, duration: 0.2 }}
//       className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
//     />
//   );
// };
