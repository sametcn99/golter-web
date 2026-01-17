import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Golter - Terminal Based File Converter";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F172A", // Dark slate background matching site
        color: "white",
        fontFamily: "monospace",
        position: "relative",
      }}
    >
      {/* Background grid effect - subtle purple tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Logo - matching favicon design */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24px",
          width: "160px",
          height: "160px",
          marginBottom: "48px",
          background: "linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 100%)",
          border: "3px solid #A78BFA",
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
        }}
      >
        <div
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            color: "#8B5CF6",
            fontFamily: "monospace",
            lineHeight: 1,
          }}
        >
          G
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          letterSpacing: "-0.05em",
          marginBottom: "24px",
          color: "#A78BFA", // Purple matching site
          fontFamily: "monospace",
        }}
      >
        Golter
      </div>

      {/* Subtitle with terminal comment style */}
      <div
        style={{
          fontSize: "32px",
          color: "#94A3B8", // Slate-400
          textAlign: "center",
          maxWidth: "80%",
          fontFamily: "monospace",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color: "#64748B" }}>{"// "}</span>
        Terminal Based File Converter
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "20px",
          color: "#64748B",
          fontFamily: "monospace",
        }}
      >
        golter.sametcc.me
      </div>
    </div>,
    {
      ...size,
    },
  );
}
