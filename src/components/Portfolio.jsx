import { motion } from "framer-motion";

const projects = [
  {
    title: "Growth-Focused Retail Site",
    result: "Increased Conversions by 30%",
    image: "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Modern SaaS Landing",
    result: "Reduced Bounce by 25%",
    image: "https://images.unsplash.com/photo-1584808388222-062430d77e9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwTGFuZGluZ3xlbnwwfDB8fHwxNzYzNTc2MTk2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    title: "Local Services Revamp",
    result: "More Leads +45%",
    image: "https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-[#0b0f17] py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio Highlights
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-cyan-300">{p.result}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
