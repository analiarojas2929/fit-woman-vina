import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { galleryImages } from "@/data/site";

export function Gallery() {
  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="gallery-heading">
          <div>
            <div className="eyebrow">Un espacio para sentirte bien</div>
            <h2 className="display section-heading" id="gallery-title">
              Energía que
              <br />
              <span className="accent">se siente.</span>
            </h2>
          </div>
          <p className="section-intro">
            Una primera mirada al universo del entrenamiento. Estas fotografías
            son referenciales y no corresponden a instalaciones verificadas de
            Fit Woman Viña.
          </p>
        </Reveal>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal className="gallery-item" key={image.src} delay={index * 0.07}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 700px) 100vw, 48vw"
                    : "(max-width: 700px) 50vw, 30vw"
                }
              />
              <span className="gallery-caption">{image.caption}</span>
            </Reveal>
          ))}
        </div>
        <p className="reference-note">
          Las imágenes de esta galería son de stock; reemplazarlas por fotografías
          propias antes del lanzamiento final.
        </p>
      </div>
    </section>
  );
}
