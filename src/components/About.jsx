import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0d14] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,200,0.06),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.h2>
        <motion.p
          className="mt-6 max-w-3xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m a web developer and AI enthusiast dedicated to building high-performance, visually stunning websites. I integrate artificial intelligence into my workflow to plan site structure, optimize content, accelerate delivery, and push creative boundaries—so your business launches faster and grows smarter.
        </motion.p>
      </div>
    </section>
  );
}
