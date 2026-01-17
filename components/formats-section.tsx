"use client";

import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { ImageIcon, Video, Music, FileText } from "lucide-react";

const imageFormats = {
  input: [".jpg", ".jpeg", ".png", ".webp"],
  output: [".jpg", ".png", ".webp"],
  features: [
    "Quality-based compression (92% High, 75% Balanced, 55% Compact)",
    "WebP lossless mode",
    "Optimized PNG compression",
  ],
  color: "#EC4899",
};

const videoFormats = {
  input: [".mp4", ".avi", ".mkv", ".webm", ".gif", ".mov"],
  output: [".mp4", ".avi", ".mkv", ".webm", ".gif", ".mov"],
  features: [
    "H.264/H.265 encoding (MP4/MKV)",
    "VP9 encoding (WebM)",
    "Multi-threaded encoding",
    "Fast-start for MP4 streaming",
  ],
  color: "#F43F5E",
};

const audioFormats = {
  input: [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac"],
  output: [".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac"],
  features: [
    "Bitrate control (320k High, 192k Balanced, 128k Compact)",
    "FLAC lossless support",
    "Opus/Vorbis encoding (OGG)",
  ],
  color: "#8B5CF6",
};

const documentFormats = {
  input: [
    ".pdf",
    ".md",
    ".html",
    ".csv",
    ".xlsx",
    ".xls",
    ".epub",
    ".mobi",
    ".azw",
    ".azw3",
    ".fb2",
    ".txt",
    ".docx",
  ],
  output: [
    ".pdf",
    ".md",
    ".html",
    ".epub",
    ".xlsx",
    ".csv",
    ".txt",
    ".mobi",
    ".azw",
    ".azw3",
    ".fb2",
    ".docx",
  ],
  features: [
    "PDF text extraction → Markdown",
    "Markdown → stylized HTML",
    "CSV ↔ Excel conversion",
    "EPUB creation",
    "eBook format conversion (MOBI, AZW, FB2)",
  ],
  color: "#3B82F6",
};

function FormatContent({ data }: { data: typeof imageFormats }) {
  return (
    <div className="mt-6 rounded-lg border border-[#334155] bg-[#1E293B] p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-mono text-[#64748B] mb-3">
            <span className="text-[#A78BFA]">Input</span> []string
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {data.input.map((format) => (
              <span
                key={format}
                className="px-3 py-1 rounded border border-[#334155] bg-[#0F172A] font-mono text-xs text-[#F1F5F9]"
              >
                {format}
              </span>
            ))}
          </div>

          <h4 className="text-sm font-mono text-[#64748B] mb-3">
            <span className="text-[#34D399]">Output</span> []string
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.output.map((format) => (
              <span
                key={format}
                className="px-3 py-1 rounded border font-mono text-xs"
                style={{
                  borderColor: data.color,
                  backgroundColor: `${data.color}10`,
                  color: data.color,
                }}
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-mono text-[#64748B] mb-3">
            <span className="text-[#FBBF24]">Features</span> []string
          </h4>
          <ul className="space-y-2">
            {data.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-[#F1F5F9] font-mono"
              >
                <span style={{ color: data.color }}>├──</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
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
          <div className="inline-block mb-4 font-mono text-sm text-[#64748B]">
            <span className="text-[#A78BFA]">type</span>{" "}
            <span className="text-[#34D399]">SupportedFormats</span>{" "}
            <span className="text-[#A78BFA]">struct</span> {"{"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 font-mono">
            <span className="text-[#64748B]">// </span>
            Supported <span className="text-[#A78BFA]">Formats</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-mono">
            Easily convert between image, video, audio, and document formats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs
            aria-label="Format categories"
            variant="bordered"
            classNames={{
              tabList: "bg-[#1E293B] border-[#334155] gap-2 p-1 font-mono",
              cursor: "bg-[#1E3A5F]",
              tab: "px-4 py-2 hover:bg-[#1E3A5F] rounded-md transition-all",
              tabContent:
                "group-data-[selected=true]:text-white text-[#94A3B8]",
            }}
          >
            <Tab
              key="images"
              title={
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#EC4899]" />
                  <span className="hidden sm:inline font-mono">Image</span>
                </div>
              }
            >
              <FormatContent data={imageFormats} />
            </Tab>
            <Tab
              key="videos"
              title={
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#F43F5E]" />
                  <span className="hidden sm:inline font-mono">Video</span>
                </div>
              }
            >
              <FormatContent data={videoFormats} />
            </Tab>
            <Tab
              key="audio"
              title={
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="hidden sm:inline font-mono">Audio</span>
                </div>
              }
            >
              <FormatContent data={audioFormats} />
            </Tab>
            <Tab
              key="documents"
              title={
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3B82F6]" />
                  <span className="hidden sm:inline font-mono">Document</span>
                </div>
              }
            >
              <FormatContent data={documentFormats} />
            </Tab>
          </Tabs>
        </motion.div>

        <div className="text-center mt-8 font-mono text-sm text-[#64748B]">
          {"}"}
        </div>
      </div>
    </section>
  );
}
