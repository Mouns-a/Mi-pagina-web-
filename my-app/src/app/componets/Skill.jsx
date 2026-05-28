"use client";

export default function Skill({ name, color }) {
  return (
    <span
      className="skill-pill"
      style={{ background: color }}
    >
      {name}
    </span>
  );
}