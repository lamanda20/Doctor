import React from "react";
import { Heart, Brain, Baby, Users, Activity, Shield } from "lucide-react";

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      id: "cardiologie",
      name: "Cardiologie Préventive",
      description:
        "Prévention et dépistage des maladies cardiovasculaires, suivi de l'hypertension.",
      icon: <Heart />,
      specializations: [
        "Dépistage cardiovasculaire",
        "Suivi de l'hypertension",
        "Prévention des AVC",
        "Conseils nutritionnels cardio",
      ],
    },
    {
      id: "geriatrie",
      name: "Gériatrie",
      description:
        "Soins spécialisés pour les personnes âgées avec une approche globale.",
      icon: <Users />,
      specializations: [
        "Suivi des pathologies chroniques",
        "Prévention des chutes",
        "Coordination des soins",
        "Maintien à domicile",
      ],
    },
    {
      id: "pediatrie",
      name: "Pédiatrie",
      description:
        "Suivi médical des enfants et adolescents de la naissance à 18 ans.",
      icon: <Baby />,
      specializations: [
        "Suivi de croissance",
        "Vaccinations pédiatriques",
        "Dépistage développemental",
        "Conseils aux parents",
      ],
    },
    {
      id: "diabetologie",
      name: "Diabétologie",
      description: "Prise en charge du diabète et des troubles métaboliques.",
      icon: <Activity />,
      specializations: [
        "Diabète type 1 et 2",
        "Éducation thérapeutique",
        "Surveillance glycémique",
        "Prévention des complications",
      ],
    },
    {
      id: "psychiatrie",
      name: "Santé Mentale",
      description:
        "Accompagnement pour les troubles anxieux, dépression et burn-out.",
      icon: <Brain />,
      specializations: [
        "Dépistage dépression",
        "Gestion du stress",
        "Troubles anxieux",
        "Accompagnement psychologique",
      ],
    },
    {
      id: "urgences",
      name: "Médecine d'Urgence",
      description:
        "Formation en médecine d'urgence pour une prise en charge optimale.",
      icon: <Shield />,
      specializations: [
        "Premiers secours",
        "Urgences vitales",
        "Traumatismes mineurs",
        "Coordination SAMU",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="w-full bg-[#3790B4]/5 py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#40338B]">
            Domaines d'Expertise
          </h2>
          <p className="text-[#6F78B9] text-lg">
            Des compétences spécialisées pour répondre à tous vos besoins de
            santé
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition"
            >
              <div className="bg-[#3790B4]/20 text-[#3790B4] rounded-full p-3 w-fit mb-2">
                {React.cloneElement(area.icon, { size: 20 })}
              </div>
              <h3 className="text-lg font-bold text-[#40338B]">{area.name}</h3>
              <p className="text-[#40338B] text-sm mb-2">{area.description}</p>
              <ul className="list-disc list-inside text-[#40338B] text-sm space-y-1">
                {area.specializations.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
