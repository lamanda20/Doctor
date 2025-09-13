import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");
  const firstMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll effect for header shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections to highlight active nav link
  useEffect(() => {
    const sectionIds = [
      "accueil",
      "a-propos",
      "services",
      "expertise",
      "gallery",
      "location",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

  // Focus first menu item when mobile menu opens
  useEffect(() => {
    if (isMenuOpen && firstMenuButtonRef.current)
      firstMenuButtonRef.current.focus();
  }, [isMenuOpen]);

  // Close mobile menu on Escape
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
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "À Propos", id: "a-propos" },
    { name: "Services", id: "services" },
    { name: "Expertise", id: "expertise" },
    { name: "Galerie", id: "gallery" },
    { name: "Contact & Localisation", id: "location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-teal-100"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav
          className="flex justify-between items-center h-20"
          aria-label="Navigation principale"
        >
          {/* Logo + name */}
          <div className="flex items-center gap-4">
            <img
              src="/image.png"
              alt="Dr. Hasnaa El Malki"
              className="w-12 h-12 rounded-full object-cover border-2 border-teal-100"
            />
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-left"
              aria-label="Aller à l'accueil"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-teal-900 leading-none">
                Dr. Hasnaa El Malki
              </h3>
              <span className="text-xs sm:text-sm font-medium text-teal-700">
                Médecin Généraliste
              </span>
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative font-medium transition-colors duration-200 px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded ${
                    isActive
                      ? "text-teal-900"
                      : "text-teal-700 hover:text-teal-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div
            id="menu-mobile"
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg border-l border-teal-100 p-6 flex flex-col"
            role="dialog"
            aria-label="Menu mobile"
          >
            {/* Logo + name */}
            <div className="mb-6">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-left"
                aria-label="Aller à l'accueil"
              >
                <h4 className="text-lg font-semibold text-teal-900">
                  Dr. Hasnaa
                </h4>
                <span className="text-sm text-teal-700">
                  Médecin Généraliste
                </span>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col gap-2">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    ref={idx === 0 ? firstMenuButtonRef : null}
                    onClick={() => scrollToSection(link.id)}
                    className={`py-3 px-4 rounded-lg text-left font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                      isActive
                        ? "bg-teal-100 text-teal-900"
                        : "text-teal-700 hover:bg-teal-50 hover:text-teal-900"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
