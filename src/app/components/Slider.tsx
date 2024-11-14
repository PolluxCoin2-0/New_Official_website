


// "use client"; // Ensure this is at the top

// import React, { useState } from "react";
// import Image from "next/image";

// const Slider = () => {
//   const slides = [
//     {
//       imageSrc: "/banner.jpg", // Replace with your image path
//       title: "Sustainability",
//       heading: "What To Expect From The Pollux Mainnet",
//       description:
//         "The Pollux Ecosystem is on the cusp of a significant milestone as Pollux Mainnet Beta goes live. This event marks a crucial step in the evolution of Pollux vision, particularly in the realm of sustainable and environmentally conscious networks.",
//       buttonText: "Learn More",
//       buttonLink: "/learn-more",
//     },
//     {
//       imageSrc: "/banner.jpg", // Replace with your image path
//       title: "Sustainability",
//       heading: "The Road to Pollux's Mainnet",
//       description:
//         "As Pollux Mainnet Beta progresses, we will see the emergence of new decentralized applications that align with the sustainable ethos of Pollux.",
//       buttonText: "Explore More",
//       buttonLink: "/explore-more",
//     },
//     {
//       imageSrc: "/banner.jpg", // Replace with your image path
//       title: "Sustainability",
//       heading: "Building a Green Future with Pollux",
//       description:
//         "With Pollux focus on sustainability, the upcoming mainnet will pave the way for a decentralized future with a positive environmental impact.",
//       buttonText: "Join Us",
//       buttonLink: "/join-us",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Handle next slide click
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   // Handle previous slide click
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-black/30 to-black/60 border border-white rounded-xl overflow-hidden">
//       {/* Slider Content */}
//       <div className="flex flex-col lg:flex-row items-center justify-center">
//         {/* Image */}
//         <div className="w-full lg:w-1/2">
//           <Image
//             src={slides[currentSlide].imageSrc}
//             alt="Slide Image"
//             width={600}
//             height={400}
//             className="object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="w-full lg:w-1/2 px-0 py-4 text-white">
//           <p className="text-green-400 mb-6">{slides[currentSlide].title}</p>
//           <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].heading}</h2>
//           <p className="text-lg mb-6">{slides[currentSlide].description}</p>
//           <a
//             href={slides[currentSlide].buttonLink}
//             className="inline-block py-1 px-6 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300 rounded-full"
//           >
//             {slides[currentSlide].buttonText}
//           </a>
//         </div>
//       </div>

//       {/* Navigation Arrows at bottom-right */}
//       <button
//         onClick={prevSlide}
//         className="absolute bottom-4 right-4 transform -translate-y-1/2 p-2 rounded-full border-2 border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
//       >
//         <span className="text-white">{"<"}</span>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute bottom-4 right-16 transform -translate-y-1/2 p-2 rounded-full border-2 border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
//       >
//         <span className="text-white">{">"}</span>
//       </button>
//     </div>
//   );
// };

// export default Slider;




"use client"; // Ensure this is at the top

import React, { useState } from "react";
import Image from "next/image";

const Slider = () => {
  const slides = [
    {
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainability",
      heading: "What To Expect From The Pollux Mainnet",
      description:
        "The Pollux Ecosystem is on the cusp of a significant milestone as Pollux Mainnet Beta goes live. This event marks a crucial step in the evolution of Pollux vision.",
      buttonText: "More →",
      buttonLink: "/learn-more",
    },
    {
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainability",
      heading: "The Road to Pollux's Mainnet",
      description:
        "As Pollux Mainnet Beta progresses, we will see the emergence of new decentralized applications that align with the sustainable ethos of Pollux.",
      buttonText: "More →",
      buttonLink: "/explore-more",
    },
    {
      imageSrc: "/banner.jpg", // Replace with your image path
      title: "Sustainability",
      heading: "Building a Green Future with Pollux",
      description:
        "With Pollux focus on sustainability, the upcoming mainnet will pave the way for a decentralized future with a positive environmental impact.",
      buttonText: "More →",
      buttonLink: "/join-us",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle next slide click
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle previous slide click
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-black/30 to-black/60 border border-white rounded-xl overflow-hidden shadow-lg">
      {/* Slider Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={slides[currentSlide].imageSrc}
            alt="Slide Image"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-6 text-white rounded-lg shadow-lg">
          <p className="text-green-400 mb-6">{slides[currentSlide].title}</p>
          <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].heading}</h2>
          <p className="text-lg mb-6">{slides[currentSlide].description}</p>
          <a
            href={slides[currentSlide].buttonLink}
            className="inline-block py-1 px-6 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300 rounded-full"
          >
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>

      {/* Navigation Arrows at bottom-right */}
      <button
        onClick={prevSlide}
        className="absolute bottom-4 right-4 transform -translate-y-1/2 p-2 rounded-full border-2 border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
      >
        <span className="text-white">{"<"}</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-4 right-16 transform -translate-y-1/2 p-2 rounded-full border-2 border-white hover:border-green-400 hover:bg-green-400 transition-all duration-300"
      >
        <span className="text-white">{">"}</span>
      </button>
    </div>
  );
};

export default Slider;
