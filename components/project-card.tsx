"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  index: number;
};

export function ProjectCard({ title, description, stack, link, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const gradients = [
    "from-amber-500/20 via-transparent to-orange-500/10",
    "from-cyan-500/20 via-transparent to-blue-500/10",
    "from-violet-500/20 via-transparent to-fuchsia-500/10",
    "from-emerald-500/20 via-transparent to-cyan-500/10",
  ];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group h-full"
    >
      <a href={link} className="block h-full">
        <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-white/[0.12]">
          {/* Hover gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* Number */}
          <span className="relative mb-6 block font-mono text-sm text-zinc-600">
            0{index + 1}
          </span>

          <h3 className="relative text-2xl font-semibold text-zinc-100 transition-colors group-hover:text-white">
            {title}
          </h3>

          <p className="relative mt-3 flex-1 text-base leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
            {description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-sm text-zinc-500 transition-colors group-hover:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="relative mt-6 flex items-center gap-2 text-base font-medium text-zinc-600 transition-colors group-hover:text-cyan-300">
            <span>View project</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </article>
      </a>
    </motion.div>
  );
}
