import { motion } from "framer-motion";
import { Code2, Cpu, Puzzle, Layout } from "lucide-react";

const skills = [
  { icon: Layout, label: "WordPress Expert", level: 95, color: "from-cyan-500 to-blue-500" },
  { icon: Puzzle, label: "Plugin Customization", level: 92, color: "from-fuchsia-500 to-pink-500" },
  { icon: Cpu, label: "Advanced AI Knowledge", level: 90, color: "from-emerald-500 to-cyan-500" },
  { icon: Code2, label: "Modern Frontend Frameworks", level: 88, color: "from-violet-500 to-purple-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0d14] py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="mt-10 grid gap-8">
          {skills.map(({ icon: Icon, label, level, color }, i) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <span className="text-white">{label}</span>
                </div>
                <span className="text-slate-300">{level}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full bg-gradient-to-r ${color}`} style={{ width: `${level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
