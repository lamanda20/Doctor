import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Calendar, Award, Target } from "lucide-react";

interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  color: string;
}

const metrics: Metric[] = [
  {
    id: "1",
    value: "15+",
    label: "Années de Pratique",
    description: "Expertise médicale acquise au service de votre santé",
    icon: <Calendar size={24} />,
    color: "black",
  },
  {
    id: "2",
    value: "5000+",
    label: "Patients Suivis",
    description: "Patients accompagnés dans leur parcours de santé",
    icon: <Users size={24} />,
    color: "black",
  },
  {
    id: "3",
    value: "98%",
    label: "Taux de Satisfaction",
    description:
      "Taux de satisfaction exceptionnellement élevé de nos patients",
    icon: <Star size={24} />,
    color: "black",
  },
  {
    id: "4",
    value: "4",
    label: "Spécialisations",
    description: "Domaines d'expertise pour une prise en charge complète",
    icon: <Award size={24} />,
    color: "black",
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Suivi Diabète Type 2",
    category: "Endocrinologie",
    description:
      "Accompagnement personnalisé d'un patient diabétique avec stabilisation glycémique.",
    result: "HbA1c réduite de 9.2% à 6.8% en 6 mois",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "blue",
  },
  {
    id: "2",
    title: "Programme Perte de Poids",
    category: "Nutrition",
    description:
      "Plan nutritionnel adapté avec suivi régulier pour une perte de poids durable.",
    result: "18kg perdus de manière saine en 8 mois",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "green",
  },
  {
    id: "3",
    title: "Gestion Hypertension",
    category: "Cardiologie",
    description:
      "Traitement et suivi personnalisé pour normaliser la tension artérielle.",
    result: "Tension stabilisée à 13/8 sans effets secondaires",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "red",
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="achievements-section" id="achievements" scroll-mt-20>
      <div className="achievements-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="achievements-header"
        >
          <h2 className="achievements-title">Nos Réalisations & Succès</h2>
          <p className="achievements-subtitle">
            Des résultats concrets au service de votre santé et de votre
            bien-être
          </p>
        </motion.div>

        {/* Métriques */}
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`metric-card metric-${metric.color}`}
            >
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-content">
                <h3 className="metric-value">{metric.value}</h3>
                <h4 className="metric-label">{metric.label}</h4>
                <p className="metric-description">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cas de réussite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="case-studies-section"
        >
          <h3 className="case-studies-title">Cas de Réussite</h3>
          <p className="case-studies-subtitle">
            Découvrez quelques exemples concrets de parcours de soins réussis
          </p>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`case-study-card case-study-${study.color}`}
              >
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} />
                  <div className="case-study-overlay">
                    <span className="case-study-category">
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="case-study-content">
                  <h4 className="case-study-title">{study.title}</h4>
                  <p className="case-study-description">{study.description}</p>

                  <div className="case-study-result">
                    <div className="result-icon">
                      <Target size={16} />
                    </div>
                    <div>
                      <span className="result-label">Résultat</span>
                      <p className="result-text">{study.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="achievements-cta"
        >
          <div className="cta-content">
            <h3 className="cta-title">Votre Santé, Notre Priorité</h3>
            <p className="cta-description">
              Rejoignez les milliers de patients qui nous font confiance pour
              leur suivi médical. Ensemble, construisons votre parcours de
              santé.
            </p>
            <div className="cta-buttons">
              <a href="#services" className="cta-btn primary">
                <TrendingUp size={20} />
                Découvrir Nos Services
              </a>
              <a href="#contact" className="cta-btn secondary">
                Nous Contacter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
