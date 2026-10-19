// All visible copy lives here, in English and Spanish.
// To add a project, append an entry to `projects`; images go in public/projects/ (1280x800).

export type Locale = "en" | "es";
export type Text = Record<Locale, string>;

export type LinkKind = "live" | "code" | "play";

export type Project = {
  id: string;
  title: Text;
  kind: Text;
  year: string;
  summary: Text;
  tags: string[];
  links: { kind: LinkKind; href: string }[];
  image?: { src: string; alt: Text; pixelated?: boolean };
  featured?: boolean;
};

export type Job = {
  role: Text;
  org: Text;
  period: Text;
  detail: Text;
};

export type SkillGroup = {
  name: Text;
  items: string[];
};

export const profile = {
  name: "Agustín Villamil",
  email: "villa.09.agus@gmail.com",
  linkedin: "https://www.linkedin.com/in/agustin-villamil/",
  github: "https://github.com/agusvillamil",
  // Portrait 4:5, shown in the hero frame. Set to undefined to show the "AV" placeholder.
  photo: "/agustin.webp" as string | undefined,
  cv: {
    en: "/cv/Agustin-Villamil-CV-EN.pdf",
    es: "/cv/Agustin-Villamil-CV-ES.pdf",
  } satisfies Text,
};

export const ui = {
  meta: {
    title: {
      en: "Agustín Villamil | Full-stack developer",
      es: "Agustín Villamil | Desarrollador full stack",
    },
    description: {
      en: "Junior full-stack developer from Bahía Blanca, Argentina. Projects with TypeScript, React, Node.js, Python and PostgreSQL.",
      es: "Desarrollador full stack junior de Bahía Blanca, Argentina. Proyectos con TypeScript, React, Node.js, Python y PostgreSQL.",
    },
  },
  nav: {
    projects: { en: "Projects", es: "Proyectos" },
    experience: { en: "Experience", es: "Experiencia" },
    skills: { en: "Skills", es: "Habilidades" },
    contact: { en: "Contact", es: "Contacto" },
    switchTo: { en: "Ver en español", es: "View in English" },
  },
  hero: {
    intro: {
      en: "Junior full-stack developer. I build web apps, APIs and RAG systems with TypeScript, React, Node.js and Python.",
      es: "Desarrollador full stack junior. Construyo aplicaciones web, APIs y sistemas RAG con TypeScript, React, Node.js y Python.",
    },
    viewProjects: { en: "View projects", es: "Ver proyectos" },
    downloadCv: { en: "Download CV", es: "Descargar CV" },
    photoAlt: { en: "Portrait of Agustín Villamil", es: "Retrato de Agustín Villamil" },
  },
  about: {
    label: { en: "About me", es: "Sobre mí" },
  },
  projects: {
    title: { en: "Projects", es: "Proyectos" },
    intro: {
      en: "Client work, personal tools, game jams and university projects.",
      es: "Trabajos para clientes, herramientas propias, game jams y proyectos de la facultad.",
    },
    links: {
      live: { en: "Live site", es: "Ver sitio" },
      code: { en: "Code", es: "Código" },
      play: { en: "Play", es: "Jugar" },
    } satisfies Record<LinkKind, Text>,
  },
  experience: {
    title: { en: "Experience", es: "Experiencia" },
  },
  skills: {
    title: { en: "Skills", es: "Habilidades" },
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    body: {
      en: "I'm looking for my first role as a junior developer. Email is the fastest way to reach me.",
      es: "Busco mi primer puesto como desarrollador junior. La forma más rápida de contactarme es por email.",
    },
  },
  footer: {
    builtWith: { en: "Built with React and Vite.", es: "Hecho con React y Vite." },
  },
};

