"use client";
import { useEffect, useState, useCallback } from "react";

/*
  EventGallery — lightbox con carrusel animado
  Props:
    photos   : string[]  — rutas de las imágenes
    eventName: string    — título del evento
    color    : string    — color acento del evento
    onClose  : () => void
*/
export default function EventGallery({ photos, eventName, color, onClose }) {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(null); // "left" | "right"
  const [animating, setAnimating] = useState(false);

  /* ── navegar ── */
  const go = useCallback((dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === "right"
          ? (c + 1) % photos.length
          : (c - 1 + photos.length) % photos.length
      );
      setAnimating(false);
    }, 350);
  }, [animating, photos.length]);

  /* ── teclado ── */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight") go("right");
      if (e.key === "ArrowLeft")  go("left");
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [go, onClose]);

  /* ── bloquear scroll fondo ── */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const slideClass = animating
    ? direction === "right" ? "slide-out-left"  : "slide-out-right"
    : "slide-in";

  return (
    <>
      <style>{`
        .eg-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(8, 2, 18, 0.92);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: egFadeIn 0.3s ease;
        }
        @keyframes egFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── slide animations ── */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }

        .slide-in       { animation: slideInRight 0.35s ease forwards; }
        .slide-in-left  { animation: slideInLeft  0.35s ease forwards; }
        .slide-out-left { animation: slideOutLeft  0.35s ease forwards; }
        .slide-out-right{ animation: slideOutRight 0.35s ease forwards; }

        .eg-img {
          max-width: min(700px, 90vw);
          max-height: 65vh;
          width: 100%;
          object-fit: contain;
          border-radius: 1.25rem;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          display: block;
        }

        .eg-nav-btn {
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .eg-nav-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.1);
        }

        .eg-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          padding: 0;
        }
        .eg-dot.active {
          background: var(--eg-color, #f472b6);
          transform: scale(1.4);
        }

        .eg-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .eg-close:hover { background: rgba(255,255,255,0.22); }

        .eg-counter {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.1em;
          margin-top: 0.75rem;
        }

        /* placeholder cuando no hay fotos reales aún */
        .eg-placeholder {
          width: min(500px, 85vw);
          height: 340px;
          border-radius: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 3.5rem;
          color: rgba(255,255,255,0.25);
          border: 2px dashed rgba(255,255,255,0.15);
        }
      `}</style>

      <div
        className="eg-overlay"
        style={{ "--eg-color": color }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* ── cerrar ── */}
        <button className="eg-close" onClick={onClose}>✕</button>

        {/* ── título ── */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", color, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
            Álbum de fotos
          </p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem,3vw,1.75rem)", fontWeight: 800, color: "#fff" }}>
            {eventName}
          </h3>
        </div>

        {/* ── imagen + flechas ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", width: "100%", justifyContent: "center" }}>
          <button
            className="eg-nav-btn"
            onClick={() => go("left")}
            disabled={photos.length <= 1}
            style={{ opacity: photos.length <= 1 ? 0.3 : 1 }}
          >
            ‹
          </button>

          <div style={{ position: "relative", overflow: "hidden", borderRadius: "1.25rem" }}>
            {photos.length > 0 ? (
              <img
                key={current}
                src={photos[current]}
                alt={`${eventName} — foto ${current + 1}`}
                className={`eg-img ${slideClass}`}
              />
            ) : (
              <div className="eg-placeholder">
                <span>📷</span>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>
                  Próximamente fotos de este evento
                </p>
              </div>
            )}
          </div>

          <button
            className="eg-nav-btn"
            onClick={() => go("right")}
            disabled={photos.length <= 1}
            style={{ opacity: photos.length <= 1 ? 0.3 : 1 }}
          >
            ›
          </button>
        </div>

        {/* ── dots + contador ── */}
        {photos.length > 1 && (
          <>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}>
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`eg-dot ${i === current ? "active" : ""}`}
                  onClick={() => { setDirection("right"); setCurrent(i); }}
                />
              ))}
            </div>
            <p className="eg-counter">{current + 1} / {photos.length}</p>
          </>
        )}
      </div>
    </>
  );
}
