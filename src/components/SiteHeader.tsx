import Link from "next/link";
import { APP_STORE_URL } from "@/lib/config";

type NavLink = { href: string; label: string };

const HOME_LINKS: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#watch", label: "Apple Watch" },
  { href: "/#pro", label: "Pro" },
  { href: "/#faq", label: "FAQ" },
];

const LEGAL_LINKS: NavLink[] = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader({
  variant = "home",
  links,
}: {
  variant?: "home" | "legal";
  links?: NavLink[];
}) {
  const navLinks = links ?? (variant === "legal" ? LEGAL_LINKS : HOME_LINKS);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          <img src="/assets/mark.svg" alt="" />
          <span>
            <span className="gym">GYM</span>
            <span className="factor">FACTOR</span>
          </span>
        </Link>
        <nav className="site-nav">
          <span className="nav-links">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </span>
          {/* TODO: replace with the real App Store listing URL once the app is live. */}
          <a className="btn btn-sm" href={APP_STORE_URL}>
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
