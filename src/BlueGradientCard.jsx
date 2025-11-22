import React from "react";
import { motion } from "framer-motion";

// BlueGradientCard.jsx
// Default export: a single React component you can drop into any app that uses TailwindCSS + Framer Motion.
// Features:
// - smooth blue gradient background
// - subtle float + hover transform
// - transition effects for text and button
// - props to customize title, subtitle, CTA text and onClick

export default function BlueGradientCard({
  title = "Create beautiful UI components",
  subtitle = "A modern blue-gradient card with smooth transitions and a subtle floating effect.",
  cta = "Get started",
  onCta = () => {},
  accent = "#06b6d4", // default accent (cyan-like) if you want inline styles
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-xl mx-auto p-6 rounded-2xl shadow-2xl overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.12) 40%, rgba(59,130,246,0.08) 100%)`,
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Floating container */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative rounded-xl"
      >
        {/* Blue gradient panel with inner glow */}
        <div
          className="rounded-xl p-6 md:p-8"
          style={{
            background: "linear-gradient(180deg, rgba(14,165,233,0.10), rgba(59,130,246,0.04))",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="text-2xl md:text-3xl font-semibold leading-tight"
            style={{ color: "#e6f7ff" }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-3 text-sm md:text-base text-slate-200/90"
          >
            {subtitle}
          </motion.p>

          <div className="mt-6 flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ translateY: -3 }}
              onClick={onCta}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                color: "white",
                boxShadow: "0 6px 18px rgba(59,130,246,0.18)",
              }}
            >
              {cta}
            </motion.button>

            <motion.a
              href="#"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              className="text-sm underline text-slate-200/80 hover:text-white"
            >
              Learn more
            </motion.a>
          </div>

          {/* Decorative gradient blur */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full blur-3xl opacity-40"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.45), transparent 30%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.35), transparent 26%)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* subtle bottom border and shadow */}
        <div className="mt-4 h-1 rounded-full" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.18), rgba(6,182,212,0.12))" }} />
      </motion.div>

      {/* Small row of feature chips with transitions */}
      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Responsive",
          "Accessible",
          "Animated",
          "Tailwind-ready",
        ].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 + i * 0.04 }}
            className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm"
            style={{ color: "#eaf6ff" }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* Optional footer small text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.36 }}
        className="mt-4 text-[11px] text-slate-200/60"
      >
        Built with React + Tailwind + Framer Motion — drop-in ready.
      </motion.div>
    </motion.div>
  );
}
