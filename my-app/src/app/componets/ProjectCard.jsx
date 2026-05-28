"use client";
import { useState } from "react";

export default function ProjectCard({ title, desc, tags, href, emoji, gradient }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? gradient : "rgba(255,255,255,0.07)" }}
    >
      <div className="project-card__emoji">{emoji}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{desc}</p>

      <div className="project-card__tags">
        {tags.map((t) => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
    </a>
  );
}