import { ImageResponse } from "next/og";

// Static social-share image (1200×630) generated at build time.
export const dynamic = "force-static";
export const alt = "GymFactor — a gym workout logger for iPhone and Apple Watch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101010",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#d3f45b",
              color: "#101010",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "#d3f45b",
            }}
          >
            <span style={{ color: "#f5f5f5" }}>GYM</span>FACTOR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              color: "#f5f5f5",
            }}
          >
            <span>The workout log that</span>
            <span>remembers your last set.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#9a9a9a",
              lineHeight: 1.35,
            }}
          >
            Gym workout logger for iPhone &amp; Apple Watch — programs, last-session
            weights, progress. Offline, no account.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
