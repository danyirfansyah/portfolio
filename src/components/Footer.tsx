"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: IconBrandGithub, href: "https://github.com", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:danyirfansyah23@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Dany.dev
            </a>
            <p className="text-slate-500 text-xs mt-1 max-w-xs">
              Building digital experiences with care and craftsmanship.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Dany Irfansyah. Made with{" "}
            <Heart size={11} className="text-rose-500 fill-rose-500" /> using Next.js & Tailwind CSS
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs transition-colors group"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
              <ArrowUp size={11} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
