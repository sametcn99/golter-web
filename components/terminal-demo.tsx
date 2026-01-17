"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Grid2X2,
  Menu,
  Minus,
  Plus,
  RefreshCw,
  Square,
  X,
} from "lucide-react";

export function TerminalDemo() {
  const files = [
    { name: "Documents", type: "folder" },
    { name: "Downloads", type: "folder" },
    { name: "Music", type: "folder" },
    { name: "Pictures", type: "folder" },
    { name: "Videos", type: "folder" },
    { name: "Projects", type: "folder" },
    { name: "Work", type: "folder" },
    { name: "Archive", type: "folder" },
    { name: "Backup", type: "folder" },
    { name: "Personal", type: "folder" },
    { name: "Misc", type: "folder" },
  ];

  return (
    <div className="rounded-xl border border-[#334155] bg-[#1E1E1E] overflow-hidden shadow-2xl font-mono text-sm md:text-base w-full max-w-4xl mx-auto terminal-glow">
      {/* Window Header */}
      <div className="relative flex items-center justify-between px-3 py-2 bg-[#2D2D2D] border-b border-[#1E1E1E] text-[#C5C5C5] select-none h-10">
        {/* Left: Tab/Add */}
        <div className="flex items-center">
          <div
            className="p-1 hover:bg-[#3E3E3E] rounded transition-colors cursor-pointer"
            title="New Tab"
            id="terminal-new-tab-btn"
          >
            <Plus size={18} />
          </div>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-medium text-xs md:text-sm text-center truncate max-w-[50%]">
          user@terminal: ~ — golter
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 mr-2">
            <Grid2X2
              size={18}
              className="cursor-pointer hover:text-white"
              id="terminal-control-grid"
            />
            <Menu
              size={18}
              className="cursor-pointer hover:text-white"
              id="terminal-control-menu"
            />
          </div>
          <div className="flex items-center gap-3">
            <Minus
              size={18}
              className="cursor-pointer hover:text-white"
              id="terminal-control-minimize"
            />
            <Square
              size={14}
              className="cursor-pointer hover:text-white"
              id="terminal-control-maximize"
            />
            <X
              size={18}
              className="cursor-pointer hover:text-red-400"
              id="terminal-control-close"
            />
          </div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 bg-[#1E1E1E] text-[#D4D4D4] min-h-[500px] flex flex-col font-mono">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 bg-[#A855F7] text-white px-2 py-0.5 w-fit font-bold mb-6"
        >
          <RefreshCw size={16} className="animate-spin-slow" />
          <span>Golter - File Converter</span>
        </motion.div>

        {/* Prompt/Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <div className="text-[#A855F7] font-bold mb-4">
            Select files to convert
          </div>

          <div className="flex items-center gap-2 text-[#3B82F6] font-bold mb-4">
            <span className="text-[#EAB308]">📂</span>
            <span>/home/user</span>
          </div>

          <div className="text-[#64748B] mb-2">
            <span className="mr-2">17</span>
            12 folders, 4 files
          </div>
        </motion.div>

        {/* File List */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-1 bg-[#3B82F6] text-white w-fit mb-1"
          >
            <div className="w-5 flex justify-center">
              <ArrowLeft size={16} />
            </div>
            <span>..</span>
          </motion.div>

          <div className="space-y-0.5">
            {files.map((file, i) => (
              <motion.div
                key={file.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.03 }}
                className="flex items-center gap-2 px-1 hover:bg-[#3E3E3E] cursor-pointer"
                id={`terminal-file-${file.name.toLowerCase()}`}
              >
                <span className="text-[#EAB308]">📂</span>
                <span>{file.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#64748B] text-2xl mt-1 leading-none pl-1"
          >
            ..
          </motion.div>
        </div>

        {/* Footer Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 pt-2 text-xs md:text-sm flex flex-wrap gap-x-4 gap-y-1 select-none"
        >
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">↑↓/jk</span>
            <span className="text-[#94A3B8]">Navigate</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">Space</span>
            <span className="text-[#94A3B8]">Select</span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">a</span>
            <span className="text-[#94A3B8]">Select all</span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">d</span>
            <span className="text-[#94A3B8]">Deselect</span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7] whitespace-nowrap">Enter</span>
            <span className="text-[#94A3B8] whitespace-nowrap">
              Open folder
            </span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">c</span>
            <span className="text-[#94A3B8]">Confirm</span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">/</span>
            <span className="text-[#94A3B8]">Filter</span>
          </div>
          <div className="flex items-center gap-1 pt-0.5 sm:pt-0">
            <span className="text-[#94A3B8]">|</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#A855F7]">q</span>
            <span className="text-[#94A3B8]">Quit</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
