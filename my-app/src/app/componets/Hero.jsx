"use client";
import Blob from "./Blob";

const DECOS = [
  { emoji: "⚡",  style: { top: "5%",   left: "0%",  animationDuration: "4s", animationDelay: "0s"   } },
  { emoji: "🛡️", style: { top: "10%",  right: "0%", animationDuration: "5s", animationDelay: "1.5s" } },
  { emoji: "🧠",  style: { bottom:"10%",left: "5%",  animationDuration: "6s", animationDelay: "3s"   } },
  { emoji: "💻",  style: { bottom:"5%", right:"5%",  animationDuration: "7s", animationDelay: "4.5s" } },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* blobs de fondo */}
      <Blob style={{ width:600, height:600, background:"#c084fc", top:"-10%",  left:"-15%", animationDelay:"0s" }} />
      <Blob style={{ width:500, height:500, background:"#f472b6", bottom:"-10%",right:"-10%",animationDelay:"3s" }} />
      <Blob style={{ width:350, height:350, background:"#60a5fa", top:"30%",   right:"20%", animationDelay:"6s" }} />

      <div className="hero__grid">

        {/* ── TEXTO ── */}
        <div>
          <p className="hero__tag fade-up">✦ Portafolio Profesional</p>

          <h1 className="hero__title fade-up delay-1">
            <span>Monserrat</span>
            <br />
            <span className="hero__title-gradient">Hernández M.</span>
          </h1>

          <p className="hero__role fade-up delay-2">
            Matemáticas Aplicadas y Computación · FES Acatlán
          </p>

          <p className="hero__desc fade-up delay-3">
            Apasionada por el desarrollo web, la ciberseguridad y los proyectos
            tecnológicos con impacto social. Fundadora y líder de{" "}
            <strong>Morras Tics</strong>.
          </p>

          <div className="hero__buttons fade-up delay-4">
            <a href="#proyectos" className="btn-primary glow-btn">
              🚀 Ver proyectos
            </a>
            <a href="#contacto" className="btn-outline glow-btn">
              ✉️ Contáctame
            </a>
          </div>
        </div>

        {/* ── FOTO ── */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-glow" />

          <div className="hero__photo-frame">
            <img src="/IMG_20230308_234137_334.webp" alt="Monserrat" />
          </div>

          {DECOS.map(({ emoji, style }, i) => (
            <div
              key={i}
              className="hero__deco"
              style={{
                ...style,
                animation: `floatUp ${style.animationDuration} ease-in-out infinite`,
                animationDelay: style.animationDelay,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero__scroll">SCROLL ↓</div>
    </section>
  );
}
