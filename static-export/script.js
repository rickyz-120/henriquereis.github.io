// =============================================================================
// PORTFOLIO - SCRIPT.JS
// Toda a interatividade: navbar, typewriter, particulas, scroll reveal, etc.
// =============================================================================

// ---------- DADOS DO PORTFOLIO (EDITE AQUI) ----------
const portfolioData = {
  personalInfo: {
    name: "Henrique Reis",
    role: "Analista de BI",
    tagline: "Transformando dados em decisoes estrategicas",
    description:
      "Analista de Business Intelligence com paixao por Ciencia de Dados. Especializado em transformar dados brutos em insights acionaveis, construindo dashboards interativos e modelos preditivos que impulsionam decisoes de negocio.",
    location: "Brasil",
    email: "seu.email@exemplo.com",
    availability: "Disponivel para projetos",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/henrique-reis-br/",
    github: "https://github.com/rickyz-120",
    // Adicione mais links conforme necessario:
    // twitter: "https://twitter.com/seu-usuario",
    // kaggle: "https://kaggle.com/seu-usuario",
  },

  aboutMe: {
    title: "Sobre Mim",
    paragraphs: [
      "Sou um profissional apaixonado por dados, atuando como Analista de BI com foco crescente em Ciencia de Dados. Minha jornada comecou na area de negocios, o que me deu uma visao unica de como os dados podem transformar organizacoes.",
      "Atualmente, trabalho criando dashboards e relatorios que auxiliam a tomada de decisao em nivel estrategico. Estou em constante evolucao, aprofundando meus conhecimentos em Machine Learning, Estatistica e programacao para entregar solucoes cada vez mais robustas.",
      "Acredito que a verdadeira magia acontece na interseccao entre dados e negocios - e e exatamente nesse espaco que eu opero.",
    ],
  },

  // Categorias de skills - adicione, remova ou edite livremente
  // Niveis: "Avancado" | "Intermediario" | "Basico"
  // Icones disponiveis: bar-chart, pie-chart, line-chart, layout, code, database,
  //   terminal, braces, table, brain, calculator, trending-up, cloud, server
  skillCategories: [
    {
      category: "Visualizacao de Dados",
      description: "Ferramentas para criar dashboards e relatorios interativos",
      skills: [
        { name: "Power BI", level: "Avancado", icon: "bar-chart" },
        { name: "Tableau", level: "Intermediario", icon: "pie-chart" },
        { name: "Looker Studio", level: "Intermediario", icon: "line-chart" },
        { name: "Metabase", level: "Basico", icon: "layout" },
      ],
    },
    {
      category: "Linguagens & Programacao",
      description: "Linguagens utilizadas no dia a dia para analise e automacao",
      skills: [
        { name: "Python", level: "Avancado", icon: "code" },
        { name: "SQL", level: "Avancado", icon: "database" },
        { name: "R", level: "Intermediario", icon: "terminal" },
        { name: "DAX / M", level: "Avancado", icon: "braces" },
      ],
    },
    {
      category: "Ciencia de Dados & ML",
      description: "Bibliotecas e frameworks para modelagem e analise",
      skills: [
        { name: "Pandas", level: "Avancado", icon: "table" },
        { name: "Scikit-learn", level: "Intermediario", icon: "brain" },
        { name: "NumPy", level: "Intermediario", icon: "calculator" },
        { name: "Matplotlib / Seaborn", level: "Intermediario", icon: "trending-up" },
      ],
    },
    {
      category: "Banco de Dados & Cloud",
      description: "Infraestrutura e armazenamento de dados",
      skills: [
        { name: "PostgreSQL", level: "Avancado", icon: "database" },
        { name: "MySQL", level: "Intermediario", icon: "database" },
        { name: "BigQuery", level: "Intermediario", icon: "cloud" },
        { name: "Azure", level: "Basico", icon: "server" },
      ],
    },
  ],

  // Projetos - status: "publicado" | "em-breve"
  projects: [
    {
      title: "Dashboard de Vendas",
      description:
        "Dashboard interativo em Power BI para analise de performance de vendas com KPIs, segmentacao por regiao e previsao de tendencias.",
      tags: ["Power BI", "DAX", "SQL"],
      link: "",
      github: "",
      status: "em-breve",
    },
    {
      title: "Analise Preditiva de Churn",
      description:
        "Modelo de Machine Learning para prever a evasao de clientes utilizando Python e Scikit-learn, com feature engineering e validacao cruzada.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      link: "",
      github: "",
      status: "em-breve",
    },
    {
      title: "ETL Pipeline Automatizado",
      description:
        "Pipeline de dados automatizado para extracao, transformacao e carga de dados de multiplas fontes para um Data Warehouse.",
      tags: ["Python", "SQL", "Airflow"],
      link: "",
      github: "",
      status: "em-breve",
    },
    {
      title: "Analise Exploratoria de Dados",
      description:
        "Projeto completo de EDA com visualizacoes estatisticas, identificacao de padroes e insights acionaveis a partir de datasets publicos.",
      tags: ["Python", "Matplotlib", "Pandas"],
      link: "",
      github: "",
      status: "em-breve",
    },
  ],

  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
};

