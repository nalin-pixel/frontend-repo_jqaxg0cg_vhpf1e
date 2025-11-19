import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070b12] text-slate-200 [--pad:clamp(16px,4vw,32px)]">
      {/* Subtle grid/pattern background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.06),transparent_20%),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0)_10%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b12]/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-lg font-semibold text-transparent">AI Web Studio</a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#portfolio">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10">Start</a>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070b12] py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AI-Powered Web Development • Built for results
      </footer>
    </div>
  );
}

export default App;
