"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    title: "SEEDS",
    description:
      "Platform web untuk mahasiswa baru, mahasiswa S1 dan S2, serta pengelolaan pembayaran kampus dalam satu sistem yang terintegrasi.",
    tech: ["Next.js", "Tailwind CSS"],
    featured: true,
    image: "/images/seeds.png",
    github: "https://github.com",
    live: "https://seeds.telkomuniversity.ac.id/auth/login",
  },
  {
    title: "Danantara",
    description:
      "Platform intelijen investasi Danantara (DIIP) dengan fitur peta ekonomi interaktif untuk memvisualisasikan dan menganalisis sebaran investasi di seluruh Indonesia.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    image: "/images/Danantara.png",
    github: "https://github.com",
    live: "https://diip-os.digibox.ai/economic-map",
  },
  {
    title: "Swiftstay",
    description:
      "Platform pencarian kos-kosan di sekitar Telkom University Bandung, memudahkan mahasiswa menemukan hunian yang sesuai kebutuhan.",
    tech: ["PHP", "Blade", "CSS"],
    featured: false,
    image: null,
    github: "https://github.com/danyirfansyah/Swiftstay.git",
    live: "https://example.com",
  },
  {
    title: "Socialog",
    description:
      "Website kuis interaktif untuk kelas SMP dan SMA pada mata pelajaran IPS dan PPKN, dirancang untuk membuat pembelajaran lebih menyenangkan.",
    tech: ["TypeScript", "JavaScript", "HTML"],
    featured: false,
    image: null,
    github: "https://github.com/danyirfansyah/socialog.git",
    live: "https://example.com",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 transition-all overflow-hidden"
      whileHover={{ y: -6 }}
    >
      {/* Image preview */}
      {project.image ? (
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ) : (
        <div className="relative w-full aspect-video border-b border-white/10 bg-white/[0.02] flex items-center justify-center">
          <span className="text-slate-600 text-xs">No preview available</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col p-6 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold text-base">{project.title}</h3>
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-1.5 shrink-0">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <IconBrandGithub size={14} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-400 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            A showcase of projects I&apos;ve built with passion and precision.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/danyirfansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-violet-400/40 hover:bg-violet-500/5 transition-all text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <IconBrandGithub size={16} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
