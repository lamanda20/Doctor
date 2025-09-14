import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="fixed z-50 bottom-8 right-4 sm:bottom-10 sm:right-6 lg:bottom-8 lg:right-8 flex flex-col-reverse gap-4 lg:flex-row lg:items-end"
      aria-label="Boutons flottants: retour en haut et WhatsApp"
    >
      {/* WhatsApp button always visible */}
      <WhatsAppButton className="relative" />

      {/* Back to top only when scrolled */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="bg-gradient-to-br from-[#3790B4] to-[#6F78B9] text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#3790B4] focus:ring-offset-2 flex items-center justify-center"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
