"use client";

import { Snippet, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";

const installCommands = {
  quick: {
    label: "Quick Install",
    command: "go install github.com/sametcn99/golter@latest",
  },
  taskfile: {
    label: "Build with Taskfile (Recommended)",
    commands: [
      { text: "# Clone repository", type: "comment" },
      {
        text: "git clone https://github.com/sametcn99/golter.git",
        type: "command",
      },
      { text: "cd golter", type: "command" },
      { text: "", type: "empty" },
      { text: "# Install task", type: "comment" },
      {
        text: "go install github.com/go-task/task/v3/cmd/task@latest",
        type: "command",
      },
      { text: "", type: "empty" },
      { text: "# Install golter", type: "comment" },
      { text: "task install", type: "command" },
      { text: "", type: "empty" },
      { text: "# Run", type: "comment" },
      { text: "golter", type: "command" },
    ],
  },
  linux: {
    label: "Linux",
    commands: [
      { text: "# Ubuntu/Debian", type: "comment" },
      {
        text: "sudo apt update && sudo apt install ffmpeg calibre pandoc",
        type: "command",
      },
      { text: "", type: "empty" },
      { text: "# Fedora", type: "comment" },
      { text: "sudo dnf install ffmpeg calibre pandoc", type: "command" },
      { text: "", type: "empty" },
      { text: "# Arch Linux", type: "comment" },
      { text: "sudo pacman -S ffmpeg calibre pandoc", type: "command" },
      { text: "", type: "empty" },
      { text: "# Build", type: "comment" },
      { text: "go build -o golter main.go", type: "command" },
      { text: "", type: "empty" },
      { text: "# Run", type: "comment" },
      { text: "./golter", type: "command" },
    ],
  },
  macos: {
    label: "macOS",
    commands: [
      { text: "# Install ffmpeg", type: "comment" },
      { text: "brew install ffmpeg", type: "command" },
      { text: "", type: "empty" },
      { text: "# Install Calibre (ebook-convert)", type: "comment" },
      { text: "brew install --cask calibre", type: "command" },
      { text: "", type: "empty" },
      { text: "# Install Pandoc", type: "comment" },
      { text: "brew install pandoc", type: "command" },
      { text: "", type: "empty" },
      { text: "# Build", type: "comment" },
      { text: "go build -o golter main.go", type: "command" },
      { text: "", type: "empty" },
      { text: "# Run", type: "comment" },
      { text: "./golter", type: "command" },
    ],
  },
  windows: {
    label: "Windows",
    commands: [
      { text: "# Using winget", type: "comment" },
      { text: "winget install ffmpeg", type: "command" },
      { text: "", type: "empty" },
      { text: "# Calibre (ebook-convert)", type: "comment" },
      { text: "winget install calibre.calibre", type: "command" },
      { text: "", type: "empty" },
      { text: "# Pandoc", type: "comment" },
      { text: "winget install --id JohnMacFarlane.Pandoc", type: "command" },
      { text: "", type: "empty" },
      { text: "# Or using chocolatey", type: "comment" },
      { text: "choco install ffmpeg", type: "command" },
      { text: "choco install calibre", type: "command" },
      { text: "choco install pandoc", type: "command" },
      { text: "", type: "empty" },
      { text: "# Build", type: "comment" },
      { text: "go build -o golter.exe main.go", type: "command" },
      { text: "", type: "empty" },
      { text: "# Run", type: "comment" },
      { text: "./golter.exe", type: "command" },
    ],
  },
};

export function InstallSection() {
  return (
    <section className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 font-mono text-sm text-[#64748B]">
            <span className="text-[#A78BFA]">func</span>{" "}
            <span className="text-[#34D399]">Install</span>(){" "}
            <span className="text-[#A78BFA]">error</span> {"{"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 font-mono">
            <span className="text-[#64748B]">// </span>
            Quick <span className="text-[#A78BFA]">Install</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-mono">
            Go 1.21+ and ffmpeg are required. ffmpeg must be installed for video
            and audio conversion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Quick install */}
          <div className="rounded-lg border border-[#A78BFA]/30 bg-[#1E293B] p-6 max-w-full overflow-hidden">
            <h3 className="text-lg font-mono font-semibold text-[#F1F5F9] mb-4 flex items-center gap-2">
              One-Click Install
            </h3>
            <div className="w-full overflow-x-auto">
              <Snippet
                symbol="$"
                variant="bordered"
                classNames={{
                  base: "w-full border-[#334155] bg-[#0F172A] min-w-min",
                  pre: "font-mono text-sm text-[#F1F5F9] whitespace-nowrap",
                  symbol: "text-[#34D399]",
                  copyButton: "text-[#94A3B8] hover:text-[#F1F5F9]",
                }}
                id="install-quick-snippet"
                data-umami-event="install-quick-copy"
              >
                {installCommands.quick.command}
              </Snippet>
            </div>
          </div>

          {/* Taskfile Install */}
          <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
            <h3 className="text-lg font-mono font-semibold text-[#F1F5F9] mb-4 flex items-center gap-2">
              {installCommands.taskfile.label}
            </h3>
            <div className="rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm overflow-x-auto">
              <div className="min-w-max">
                {installCommands.taskfile.commands.map((cmd, idx) => {
                  if (cmd.type === "comment")
                    return (
                      <div key={idx} className="text-[#64748B]">
                        {cmd.text}
                      </div>
                    );
                  if (cmd.type === "command")
                    return (
                      <div key={idx} className="text-[#F1F5F9]">
                        <span className="text-[#34D399]">$ </span>
                        {cmd.text}
                      </div>
                    );
                  if (cmd.type === "empty")
                    return <div key={idx} className="h-4" />;
                  return null;
                })}
              </div>
            </div>
          </div>

          {/* Platform specific */}
          <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
            <h3 className="text-lg font-mono font-semibold text-[#F1F5F9] mb-4">
              Platform Specific Install
            </h3>
            <Tabs
              aria-label="Platform tabs"
              variant="bordered"
              classNames={{
                tabList:
                  "bg-[#1E293B] border-[#334155] gap-2 p-1 font-mono w-full overflow-x-auto",
                cursor: "bg-[#1E3A5F]",
                tab: "px-4 py-2 hover:bg-[#1E3A5F] rounded-md transition-all h-auto whitespace-nowrap",
                tabContent:
                  "group-data-[selected=true]:text-white text-[#94A3B8]",
              }}
            >
              {(["linux", "macos", "windows"] as const).map((platform) => (
                <Tab key={platform} title={installCommands[platform].label}>
                  <div className="mt-4 rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm overflow-x-auto">
                    <div className="min-w-max">
                      {installCommands[platform].commands.map((cmd, idx) => {
                        if (cmd.type === "comment")
                          return (
                            <div key={idx} className="text-[#64748B]">
                              {cmd.text}
                            </div>
                          );
                        if (cmd.type === "command")
                          return (
                            <div key={idx} className="text-[#F1F5F9]">
                              <span className="text-[#34D399]">
                                {platform === "windows" ? "> " : "$ "}
                              </span>
                              {cmd.text}
                            </div>
                          );
                        if (cmd.type === "empty")
                          return <div key={idx} className="h-4" />;
                        return null;
                      })}
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </motion.div>

        <div className="text-center mt-8 font-mono text-sm text-[#64748B]">
          <span className="text-[#A78BFA]">return</span>{" "}
          <span className="text-[#FBBF24]">nil</span>
        </div>
        <div className="text-center font-mono text-sm text-[#64748B]">
          {"}"}
        </div>
      </div>
    </section>
  );
}