// ---------- SVG ICONS ----------
const icons = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  "arrow-down": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  "arrow-up-right": `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
  "map-pin": `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  "external-link": `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  // Skill icons
  "bar-chart": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
  "pie-chart": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  "line-chart": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
  braces: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`,
  table: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  "trending-up": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
};

// ---------- HELPER: get icon SVG ----------
function getIcon(name) {
  return icons[name] || "";
}

// ---------- HELPER: skill level -> bar width ----------
function levelToWidth(level) {
  switch (level) {
    case "Avancado": return "100%";
    case "Intermediario": return "66%";
    case "Basico": return "33%";
    default: return "50%";
  }
}

function levelToClass(level) {
  switch (level) {
    case "Avancado": return "level-avancado";
    case "Intermediario": return "level-intermediario";
    case "Basico": return "level-basico";
    default: return "level-intermediario";
  }
}

// =============================================================================
// BUILD PAGE
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const d = portfolioData;
  const app = document.getElementById("app");

  app.innerHTML = `
    ${buildNavbar(d)}
    <main>
      ${buildHero(d)}
      ${buildAbout(d)}
      ${buildSkills(d)}
      ${buildProjects(d)}
      ${buildContact(d)}
    </main>
    ${buildFooter(d)}
  `;

  // Initialize all interactive features
  initNavbar(d);
  initHero();
  initParticles();
  initTypewriter(d);
  initScrollReveal();
  initSkillBars();
});

// ---------- NAVBAR ----------
function buildNavbar(d) {
  const links = d.navItems
    .map(
      (item) =>
        `<a href="${item.href}" data-nav-link>${item.label}</a>`
    )
    .join("");

  const mobileLinks = d.navItems
    .map(
      (item) =>
        `<a href="${item.href}" data-mobile-link>${item.label}</a>`
    )
    .join("");

  const firstName = d.personalInfo.name.split(" ")[0];

  return `
    <header class="navbar" id="navbar">
      <nav class="navbar-inner">
        <a href="#inicio" class="navbar-logo">&lt;${firstName} /&gt;</a>
        <div class="navbar-links">${links}</div>
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu">
          ${getIcon("menu")}
        </button>
      </nav>
      <div class="mobile-menu" id="mobileMenu">${mobileLinks}</div>
    </header>
  `;
}

function initNavbar(d) {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  let mobileOpen = false;

  // Scroll detection
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    mobileOpen = !mobileOpen;
    mobileMenu.classList.toggle("open", mobileOpen);
    toggle.innerHTML = mobileOpen ? getIcon("x") : getIcon("menu");
    toggle.setAttribute("aria-label", mobileOpen ? "Fechar menu" : "Abrir menu");
  });

  // Close mobile on link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileOpen = false;
      mobileMenu.classList.remove("open");
      toggle.innerHTML = getIcon("menu");
    });
  });

  // Active section detection
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          document.querySelectorAll("[data-nav-link], [data-mobile-link]").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -60% 0px" }
  );

  d.navItems.forEach((item) => {
    const el = document.querySelector(item.href);
    if (el) observer.observe(el);
  });
}

