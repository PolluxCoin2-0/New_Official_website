/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react';
import { PopupWidget } from "react-calendly";
import { RiWechatFill } from "react-icons/ri";
import { motion } from "framer-motion"; // Import Framer Motion

const Calendly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="App">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/priyanshu_pollux/30min"
          rootElement={document.body}
          /* eslint-disable no-console, no-alert*/
          text={
            // Animated Icon
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }} // Bounce up and down
              transition={{
                duration: 1, // Time for one complete bounce
                repeat: Infinity, // Loop the animation
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block" }}
            >
              <RiWechatFill size={80} style={{ color: "#8af969" }} />
            </motion.div>
          }
          textColor="none"
          color="none"
        />
      )}
    </div>
  );
};

export default Calendly;
