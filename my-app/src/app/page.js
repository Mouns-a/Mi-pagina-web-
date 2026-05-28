"use client";

/* ── ESTILOS ── */
import "./styles/layout.css";
import "./styles/animations.css";
import "./styles/nav.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/cards.css";

/* ── COMPONENTES ── */
import Particles    from "./componets/Particles";
import Blob         from "./componets/Blob";
import Nav          from "./componets/Nav";
import Hero         from "./componets/Hero";
import SectionTitle from "./componets/SectionTitle";
import Skill        from "./componets/Skill";
import ProjectCard  from "./componets/ProjectCard";
import InterestCard from "./componets/InterestCard";
import EventCard    from "./componets/EventCard";

/* ════════════════════════════════════════════
   DATOS
════════════════════════════════════════════ */
const SKILLS = [
  { cat: "Frontend",        color: "#f472b6", skills: ["HTML","CSS","JavaScript","React","Next.js","Tailwind CSS"] },
  { cat: "Backend & Datos", color: "#c084fc", skills: ["Python","Java","C","SQL","Supabase"] },
  { cat: "Ciberseguridad",  color: "#34d399", skills: ["Redes","Linux","Ethical Hacking"] },
  { cat: "Herramientas",    color: "#60a5fa", skills: ["GitHub","Git","Jira","VS Code","Notion"] },
];

const PROJECTS = [
  {
    emoji: "💻", title: "Frontend Next.js",
    desc:"Aplicación web desarrollada con Next.js y Supabase para evaluar profesores de forma anónima, incorporando autenticación, manejo de reseñas y visualización dinámica de información.",
    tags: ["Next.js","React","Tailwind CSS","Vercel"],
    href: "https://github.com/Academicos-Web/Frontend-Next.js",
    gradient: "linear-gradient(135deg,rgba(244,114,182,0.3),rgba(192,132,252,0.3))",
  },
  {
    emoji: "🛡️", title: "Morras Tics",
    desc:"Comunidad enfocada en acercar a más chicas al mundo tech mediante talleres, eventos y actividades colaborativas.",
    tags: ["GitHub","Comunidad","Ciberseguridad","Liderazgo"],
    href: "https://github.com/Morras-Tics/Morras-Tics-",
    gradient: "linear-gradient(135deg,rgba(52,211,153,0.3),rgba(96,165,250,0.3))",
  },
  /*{
    emoji: "📊", title: "Análisis de Datos",
    desc: "Proyectos de análisis exploratorio y visualización de datos aplicando estadística y Python para extraer insights accionables.",
    tags: ["Python","Pandas","Matplotlib","Jupyter"],
    href: "https://github.com/Mouns-a",
    gradient: "linear-gradient(135deg,rgba(251,191,36,0.3),rgba(251,113,133,0.3))",
  },*/
];

const INTERESTS = [
  {
    icon:"🌐",
    title:"Desarrollo Web",
    desc:"Construcción de interfaces funcionales y proyectos frontend con React y Next.js.",
    accent:"#f472b6"
  },
  {
    icon:"🛡️",
    title:"Ciberseguridad",
    desc:"Aprendizaje de redes, Linux y conceptos básicos de seguridad informática.",
    accent:"#34d399"
  },
  {
    icon:"🧠",
    title:"Inteligencia Artificial",
    desc:"Interés en modelos de IA y análisis de datos aplicados a problemas reales.",
    accent:"#c084fc"
  },
  {
    icon:"🗄️",
    title:"Bases de Datos",
    desc:"Diseño y conexión de bases de datos para aplicaciones web.",
    accent:"#60a5fa"
  },
  {
    icon:"📱",
    title:"Desarrollo Móvil",
    desc:"Exploración de herramientas multiplataforma para aplicaciones móviles.",
    accent:"#fb923c"
  },
  {
    icon:"💰",
    title:"Tecnología y Finanzas",
    desc:"Interés en herramientas digitales aplicadas a organización y análisis financiero.",
    accent:"#fbbf24"
  },
];
const MORRAS_MINI = [
  {
    icon:"👩‍💻",
    label:"Talleres",
    desc:"Sesiones introductorias de ciberseguridad."
  },
  {
    icon:"🎤",
    label:"Conferencias",
    desc:"Participación en conferencias y espacios de divulgación tecnológica."
  },
  {
    icon:"🌐",
    label:"Eventos",
    desc:"Asistencia y colaboración en actividades de comunidades STEM."
  },
  {
    icon:"🤝",
    label:"Difusión",
    desc:"Contenido y actividades para acercar más jóvenes al entorno tech."
  },
];