// ---------- HERO ----------
function buildHero(d) {
  const info = d.personalInfo;
  const socials = d.socialLinks;

  let socialBtns = "";
  if (socials.linkedin) {
    socialBtns += `<a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">${getIcon("linkedin")}</a>`;
  }
  if (socials.github) {
    socialBtns += `<a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">${getIcon("github")}</a>`;
  }

  return `
    <section id="inicio" class="hero">
      <div class="hero-particles" id="particles" aria-hidden="true"></div>
      <div class="hero-glow-1" aria-hidden="true"></div>
      <div class="hero-glow-2" aria-hidden="true"></div>

      <div class="hero-content" id="heroContent">
        <div class="status-badge">
          <span class="status-dot-wrapper">
            <span class="status-dot-ping"></span>
            <span class="status-dot"></span>
          </span>
          <span class="status-text">${info.availability}</span>
        </div>

        <h1>${info.name}</h1>

        <div class="hero-role-line">
          <span>${info.role}</span>
          <span class="role-separator">/</span>
          <span class="typewriter" id="typewriter"></span>
        </div>

        <p class="hero-tagline">${info.tagline}</p>

        <div class="hero-location">
          ${getIcon("map-pin")}
          <span>${info.location}</span>
        </div>

        <div class="hero-socials">${socialBtns}</div>

        <a href="#sobre" class="scroll-indicator" aria-label="Rolar para a secao Sobre">
          ${getIcon("arrow-down")}
        </a>
      </div>
    </section>
  `;
}

function initHero() {
  requestAnimationFrame(() => {
    const el = document.getElementById("heroContent");
    if (el) el.classList.add("visible");
  });
}

function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${Math.random() * 5}s;
      animation-duration: ${Math.random() * 10 + 10}s;
    `;
    container.appendChild(p);
  }
}

function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const texts = [
    "Data Science",
    "Machine Learning",
    "Business Intelligence",
    "Data Analytics",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = texts[textIndex];

    if (!isDeleting) {
      charIndex++;
      el.innerHTML = current.slice(0, charIndex) + '<span class="typewriter-cursor">|</span>';
      if (charIndex === current.length) {
        setTimeout(() => {
          isDeleting = true;
          tick();
        }, 2000);
        return;
      }
      setTimeout(tick, 80);
    } else {
      charIndex--;
      el.innerHTML = current.slice(0, charIndex) + '<span class="typewriter-cursor">|</span>';
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 30);
    }
  }

  tick();
}

// ---------- ABOUT ----------
function buildAbout(d) {
  const about = d.aboutMe;

  const paragraphs = about.paragraphs
    .map(
      (p, i) =>
        `<p class="fade-up fade-up-delay-${i + 1}">${p}</p>`
    )
    .join("");

  return `
    <section id="sobre" class="about" data-reveal>
      <div class="section-line" aria-hidden="true"></div>
      <div class="container">
        <div class="fade-up">
          <div class="section-label">
            <div class="section-label-line"></div>
            <span class="section-label-number">01</span>
          </div>
          <h2 class="section-title">${about.title}</h2>
        </div>

        <div class="about-grid">
          <div class="about-paragraphs">${paragraphs}</div>

          <div class="about-sidebar fade-up fade-up-delay-3">
            <div class="focus-card">
              <h3>Foco Atual</h3>
              <ul>
                <li><span class="focus-dot"></span> Business Intelligence</li>
                <li><span class="focus-dot"></span> Ciencia de Dados</li>
                <li><span class="focus-dot"></span> Machine Learning</li>
                <li><span class="focus-dot"></span> Analise Exploratoria</li>
              </ul>
            </div>

            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-value">BI</div>
                <div class="stat-label">Area Principal</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">DS</div>
                <div class="stat-label">Em Evolucao</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- SKILLS ----------
function buildSkills(d) {
  const cards = d.skillCategories
    .map((cat, catIndex) => {
      const skillItems = cat.skills
        .map(
          (skill) => `
        <div class="skill-item">
          <div class="skill-header">
            <div class="skill-name">
              <div class="skill-icon">${getIcon(skill.icon)}</div>
              <span>${skill.name}</span>
            </div>
            <span class="skill-level ${levelToClass(skill.level)}">${skill.level}</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-width="${levelToWidth(skill.level)}"></div>
          </div>
        </div>
      `
        )
        .join("");

      return `
        <div class="skill-category-card fade-up fade-up-delay-${catIndex + 1}">
          <h3>${cat.category}</h3>
          <p>${cat.description}</p>
          ${skillItems}
        </div>
      `;
    })
    .join("");

  return `
    <section id="habilidades" class="skills" data-reveal data-skills>
      <div class="section-line" aria-hidden="true"></div>
      <div class="container">
        <div class="fade-up">
          <div class="section-label">
            <div class="section-label-line"></div>
            <span class="section-label-number">02</span>
          </div>
          <h2 class="section-title">Habilidades & Ferramentas</h2>
          <p class="section-desc">
            Tecnologias e ferramentas que utilizo para transformar dados em valor.
          </p>
        </div>
        <div class="skills-grid">${cards}</div>
      </div>
    </section>
  `;
}

