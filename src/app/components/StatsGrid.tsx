// import React from 'react';

// export default function StatsGrid() {
//   const stats = [
//     { label: 'No. of Nodes', value: '19' },
//     { label: 'Avg Block Time', value: '3.00 Sec' },
//     { label: 'TPS', value: '1,500+' },
//     { label: 'Latest Block', value: '3,777,402' },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
//       {stats.map((stat, idx) => (
//         <div key={idx} className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition">
//           <h3 className="text-lg font-semibold">{stat.label}</h3>
//           <p className="text-2xl font-bold">{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from 'react';

export default function StatsGrid() {
  const stats = [
    { label: 'No. of Nodes', value: '19' },
    { label: 'Avg Block Time', value: '3.00 Sec' },
    { label: 'TPS', value: '1,500+' },
    { label: 'Latest Block', value: '3,777,402' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-grid text-white bg-white/10 bg-opacity-20">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-black/50 p-4 rounded-lg shadow-md hover:scale-105 transition transform"
        >
          <h3 className="text-lg font-semibold">{stat.label}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
