"use client"
import React, { useState } from 'react';

function Ourservices() {
  const [activeItem, setActiveItem] = useState('AI Development'); 

  const items = [
    'AI Development',
    'Mobile Development',
    'App Development',
    'Graphic Designing',
    'UI/UX Designing',
    'SEO Marketing',
    'Website Development',
    'SaaS Based Website Development'
  ];

  const handleClick = (item) => {
    setActiveItem(item);
  }

  const getContent = (item) => {
    switch(item) {
      case 'AI Development':
        return {
          title: 'AI Development',
          description: 'Leverage our AI development expertise for intelligent solutions that transform operations, enhance decision-making, and drive competitive advantage in your industry.',
          image: '/AiDevelopment.jpg',
        };
      case 'Mobile Development':
        return {
          title: 'Mobile Development',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: '/App.jpg',
        };
      case 'App Development':
        return {
          title: 'App Development',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/premium-photo/young-woman-using-source-code-develop-new-online-app-working-with-html-script-terminal-window-program-database-software-it-manager-planning-artificial-intelligence-network_1035542-260.jpg?ga=GA1.1.1906549316.1744116662&semt=ais_country_boost&w=740',
        };
      case 'Graphic Designing':
        return {
          title: 'Graphic Designing',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142153.jpg?ga=GA1.1.1906549316.1744116662&semt=ais_country_boost&w=740',
        };
      case 'UI/UX Designing':
        return {
          title: 'UI/UX Designing',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg?ga=GA1.1.1906549316.1744116662&semt=ais_country_boost&w=740',
        };
      case 'SEO Marketing':
        return {
          title: 'SEO Marketing',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/free-photo/employee-working-marketing-setting_23-2151871171.jpg?t=st=1744202854~exp=1744206454~hmac=34a64ab3319b718279113929e151b8833709bf52774836eb51b0877b076cb5f8&w=900',
        };
      case 'Website Development':
        return {
          title: 'Website Development',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1744208365~exp=1744211965~hmac=4277bb5686a8a1ffe60aec2fa5334626e80348c2b4a000f553504cea5968766c&w=900',
        };
      case 'SaaS Based Website Development':
        return {
          title: 'SaaS Based Website Development',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: 'https://img.freepik.com/premium-photo/ar-brainstorming-mobile-app-interface-design-modern-office_1105604-39210.jpg?ga=GA1.1.1906549316.1744116662&semt=ais_country_boost&w=740',
        };
      default:
        return {
          title: 'koch ni h bhai yaha',
          description: 'Build robust and scalable websites with modern frameworks and a user-centered approach to elevate your online presence.',
          image: '',
        };
    }
  };

  const { title, description, image } = getContent(activeItem); 
  return (
    <div className="w-full bg-white px-12 py-16 mt-20">
      <div className="second-main-container">
        <div className=" text-center max-w-7xl mx-auto mb-16 p-8 rounded-2xl shadow-md">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-gray-800 text-xl font-medium">
            Embark on a journey of digital transformation with our comprehensive solutions. From advanced development to intuitive design and strategic marketing, we empower businesses with innovation and excellence, elevating your digital presence and capabilities.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Sidebar */}
          <div className='w-full p-4 rounded-xl shadow-sm bg-gray-50 relative'>
            <nav>
              <div className="flex relative">
                <div className="relative w-4 h-full">
                  <div
                    className="absolute left-0 w-2  bg-black transition-all duration-300 rounded-xl"
                    style={{
                      top: `${items.indexOf(activeItem) * 64}px`,
                      height: '64px',
                    }}
                  ></div>
                </div>

                {/* Items */}
                <div className="ml-6">
                  <ul>
                    {items.map(item => (
                      <li
                        key={item}
                        onClick={() => handleClick(item)}
                        className={`cursor-pointer text-lg xl:text-2xl font-bold py-4 px-6 rounded-lg transition-all duration-300 ${activeItem === item ? 'bg-[#00D280] text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Content */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-[450px] object-cover opacity-80"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-10 py-12 space-y-6  bg-opacity-50">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-lg font-medium max-w-3xl text-justify">{description}</p>
              <button className="text-[#00D280] font-bold text-lg bg-white px-6 py-2 rounded-lg mt-4 shadow-md">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Ourservices;
