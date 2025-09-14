import React from "react";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Baby,
  FileText,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: "consultation-generale",
      name: "Consultation Générale",
      description:
        "Examen médical complet, diagnostic et traitement des pathologies courantes.",
      icon: <Stethoscope />,
      features: [
        "Examen clinique",
        "Diagnostic personnalisé",
        "Prescription médicale",
        "Conseils préventifs",
      ],
    },
    {
      id: "echographie",
      name: "Échographie Générale",
      description:
        "Exploration médicale par imagerie pour un diagnostic précis.",
      icon: <Activity />,
      features: [
        "Échographie abdominale",
        "Échographie pelvienne",
        "Échographie thyroïdienne",
        "Autres examens selon besoin",
      ],
    },
    {
      id: "diabetologie",
      name: "Diabétologie",
      description:
        "Prise en charge et suivi spécialisé des patients diabétiques.",
      icon: <HeartPulse />,
      features: [
        "Suivi glycémique",
        "Éducation thérapeutique",
        "Ajustement du traitement",
        "Prévention des complications",
      ],
    },
    {
      id: "ecg",
      name: "ECG",
      description:
        "Examen électrocardiographique pour analyser l’activité cardiaque.",
      icon: <Activity />,
      features: [
        "Détection des troubles du rythme",
        "Surveillance cardiaque",
        "Évaluation préventive",
        "Rapport détaillé",
      ],
    },
    {
      id: "grossesse",
      name: "Suivi de Grossesses",
      description: "Accompagnement médical complet pour une grossesse sereine.",
      icon: <Baby />,
      features: [
        "Consultations prénatales",
        "Suivi échographique",
        "Surveillance de la santé maternelle",
        "Conseils personnalisés",
      ],
    },
    {
      id: "certificats",
      name: "Certificats Médicaux",
      description:
        "Établissement de certificats médicaux pour diverses démarches.",
      icon: <FileText />,
      features: [
        "Certificats scolaires",
        "Certificats sportifs",
        "Certificats professionnels",
        "Autres demandes",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#3790B4]/5 pt-3 pb-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#40338B]">
            Services Médicaux
          </h2>
          <p className="text-[#6F78B9] text-base">
            Des soins adaptés pour répondre à vos besoins de santé
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3.5 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#3790B4]/20 text-[#3790B4] rounded-full p-3">
                  {React.cloneElement(service.icon, { size: 20 })}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#40338B]">
                    {service.name}
                  </h3>
                </div>
              </div>
              <p className="text-[#40338B] text-xs leading-relaxed">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-[#40338B] text-xs space-y-1">
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
