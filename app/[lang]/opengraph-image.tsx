import { ImageResponse } from "next/og";
import { normalizeLang, type Lang } from "@/lib/i18n";

export const alt = "Trainody — Software per personal trainer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(query: string) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${query}`, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
    })
  ).text();
  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error("font url not found");
  return (await fetch(url)).arrayBuffer();
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const fonts: any[] = [];
  try {
    fonts.push({
      name: "Archivo Black",
      data: await loadFont("Archivo+Black"),
      weight: 400,
      style: "normal",
    });
  } catch {
    // se il fetch del font fallisce, si usa il font di default
  }

  const copy: Record<Lang, { title: string; tagline: string; cta: string }> = {
    it: {
      title: "Automatizza le schede. Moltiplica i clienti.",
      tagline: "Software gestionale all-in-one per personal trainer",
      cta: "Inizia gratis",
    },
    en: {
      title: "Automate workouts. Multiply your clients.",
      tagline: "All-in-one software for personal trainers",
      cta: "Start for free",
    },
    es: {
      title: "Automatiza las rutinas. Multiplica tus clientes.",
      tagline: "Software de gestión todo en uno para entrenadores personales",
      cta: "Empieza gratis",
    },
  };
  const { title, tagline, cta } = copy[lang];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0C0C0D",
          padding: "80px",
          fontFamily: "Archivo Black",
          color: "#F5F5F4",
          backgroundImage:
            "radial-gradient(60% 80% at 88% 4%, rgba(162,229,51,0.28) 0%, transparent 60%)",
        }}
      >
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "#A2E533",
            }}
          />
          <div style={{ fontSize: 30, textTransform: "uppercase", letterSpacing: -1 }}>
            Trainody
          </div>
        </div>

        {/* titolo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              lineHeight: 1.04,
              textTransform: "uppercase",
              letterSpacing: -2,
              maxWidth: 1000,
              backgroundImage: "linear-gradient(120deg, #F5F5F4 35%, #A2E533)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#A1A1A6" }}>{tagline}</div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              backgroundColor: "#A2E533",
              color: "#0C0C0D",
              fontSize: 24,
              padding: "14px 30px",
              borderRadius: 10,
              textTransform: "uppercase",
            }}
          >
            {cta}
          </div>
          <div style={{ fontSize: 24, color: "#A1A1A6" }}>trainody.com</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
