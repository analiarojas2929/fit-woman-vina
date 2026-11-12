import { ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business } from "@/data/site";

export function Contact() {
  return (
    <section
      className="section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <div className="eyebrow">Te esperamos en Viña del Mar</div>
          <h2 className="display section-heading" id="contact-title">
            El siguiente
            <br />
            paso es <span className="accent">tuyo.</span>
          </h2>
          <p className="section-intro">
            Escríbenos para conocer la disponibilidad y encontrar la información
            que necesitas para empezar.
          </p>
          <a
            className="button"
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} aria-hidden="true" />
            Habla con el equipo
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="address-card">
            <div className="eyebrow">
              <MapPin size={15} aria-hidden="true" />
              Nuestra ubicación
            </div>
            <h3 className="display">
              {business.address}
              <br />
              {business.city}
            </h3>
            <p>
              Viña del Mar, Región de Valparaíso, Chile.
              <br />
              Confirma los horarios antes de visitarnos.
            </p>
            <a
              className="button button-dark"
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir Google Maps{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
