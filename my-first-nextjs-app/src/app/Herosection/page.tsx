"use client";
// import Image from "next/image";
import React, { useState, useEffect } from "react";

function Herosection() {
  const words = [
    "Web Designing",
    "Web Development",
    "Mobile Development",
    "App Development",
    "SaaS-Based Website",
    "SEO & Marketing",
  ];

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setDisplayText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1200); 

      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);
  
  

  return (
    <>
      <div className= " w-full h-full pb-12 flex flex-col md:flex-row justify-center items-center min-h-[200px]">
        <div className="w-[90%] mt-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-col gap-4 max-w-xl w-full">
            <h1 className="text-[#070707] text-[40px] md:text-[36px] lg:text-[44px] font-bold font-aleo leading-tight whitespace-nowrap">
              <span className="bg-blue-100">Build</span> Your Business through
            </h1>
            <div className="text-[#00D280] text-[42px] md:text-[80px] lg:text-[44px] font-bold font-aleo leading-tight transition-all h-[66px]">
              {displayText}
            </div>
            <p className=" font-meduim md:text-xl text-[#070707]">
              Unlock your digital potential with our tailored solutions. Discover how we can elevate your online presence and drive lasting success.
            </p>
            <div className="mt-12 font-bold pt-6 flex gap-4">
              <button className="bg-[#00D280] text-white px-6 py-4 rounded-lg hover:bg-[#00b96a] transition-colors">
                Book Consultant
              </button>
              <button className="text-[#00D280] px-6 py-2 cursor-pointer hover:text-[#00b96a] transition-colors">
                See Our Work
              </button>
            </div>
          </div>

          <div className=" max-s-lg w-full overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img src="/image.png" alt="Hero Illustration" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Marquee Section */}
      </div>
       <div className="w-full -mt-12 py-6 px-6 bg-green-700 overflow-hidden">
          <div className="marquee flex items-center whitespace-nowrap">
            <img src="https://kavelogics.com/landing/clients/payme.svg" alt="Logo 1" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/smplcards.svg" alt="Logo 2" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/appreciate.svg" alt="Logo 3" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/opstion.svg" alt="Logo 4" className="w-28 mx-16" />
            {/* Repeat for loop effect */}
            <img src="https://kavelogics.com/landing/clients/payme.svg" alt="Logo 1" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/smplcards.svg" alt="Logo 2" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/appreciate.svg" alt="Logo 3" className="w-28 mx-16" />
            <img src="https://kavelogics.com/landing/clients/opstion.svg" alt="Logo 4" className="w-28 mx-16" />
          </div>
        </div>

    </>
  );
}

export default Herosection;
