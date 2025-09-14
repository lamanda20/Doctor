import React from "react";

const WHATSAPP_NUMBER = "+212641238344";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Docteur, je souhaiterais prendre un rendez-vous."
);

const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter le cabinet via WhatsApp (nouvelle fenêtre)"
      className="fixed z-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] rounded-full
  bottom-8 right-8 sm:bottom-10 sm:right-6 lg:bottom-8 lg:right-24"
    >
      <span className="absolute -inset-2 rounded-full bg-[#25D366]/30 blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="relative flex items-center justify-center bg-[#25D366] text-white w-12 h-12 sm:w-auto sm:h-auto sm:pl-2 sm:pr-4 sm:py-1.5 gap-0 sm:gap-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer">
        <img
          src="/whatsapp.svg"
          alt=""
          aria-hidden="true"
          className="w-6 h-6"
        />
        <span className="text-xs font-semibold hidden sm:inline">WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
