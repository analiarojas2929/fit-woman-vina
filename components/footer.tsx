import { ArrowUpRight } from "lucide-react";
import { business } from "@/data/site";
import { SiteLogo } from "@/components/site-logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a
          className="brand-link"
          href="#inicio"
          aria-label="Fit Woman Viña, volver al inicio"
        >
          <SiteLogo />
        </a>
        <p className="footer-copy">
          {business.name} · {business.city}
          <br />
          Información pendiente de confirmación por el gimnasio.
        </p>
        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href={business.instagram} target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer">
            Cómo llegar <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href="#inicio">Volver arriba ↑</a>
        </nav>
      </div>
    </footer>
  );
}
