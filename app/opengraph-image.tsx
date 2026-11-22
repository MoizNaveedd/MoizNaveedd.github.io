import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Moiz Naveed — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050505",
          color: "#f4f4f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(34, 211, 238, 0.16)",
            borderRadius: "999px",
            filter: "blur(70px)",
            height: "340px",
            position: "absolute",
            right: "-80px",
            top: "-100px",
            width: "340px",
          }}
        />
        <img src={logoSrc} alt="" width={110} height={110} style={{ marginBottom: 20, marginTop: -40 }} />
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.2em",
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: "-0.06em" }}>
          Moiz<span style={{ color: "#a5f3fc" }}>.</span>
        </div>
        <div style={{ color: "#d4d4d8", display: "flex", fontSize: 40, marginTop: 12 }}>
          Building thoughtful digital experiences
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            bottom: 58,
            color: "#a1a1aa",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            left: 72,
            paddingTop: 24,
            position: "absolute",
            right: 72,
          }}
        >
          <span>moiznaveedd.github.io</span>
          <span>React · Next.js · TypeScript</span>
        </div>
      </div>
    ),
    size,
  );
}
