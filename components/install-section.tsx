"use client";

import { Snippet, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";

const installCommands = {
  quick: {
    label: "Quick Install",
    command: "go install github.com/sametcn99/golter@latest",
  },
  linux: {
    label: "Linux",
    commands: [
      { text: "# Ubuntu/Debian", type: "comment" },
      { text: "sudo apt update && sudo apt install ffmpeg", type: "command" },
      { text: "", type: "empty" },
      { text: "# Arch Linux", type: "comment" },
      { text: "sudo pacman -S ffmpeg", type: "command" },
      { text: "", type: "empty" },
      { text: "# Build", type: "comment" },
      { text: "go build -o golter main.go", type: "command" },
    ],
  },
  macos: {
    label: "macOS",
    commands: [
      { text: "brew install ffmpeg", type: "command" },
      { text: "go build -o golter main.go", type: "command" },
      { text: "./golter", type: "command" },
    ],
  },
  windows: {
    label: "Windows",
    commands: [
      { text: "# Using winget", type: "comment" },
      { text: "winget install ffmpeg", type: "command" },
      { text: "", type: "empty" },
      { text: "# Build", type: "comment" },
      { text: "go build -o golter.exe main.go", type: "command" },
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
          <div className="rounded-lg border border-[#A78BFA]/30 bg-[#1E293B] p-6">
            <h3 className="text-lg font-mono font-semibold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="text-[#10B981]">✓</span>
              One-Click Install
            </h3>
            <Snippet
              symbol="$"
              variant="bordered"
              classNames={{
                base: "w-full border-[#334155] bg-[#0F172A]",
                pre: "font-mono text-sm text-[#F1F5F9]",
                symbol: "text-[#34D399]",
                copyButton: "text-[#94A3B8] hover:text-[#F1F5F9]",
              }}
              id="install-quick-snippet"
              data-umami-event="install-quick-copy"
            >
              {installCommands.quick.command}
            </Snippet>
          </div>

          {/* Taskfile Install */}
          <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
            <h3 className="text-lg font-mono font-semibold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="text-[#FBBF24]">⚡</span>
              Build with Taskfile (Recommended)
            </h3>
            <div className="rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm">
              <div className="text-[#64748B]"># Clone repository</div>
              <div className="text-[#F1F5F9]">
                <span className="text-[#34D399]">$ </span>git clone
                https://github.com/sametcn99/golter.git
              </div>
              <div className="text-[#F1F5F9]">
                <span className="text-[#34D399]">$ </span>cd golter
              </div>
              <div className="h-4" />
              <div className="text-[#64748B]"># Install task</div>
              <div className="text-[#F1F5F9]">
                <span className="text-[#34D399]">$ </span>go install
                github.com/go-task/task/v3/cmd/task@latest
              </div>
              <div className="h-4" />
              <div className="text-[#64748B]"># Install golter</div>
              <div className="text-[#F1F5F9]">
                <span className="text-[#34D399]">$ </span>task install
              </div>
              <div className="h-4" />
              <div className="text-[#64748B]"># Run</div>
              <div className="text-[#F1F5F9]">
                <span className="text-[#34D399]">$ </span>golter
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
                tabList: "bg-[#1E293B] border-[#334155] gap-2 p-1 font-mono",
                cursor: "bg-[#1E3A5F]",
                tab: "px-4 py-2 hover:bg-[#1E3A5F] rounded-md transition-all h-auto",
                tabContent:
                  "group-data-[selected=true]:text-white text-[#94A3B8]",
              }}
            >
              <Tab key="linux" title="Linux">
                <div className="mt-4 rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm">
                  <div className="text-[#64748B]"># Ubuntu/Debian</div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>sudo apt update &&
                    sudo apt install ffmpeg
                  </div>
                  <div className="h-4" />
                  <div className="text-[#64748B]"># Arch Linux</div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>sudo pacman -S
                    ffmpeg
                  </div>
                  <div className="h-4" />
                  <div className="text-[#64748B]"># Build</div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>go build -o golter
                    main.go
                  </div>
                </div>
              </Tab>
              <Tab key="macos" title="macOS">
                <div className="mt-4 rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm">
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>brew install
                    ffmpeg
                  </div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>go build -o golter
                    main.go
                  </div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">$ </span>./golter
                  </div>
                </div>
              </Tab>
              <Tab key="windows" title="Windows">
                <div className="mt-4 rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm">
                  <div className="text-[#64748B]"># Using winget</div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">&gt; </span>winget install
                    ffmpeg
                  </div>
                  <div className="h-4" />
                  <div className="text-[#64748B]"># Build</div>
                  <div className="text-[#F1F5F9]">
                    <span className="text-[#34D399]">&gt; </span>go build -o
                    golter.exe main.go
                  </div>
                </div>
              </Tab>
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
