"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 83 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 76 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Node.js / Express", level: 48 },
      { name: "Python / FastAPI", level: 42 },
      { name: "PostgreSQL", level: 45 },
      { name: "MongoDB", level: 38 },
      { name: "REST API", level: 47 },
    ],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠️",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 44 },
      { name: "Figma", level: 73 },
      { name: "Vercel", level: 65 },
      { name: "CI/CD Pipelines", level: 65 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.34, 1.56, 0.64, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "MongoDB", "Docker", "Figma",
  "Tailwind CSS", "Git",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-28 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What I Work With
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map(({ title, emoji, color, bgColor, borderColor, skills }, catIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.12 }}
              className={`p-6 rounded-2xl bg-white/[0.03] border ${borderColor} hover:border-opacity-50 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center text-lg`}>
                  {emoji}
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={color}
                  delay={catIndex * 0.12 + i * 0.07}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech stack cloud */}
        <motion.div
          ref={stackRef}
          initial={{ opacity: 0 }}
          animate={stackInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={stackInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs hover:text-white hover:border-violet-500/30 hover:bg-violet-500/5 transition-all cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
