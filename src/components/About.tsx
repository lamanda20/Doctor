import React from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="a-propos"
      className="w-full bg-[#3790B4]/5 pt-0 pb-10 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-1">
            À Propos du Dr. Hasnaa El Malki
          </h2>
          {/* <p className="text-[#6F78B9] text-base">
            Médecin généraliste diplômée, spécialisée en échographie générale et
            diabétologie.
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-14">
          {/* Left: Description + Diplômes & Compétences */}
          <div className="flex-1">
            <p className="text-[#40338B] mb-3 leading-relaxed text-sm sm:text-base">
              Dr Hasnaa El Malki est titulaire d'un diplôme en médecine générale de
              la Faculté de Médecine et de Pharmacie de Casablanca.
              Elle a par la suite approfondi ses compétences par des formations spécialisées en
              échographie générale à la Faculté de Médecine de Marrakech et en diabétologie à
              l'Université Paris 13.
              Son exercice clinique englobe le suivi prénatal des grossesses et la prise en charge des
              pathologies courantes.
            </p>

            <p className="text-[#40338B] mb-4 leading-relaxed text-sm sm:text-base">
              Son activité clinique comprend le suivi de grossesses et la prise en charge
              des pathologies courantes avec un accent sur la prévention et le suivi personnalisé
              des patients. Elle associe rigueur clinique et accompagnement humain.
            </p>

            <div className="bg-white rounded-2xl shadow-md p-4 mb-5">
              <h4 className="text-base font-bold text-[#40338B] mb-3 flex items-center gap-2">
                <GraduationCap className="text-[#3790B4]" size={20} /> Diplômes
                & Compétences
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <h5 className="font-semibold text-[#6F78B9] mb-1 text-sm">
                    Diplômes
                  </h5>
                  <ul className="list-disc list-inside text-[#40338B] text-xs space-y-3">
                    <li>
                      Doctorat en Médecine - Faculté de Médecine et de Pharmacie
                      de Casablanca
                    </li>
                    <li>
                      Diplôme en Échographie Générale - Faculté de Médecine de
                      Marrakech
                    </li>
                    <li className="whitespace-nowrap">Diplôme en Diabétologie - Université Paris 13</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#6F78B9] mb-1 text-sm">
                    Compétences cliniques
                  </h5>
                  <ul className="list-disc list-inside text-[#40338B] text-xs space-y-3">
                    { /* <li>Interprétation et réalisation d'ECG</li> */}
                    <li>Suivi de grossesses</li>
                    <li>Prise en charge en médecine générale et prévention</li>
                    <li>Échographie diagnostique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats, philosophie, cabinet & contact */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Statistics */}
            {/* <div className="flex justify-center gap-6 ">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-[#40338B]">15+</span>
                <span className="text-[#6F78B9] text-xs">Années</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-[#40338B]">20,000+</span>
                <span className="text-[#6F78B9] text-xs">Patients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-[#40338B]">100%</span>
                <span className="text-[#6F78B9] text-xs">Satisfaction</span>
              </div>
            </div> */}

            {/* Philosophy */}
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h4 className="text-base font-bold text-[#40338B] mb-1">
                Sa philosophie
              </h4>
              <blockquote className="italic text-[#6F78B9] mb-1 text-sm">
                « Chaque patient mérite une prise en charge personnalisée,
                fondée sur l'écoute, la prévention et un suivi médical
                rigoureux. »
              </blockquote>
              <cite className="text-[#3790B4] block mt-1 text-xs">
                Dr. Hasnaa El Malki
              </cite>
            </div>

            {/* Cabinet & Contact */}
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h4 className="text-base font-bold text-[#40338B] mb-3 flex items-center gap-2">
                Cabinet
              </h4>

              <div className="space-y-2 text-[#40338B] text-sm leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="text-[#3790B4] mt-0.5" size={18} />
                  <span>
                    Immeuble Damou, 1er étage
                    <br />
                    Route de Biougra, Av. Mohamed VI
                    <br />
                    Ait Melloul
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="text-[#3790B4]" size={16} />
                  <span>+212 (0) 5 28 24 11 19</span>
                </div>

                <div className="flex items-center gap-2">
                  <MessageCircle className="text-[#3790B4]" size={16} />
                  <span>WhatsApp : +212 (0) 6 41 23 83 44</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="text-[#3790B4]" size={16} />
                  <span>cmhe25@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
