import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { FormatsSection } from "@/components/formats-section";
import { InstallSection } from "@/components/install-section";
import { KeyboardSection } from "@/components/keyboard-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] p-2 md:p-4">
      {/* Terminal Window Frame */}
      <div className="relative rounded-lg border border-[#334155] bg-[#0F172A] overflow-hidden terminal-glow">
        {/* Terminal Title Bar */}
        <div className="sticky top-0 z-50 flex items-center gap-3 px-4 py-3 bg-[#1E293B] border-b border-[#334155]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm font-mono text-[#94A3B8]">
              golter@terminal:~
            </span>
          </div>
          <div className="w-16" />
        </div>

        {/* Scanline effect */}
        <div className="scanline" />

        {/* Main Content */}
        <main className="relative">
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