const EVENTS = [
  {
    name: "Talent Land",
    date: "Abril 2026",
    role: "Ponente · Morras Tics",
    place: "Expo Santa Fe CDMX",
    color: "#f472b6",
    photos: [
    "/TalenLand/foto1.jpeg",
     "/TalenLand/foto2.jpeg",
     "/TalenLand/foto3.jpeg",
    ],
  },
  {
    name: "Taller Servicios de la IA en la plataforma de Microsoft Azure",
    date: "Octubre 2025",
    role: "Ponente · Morras Tics",
    place: "FES Acatlán · Estado de México",
    color: "#c084fc",
    photos: [
      "/azure.png"
    ],
  },
  {
    name: "Conferencia ¿Quiénes somos Morras Tics?",
    date: "Abril 2025",
    role: "Ponente · Morras Tics",
    place: "Presencial Scotiabank Ciudad de México",
    color: "#60a5fa",
    photos: [
      "/scotiabank/scotiabank.png",
      "/scotiabank/scotiabank1.png"
    ],
  },
  {
    name: "Conferencia sobre Mujeres en las TICs",
    date: "Marzo 2024",
    role: "Ponente · Morras Tics",
    place: "Presencial FES Acatlán",
    color: "#fbbf24",
    photos: [],
  },
];

const SOCIALS = [
  { icon:"💼", name:"LinkedIn", user:"@Monserrat Hernandez Martinez", href:"https://www.linkedin.com/in/monserrat-hernandez-martinez-34a608273/", color:"#0ea5e9" },
  { icon:"🐙", name:"GitHub",   user:"@Mouns-a",                      href:"https://github.com/Mouns-a",                                          color:"#c084fc" },
];

