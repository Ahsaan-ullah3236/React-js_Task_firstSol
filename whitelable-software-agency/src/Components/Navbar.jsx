import React, { useState } from "react";
import logoImage from "../assets/logoImage.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logoImage} alt="KaveLogics Logo" className="h-10" />
          </div>

          {/* Centered Menu Items */}
          <div className="hidden md:flex space-x-6 mx-auto">
            <a href="#" className="focus:bg-white/[98] text-black hover:text-[#00D280] text-xl font-semibold font-sans-pro">Services</a>

            {/* Portfolio Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="text-black hover:text-[#00D280] text-lg font-semibold focus:outline-none transition-all duration-300 ease-in-out"
              >
                Portfolio
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg transform transition-all duration-300 ease-in-out">
                  <a href="#about/overview" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">Overview</a>
                  <a href="#about/team" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">Team</a>
                  <a href="#about/mission" className="block px-4 py-2 text-black hover:bg-[#00D280] hover:text-white transition-colors duration-200">Mission</a>
                </div>
              )}
            </div>

            <a href="#about" className="text-black hover:text-[#00D280] text-lg font-semibold">About Us</a>
            <a href="#industries" className="text-black hover:text-[#00D280] text-lg font-semibold">Industries</a>
            <a href="#careers" className="text-black hover:text-[#00D280] text-lg font-semibold">Careers</a>
            <a href="#blogs" className="text-black hover:text-[#00D280] text-lg font-semibold">Blogs</a>
          </div>

          {/* Get Quote Button */}
          <div className="hidden md:flex">
            <a href="#quote" className="text-white bg-[#00D280] hover:bg-[#00a86b] py-2 px-6 rounded-full font-semibold transition-colors duration-200">Get Quote</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <div className={`${isDropdownOpen ? "block" : "hidden"} bg-white shadow-md p-4 space-y-4 transition-all duration-300`}>
            <a href="#about" className="text-black hover:text-[#00D280]">About</a>
            <a href="#services" className="text-black hover:text-[#00D280]">Services</a>
            <a href="#contact" className="text-black hover:text-[#00D280]">Contact</a>
            <a href="#quote" className="text-black hover:text-[#00D280]">Get Quote</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
