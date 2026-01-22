import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/portfolio/Header';
import FlipCard from '../components/portfolio/FlipCard';
import AccordionSection from '../components/portfolio/AccordionSection';
import MapCard from '../components/portfolio/MapCard';
import ImageModal from '../components/portfolio/ImageModal';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      icon: '🗺️',
      title: 'Cartografía Temática',
      description: 'Transformo datos complejos en mapas claros y atractivos.'
    },
    {
      icon: '🖥️',
      title: 'Visores Interactivos',
      description: 'Puedes explorar los datos por ti mismo con mapas interactivos.'
    },
    {
      icon: '🐍',
      title: 'Automatización con Python',
      description: 'Optimizo procesos GIS con scripts en Python.'
    }
  ];

  const thematicMaps = [
    {
      image: '/images/cartograma.jpg',
      title: 'Cartograma Turismo España',
      description: 'Cartograma que representa el turismo en España por provincia.'
    },
    {
      image: '/images/happiness.jpeg',
      title: 'Índice de Felicidad en Europa',
      description: 'Mapa temático del índice de felicidad en Europa.'
    },
    {
      image: '/images/Madrid.jpg',
      title: 'Cartografía estilo neón',
      description: 'Serie de mapas con estilo Neón de varias ciudades',
      gallery: [
        { src: '/images/Madrid.jpg', caption: 'Ciudad Neón - Madrid' },
        { src: '/images/London.jpg', caption: 'Ciudad Neón - Londres' }
      ]
    },
    {
      image: '/images/ndvi_soria.jpeg',
      title: 'NDVI Cultivos',
      description: 'Mapa NDVI de cultivos'
    },
    {
      image: '/images/tierra subbetic.jpeg',
      title: 'Mapa Parque Natural con Estilo Fantasía',
      description: 'Mapa de parque natural con estilo fantasía.'
    }
  ];

  const interactiveViewers = [
    {
      image: '/images/traffic.png',
      title: 'Tráfico en Tiempo Real',
      description: 'Visor de tráfico en tiempo real basado en la API de TomTom.',
      link: 'https://traffic-real-time.vercel.app/'
    },
    {
      image: '/images/valladolid.JPG',
      title: 'Puntos Turísticos Valladolid',
      description: 'Mapa interactivo de Valladolid con puntos turísticos.',
      link: 'https://valladolid.vercel.app/'
    },
    {
      image: '/images/estaciones.JPG',
      title: 'Estaciones de tren Madrid',
      description: 'Mapa interactivo de estaciones de tren y vías de Madrid.',
      link: 'https://visor-estaciones.vercel.app/'
    }
  ];

  const openModal = (image, title, gallery = null) => {
    if (gallery) {
      setGalleryImages(gallery);
      setCurrentImageIndex(0);
      setModalImage(gallery[0].src);
      setModalTitle(gallery[0].caption);
    } else {
      setGalleryImages([]);
      setModalImage(image);
      setModalTitle(title);
    }
    setModalOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setModalImage(galleryImages[nextIndex].src);
    setModalTitle(galleryImages[nextIndex].caption);
  };

  const handlePrev = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setModalImage(galleryImages[prevIndex].src);
    setModalTitle(galleryImages[prevIndex].caption);
  };

  return (
    <div className="min-h-screen bg-[#031417]">
      <Header />

      {/* Servicios - Flip Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-cyan-400 text-center mb-12 font-['Orbitron']"
          >
            Servicios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mapas Temáticos */}
      <AccordionSection icon="🗺️" title="Mapas temáticos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {thematicMaps.map((map, index) => (
            <MapCard
              key={index}
              image={map.image}
              title={map.title}
              description={map.description}
              onClick={() => openModal(map.image, map.title, map.gallery)}
            />
          ))}
        </div>
      </AccordionSection>

      {/* Visores Web Interactivos */}
      <AccordionSection icon="🖥️" title="Visores Web Interactivos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactiveViewers.map((viewer, index) => (
            <MapCard
              key={index}
              image={viewer.image}
              title={viewer.title}
              description={viewer.description}
              link={viewer.link}
            />
          ))}
        </div>
      </AccordionSection>

      {/* Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={modalImage}
        title={modalTitle}
        hasGallery={galleryImages.length > 0}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <Footer />

      {/* Partículas flotantes decorativas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}