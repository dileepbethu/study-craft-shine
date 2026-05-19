import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export function EmailForm({ variant = "light", label = "Get the free Reset" }: { variant?: "light" | "dark"; label?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onDark = variant === "dark";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    // Placeholder for MailerLite submission — client provides embed code.
    setTimeout(() => navigate({ to: "/thank-you" }), 400);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your professional email"
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
