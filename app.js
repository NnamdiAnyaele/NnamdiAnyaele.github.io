const projects = [
  {
    id: "carbon-connect",
    title: "Carbon Connect",
    category: ["backend", "ai"],
    tag: "AI-powered SaaS",
    subtitle: "Carbon funding discovery and application support platform",
    timeline: "2026",
    role: "Backend Engineer",
    summary:
      "I worked on the backend of a carbon funding platform that helps SMEs discover grant opportunities, qualify against eligibility rules, and generate application support flows.",
    listSummary:
      "FastAPI, PostgreSQL, pgvector, Redis/Valkey, Meilisearch, async workflows, AI-assisted grant support.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Built and maintained FastAPI services for company data, carbon-profile workflows, notifications, and AI-assisted application support.",
      "Worked on PostgreSQL and pgvector-backed data models plus Redis/Valkey-backed asynchronous processing.",
      "Supported a discovery flow across 100k+ grant documents with search-backed qualification and matching workflows.",
      "Handled backend work around ingestion, classification, and reliability improvements for multiple funding sources."
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis/Valkey", "Meilisearch", "AWS"],
    metrics: [
      { value: "100k+", label: "grant documents searchable" },
      { value: "<100ms", label: "search response target" },
      { value: "multi-source", label: "funding data pipeline" }
    ],
    actions: [{ label: "Read backend CV", href: "./assets/Nnamdi_Anyaele_Senior_Backend_CV.pdf", primary: true }]
  },
  {
    id: "point2",
    title: "Point2",
    category: ["backend", "mobility"],
    tag: "Mobility platform",
    subtitle: "Backend platform for mobile and admin products",
    timeline: "2025 - 2026",
    role: "Backend Developer",
    summary:
      "I contributed to a multi-service mobility backend that covers the hard operational layers: auth, operators, bookings, payments, notifications, and admin workflows.",
    listSummary:
      "NestJS microservices, Nx monorepo, PostgreSQL, Prisma, Redis, gRPC, gateway and admin flows.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Built backend services inside an Nx-based NestJS microservices architecture for both mobile and admin-facing products.",
      "Worked across 10+ service domains including gateway, auth, users, operators, bookings, payments, notifications, analytics, and admin.",
      "Designed and updated Prisma-backed PostgreSQL schemas, JWT-based auth flows, and Redis-backed session and caching patterns.",
      "Worked with service-to-service communication over gRPC in a product that spans ride, courier, freight, and tow workflows."
    ],
    stack: ["TypeScript", "NestJS", "Nx", "PostgreSQL", "Prisma", "gRPC", "Redis", "JWT", "Swagger"],
    metrics: [
      { value: "10+", label: "backend service domains" },
      { value: "mobile + admin", label: "product surfaces" },
      { value: "multi-service", label: "mobility model" }
    ],
    actions: [{ label: "Read backend CV", href: "../resume_output/backend_cv/Nnamdi_Anyaele_Senior_Backend_CV.pdf", primary: true }]
  },
  {
    id: "cardinalstone",
    title: "CardinalStone Platforms",
    category: ["backend", "fintech"],
    tag: "Fintech systems",
    subtitle: "Shareholder services, KYC, research, recruitment, and operations tooling",
    timeline: "2021 - Present",
    role: "Software Engineer",
    summary:
      "My work at CardinalStone spans business-critical fintech platforms where user-facing flows and internal operations both depend on stable APIs, clean data handling, and production reliability.",
    listSummary:
      "Fintech workflows across shareholder services, KYC, research, recruitment, admin tools, and internal operations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Delivered backend and full-stack features across shareholder services, research access, recruitment, e-accreditation, KYC, and internal operations support.",
      "Built business workflows for onboarding, portfolio access, customer requests, and internal processing using Node.js with SQL and NoSQL databases.",
      "Worked on production issue resolution, API behavior, database operations, and test-backed improvements for live business applications.",
      "Operated in environments where business correctness and operational continuity matter as much as feature delivery."
    ],
    stack: ["Node.js", "JavaScript", "MongoDB", "MySQL", "PostgreSQL", "Docker", "React"],
    metrics: [
      { value: "8+", label: "platforms delivered" },
      { value: "fintech", label: "regulated product domain" },
      { value: "live ops", label: "production support mindset" }
    ],
    actions: [
      { label: "CS Alpha", href: "https://app.cardinalstone.com/", primary: true },
      { label: "Research Portal", href: "https://research.cardinalstone.com/" }
    ]
  },
  {
    id: "smartdeals",
    title: "SmartDeals",
    category: ["frontend", "fintech"],
    tag: "Commerce product",
    subtitle: "Discount and gamified e-commerce platform",
    timeline: "Selected project",
    role: "Frontend / Product Delivery",
    summary:
      "SmartDeals is one of the places where product flow, user roles, and responsive frontend behavior all had to stay coherent under a more dynamic commerce experience.",
    listSummary:
      "React, Redux, Socket.io, multi-role commerce workflows, campaign-style discount interactions.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Worked on an e-commerce platform serving sellers, customers, partners, event organizers, and advertisers.",
      "Built interfaces and user journeys around discount claiming and gamified deal participation.",
      "Handled frontend delivery for a product with multiple actor types and a more interaction-heavy commerce model."
    ],
    stack: ["React", "Redux", "Socket.io", "JavaScript"],
    metrics: [
      { value: "5", label: "major user groups" },
      { value: "real-time", label: "interaction model" },
      { value: "commerce", label: "product domain" }
    ],
    actions: [{ label: "Open live project", href: "https://app.smartdeals.com.ng/", primary: true }]
  },
  {
    id: "musicbox",
    title: "MusicBox",
    category: ["frontend", "backend"],
    tag: "Product build",
    subtitle: "Music streaming and playlist experience",
    timeline: "Decagon",
    role: "Software Engineer",
    summary:
      "MusicBox was an earlier full-stack product build where I worked across backend logic, frontend interactions, and persistence for a media-style web app.",
    listSummary:
      "Node.js, Express, HTML, CSS, JavaScript, MongoDB, playlist and streaming flows.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Built backend and full-stack features for a web application centered on music discovery, streaming, and playlists.",
      "Worked across Node.js, Express.js, JavaScript, HTML, CSS, and MongoDB.",
      "Used the project to ship product behavior across both interface and data layers."
    ],
    stack: ["Node.js", "Express.js", "JavaScript", "MongoDB", "HTML", "CSS"],
    metrics: [
      { value: "full stack", label: "delivery scope" },
      { value: "media", label: "product domain" },
      { value: "playlists", label: "core user flow" }
    ],
    actions: [{ label: "Open live project", href: "https://themusicbox.netlify.app", primary: true }]
  }
];

