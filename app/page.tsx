import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { FormatsSection } from "@/components/formats-section";
import { InstallSection } from "@/components/install-section";
import { KeyboardSection } from "@/components/keyboard-section";
import { Footer } from "@/components/footer";
import { X, Minus, Square } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-screen bg-[#0F172A] p-2 md:p-4 flex flex-col overflow-hidden">
      {/* GNOME Terminal Window Frame */}
      <div className="relative flex-1 flex flex-col rounded-xl border border-[#334155] bg-[#0F172A] overflow-hidden terminal-glow">
        {/* GNOME Header Bar */}
        <div className="shrink-0 z-50 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-[#2a3a4f] to-[#1E293B] border-b border-[#334155]">
          {/* Left side - Menu/Hamburger area (empty for aesthetic balance) */}
          <div className="w-24 flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-[#ffffff10] transition-colors cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-[#94A3B8]" />
              <div className="w-1 h-1 rounded-full bg-[#94A3B8]" />
              <div className="w-1 h-1 rounded-full bg-[#94A3B8]" />
            </div>
          </div>

          {/* Center - Window Title */}
          <div className="flex-1 flex justify-center items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md">
              <svg
                className="w-4 h-4 text-[#8b5cf6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9l3 3-3 3" />
                <path d="M14 15h3" />
              </svg>
              <span className="text-sm font-medium text-[#f1f5f9]">
                golter — Terminal
              </span>
            </div>
          </div>

          {/* Right side - GNOME Window Controls */}
          <div className="flex items-center gap-1">
            {/* Minimize Button */}
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#ffffff15] transition-all duration-200 cursor-pointer focus:outline-none group"
              aria-label="Minimize"
            >
              <Minus
                className="w-4 h-4 text-[#94A3B8] group-hover:text-[#f1f5f9] transition-colors"
                strokeWidth={2}
              />
            </button>
            {/* Maximize Button */}
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#ffffff15] transition-all duration-200 cursor-pointer focus:outline-none group"
              aria-label="Maximize"
            >
              <Square
                className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#f1f5f9] transition-colors"
                strokeWidth={2}
              />
            </button>
            {/* Close Button */}
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#EF4444] transition-all duration-200 cursor-pointer focus:outline-none group"
              aria-label="Close"
            >
              <X
                className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="relative flex-1 overflow-y-auto scroll-smooth">
          <HeroSection />
          <FeaturesSection />
          <FormatsSection />
          <KeyboardSection />
          <InstallSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
