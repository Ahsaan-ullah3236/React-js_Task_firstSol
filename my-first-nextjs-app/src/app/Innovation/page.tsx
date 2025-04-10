// "use client"
// import React, { useState } from 'react';

// function Innovation() {
//   const [activeTab, setActiveTab] = useState("Frontend");

//   const technologies = {
//     Frontend: ['React', 'Vue', 'Tailwind CSS'],
//     Backend: ['Node.js', 'Django', 'Spring Boot'],
//     DevOps: ['Docker', 'Kubernetes', 'GitHub Actions']
//   };

//   return (
//     <section className="flex justify-center px-4 py-10 bg-white border-2 border-green-300">
//       <div className="border-2 border-black w-full max-w-4xl rounded-xl p-6 bg-gray-50 shadow-lg">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Technologies We Use for Innovation
//           </h1>
//           <p className="text-gray-600 text-lg">
//             These are the latest tools we evaluate to build top-tier IT solutions tailored for you.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col items-center border-t border-gray-200 pt-6 bg-[#00D280]">
//           <div className="flex gap-4 justify-center flex-nowrap overflow-x-auto px-2">
//             {Object.keys(technologies).map((tab) => (
//               <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-full shadow transition text-black bg-[#c3eef977]`}> {tab} </button> ))}
//           </div>
//         </div>

//         {/* Tech list */}
//         <div className="mt-8 text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">{activeTab} Tools</h2>
//           <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg">
//             {technologies[activeTab].map((tech) => (
//               <li key={tech} className="bg-white px-4 py-2 rounded-lg border shadow-sm hover:shadow-md transition"> {tech}</li> ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Innovation;
