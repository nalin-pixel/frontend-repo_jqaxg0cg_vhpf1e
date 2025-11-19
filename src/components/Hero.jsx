import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f17]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 mx-auto h-[120vh] w-[120vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(88,101,242,0.12),_transparent_55%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,_rgba(0,212,255,0.35),_rgba(154,0,255,0.35),_rgba(255,120,0,0.35))] blur-3xl opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span 
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          AI-Powered Web Development for SMEs
        </motion.span>

        <motion.h1 
          className="mt-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Future-Proof Your Business with AI-Powered Websites
        </motion.h1>

        <motion.p 
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I design and engineer blazing-fast, highly animated, conversion-focused websites. Built with modern tech, optimized by AI.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none">
            <span className="relative z-10">Start Your Project</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
