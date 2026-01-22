import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlipCard({ icon, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-64 cursor-pointer perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1c1c1c] to-[#04292d] rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 flex flex-col items-center justify-center p-6">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-cyan-400 font-['Orbitron'] text-center">
            {title}
          </h3>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-400/50 shadow-lg shadow-cyan-500/30 flex items-center justify-center p-6"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-gray-100 text-center leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}