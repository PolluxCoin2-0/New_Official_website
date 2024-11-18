"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import img from "../../../public/growth.jpg"; // Image to be used for the surrounding elements

const page = () => {
  // Define the distances for each image (radius of the wheel)
  const distances = [350, 350, 350, 350, 350, 350]; // Equal distances for a balanced wheel

  return (
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-24">
      <p className="text-4xl font-bold">Our Diverse Ecosystem</p>
      <p className="text-lg font-semibold pt-4">
        Integrated Excellence with Pollux Chain
      </p>

      <div className="flex justify-center mt-60">
        <div className="relative flex justify-center items-center w-[400px] h-[400px] border-dashed border-2 rounded-full">
          {/* Central image */}
          <div className="absolute flex justify-center items-center w-[320px] h-[320px] rounded-full">
            <Image
              src="/token3.png"
              alt="Polluxcoin Logo"
              width={320}
              height={320}
              className="w-48 sm:w-64 md:w-72 lg:w-80"
            />
          </div>

          {/* Lines and surrounding images */}
          {[...Array(6)].map((_, index) => {
            // Calculate the angle for each line (60-degree increments)
            const angle = (index * 360) / 6;
            const translateX = distances[index]; // Use the adjusted distance

            // Line style to create a radial line from the center to each image
            const lineStyle: React.CSSProperties = {
              position: "absolute", // Explicitly specify position as 'absolute'
              top: "50%",
              left: "50%",
              width: "2px", // Line thickness
              height: `${translateX}px`, // Line length (distance from center)
              background: "linear-gradient(45deg, #55E128, #0A2505)", // Custom gradient effect
              boxShadow:
                "0 0 5px rgba(85,224,40, 0.6), 0 0 20px rgba(255, 255, 255, 0.5)", // Shiny/glassy border effect
              backdropFilter: "blur(5px)", // Apply a blur to give a glassy effect
              transform: `rotate(${angle}deg)`, // Rotate line to the correct angle
              transformOrigin: "top", // Rotation around the center of the wheel
              zIndex: -1, // Lines should be behind the images
              animation: `travelGradient 2s infinite ${index * 0.5}s`, // Animation of the gradient traveling outward
            };

            // Image transform to place it at the tip of the line
            const imageTransform = `rotate(${angle - 90}deg) translateX(${translateX}px)`;

            return (
              <React.Fragment key={index}>
                {/* Line from the center to the surrounding image */}
                <div style={lineStyle}></div>

                {/* Image at the tip of the line */}
                <div
                  className="absolute"
                  style={{
                    transform: imageTransform, // Position image at the tip of the line
                    transformOrigin: "center", // Ensure the image rotates from its center
                  }}
                >
                  <motion.div
                    className=""
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      background: { duration: 0.3 },
                    }}
                    style={{ background: "transparent" }} // Default background
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      whileHover={{ rotate: 0 }} // Stops rotation on hover
                      transition={{
                        repeat: Infinity,
                        duration: 10, // Continuous rotation speed
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Polluxcoin Logo ${index}`} // Alt text for each image
                        width={100}
                        height={100}
                        className="rounded-full w-32 h-32 border-2 border-white shadow-md"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* CSS for the gradient animation */}
      <style jsx>{`
        @keyframes travelGradient {
          0% {
            background-position: 50% 50%; /* Start from the center */
          }
          50% {
            background-position: 100% 100%; /* Travel to the end (surrounding image) */
          }
          100% {
            background-position: 50% 50%; /* Return back to the center */
          }
        }
      `}</style>
    </div>
  );
};

export default page;
