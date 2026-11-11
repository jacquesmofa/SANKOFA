import { useEffect, useState } from "react";

function parts(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return { Days: Math.floor(ms / 864e5), Hours: Math.floor((ms / 36e5) % 24), Minutes: Math.floor((ms / 6e4) % 60), Seconds: Math.floor((ms / 1e3) % 60) };
}

export function Countdown({ target }: { target: Date }) {
  const [t, setT] = useState(() => parts(target));
  useEffect(() => {
    const id = window.setInterval(() => setT(parts(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);
  return (
    <div className="flex gap-3" role="timer" aria-label="Time until the gala">
      {Object.entries(t).map(([label, value]) => (
        <div key={label} className="min-w-[64px] border border-gold/30 bg-ink/60 px-3 py-2 text-center">
          <div className="font-display text-2xl tabular-nums text-gold-light">{String(value).padStart(2, "0")}</div>
          <div className="text-[9px] uppercase tracking-[0.25em] text-ivory-muted">{label}</div>
        </div>
      ))}
    </div>
  );
}
