
// "use client"
// import { useEffect, useState } from 'react';

// const StatsSection = () => {
//   const stats = [
//     { label: 'Clients Satisfaction', value: 100, suffix: '%' },
//     { label: 'Happy Clients', value: 80, suffix: '+' },
//     { label: 'On Time Delivery', value: 100, suffix: '%' },
//     { label: 'Project Delivered', value: 65, suffix: '' },
//   ];

//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const durations = stats.map(stat => 1500); // 1.5s duration
//     const increments = stats.map((stat, i) => stat.value / (durations[i] / 10)); // every 10ms

//     const intervals = stats.map((stat, i) =>
//       setInterval(() => {
//         setCounts(prev => {
//           const updated = [...prev];
//           if (updated[i] < stat.value) {
//             updated[i] = Math.min(updated[i] + increments[i], stat.value);
//           }
//           return updated;
//         });
//       }, 10)
//     );

//     setTimeout(() => intervals.forEach(clearInterval), 1600); // stop after 1.6s

//     return () => intervals.forEach(clearInterval);
//   }, []);

//   return (
//     <div className="w-full -mt-12 py-6 px-6 bg-green-700 overflow-hidden">
//       <div className="flex flex-wrap gap-6 items-center justify-between text-center">
//         {stats.map((stat, i) => (
//           <div key={i} className="w-40">
//             <span className="text-2xl font-bold text-[#0d064d]">
//               {Math.round(counts[i])} {stat.suffix}
//             </span>
//             <p className="text-white">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsSection;
