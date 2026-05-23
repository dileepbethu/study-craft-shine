import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/edenne/Header";
import { Footer } from "@/components/edenne/Footer";
import { EmailForm } from "@/components/edenne/EmailForm";

export const Route = createFileRoute("/blueprint")({
  component: Blueprint,
  head: () => ({
    meta: [
      { title: "The Blueprint · Edenne Life" },
      { name: "description", content: "The Executive Reset Blueprint — a 110-page structured lifestyle operating system. Six evidence-informed frameworks. £29." },
    ],
  }),
});

const systems = [
  {
    n: "01", t: "Nutrition Architecture",
    p: "A protocol for how nutrition operates inside a demanding week — not a meal plan. Defaults, decisions removed.",
    items: ["The weekly default menu", "Restaurant ordering framework", "Travel-week protocol"],
  },
  {
    n: "02", t: "Wardrobe Architecture",
    p: "A wardrobe engineered like an interface: limited inputs, predictable outputs, zero morning negotiation.",
    items: ["The 33-piece capsule", "Three uniforms for three contexts", "The seasonal audit"],
  },
  {
    n: "03", t: "Skin, Body & Health",
    p: "The maintenance protocol — what to do, when to do it, and what to stop doing. No supplement noise.",
    items: ["AM / PM skin sequence", "Movement minimums", "The quarterly bloodwork list"],
  },
  {
    n: "04", t: "Environment & Space Design",
    p: "Your space is a system. Calibrate the inputs and your behaviour follows. Lighting, surfaces, sound.",
    items: ["Bedroom reset", "Workspace calibration", "The Sunday environment audit"],
  },
  {
    n: "05", t: "Morning & Evening Protocols",
    p: "Bookend rituals that hold the day together. Thirty deliberate minutes that decide the other fifteen hours.",
    items: ["The 30-minute AM sequence", "The 20-minute wind-down", "Travel & off-day variants"],
  },
  {
    n: "06", t: "Professional Presence",
    p: "Presence as architecture: posture, voice, language, silence. Built — not performed.",
    items: ["The five sentences", "Meeting carriage", "The art of not explaining"],
  },
];

function Blueprint() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 100 }}>
        <div className="container-edn text-center">
          <div className="eyebrow mb-8">EDENNELIFE.CO · THE PRODUCT</div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)" }}>The Executive<br />Reset Blueprint</h1>
          <p className="tagline mt-8" style={{ fontSize: 20, maxWidth: 720, margin: "32px auto 0" }}>
            A 110-page operating system for the woman whose personal life<br className="hidden md:inline" /> should function at the standard of her work.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl mx-auto mt-16" style={{ background: "rgba(212,184,150,0.4)" }}>
            {[
              ["110", "PAGES"],
              ["06", "SYSTEMS"],
              ["£29", "ONE-TIME"],
              ["PDF", "INSTANT"],
            ].map(([v, l]) => (
              <div key={l} style={{ background: "var(--color-ivory)", padding: "28px 12px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--color-espresso)" }}>{v}</div>
                <div className="eyebrow-mink mt-2">{l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <a href="https://edennelife.etsy.com" target="_blank" rel="noreferrer" className="btn-primary">Buy on Etsy — £29</a>
            <Link to="/reset" className="btn-ghost">Try the free 5-day reset</Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="section-pad" style={{ background: "var(--color-parchment)" }}>
        <div className="container-edn">
          <div className="text-center mb-20">
            <div className="eyebrow-mink mb-6">WHAT'S INSIDE</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Six systems. One operating standard.</h2>
          </div>

          <div className="space-y-px" style={{ background: "rgba(212,184,150,0.4)" }}>
            {systems.map((s) => (
              <div key={s.n} className="grid grid-cols-1 md:grid-cols-12 gap-8" style={{ background: "var(--color-parchment)", padding: "56px 32px" }}>
                <div className="md:col-span-2">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 64, color: "var(--color-champagne)", lineHeight: 1, fontWeight: 300 }}>
                    {s.n}
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h3 style={{ fontSize: 28, marginBottom: 16 }}>{s.t}</h3>
                  <p style={{ color: "var(--color-mink)", fontSize: 15 }}>{s.p}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="eyebrow-mink mb-4">Includes</div>
                  <ul className="space-y-2" style={{ fontSize: 14, color: "var(--color-espresso)" }}>
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span style={{ color: "var(--color-champagne)" }}>—</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS / IS NOT */}
      <section className="section-pad">
        <div className="container-edn">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6">CLARITY</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>What this is. What it isn't.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(212,184,150,0.4)" }}>
            <div style={{ background: "var(--color-ivory)", padding: "48px 36px" }}>
              <div className="eyebrow-mink mb-6">IT IS</div>
              <ul className="space-y-4" style={{ color: "var(--color-espresso)", fontSize: 16 }}>
                <li>A 110-page structured PDF, designed to be re-read.</li>
                <li>Six evidence-informed frameworks, written to be executed.</li>
                <li>An operating system for a quiet, demanding standard.</li>
              </ul>
            </div>
            <div style={{ background: "var(--color-ivory)", padding: "48px 36px" }}>
              <div className="eyebrow-mink mb-6">IT IS NOT</div>
              <ul className="space-y-4" style={{ color: "var(--color-mink)", fontSize: 16 }}>
                <li>A planner, journal, or printable.</li>
                <li>Motivational content. There is none.</li>
                <li>A wellness aesthetic dressed as a system.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE CTA */}
      <section className="section-pad" style={{ background: "var(--color-espresso)" }}>
        <div className="container-edn text-center">
          <div className="eyebrow mb-8">DELIVERED AS PDF · VIA ETSY</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", color: "var(--color-ivory)", fontWeight: 300 }}>
            £29. One purchase.<br />Re-read for years.
          </h2>
          <p className="tagline mt-8" style={{ fontSize: 18, color: "var(--color-ash)" }}>
            Instant download. No subscription. No expiry.
          </p>
          <div className="mt-12">
            <a href="https://etsy.com" target="_blank" rel="noreferrer" className="btn-on-dark">Buy the Blueprint — £29</a>
          </div>
        </div>
      </section>

      {/* SECONDARY CAPTURE */}
      <section className="section-pad">
        <div className="container-edn text-center">
          <div className="eyebrow mb-8">NOT READY YET</div>
          <h2 style={{ fontSize: "clamp(24px, 3.4vw, 36px)", maxWidth: 720, margin: "0 auto" }}>
            Begin with the free 5-Day Executive Reset.
          </h2>
          <div className="mt-10">
            <EmailForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
