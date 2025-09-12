import React from 'react';
import { GraduationCap, MapPin, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="a-propos" className="about section">
      <div className="container">
        <div className="section-header">
          <h2>À Propos de Dr. Marie Dubois</h2>
          <p>Votre médecin de confiance, à votre écoute depuis plus de 15 ans</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Votre Santé, Ma Priorité</h3>
              <p>
                Diplômée de la Faculté de Médecine de Paris en 2008, j'exerce 
                la médecine générale avec passion et dévouement depuis plus de 15 ans. 
                Dans mon cabinet moderne et chaleureux, je vous accueille avec mon équipe 
                pour vous offrir des soins personnalisés et de qualité.
              </p>
              <p>
                Mon approche se base sur l'écoute attentive, le dialogue et une prise 
                en charge globale de votre santé. Je prends le temps nécessaire pour 
                chaque consultation, car votre bien-être mérite toute mon attention.
              </p>
            </div>

            {/* Qualifications en format moderne intégré */}
            <div className="qualifications-modern">
              <div className="qualification-section">
                <h4><GraduationCap className="inline-icon" /> Formation & Expertise</h4>
                <div className="qualification-grid">
                  <div className="qualification-group">
                    <h5>Formation</h5>
                    <ul>
                      <li>Doctorat en Médecine - Université Paris Descartes (2008)</li>
                      <li>Diplôme d'État de Docteur en Médecine</li>
                      <li>Formation continue en médecine préventive</li>
                    </ul>
                  </div>
                  
                  <div className="qualification-group">
                    <h5>Certifications</h5>
                    <ul>
                      <li>Ordre des Médecins - Inscrite depuis 2008</li>
                      <li>Certification en médecine d'urgence</li>
                      <li>Formation en gériatrie et soins palliatifs</li>
                    </ul>
                  </div>
                  
                  <div className="qualification-group">
                    <h5>Langues</h5>
                    <ul>
                      <li>Français (langue maternelle)</li>
                      <li>Anglais (courant)</li>
                      <li>Espagnol (intermédiaire)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Statistiques en ligne */}
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Années</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Patients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>

            {/* Philosophie intégrée */}
            <div className="philosophy-section">
              <h4>Ma Philosophie</h4>
              <blockquote>
                "Chaque patient est unique et mérite une attention particulière. 
                Mon objectif est de vous accompagner dans votre parcours de santé 
                avec empathie, professionnalisme et expertise."
              </blockquote>
              <cite>- Dr. Marie Dubois</cite>
            </div>

            {/* Équipe et localisation fusionnées */}
            <div className="cabinet-info">
              <div className="team-compact">
                <h4><Users className="inline-icon" /> Mon Équipe</h4>
                <div className="team-members-compact">
                  <div className="team-member-compact">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" alt="Sophie Martin" />
                    <div>
                      <strong>Sophie Martin</strong>
                      <span>Secrétaire médicale (10 ans)</span>
                    </div>
                  </div>
                  <div className="team-member-compact">
                    <img src="https://images.unsplash.com/photo-1594824388853-edb4b80a8c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" alt="Claire Dubois" />
                    <div>
                      <strong>Claire Dubois</strong>
                      <span>Assistante médicale (7 ans)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="location-compact">
                <h4><MapPin className="inline-icon" /> Cabinet Médical</h4>
                <p>
                  123 Avenue de la Santé<br />
                  75014 Paris, France<br />
                  <small>Métro ligne 4, station Alésia</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
