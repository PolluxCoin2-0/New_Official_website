'use client'
 
import React, { useEffect, useState } from 'react';
import {PopupWidget } from "react-calendly";
// InlineWidget
 
const Calendly: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
 
  useEffect(() => {
    setIsClient(true);
  }, []);
 
  return (
    <div className="App">
      {isClient && (
        //  <InlineWidget url="https://calendly.com/priyanshu_pollux/30min" />
         
        <PopupWidget
          url="https://calendly.com/priyanshu_pollux/30min"
          rootElement={document.body}  // Use document.body as the root element
          text="Click here to schedule!"
          textColor="#000000"
          color="#8af969"
        />
      )}
    </div>
  );
};
 
export default Calendly;