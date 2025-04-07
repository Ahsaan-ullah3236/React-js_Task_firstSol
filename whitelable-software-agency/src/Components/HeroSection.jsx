import React, { useState, useEffect } from "react";
import image from "../assets/image.png";

function HeroSection() {
  const words = [
    "Web Designing",
    "Web Development",
    "Mobile Development",
    "App Development",
    "SaaS-Based Website",
  ];

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 200);

      return () => clearInterval(interval); // Cleanup interval on word change
    } else {
      setTimeout(() => {
        setLetterIndex(0);
        setDisplayText(""); // Reset text to prepare for next word
        setWordIndex((prev) => (prev + 1) % words.length); // Cycle through words
      }, 500); // Pause before moving to the next word
    }
  }, [letterIndex, wordIndex, words]);

  return (
    <div className="w-full herosection-container border-2 border-red-500 disp flex justify-between items-center">
  <div className="right-container border-2 border-red-500">
    <span className="relative">Your Business through</span>
    <div className="text-kavelogics-secondary text-[32px] md:text-[36px] lg:text-[44px] mt-1 md:mt-[9px] lg:mt-[15px] font-bold font-aleo leading-[43px] h-[44px] transition-all">
      {displayText}
    </div>
  </div>
  <div className="left-container">
    <img src={image} alt="Logo" />
  </div>
</div>

  
  );
}

export default HeroSection;
