import { useEffect, useState } from "react";

export function NoshLoader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2400);
    const t2 = setTimeout(() => setHidden(true), 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;
  const letters = "NOSH".split("");

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-primary-foreground transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      {/* Cup with brewing fill + steam */}
      <div className="relative mb-10">
        {/* Steam */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-3">
          {[0, 0.4, 0.8].map((d, i) => (
            <span
              key={i}
              className="block h-10 w-1 rounded-full bg-primary-foreground/40 animate-steam"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
        {/* Cup */}
        <div className="relative h-24 w-28 rounded-b-[2rem] rounded-t-md border-2 border-primary-foreground overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 bg-accent animate-fill-cup"
            style={{ height: 0 }}
          />
        </div>
        {/* Handle */}
        <div className="absolute top-3 -right-5 h-12 w-8 rounded-r-full border-2 border-l-0 border-primary-foreground" />
        {/* Saucer */}
        <div className="mx-auto mt-2 h-1.5 w-36 rounded-full bg-primary-foreground/80" />
      </div>

      {/* Letters */}
      <div className="flex gap-2">
        {letters.map((l, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-6xl font-semibold tracking-[0.3em] animate-letter"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            {l}
          </span>
        ))}
      </div>
      <p
        className="mt-4 text-xs uppercase tracking-[0.5em] text-primary-foreground/60 animate-letter"
        style={{ animationDelay: "1.2s" }}
      >
        Brewing your experience
      </p>
    </div>
  );
}