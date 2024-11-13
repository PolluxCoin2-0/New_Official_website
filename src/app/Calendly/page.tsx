'use client'

import React, { useEffect, useState } from 'react';
import { PopupWidget } from "react-calendly";

const Calendly: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="App">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/durgeshgichi789/30min"
          rootElement={document.body}  // Use document.body as the root element
          text="Click here to schedule!"
          textColor="#000000"
          color="linear-gradient(to right, #37dd00, #8af969)"
        />
      )}
    </div>
  );
};

export default Calendly;
