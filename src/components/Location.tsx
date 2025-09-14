import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Mail,
  MessageCircle,
} from "lucide-react";

const Location: React.FC = () => {
  return (
    <section
      className="w-full bg-[#3790B4]/5 pt-0 pb-10 scroll-mt-20"
      id="location"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-1"
          >
            Localisation & Contact
          </h2>
          <p className="text-[#6F78B9] text-base max-w-2xl mx-auto">
            Un cabinet facilement accessible à Ait Melloul, offrant un accueil
            chaleureux et toutes les informations nécessaires pour vous
            recevoir.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-2xl shadow-md p-5 flex flex-col gap-5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.0306726439806!2d-9.501000600000001!3d30.346209299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c709eacdc4b1%3A0x9b95c2c0dbc89dcc!2sCabinet%20de%20M%C3%A9decine%20G%C3%A9n%C3%A9rale%2C%20Diab%C3%A9tologie%20%26%20%C3%89chographie%20Dr.%20Hasnaa%20El%20Malki!5e1!3m2!1sfr!2sma!4v1757789439023!5m2!1sfr!2sma"
              className="w-full h-60 rounded-xl border-none mb-1.5"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            ></iframe>

            <div className="flex gap-3.5 items-center">
              <MapPin className="text-[#6F78B9]" size={28} />
              <div>
                <h3 className="font-bold text-[#40338B] mb-0.5 text-base">
                  Cabinet Dr. Hasnaa El Malki
                </h3>
                <p className="text-[#40338B]/90 text-xs leading-relaxed">
                  Immeuble Damou, 1er étage
                  <br />
                  Route de Biougra, Av. Mohamed VI
                  <br />
                  Ait Melloul, Maroc
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informations d'accès */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-5"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-[#40338B] mb-2 flex items-center gap-1.5 text-base">
                <Navigation className="text-[#6F78B9]" size={18} /> Adresse
                Complète
              </h3>
              <div className="flex gap-3 items-center mb-2">
                <MapPin className="text-[#6F78B9]" size={20} />
                <div>
                  <p className="text-[#40338B] text-xs">
                    Immeuble Damou, 1er étage
                  </p>
                  <p className="text-[#40338B] text-xs">
                    Route de Biougra, Av. Mohamed VI
                  </p>
                  <p className="text-[#40338B] text-xs">Ait Melloul, Agadir</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Phone className="text-[#6F78B9]" size={18} />
                  <span className="text-[#40338B] text-xs">
                    +212 (0) 5 28 24 11 19
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="text-[#6F78B9]" size={18} />
                  <span className="text-[#40338B] text-xs">
                    WhatsApp: +212 (0) 6 41 23 83 44
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="text-[#6F78B9]" size={18} />
                  <span className="text-[#40338B] text-xs">
                    cmhe25@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-[#40338B] mb-2 flex items-center gap-1.5 text-base">
                <Clock className="text-[#6F78B9]" size={18} /> Horaires
              </h3>
              <div className="text-[#40338B] text-xs space-y-0.5">
                <div>Lun - Ven : 8h00 - 19h00</div>
                <div>Sam : 9h00 - 13h00</div>
                <div>Dim : Fermé</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
