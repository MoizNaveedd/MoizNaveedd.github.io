"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CursorGlow } from "./cursor-glow";
import { TextScramble } from "./text-scramble";
import { MagneticButton } from "./magnetic-button";
import { SkillMarquee } from "./skill-marquee";
import { ProjectCard } from "./project-card";
import { CodeWindow } from "./code-window";

const projects = [
  {
    title: "Estenarh – Telehealth Platform",
    description:
      "MOH-licensed telehealth platform serving 50k+ users across the Middle East, with patient and consultant apps on iOS and Android. Built backend APIs for instant consultations, secure prescriptions, practitioner matching, and payments (Moyasar, Tabby, Tamara), and contributed to the React Native apps with Arabic/English support.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Socket.IO", "RabbitMQ", "React Native"],
    link: "https://estenarh.com/en",
  },
  {
    title: "Intlaq – Ride-Hailing Platform",
    description:
      "Family-focused ride-hailing platform for the Saudi market with customer and captain apps. Built backend services for real-time ride tracking, scheduled and recurring rides, child profiles, in-app messaging, and HyperPay/Apple Pay payments, and contributed to the React Native frontend.",
    stack: ["Node.js", "Socket.io", "Google Maps", "React Native", "HyperPay"],
    link: "https://intlaqride.com/",
  },
  {
    title: "Agaahi – AI Database Intelligence",
    description:
      "AI-powered app that lets users query relational databases in natural language. Converts questions into secure, optimized SQL via a schema-aware LangChain pipeline with customizable dashboards for visualizing key metrics.",
    stack: ["LangChain", "Python", "PostgreSQL", "React"],
    link: "https://aghaahi-frontend-knpq8zc3v-moiznaveedds-projects.vercel.app/",
  },
  {
    title: "MediScan – Medicine QR Scanner",
    description:
      "A mobile-friendly app that lets users scan QR codes on medicine packaging to instantly access drug details, dosage info, and safety warnings — making pharmaceutical information accessible and transparent.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "QR API"],
    link: "https://e82be1c6.mediscan-6gb.pages.dev/",
  },
  {
    title: "Karigar AI – AI Service Orchestrator",
    description:
      "Antigravity Hackathon 2026 project connecting customers with Pakistan's informal-economy workers. Six AI agents handle multilingual (English, Urdu, Roman Urdu) conversational booking — understanding the issue, matching nearby workers with explainable reasoning, and completing the booking — plus a provider web portal.",
    stack: ["FastAPI", "Gemini", "Groq", "React Native", "Docker", "Cloud Run"],
    link: "https://karigar-ai.netlify.app/",
  },
  {
    title: "Snad IMS – Inventory & POS Platform",
    description:
      "All-in-one cloud inventory management and POS solution for retail businesses, with real-time stock, sales, and order tracking, customer insights, automated reporting and analytics, and multi-store, multi-user support.",
    stack: ["IMS", "POS", "REST APIs", "Analytics"],
    link: "https://azm.csolit.com/",
  },
  {
    title: "Task Automation System",
    description:
      "An automated workflow system that orchestrates task pipelines using n8n, with Supabase as the backend for real-time data sync, auth, and storage — streamlining repetitive processes across teams.",
    stack: ["n8n", "Supabase", "PostgreSQL", "React"],
    link: "#",
  },

];

