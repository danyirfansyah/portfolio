"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_1vj0ilr";
const EMAILJS_TEMPLATE_ID = "template_gqo6d8a";
const EMAILJS_PUBLIC_KEY = "uxEWjEblFPa2pUynB";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, MapPin, Clock } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    href: "https://github.com/danyirfansyah",
    handle: "@danyirfansyah",
    color: "hover:border-slate-400/40 hover:bg-slate-400/5",
    iconColor: "text-slate-400",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dany-irfansyah/",
    handle: "Dany Irfansyah",
    color: "hover:border-blue-400/40 hover:bg-blue-400/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:danyirfansyah23@gmail.com",
    handle: "danyirfansyah23@gmail.com",
    color: "hover:border-violet-400/40 hover:bg-violet-400/5",
    iconColor: "text-violet-400",
  },
];

const infoItems = [
  { icon: MapPin, label: "Location", value: "Indonesia" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className={`relative rounded-xl border transition-all duration-200 ${focused ? "border-violet-500/50 bg-violet-500/5" : "border-white/10 bg-white/[0.03]"}`}>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 bg-transparent text-white placeholder-slate-600 focus:outline-none text-sm"
        />
        {focused && (
          <motion.div
            layoutId="input-focus"
            className="absolute inset-0 rounded-xl border border-violet-500/30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(false);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-semibold text-lg mb-3">Get in Touch</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I&apos;m currently open to new opportunities and freelance collaborations.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            {/* Info items */}
            <div className="flex flex-col gap-3 mb-8">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-slate-300 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {socials.map(({ icon: Icon, label, href, handle, color, iconColor }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] ${color} transition-all group`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${iconColor} shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-slate-300 text-sm truncate group-hover:text-white transition-colors">{handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    name="from_name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <InputField
                    label="Email"
                    name="from_email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>
                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                />
                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <div
                    className={`relative rounded-xl border transition-all duration-200 ${
                      focused ? "border-violet-500/50 bg-violet-500/5" : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      className="w-full px-4 py-3 bg-transparent text-white placeholder-slate-600 focus:outline-none resize-none text-sm"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={sent || sending}
                  className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 text-sm transition-all ${
                    sent
                      ? "bg-green-500/15 border border-green-500/30 text-green-400 cursor-default"
                      : error
                      ? "bg-red-500/15 border border-red-500/30 text-red-400 cursor-default"
                      : sending
                      ? "bg-white/5 border border-white/10 text-slate-400 cursor-wait"
                      : "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:opacity-95"
                  }`}
                  whileHover={!sent && !sending ? { scale: 1.01 } : {}}
                  whileTap={!sent && !sending ? { scale: 0.99 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span key="sent" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-2">
                        <CheckCircle size={17} />
                        Message Sent Successfully!
                      </motion.span>
                    ) : error ? (
                      <motion.span key="error" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-2">
                        Failed to send. Try again.
                      </motion.span>
                    ) : sending ? (
                      <motion.span key="sending" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-2">
                        Sending...
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
