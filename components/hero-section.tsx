"use client";

import { Button, Snippet } from "@heroui/react";
import { ArrowDown, Github } from "lucide-react";
import { motion } from "framer-motion";
import { TerminalDemo } from "./terminal-demo";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden bg-[#0F172A]">
      {/* Background grid effect - purple tinted */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow effects - purple gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[128px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-4xl mx-auto w-full"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-balance font-mono">
          <span className="text-[#A78BFA]">Golter</span>
        </h1>

        <div className="font-mono text-lg md:text-xl text-[#94A3B8] mb-2">
          <span className="text-[#64748B]">{"// "}</span>
          Terminal-based file converter
        </div>

        <p className="text-base md:text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto text-pretty font-mono leading-relaxed px-2">
          Modern TUI interface built with Go. Batch convert your images, videos,
          audio, and documents.
          <span className="text-[#34D399]"> Vim key bindings</span> for fast
          navigation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#8B5CF6] text-white font-mono font-semibold hover:bg-[#6D28D9] px-8 border border-[#A78BFA]/30"
            startContent={<Github className="w-5 h-5" />}
            as="a"
            href="https://github.com/sametcn99/golter"
            target="_blank"
            id="hero-github-btn"
            data-umami-event="hero-github-click"
          >
            GitHub
          </Button>
          <div className="w-full sm:w-auto max-w-full overflow-x-auto">
            <Snippet
              symbol="$"
              variant="bordered"
              classNames={{
                base: "border-[#334155] bg-[#1E293B] min-w-full w-fit",
                pre: "font-mono text-sm text-[#F1F5F9] whitespace-nowrap",
                symbol: "text-[#34D399]",
                copyButton: "text-[#94A3B8] hover:text-[#F1F5F9]",
              }}
              id="hero-install-snippet"
              data-umami-event="hero-install-copy"
            >
              go install github.com/sametcn99/golter@latest
            </Snippet>
          </div>
        </div>

        {/* Status indicators - terminal style */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-mono px-2">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span className="text-[#10B981]">●</span>
            Cross-Platform
          </div>
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span className="text-[#10B981]">●</span>
            Open Source
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-12 md:mt-16 w-full max-w-4xl mx-auto px-2"
      >
        <TerminalDemo />
      </motion.div>
    </section>
  );
}
