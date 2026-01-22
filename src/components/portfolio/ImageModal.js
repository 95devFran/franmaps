import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, image, title, onNext, onPrev, hasGallery }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          {/* Botón cerrar */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-cyan-500/20 hover:bg-cyan-500/40 p-3 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navegación para galería */}
          {hasGallery && (
            <>
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2, x: -5 }}
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 text-cyan-400 hover:text-white p-4 bg-cyan-500/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>

              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2, x: 5 }}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 text-cyan-400 hover:text-white p-4 bg-cyan-500/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>
            </>
          )}

          {/* Imagen */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl max-h-[90vh] flex flex-col items-center"
          >
            <img 
              src={image}
              alt={title}
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl shadow-cyan-500/30"
            />
            {title && (
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-cyan-400 text-xl font-['Orbitron'] text-center"
              >
                {title}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}