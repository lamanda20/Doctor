import React from 'react';
import { 
  Heart, 
  Brain, 
  Baby, 
  Users, 
  Activity, 
  Shield,
  Thermometer,
  Pill
} from 'lucide-react';
import './Expertise.css';

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      id: 'cardiologie',
      name: 'Cardiologie Préventive',
      description: 'Prévention et dépistage des maladies cardiovasculaires, suivi de l\'hypertension.',
      icon: <Heart />,
      specializations: [
        'Dépistage cardiovasculaire',
        'Suivi de l\'hypertension',
        'Prévention des AVC',
        'Conseils nutritionnels cardio'
      ]
    },
    {
      id: 'geriatrie',
      name: 'Gériatrie',
      description: 'Soins spécialisés pour les personnes âgées avec une approche globale.',
      icon: <Users />,
      specializations: [
        'Suivi des pathologies chroniques',
        'Prévention des chutes',
        'Coordination des soins',
        'Maintien à domicile'
      ]
    },
    {
      id: 'pediatrie',
      name: 'Pédiatrie',
      description: 'Suivi médical des enfants et adolescents de la naissance à 18 ans.',
      icon: <Baby />,
      specializations: [
        'Suivi de croissance',
        'Vaccinations pédiatriques',
        'Dépistage développemental',
        'Conseils aux parents'
      ]
    },
    {
      id: 'diabetologie',
      name: 'Diabétologie',
      description: 'Prise en charge du diabète et des troubles métaboliques.',
      icon: <Activity />,
      specializations: [
        'Diabète type 1 et 2',
        'Éducation thérapeutique',
        'Surveillance glycémique',
        'Prévention des complications'
      ]
    },
    {
      id: 'psychiatrie',
      name: 'Santé Mentale',
      description: 'Accompagnement pour les troubles anxieux, dépression et burn-out.',
      icon: <Brain />,
      specializations: [
        'Dépistage dépression',
        'Gestion du stress',
        'Troubles anxieux',
        'Accompagnement psychologique'
      ]
    },
    {
      id: 'urgences',
      name: 'Médecine d\'Urgence',
      description: 'Formation en médecine d\'urgence pour une prise en charge optimale.',
      icon: <Shield />,
      specializations: [
        'Premiers secours',
        'Urgences vitales',
        'Traumatismes mineurs',
        'Coordination SAMU'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Diplôme d\'État de Docteur en Médecine',
      institution: 'Université Paris Descartes',
      year: '2008'
    },
    {
      name: 'Certificat de Médecine d\'Urgence',
      institution: 'CHU Cochin',
      year: '2010'
    },
    {
      name: 'Formation en Gériatrie',
      institution: 'Société Française de Gériatrie',
      year: '2015'
    },
    {
      name: 'Diplôme Universitaire Diabétologie',
      institution: 'Université Pierre et Marie Curie',
      year: '2018'
    }
  ];

  const equipments = [
    {
      name: 'Échographe HD',
      description: 'Imagerie haute résolution',
      icon: <Activity />
    },
    {
      name: 'ECG Digital',
      description: 'Monitoring cardiaque',
      icon: <Heart />
    },
    {
      name: 'Spiromètre',
      description: 'Tests respiratoires',
      icon: <Thermometer />
    },
    {
      name: 'Dermatoscope',
      description: 'Examen dermatologique',
      icon: <Shield />
    }
  ];

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <div className="section-header">
          <h2>Domaines d'Expertise</h2>
          <p>Des compétences spécialisées pour répondre à tous vos besoins de santé</p>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="expertise-card">
              <div className="expertise-icon">
                {area.icon}
              </div>
              
              <div className="expertise-content">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                
                <ul className="specializations">
                  {area.specializations.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3>Formations & Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <Pill />
                </div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.institution}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="equipment-highlight">
          <h3>Équipements Médicaux</h3>
          <div className="equipment-grid">
            {equipments.map((equipment, index) => (
              <div key={index} className="equipment-item">
                <div className="equipment-icon">
                  {equipment.icon}
                </div>
                <div className="equipment-info">
                  <h4>{equipment.name}</h4>
                  <p>{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
