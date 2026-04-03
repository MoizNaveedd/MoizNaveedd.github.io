"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { indent: 0, text: "const ", highlight: "developer", rest: " = {" },
  { indent: 1, text: "name: ", value: '"Moiz"', comma: true },
  { indent: 1, text: "role: ", value: '"Full Stack Engineer"', comma: true },
  {
    indent: 1,
    text: "skills: ",
    array: ["React", "Next.js", "Node.js", "TypeScript"],
    comma: true,
  },
  { indent: 1, text: "passion: ", value: '"Clean Code"', comma: true },
  {
    indent: 1,
    text: "available: ",
    bool: "true",
    comma: false,
  },
  { indent: 0, text: "}", closing: true },
];

function TypedValue({ value, delay }: { value: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(value.slice(0, i));
        if (i >= value.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return <>{displayed}</>;
}

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-md"
      style={{ perspective: 1000 }}
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 rounded-3xl bg-cyan-500/[0.04] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-zinc-500">portfolio.ts</span>
          <div className="w-12" />
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + i * 0.12 }}
              style={{ paddingLeft: line.indent * 20 }}
            >
              {line.closing ? (
                <span className="text-zinc-400">{"}"}</span>
              ) : (
                <>
                  <span className="text-zinc-500">{line.text}</span>
                  {line.highlight && (
                    <span className="text-cyan-300">{line.highlight}</span>
                  )}
                  {line.highlight && (
                    <span className="text-zinc-400"> = {"{"}</span>
                  )}
                  {line.value && (
                    <span className="text-emerald-400">
                      <TypedValue value={line.value} delay={1100 + i * 150} />
                    </span>
                  )}
                  {line.bool && (
                    <span className="text-amber-400">{line.bool}</span>
                  )}
                  {line.array && (
                    <>
                      <span className="text-zinc-400">[</span>
                      {line.array.map((item, j) => (
                        <span key={j}>
                          <span className="text-emerald-400">
                            &quot;{item}&quot;
                          </span>
                          {j < line.array!.length - 1 && (
                            <span className="text-zinc-600">, </span>
                          )}
                        </span>
                      ))}
                      <span className="text-zinc-400">]</span>
                    </>
                  )}
                  {line.comma && (
                    <span className="text-zinc-600">,</span>
                  )}
                </>
              )}
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
            className="mt-1 inline-block h-5 w-2.5 bg-cyan-300/70"
          />
        </div>
      </div>
    </motion.div>
  );
}
