import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/edenne-life-logo.jpeg.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(247,244,239,0.92)" : "rgba(247,244,239,0)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "0.5px solid #EDE8DF" : "0.5px solid transparent",
      }}
    >
      <div className="container-edn flex items-center justify-between" style={{ height: 76 }}>
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Edenne Life">
          <img src={logo.url} alt="Edenne Life" style={{ height: 40, width: "auto", display: "block" }} />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/blueprint">The Blueprint</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link to="/reset" className="btn-ghost" style={{ padding: "12px 22px" }}>
            Get the free Reset
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{ color: "var(--color-espresso)" }}
        >
          <div style={{ width: 22, height: 0.5, background: "var(--color-espresso)", margin: "6px 0" }} />
          <div style={{ width: 22, height: 0.5, background: "var(--color-espresso)", margin: "6px 0" }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "#EDE8DF", background: "var(--color-ivory)" }}>
          <div className="container-edn flex flex-col gap-6 py-8">
            <MobileLink to="/blueprint" onClick={() => setOpen(false)}>The Blueprint</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <Link to="/reset" className="btn-ghost w-full" onClick={() => setOpen(false)}>
              Get the free Reset
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="eyebrow-mink hover:text-[color:var(--color-espresso)] transition-colors"
      activeProps={{ style: { color: "var(--color-espresso)" } }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="eyebrow-mink">
      {children}
    </Link>
  );
}
