"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center sm:px-8"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex w-full max-w-3xl flex-col items-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for Front-End roles · {profile.relocation}
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-6xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl">
          {profile.role} · <span className="text-foreground">{profile.roleTagline}</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {profile.pitch}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Let&apos;s talk <ArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            View work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
