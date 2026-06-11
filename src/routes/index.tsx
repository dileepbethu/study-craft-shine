import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/edenne/Header";
import { Footer } from "@/components/edenne/Footer";
import { ETSY_URL } from "@/lib/edenne";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Edenne Life — The Executive Reset Blueprint" },
      { name: "description", content: "A structured lifestyle system for the woman who holds herself to a higher standard. Six evidence-informed frameworks." },
    ],
  }),
});

const systems = [
  { n: "01", t: "Nutrition Architecture", d: "Not what to eat — how to make good nutrition the default." },
  { n: "02", t: "Wardrobe Architecture", d: "A wardrobe that functions like a uniform — without effort." },
  { n: "03", t: "Skin, Body & Health", d: "The maintenance protocol for your most important asset." },
  { n: "04", t: "Environment & Space Design", d: "Your environment works for you or against you. Design it." },
  { n: "05", t: "Morning & Evening Protocols", d: "The quality of your day is decided in its first 30 minutes." },
  { n: "06", t: "Professional Presence", d: "Presence is not personality. It is architecture." },
];

const forYou = [
  ["You perform above your title", "but your personal systems don't."],
  ["You want structure,", "not motivation that fades by Thursday."],
  ["You are building a life", "that matches your professional standard."],
  ["You are not starting over.", "You are raising the floor."],
];

function Home() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative" style={{ paddingTop: 200, paddingBottom: 140 }}>
        <div className="container-edn text-center">
          <div className="eyebrow mb-10">EDENNELIFE.CO</div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.05, maxWidth: 1000, margin: "0 auto" }}>
            The Executive<br />Reset Blueprint
          </h1>
          <p className="tagline mt-10" style={{ fontSize: 20, maxWidth: 720, margin: "40px auto 0" }}>
            A structured lifestyle system for the woman who holds<br className="hidden md:inline" /> herself to a higher standard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <a href={ETSY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Buy the Blueprint — £29
            </a>
            <Link to="/reset" className="btn-ghost">
              Get the free 5-Day Reset
            </Link>
          </div>

          <div className="flex justify-center mt-20">
            <span className="hairline-short" />
          </div>
        </div>
      </section>

      {/* SIX SYSTEMS */}
      <section className="section-pad" style={{ background: "var(--color-parchment)" }}>
        <div className="container-edn">
          <div className="text-center mb-20">
            <div className="eyebrow-mink mb-6">THE FRAMEWORK</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              Six Systems. One Operating Standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(212,184,150,0.4)" }}>
            {systems.map((s) => (
              <div
                key={s.n}
                style={{ background: "var(--color-parchment)", padding: "48px 36px" }}
                className="group transition-colors hover:bg-[color:var(--color-ivory)]"
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: 48, color: "var(--color-champagne)", fontWeight: 300, lineHeight: 1 }}>
                  {s.n}
                </div>
                <hr className="hairline-short my-6" />
                <h3 style={{ fontSize: 22, marginBottom: 14 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "var(--color-mink)", lineHeight: 1.75 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THIS IS FOR YOU IF */}
      <section className="section-pad">
        <div className="container-edn text-center">
          <div className="eyebrow mb-10">THIS IS FOR YOU IF</div>
          <div className="space-y-14 mt-16">
            {forYou.map((lines, i) => (
              <div key={i}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 34px)", color: "var(--color-espresso)", lineHeight: 1.3 }}>
                  {lines[0]}<br />{lines[1]}
                </p>
                {i < forYou.length - 1 && <hr className="hairline-short mt-14" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE LIST */}
      <section className="section-pad" style={{ background: "var(--color-parchment)" }}>
        <div className="container-edn text-center">
          <div className="eyebrow mb-10">JOIN THE LIST</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: 760, margin: "0 auto" }}>
            Get the free 5-Day Executive Reset and be the first to know about new releases.
          </h2>
          <p style={{ color: "var(--color-mink)", maxWidth: 540, margin: "24px auto 40px", fontSize: 15 }}>
            One email. Five days. A structured re-entry into the standard you set for yourself.
          </p>
          <div className="flex justify-center">
            <Link to="/reset" className="btn-primary">Get the free Reset</Link>
          </div>
          <p
            className="mt-5"
            style={{ fontSize: 11, letterSpacing: "0.05em", color: "var(--color-mink)" }}
          >
            No filler. Unsubscribe at any moment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
