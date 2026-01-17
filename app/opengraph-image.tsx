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
        backgroundColor: "#09090b", // zinc-950
        color: "white",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "4px solid #3b82f6", // blue-500
          width: "120px",
          height: "120px",
          marginBottom: "40px",
          background: "black",
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 17l6-6-6-6" />
          <path d="M12 19h8" />
        </svg>
      </div>
      <div
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          letterSpacing: "-0.05em",
          marginBottom: "20px",
          background: "linear-gradient(to bottom right, #ffffff, #94a3b8)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Golter
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#94a3b8", // slate-400
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Terminal Based File Converter
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "20px",
          color: "#475569", // slate-600
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
