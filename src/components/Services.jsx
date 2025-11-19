import { motion } from "framer-motion";
import { Rocket, Gauge, Sparkles, Search } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "AI-Powered Web Creation",
    desc: "From concept to launch with AI-assisted planning, content, and code optimization.",
  },
  {
    icon: Gauge,
    title: "Speed & Performance",
    desc: "Core Web Vitals obsessed. Ship sites that load instantly and rank higher.",
  },
  {
    icon: Sparkles,
    title: "Custom Design",
    desc: "Futuristic UI with tasteful animation, crafted to your brand and audience.",
  },
  {
    icon: Search,
    title: "SEO-Ready",
    desc: "Clean structure, schema, and best practices so you’re discoverable from day one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#0b0f17] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.05),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-cyan-500/15 via-fuchsia-500/10 to-emerald-500/15" />
              <Icon className="relative z-10 h-6 w-6 text-cyan-300" />
              <h3 className="relative z-10 mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="relative z-10 mt-2 text-sm text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
