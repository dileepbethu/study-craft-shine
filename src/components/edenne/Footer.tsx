import { Link } from "@tanstack/react-router";
import logo from "@/assets/edenne-life-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer style={{ background: "var(--color-espresso)", color: "var(--color-parchment)" }}>
      <div className="container-edn section-pad">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logo.url} alt="Edenne Life" style={{ height: 56, width: "auto", display: "block" }} />
            <p className="tagline mt-3" style={{ color: "var(--color-ash)", fontSize: 16 }}>
              A structured lifestyle system for the woman<br />who holds herself to a higher standard.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-5">Explore</div>
            <ul className="space-y-3" style={{ fontSize: 14, color: "var(--color-parchment)" }}>
              <li><Link to="/" className="hover:text-[color:var(--color-champagne)] transition-colors">Home</Link></li>
              <li><Link to="/blueprint" className="hover:text-[color:var(--color-champagne)] transition-colors">The Blueprint</Link></li>
              <li><Link to="/about" className="hover:text-[color:var(--color-champagne)] transition-colors">About</Link></li>
              <li><Link to="/reset" className="hover:text-[color:var(--color-champagne)] transition-colors">The Free Reset</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Connect</div>
            <ul className="space-y-3" style={{ fontSize: 14, color: "var(--color-parchment)" }}>
              <li><a href="mailto:hello@edennelife.co" className="hover:text-[color:var(--color-champagne)] transition-colors">hello@edennelife.co</a></li>
              <li><a href="https://www.instagram.com/edennelife?igsh=MWtwbDV1ajB4b3hhaA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-champagne)] transition-colors">Instagram</a></li>
              <li><a href="https://pin.it/7GBZKUH9L" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-champagne)] transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <hr className="hairline mt-16 mb-8" style={{ opacity: 0.3 }} />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ fontSize: 11, color: "var(--color-ash)", letterSpacing: "0.1em" }}>
          <div>© 2026 EDENNE LIFE · EDENNELIFE.CO</div>
          <div className="eyebrow" style={{ color: "var(--color-ash)" }}>Composed in London · Distributed worldwide</div>
        </div>
      </div>
    </footer>
  );
}
