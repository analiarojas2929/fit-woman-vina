# Fit Woman Viña

Sitio web responsive para Fit Woman Viña, implementado con Next.js App Router,
TypeScript, Tailwind CSS y Framer Motion.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Comandos

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Personalización

- Edita `data/site.ts` para cambiar la dirección, enlaces, servicios, preguntas,
  galería y configuración de contacto.
- Reemplaza `public/images/fit-woman-logo.png` por el logo final en el mismo
  formato y actualiza las imágenes referenciales de `data/site.ts` y
  `components/hero.tsx` por fotografías autorizadas del gimnasio. Las fotos
  actuales son de stock y están identificadas como referenciales.
- Añade horarios, precios, testimonios, perfiles del equipo y servicios
  específicos solo después de recibir información confirmada.
- Completa `whatsappNumber` en `data/site.ts` con el número internacional en
  formato numérico para activar el botón flotante de WhatsApp. Si está vacío,
  el acceso flotante lleva al Instagram oficial.

## Despliegue en Vercel

Importa el repositorio en Vercel y conserva los comandos predeterminados de
Next.js (`npm run build`). No requiere variables de entorno para la versión
actual. Configura un dominio propio cuando esté disponible y actualiza la URL
canónica y Open Graph en `app/layout.tsx`.

## Datos pendientes para producción

Confirmar dirección y ubicación exacta, planes y precios, horarios, servicios
de estética, contacto de WhatsApp y disponibilidad de fotografías oficiales.
