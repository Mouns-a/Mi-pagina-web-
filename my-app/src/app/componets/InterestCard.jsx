"use client";
import { useState } from "react";

export default function InterestCard({ icon, title, desc, accent }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="interest-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:  hov ? accent + "22" : "rgba(255,255,255,0.06)",
        borderColor: hov ? accent : "rgba(255,255,255,0.12)",
      }}
    >
      <div
        className="interest-card__icon"
        style={{ background: accent + "33" }}
      >
        {icon}
      </div>
      <h3 className="interest-card__title">{title}</h3>
      <p className="interest-card__desc">{desc}</p>
    </div>
  );
}