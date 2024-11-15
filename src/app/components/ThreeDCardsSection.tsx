


// import React from "react";
// import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
// import Image from "next/image";
// import Link from "next/link";

// export default function ThreeDCardsSection() {
//   const cards = [
//     {
//       title: "Innovate",
//       description: "Push the boundaries of blockchain innovation.",
//       image: "/ele2.svg", // Relative path from the public directory
//       link: "https://example.com/innovate",
//     },
//     {
//       title: "Secure",
//       description: "Implement top-notch security in your applications.",
//       image: "/ele1.svg", // Relative path from the public directory
//       link: "https://example.com/secure",
//     },
//     {
//       title: "Scale",
//       description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
//       image: "/ele3.svg", // Relative path from the public directory
//       link: "https://example.com/scale",
//     },
//     {
//       title: "Scale",
//       description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
//       image: "/ele3.svg", // Relative path from the public directory
//       link: "https://example.com/scale",
//     },
//   ];

//   return (
//     <section className="my-12 px-4 sm:px-12 flex flex-col justify-center items-center w-full">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
//         {cards.map((card, index) => (
//           <CardContainer key={index} className="inter-var w-full sm:w-[350px]">
//             <CardBody className="relative group/card bg-gradient-to-r from-black/30 to-black/60 border-gray-400 w-full h-[400px] rounded-xl p-8 border">
//               <CardItem
//                 translateZ={50}
//                 className="text-xl font-bold text-neutral-500 dark:text-neutral-100"
//               >
//                 {card.title}
//               </CardItem>
//               <CardItem
//                 as="p"
//                 translateZ={60}
//                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-400 break-words overflow-hidden"
//               >
//                 {card.description}
//               </CardItem>

//               <CardItem translateZ={100} className="w-full h-48 mt-6 flex justify-center items-center">
//                 <Image
//                   src={card.image}
//                   alt={`${card.title} image`}
//                   width={250}
//                   height={150}
//                   className="h-65 w-40 object-cover rounded-xl group-hover/card:shadow-xl"
//                 />
//               </CardItem>

//               <div className="flex justify-left items-center mt-4">
//                 <CardItem
//                   translateZ={20}
//                   as={Link}
//                   href={card.link}
//                   target="__blank"
//                   className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-600 text-neutral-100"
//                 >
//                   Learn more →
//                 </CardItem>
//               </div>
//             </CardBody>
//           </CardContainer>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
// import Image from "next/image";
// import Link from "next/link";

// export default function ThreeDCardsSection() {
//   const cards = [
//     {
//       title: "Innovate",
//       description: "Push the boundaries of blockchain innovation.",
//       image: "/ele2.svg", // Relative path from the public directory
//       link: "https://example.com/innovate",
//     },
//     {
//       title: "Secure",
//       description: "Implement top-notch security in your applications.",
//       image: "/ele1.svg", // Relative path from the public directory
//       link: "https://example.com/secure",
//     },
//     {
//       title: "Scale",
//       description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
//       image: "/ele3.svg", // Relative path from the public directory
//       link: "https://example.com/scale",
//     },
//     {
//       title: "Scale",
//       description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
//       image: "/ele3.svg", // Relative path from the public directory
//       link: "https://example.com/scale",
//     },
//   ];

//   return (
//     <section className=" my-12 px-4 sm:px-12 flex flex-col justify-center items-center w-full">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 w-full">
//         {cards.map((card, index) => (
//           <CardContainer key={index} className="inter-var w-full sm:w-[350px]">
//             <CardBody className="relative group/card bg-gradient-to-r from-black/30 to-black/60 border-gray-400 w-full h-[400px] rounded-xl p-8 border">
//               <CardItem
//                 translateZ={50}
//                 className="text-xl font-bold text-neutral-500 dark:text-neutral-100"
//               >
//                 {card.title}
//               </CardItem>
//               <CardItem
//                 as="p"
//                 translateZ={60}
//                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-400 break-words overflow-hidden"
//               >
//                 {card.description}
//               </CardItem>

//               <CardItem translateZ={100} className="w-full h-48 mt-6 flex justify-center items-center">
//                 <Image
//                   src={card.image}
//                   alt={`${card.title} image`}
//                   width={250}
//                   height={150}
//                   className="h-65 w-40 object-cover rounded-xl group-hover/card:shadow-xl"
//                 />
//               </CardItem>

//               <div className="flex justify-left items-center mt-4">
//                 <CardItem
//                   translateZ={20}
//                   as={Link}
//                   href={card.link}
//                   target="__blank"
//                   className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-600 text-neutral-100"
//                 >
//                   Learn more →
//                 </CardItem>
//               </div>
//             </CardBody>
//           </CardContainer>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export default function ThreeDCardsSection() {
  const cards = [
    {
      title: "Innovate",
      description: "Push the boundaries of blockchain innovation.",
      image: "/ele2.svg", // Relative path from the public directory
      link: "https://example.com/innovate",
    },
    {
      title: "Secure",
      description: "Implement top-notch security in your applications.",
      image: "/ele1.svg", // Relative path from the public directory
      link: "https://example.com/secure",
    },
    {
      title: "Scale",
      description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
      image: "/ele3.svg", // Relative path from the public directory
      link: "https://example.com/scale",
    },
    {
      title: "Scale",
      description: "Scale your solutions to global heights lrlrlrlrlrllrlrlrt",
      image: "/ele3.svg", // Relative path from the public directory
      link: "https://example.com/scale",
    },
  ];

  return (
    <section className="my-12  px-2 md:px-4 lg:px-6 xl:px-40 flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-8 w-full">
        {cards.map((card, index) => (
          <CardContainer key={index} className="inter-var w-full sm:w-[350px]">
            <CardBody className="text-center relative group/card bg-gradient-to-r from-black/30 to-black/60 border-gray-400 w-full h-[400px] rounded-2xl p-8 border">
              <div className="flex justify-center">
              <CardItem
                translateZ={50}
                className=" text-xl font-bold text-neutral-500 dark:text-neutral-100"
              >
                {card.title}
              </CardItem>
              </div>
             
              <CardItem
                as="p"
                translateZ={60}
                className=" text-md max-w-sm mt-2  break-words overflow-hidden text-[#a7a4a4]  text-md font-medium"
              >
                {card.description}
              </CardItem>

              <CardItem translateZ={100} className="w-full h-48 mt-6 flex justify-center items-center">
                <Image
                  src={card.image}
                  alt={`${card.title} image`}
                  width={250}
                  height={150}
                  className="h-65 w-40 object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              <div className="flex justify-center items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xl  font-semibold  "
                >
                  
                  Learn more →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

