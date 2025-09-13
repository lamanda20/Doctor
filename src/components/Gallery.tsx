import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: "cabinet" | "equipment";
}

const galleryImages: GalleryImage[] = [
  // Cabinet intérieur
  {
    id: "1",
    src: "/bureau-de-reception.png",
    title: "Bureau de Réception",
    description:
      "Accueil chaleureux et professionnel pour vos rendez-vous, informations et orientation au sein du cabinet",
    category: "cabinet",
  },
  {
    id: "2",
    src: "/salle-de-attente.png",
    title: "Salle d'attente moderne",
    description: "Espace accueillant et confortable pour votre arrivée",
    category: "cabinet",
  },

  {
    id: "3",
    src: "/bureau-de-consultation.png",
    title: "Bureau de consultation",
    description: "Mon espace de travail où je vous reçois en consultation",
    category: "cabinet",
  },
  

  

  // Équipements
  {
    id: "4",
    src: "/equipement-1.png",
    title: "Salle d'examen",
    description: "Salle d'examen équipée selon les standards médicaux",
    category: "equipment",
  },
];

const categoryLabels = {
  cabinet: "Cabinet",
  equipment: "Équipements",
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="w-full bg-[#3790B4]/5 py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-2">
            Notre Cabinet en Images
          </h2>
          <p className="text-[#6F78B9] text-lg">
            Découvrez notre environnement professionnel, nos équipements
            modernes et notre équipe dévouée
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border transition ${
              filter === "all"
                ? "bg-[#40338B] text-white"
                : "bg-white text-[#40338B] border-[#40338B] hover:bg-[#6F78B9]/20"
            }`}
          >
            Tout ({galleryImages.length})
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => {
            const count = galleryImages.filter(
              (img) => img.category === key
            ).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full border transition ${
                  filter === key
                    ? "bg-[#40338B] text-white"
                    : "bg-white text-[#40338B] border-[#40338B] hover:bg-[#6F78B9]/20"
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
              <div className="absolute inset-0 bg-[#40338B]/50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
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
              className="fixed inset-0 bg-[#40338B]/80 z-50 flex justify-center items-center p-4"
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
                  className="absolute top-4 right-4 text-[#40338B] hover:text-[#6F78B9] transition"
                >
                  <X size={28} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#3790B4] mb-2">
                    <Camera size={16} />
                    <span>{categoryLabels[selectedImage.category]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#40338B] mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-[#40338B] text-sm">
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
