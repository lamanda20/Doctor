import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barre d'informations sur une seule ligne */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>01 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@dr-dubois.fr</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Lun-Ven 8h-18h • Sam 9h-12h</span>
              </div>
              <div className="emergency-text">
                Urgences : 15
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <h3>Dr. Marie Dubois</h3>
              <span>Médecin Généraliste</span>
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('accueil')}
              >
                Accueil
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('a-propos')}
              >
                À Propos
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('expertise')}
              >
                Expertise
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('gallery')}
              >
                Galerie
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('location')}
              >
                Localisation
              </button>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('location')}
              >
                Contact
              </button>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
