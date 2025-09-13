import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: "1",
      patientName: "Sophie Martin",
      rating: 5,
      comment:
        "Dr. Dubois est une médecin exceptionnelle. Elle prend le temps d'écouter et explique clairement les traitements. Je recommande vivement !",
      date: "2024-08-15",
      verified: true,
    },
    {
      id: "2",
      patientName: "Jean-Pierre L.",
      rating: 5,
      comment:
        "Très professionnelle et à l'écoute. Le cabinet est moderne et bien équipé. Un suivi médical de qualité.",
      date: "2024-07-28",
      verified: true,
    },
    {
      id: "3",
      patientName: "Marie C.",
      rating: 5,
      comment:
        "Une docteure bienveillante qui suit toute ma famille depuis 3 ans. Toujours disponible et de très bon conseil.",
      date: "2024-08-02",
      verified: true,
    },
    {
      id: "4",
      patientName: "Thomas D.",
      rating: 5,
      comment:
        "Cabinet facilement accessible, personnel accueillant. Dr. Dubois a su diagnostiquer rapidement mon problème de santé.",
      date: "2024-07-10",
      verified: true,
    },
    {
      id: "5",
      patientName: "Isabelle R.",
      rating: 5,
      comment:
        "Je suis suivie pour une maladie chronique. Dr. Dubois fait un suivi rigoureux et rassurant. Une vraie professionnelle !",
      date: "2024-06-25",
      verified: true,
    },
    {
      id: "6",
      patientName: "Michel B.",
      rating: 5,
      comment:
        "Excellente prise en charge de mes enfants. Dr. Dubois sait être rassurante avec eux tout en étant très compétente.",
      date: "2024-08-08",
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
      className="w-full bg-[#3790B4]/5 py-20 scroll-mt-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#40338B] mb-2"
          >
            Témoignages Patients
          </h2>
          <p className="text-[#6F78B9] text-lg">
            Ce que disent nos patients de leur expérience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-4 mb-2">
                <Quote className="text-[#3790B4]" size={24} />
                <div>
                  <h4 className="text-base font-bold text-[#40338B] mb-1">
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
              <p className="italic text-[#6F78B9] text-sm mb-2">
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
