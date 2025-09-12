import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';
import './Gallery.css';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: 'cabinet' | 'equipment' | 'staff' | 'exterior';
}

const galleryImages: GalleryImage[] = [
  // Cabinet intérieur
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Salle d\'attente moderne',
    description: 'Espace accueillant et confortable pour votre arrivée',
    category: 'cabinet'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Bureau de consultation',
    description: 'Mon espace de travail où je vous reçois en consultation',
    category: 'cabinet'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Salle d\'examen',
    description: 'Salle d\'examen équipée selon les standards médicaux',
    category: 'cabinet'
  },
  
  // Équipements
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Échographe professionnel',
    description: 'Équipement d\'imagerie médicale de dernière génération',
    category: 'equipment'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Électrocardiographe',
    description: 'Monitoring cardiaque haute précision',
    category: 'equipment'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Station de stérilisation',
    description: 'Respect strict des protocoles d\'hygiène et de sécurité',
    category: 'equipment'
  },

  // Équipe
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Dr. Marie Dubois',
    description: 'Médecin généraliste diplômée, 15 ans d\'expérience',
    category: 'staff'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Secrétaire médicale',
    description: 'Assistante expérimentée pour votre accueil et vos démarches',
    category: 'staff'
  },

  // Extérieur
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1519452634257-4d8c40e24c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Entrée du cabinet',
    description: 'Accès facilité et locaux modernes en plein Paris 14ème',
    category: 'exterior'
  }
];

const categoryLabels = {
  cabinet: 'Cabinet',
  equipment: 'Équipements',
  staff: 'Équipe',
  exterior: 'Extérieur'
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gallery-header"
        >
          <h2 className="gallery-title">Notre Cabinet en Images</h2>
          <p className="gallery-subtitle">
            Découvrez notre environnement professionnel, nos équipements modernes et notre équipe dévouée
          </p>
        </motion.div>

        {/* Filtres modernisés */}
        <div className="gallery-navigation">
          <button
            onClick={() => setFilter('all')}
            className={`nav-btn ${filter === 'all' ? 'active' : ''}`}
          >
            <span>Tout</span>
            <small>({galleryImages.length})</small>
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => {
            const count = galleryImages.filter(img => img.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`nav-btn ${filter === key ? 'active' : ''}`}
              >
                <span>{label}</span>
                <small>({count})</small>
              </button>
            );
          })}
        </div>

        {/* Grille d'images modernisée */}
        <div className="gallery-grid-modern">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gallery-item-modern"
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image-modern"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <ZoomIn className="zoom-icon" />
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="close-btn"
                >
                  <X className="w-8 h-8" />
                </button>
                
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="lightbox-image"
                />
                <div className="lightbox-info">
                  <div className="lightbox-category">
                    <Camera className="w-5 h-5" />
                    <span>{categoryLabels[selectedImage.category]}</span>
                  </div>
                  <h3 className="lightbox-title">
                    {selectedImage.title}
                  </h3>
                  <p className="lightbox-description">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
