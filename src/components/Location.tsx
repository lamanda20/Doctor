import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Train, Bus, Navigation } from 'lucide-react';
import './Location.css';

const Location: React.FC = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="location-header"
        >
          <h2 className="location-title">
            Localisation & Contact
          </h2>
          <p className="location-subtitle">
            Un cabinet facilement accessible au cœur de Paris, bien desservi par les transports. 
            Trouvez toutes les informations pour nous contacter.
          </p>
        </motion.div>

        <div className="location-grid">
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="map-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8267267!2d2.3272596!3d48.8334444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67191e1b3f6e1%3A0x2b1234567890abcd!2sParis%2014e%20Arrondissement%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
              className="map-frame"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            ></iframe>
            
            <div className="map-info">
              <div className="map-header">
                <div className="map-icon">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="map-title">Cabinet Dr. Hasnaa El Malki</h3>
                  <p className="map-subtitle">Médecine Générale</p>
                </div>
              </div>
              
              <div className="address-details">
                <p><strong>123 Avenue de la Santé</strong></p>
                <p>75014 Paris, France</p>
                <p>2ème étage, Ascenseur disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Informations d'accès */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="location-info"
          >
            {/* Adresse et contact */}
            <div className="info-card">
              <h3 className="info-card-title">
                <div className="info-icon blue-icon">
                  <MapPin size={16} />
                </div>
                Adresse Complète
              </h3>
              <div className="info-card-content">
                <div className="info-item">
                  <Navigation size={20} className="info-item-icon" />
                  <div className="info-item-details">
                    <p className="info-item-main">123 Avenue de la Santé</p>
                    <p className="info-item-sub">75014 Paris</p>
                    <p className="info-item-sub">2ème étage (Ascenseur disponible)</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <Phone size={20} className="info-item-icon" />
                  <div className="info-item-details">
                    <p className="info-item-main">+33 1 23 45 67 89</p>
                    <p className="info-item-small">Secrétariat médical</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="info-card">
              <h3 className="info-card-title">
                <div className="info-icon green-icon">
                  <Clock size={16} />
                </div>
                Horaires d'Ouverture
              </h3>
              <div className="info-card-content">
                <div className="schedule-row">
                  <span className="schedule-day">Lundi - Vendredi</span>
                  <span className="schedule-time">8h00 - 19h00</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-day">Samedi</span>
                  <span className="schedule-time">9h00 - 13h00</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-day">Dimanche</span>
                  <span className="schedule-time">Fermé</span>
                </div>
              </div>
            </div>

            {/* Transports */}
            <div className="info-card">
              <h3 className="info-card-title">
                <div className="info-icon purple-icon">
                  <Train size={16} />
                </div>
                Accès Transports
              </h3>
              
              <div className="info-card-content">
                <div className="transport-item">
                  <div className="transport-icon blue-transport">
                    <Train size={16} />
                  </div>
                  <div className="transport-details">
                    <p className="transport-name">RER B</p>
                    <p className="transport-info">Cité Universitaire (3 min à pied)</p>
                  </div>
                </div>
                
                <div className="transport-item">
                  <div className="transport-icon green-transport">
                    <Train size={16} />
                  </div>
                  <div className="transport-details">
                    <p className="transport-name">Métro Ligne 4</p>
                    <p className="transport-info">Porte d'Orléans (7 min à pied)</p>
                  </div>
                </div>
                
                <div className="transport-item">
                  <div className="transport-icon red-transport">
                    <Bus size={16} />
                  </div>
                  <div className="transport-details">
                    <p className="transport-name">Bus 21, 38</p>
                    <p className="transport-info">Arrêt Avenue de la Santé</p>
                  </div>
                </div>
                
                <div className="transport-item">
                  <div className="transport-icon orange-transport">
                    <Car size={16} />
                  </div>
                  <div className="transport-details">
                    <p className="transport-name">Parking</p>
                    <p className="transport-info">Places disponibles dans la rue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibilité */}
            <div className="accessibility-card">
              <h3 className="accessibility-title">
                🦽 Accessibilité PMR
              </h3>
              <div className="accessibility-list">
                <p>✓ Ascenseur jusqu'au 2ème étage</p>
                <p>✓ Couloirs adaptés aux fauteuils roulants</p>
                <p>✓ Toilettes accessibles</p>
                <p>✓ Places de parking réservées</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
