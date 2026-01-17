import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { FormatsSection } from "@/components/formats-section";
import { InstallSection } from "@/components/install-section";
import { KeyboardSection } from "@/components/keyboard-section";
import { Footer } from "@/components/footer";
import { X, Minus, Plus } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-screen bg-[#0F172A] p-2 md:p-4 flex flex-col overflow-hidden">
      {/* Terminal Window Frame */}
      <div className="relative flex-1 flex flex-col rounded-lg border border-[#334155] bg-[#0F172A] overflow-hidden terminal-glow">
        {/* Terminal Title Bar */}
        <div className="shrink-0 z-50 flex items-center gap-3 px-4 py-3 bg-[#1E293B] border-b border-[#334155]">
          <div className="flex gap-2 group">
            <button
              className="w-3 h-3 rounded-full bg-[#EF4444] hover:bg-[#f87171] transition-colors cursor-pointer focus:outline-none flex items-center justify-center p-0.5"
              aria-label="Close"
            >
              <X
                className="w-full h-full text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </button>
            <button
              className="w-3 h-3 rounded-full bg-[#F59E0B] hover:bg-[#fbbf24] transition-colors cursor-pointer focus:outline-none flex items-center justify-center p-0.5"
              aria-label="Minimize"
            >
              <Minus
                className="w-full h-full text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </button>
            <button
              className="w-3 h-3 rounded-full bg-[#10B981] hover:bg-[#34d399] transition-colors cursor-pointer focus:outline-none flex items-center justify-center p-0.5"
              aria-label="Maximize"
            >
              <Plus
                className="w-full h-full text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </button>
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm font-mono text-[#94A3B8]">
              golter@terminal:~
            </span>
          </div>
          <div className="w-16" />
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
