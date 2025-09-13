import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Users, 
  Syringe, 
  FileText,
  Clock,
  Euro,
  Shield,
  AlertTriangle
} from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 'consultation-generale',
      name: 'Consultation Générale',
      description: 'Examen médical complet, diagnostic et traitement des pathologies courantes.',
      duration: 30,
      price: 25,
      icon: <Stethoscope />,
      features: [
        'Examen clinique approfondi',
        'Établissement du diagnostic',
        'Prescription médicale',
        'Conseils préventifs'
      ]
    },
    {
      id: 'suivi-medical',
      name: 'Suivi Médical',
      description: 'Suivi régulier des pathologies chroniques et surveillance de l\'état de santé.',
      duration: 20,
      price: 25,
      icon: <Heart />,
      features: [
        'Suivi des maladies chroniques',
        'Surveillance des traitements',
        'Ajustement des posologies',
        'Prévention des complications'
      ]
    },
    {
      id: 'pediatrie',
      name: 'Pédiatrie',
      description: 'Soins médicaux spécialisés pour les enfants et adolescents.',
      duration: 30,
      price: 25,
      icon: <Baby />,
      features: [
        'Examens pédiatriques',
        'Suivi de croissance',
        'Vaccinations',
        'Conseils aux parents'
      ]
    },
    {
      id: 'medecine-famille',
      name: 'Médecine de Famille',
      description: 'Prise en charge globale de toute la famille avec une approche personnalisée.',
      duration: 45,
      price: 30,
      icon: <Users />,
      features: [
        'Suivi familial complet',
        'Coordination des soins',
        'Prévention familiale',
        'Éducation santé'
      ]
    },
    {
      id: 'vaccinations',
      name: 'Vaccinations',
      description: 'Administration des vaccins obligatoires et recommandés selon le calendrier vaccinal.',
      duration: 15,
      price: 'Variable',
      icon: <Syringe />,
      features: [
        'Vaccins obligatoires',
        'Vaccins de voyage',
        'Rappels vaccinaux',
        'Conseils personnalisés'
      ]
    },
    {
      id: 'certificats',
      name: 'Certificats Médicaux',
      description: 'Établissement de certificats médicaux pour diverses activités et démarches.',
      duration: 15,
      price: 20,
      icon: <FileText />,
      features: [
        'Certificats sportifs',
        'Certificats professionnels',
        'Certificats scolaires',
        'Autres démarches'
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Services Médicaux</h2>
          <p>Une gamme complète de soins adaptés à vos besoins</p>
        </div>

        {/* Services principales en format liste moderne */}
        <div className="services-main">
          <div className="services-intro">
            <h3>Consultations et Soins</h3>
            <p>Tous les services essentiels de médecine générale dans un cadre moderne et professionnel</p>
          </div>
          
          <div className="services-list">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-title">
                    <h4>{service.name}</h4>
                    <div className="service-meta">
                      <span className="duration">
                        <Clock size={14} />
                        {service.duration} min
                      </span>
                      <span className="price">
                        <Euro size={14} />
                        {service.price}{typeof service.price === 'number' ? '€' : ''}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Informations pratiques intégrées */}
        <div className="services-info">
          <div className="info-grid">
            <div className="info-item">
              <h4><Shield className="info-icon" /> Prise en charge</h4>
              <p>Consultations prises en charge par la Sécurité Sociale et votre mutuelle selon les tarifs conventionnés secteur 1.</p>
            </div>
            
            <div className="info-item">
              <h4><Clock className="info-icon" /> Horaires</h4>
              <p>Lundi au vendredi : 8h-18h<br />Samedi : 9h-12h<br />Tél. : 01 23 45 67 89</p>
            </div>
            
            <div className="info-item">
              <h4><AlertTriangle className="info-icon" /> Urgences</h4>
              <p>En cas d'urgence médicale, contactez le 15 (SAMU) ou rendez-vous aux urgences les plus proches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
