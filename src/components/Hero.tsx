import React, { useState, useEffect } from "react";
import {
  Calendar,
  Shield,
  Users,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-[#3790B4]/10 via-white to-[#6F78B9]/15 px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#3790B4]/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 rounded-full bg-[#6F78B9]/15 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-[#40338B]/10 blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#40338B] mb-3 leading-tight">
            Dr. Hasnaa El Malki
            <span className="block text-xl sm:text-2xl font-medium text-[#6F78B9] mt-3">
              Votre Médecin de Confiance
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#40338B]/90 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Diplômée de la Faculté de Médecine et de Pharmacie de Casablanca,docteur Hasnaa EL Malki est
            un médecin généraliste expérimentée, spécialisée en échographie générale, diabétologie, gynécologie médicale,
            infertilité, suivi de grossesse ainsi que les autres pathologies courantes en médecine générale (Femmes, hommes, enfants)
            . Avec une formation rigoureuse et une pratique
            clinique enrichie par des années d'exercice, elle s'engage à offrir des soins de haute
            qualité, alliant expertise médicale et écoute attentive.

          </p>

          {/* Features Cards */}
          <div className="grid grid-cols-2 sm:flex gap-3 mb-6 max-w-xl">
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="bg-[#3790B4]/10 p-2 rounded-full mb-2">
                <Stethoscope
                  className="text-[#3790B4]"
                  size={22}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[#40338B] text-xs text-center font-medium">
                Consultations de qualité
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="bg-[#3790B4]/10 p-2 rounded-full mb-2">
                <Shield
                  className="text-[#3790B4]"
                  size={22}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[#40338B] text-xs text-center font-medium">
                Soins professionnels
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="bg-[#3790B4]/10 p-2 rounded-full mb-2">
                <Users className="text-[#3790B4]" size={20} strokeWidth={2} />
              </div>
              <span className="text-[#40338B] text-xs text-center font-medium">
                Approche humaine
              </span>
            </div>
            {/* <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="bg-[#3790B4]/10 p-2 rounded-full mb-2">
                <Award className="text-[#3790B4]" size={20} strokeWidth={2} />
              </div>
              <span className="text-[#40338B] text-xs text-center font-medium">
                Diplômée spécialisée
              </span>
            </div> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3790B4] to-[#6F78B9] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium hover:from-[#3790B4]/90 hover:to-[#6F78B9]/90"
              onClick={() => scrollToSection("gallery")}
            >
              <Calendar size={20} /> Découvrir le Cabinet
            </button>
            <button
              className="bg-white text-[#3790B4] border border-[#3790B4] px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-medium hover:bg-[#3790B4]/5"
              onClick={() => scrollToSection("a-propos")}
            >
              En savoir plus
            </button>
          </div>
        </div>

        {/* Right Content - Doctor Card */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-3 w-full max-w-xs md:max-w-sm flex flex-col items-center relative overflow-hidden">
            {/* Decorative element on card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3790B4]/5 to-[#6F78B9]/10 rounded-bl-full"></div>

            <div className="relative mb-1">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-2 border-4 border-white shadow-lg flex items-center justify-center bg-gradient-to-br from-[#3790B4] to-[#6F78B9]">
                <img
                  src="/logo.png"
                  alt="Dr. Hasnaa El Malki"
                  className="w-24 h-24 object-contain rounded-full"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#40338B] mb-1 text-center">
              Dr. Hasnaa El Malki
            </h3>
            <p className="text-sm text-[#6F78B9] mb-2 text-center">
              Médecin Généraliste à  Ait Melloul
            </p>

            {/* } <div className="flex gap-6  justify-center">
              <div className="flex flex-col items-center">
                <span className="text-[#40338B] font-bold text-xl">15+</span>
                <span className="text-xs text-[#6F78B9]">Années</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#40338B] font-bold text-xl">
                  20,000+
                </span>
                <span className="text-xs text-[#6F78B9]">Patients</span>
              </div>
            </div>*/}

            <div className="w-full border-t border-[#3790B4]/20 my-3"></div>

            <div className="w-full flex flex-col text-sm">
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#3790B4]/5 transition-colors">
                <div className="bg-[#3790B4]/10 p-1.5 rounded-full">
                  <Phone size={14} className="text-[#3790B4]" />
                </div>
                <span className="text-[#40338B]">+212 (0) 5 28 24 11 19</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#3790B4]/5 transition-colors">
                <div className="bg-[#3790B4]/10 p-1.5 rounded-full">
                  <MessageCircle size={14} className="text-[#3790B4]" />
                </div>
                <span className="text-[#40338B]">
                  WhatsApp: +212 (0) 6 41 23 83 44
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#3790B4]/5 transition-colors">
                <div className="bg-[#3790B4]/10 p-1.5 rounded-full">
                  <Mail size={14} className="text-[#3790B4]" />
                </div>
                <span className="text-[#40338B]">cmhe25@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-[#3790B4]/5 transition-colors">
                <div className="bg-[#3790B4]/10 p-1.5 rounded-full mt-0.5">
                  <MapPin size={14} className="text-[#3790B4]" />
                </div>
                <span className="text-[#40338B]">
                  Immeuble Damou, 1er étage, Av. Mohamed VI, Ait Melloul
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#6F78B9] text-center z-10">
          <span className="text-sm mb-2 block font-medium">
            Découvrir le profil
          </span>
          <div className="w-6 h-10 border-2 border-[#6F78B9] rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-[#6F78B9] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Back to top button moved to global FloatingButtons component */}
    </section>
  );
};

export default Hero;
