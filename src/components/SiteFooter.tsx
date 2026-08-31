import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link className="brand" href="/">
          <img src="/assets/mark.svg" alt="" />
          <span>
            <span className="gym">GYM</span>
            <span className="factor">FACTOR</span>
          </span>
        </Link>
        <span className="foot-links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </span>
        <span>© 2026 GymFactor</span>
      </div>
    </footer>
  );
}
