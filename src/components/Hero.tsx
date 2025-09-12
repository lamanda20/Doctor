import React from 'react';
import { Calendar, Shield, Clock, Heart } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('a-propos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Dr. Marie Dubois
              <span className="hero-subtitle">Votre Médecin de Confiance</span>
            </h1>
            <p className="hero-description">
              Médecin généraliste expérimentée, je vous offre des soins de qualité 
              dans un environnement chaleureux et professionnel. Plus de 15 ans 
              d'expérience au service de votre santé et de votre bien-être.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <Clock className="feature-icon" />
                <span>Consultations de qualité</span>
              </div>
              <div className="feature">
                <Shield className="feature-icon" />
                <span>Soins professionnels</span>
              </div>
              <div className="feature">
                <Heart className="feature-icon" />
                <span>Approche humaine</span>
              </div>
              <div className="feature">
                <Calendar className="feature-icon" />
                <span>15+ ans d'expérience</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollToSection('gallery')}>
                <Calendar size={20} />
                Découvrir le Cabinet
              </button>
              <button className="btn btn-secondary" onClick={scrollToAbout}>
                En savoir plus
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="doctor-card">
              <div className="doctor-photo">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Dr. Marie Dubois"
                  className="doctor-img"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. Marie Dubois</h3>
                <p>Diplômée de la Faculté de Médecine de Paris</p>
                <div className="doctor-stats">
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Années d'expérience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Patients satisfaits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
