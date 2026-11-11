import { Link } from "react-router-dom";

type Props = { to: string; children: React.ReactNode; variant?: "gold" | "outline" | "carpet"; className?: string };

const styles = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  carpet: "bg-carpet text-ivory hover:bg-carpet-glow",
  outline: "border border-gold/60 text-gold-light hover:border-gold hover:bg-gold/10",
};

/** Internal links use the router; anything starting with http, mailto, tel or wa.me opens normally. */
export function Button({ to, children, variant = "gold", className = "" }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${styles[variant]} ${className}`;
  if (/^(https?:|mailto:|tel:|#)/.test(to)) {
    const external = to.startsWith("http");
    return (
      <a href={to} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}
