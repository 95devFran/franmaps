import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Code } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-[#031417] to-[#04292d] text-center py-16 border-b-2 border-cyan-500/30 overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Globe className="w-12 h-12 text-cyan-400" />
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 font-['Orbitron'] tracking-wider">
            FranMaps
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-gray-300 text-lg"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Diseño de cartografía
          </span>
          <span className="text-cyan-400">|</span>
          <span className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            GIS
          </span>
          <span className="text-cyan-400">|</span>
          <span className="flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" />
            Desarrollo Web
          </span>
        </motion.div>
      </div>

      {/* Efecto de brillo en el borde */}
      <motion.div
        animate={{ x: [-1000, 1000] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </motion.header>
  );
}