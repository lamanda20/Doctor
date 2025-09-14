// Data only file: icons are referenced by string keys and mapped in UI components.

export interface ServiceItem {
  id: string; // slug
  name: string;
  short: string;
  icon: string; // key to icon map
  features: string[];
  long: string;
  paragraphs?: string[]; // optional multi-paragraph detailed content
  seo?: {
    title?: string;
    description?: string;
  };
}

export const services: ServiceItem[] = [
  {
    id: "consultation-generale",
    name: "Consultation Générale",
    short: "Examen clinique complet, diagnostic et prévention.",
    icon: "stethoscope",
    features: [
      "Examen clinique",
      "Diagnostic personnalisé",
      "Prescription adaptée",
      "Conseils préventifs",
    ],
    long: "La consultation générale constitue le premier point d'entrée médical.",
    paragraphs: [
      "La consultation générale constitue le premier point d'entrée médical. Elle permet une évaluation globale et personnalisée en intégrant l'interrogatoire, l'examen clinique et si besoin l'orientation vers des examens complémentaires.",
      "Elle joue un rôle clé dans la prévention, le dépistage précoce des facteurs de risque (cardiovasculaires, métaboliques, infectieux) et l'adaptation des traitements au fil du temps.",
      "C'est aussi un espace d'éducation: hygiène de vie, vaccination, suivi des maladies chroniques, conseils adaptés à l'âge et au contexte de vie du patient.",
    ],
    seo: {
      title: "Consultation Générale - Cabinet Dr Hasnaa El Malki",
      description:
        "Consultation médicale générale: examen clinique complet, diagnostic et prévention à Ait Melloul.",
    },
  },
  {
    id: "echographie",
    name: "Échographie Générale",
    short: "Imagerie douce pour un diagnostic précis.",
    icon: "activity",
    features: [
      "Abdominale",
      "Pelvienne",
      "Thyroïdienne",
      "Suivi orienté clinique",
    ],
    long: "L'échographie est un examen indolore utilisant les ultrasons.",
    paragraphs: [
      "L'échographie est un examen indolore utilisant les ultrasons pour visualiser en temps réel certains organes internes sans irradiation.",
      "Elle aide à confirmer ou affiner un diagnostic clinique dans des situations variées: douleurs abdominales ou pelviennes, exploration thyroïdienne, contrôle d'une image antérieure, suivi thérapeutique.",
      "Son innocuité et sa rapidité en font un outil de première intention dans de nombreux contextes médicaux.",
    ],
    seo: {
      title: "Échographie Générale - Diagnostic & Suivi",
      description:
        "Échographie abdominale, pelvienne, thyroïdienne et autres explorations au cabinet Dr El Malki.",
    },
  },
  {
    id: "diabetologie",
    name: "Diabétologie",
    short: "Suivi et équilibre du diabète.",
    icon: "heartpulse",
    features: [
      "Suivi glycémique",
      "Adaptation thérapeutique",
      "Éducation nutritionnelle",
      "Prévention complications",
    ],
    long: "La prise en charge du diabète repose sur un suivi régulier.",
    paragraphs: [
      "La prise en charge du diabète repose sur un suivi régulier intégrant contrôle glycémique, adaptation des traitements (oraux ou injectables) et éducation nutritionnelle.",
      "Le dépistage systématique des complications rénales, oculaires, cardiovasculaires ou neurologiques permet d'agir précocement.",
      "Objectif global: stabiliser durablement la maladie tout en préservant la qualité de vie et l'autonomie du patient.",
    ],
    seo: {
      title: "Suivi Diabétologie - Cabinet Médical",
      description:
        "Évaluation métabolique, adaptation du traitement et prévention des complications du diabète.",
    },
  },
  {
    id: "ecg",
    name: "ECG",
    short: "Analyse de l'activité cardiaque.",
    icon: "activity",
    features: [
      "Rythme cardiaque",
      "Dépistage troubles conduction",
      "Évaluation pré-opératoire",
      "Suivi prévention",
    ],
    long: "L'électrocardiogramme enregistre l'activité électrique du cœur.",
    paragraphs: [
      "L'électrocardiogramme (ECG) enregistre l'activité électrique du cœur sur une courte durée via des électrodes cutanées.",
      "Il est indiqué devant palpitations, douleurs thoraciques atypiques, essoufflement inexpliqué ou pour un bilan pré‑opératoire.",
      "Examen rapide et non invasif, il oriente le diagnostic de troubles du rythme ou de conduction et guide la suite de la prise en charge.",
    ],
    seo: {
      title: "ECG - Examen Cardiaque",
      description:
        "ECG au cabinet: dépistage des troubles du rythme et évaluation cardiaque préventive.",
    },
  },
  {
    id: "grossesse",
    name: "Suivi de Grossesse",
    short: "Accompagnement médical maternel.",
    icon: "baby",
    features: [
      "Consultations prénatales",
      "Surveillance tension/glycémie",
      "Suivi échographique orienté",
      "Conseils hygiène de vie",
    ],
    long: "Le suivi de grossesse vise à assurer la santé materno‑fœtale.",
    paragraphs: [
      "Le suivi de grossesse vise à assurer la santé de la mère et du fœtus par une surveillance régulière: tension, poids, dépistages ciblés, évaluation clinique.",
      "Des conseils personnalisés concernant alimentation, activité physique, sommeil et prévention des complications accompagnent chaque étape.",
      "Une orientation vers des explorations complémentaires ou un spécialiste est proposée si une situation particulière est détectée.",
    ],
    seo: {
      title: "Suivi de Grossesse - Ait Melloul",
      description:
        "Consultations prénatales, surveillance et conseils personnalisés pour une grossesse sereine.",
    },
  },
  {
    id: "certificats",
    name: "Certificats Médicaux",
    short: "Documents officiels validés.",
    icon: "filetext",
    features: ["Scolaires", "Sportifs", "Professionnels", "Autres demandes"],
    long: "Les certificats médicaux attestent d'une aptitude ou d'un état de santé.",
    paragraphs: [
      "Les certificats médicaux attestent d'une aptitude ou d'un état de santé pour la pratique d'une activité: sport, scolarité, emploi ou démarches administratives.",
      "Ils nécessitent un interrogatoire ciblé et un examen clinique adapté afin d'identifier d'éventuelles contre‑indications.",
      "La rédaction conforme garantit la validité réglementaire et la sécurité de la personne concernée.",
    ],
    seo: {
      title: "Certificats Médicaux Officiels",
      description:
        "Délivrance de certificats médicaux pour démarches sportives, scolaires et professionnelles.",
    },
  },
];

export const findService = (id: string) => services.find((s) => s.id === id);
