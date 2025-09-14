import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { findService } from "../data/services";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Baby,
  FileText,
  ArrowLeft,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope size={28} className="text-[#3790B4]" />,
  activity: <Activity size={28} className="text-[#3790B4]" />,
  heartpulse: <HeartPulse size={28} className="text-[#3790B4]" />,
  baby: <Baby size={28} className="text-[#3790B4]" />,
  filetext: <FileText size={28} className="text-[#3790B4]" />,
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? findService(slug) : undefined;

  useEffect(() => {
    if (!service) return;
    // Update document title
    if (service.seo?.title) document.title = service.seo.title;

    // Helper to set or update meta tag
    const upsertMeta = (
      attr: "name" | "property",
      key: string,
      value?: string
    ) => {
      if (!value) return;
      let tag = document.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    const desc = service.seo?.description;
    if (desc) {
      upsertMeta("name", "description", desc);
      upsertMeta("property", "og:description", desc);
      upsertMeta("name", "twitter:description", desc);
    }
    if (service.seo?.title) {
      upsertMeta("property", "og:title", service.seo.title);
      upsertMeta("name", "twitter:title", service.seo.title);
    }
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", window.location.href);

    return () => {
      // We intentionally do not remove tags to avoid flicker when navigating back; they will be overwritten by next page.
    };
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-[#40338B] font-semibold mb-4">
          Service introuvable.
        </p>
        <Link to="/" className="text-[#3790B4] hover:underline text-sm">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[#3790B4] text-xs font-medium hover:underline"
          >
            <ArrowLeft size={14} /> Accueil
          </Link>
          <span className="text-[#6F78B9] text-xs">/</span>
          <Link
            to="/#services"
            className="text-[#3790B4] text-xs font-medium hover:underline"
          >
            Services
          </Link>
          <span className="text-[#6F78B9] text-xs">/</span>
          <span className="text-[#40338B] text-xs font-semibold">
            {service.name}
          </span>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            {iconMap[service.icon]}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#40338B] leading-tight">
              {service.name}
            </h1>
          </div>
          <p className="text-[#6F78B9] text-sm max-w-2xl">{service.short}</p>
        </header>

        <section className="mb-10 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-base font-semibold text-[#3790B4] mb-3">
            Présentation
          </h2>
          {service.paragraphs ? (
            <div className="space-y-4 mb-6">
              {service.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 25)}
                  className="text-[#40338B] text-sm leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-[#40338B] text-sm leading-relaxed mb-6">
              {service.long}
            </p>
          )}
          {service.features.length > 0 && (
            <>
              <h3 className="text-sm font-semibold text-[#3790B4] mb-2">
                Points clés
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#40338B] text-xs">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3790B4]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        <section className="mb-12 bg-[#3790B4]/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#40338B] mb-2">
              Prendre contact
            </h3>
            <p className="text-[#40338B] text-xs mb-3">
              Pour toute question complémentaire ou pour un rendez-vous.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="tel:+212528241119"
                className="px-3 py-1.5 rounded bg-white shadow text-[#3790B4] font-medium hover:shadow-md transition"
              >
                Appeler
              </a>
              <a
                href="mailto:cmhe25@gmail.com"
                className="px-3 py-1.5 rounded bg-white shadow text-[#3790B4] font-medium hover:shadow-md transition"
              >
                Email
              </a>
              <a
                href={`https://wa.me/212641238344?text=${encodeURIComponent(
                  "Bonjour, je suis intéressé(e) par: " + service.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2 pr-3 py-1.5 inline-flex items-center gap-1 rounded bg-[#25D366] text-white font-medium shadow hover:shadow-md transition"
              >
                <img
                  src="/whatsapp.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5"
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <Link
              to="/#services"
              className="text-[#3790B4] text-xs font-semibold hover:underline"
            >
              ← Tous les services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServiceDetail;
