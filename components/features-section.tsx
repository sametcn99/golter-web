"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Monitor, Gauge, Keyboard, FileStack } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Modern TUI Interface",
    description:
      "Beautiful terminal interface with animations and visual feedback.",
    color: "#A78BFA",
  },
  {
    icon: Layers,
    title: "Batch Conversion",
    description:
      "Convert multiple files simultaneously with concurrent processing.",
    color: "#34D399",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Native image processing and optimized encoding powered by Go.",
    color: "#FBBF24",
  },
  {
    icon: Gauge,
    title: "Compression Options",
    description: "Choose between High, Balanced, or Compact quality levels.",
    color: "#60A5FA",
  },
  {
    icon: Keyboard,
    title: "Vim Key Bindings",
    description: "Fast navigation with j/k, h/l and full keyboard support.",
    color: "#EC4899",
  },
  {
    icon: FileStack,
    title: "Smart File Selection",
    description:
      "Select only files of the same type for consistent conversions.",
    color: "#F43F5E",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-[#1E293B]/50 border-y border-[#334155]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Terminal-style section header */}
          <div className="inline-block mb-4 font-mono text-sm text-[#64748B]">
            <span className="text-[#A78BFA]">func</span>{" "}
            <span className="text-[#34D399]">Features</span>() {"{"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 font-mono">
            <span className="text-[#64748B]">// </span>
            Powerful <span className="text-[#A78BFA]">Features</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-mono">
            Everything you need to streamline your file conversion experience in
            one tool.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="h-full rounded-lg border border-[#334155] bg-[#0F172A] p-6 hover:border-[#A78BFA]/50 transition-all duration-300 group"
                style={{
                  boxShadow: `0 0 0 0 ${feature.color}20`,
                }}
              >
                {/* Feature icon with colored border */}
                <div
                  className="w-12 h-12 rounded border flex items-center justify-center mb-4 transition-colors"
                  style={{
                    borderColor: feature.color,
                    backgroundColor: `${feature.color}10`,
                  }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2 font-mono group-hover:text-[#A78BFA] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] text-sm font-mono leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing brace */}
        <div className="text-center mt-8 font-mono text-sm text-[#64748B]">
          {"}"}
        </div>
      </div>
    </section>
  );
}
