import React, { useRef, useState, useEffect } from "react";
import {
  Star,
  Quote,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
      comment:
        "Médecin professionnelle. Toujours à l'écoute, elle assure un bon suivi.",
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide on scroll (mobile only)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: index * width, behavior: "smooth" });
  };

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () =>
    scrollTo(Math.min(testimonials.length - 1, activeIndex + 1));

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
        {/* Mobile carousel */}
        <div className="md:hidden relative mb-6">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4"
            aria-label="Témoignages défilants"
            role="group"
          >
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="min-w-full snap-start pr-4"
                aria-roledescription="slide"
                aria-label={`Témoignage ${idx + 1} sur ${testimonials.length}`}
              >
                <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2.5 h-full">
                  <div className="flex items-center gap-4 mb-2">
                    <Quote className="text-[#3790B4]" size={24} />
                    <div>
                      <h4 className="text-sm font-bold text-[#40338B] mb-0.5">
                        {t.patientName}
                      </h4>
                      <div className="flex gap-1 text-yellow-400">
                        {renderStars(t.rating)}
                      </div>
                    </div>
                    {t.verified && (
                      <div className="flex items-center gap-1 text-[#3790B4] ml-auto">
                        <CheckCircle size={16} />
                        <span className="text-xs font-semibold">Vérifié</span>
                      </div>
                    )}
                  </div>
                  <p className="italic text-[#6F78B9] text-xs mb-1.5 leading-relaxed">
                    "{t.comment}"
                  </p>
                  <div className="text-xs text-[#6F78B9] text-right">
                    {new Date(t.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Nav buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="pointer-events-auto ml-1 p-2 rounded-full bg-white shadow disabled:opacity-30 text-[#3790B4]"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === testimonials.length - 1}
              className="pointer-events-auto mr-1 p-2 rounded-full bg-white shadow disabled:opacity-30 text-[#3790B4]"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeIndex ? "bg-[#3790B4]" : "bg-[#3790B4]/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow p-5 flex flex-col gap-2.5"
            >
              <div className="flex items-center gap-4 mb-2">
                <Quote className="text-[#3790B4]" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-[#40338B] mb-0.5">
                    {t.patientName}
                  </h4>
                  <div className="flex gap-1 text-yellow-400">
                    {renderStars(t.rating)}
                  </div>
                </div>
                {t.verified && (
                  <div className="flex items-center gap-1 text-[#3790B4] ml-auto">
                    <CheckCircle size={16} />
                    <span className="text-xs font-semibold">Vérifié</span>
                  </div>
                )}
              </div>
              <p className="italic text-[#6F78B9] text-xs mb-1.5 leading-relaxed">
                "{t.comment}"
              </p>
              <div className="text-xs text-[#6F78B9] text-right">
                {new Date(t.date).toLocaleDateString("fr-FR", {
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
