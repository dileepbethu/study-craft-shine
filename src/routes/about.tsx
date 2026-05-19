import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/edenne/Header";
import { Footer } from "@/components/edenne/Footer";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About · Edenne Life" },
      { name: "description", content: "Edenne Life is an editorial lifestyle studio building structured systems for the woman who holds herself to a higher standard." },
    ],
  }),
});

function About() {
  return (
    <div>
      <Header />

      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container-edn">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-8">ABOUT EDENNE LIFE</div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              An editorial studio<br />for structured living.
            </h1>
            <p className="tagline mt-8" style={{ fontSize: 20 }}>
              Built for the woman who already performs.<br />Not for the one being told to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edn grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow-mink mb-5">THE PREMISE</div>
            <hr className="hairline-short" />
          </div>
          <div className="md:col-span-8 space-y-6" style={{ fontSize: 17, color: "var(--color-body)" }}>
            <p>
              Edenne Life began with an observation. The women we built this for already operate at the top of their professions — yet at home, the systems frequently lag the standard. Mornings improvised. Wardrobes negotiated. Nutrition outsourced to whatever is closest.
            </p>
            <p>
              The premise is simple: a private life can be engineered with the same rigour as a professional one. Not optimised — engineered. Frameworks, defaults, repeatable inputs. The rituals that disappear into the day because they no longer require decision.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-parchment)" }}>
        <div className="container-edn grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow-mink mb-5">THE STANDARD</div>
            <hr className="hairline-short" />
          </div>
          <div className="md:col-span-8 space-y-6" style={{ fontSize: 17, color: "var(--color-body)" }}>
            <p>
              No motivational content. No emoji. No exclamation marks. Nothing that fades by Thursday. Every framework we publish has to pass one test: it must say something specific and true, or it does not ship.
            </p>
            <p>
              The result reads less like a self-help book and more like an internal operating manual. Composed. Quiet. Precise. The same standard you would apply to a deliverable that bears your name.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edn grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow-mink mb-5">PRINCIPLES</div>
            <hr className="hairline-short" />
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-10">
              {[
                ["Structure over motivation.", "What you can build, you can repeat. Motivation is a non-renewable resource."],
                ["Defaults over decisions.", "Decision fatigue is the silent tax on high-performing women. We remove the decisions."],
                ["Specificity over inspiration.", "Vague language produces vague lives. Every recommendation is precise enough to act on tonight."],
                ["Quiet over loud.", "The right system disappears into the day. You stop noticing it. That is when it is working."],
              ].map(([h, p], i) => (
                <li key={i} className="grid grid-cols-12 gap-6">
                  <div className="col-span-2" style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--color-champagne)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10">
                    <h3 style={{ fontSize: 22, marginBottom: 8 }}>{h}</h3>
                    <p style={{ color: "var(--color-mink)", fontSize: 15 }}>{p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-espresso)" }}>
        <div className="container-edn text-center">
          <div className="eyebrow mb-8">BEGIN</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--color-ivory)" }}>
            Start with the free 5-Day Reset.
          </h2>
          <div className="mt-10">
            <Link to="/reset" className="btn-on-dark">Get the free Reset</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
