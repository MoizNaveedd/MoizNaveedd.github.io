"use client";

const skills = [
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "Re" },
  { name: "Next.js", icon: "Nx" },
  { name: "Node.js", icon: "No" },
  { name: "Express", icon: "Ex" },
  { name: "PostgreSQL", icon: "Pg" },
  { name: "MongoDB", icon: "Mg" },
  { name: "Docker", icon: "Dk" },
  { name: "AWS", icon: "Aw" },
  { name: "Tailwind", icon: "Tw" },
  { name: "GraphQL", icon: "Gq" },
  { name: "Redis", icon: "Rd" },
];

function SkillChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="mx-3 flex shrink-0 items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.03] px-6 py-3.5 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.06] font-mono text-sm font-bold text-cyan-300">
        {icon}
      </span>
      <span className="text-base font-medium text-zinc-300">{name}</span>
    </div>
  );
}

export function SkillMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

      {/* Row 1 */}
      <div className="animate-marquee flex w-max">
        {[...skills, ...skills].map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>

      {/* Row 2 - reverse */}
      <div
        className="animate-marquee mt-3 flex w-max"
        style={{ animationDirection: "reverse", animationDuration: "25s" }}
      >
        {[...skills.slice(6), ...skills.slice(0, 6), ...skills.slice(6), ...skills.slice(0, 6)].map(
          (skill, i) => (
            <SkillChip key={`rev-${skill.name}-${i}`} {...skill} />
          )
        )}
      </div>
    </div>
  );
}
