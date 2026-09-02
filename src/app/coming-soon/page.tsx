import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AppStoreButton } from "@/components/AppStoreButton";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "GymFactor for Android — coming soon",
  description:
    "The GymFactor Android app is in the works. It's on iPhone and Apple Watch today.",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <>
      <SiteHeader
        links={[
          { href: "/#features", label: "Features" },
          { href: "/#watch", label: "Apple Watch" },
          { href: "/#faq", label: "FAQ" },
        ]}
      />

      <section className="hero" style={{ textAlign: "center" }}>
        <div className="hero-glow" />
        <div className="wrap-narrow" style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Android</span>
          <h1>
            Android is
            <br />
            on the way
          </h1>
          <p className="lede" style={{ marginInline: "auto" }}>
            GymFactor is built for iPhone and Apple Watch today. An Android version is in
            development — leave your email and we&apos;ll tell you the moment it lands on
            Google Play.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a
              className="btn"
              href={`mailto:${CONTACT_EMAIL}?subject=Notify%20me%20about%20GymFactor%20for%20Android`}
            >
              Notify me
            </a>
            <Link className="btn btn-ghost" href="/">
              Back to home
            </Link>
          </div>
          <p className="hero-note" style={{ marginInline: "auto" }}>
            On iPhone now:
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <AppStoreButton />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
