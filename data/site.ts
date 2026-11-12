export const business = {
  name: "Fit Woman Viña",
  brandName: "Fit Woman Center",
  address: "12 Norte 663",
  city: "Viña del Mar",
  region: "Valparaíso",
  instagram: "https://www.instagram.com/fit_womanvina/",
  whatsappNumber: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=12+Norte+663+Vi%C3%B1a+del+Mar",
} as const;

export const services = [
  {
    index: "01",
    title: "Entrenamiento grupal guiado",
    description:
      "Muévete en grupo con guía durante tus sesiones. Consulta qué clases están disponibles actualmente.",
    icon: "activity",
  },
  {
    index: "02",
    title: "Acompañamiento semipersonalizado",
    description:
      "Conoce la modalidad de acompañamiento y cómo se adapta a tus objetivos directamente con el equipo.",
    icon: "users",
  },
  {
    index: "03",
    title: "Estética",
    description:
      "Consulta por los servicios de estética vigentes y sus detalles antes de agendar.",
    icon: "sparkles",
  },
] as const;

export const questions = [
  {
    question: "¿Dónde está ubicado Fit Woman Viña?",
    answer:
      "Nos encuentras en 12 Norte 663, Viña del Mar. Puedes abrir la ubicación en Google Maps desde el botón de contacto.",
  },
  {
    question: "¿Qué planes y valores tienen?",
    answer:
      "Los planes, valores y condiciones no se publican aquí hasta ser confirmados. Escríbenos por Instagram para recibir la información vigente.",
  },
  {
    question: "¿Dónde puedo revisar los horarios?",
    answer:
      "Los horarios pueden cambiar. Consulta la programación actual directamente en el Instagram oficial de Fit Woman Viña.",
  },
  {
    question: "¿Qué servicios de estética ofrecen?",
    answer:
      "La oferta y disponibilidad de estética debe confirmarse directamente con el gimnasio. Contáctanos para conocer los servicios vigentes.",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
    alt: "Mujer entrenando fuerza con pesas, fotografía referencial",
    caption: "Entrenamiento · imagen referencial",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    alt: "Equipamiento de gimnasio, fotografía referencial",
    caption: "Espacio fitness · imagen referencial",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    alt: "Sesión fitness guiada, fotografía referencial",
    caption: "Movimiento · imagen referencial",
  },
] as const;
