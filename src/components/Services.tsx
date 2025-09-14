import React from "react";
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
  const iconMap: Record<string, ReactElement> = {
    stethoscope: <Stethoscope size={20} />,
    activity: <Activity size={20} />,
    heartpulse: <HeartPulse size={20} />,
    baby: <Baby size={20} />,
    filetext: <FileText size={20} />,
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
              className="group bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition border border-transparent hover:border-[#3790B4]/30"
            >
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
              <div>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3790B4] hover:text-[#2d7490] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3790B4] rounded"
                  aria-label={`En savoir plus sur ${service.name}`}
                >
                  En savoir plus <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
