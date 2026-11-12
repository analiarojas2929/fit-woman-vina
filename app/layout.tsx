import type { Metadata } from "next";
import { business } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit Woman Viña | Tu fuerza, tu espacio",
  description:
    "Entrenamiento grupal guiado y estética en Viña del Mar. Encuentra tu espacio en Fit Woman Viña y consulta planes y horarios vigentes.",
  applicationName: business.name,
  openGraph: {
    title: "Fit Woman Viña | Tu fuerza, tu espacio",
    description:
      "Un espacio para entrenar, sentirte fuerte y avanzar a tu ritmo en Viña del Mar.",
    siteName: business.name,
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/images/fit-woman-logo.png",
  },
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: business.name,
  description:
    "Centro de entrenamiento grupal guiado y estética en Viña del Mar.",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "CL",
  },
  sameAs: [business.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
