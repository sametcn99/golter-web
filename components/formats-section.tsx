"use client";

import { motion } from "framer-motion";
import {
  ImageIcon,
  Video,
  Music,
  FileText,
  Info,
  CheckCircle2,
} from "lucide-react";

const imageFormats = {
  title: "Images",
  description: "High-quality image conversion with smart compression.",
  input: [".jpg", ".jpeg", ".png", ".webp"],
  output: [".jpg", ".png", ".webp"],
  features: [
    "Quality-based compression (92% High, 75% Balanced, 55% Compact)",
    "WebP lossless mode for highest quality",
    "Optimized PNG compression levels",
  ],
  color: "#EC4899",
};

const videoFormats = {
  title: "Videos",
  description: "Optimized video workflows for streaming and sharing.",
  input: [".mp4", ".avi", ".mkv", ".webm", ".gif", ".mov"],
  output: [".mp4", ".avi", ".mkv", ".webm", ".gif", ".mov"],
  features: [
    "H.264/H.265 encoding for MP4/MKV",
    "VP9 encoding for WebM",
    "Optimized GIF creation with palette generation",
    "Multi-threaded encoding",
    "Fast-start enabled for MP4 streaming",
  ],
  color: "#F43F5E",
};

const audioFormats = {
  title: "Audio",
  description: "Studio-grade audio conversion with bitrate presets.",
  input: [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac"],
  output: [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac"],
  features: [
    "Bitrate control (320k High, 192k Balanced, 128k Compact)",
    "FLAC lossless support",
    "Opus/Vorbis encoding for OGG",
  ],
  color: "#8B5CF6",
};

const documentFormats = {
  title: "Documents",
  description: "Rich document pipelines for books, office, and data formats.",
  rows: [
    {
      input: [".pdf", ".md", ".html"],
      output: [
        ".pdf",
        ".md",
        ".html",
        ".docx",
        ".epub",
        ".mobi",
        ".azw",
        ".azw3",
        ".fb2",
      ],
    },
    { input: [".docx"], output: [".md", ".html", ".txt"] },
    {
      input: [".epub", ".mobi", ".azw", ".azw3", ".fb2"],
      output: [
        ".epub",
        ".mobi",
        ".azw",
        ".azw3",
        ".fb2",
        ".pdf",
        ".html",
        ".txt",
        ".md",
      ],
    },
    { input: [".csv"], output: [".xlsx", ".json"] },
    { input: [".xlsx", ".xls"], output: [".csv", ".json"] },
    {
      input: [".json"],
      output: [".yaml", ".yml", ".xml", ".csv", ".xlsx", ".xls"],
    },
    { input: [".yaml", ".yml"], output: [".json", ".toml"] },
    { input: [".toml"], output: [".yaml", ".yml"] },
    { input: [".xml"], output: [".json"] },
  ],
  features: [
    "PDF text extraction to Markdown",
    "Markdown to styled HTML with responsive design",
    "Markdown/HTML to EPUB conversion",
    "EPUB/MOBI/AZW/AZW3/FB2 conversions via Calibre (if installed)",
    "DOCX conversions via Pandoc (if installed)",
    "PDF compression/optimization",
    "CSV to Excel conversion with styled headers and auto-fit columns",
    "Excel to CSV export (exports first sheet)",
    "JSON ↔ YAML conversion (preserves nested data)",
    "JSON ↔ XML conversion with automatic root wrapping",
    "JSON ↔ CSV / Excel (first sheet) conversions",
    "YAML ↔ TOML conversion",
  ],
  color: "#3B82F6",
};

function FormatBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="px-3 py-1 rounded-full border text-xs font-mono"
      style={{
        borderColor: `${color}66`,
        color,
        backgroundColor: `${color}14`,
      }}
    >
      {label}
    </span>
  );
}

