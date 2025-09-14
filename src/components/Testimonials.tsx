import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: "1",
      patientName: "Ziyad Grm",
      rating: 5,
      comment:
        "Médecin très attentive, professionnelle et humaine. Elle prend le temps d'expliquer clairement et de rassurer ses patients. Je recommande sans hésitation.",
      date: "2025-08-13",
      verified: true,
    },
    {
      id: "2",
      patientName: "Taha GHADI",
      rating: 5,
      comment:
        "Médecin compétente et très attentive. Explique bien, rassure le patient et fait preuve d'un grand professionnalisme. Je recommande vivement.",
      date: "2025-09-12",
      verified: true,
    },
    {
      id: "3",
      patientName: "Ghadi Rachid",
      rating: 5,
      comment: "Nouveau patient, très satisfait du suivi et de l'écoute.",
      date: "2025-09-13",
      verified: true,
    },
    {
      id: "4",
      patientName: "Rayan El Malki",
      rating: 5,
      comment: "Excellent suivi et très professionnel. Je recommande !",
      date: "2025-08-13",
      verified: true,
    },
    {
      id: "5",
      patientName: "Mohamad Atbir",
      rating: 5,
      comment: "Médecin compétente et attentive. Très bon suivi.",
      date: "2025-08-13",
      verified: true,
    },
    {
      id: "6",
      patientName: "Gh Driss",
      rating: 5,
      comment:"Médecin professionnelle. Toujours à l'écoute, elle assure un bon suivi.",
      date: "2025-09-13",
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`star ${index < rating ? "filled" : ""}`}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section
      id="témoignages"
      className="w-full bg-[#3790B4]/5 pt-0 pb-10 scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-1"
          >
            Témoignages Patients
          </h2>
          <p className="text-[#6F78B9] text-base">
            Ce que disent nos patients de leur expérience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow p-5 flex flex-col gap-2.5"
            >
              <div className="flex items-center gap-4 mb-2">
                <Quote className="text-[#3790B4]" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-[#40338B] mb-0.5">
                    {testimonial.patientName}
                  </h4>
                  <div className="flex gap-1 text-yellow-400">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-[#3790B4] ml-auto">
                    <CheckCircle size={16} />
                    <span className="text-xs font-semibold">Vérifié</span>
                  </div>
                )}
              </div>
              <p className="italic text-[#6F78B9] text-xs mb-1.5 leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="text-xs text-[#6F78B9] text-right">
                {new Date(testimonial.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
