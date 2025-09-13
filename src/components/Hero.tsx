import React from "react";
import {
  Calendar,
  Shield,
  Award,
  Users,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="w-full bg-gradient-to-br from-[#3790B4]/10 to-[#6F78B9]/10 pt-2 pb-16 scroll-mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Médecin généraliste diplômée au Maroc et à l’international,
              spécialisée en échographie et diabétologie. Offrant des soins de
              qualité et un suivi personnalisé pour toute la famille.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Stethoscope className="text-[#3790B4]" size={24} />
                <span className="text-[#40338B] text-sm text-center">
                  Consultations de qualité
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Shield className="text-[#3790B4]" size={24} />
                <span className="text-[#40338B] text-sm text-center">
                  Soins professionnels
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Users className="text-[#3790B4]" size={24} />
                <span className="text-[#40338B] text-sm text-center">
                  Approche humaine
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Award className="text-[#3790B4]" size={24} />
                <span className="text-[#40338B] text-sm text-center">
                  Diplômée en Échographie & Diabétologie
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
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#3790B4]">
                <img
                  src="/logo.png" alt="Dr. Hasnaa El Malki"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#40338B] mb-1">
                Dr. Hasnaa El Malki
              </h3>
              <p className="text-sm text-[#6F78B9] mb-4">
                Médecin Généraliste • Agadir, Ait Melloul
              </p>

              <div className="flex gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-[#40338B] font-bold text-lg">5+</span>
                  <span className="text-xs text-[#6F78B9]">
                    Années d'expérience
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#40338B] font-bold text-lg">
                    1000+
                  </span>
                  <span className="text-xs text-[#6F78B9]">
                    Patients suivis
                  </span>
                </div>
              </div>

              <div className="w-full border-t border-[#3790B4]/30 my-2"></div>

              <div className="w-full flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-[#40338B]">
                  <Phone size={16} />
                  <span>+212 (0) 5 28 24 11 19</span>
                </div>
                <div className="flex items-center gap-2 text-[#40338B]">
                  <MessageCircle size={16} />
                  <span>WhatsApp : +212 (0) 6 41 23 83 44</span>
                </div>
                <div className="flex items-center gap-2 text-[#40338B]">
                  <Mail size={16} />
                  <span>elmalki.hasnaa@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#40338B]">
                  <MapPin size={30} />
                  <span>
                    Immeuble Damou, 1er étage, Route de Biougra, Av. Mohamed VI,
                    Ait Melloul
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
