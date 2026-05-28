"use client";
import { useState } from "react";
import EventGallery from "./EventGallery";

/*
  EventCard — tarjeta de evento con botón "Ver fotos"
  Props nuevas:
    photos: string[]  — rutas de imágenes (puede ser [] si aún no hay)
*/
export default function EventCard({ name, date, role, place, color, photos = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="event-card"
        style={{
          borderColor: color + "55",
          borderLeft: `4px solid ${color}`,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(8px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
      >
        <div className="event-card__inner">
          {/* info */}
          <div style={{ flex: 1 }}>
            <h4 className="event-card__name">{name}</h4>
            <p className="event-card__role" style={{ color }}>{role}</p>
            <p className="event-card__place">{place}</p>
          </div>

          {/* lado derecho: fecha + botón */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.6rem", flexShrink: 0 }}>
            <span
              className="event-card__date"
              style={{ background: color + "33", color }}
            >
              {date}
            </span>

            <button
              onClick={() => setOpen(true)}
              style={{
                background: "transparent",
                border: `1.5px solid ${color}66`,
                color,
                borderRadius: "9999px",
                padding: "4px 14px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = color + "22";
                e.currentTarget.style.borderColor = color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = color + "66";
              }}
            >
              📷 Ver fotos
            </button>
          </div>
        </div>
      </div>

      {/* lightbox */}
      {open && (
        <EventGallery
          photos={photos}
          eventName={name}
          color={color}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
