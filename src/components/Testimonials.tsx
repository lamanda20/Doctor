import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      patientName: 'Sophie Martin',
      rating: 5,
      comment: 'Dr. Dubois est une médecin exceptionnelle. Elle prend le temps d\'écouter et explique clairement les traitements. Je recommande vivement !',
      date: '2024-08-15',
      verified: true
    },
    {
      id: '2',
      patientName: 'Jean-Pierre L.',
      rating: 5,
      comment: 'Très professionnelle et à l\'écoute. Le cabinet est moderne et bien équipé. Un suivi médical de qualité.',
      date: '2024-07-28',
      verified: true
    },
    {
      id: '3',
      patientName: 'Marie C.',
      rating: 5,
      comment: 'Une docteure bienveillante qui suit toute ma famille depuis 3 ans. Toujours disponible et de très bon conseil.',
      date: '2024-08-02',
      verified: true
    },
    {
      id: '4',
      patientName: 'Thomas D.',
      rating: 5,
      comment: 'Cabinet facilement accessible, personnel accueillant. Dr. Dubois a su diagnostiquer rapidement mon problème de santé.',
      date: '2024-07-10',
      verified: true
    },
    {
      id: '5',
      patientName: 'Isabelle R.',
      rating: 5,
      comment: 'Je suis suivie pour une maladie chronique. Dr. Dubois fait un suivi rigoureux et rassurant. Une vraie professionnelle !',
      date: '2024-06-25',
      verified: true
    },
    {
      id: '6',
      patientName: 'Michel B.',
      rating: 5,
      comment: 'Excellente prise en charge de mes enfants. Dr. Dubois sait être rassurante avec eux tout en étant très compétente.',
      date: '2024-08-08',
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`star ${index < rating ? 'filled' : ''}`}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section id="témoignages" className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2>Témoignages Patients</h2>
          <p>Ce que disent nos patients de leur expérience</p>
        </div>

        <div className="testimonials-stats">
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Patients Satisfaits</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Note Moyenne</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Avis Vérifiés</div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <Quote className="quote-icon" />
                <div className="patient-info">
                  <h4>{testimonial.patientName}</h4>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="verified-badge">
                    <CheckCircle size={16} />
                    <span>Vérifié</span>
                  </div>
                )}
              </div>
              
              <p className="testimonial-comment">
                "{testimonial.comment}"
              </p>
              
              <div className="testimonial-date">
                {new Date(testimonial.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <div className="cta-card">
            <h3>Votre avis compte !</h3>
            <p>
              Vous êtes patient(e) de Dr. Dubois ? Partagez votre expérience 
              pour aider d'autres personnes à prendre leur décision.
            </p>
            <button className="btn btn-primary">
              Laisser un avis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
