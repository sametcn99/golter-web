"use client";

import { Kbd } from "@heroui/react";
import { motion } from "framer-motion";

const shortcuts = [
  { keys: ["↑", "k"], action: "Navigate up" },
  { keys: ["↓", "j"], action: "Navigate down" },
  { keys: ["←", "h"], action: "Go to parent directory" },
  { keys: ["→", "l"], action: "Enter directory" },
  { keys: ["Space"], action: "Select/Deselect" },
  { keys: ["a"], action: "Select all of same type" },
  { keys: ["d"], action: "Clear all selections" },
  { keys: ["c"], action: "Confirm selection" },
  { keys: ["/"], action: "Filter files" },
  { keys: ["g"], action: "Go to top" },
  { keys: ["G"], action: "Go to bottom" },
  { keys: ["Esc"], action: "Back / Cancel" },
  { keys: ["q"], action: "Quit" },
];

export function KeyboardSection() {
  return (
    <section className="py-24 px-4 bg-[#1E293B]/50 border-y border-[#334155]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 font-mono text-sm text-[#64748B]">
            <span className="text-[#A78BFA]">var</span>{" "}
            <span className="text-[#34D399]">keybindings</span> =
            map[string]string{"{"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 font-mono">
            <span className="text-[#64748B]">// </span>
            Keyboard <span className="text-[#A78BFA]">Shortcuts</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-mono">
            Fast and efficient navigation with Vim-like key bindings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-lg border border-[#334155] bg-[#0F172A] p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {shortcuts.map((shortcut, index) => (
                <motion.div
                  key={shortcut.action}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-2 px-3 rounded hover:bg-[#1E3A5F] transition-colors font-mono text-sm"
                >
                  <span className="text-[#94A3B8]">
                    <span className="text-[#A78BFA]">"</span>
                    {shortcut.action}
                    <span className="text-[#A78BFA]">"</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[#64748B]">:</span>
                    {shortcut.keys.map((key, keyIndex) => (
                      <span key={keyIndex} className="flex items-center gap-1">
                        {keyIndex > 0 && (
                          <span className="text-[#64748B] text-xs">|</span>
                        )}
                        <Kbd
                          classNames={{
                            base: "bg-[#1E293B] border-[#334155] px-2 py-1 min-w-[28px]",
                            content: "text-xs font-mono text-[#A78BFA]",
                          }}
                        >
                          {key}
                        </Kbd>
                      </span>
                    ))}
                    <span className="text-[#64748B]">,</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8 font-mono text-sm text-[#64748B]">
          {"}"}
        </div>
      </div>
    </section>
  );
}
