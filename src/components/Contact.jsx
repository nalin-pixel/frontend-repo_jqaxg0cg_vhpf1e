import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      source: "portfolio",
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");
      setStatus({ type: "success", message: data.message || "Message sent!" });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Failed to send." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#0a0d14] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.06),_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Start Your Project
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="sm:col-span-1">
            <label className="text-sm text-slate-300">Name</label>
            <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1522] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1522] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="jane@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" required rows={5} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1522] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="Tell me about your project goals, timeline, and budget." />
          </div>
          <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4">
            <button disabled={loading} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none">
              <span className="relative z-10">{loading ? "Sending..." : "Get a Free AI Consultation"}</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            {status.type && (
              <span className={`${status.type === "success" ? "text-emerald-300" : "text-rose-300"} text-sm`}>
                {status.message}
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
