import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Star, Users } from "lucide-react";

interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: "diagnostic" | "monitoring" | "treatment" | "hygiene";
}

const equipments: Equipment[] = [
  {
    id: "1",
    name: "Échographe Haute Définition",
    description:
      "Équipement de dernière génération pour des examens échographiques précis",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "Imagerie haute résolution",
      "Doppler couleur",
      "Sondes multiples",
      "Archivage numérique",
    ],
    category: "diagnostic",
  },
  {
    id: "2",
    name: "Électrocardiographe Digital",
    description:
      "ECG 12 dérivations pour une surveillance cardiaque complète et fiable",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "12 dérivations",
      "Analyse automatique",
      "Écran tactile",
      "Impression immédiate",
    ],
    category: "diagnostic",
  },
  {
    id: "3",
    name: "Tensiomètre Professionnel",
    description:
      "Mesure précise de la tension artérielle avec validation clinique",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "Mesures certifiées",
      "Détection arythmie",
      "Historique patient",
      "Bluetooth intégré",
    ],
    category: "monitoring",
  },
  {
    id: "4",
    name: "Stérilisateur Médical",
    description:
      "Autoclave professionnel garantissant une stérilisation optimale",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "Stérilisation vapeur",
      "Cycles programmés",
      "Traçabilité complète",
      "Normes EN 13060",
    ],
    category: "hygiene",
  },
  {
    id: "5",
    name: "Spiromètre Électronique",
    description: "Tests de fonction respiratoire avec analyses détaillées",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "Tests standardisés",
      "Courbes précises",
      "Rapports PDF",
      "Suivi longitudinal",
    ],
    category: "diagnostic",
  },
  {
    id: "6",
    name: "Dermatoscope Numérique",
    description: "Imagerie dermatologique avancée pour examens approfondis",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: [
      "Grossissement 10x-50x",
      "Éclairage LED polarisé",
      "Photos haute résolution",
      "Stockage sécurisé",
    ],
    category: "diagnostic",
  },
];

const Equipment: React.FC = () => {
  return (
    <section className="equipment-section" id="equipment" scroll-mt-20>
      <div className="equipment-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="equipment-header"
        >
          <h2 className="equipment-title">Découvrez Notre Cabinet</h2>
          <p className="equipment-subtitle">
            Un environnement moderne et professionnel pour votre santé et votre
            bien-être
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
                    {equipment.category === "diagnostic" && "Diagnostic"}
                    {equipment.category === "monitoring" && "Monitoring"}
                    {equipment.category === "treatment" && "Traitement"}
                    {equipment.category === "hygiene" && "Hygiène"}
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
