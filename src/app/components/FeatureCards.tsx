'use client';

import { motion } from 'framer-motion';

export default function FeatureCards() {
  const features = [
    {
      title: 'Sustainable Proof of Stake',
      description: 'Pollux SPoS aligns incentives with sustainability.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="bg-black/60 p-4 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p>{feature.description}</p>
          <button className="mt-4 bg-[#ffbf32] px-4 py-2 rounded-md">Learn More</button>
        </motion.div>
      ))}
    </div>
  );
}
