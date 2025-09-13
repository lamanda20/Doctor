import React from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Shield, Award } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3790B4]/5 text-[#40338B] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 space-y-4">
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#40338B]">
              Dr. Hasnaa El Malki
            </h3>
            <p className="text-sm text-[#6F78B9]">
              Médecin Généraliste. Votre santé est notre priorité. Plus de 5 ans d'expérience au service de votre bien-être.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#3790B4]">
                <Shield size={20} /> <span>Conventionné Secteur 1</span>
              </div>
              <div className="flex items-center gap-2 text-[#3790B4]">
                <Award size={20} /> <span>Ordre des Médecins</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40338B]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["accueil","a-propos","services","témoignages","contact","location"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="hover:text-[#3790B4] transition text-sm"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40338B]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#6F78B9]">
              <li>Consultation Générale</li>
              <li>Suivi Médical</li>
              <li>Pédiatrie</li>
              <li>Médecine de Famille</li>
              <li>Vaccinations</li>
              <li>Certificats Médicaux</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#40338B]">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[#6F78B9]">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#3790B4]" />
                <span>
                  Immeuble Damou, 1er étage<br/>
                  Route de Biougra, Av. Mohamed VI, Ait Melloul
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#3790B4]" />
                <span>+212 (0) 5 28 24 11 19</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-[#3790B4]" />
                <span>WhatsApp: +212 (0) 6 41 23 83 44</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#3790B4]" />
                <span>mhe25@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-[#3790B4]" />
                <span>
                  Lun-Ven: 8h00 - 19h00<br/>
                  Sam: 9h00 - 13h00<br/>
                  Dim: Fermé
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#6F78B9]/50" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-1 text-sm text-[#6F78B9]">
          <div className="space-y-1 text-center md:text-left">
            <p>&copy; 2025 Dr. Hasnaa El Malki. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
