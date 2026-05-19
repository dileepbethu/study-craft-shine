import { createFileRoute, Link } from "@tanstack/react-router";

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
    <div style={{ minHeight: "100vh", background: "var(--color-ivory)", display: "flex", flexDirection: "column" }}>
      <div className="container-edn" style={{ paddingTop: 32 }}>
        <Link to="/" style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-espresso)" }}>
          Edenne Life
        </Link>
      </div>

      <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="container-edn text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-10">YOU ARE ON THE LIST</div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)" }}>
            The first email<br />arrives tomorrow at 06:00.
          </h1>
          <p className="tagline mt-8" style={{ fontSize: 18 }}>
            Check your inbox now to confirm your subscription. If you don't see it, look in promotions.
          </p>

          <div className="flex justify-center mt-12 mb-12">
            <span className="hairline-short" />
          </div>

          <p style={{ color: "var(--color-mink)", fontSize: 15, marginBottom: 28 }}>
            While you wait — read the full Blueprint.
          </p>
          <Link to="/blueprint" className="btn-ghost">Explore the Blueprint</Link>
        </div>
      </main>

      <footer style={{ background: "var(--color-espresso)", color: "var(--color-ash)", padding: "24px 0" }}>
        <div className="container-edn text-center" style={{ fontSize: 11, letterSpacing: "0.1em" }}>
          © 2026 EDENNE LIFE · EDENNELIFE.CO
        </div>
      </footer>
    </div>
  );
}
