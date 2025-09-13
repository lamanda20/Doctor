import React from "react";
import { GraduationCap, MapPin, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="a-propos" className="w-full bg-[#3790B4]/5 py-14 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-2">
            À Propos de Dr. Hasnaa El Malki
          </h2>
          <p className="text-[#6F78B9] text-lg">
            Votre médecin de confiance, à votre écoute depuis plus de 15 ans
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Text & Qualifications */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#40338B] mb-4">
              Votre Santé, Ma Priorité
            </h3>
            <p className="text-[#40338B] mb-4 leading-relaxed">
              Diplômée de la Faculté de Médecine de Paris en 2008, j'exerce la
              médecine générale avec passion et dévouement depuis plus de 15
              ans. Mon cabinet moderne et chaleureux vous accueille pour offrir
              des soins personnalisés et de qualité.
            </p>
            <p className="text-[#40338B] mb-6 leading-relaxed">
              Mon approche repose sur l'écoute attentive, le dialogue et une
              prise en charge globale de votre santé. Chaque consultation est
              adaptée à vos besoins pour garantir votre bien-être.
            </p>

            {/* Qualifications */}
            <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
              <h4 className="text-lg font-bold text-[#40338B] mb-4 flex items-center gap-2">
                <GraduationCap className="text-[#3790B4]" size={20} /> Formation
                & Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-[#6F78B9] mb-2">
                    Formation
                  </h5>
                  <ul className="list-disc list-inside text-[#40338B] text-sm space-y-1">
                    <li>
                      Doctorat en Médecine - Université Paris Descartes (2008)
                    </li>
                    <li>Diplôme d'État de Docteur en Médecine</li>
                    <li>Formation continue en médecine préventive</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#6F78B9] mb-2">
                    Certifications
                  </h5>
                  <ul className="list-disc list-inside text-[#40338B] text-sm space-y-1">
                    <li>Ordre des Médecins - Inscrite depuis 2008</li>
                    <li>Certification en médecine d'urgence</li>
                    <li>Formation en gériatrie et soins palliatifs</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#6F78B9] mb-2">Langues</h5>
                  <ul className="list-disc list-inside text-[#40338B] text-sm space-y-1">
                    <li>Français (langue maternelle)</li>
                    <li>Anglais (courant)</li>
                    <li>Espagnol (intermédiaire)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Statistics */}
            <div className="flex justify-center gap-8 mb-3">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#40338B]">15+</span>
                <span className="text-[#6F78B9] text-sm">Années</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#40338B]">5000+</span>
                <span className="text-[#6F78B9] text-sm">Patients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#40338B]">98%</span>
                <span className="text-[#6F78B9] text-sm">Satisfaction</span>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-lg font-bold text-[#40338B] mb-2">
                Ma Philosophie
              </h4>
              <blockquote className="italic text-[#6F78B9] mb-2">
                "Chaque patient est unique et mérite une attention particulière.
                Mon objectif est de vous accompagner dans votre parcours de
                santé avec empathie, professionnalisme et expertise."
              </blockquote>
              <cite className="text-[#3790B4]">- Dr. Hasnaa El Malki</cite>
            </div>

            {/* Team & Location */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6">
              {/* Team */}
              <div>
                <h4 className="text-lg font-bold text-[#40338B] mb-3 flex items-center gap-2">
                  <Users className="text-[#3790B4]" size={20} /> Mon Équipe
                </h4>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                      alt="Sophie Martin"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#3790B4]/30"
                    />
                    <div>
                      <span className="font-semibold text-[#40338B]">
                        Sophie Martin
                      </span>
                      <br />
                      <span className="text-xs text-[#6F78B9]">
                        Secrétaire médicale (10 ans)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                      alt="Claire Dubois"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#3790B4]/30"
                    />
                    <div>
                      <span className="font-semibold text-[#40338B]">
                        Claire Dubois
                      </span>
                      <br />
                      <span className="text-xs text-[#6F78B9]">
                        Assistante médicale (7 ans)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-lg font-bold text-[#40338B] mb-2 flex items-center gap-2">
                  <MapPin className="text-[#3790B4]" size={20} /> Cabinet
                  Médical
                </h4>
                <p className="text-[#40338B] text-sm">
                  123 Avenue de la Santé
                  <br />
                  75014 Paris, France
                  <br />
                  <span className="text-xs text-[#6F78B9]">
                    Métro ligne 4, station Alésia
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
