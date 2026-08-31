import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader
        links={[
          { href: "/#features", label: "Features" },
          { href: "/terms", label: "Terms" },
          { href: "/privacy", label: "Privacy" },
        ]}
      />

      <section className="hero" style={{ textAlign: "center" }}>
        <div className="hero-glow" />
        <div className="wrap-narrow" style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Error 404</span>
          <h1>This page took a rest day</h1>
          <p className="lede" style={{ marginInline: "auto" }}>
            The page you&apos;re after isn&apos;t here. Head back and pick up where you left
            off.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="btn" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
