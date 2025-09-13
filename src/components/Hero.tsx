import React from "react";
import {
  Calendar,
  Shield,
  Award,
  Users,
  Stethoscope,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="w-full bg-gradient-to-br from-teal-50 to-teal-100 pt-2 pb-16 scroll-mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text section */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 mb-3">
              Dr. Hasnaa El Malki
              <span className="block text-lg sm:text-xl font-medium text-teal-700 mt-2">
                Votre Médecin de Confiance
              </span>
            </h1>
            <p className="text-base sm:text-lg text-teal-800 mb-8 leading-relaxed">
              Médecin généraliste expérimentée, offrant des soins de qualité
              dans un environnement chaleureux et professionnel. Plus de 15 ans
              d'expérience au service de votre santé et bien-être.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Stethoscope className="text-teal-600" size={20} />
                <span className="text-teal-900 text-sm text-center">
                  Consultations de qualité
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Shield className="text-teal-600" size={20} />
                <span className="text-teal-900 text-sm text-center">
                  Soins professionnels
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Users className="text-teal-600" size={20} />
                <span className="text-teal-900 text-sm text-center">
                  Approche humaine
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4">
                <Award className="text-teal-600" size={20} />
                <span className="text-teal-900 text-sm text-center">
                  15+ ans d'expérience
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                className="flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-800 transition font-medium"
                onClick={() => scrollToSection("gallery")}
              >
                <Calendar size={20} />
                Découvrir le Cabinet
              </button>
              <button
                className="bg-white text-teal-700 border border-teal-700 px-6 py-3 rounded-lg shadow-md hover:bg-teal-50 transition font-medium"
                onClick={() => scrollToSection("a-propos")}
              >
                En savoir plus
              </button>
            </div>
          </div>

          {/* Doctor card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-xs flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-teal-200">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Dr. Hasnaa El Malki"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-1">
                Dr. Hasnaa El Malki
              </h3>
              <p className="text-sm text-teal-700 mb-4">
                Diplômée de la Faculté de Médecine de Paris
              </p>

              <div className="flex gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-teal-900 font-bold text-lg">15+</span>
                  <span className="text-xs text-teal-700">
                    Années d'expérience
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-teal-900 font-bold text-lg">5000+</span>
                  <span className="text-xs text-teal-700">
                    Patients satisfaits
                  </span>
                </div>
              </div>

              <div className="w-full border-t border-teal-100 my-2"></div>

              <div className="w-full flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-teal-900">
                  <Phone size={16} />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2 text-teal-900">
                  <Mail size={16} />
                  <span>contact@dr-hasmalki.fr</span>
                </div>
                <div className="flex items-center gap-2 text-teal-900">
                  <Clock size={16} />
                  <span>Lun-Ven 8h-18h • Sam 9h-12h</span>
                </div>
                <div className="flex items-center gap-2 text-coral-600 font-semibold">
                  <AlertCircle size={16} />
                  <span>Urgences : 15</span>
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
