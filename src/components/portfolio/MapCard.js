import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function MapCard({ image, title, description, link, onClick }) {
  const CardContent = () => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative group bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay con descripción */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Icono de enlace externo */}
        {link && (
          <div className="absolute top-3 right-3 bg-cyan-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="p-4 border-t border-cyan-500/20">
        <p className="text-cyan-400 font-medium text-center group-hover:text-cyan-300 transition-colors">
          {title}
        </p>
      </div>

      {/* Efecto de brillo al hacer hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      </motion.div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  return (
    <div onClick={onClick}>
      <CardContent />
    </div>
  );
}