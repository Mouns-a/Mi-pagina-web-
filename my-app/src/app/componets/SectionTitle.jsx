"use client";

export default function SectionTitle({ sub, title, desc }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span className="section-sub">{sub}</span>

      <h2 className="section-title-text">{title}</h2>

      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}