// Centralized portfolio data — sourced from Profile.pdf and Resumen Ejecutivo.docx

export const profile = {
  name: "Gonzalo Callejas Aguero",
  firstName: "Gonzalo",
  lastName: "Callejas Aguero",
  role: "Full Stack Developer",
  roleSubtitle: "React · Node · Python — abierto a remoto",
  tagline: "Full Stack Developer apasionado por crear soluciones web modernas y eficientes.",
  location: "Córdoba, Argentina",
  phone: "+54 351 770 9203",
  phoneRaw: "3517709203",
  email: "gonzalocallejas4@gmail.com",
  linkedin: "https://www.linkedin.com/in/gonzalo-callejas-aguero-797735288",
  linkedinHandle: "gonzalo-callejas-aguero-797735288",
  company: "VerticeDigitals",
  companyUrl: "https://verticedigitals.netlify.app/",
  github: "https://github.com/",
  avatar: "/avatar.png",
  available: true,
  about: [
    "Soy Full Stack Developer con foco en construir aplicaciones web modernas, rápidas y mantenibles. Mi stack principal incluye JavaScript/TypeScript, React, Node.js y bases de datos SQL/NoSQL, complementado con Python para servicios backend.",
    "Durante los últimos años desarrollé en producción Óptica-TeMiro, una tienda online de lentes con lógica de negocio compleja: configurador de cristales con cálculo de precios dinámico, checkout multi-paso, generación de archivos DXF para laboratorios de fabricación e integración con WhatsApp Cloud API para atención automatizada. El despliegue se realizó en AWS EC2 con base MySQL.",
    "También impulsé VerticeDigitals, una plataforma de servicios digitales construida con HTML5 y Tailwind CSS con arquitectura responsive. Actualmente busco oportunidades en empresas que valoren la innovación y el aprendizaje continuo, en roles de desarrollo full stack, frontend o backend, con apertura a trabajo remoto.",
  ],
  languages: [
    { name: "Español", level: "Nativo o bilingüe", proficiency: 100 },
    { name: "Inglés", level: "Profesional funcional", proficiency: 75 },
  ],
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      description: "Diseño web responsive, HTML5 semántico, CSS3 moderno y accesibilidad.",
    },
    {
      title: "Desarrollador Full Stack Junior — Java: Servicios Web",
      issuer: "ISPC",
      description: "Construcción de servicios web con Java, APIs REST y principios de arquitectura backend.",
    },
    {
      title: "Programador Responsive Web Design",
      issuer: "ISPC",
      description: "Frontend responsive con foco en UX, layouts fluidos y buenas prácticas de maquetado.",
    },
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / FastAPI", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "APIs REST", level: 85 },
    ],
  },
  {
    title: "Base de Datos & DevOps",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS EC2", level: 72 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  image: string;
  stack: string[];
  highlights: string[];
  status: "Producción" | "Activo" | "En desarrollo";
  url?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "optica-temiro",
    title: "Óptica-TeMiro",
    tagline: "E-commerce de lentes con configurador de cristales",
    description:
      "Tienda online de lentes en producción con lógica de negocio compleja, configurador dinámico de cristales y generación de archivos DXF para laboratorios de fabricación.",
    longDescription: [
      "Plataforma e-commerce de óptica en producción con catálogo de armazones, lentes y tratamientos. Incluye un configurador de cristales con cálculo de precios dinámico según graduación, material y filtros.",
      "El checkout multi-paso integra generación automática de archivos DXF para envío a laboratorios de fabricación, y la conexión con WhatsApp Cloud API automatiza la atención al cliente. Despliegue en AWS EC2 con base MySQL.",
    ],
    image: "/projects/optica-temiro.png",
    stack: ["React", "TypeScript", "Tailwind", "Python", "FastAPI", "MySQL", "AWS", "WhatsApp API"],
    highlights: [
      "Configurador de cristales con pricing dinámico",
      "Checkout multi-paso + generación DXF",
      "Integración WhatsApp Cloud API",
      "Despliegue en AWS EC2",
    ],
    status: "Producción",
    featured: true,
  },
  {
    id: "vertice-digitals",
    title: "VerticeDigitals",
    tagline: "Plataforma de servicios digitales",
    description:
      "Sitio web para agencia de servicios digitales construido con HTML5 y Tailwind CSS, con arquitectura responsive y foco en performance.",
    longDescription: [
      "Landing y portfolio de servicios digitales con identidad de marca propia. Diseño mobile-first, optimización de imágenes y arquitectura responsive.",
      "Desplegado en Netlify con CI/CD automático desde el repositorio, garantizando actualizaciones continuas y certificados SSL gestionados por la plataforma.",
    ],
    image: "/projects/vertice-digitals.png",
    stack: ["HTML5", "Tailwind CSS", "JavaScript", "Netlify", "Responsive Design"],
    highlights: [
      "Diseño responsive mobile-first",
      "Despliegue continuo en Netlify",
      "Optimización de imágenes y SEO",
    ],
    status: "Activo",
    url: "https://verticedigitals.netlify.app/",
    featured: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Óptica-TeMiro",
    type: "Autónomo · Remoto",
    period: "Marzo 2022 — Agosto 2024",
    duration: "2 años 6 meses",
    location: "Córdoba, Argentina",
    description:
      "Desarrollo end-to-end de una tienda online de lentes en producción, con lógica de negocio compleja y despliegue en AWS EC2.",
    achievements: [
      "Desarrollé una tienda online de lentes en producción con lógica de negocio compleja.",
      "Implementé un configurador de cristales con cálculo de precios dinámico.",
      "Diseñé un checkout multi-paso e integré generación de archivos DXF para laboratorios de fabricación.",
      "Conecté WhatsApp Cloud API para atención al cliente automatizada.",
      "Despliegue en AWS EC2 con base MySQL.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Python", "FastAPI", "MySQL", "AWS", "WhatsApp API"],
  },
];

export type Education = {
  title: string;
  institution: string;
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    title: "Tecnicatura Superior en Desarrollo Web y Aplicaciones Digitales",
    institution: "Instituto Superior Politécnico Córdoba (ISPC)",
    period: "Marzo 2022 — Agosto 2024",
    location: "Córdoba, Argentina",
  },
  {
    title: "Desarrollo Web y Aplicaciones Digitales",
    institution: "Instituto Superior Politécnico Córdoba",
    period: "2022 — 2023",
    location: "Córdoba, Argentina",
  },
];

export const navItems = [
  { id: "hero", label: "Inicio", icon: "home" },
  { id: "about", label: "Sobre mí", icon: "user" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "projects", label: "Proyectos", icon: "briefcase" },
  { id: "experience", label: "Experiencia", icon: "history" },
  { id: "contact", label: "Contacto", icon: "mail" },
] as const;