const projectList = document.getElementById("project-list");
const filterButtons = document.querySelectorAll(".filter-button");

const detailImage = document.getElementById("detail-image");
const detailTag = document.getElementById("detail-tag");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailDate = document.getElementById("detail-date");
const detailRole = document.getElementById("detail-role");
const detailSummary = document.getElementById("detail-summary");
const detailHighlights = document.getElementById("detail-highlights");
const detailStack = document.getElementById("detail-stack");
const detailMetrics = document.getElementById("detail-metrics");
const detailActions = document.getElementById("detail-actions");

let activeFilter = "all";
let activeProjectId = projects[0].id;

function filteredProjects() {
  if (activeFilter === "all") return projects;
  return projects.filter((project) => project.category.includes(activeFilter));
}

function renderProjectList() {
  const items = filteredProjects();
  if (!items.some((project) => project.id === activeProjectId)) {
    activeProjectId = items[0].id;
  }

  projectList.innerHTML = items
    .map(
      (project) => `
        <button class="project-list-item ${project.id === activeProjectId ? "active" : ""}" data-id="${project.id}">
          <strong>${project.title}</strong>
          <div class="project-list-meta">
            <span>${project.role}</span>
            <span>${project.timeline}</span>
          </div>
          <p class="project-list-copy">${project.listSummary}</p>
        </button>
      `
    )
    .join("");

  projectList.querySelectorAll(".project-list-item").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.id;
      renderProjectList();
      renderProjectDetail();
    });
  });
}

function renderProjectDetail() {
  const project = projects.find((item) => item.id === activeProjectId);
  detailImage.src = project.image;
  detailImage.alt = `${project.title} cover image`;
  detailTag.textContent = project.tag;
  detailTitle.textContent = project.title;
  detailSubtitle.textContent = project.subtitle;
  detailDate.textContent = project.timeline;
  detailRole.textContent = project.role;
  detailSummary.textContent = project.summary;

  detailHighlights.innerHTML = project.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");

  detailStack.innerHTML = project.stack
    .map((item) => `<span class="stack-pill">${item}</span>`)
    .join("");

  detailMetrics.innerHTML = project.metrics
    .map(
      (metric) => `
        <article class="metric">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </article>
      `
    )
    .join("");

  detailActions.innerHTML = project.actions
    .map(
      (action) => `
        <a class="action-link ${action.primary ? "primary" : ""}" href="${action.href}">
          ${action.label}
        </a>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjectList();
    renderProjectDetail();
  });
});

renderProjectList();
renderProjectDetail();