const CONTACT_INFO = [
  { icon:"✉️", label:"Email",          value:"monserrathernandezmartinez1@gmail.com", href:"mailto:monserrathernandezmartinez1@gmail.com", color:"#f472b6" },
  { icon:"📍", label:"Ubicación",      value:"Estado de México, México",              href: null,                                          color:"#c084fc" },
  { icon:"🟢", label:"Disponibilidad", value:"Abierta a oportunidades",               href: null,                                          color:"#34d399" },
];

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Particles />
      <Nav />

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <Hero />

        <div className="section-sep" />

        {/* ── SOBRE MÍ ── */}
        <section id="sobre" style={{ padding: "6rem 2rem", position: "relative" }}>
          <Blob style={{ width:400, height:400, background:"#34d399", top:"0%", right:"-10%", animationDelay:"2s" }} />

          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <SectionTitle sub="Quién soy" title="Sobre mí" />

            <div className="sobre__grid">
              <div className="sobre__text">
                <p>
                  Soy estudiante de Matemáticas Aplicadas y Computación en la{" "}
                  <strong>FES Acatlán</strong>, enfocada en desarrollo web y construcción de herramientas digitales para comunidades educativas.
                </p>
                <p>
                  Disfruto crear proyectos que mezclen lógica, diseño y resolución de problemas.
                  Actualmente exploro áreas como desarrollo web, ciberseguridad y análisis de datos.
                </p>
                <p>
                Además de programar, participo en iniciativas que buscan acercar más personas al mundo tech.
                </p>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  { label:"Universidad",    value:"FES Acatlán · UNAM",                    icon:"🎓" },
                  { label:"Carrera",        value:"Matemáticas Aplicadas y Computación",   icon:"📐" },
                  { label:"Semestre",       value:"5to semestre",                           icon:"📅" },
                  { label:"Ubicación",      value:"Estado de México, México",               icon:"📍" },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="info-card">
                    <span className="info-card__icon">{icon}</span>
                    <div>
                      <p className="info-card__label">{label}</p>
                      <p className="info-card__value">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── HABILIDADES ── */}
        <section id="habilidades" style={{ padding: "6rem 2rem", position: "relative" }}>
          <Blob style={{ width:500, height:500, background:"#fbbf24", top:"-5%", left:"-15%", animationDelay:"1s" }} />

          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <SectionTitle
              sub="Stack técnico"
              title="Habilidades"
              desc="Tecnologías y herramientas con las que trabajo actualmente"
            />

            <div style={{ display:"flex", flexDirection:"column", gap:"2.5rem" }}>
              {SKILLS.map(({ cat, color, skills }) => (
                <div key={cat}>
                  <p className="skill-cat-label" style={{ color }}>{cat}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
                    {skills.map((s) => (
                      <Skill key={s} name={s} color={color + "cc"} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── PROYECTOS ── */}
        <section id="proyectos" style={{ padding: "6rem 2rem", position: "relative" }}>
          <Blob style={{ width:450, height:450, background:"#f472b6", bottom:"-5%", right:"-10%", animationDelay:"4s" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionTitle
              sub="Mi trabajo"
              title="Proyectos Destacados"
              desc="Una selección de proyectos que reflejan mis habilidades y pasiones"
            />

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.5rem" }}>
              {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
            </div>

            <div style={{ textAlign:"center", marginTop:"3rem" }}>
              <a
                href="https://github.com/Mouns-a"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn btn-outline"
              >
                🐙 Ver más en GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── INTERESES ── */}
        <section id="intereses" style={{ padding: "6rem 2rem", position: "relative" }}>
          <Blob style={{ width:400, height:400, background:"#818cf8", top:"20%", left:"50%", animationDelay:"5s" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionTitle
              sub="Lo que me mueve"
              title="Intereses & Especialidades"
              desc="Áreas tecnológicas en las que me apasiona profundizar"
            />

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
              {INTERESTS.map((i) => <InterestCard key={i.title} {...i} />)}
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── MORRAS TICS ── */}
        <section id="morras" style={{ padding:"6rem 2rem", position:"relative", overflow:"hidden" }}>
          <Blob style={{ width:600, height:600, background:"#f472b6", top:"-20%", right:"-20%", animationDelay:"0s", opacity:0.25 }} />
          <Blob style={{ width:400, height:400, background:"#c084fc", bottom:"-10%", left:"-10%", animationDelay:"3s" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionTitle
              sub="Nuestra iniciativa"
              title="Morras Tics"
              desc="Comunidad que cofundé para acercar a más mujeres al ámbito tecnológico mediante talleres y actividades."
            />

            <div className="morras__grid">
              <div>
                <div className="morras__card">
                  <p>
                    <strong style={{ color:"#f472b6" }}>Morras Tics</strong> nació como un espacio para compartir conocimiento,
                    crear comunidad y motivar a más chicas a involucrarse en tecnología.
                  </p>
                  <p>
                  Realizamos talleres, actividades y colaboraciones donde aprender se vuelve algo más accesible y divertido.
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/morras_tics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn btn-primary"
                >
                  🌸 Conoce Morras Tics
                </a>
              </div>

              <div className="morras__grid-mini">
                {MORRAS_MINI.map(({ icon, label, desc }) => (
                  <div key={label} className="morras__mini-card">
                    <div className="morras__mini-icon">{icon}</div>
                    <p className="morras__mini-label">{label}</p>
                    <p className="morras__mini-desc">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── EVENTOS ── */}
        <section id="eventos" style={{ padding: "6rem 2rem", position: "relative" }}>
          <Blob style={{ width:400, height:400, background:"#fb923c", top:"10%", right:"-10%", animationDelay:"2s" }} />

          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <SectionTitle
              sub="Presencia activa"
              title="Eventos"
              desc="Congresos, conferencias y hackathons en los que he participado"
            />

            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {EVENTS.map((e) => <EventCard key={e.name} {...e} />)}
            </div>
          </div>
        </section>

        <div className="section-sep" />

        {/* ── CV ── */}
        <section id="cv" style={{ padding: "6rem 2rem", position: "relative" }}>
  <Blob style={{ width:500, height:500, background:"#818cf8", top:"0%", left:"-15%", animationDelay:"1s" }} />

  <div style={{ maxWidth: 900, margin: "0 auto" }}>
    <SectionTitle
      sub="Mi trayectoria"
      title="Currículum"
      desc="Descarga mi CV o conéctate conmigo en redes profesionales"
    />

    <div className="cv__grid">
      {/* Tarjeta descarga */}
      <div className="cv__download-card">
        <div className="cv__download-icon">📄</div>
        <h3 className="cv__download-title">CV Actualizado</h3>

        <p className="cv__download-desc">
          Formación académica, habilidades técnicas, proyectos y
          experiencia en comunidades tech.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=146xL6YI9dtjH3Az5PrPzRqBJQfoiND8u"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn btn-primary"
            style={{
              background: "linear-gradient(135deg,#c084fc,#60a5fa)",
              minWidth: "170px",
              justifyContent: "center",
            }}
          >
            ⬇️ Descargar CV
          </a>

          <a
            href="https://drive.google.com/file/d/146xL6YI9dtjH3Az5PrPzRqBJQfoiND8u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn btn-primary"
            style={{
              background: "linear-gradient(135deg,#c084fc,#60a5fa)",
              minWidth: "170px",
              justifyContent: "center",
            }}
          >
            📄 Ver CV
          </a>
        </div>
      </div>

      {/* Redes */}
      <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
        {SOCIALS.map(({ icon, name, user, href, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
          >
            <div
              className="social-link-card__icon"
              style={{ background: color + "22" }}
            >
              {icon}
            </div>

            <div style={{ flex:1, minWidth:0 }}>
              <p className="social-link-card__name">{name}</p>
              <p className="social-link-card__user">{user}</p>
            </div>

            <span style={{ color, fontSize:"1.1rem" }}>→</span>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

        <div className="section-sep" />

        {/* ── CONTACTO ── */}
        <section id="contacto" style={{ padding:"6rem 2rem 8rem", position:"relative", overflow:"hidden" }}>
          <Blob style={{ width:700, height:700, background:"#f472b6", top:"-30%", left:"50%", transform:"translateX(-50%)", animationDelay:"0s", opacity:0.2 }} />

          <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
            <SectionTitle sub="Hablemos" title="Contacto" />

            <p style={{ color:"rgba(255,255,255,0.7)", fontSize:"1.1rem", lineHeight:1.9, marginBottom:"3.5rem" }}>
                Me gusta participar en proyectos donde pueda aprender, aportar ideas y seguir creciendo profesionalmente.
            </p>

            <div className="contact__cards">
              {CONTACT_INFO.map(({ icon, label, value, href, color }) => {
                const card = (
                  <div
                    className="contact__info-card"
                    style={{ border:`1.5px solid ${color}44` }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                  >
                    <div className="contact__info-icon">{icon}</div>
                    <p className="contact__info-label">{label}</p>
                    <p className="contact__info-value" style={{ color }}>{value}</p>
                  </div>
                );
                return href
                  ? <a key={label} href={href} style={{ textDecoration:"none", display:"block" }}>{card}</a>
                  : <div key={label}>{card}</div>;
              })}
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=monserrathernandezmartinez1@gmail.com"
              className="glow-btn btn-primary"
              style={{
                background:"linear-gradient(135deg,#f472b6,#c084fc,#60a5fa)",
                padding:"18px 48px",
                fontSize:"1.1rem",
                letterSpacing:"0.02em",
              }}
            >
              ✉️ Enviar mensaje
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <p className="footer__name">Monserrat Hernández Martínez</p>
          <p className="footer__copy">© 2026 · Hecho con 💜 y mucho ☕</p>
        </footer>

      </main>
    </>
  );
}
