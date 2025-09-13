import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Star, Users } from 'lucide-react';
import './Equipment.css';

interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: 'diagnostic' | 'monitoring' | 'treatment' | 'hygiene';
}

const equipments: Equipment[] = [
  {
    id: '1',
    name: 'Échographe HD Premium',
    description: 'Technologie de pointe pour des examens échographiques haute définition',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Imagerie 4D temps réel', 'Doppler couleur avancé', 'Sondes multifréquences', 'Archivage numérique'],
    category: 'diagnostic'
  },
  {
    id: '2',
    name: 'ECG 12 Dérivations Numérique',
    description: 'Électrocardiographe de dernière génération pour diagnostic cardiaque précis',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Analyse automatique', 'Écran tactile HD', 'Transmission sécurisée', 'Base de données patients'],
    category: 'diagnostic'
  },
  {
    id: '3',
    name: 'Tensiomètre Automatique Pro',
    description: 'Monitoring tensionnel professionnel avec mesures validées cliniquement',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Mesures oscillométriques', 'Détection arythmie', 'Moyennes automatiques', 'Suivi évolutif'],
    category: 'monitoring'
  },
  {
    id: '4',
    name: 'Autoclave Classe B',
    description: 'Stérilisation de classe hospitalière pour la sécurité maximale',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Cycle court 15 min', 'Traçabilité complète', 'Tests biologiques', 'Normes EN 13060'],
    category: 'hygiene'
  },
  {
    id: '5',
    name: 'Spiromètre Électronique',
    description: 'Évaluation complète de la fonction respiratoire avec précision clinique',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Tests standardisés', 'Courbes débit-volume', 'Comparaison normales', 'Rapport automatique'],
    category: 'diagnostic'
  },
  {
    id: '6',
    name: 'Dermatoscope Digital',
    description: 'Examen dermatologique approfondi avec technologie d\'imagerie avancée',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    features: ['Grossissement x10-x50', 'Éclairage LED', 'Capture d\'images', 'Suivi évolutif'],
    category: 'diagnostic'
  }
];

const Equipment: React.FC = () => {
  return (
    <section className="equipment-section" id="equipment">
      <div className="equipment-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="equipment-header"
        >
          <h2 className="equipment-title">
            Équipements Médicaux
          </h2>
          <p className="equipment-subtitle">
            Technologies de pointe au service de votre santé et de diagnostics précis
          </p>
        </motion.div>

        {/* Équipements médicaux */}
        <div className="equipment-grid">
          {equipments.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="equipment-card"
            >
              <div className="equipment-image">
                <img src={equipment.image} alt={equipment.name} />
                <div className="equipment-overlay">
                  <span className="equipment-category">
                    {equipment.category === 'diagnostic' && 'Diagnostic'}
                    {equipment.category === 'monitoring' && 'Monitoring'}
                    {equipment.category === 'treatment' && 'Traitement'}
                    {equipment.category === 'hygiene' && 'Hygiène'}
                  </span>
                </div>
              </div>
              
              <div className="equipment-content">
                <h3 className="equipment-name">{equipment.name}</h3>
                <p className="equipment-description">{equipment.description}</p>
                
                <div className="equipment-features">
                  <h4 className="features-title">Caractéristiques :</h4>
                  <ul className="features-list">
                    {equipment.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges de qualité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="quality-badges"
        >
          <div className="quality-badge">
            <div className="badge-icon security">
              <Shield size={32} />
            </div>
            <h5 className="badge-title">Sécurité</h5>
            <p className="badge-description">Normes hospitalières</p>
          </div>
          
          <div className="quality-badge">
            <div className="badge-icon quality">
              <Star size={32} />
            </div>
            <h5 className="badge-title">Qualité</h5>
            <p className="badge-description">Équipements certifiés</p>
          </div>
          
          <div className="quality-badge">
            <div className="badge-icon experience">
              <Users size={32} />
            </div>
            <h5 className="badge-title">Expérience</h5>
            <p className="badge-description">15+ années</p>
          </div>
          
          <div className="quality-badge">
            <div className="badge-icon innovation">
              <CheckCircle size={32} />
            </div>
            <h5 className="badge-title">Innovation</h5>
            <p className="badge-description">Technologies récentes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Equipment;
