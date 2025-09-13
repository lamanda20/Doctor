import React, { useState } from 'react';
import { X, Settings, Mail, Clock, MapPin } from 'lucide-react';


interface AdminPanelProps {
  onClose?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-panel-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <div className="admin-title">
            <Settings size={24} />
            <h2>Panneau d'Administration</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="admin-tabs">
          <button 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Tableau de bord
          </button>
          <button 
            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Informations Contact
          </button>
          <button 
            className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Paramètres
          </button>
        </div>

        <div className="admin-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-tab">
              <h3>Tableau de Bord</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <Mail size={24} />
                  </div>
                  <div className="stat-info">
                    <h4>Messages</h4>
                    <p>Consultez les messages du formulaire de contact</p>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <Clock size={24} />
                  </div>
                  <div className="stat-info">
                    <h4>Horaires</h4>
                    <p>Gérez vos horaires de consultation</p>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="stat-info">
                    <h4>Localisation</h4>
                    <p>Modifiez les informations du cabinet</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="contact-tab">
              <h3>Informations de Contact</h3>
              <div className="contact-form">
                <div className="form-group">
                  <label>Téléphone</label>
                  <input type="tel" defaultValue="+33 1 23 45 67 89" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue="contact@dr-dubois.fr" />
                </div>
                <div className="form-group">
                  <label>Adresse</label>
                  <textarea defaultValue="123 Avenue de la Santé, 75014 Paris" />
                </div>
                <div className="form-group">
                  <label>Horaires</label>
                  <textarea defaultValue="Lun-Ven: 8h-18h | Sam: 9h-12h" />
                </div>
                <button className="save-btn">Sauvegarder</button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-tab">
              <h3>Paramètres</h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Notifications email activées
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Mode maintenance
                  </label>
                </div>
                <div className="form-group">
                  <label>Thème du site</label>
                  <select>
                    <option>Clair</option>
                    <option>Sombre</option>
                  </select>
                </div>
                <button className="save-btn">Sauvegarder</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
