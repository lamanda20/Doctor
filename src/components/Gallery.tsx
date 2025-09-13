import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: "cabinet" | "equipment" | "staff" | "exterior";
}

const galleryImages: GalleryImage[] = [
  // Cabinet intérieur
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Salle d'attente moderne",
    description: "Espace accueillant et confortable pour votre arrivée",
    category: "cabinet",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Bureau de consultation",
    description: "Mon espace de travail où je vous reçois en consultation",
    category: "cabinet",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Salle d'examen",
    description: "Salle d'examen équipée selon les standards médicaux",
    category: "cabinet",
  },

  // Équipements
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Échographe professionnel",
    description: "Équipement d'imagerie médicale de dernière génération",
    category: "equipment",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Électrocardiographe",
    description: "Monitoring cardiaque haute précision",
    category: "equipment",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Station de stérilisation",
    description: "Respect strict des protocoles d'hygiène et de sécurité",
    category: "equipment",
  },

  // Équipe
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Dr. Hasnaa El Malki",
    description: "Médecin généraliste diplômée, 15 ans d'expérience",
    category: "staff",
  },

  // Extérieur
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1519452634257-4d8c40e24c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Entrée du cabinet",
    description: "Accès facilité et locaux modernes en plein Paris 14ème",
    category: "exterior",
  },
]; 

const categoryLabels = {
  cabinet: "Cabinet",
  equipment: "Équipements",
  staff: "Équipe",
  exterior: "Extérieur",
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="w-full bg-gray-50 py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-2">
            Notre Cabinet en Images
          </h2>
          <p className="text-teal-700 text-lg">
            Découvrez notre environnement professionnel, nos équipements modernes et notre équipe dévouée
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border transition ${
              filter === "all"
                ? "bg-teal-700 text-white"
                : "bg-white text-teal-700 border-teal-700 hover:bg-teal-100"
            }`}
          >
            Tout ({galleryImages.length})
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => {
            const count = galleryImages.filter((img) => img.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full border transition ${
                  filter === key
                    ? "bg-teal-700 text-white"
                    : "bg-white text-teal-700 border-teal-700 hover:bg-teal-100"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                <ZoomIn className="text-white mb-2" size={24} />
                <h4 className="text-white font-semibold">{image.title}</h4>
                <p className="text-white text-sm">{image.description}</p>
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
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
                >
                  <X size={28} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-teal-700 mb-2">
                    <Camera size={16} />
                    <span>{categoryLabels[selectedImage.category]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-teal-800 text-sm">{selectedImage.description}</p>
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
