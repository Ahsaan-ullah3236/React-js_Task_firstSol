"use client"
import Image from "next/image"; 
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the dropdown for mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logoImage.png" alt="KaveLogics Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <div className="relative group">
            <button 
              className="text-black hover:text-[#00D280] text-lg font-semibold focus:outline-none transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Services
            </button>

            <div
              className={`${
                isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } absolute left-0 mt-2 w-75 bg-white border font-semibold border-gray-300 rounded-md shadow-lg transform transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto`}
            >
              <a href="#about/overview" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                AI Development
              </a>
              <a href="#about/team" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                UI/UX Development
              </a>
              <a href="#about/mission" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                Mobile Development
              </a>
              <a href="#about/mission" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                App Development
              </a>
              <a href="#about/mission" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                SaaS-based Website Development
              </a>
              <a href="#about/mission" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">
                SEO & Marketing
              </a>
            </div>
          </div>

          <a href="#" className="focus:bg-white/[98] text-black hover:text-[#00D280] text-xl font-semibold font-sans-pro">Portfolio</a>
          <a href="#about" className="text-black hover:text-[#00D280] text-lg font-semibold">About Us</a>
          <a href="#industries" className="text-black hover:text-[#00D280] text-lg font-semibold">Industries</a>
          <a href="#careers" className="text-black hover:text-[#00D280] text-lg font-semibold">Careers</a>
          <a href="#blogs" className="text-black hover:text-[#00D280] text-lg font-semibold">Blogs</a>
        </div>

        {/* Get Quote Button for Desktop */}
        <div className="hidden md:flex">
          <a href="#quote" className="text-white bg-[#00D280] hover:bg-[#00a86b] px-6 py-4 rounded-lg font-semibold transition-colors duration-200">Get Quote</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#quote" className="text-black hover:text-[#00D280] block px-4 py-2">Get Quote</a>
        <a href="#portfolio" className="text-black hover:text-[#00D280] block px-4 py-2">Portfolio</a>
        <a href="#about" className="text-black hover:text-[#00D280] block px-4 py-2">About Us</a>
        <a href="#industries" className="text-black hover:text-[#00D280] block px-4 py-2">Industries</a>
        <a href="#careers" className="text-black hover:text-[#00D280] block px-4 py-2">Careers</a>
        <a href="#blogs" className="text-black hover:text-[#00D280] block px-4 py-2">Blogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
