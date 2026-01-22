import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/francisco-lastres-gomez/",
      label: "Francisco Lastres Gómez",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:lastres.gomez@gmail.com",
      label: "lastres.gomez@gmail.com",
      color: "hover:text-cyan-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/95devFran",
      label: "95devFran",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-[#031417] to-[#04292d] text-gray-400 py-8 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Año */}
          <p className="text-sm">© 2025 FranMaps - Todos los derechos reservados</p>

          {/* Enlaces sociales */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 transition-colors ${link.color}`}
              >
                {link.icon}
                <span className="text-sm">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Efecto decorativo */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </footer>
  );
}