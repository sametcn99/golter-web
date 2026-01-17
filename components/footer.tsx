"use client";

import { Link } from "@heroui/react";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#334155] bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded border border-[#A78BFA] bg-[#A78BFA]/10 flex items-center justify-center">
              <span className="text-[#A78BFA] font-bold text-lg font-mono">
                G
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-[#F1F5F9] font-mono">Golter</h3>
              <p className="text-sm text-[#64748B] font-mono">
                Terminal-based file converter
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-sm">
            <Link
              href="https://github.com/sametcn99/golter"
              target="_blank"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#A78BFA] transition-colors"
              id="footer-github-link"
              data-umami-event="footer-github-click"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Link>
            <span className="text-[#334155]">│</span>
            <span className="text-[#64748B]">GPL-3.0 License</span>
          </div>
        </div>

        {/* Terminal-style footer decoration */}
        <div className="mt-8 pt-4 border-t border-[#334155] text-center font-mono text-xs text-[#334155]">
          <span>Process exited with code </span>
          <span className="text-[#10B981]">0</span>
        </div>
      </div>
    </footer>
  );
}
