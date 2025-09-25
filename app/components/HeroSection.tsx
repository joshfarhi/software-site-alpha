"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient background */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[1100px] bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-3xl" />

        {/* Animated Beams */}
        <div className="absolute inset-0">
          {/* Beam 1 - Top left to bottom right */}
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[beam-move-1_8s_ease-in-out_infinite]" />

          {/* Beam 2 - Top right to bottom left */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent animate-[beam-move-2_6s_ease-in-out_infinite_reverse]" />

          {/* Beam 3 - Diagonal beam */}
          <div className="absolute top-1/4 left-1/4 w-px h-3/4 bg-gradient-to-br from-transparent via-primary/20 to-transparent animate-[beam-move-3_10s_ease-in-out_infinite]" />

          {/* Beam 4 - Horizontal sweep */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-[beam-sweep_12s_ease-in-out_infinite]" />

          {/* Beam 5 - Vertical sweep */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[beam-vertical_15s_ease-in-out_infinite]" />
        </div>

        {/* Radial mask overlay */}
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="mt-5 text-[12rem] sm:text-[12rem] md:text-[16rem] font-extrabold tracking-tight bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent relative"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                }
              }
            }}
            className="inline-flex"
          >
            {"inuzu".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
                  }
                }}
                className="inline-block"
                style={{
                  transformOrigin: "center bottom",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
          className="flex justify-center mt-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-6 py-3 text-sm text-muted-foreground font-medium">
            <span className="relative inline-block h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-blue-500" />
              <span className="absolute inset-0 rounded-full animate-[glow-blink_1.6s_ease-in-out_infinite]" style={{ background: "rgba(59,130,246,0.45)" }} />
            </span>
            AI powered
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 1.6 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground"
        >
              Advancing innovation in every sector.        </motion.p>
        {/* Feature bullets moved to What We Do section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Contact
          </Link>
          <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary/40 hover:text-primary transition">
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