// Rendered as the terminal window under the hero.
export const terminal: { key: string; value: Text | string[] | Record<Locale, string[]> }[] = [
  { key: "location", value: { en: "Bahía Blanca, Argentina", es: "Bahía Blanca, Argentina" } },
  {
    key: "education",
    value: {
      en: "Information Systems Engineering, UNS (expected 2027)",
      es: "Ingeniería en Sistemas de Información, UNS (graduación estimada 2027)",
    },
  },
  {
    key: "now",
    value: {
      en: ["Teaching assistant at UNS", "Medical interpreter"],
      es: ["Ayudante de docencia en la UNS", "Intérprete médico"],
    },
  },
  { key: "stack", value: ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL"] },
  {
    key: "languages",
    value: {
      en: ["Spanish (native)", "English (C1)"],
      es: ["Español (nativo)", "Inglés (C1)"],
    },
  },
];

export const projects: Project[] = [
  {
    id: "hal2026",
    featured: true,
    title: { en: "HAL 2026", es: "HAL 2026" },
    kind: { en: "Personal project", es: "Proyecto personal" },
    year: "2026",
    summary: {
      en: "A RAG assistant for the Physics I course at UNS. It answers questions and solves exercises from 34 indexed documents, with LaTeX formulas, conversation memory and free-body diagrams.",
      es: "Asistente RAG para Física I de la UNS. Responde consultas y resuelve ejercicios a partir de 34 documentos indexados, con fórmulas en LaTeX, memoria de conversación y diagramas de cuerpo libre.",
    },
    tags: ["Python", "FastAPI", "ChromaDB", "Groq", "Next.js", "TypeScript"],
    links: [
      { kind: "live", href: "https://hal2026.dev.ar" },
      { kind: "code", href: "https://github.com/agusvillamil/hal2026" },
    ],
    image: {
      src: "/projects/hal2026.webp",
      alt: {
        en: "HAL 2026 chat screen showing motion equations rendered in LaTeX",
        es: "Pantalla de chat de HAL 2026 con ecuaciones de movimiento en LaTeX",
      },
    },
  },
  {
    id: "aura-skin",
    title: { en: "Aura Skin", es: "Aura Skin" },
    kind: { en: "Client project", es: "Proyecto para cliente" },
    year: "2026",
    summary: {
      en: "Online store for a beauty and gift shop in Bahía Blanca, live and taking real payments. PostgreSQL computes totals and updates stock atomically, so the browser never decides the price.",
      es: "Tienda online para un emprendimiento de perfumería y regalos de Bahía Blanca, en producción y con pagos reales. PostgreSQL calcula los importes y descuenta el stock de forma atómica, así que el navegador nunca decide el precio.",
    },
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Mercado Pago", "Playwright"],
    links: [{ kind: "live", href: "https://auraskinbb.com.ar" }],
    image: {
      src: "/projects/aura-skin.webp",
      alt: {
        en: "Aura Skin home page with product photos",
        es: "Página de inicio de Aura Skin con fotos de productos",
      },
    },
  },
  {
    id: "palma-turismo",
    title: { en: "Palma Turismo", es: "Palma Turismo" },
    kind: { en: "University team project", es: "Proyecto universitario en equipo" },
    year: "2026",
    summary: {
      en: "Booking platform for a travel agency in Coronel Suárez, built by a university team. I worked on bookings, Mercado Pago payments, the admin panel and passenger management.",
      es: "Plataforma de reservas para una agencia de viajes de Coronel Suárez, hecha en equipo en la facultad. Trabajé en reservas, pagos con Mercado Pago, el panel administrativo y la gestión de pasajeros.",
    },
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    links: [{ kind: "live", href: "https://palma-turismo.palmaturismo.workers.dev" }],
    image: {
      src: "/projects/palma-turismo.webp",
      alt: { en: "Palma Turismo home page", es: "Página de inicio de Palma Turismo" },
    },
  },
  {
    id: "wellness-catalog",
    title: { en: "Catalog for a wellness brand", es: "Catálogo para una marca de bienestar" },
    kind: { en: "Client project", es: "Proyecto para cliente" },
    year: "2026",
    summary: {
      en: "Product catalog for a wellness brand in Mexico, with filters, a cart that sends the order over WhatsApp and a private admin panel. The API is written in PHP so it runs on low-cost shared hosting.",
      es: "Catálogo de productos para una marca de bienestar en México, con filtros, un carrito que envía el pedido por WhatsApp y un panel privado de administración. La API está en PHP para que funcione en un hosting compartido económico.",
    },
    tags: ["React", "Vite", "PHP", "MariaDB", "Google Analytics"],
    links: [{ kind: "live", href: "https://thiagotokani.com" }],
    image: {
      src: "/projects/wellness-catalog.webp",
      alt: {
        en: "Product grid with category filters",
        es: "Grilla de productos con filtros por categoría",
      },
    },
  },
  {
    id: "speech-assistant",
    title: { en: "Speech translation assistant", es: "Asistente de traducción de voz" },
    kind: { en: "Personal project", es: "Proyecto personal" },
    year: "2026",
    summary: {
      en: "Offline desktop tool that transcribes system audio with Whisper and translates each sentence between English and Spanish with a local model. I benchmarked five models on public interpreting practice material.",
      es: "Herramienta de escritorio sin conexión que transcribe el audio del sistema con Whisper y traduce cada frase entre inglés y español con un modelo local. Comparé cinco modelos con material público de práctica para intérpretes.",
    },
    tags: ["Python", "PySide6", "whisper.cpp", "Ollama", "Vulkan"],
    links: [{ kind: "code", href: "https://github.com/agusvillamil/Transcripcion" }],
  },
  {
    id: "run-godin-run",
    title: { en: "Run Godin Run!", es: "Run Godin Run!" },
    kind: { en: "Game jam", es: "Game jam" },
    year: "2024",
    summary: {
      en: "Endless runner where a platypus dashes through a museum, made with Grupo Malva for Dvbahía's 2024 game jam. I wrote all of the game's code. In 2026 it got bug fixes, final polish and a browser version.",
      es: "Endless runner en el que un ornitorrinco corre por un museo, hecho con Grupo Malva para la jam de Dvbahía 2024. Programé todo el juego. En 2026 se corrigieron errores, se terminó de pulir y se sumó una versión para navegador.",
    },
    tags: ["C#", "Unity", "Android", "WebGL"],
    links: [
      // Build served from the agusvillamil/run-godin-run repo (GitHub Pages project site).
      { kind: "play", href: "/run-godin-run/" },
      { kind: "code", href: "https://github.com/agusvillamil/RunGodinRun" },
    ],
    image: {
      src: "/projects/run-godin-run.webp",
      pixelated: true,
      alt: {
        en: "Gameplay: the platypus runs past two gargoyles and a painting",
        es: "Partida: el ornitorrinco corre entre dos gárgolas y un cuadro",
      },
    },
  },
  {
    id: "bubble-defense",
    title: { en: "Bubble Defense", es: "Bubble Defense" },
    kind: { en: "Game jam", es: "Game jam" },
    year: "2025",
    summary: {
      en: "Tower defense meets survival, made by a team of seven for Global Game Jam 2025. I built the main menu, the shop and its coin system, the 15-minute timer and the HUD.",
      es: "Mezcla de tower defense y supervivencia, hecha por un equipo de siete para la Global Game Jam 2025. Hice el menú principal, la tienda con su sistema de monedas, el temporizador de 15 minutos y el HUD.",
    },
    tags: ["C#", "Unity 6", "URP 2D"],
    links: [],
    image: {
      src: "/projects/bubble-defense.webp",
      pixelated: true,
      alt: { en: "Bubble Defense title screen", es: "Pantalla de título de Bubble Defense" },
    },
  },
  {
    id: "school-club-management",
    title: { en: "School and sports club management", es: "Gestión educativa y de clubes" },
    kind: { en: "University team project", es: "Proyecto universitario en equipo" },
    year: "2025",
    summary: {
      en: "Agile project in two parts. Our team documented a sports club system for another team to build, and I implemented the student, grades and academic history views of a school system in Next.js.",
      es: "Proyecto ágil en dos partes. Nuestro equipo documentó un sistema de clubes para que lo construyera otro equipo, y yo implementé en Next.js las vistas de estudiantes, notas e historial académico de un sistema educativo.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Agile"],
    links: [],
    image: {
      src: "/projects/pss-wireframe.webp",
      alt: {
        en: "Wireframe of the sports club member dashboard",
        es: "Wireframe del panel de socio del club",
      },
    },
  },
  {
    id: "candy-crush",
    title: { en: "Candy Crush in Java", es: "Candy Crush en Java" },
    kind: { en: "University team project", es: "Proyecto universitario en equipo" },
    year: "2023",
    summary: {
      en: "Desktop match-three game built by a team of three, with five levels, special candies and saved high scores. Matching rules use the Strategy pattern and skins use State.",
      es: "Juego de combinar caramelos para escritorio, hecho en un equipo de tres, con cinco niveles, caramelos especiales y puntajes guardados. Las reglas de combinación usan el patrón Strategy y las skins, el patrón State.",
    },
    tags: ["Java", "Swing", "Threads", "UML"],
    links: [],
    image: {
      src: "/projects/candy-crush.webp",
      alt: {
        en: "The game's six candy sprites on its wooden background",
        es: "Los seis caramelos del juego sobre su fondo de madera",
      },
    },
  },
];

export const jobs: Job[] = [
  {
    role: {
      en: "Teaching Assistant, Introduction to Object-Oriented Programming",
      es: "Ayudante de Docencia B, Introducción a la Programación Orientada a Objetos",
    },
    org: { en: "Universidad Nacional del Sur", es: "Universidad Nacional del Sur" },
    period: { en: "Oct 2026 - Present", es: "Oct 2026 - Actualidad" },
    detail: {
      en: "Practical Java classes for first-year students, office hours and grading.",
      es: "Clases prácticas en Java para estudiantes de primer año, consultas y corrección de trabajos.",
    },
  },
  {
    role: { en: "Freelance Web Developer", es: "Desarrollador web independiente" },
    org: { en: "Self-employed", es: "Independiente" },
    period: { en: "Jul 2026 - Present", es: "Jul 2026 - Actualidad" },
    detail: {
      en: "Websites and online stores for small businesses, two of them live in production.",
      es: "Sitios y tiendas online para emprendimientos, dos de ellos en producción.",
    },
  },
  {
    role: { en: "Medical Interpreter, English-Spanish", es: "Intérprete médico inglés-español" },
    org: { en: "Propio Language Services", es: "Propio Language Services" },
    period: { en: "Oct 2025 - Present", es: "Oct 2025 - Actualidad" },
    detail: {
      en: "Consecutive interpreting by phone and video, 20 hours a week, for emergencies, consultations and pre-op preparation.",
      es: "Interpretación consecutiva por teléfono y videollamada, 20 horas semanales, en urgencias, consultas y preparación prequirúrgica.",
    },
  },
  {
    role: {
      en: "Medical, Financial and 911 Interpreter",
      es: "Intérprete médico, financiero y de emergencias",
    },
    org: { en: "Interpretia", es: "Interpretia" },
    period: { en: "Nov 2023 - Oct 2025", es: "Nov 2023 - Oct 2025" },
    detail: {
      en: "Monthly quality scores of 95/100 or higher the whole time I worked there.",
      es: "Evaluaciones mensuales de calidad de 95/100 o más durante toda la experiencia.",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    name: { en: "Frontend", es: "Frontend" },
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    name: { en: "Backend", es: "Backend" },
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "JWT"],
  },
  {
    name: { en: "Data and AI", es: "Datos e IA" },
    items: ["PostgreSQL", "SQL", "Prisma", "ChromaDB", "RAG", "Sentence Transformers"],
  },
  {
    name: { en: "Java and design", es: "Java y diseño" },
    items: ["Java", "OOP", "Design patterns", "UML", "Threads", "Swing"],
  },
  {
    name: { en: "Tools and deploy", es: "Herramientas y despliegue" },
    items: ["Git", "GitHub", "Docker", "Docker Compose", "Nginx", "Vercel", "Railway"],
  },
];
