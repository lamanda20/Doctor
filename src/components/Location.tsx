import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Location: React.FC = () => {
  return (
    <section
      className="w-full bg-[#3790B4]/5 py-20 scroll-mt-20"
      id="location"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-2"
          >
            Localisation & Contact
          </h2>
          <p className="text-[#6F78B9] text-lg max-w-3xl mx-auto">
            Un cabinet facilement accessible au cœur de Paris, bien desservi par
            les transports. Retrouvez ici toutes les informations pratiques pour
            nous joindre.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8267267!2d2.3272596!3d48.8334444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67191e1b3f6e1%3A0x2b1234567890abcd!2sParis%2014e%20Arrondissement%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
              className="w-full h-64 rounded-xl border-none mb-2"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            ></iframe>
            <div className="flex gap-4 items-center">
              <MapPin className="text-[#6F78B9]" size={32} />
              <div>
                <h3 className="font-bold text-[#40338B] mb-1">
                  Cabinet Dr. Hasnaa El Malki
                </h3>
                <p className="text-[#40338B]/90 text-sm">
                  123 Avenue de la Santé
                  <br />
                  75014 Paris, France
                  <br />
                  2ème étage, Ascenseur disponible
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informations d'accès */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-[#40338B] mb-2 flex items-center gap-2">
                <MapPin className="text-[#6F78B9]" size={20} /> Adresse Complète
              </h3>
              <div className="flex gap-4 items-center">
                <Navigation className="text-[#6F78B9]" size={24} />
                <div>
                  <p className="text-[#40338B] text-sm">
                    123 Avenue de la Santé
                  </p>
                  <p className="text-[#40338B] text-sm">75014 Paris</p>
                  <p className="text-[#6F78B9] text-xs">
                    2ème étage (Ascenseur disponible)
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-3">
                <Phone className="text-[#6F78B9]" size={24} />
                <div>
                  <p className="text-[#40338B] text-sm">+33 1 23 45 67 89</p>
                  <p className="text-[#6F78B9] text-xs">Secrétariat médical</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-[#40338B] mb-2 flex items-center gap-2">
                <Clock className="text-[#6F78B9]" size={20} /> Horaires
                d'Ouverture
              </h3>
              <div className="text-[#40338B] text-sm space-y-1">
                <div>Lundi - Vendredi : 8h00 - 19h00</div>
                <div>Samedi : 9h00 - 13h00</div>
                <div>Dimanche : Fermé</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
