import React from 'react';
import { Calendar, Shield, Award, Users, Stethoscope, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
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
              Dr. Hasnaa El Malki
              <span className="hero-subtitle">Votre Médecin de Confiance</span>
            </h1>
            <p className="hero-description">
              Médecin généraliste expérimentée, je vous offre des soins de qualité 
              dans un environnement chaleureux et professionnel. Plus de 15 ans 
              d'expérience au service de votre santé et de votre bien-être.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <Stethoscope className="feature-icon" />
                <span>Consultations de qualité</span>
              </div>
              <div className="feature">
                <Shield className="feature-icon" />
                <span>Soins professionnels</span>
              </div>
              <div className="feature">
                <Users className="feature-icon" />
                <span>Approche humaine</span>
              </div>
              <div className="feature">
                <Award className="feature-icon" />
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
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Dr. Hasnaa El Malki"
                  className="doctor-img"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. Hasnaa El Malki</h3>
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
                
                <div className="doctor-contact">
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
                  <div className="emergency-contact">
                    <AlertCircle size={16} />
                    <span>Urgences : 15</span>
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
