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
          ? "bg-[#3790B4]/30 backdrop-blur-md shadow-lg border-b border-[#3790B4]"
          : "bg-[#3790B4]/10 shadow-md"
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
              src="/logo.png"
              alt="Dr. Hasnaa El Malki"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#3790B4]"
            />
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-left"
              aria-label="Aller à l'accueil"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-[#6F78B9] leading-none">
                Dr. Hasnaa El Malki
              </h3>
              <span className="text-xs sm:text-sm font-medium text-[#3790B4]">
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
                  className={`relative font-medium transition-colors duration-200 px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3790B4] rounded ${
                    isActive
                      ? "text-[#3790B4]"
                      : "text-[#6F78B9] hover:text-[#3790B4]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3790B4] rounded"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
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
      </div>
    </header>
  );
};

export default Navbar;
