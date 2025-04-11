"use client";
import React, { useState } from 'react';

function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What kind of services are provided by Keylogics?',
      answer: 'At Kavelogics we provide a comprehensive range of services such as: AI Development, Mobile app development, Website development, UI/UX design, and Digital marketing solutions, SEO and SaaS based website development'
    },
    {
      question: 'How can I contact Keylogics support?',
      answer: 'Kavelogics provides complete post-development support for all services, including custom software development, digital marketing, mobile app development, UI/UX design, and more. After the initial development process, we make sure your solutions continue to function smoothly and effective'
    },
    {
      question: 'Does Keylogics offer custom software solutions?',
      answer: 'Kavelogics s developers are devoted, industrious, and subject matter specialist  Our experts have expertise in areas such as mobile app development, and computer vision. Furthermore, they place a high value on openness and honesty in their interactions with clients, creating a collaborative atmosphere that encourages the free exchange of ideas'
    },
    {
      question: 'Where is Keylogics located?',
      answer: 'Keylogics is headquartered in Lahore, Pakistan, with regional offices in Dubai and London.'
    },
    {
      question: 'What industries does Keylogics serve?',
      answer: 'We serve healthcare, education, finance, e-commerce, and many more sectors.'
    }
  ];

  return (
    <>
      <div className="question-main-container w-[60%] mx-auto my-12 rounded-xl">
        <div className="second-container text-center text-6xl mb-10 font-bold">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="question-container px-5 py-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="question-item bg-white rounded-xl border border-gray-200 shadow-sm mb-6 p-5 transition-all duration-300 ease-in-out"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="question-header flex justify-between items-center cursor-pointer text-2xl font-bold rounded-md p-6 transition duration-300 ease-in-out"
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300`}
                  style={{
                    backgroundColor: "#00D280",
                    transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              {openIndex === index && (
                <div className="answer text-2xl text-gray-700 pt-2 px-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
