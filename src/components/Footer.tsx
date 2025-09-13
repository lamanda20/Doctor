import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Dr. Hasnaa El Malki</h3>
              <p>Médecin Généraliste</p>
            </div>
            <p className="footer-description">
              Votre santé est notre priorité. Plus de 15 ans d'expérience 
              au service de votre bien-être avec une approche humaine et 
              professionnelle de la médecine.
            </p>
            <div className="footer-badges">
              <div className="badge">
                <Shield size={20} />
                <span>Conventionné Secteur 1</span>
              </div>
              <div className="badge">
                <Award size={20} />
                <span>Ordre des Médecins</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('accueil')}>
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('a-propos')}>
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('témoignages')}>
                  Témoignages
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('location')}>
                  Localisation
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Consultation Générale</li>
              <li>Suivi Médical</li>
              <li>Pédiatrie</li>
              <li>Médecine de Famille</li>
              <li>Vaccinations</li>
              <li>Certificats Médicaux</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Avenue de la Santé<br />75014 Paris</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@dr-dubois.fr</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Lun-Ven: 8h-18h<br />Sam: 9h-12h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2024 Dr. Hasnaa El Malki. Tous droits réservés.</p>
            <div className="footer-legal">
              <a href="#mentions">Mentions légales</a>
              <a href="#confidentialite">Politique de confidentialité</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-emergency">
              <strong>🚨 Urgences: 15 (SAMU)</strong>
            </div>
            <div className="footer-made-with">
              <span>Fait avec</span>
              <Heart size={16} className="heart-icon" />
              <span>pour votre santé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
