import React, { useState } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Baby,
  FileText,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/services";

const Services: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const iconMap: Record<string, ReactElement> = {
    stethoscope: <Stethoscope size={20} />,
    activity: <Activity size={20} />,
    heartpulse: <HeartPulse size={20} />,
    baby: <Baby size={20} />,
    filetext: <FileText size={20} />,
  };

  const handleCardClick = (serviceId: string) => {
    // Si on clique sur la même carte, on la ferme
    if (flippedCard === serviceId) {
      setFlippedCard(null);
    } else {
      // Sinon, on ouvre instantanément la nouvelle carte
      setFlippedCard(serviceId);
    }
  };

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
              className="group relative h-64 w-full"
              style={{ perspective: "1000px" }}
              onClick={() => handleCardClick(service.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 ease-in-out cursor-pointer ${
                  flippedCard === service.id ? "" : ""
                }`}
                style={{ 
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  transform: flippedCard === service.id ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Face */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 h-full hover:shadow-lg transition border border-transparent hover:border-[#3790B4]/30">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#3790B4]/15 text-[#3790B4] rounded-full p-3">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="text-sm font-bold text-[#40338B]">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-[#40338B] text-[11px] leading-relaxed flex-1">
                      {service.short}
                    </p>
                    <ul className="list-disc list-inside text-[#40338B] text-[11px] space-y-0.5 mb-1">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <span className="text-[11px] font-medium text-[#6F78B9]">
                        Cliquer pour plus d'infos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="bg-gradient-to-br from-[#3790B4] to-[#6F78B9] rounded-xl shadow-md p-5 flex flex-col justify-center items-center h-full text-white">
                    <div className="text-center mb-4">
                      <div className="bg-white/20 rounded-full p-4 mb-3 mx-auto w-fit">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{service.short}</p>
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 bg-white text-[#3790B4] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      En savoir plus <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
