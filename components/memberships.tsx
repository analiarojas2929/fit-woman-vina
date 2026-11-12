import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business } from "@/data/site";

export function Memberships() {
  return (
    <section className="section" id="planes" aria-labelledby="membership-title">
      <div className="container">
        <Reveal>
          <div className="eyebrow">El primer paso es conocernos</div>
          <div className="membership-grid">
            <div className="membership-copy">
              <h2 className="display section-heading" id="membership-title">
                Tu ritmo.
                <br />
                <span className="accent">Tu plan.</span>
              </h2>
              <p>
                Hay distintas formas de comenzar. Escríbenos para conocer las
                membresías, valores y condiciones vigentes, y elegir con
                información actualizada.
              </p>
              <p>
                Sin precios ni beneficios estimados: el equipo puede orientarte
                con los detalles reales.
              </p>
              <div className="demo-note">
                La información comercial se confirma directamente con Fit Woman
                Viña.
              </div>
            </div>
            <aside className="membership-card">
              <div>
                <span>Información personalizada</span>
                <h3 className="display">Membresías</h3>
                <p>
                  Consulta alternativas, disponibilidad y cómo empezar a
                  entrenar.
                </p>
              </div>
              <a
                className="button button-dark"
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Consultar por Instagram{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
