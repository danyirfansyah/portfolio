"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Built" },
  { icon: Globe, value: "3+", label: "Years Experience" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Sparkles, value: "10+", label: "Technologies" },
];

const techBadges = ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "Docker"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Who Am I?
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Rotating border rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-violet-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-cyan-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />

              {/* Avatar card */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-900/50 to-cyan-900/50 border border-white/10 backdrop-blur flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 mx-auto flex items-center justify-center text-2xl font-bold text-white shadow-xl shadow-violet-500/30 mb-3">
                    DI
                  </div>
                  <p className="text-white font-semibold text-sm">Dany Irfansyah</p>
                  <p className="text-slate-400 text-xs">Full Stack Developer</p>
                </div>
              </div>

              {/* Floating dots */}
              {[45, 135, 225, 315].map((deg, i) => (
                <motion.div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                  }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
              Passionate Developer &{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Creative Problem Solver
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a Full Stack Developer with a passion for building digital products that are not only
              functional but also beautifully designed. I specialize in creating responsive web applications
              using modern technologies like Next.js, React, and Node.js.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community. I believe great software
              comes from a deep understanding of both technology and user needs.
            </p>

            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium"
                  whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.5)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all cursor-default"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Icon className="text-violet-400" size={22} />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent mb-1">
                {value}
              </p>
              <p className="text-slate-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
