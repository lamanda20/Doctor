import React from "react";
import {
  Stethoscope,
  Heart,
  Baby,
  Users,
  Syringe,
  FileText,
  Clock,
  Euro,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: "consultation-generale",
      name: "Consultation Générale",
      description:
        "Examen médical complet, diagnostic et traitement des pathologies courantes.",
      duration: 30,
      price: 25,
      icon: <Stethoscope />,
      features: [
        "Examen clinique approfondi",
        "Établissement du diagnostic",
        "Prescription médicale",
        "Conseils préventifs",
      ],
    },
    {
      id: "suivi-medical",
      name: "Suivi Médical",
      description:
        "Suivi régulier des pathologies chroniques et surveillance de l'état de santé.",
      duration: 20,
      price: 25,
      icon: <Heart />,
      features: [
        "Suivi des maladies chroniques",
        "Surveillance des traitements",
        "Ajustement des posologies",
        "Prévention des complications",
      ],
    },
    {
      id: "pediatrie",
      name: "Pédiatrie",
      description:
        "Soins médicaux spécialisés pour les enfants et adolescents.",
      duration: 30,
      price: 25,
      icon: <Baby />,
      features: [
        "Examens pédiatriques",
        "Suivi de croissance",
        "Vaccinations",
        "Conseils aux parents",
      ],
    },
    {
      id: "medecine-famille",
      name: "Médecine de Famille",
      description:
        "Prise en charge globale de toute la famille avec une approche personnalisée.",
      duration: 45,
      price: 30,
      icon: <Users />,
      features: [
        "Suivi familial complet",
        "Coordination des soins",
        "Prévention familiale",
        "Éducation santé",
      ],
    },
    {
      id: "vaccinations",
      name: "Vaccinations",
      description:
        "Administration des vaccins obligatoires et recommandés selon le calendrier vaccinal.",
      duration: 15,
      price: "Variable",
      icon: <Syringe />,
      features: [
        "Vaccins obligatoires",
        "Vaccins de voyage",
        "Rappels vaccinaux",
        "Conseils personnalisés",
      ],
    },
    {
      id: "certificats",
      name: "Certificats Médicaux",
      description:
        "Établissement de certificats médicaux pour diverses activités et démarches.",
      duration: 15,
      price: 20,
      icon: <FileText />,
      features: [
        "Certificats sportifs",
        "Certificats professionnels",
        "Certificats scolaires",
        "Autres démarches",
      ],
    },
  ];

  return (
    <section id="services" className="w-full bg-teal-50 py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Services Médicaux
          </h2>
          <p className="text-teal-700 text-lg">
            Une gamme complète de soins adaptés à vos besoins
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 text-teal-700 rounded-full p-3">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-teal-900">
                    {service.name}
                  </h3>
                  <div className="flex gap-4 text-sm text-teal-700 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {service.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro size={14} /> {service.price}
                      {typeof service.price === "number" ? "€" : ""}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-teal-800 text-sm">{service.description}</p>
              <ul className="list-disc list-inside text-teal-900 text-sm space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
