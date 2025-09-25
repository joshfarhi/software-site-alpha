"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[1100px] bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative inline-block h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-blue-500" />
            <span className="absolute inset-0 rounded-full animate-[glow-blink_1.6s_ease-in-out_infinite]" style={{ background: "rgba(59,130,246,0.45)" }} />
          </span>
          AI powered
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent"
        >
          Custom Software Development That Accelerates Your Business Growth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground"
        >
          Transform your operations with AI-powered solutions, intelligent dashboards, and custom applications built by expert developers. We create scalable software that eliminates bottlenecks and drives measurable results across every industry.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
          className="mx-auto mt-6 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground text-left"
        >
          <li>✓ Custom B2B & B2C dashboard development</li>
          <li>✓ AI-driven workflow automation solutions</li>
          <li>✓ Enterprise-grade web applications</li>
          <li>✓ Industry-specific software solutions</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Get Your Free Strategy Session
          </Link>
          <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary/40 hover:text-primary transition">
            View Our Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


