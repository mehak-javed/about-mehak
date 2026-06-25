// All site content lives here so copy is edited in one place and
// components stay presentational. Sourced from Mehak Javed's CV.

export const profile = {
  name: "Mehak Javed",
  brand: "Mehak</>",
  role: "Front-End Developer",
  roleTagline: "React · Next.js · TypeScript",
  location: "Messina, Italy",
  relocation: "Open to relocating to Glasgow, UK",
  pitch:
    "Front-End Developer with 2+ years building responsive, accessible, high-performance web applications — turning Figma designs into clean, production-ready React & Next.js interfaces.",
  email: "mjrajpoot0927@gmail.com",
  phone: "+39 351 4923262",
  github: "https://github.com/mehak-javed",
  githubLabel: "github.com/mehak-javed",
  linkedin: "https://linkedin.com/in/mehak-javed",
  linkedinLabel: "linkedin.com/in/mehak-javed",
  portfolio: "https://engrmehakjaved.netlify.app",
};

export const about = {
  paragraphs: [
    "I'm a Front-End Developer specialising in React.js, Next.js, TypeScript and modern JavaScript. I build responsive, mobile-first applications with Tailwind CSS, Redux, Zustand and React Query, using component libraries such as Shadcn/UI and Radix UI.",
    "I care deeply about performance, accessibility (WCAG) and SEO, and I'm comfortable across the workflow — from API integration (REST & GraphQL) and testing to CI/CD and deployment on Vercel within Agile/Scrum teams.",
  ],
  facts: [
    { label: "Experience", value: "2+ years" },
    { label: "Education", value: "MSc Computer Science & Engineering (2026)" },
    { label: "University", value: "University of Messina, Italy" },
    { label: "Languages", value: "English C2 · Italian B1 · Urdu C2" },
  ],
};

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Languages & Frameworks",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Shadcn/UI", "Radix UI", "Figma-to-code", "Responsive & mobile-first"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "Zustand", "React Query", "REST APIs", "GraphQL", "Supabase", "PostgreSQL"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    title: "Performance & SEO",
    skills: ["Lighthouse", "Core Web Vitals", "Code-splitting", "Image optimisation", "Accessibility (WCAG)"],
  },
  {
    title: "Workflow & Tooling",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel", "Agile/Scrum", "ESLint", "Prettier"],
  },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}[] = [
  {
    company: "Mindioo — USA (Remote)",
    role: "Front-End Developer — React.js / Next.js / TypeScript",
    period: "Oct 2025 – Present",
    highlights: [
      "Build responsive web applications with React, Next.js and TypeScript for MVP-based products.",
      "Implement SSR, dynamic routing and performance optimisations, improving Core Web Vitals via lazy loading, image optimisation and code-splitting.",
      "Deploy and manage applications on Vercel with automated CI/CD pipelines, working in an Agile/Scrum team.",
    ],
  },
  {
    company: "Code Graphers",
    role: "Front-End Developer — React.js / Next.js / TypeScript",
    period: "Mar 2025 – Oct 2025",
    highlights: [
      "Developed responsive, scalable applications with React, Next.js, TypeScript and Tailwind CSS.",
      "Integrated REST APIs and Supabase/PostgreSQL backends for dynamic, data-driven experiences.",
      "Added multi-language support (i18n) and raised Lighthouse scores through performance tuning.",
    ],
  },
  {
    company: "Byteio Digital Solutions",
    role: "Front-End Developer — React.js / Next.js / TypeScript",
    period: "Oct 2023 – Mar 2024",
    highlights: [
      "Built responsive, user-friendly websites across multiple client projects.",
      "Created scalable, reusable UI components, improving consistency and maintainability.",
      "Translated Figma designs into mobile-first, accessible (WCAG) interfaces and delivered fast, SEO-friendly sites.",
    ],
  },
  {
    company: "Devify Solutions",
    role: "Front-End Developer Intern — React.js / Next.js",
    period: "Apr 2022 – Apr 2023",
    highlights: [
      "Developed reusable UI components and interactive interfaces with React, Next.js and TypeScript.",
      "Built responsive, mobile-first layouts compatible across devices and browsers.",
      "Integrated REST & GraphQL APIs and wrote front-end tests with Jest and React Testing Library.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
};

export const clientProjects: Project[] = [
  {
    name: "uniPack",
    description:
      "Investment & portfolio platform — live market data, news and watchlists. Built with Next.js & Supabase.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    url: "https://unipack.vercel.app",
  },
  {
    name: "Dr Jaleel Mohammed",
    description: "Healthcare practitioner website for a UK client.",
    tags: ["WordPress", "Client work"],
    url: "https://drjaleelmohammed.co.uk",
  },
  {
    name: "Glam On Board",
    description: "E-commerce site with improved Lighthouse score after a Next.js migration.",
    tags: ["Next.js", "E-commerce"],
    url: "https://glamonboard.netlify.app",
  },
  {
    name: "SM Kanban",
    description: "Drag-and-drop Kanban task-management application.",
    tags: ["React", "DnD"],
    url: "https://smkanban.netlify.app",
  },
  {
    name: "Deeds Consultancy",
    description: "Corporate consultancy website with a clean, professional UI.",
    tags: ["Next.js", "Corporate"],
    url: "https://deedsconsultants.netlify.app",
  },
  {
    name: "Amore Avenue",
    description: "E-commerce and brand site with a polished storefront.",
    tags: ["E-commerce", "Brand"],
    url: "https://amoreavenue.netlify.app",
  },
  {
    name: "TJ's Clothing Store",
    description: "E-commerce storefront for a clothing brand.",
    tags: ["E-commerce", "Storefront"],
    url: "https://tjs-clothings.netlify.app",
  },
  {
    name: "Mindioo Platform",
    description: "Production Next.js platform with internationalisation (i18n).",
    tags: ["Next.js", "i18n", "Production"],
    url: "https://frontend-dev01.vercel.app",
  },
];

export const aiProjects: Project[] = [
  {
    name: "WASM Heartbeat Monitor",
    description: "WebAssembly heartbeat-monitoring project exploring IoT + WASM.",
    tags: ["WebAssembly", "IoT"],
    url: "https://github.com/mehak-javed",
  },
  {
    name: "ECG Emotion Recognition",
    description: "Machine-learning model for emotion recognition from ECG signals.",
    tags: ["ML", "Signal processing"],
  },
  {
    name: "NLP Chatbot",
    description: "Conversational chatbot built with natural-language processing.",
    tags: ["NLP", "ML"],
  },
  {
    name: "Stock Predictor",
    description: "Machine-learning model for stock-price prediction.",
    tags: ["ML", "Time series"],
  },
];

export type GlasgowReason = {
  title: string;
  body: string;
};

// Placeholder copy — sincere starting point for Mehak to personalise.
export const glasgowReasons: GlasgowReason[] = [
  {
    title: "A thriving tech scene",
    body:
      "Glasgow has become one of the UK's fastest-growing tech hubs, with a vibrant community of startups, agencies and product teams. It's exactly the kind of environment where I want to grow as a front-end engineer.",
  },
  {
    title: "Career growth in the UK market",
    body:
      "Working in the UK lets me bring my React and Next.js experience to ambitious, design-led teams, learn from senior engineers, and build accessible products for a market I care about.",
  },
  {
    title: "Quality of life & community",
    body:
      "Glasgow's warmth, culture and welcoming community make it somewhere I can genuinely see myself settling, contributing and putting down roots — not just working, but belonging.",
  },
  {
    title: "Ready to relocate now",
    body:
      "I'm finishing my MSc in Messina and I'm fully prepared to relocate to Glasgow. I'm motivated, adaptable, and ready to commit long-term to the right front-end role.",
  },
];

// Verified Unsplash images of women working in tech / professional settings.
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  // Hero portrait
  portrait: U("1573497019940-1c28c88b4f3e", 900),
  // About section image
  about: U("1573164713988-8665fc963095", 900),
};

// Parallax gallery — skill logos + names (needs 15 items).
// Logos served as SVG from Simple Icons CDN, tinted to each brand colour.
const icon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const parallaxItems: { title: string; link: string; thumbnail: string }[] = [
  { title: "React", link: "#skills", thumbnail: icon("react", "61DAFB") },
  { title: "Next.js", link: "#skills", thumbnail: icon("nextdotjs", "FFFFFF") },
  { title: "TypeScript", link: "#skills", thumbnail: icon("typescript", "3178C6") },
  { title: "JavaScript", link: "#skills", thumbnail: icon("javascript", "F7DF1E") },
  { title: "Tailwind CSS", link: "#skills", thumbnail: icon("tailwindcss", "06B6D4") },
  { title: "Redux", link: "#skills", thumbnail: icon("redux", "764ABC") },
  { title: "React Query", link: "#skills", thumbnail: icon("reactquery", "FF4154") },
  { title: "GraphQL", link: "#skills", thumbnail: icon("graphql", "E10098") },
  { title: "Supabase", link: "#skills", thumbnail: icon("supabase", "3FCF8E") },
  { title: "PostgreSQL", link: "#skills", thumbnail: icon("postgresql", "4169E1") },
  { title: "Jest", link: "#skills", thumbnail: icon("jest", "C21325") },
  { title: "Cypress", link: "#skills", thumbnail: icon("cypress", "69D3A7") },
  { title: "Git", link: "#skills", thumbnail: icon("git", "F05032") },
  { title: "GitHub", link: "#skills", thumbnail: icon("github", "FFFFFF") },
  { title: "Vercel", link: "#skills", thumbnail: icon("vercel", "FFFFFF") },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Why Glasgow", href: "#why-glasgow" },
  { label: "Contact", href: "#contact" },
];
