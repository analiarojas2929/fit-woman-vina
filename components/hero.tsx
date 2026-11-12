import Image from "next/image";
import { ArrowDown, ArrowUpRight, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-photo"
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=90"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="eyebrow">Un espacio para mujeres · Viña del Mar</div>
        <h1 className="display hero-title" id="hero-title">
          Tu fuerza.
          <br />
          Tu espacio.
          <br />
          <span>Tu momento.</span>
        </h1>
        <p className="hero-copy">
          Entrenamiento grupal guiado y estética, en un espacio pensado para
          acompañarte a moverte a tu manera.
        </p>
        <div className="hero-actions">
          <a className="button" href="#planes">
            Conoce las membresías <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="button button-light" href="#entrenamientos">
            Explora el espacio <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-note">
          <Dumbbell size={17} aria-hidden="true" />
          Entrenamiento guiado · Viña del Mar
        </div>
      </div>
    </section>
  );
}
