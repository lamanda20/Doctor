import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
      {/* Navigation principale */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <h3>Dr. Hasnaa El Malki</h3>
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
