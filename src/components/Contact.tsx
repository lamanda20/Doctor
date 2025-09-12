import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';
import { useForm } from 'react-hook-form';
import './Contact.css';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Message de contact:', data);
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    reset();
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>Contact & Localisation</h2>
          <p>Trouvez toutes les informations pour nous contacter</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <h3>Adresse</h3>
                <p>
                  123 Avenue de la Santé<br />
                  75014 Paris<br />
                  France
                </p>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
                <p className="info-note">Du lundi au vendredi</p>
              </div>
            </div>

            <div className="info-card">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>contact@dr-dubois.fr</p>
                <p className="info-note">Réponse sous 24h</p>
              </div>
            </div>

            <div className="info-card">
              <Clock className="info-icon" />
              <div>
                <h3>Horaires</h3>
                <div className="hours">
                  <div className="hour-row">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="hour-row">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                  <div className="hour-row">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="access-info">
              <h3>Comment nous rejoindre</h3>
              
              <div className="access-method">
                <Train className="access-icon" />
                <div>
                  <h4>En métro</h4>
                  <p>Ligne 4 - Station Alésia<br />Sortie Avenue du Général Leclerc</p>
                </div>
              </div>

              <div className="access-method">
                <Car className="access-icon" />
                <div>
                  <h4>En voiture</h4>
                  <p>Parking public à 100m<br />Places de stationnement dans la rue</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h3>Nous écrire</h3>
            <p>Vous avez une question ? N'hésitez pas à nous contacter.</p>

            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={errors.name ? 'error' : ''}
                placeholder="Votre nom complet"
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={errors.email ? 'error' : ''}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  placeholder="01 23 45 67 89"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <select
                id="subject"
                {...register('subject')}
                className={errors.subject ? 'error' : ''}
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="information">Demande d'information</option>
                <option value="consultation">Consultation médicale</option>
                <option value="urgence">Urgence médicale</option>
                <option value="prescription">Renouvellement d'ordonnance</option>
                <option value="autre">Autre</option>
              </select>
              {errors.subject && (
                <span className="error-message">{errors.subject.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                {...register('message')}
                className={errors.message ? 'error' : ''}
                placeholder="Votre message..."
                rows={6}
              />
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>

        <div className="map-section">
          <h3>Plan d'accès</h3>
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Carte interactive disponible</p>
            <p className="map-note">
              123 Avenue de la Santé, 75014 Paris<br />
              Métro ligne 4 - Station Alésia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
