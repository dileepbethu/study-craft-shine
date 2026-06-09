import { createFileRoute, Link } from "@tanstack/react-router";
import { ETSY_URL } from "@/lib/edenne";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      { title: "Thank you · Edenne Life" },
      { name: "description", content: "Your Executive Reset is on the way." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYou() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-espresso)", color: "var(--color-ivory)", display: "flex", flexDirection: "column" }}>
      <div className="container-edn" style={{ paddingTop: 32, textAlign: "center" }}>
        <Link to="/" style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-ivory)" }}>
          Edenne Life
        </Link>
      </div>

      <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="container-edn text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-10" style={{ color: "var(--color-champagne)" }}>YOU ARE IN</div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", color: "var(--color-ivory)" }}>
            Check your inbox.<br />Your first reset<br />arrives.
          </h1>
          <p className="tagline mt-8" style={{ fontSize: 18, color: "var(--color-ash)" }}>
            If you don't see it within a few minutes, look in promotions or spam and mark it primary.
          </p>

          <div className="flex justify-center mt-12 mb-12">
            <span className="hairline-short" />
          </div>

          <p style={{ color: "var(--color-ash)", fontSize: 15, marginBottom: 28 }}>
            While you wait — the full operating system.
          </p>
          <a href={ETSY_URL} target="_blank" rel="noreferrer" className="btn-on-dark">
            Get The Executive Reset Blueprint — £29
          </a>
        </div>
      </main>

      <footer style={{ color: "var(--color-ash)", padding: "24px 0", borderTop: "0.5px solid rgba(212,184,150,0.2)" }}>
        <div className="container-edn text-center" style={{ fontSize: 11, letterSpacing: "0.1em" }}>
          © 2026 EDENNE LIFE · EDENNELIFE.CO
        </div>
      </footer>
    </div>
  );
}
