import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, Award } from 'lucide-react';
import './ModernCTA.css';

const ModernCTA: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="modern-cta-section">
      {/* Éléments décoratifs de fond */}
      <div className="modern-cta-decorative">
        <div className="decorative-element top-left"></div>
        <div className="decorative-element bottom-right"></div>
        <div className="decorative-element center"></div>
      </div>

      <div className="modern-cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="modern-cta-header"
        >
          <h2 className="modern-cta-title">
            Votre Santé, Notre Expertise
          </h2>
          <p className="modern-cta-subtitle">
            Découvrez un cabinet médical moderne, équipé des dernières technologies 
            et animé par une approche humaine et personnalisée de votre santé.
          </p>
        </motion.div>

        <div className="modern-cta-features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="feature-card"
          >
            <div className="feature-icon">
              <Award size={32} />
            </div>
            <h3 className="feature-title">Excellence Médicale</h3>
            <p className="feature-description">15+ années d'expérience et formation continue</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="feature-card"
          >
            <div className="feature-icon">
              <Calendar size={32} />
            </div>
            <h3 className="feature-title">Équipements Modernes</h3>
            <p className="feature-description">Technologies de pointe pour des diagnostics précis</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="feature-card"
          >
            <div className="feature-icon">
              <MapPin size={32} />
            </div>
            <h3 className="feature-title">Localisation Idéale</h3>
            <p className="feature-description">Cabinet accessible et bien desservi</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="feature-card"
          >
            <div className="feature-icon">
              <Phone size={32} />
            </div>
            <h3 className="feature-title">Écoute & Proximité</h3>
            <p className="feature-description">Approche humaine et bienveillante</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="modern-cta-actions"
        >
          <div className="cta-buttons-wrapper">
            <div className="cta-buttons">
              <button
                onClick={() => scrollToSection('gallery')}
                className="cta-button primary"
              >
                Découvrir Notre Cabinet
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="cta-button secondary"
              >
                Nous Contacter
              </button>
            </div>
            
            <div className="cta-contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>123 Avenue de la Santé, Paris 14e</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCTA;
