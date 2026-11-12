import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { questions } from "@/data/site";

export function FAQ() {
  return (
    <section
      className="section dark-section"
      id="preguntas"
      aria-labelledby="faq-title"
    >
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <div className="eyebrow">Resolvemos tus dudas</div>
          <h2 className="display section-heading" id="faq-title">
            Antes de
            <br />
            <span className="accent">empezar.</span>
          </h2>
          <p className="section-intro">
            Si necesitas más detalles, el equipo de Fit Woman puede ayudarte a
            encontrar la información actualizada.
          </p>
        </Reveal>
        <div className="faq-list">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="faq-item">
                <summary>
                  {item.question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