function FormatCard({
  title,
  description,
  icon: Icon,
  color,
  input,
  output,
  features,
}: {
  title: string;
  description: string;
  icon: typeof ImageIcon;
  color: string;
  input: string[];
  output: string[];
  features: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#1E293B] bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#0F172A] p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border"
            style={{
              borderColor: `${color}66`,
              color,
              backgroundColor: `${color}14`,
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white font-mono">
              {title}
            </h3>
            <p className="text-sm text-[#94A3B8] font-mono">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[#1E293B] bg-[#0B1220] p-4">
          <h4 className="text-xs uppercase tracking-widest text-[#64748B] font-mono mb-3">
            Inputs → Outputs
          </h4>
          <div className="flex flex-wrap gap-2">
            {input.map((format) => (
              <span
                key={`input-${format}`}
                className="px-3 py-1 rounded-md border border-[#1E293B] bg-[#0F172A] text-xs text-[#E2E8F0] font-mono"
              >
                {format}
              </span>
            ))}
            <span className="text-xs text-[#64748B] font-mono">→</span>
            {output.map((format) => (
              <span
                key={`output-${format}`}
                className="px-3 py-1 rounded-md border text-xs font-mono"
                style={{
                  borderColor: `${color}66`,
                  color,
                  backgroundColor: `${color}14`,
                }}
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#1E293B] bg-[#0B1220] p-4">
          <h4 className="text-xs uppercase tracking-widest text-[#64748B] font-mono mb-3">
            Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2 text-sm text-[#E2E8F0]">
                <CheckCircle2 className="h-4 w-4" style={{ color }} />
                <span className="font-mono">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DocumentMatrix({
  data,
  icon: Icon,
}: {
  data: typeof documentFormats;
  icon: typeof FileText;
}) {
  return (
    <div className="rounded-2xl border border-[#1E293B] bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#0F172A] p-6 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border"
            style={{
              borderColor: `${data.color}66`,
              color: data.color,
              backgroundColor: `${data.color}14`,
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white font-mono">
              {data.title}
            </h3>
            <p className="text-sm text-[#94A3B8] font-mono">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[#1E293B] bg-[#0B1220]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] border-b border-[#1E293B] px-4 py-3 text-xs uppercase tracking-widest text-[#64748B] font-mono">
          <span>Input</span>
          <span>Output</span>
        </div>
        <div className="divide-y divide-[#1E293B]">
          {data.rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1.2fr] px-4 py-4"
            >
              <div className="flex flex-wrap gap-2">
                {row.input.map((format) => (
                  <span
                    key={`doc-in-${format}-${index}`}
                    className="inline-flex h-7 items-center px-3 rounded-md border border-[#1E293B] bg-[#0F172A] text-xs text-[#E2E8F0] font-mono leading-none"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {row.output.map((format) => (
                  <span
                    key={`doc-out-${format}-${index}`}
                    className="inline-flex h-7 items-center px-3 rounded-md border text-xs font-mono leading-none"
                    style={{
                      borderColor: `${data.color}66`,
                      color: data.color,
                      backgroundColor: `${data.color}14`,
                    }}
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[#1E293B] bg-[#0B1220] p-4">
        <h4 className="text-xs uppercase tracking-widest text-[#64748B] font-mono mb-3">
          Features
        </h4>
        <ul className="grid gap-2 md:grid-cols-2">
          {data.features.map((feature, index) => (
            <li key={index} className="flex gap-2 text-sm text-[#E2E8F0]">
              <CheckCircle2 className="h-4 w-4" style={{ color: data.color }} />
              <span className="font-mono">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FormatsSection() {
  return (
    <section className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-mono text-[#64748B]">
            <span className="text-[#A78BFA]">type</span>
            <span className="text-[#34D399]">SupportedFormats</span>
            <span className="text-[#A78BFA]">struct</span>
            <span className="text-[#64748B]">{"{"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 font-mono">
            <span className="text-[#64748B]">// </span>
            Supported <span className="text-[#A78BFA]">Formats</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-mono">
            Clear input/output mappings, feature highlights, and dependencies at
            a glance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          <FormatCard
            title={imageFormats.title}
            description={imageFormats.description}
            icon={ImageIcon}
            color={imageFormats.color}
            input={imageFormats.input}
            output={imageFormats.output}
            features={imageFormats.features}
          />

          <FormatCard
            title={videoFormats.title}
            description={videoFormats.description}
            icon={Video}
            color={videoFormats.color}
            input={videoFormats.input}
            output={videoFormats.output}
            features={videoFormats.features}
          />

          <FormatCard
            title={audioFormats.title}
            description={audioFormats.description}
            icon={Music}
            color={audioFormats.color}
            input={audioFormats.input}
            output={audioFormats.output}
            features={audioFormats.features}
          />

          <DocumentMatrix data={documentFormats} icon={FileText} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 rounded-2xl border border-[#1E293B] bg-[#0B1220] p-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1E293B] bg-[#0F172A]">
              <Info className="h-5 w-5 text-[#38BDF8]" />
            </div>
            <div>
              <p className="text-sm font-mono text-[#E2E8F0]">
                <span className="text-[#38BDF8]">Note:</span> Video and audio
                conversion requires
                <span className="text-[#A78BFA]"> ffmpeg</span>. Ebook
                conversions beyond EPUB require Calibre&apos;s{" "}
                <span className="text-[#A78BFA]">ebook-convert</span>. DOCX
                conversions require
                <span className="text-[#A78BFA]"> Pandoc</span>.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center font-mono text-xs text-[#64748B]">
          {"}"}
        </div>
      </div>
    </section>
  );
}
