"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Inicio",       id: "home" },
  { label: "Sobre mí",     id: "sobre" },
  { label: "Habilidades",  id: "habilidades" },
  { label: "Proyectos",    id: "proyectos" },
  { label: "Intereses",    id: "intereses" },
  { label: "Morras Tics",  id: "morras" },
  { label: "Eventos",      id: "eventos" },
  { label: "CV",           id: "cv" },
  { label: "Contacto",     id: "contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position:     "fixed",
        top: 0, left: 0, right: 0,
        zIndex:       100,
        background:   scrolled ? "rgba(15,6,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition:   "all 0.4s ease",
        padding:      "0 2rem",
      }}
    >
      {/* ── BARRA PRINCIPAL ── */}
      <div
        style={{
          maxWidth:       1200,
          margin:         "0 auto",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          height:         68,
        }}
      >
        <a href="#home" className="nav-logo">MHM</a>

        {/* Desktop */}
        <div className="desktop-nav" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {LINKS.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className="nav-link">{label}</a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ── MENÚ MÓVIL ── */}
      {open && (
        <div className="nav-mobile-menu">
          {LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
