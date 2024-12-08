"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Set to true when client-side
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  return (
    <div className='bg-gradient-to-b from-[#1D398D]  to-[#2079D8] bg-clip-text text-transparent'>
      <Typewriter
        options={{
          strings: ["Rewards", "Engagement", "Loyalty", "Payouts"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