function initSkillBars() {
  const skillsSection = document.querySelector("[data-skills]");
  if (!skillsSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(skillsSection);
}

// ---------- PROJECTS ----------
function buildProjects(d) {
  const cards = d.projects
    .map((project, i) => {
      const statusBadge =
        project.status === "em-breve"
          ? `<div class="project-status">${getIcon("clock")}<span>Em Breve</span></div>`
          : "";

      const tags = project.tags
        .map((tag) => `<span class="project-tag">${tag}</span>`)
        .join("");

      let links = "";
      if (project.link) {
        links += `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon("external-link")} Ver Projeto</a>`;
      }
      if (project.github) {
        links += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon("github")} Codigo</a>`;
      }
      if (project.status === "em-breve" && !project.link && !project.github) {
        links = `<span class="project-coming-soon">Projeto em desenvolvimento...</span>`;
      }

      return `
        <article class="project-card fade-up fade-up-delay-${(i % 4) + 1}">
          ${statusBadge}
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">${tags}</div>
            <div class="project-links">${links}</div>
          </div>
          <div class="project-glow" aria-hidden="true"></div>
        </article>
      `;
    })
    .join("");

  return `
    <section id="projetos" class="projects" data-reveal>
      <div class="section-line" aria-hidden="true"></div>
      <div class="container">
        <div class="fade-up">
          <div class="section-label">
            <div class="section-label-line"></div>
            <span class="section-label-number">03</span>
          </div>
          <h2 class="section-title">Projetos</h2>
          <p class="section-desc">
            Uma selecao de projetos que demonstram minhas habilidades em analise de dados, 
            visualizacao e ciencia de dados.
          </p>
        </div>
        <div class="projects-grid">${cards}</div>
      </div>
    </section>
  `;
}

// ---------- CONTACT ----------
function buildContact(d) {
  const info = d.personalInfo;
  const social = d.socialLinks;

  let cards = `
    <a href="mailto:${info.email}" class="contact-card">
      <div class="contact-icon">${getIcon("mail")}</div>
      <div>
        <h3>Email</h3>
        <p>${info.email}</p>
      </div>
      <div class="contact-arrow">Enviar email ${getIcon("arrow-up-right")}</div>
    </a>
  `;

  if (social.linkedin) {
    cards += `
      <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="contact-icon">${getIcon("linkedin")}</div>
        <div>
          <h3>LinkedIn</h3>
          <p>Vamos nos conectar</p>
        </div>
        <div class="contact-arrow">Ver perfil ${getIcon("arrow-up-right")}</div>
      </a>
    `;
  }

  if (social.github) {
    cards += `
      <a href="${social.github}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="contact-icon">${getIcon("github")}</div>
        <div>
          <h3>GitHub</h3>
          <p>Veja meus repositorios</p>
        </div>
        <div class="contact-arrow">Ver perfil ${getIcon("arrow-up-right")}</div>
      </a>
    `;
  }

  return `
    <section id="contato" class="contact" data-reveal>
      <div class="section-line" aria-hidden="true"></div>
      <div class="container">
        <div class="fade-up">
          <div class="section-label">
            <div class="section-label-line"></div>
            <span class="section-label-number">04</span>
          </div>
          <h2 class="section-title">Contato</h2>
          <p class="section-desc">
            Tem um projeto interessante ou quer trocar ideias sobre dados? 
            Ficarei feliz em conversar.
          </p>
        </div>
        <div class="contact-grid fade-up fade-up-delay-2">${cards}</div>
      </div>
    </section>
  `;
}

// ---------- FOOTER ----------
function buildFooter(d) {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-copy">${year} ${d.personalInfo.name}. Todos os direitos reservados.</p>
        <p class="footer-tech">Feito com HTML, CSS & JS</p>
      </div>
    </footer>
  `;
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reveal the section's fade-up elements
          entry.target.querySelectorAll(".fade-up").forEach((el) => {
            el.classList.add("visible");
          });
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-reveal]").forEach((section) => {
    observer.observe(section);
  });
}
