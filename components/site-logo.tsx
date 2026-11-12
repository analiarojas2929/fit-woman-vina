import Image from "next/image";

export function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      className="brand-logo"
      src="/images/fit-woman-logo.png"
      alt="Fit Woman Center, Viña del Mar"
      width={250}
      height={132}
      priority={priority}
    />
  );
}