const experience = [
  {
    role: "Software Engineer",
    company: "IOMechs",
    location: "Karachi, Pakistan",
    period: "May 2025 – Present",
    points: [
      "Leading development of scalable backend APIs with modular design using NestJS, TypeScript, PostgreSQL, and Redis.",
      "Worked across backend applications using .NET, C#, and ASP.NET MVC alongside NestJS and TypeScript services.",
      "Built backend services for Estenarh, a top-rated Saudi mental health platform — real-time features with Socket.IO, Firebase notifications, and RabbitMQ queues for background processing.",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", ".NET", "RabbitMQ"],
  },
  {
    role: "AI Engineer",
    company: "Zaavya LLC",
    location: "Remote",
    period: "Oct 2025 – Nov 2025",
    points: [
      "Developed AI-driven backend services integrating LLM chatbots and retrieval (RAG) for enterprise applications.",
      "Worked with vector databases and embeddings to enable semantic search and AI-assisted workflows.",
    ],
    stack: ["LLMs", "RAG", "Vector DBs", "Embeddings"],
  },
  {
    role: "Associate Software Engineer",
    company: "IOMechs",
    location: "Karachi, Pakistan",
    period: "Feb 2024 – May 2025",
    points: [
      "Designed and implemented scalable RESTful APIs using NestJS and Express.js with a focus on maintainability, performance, and security.",
      "Developed backend services and microservices to support business logic and real-time data processing.",
      "Implemented JWT authentication and role-based access control to secure APIs and user sessions.",
    ],
    stack: ["NestJS", "Express.js", "Microservices", "JWT"],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Nov 2022 – Jan 2024",
    points: [
      "Built backend APIs and web services for client projects using Node.js and Express.js.",
      "Developed database-driven features with MongoDB and PostgreSQL, working directly with clients on requirements.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Moiz-Naveed-Resume.pdf" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500"
    >
      <span className="inline-block h-px w-6 bg-cyan-400/60" />
      {children}
    </motion.p>
  );
}

export function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  return (
    <div className="relative overflow-x-hidden bg-[#050505] text-zinc-100">
      <CursorGlow />

      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 font-mono text-sm tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <Image src="/logo-mark.png" alt="Moiz Naveed logo" width={32} height={32} priority />
            moiz.dev
          </motion.a>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-8 text-sm tracking-wide text-zinc-500"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  className="transition-colors hover:text-zinc-200"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <main>
        {/* ========== HERO ========== */}
        <section ref={heroRef} className="relative flex min-h-screen items-center">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="mx-auto w-full max-w-6xl px-6 sm:px-8"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
              {/* Left — Text content */}
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-zinc-600"
                >
                  Software Engineer
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-2 text-6xl font-bold tracking-tight text-white sm:text-8xl md:text-9xl"
                >
                  Moiz
                  <span className="text-cyan-300">.</span>
                </motion.h1>

                <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-300 sm:text-5xl md:text-6xl">
                  <TextScramble text="I craft" delay={600} />
                  <br />
                  <TextScramble
                    text="digital experiences"
                    delay={1000}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-zinc-500"
                  />
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-500"
                >
                  Building clean, fast, and thoughtful web applications
                  that people actually enjoy using.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                  className="mt-10 flex gap-4"
                >
                  <MagneticButton
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-cyan-300"
                  >
                    See my work
                  </MagneticButton>
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-7 py-3.5 text-base font-medium text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-zinc-200"
                  >
                    Get in touch
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right — Code window */}
              <div className="hidden lg:block">
                <CodeWindow />
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                Scroll
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* ========== ABOUT ========== */}
        <section id="about" className="py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionLabel>About</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-semibold leading-snug text-zinc-100 sm:text-5xl">
                  Engineering products with
                  <span className="text-zinc-500"> clarity & impact</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-5"
              >
                <p className="text-lg leading-relaxed text-zinc-500">
                  I focus on building scalable frontends and reliable backend services
                  with strong attention to code quality, performance, and user experience.
                </p>
                <p className="text-lg leading-relaxed text-zinc-500">
                  My approach combines product thinking with engineering discipline. From
                  architecture to deployment, I build with long-term maintainability and
                  real-world impact in mind.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== DIVIDER LINE ========== */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ========== EXPERIENCE ========== */}
        <section id="experience" className="py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionLabel>Experience</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 text-4xl font-semibold text-zinc-100 sm:text-5xl"
            >
              Where I&apos;ve worked
            </motion.h2>

            <ol className="relative border-l border-white/[0.08]">
              {experience.map((job, i) => (
                <motion.li
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
                >
                  <span
                    className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                      i === 0 ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" : "bg-zinc-600"
                    }`}
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                      {job.role} <span className="text-cyan-300">@ {job.company}</span>
                    </h3>
                    <span className="shrink-0 font-mono text-sm text-zinc-500">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">{job.location}</p>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-400">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-sm text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* ========== DIVIDER LINE ========== */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ========== SKILLS ========== */}
        <section className="py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionLabel>Stack</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-4xl font-semibold text-zinc-100 sm:text-5xl"
            >
              Tools I work with
            </motion.h2>
          </div>
          <SkillMarquee />
        </section>

        {/* ========== DIVIDER LINE ========== */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ========== PROJECTS ========== */}
        <section id="projects" className="py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionLabel>Work</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 text-4xl font-semibold text-zinc-100 sm:text-5xl"
            >
              What I&apos;ve been building
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ========== DIVIDER LINE ========== */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* ========== CONTACT ========== */}
        <section id="contact" className="py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="gradient-border rounded-3xl p-10 sm:p-16 text-center"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
                Get in touch
              </p>
              <h2 className="text-4xl font-semibold text-zinc-100 sm:text-6xl">
                Let&apos;s build something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-zinc-500">
                  together
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-zinc-500">
                Available for full-time roles and freelance projects.
                Let&apos;s talk about what we can create.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  href="mailto:naveedmoiz928@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-cyan-300"
                >
                  naveedmoiz928@gmail.com
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/MoizNaveedd"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/[0.1] px-7 py-3.5 text-base font-medium text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-zinc-200"
                >
                  GitHub
                </MagneticButton>
                <MagneticButton
                  href="https://www.linkedin.com/in/moiz-naveed-924015231/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/[0.1] px-7 py-3.5 text-base font-medium text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-zinc-200"
                >
                  LinkedIn
                </MagneticButton>
                <MagneticButton
                  href="/Moiz-Naveed-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/[0.1] px-7 py-3.5 text-base font-medium text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-zinc-200"
                >
                  Resume
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="relative border-t border-white/[0.06]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[2fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-3 font-mono text-base tracking-widest text-zinc-300">
                <Image src="/logo-mark.png" alt="" width={40} height={40} />
                moiz.dev
              </a>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-zinc-500">
                Software engineer building scalable backends, real-time systems, and AI-powered products.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to new opportunities
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Navigate</p>
              <ul className="mt-5 space-y-3 text-base">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-zinc-500 transition-colors hover:text-cyan-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Connect</p>
              <ul className="mt-5 space-y-3 text-base">
                <li>
                  <a href="mailto:naveedmoiz928@gmail.com" className="text-zinc-500 transition-colors hover:text-cyan-300">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MoizNaveedd" target="_blank" rel="noreferrer" className="text-zinc-500 transition-colors hover:text-cyan-300">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/moiz-naveed-924015231/" target="_blank" rel="noreferrer" className="text-zinc-500 transition-colors hover:text-cyan-300">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.04]">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <span>&copy; {new Date().getFullYear()} Moiz Naveed · Karachi, Pakistan</span>
              <a href="#" className="group inline-flex items-center gap-2 font-mono tracking-wider transition-colors hover:text-zinc-300">
                Back to top
                <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
