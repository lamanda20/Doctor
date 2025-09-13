import React, { useState, useEffect } from "react";
import {
  Calendar,
  Shield,
  Award,
  Users,
  Stethoscope,
  Phone,
  Mail,
  Clock,
  ChevronUp,
} from "lucide-react";

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Masquer l'indicateur quand on commence à scroller
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      // Afficher le bouton retour en haut après 300px de scroll
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="w-full min-h-screen bg-gradient-to-br from-[#3790B4]/10 to-[#6F78B9]/10 pt-20 pb-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text section */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#40338B] mb-3">
              Dr. Hasnaa El Malki
              <span className="block text-lg sm:text-xl font-medium text-[#6F78B9] mt-2">
                Votre Médecin de Confiance
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#40338B] mb-8 leading-relaxed">
              Médecin généraliste expérimentée, offrant des soins de qualité
              dans un environnement chaleureux et professionnel. Plus de 15 ans
              d'expérience au service de votre santé et bien-être.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Stethoscope className="text-[#3790B4]" size={28} strokeWidth={2.5} />
                <span className="text-[#40338B] text-sm text-center">
                  Consultations de qualité
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Shield className="text-[#3790B4]" size={28} strokeWidth={2.5} />
                <span className="text-[#40338B] text-sm text-center">
                  Soins professionnels
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Users className="text-[#3790B4]" size={24} strokeWidth={2} />
                <span className="text-[#40338B] text-sm text-center">
                  Approche humaine
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Award className="text-[#3790B4]" size={24} strokeWidth={2} />
                <span className="text-[#40338B] text-sm text-center">
                  15+ ans d'expérience
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                className="flex items-center gap-2 bg-[#3790B4] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6F78B9] transition font-medium"
                onClick={() => scrollToSection("gallery")}
              >
                <Calendar size={20} />
                Découvrir le Cabinet
              </button>
              <button
                className="bg-white text-[#3790B4] border border-[#3790B4] px-6 py-3 rounded-lg shadow-md hover:bg-[#3790B4]/10 transition font-medium"
                onClick={() => scrollToSection("a-propos")}
              >
                En savoir plus
              </button>
            </div>
          </div>

          {/* Doctor card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-xs flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#3790B4] bg-white flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo Cabinet Dr. Hasnaa El Malki"
                  className="w-24 h-24 object-contain bg-transparent"
                />
              </div>
              <h3 className="text-lg font-bold text-[#40338B] mb-1">
                Dr. Hasnaa El Malki
              </h3>
              <p className="text-sm text-[#6F78B9] mb-4">
                Diplômée de la Faculté de Médecine de Paris
              </p>

              <div className="flex gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-[#40338B] font-bold text-lg">15+</span>
                  <span className="text-xs text-[#6F78B9]">
                    Années d'expérience
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#40338B] font-bold text-lg">
                    5000+
                  </span>
                  <span className="text-xs text-[#6F78B9]">
                    Patients satisfaits
                  </span>
                </div>
              </div>

              <div className="w-full border-t border-[#3790B4]/30 my-2"></div>

              <div className="w-full flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-[#40338B]">
                  <Phone size={16} />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2 text-[#40338B]">
                  <Mail size={16} />
                  <span>contact@dr-hasmalki.fr</span>
                </div>
                <div className="flex items-center gap-2 text-[#40338B]">
                  <Clock size={16} />
                  <span>Lun-Ven 8h-18h • Sam 9h-12h</span>
                </div>
                <div className="mt-2 p-2 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 text-red-600 text-center">
                    <span className="font-medium text-xs">🚨 Urgences : 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll en bas pour séparer */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500">
            <div className="flex flex-col items-center text-[#6F78B9] animate-bounce">
              <span className="text-sm mb-2">Découvrir le profil</span>
              <div className="w-6 h-10 border-2 border-[#6F78B9] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#6F78B9] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Bouton retour en haut */}
        {showBackToTop && (
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={scrollToTop}
              className="bg-[#3790B4] text-white p-3 rounded-full shadow-lg hover:bg-[#6F78B9] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#3790B4] focus:ring-offset-2"
              aria-label="Retour en haut"
            >
              <ChevronUp size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
