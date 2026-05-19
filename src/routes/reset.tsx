import { createFileRoute, Link } from "@tanstack/react-router";
import { EmailForm } from "@/components/edenne/EmailForm";

export const Route = createFileRoute("/reset")({
  component: Reset,
  head: () => ({
    meta: [
      { title: "The 5-Day Executive Reset · Edenne Life" },
      { name: "description", content: "Five days. One protocol. A structured re-entry into the standard you set for yourself. Free." },
    ],
  }),
});

function Reset() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-ivory)" }}>
      {/* No nav header per brief — only minimal brand mark + back link */}
      <div className="container-edn flex items-center justify-between" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Link to="/" style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-espresso)" }}>
          Edenne Life
        </Link>
        <Link to="/" className="eyebrow-mink">← Back</Link>
      </div>

      <section style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="container-edn text-center max-w-3xl">
          <div className="eyebrow mb-10">A FREE FIVE-DAY PROTOCOL</div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)" }}>
            The 5-Day<br />Executive Reset.
          </h1>
          <p className="tagline mt-8" style={{ fontSize: 20 }}>
            Five mornings. One protocol per day.<br />
            A structured re-entry into the standard you set for yourself.
          </p>

          <div className="mt-16">
            <EmailForm label="Send me the Reset" />
          </div>

          <div className="flex justify-center mt-16">
            <span className="hairline-short" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edn max-w-3xl">
          <div className="text-center mb-14">
            <div className="eyebrow-mink mb-6">WHAT YOU RECEIVE</div>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 36px)" }}>One email each morning. Five days.</h2>
          </div>

          <div className="space-y-px" style={{ background: "rgba(212,184,150,0.4)" }}>
            {[
              ["DAY 01", "Environment", "Reset the surfaces. Calibrate the inputs."],
              ["DAY 02", "Morning sequence", "Thirty deliberate minutes. Built — not improvised."],
              ["DAY 03", "Nutrition default", "Remove the daily decision. Install the weekly default."],
              ["DAY 04", "Wardrobe edit", "An audit. A uniform. A clear surface."],
              ["DAY 05", "Evening protocol", "Bookend the day. Begin tomorrow already begun."],
            ].map(([d, t, p]) => (
              <div key={d} className="grid grid-cols-12 gap-6 items-baseline" style={{ background: "var(--color-ivory)", padding: "28px 24px" }}>
                <div className="col-span-3 md:col-span-2 eyebrow">{d}</div>
                <div className="col-span-9 md:col-span-4">
                  <h3 style={{ fontSize: 22 }}>{t}</h3>
                </div>
                <div className="col-span-12 md:col-span-6" style={{ color: "var(--color-mink)", fontSize: 14 }}>{p}</div>
              </div>
            ))}
          </div>

          <p className="text-center mt-16" style={{ color: "var(--color-mink)", fontSize: 14 }}>
            No filler emails between. No upsell. When the five days end, the sequence ends.
          </p>
        </div>
      </section>

      <footer style={{ background: "var(--color-espresso)", color: "var(--color-ash)", padding: "32px 0" }}>
        <div className="container-edn flex flex-col md:flex-row justify-between gap-3" style={{ fontSize: 11, letterSpacing: "0.1em" }}>
          <span>© 2026 EDENNE LIFE</span>
          <span>HELLO@EDENNELIFE.CO</span>
        </div>
      </footer>
    </div>
  );
}
