import { Sparkle } from "lucide-react";

const words = ["Fuerza", "Bienestar", "Comunidad", "Confianza"];

export function BrandRibbon() {
  return (
    <div className="brand-ribbon" aria-hidden="true">
      <div className="brand-ribbon-inner">
        {words.map((word) => (
          <span key={word}>
            {word} <Sparkle aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
