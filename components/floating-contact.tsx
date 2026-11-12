import { MessageCircle, Instagram } from "lucide-react";
import { business } from "@/data/site";

export function FloatingContact() {
  const hasWhatsApp = business.whatsappNumber.length > 0;
  const href = hasWhatsApp
    ? `https://wa.me/${business.whatsappNumber.replace(/\D/g, "")}`
    : business.instagram;

  return (
    <a
      className="floating-contact"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={
        hasWhatsApp
          ? "Contactar a Fit Woman por WhatsApp"
          : "Contactar a Fit Woman por Instagram"
      }
    >
      {hasWhatsApp ? (
        <MessageCircle size={18} aria-hidden="true" />
      ) : (
        <Instagram size={18} aria-hidden="true" />
      )}
      <span>{hasWhatsApp ? "WhatsApp" : "Escríbenos"}</span>
    </a>
  );
}
