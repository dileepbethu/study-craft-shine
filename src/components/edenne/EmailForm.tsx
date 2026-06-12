import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MAILERLITE_FORM_ACTION } from "@/lib/edenne";

export function EmailForm({ variant = "light", label = "Get the free Reset" }: { variant?: "light" | "dark"; label?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onDark = variant === "dark";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    setError(null);
    try {
      // Submit to the MailerLite embedded form endpoint (same request the
      // official embed makes). Adds the subscriber to the
      // "Lead Magnet — 5-Day Reset" group and starts the automation.
      const body = new FormData();
      body.append("fields[email]", email.trim());
      body.append("ml-submit", "1");
      body.append("anticsrf", "true");

      const res = await fetch(MAILERLITE_FORM_ACTION, { method: "POST", body });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success !== false) {
        navigate({ to: "/thank-you" });
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          aria-label="Email address"
          style={{
            background: "transparent",
            borderBottom: `0.5px solid ${onDark ? "rgba(212,184,150,0.4)" : "#2C2420"}`,
            color: onDark ? "var(--color-ivory)" : "var(--color-espresso)",
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 16,
            padding: "14px 4px",
            outline: "none",
            width: "100%",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className={onDark ? "btn-on-dark" : "btn-primary"}
          style={{ marginTop: 16 }}
        >
          {loading ? "Sending…" : label}
        </button>
      </div>
      {error && (
        <p
          role="alert"
          className="mt-4 text-center"
          style={{ fontSize: 12, letterSpacing: "0.03em", color: "#a04a3a" }}
        >
          {error}
        </p>
      )}
      <p
        className="mt-5 text-center"
        style={{
          fontSize: 11,
          letterSpacing: "0.05em",
          color: onDark ? "var(--color-ash)" : "var(--color-mink)",
        }}
      >
        No filler. Unsubscribe at any moment.
      </p>
    </form>
  );
}
