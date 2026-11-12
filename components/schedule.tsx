import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business } from "@/data/site";

export function Schedule() {
  return (
    <section
      className="section schedule-section"
      id="horarios"
      aria-labelledby="schedule-title"
    >
      <div className="container">
        <Reveal className="schedule-panel">
          <div>
            <div className="eyebrow">
              <CalendarDays size={15} aria-hidden="true" />
              Organiza tu semana
            </div>
            <h2 className="display" id="schedule-title">
              Tu próxima clase empieza con una consulta.
            </h2>
            <p>
              Los horarios y la disponibilidad pueden cambiar. Escríbenos para
              revisar la programación vigente antes de venir.
            </p>
          </div>
          <a
            className="button"
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Consultar horarios{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
