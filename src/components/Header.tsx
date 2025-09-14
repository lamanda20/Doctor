import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");
  const firstMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "accueil",
      "a-propos",
      "services",
      "gallery",
      "location",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen && firstMenuButtonRef.current)
      firstMenuButtonRef.current.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Mettre à jour l'URL avec le hash
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  // Unified nav handler: if we're not on home route, navigate there with hash so ScrollToHash in App handles smooth scroll
  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "À Propos", id: "a-propos" },
    { name: "Services", id: "services" },
    { name: "Galerie", id: "gallery" },
    { name: "Contact & Localisation", id: "location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#3790B4]/30 backdrop-blur-md shadow-lg border-b border-[#3790B4]"
          : "bg-[#3790B4]/10 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <nav
          className="flex justify-between items-center h-20"
          aria-label="Navigation principale"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("accueil")}
              className="text-left"
              aria-label="Aller à l'accueil"
            >
              <h3 className="text-sm sm:text-lg font-bold text-[#6F78B9] leading-none">
                CABINET MÉDICAL
              </h3>
              <span className="text-xs sm:text-sm font-medium text-[#3790B4]">
                Dr. HASNAA EL MALKI
              </span>
            </button>
            <img
              src="/logo.png"
              alt="Dr. Hasnaa El Malki"
              className="w-12 h-12 object-cover bg-transparent mix-blend-multiply"
            />
            <div className="hidden sm:block text-right" dir="rtl">
              <p className="text-sm sm:text-lg font-bold text-[#6F78B9] leading-none">
                عيادة طبية
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#3790B4]">
                الدكتورة حسناء الملكي
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`group relative font-medium transition-colors duration-200 px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3790B4] rounded cursor-pointer ${
                    isActive
                      ? "text-[#3790B4]"
                      : "text-[#6F78B9] hover:text-[#3790B4]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                    {link.name}
                  </span>
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 rounded bg-[#3790B4] transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
          <button
            className="lg:hidden p-2 rounded-lg text-[#6F78B9] hover:bg-[#3790B4]/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3790B4]"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <div
          id="menu-mobile"
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 gap-3">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                ref={index === 0 ? firstMenuButtonRef : null}
                className={`text-left font-medium py-2 px-2 rounded transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-[#3790B4]"
                    : "text-[#6F78B9] hover:text-[#3790B4]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
