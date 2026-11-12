import { BrandRibbon } from "@/components/brand-ribbon";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Memberships } from "@/components/memberships";
import { Navbar } from "@/components/navbar";
import { Schedule } from "@/components/schedule";
import { Services } from "@/components/services";
import { FloatingContact } from "@/components/floating-contact";

export default function HomePage() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <BrandRibbon />
        <Services />
        <Memberships />
        <Schedule />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
