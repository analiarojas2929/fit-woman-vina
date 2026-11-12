import { Activity, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";

const icons = {
  activity: Activity,
  users: Users,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section
      className="section dark-section"
      id="entrenamientos"
      aria-labelledby="services-title"
    >
      <div className="container">
        <Reveal className="intro-grid">
          <div>
            <div className="eyebrow">Movimiento con intención</div>
            <h2 className="display section-heading" id="services-title">
              Tu bienestar,
              <br />
              <span className="accent">a tu manera.</span>
            </h2>
          </div>
          <p className="section-intro">
            Un lugar para entrenar, sentirte acompañada y descubrir qué opción
            se adapta a ti. Consulta con el equipo los servicios disponibles.
          </p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Reveal key={service.index} delay={index * 0.08}>
                <article className="service-card">
                  <div className="service-card-top">
                    <span>{service.index} / FIT WOMAN</span>
                    <span className="service-card-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <h3 className="display">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="card-index" aria-hidden="true">
                    {service.index}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
