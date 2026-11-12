"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business } from "@/data/site";
import { SiteLogo } from "@/components/site-logo";

const navigation = [
  { label: "Entrenamientos", href: "#entrenamientos" },
  { label: "Planes", href: "#planes" },
  { label: "Horarios", href: "#horarios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          className="brand-link"
          href="#inicio"
          aria-label="Fit Woman Viña, ir al inicio"
          onClick={closeMenu}
        >
          <SiteLogo priority />
        </a>
        <nav
          id="primary-navigation"
          className={`nav-links${isOpen ? " is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="button nav-cta"
          href={business.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Escríbenos <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
