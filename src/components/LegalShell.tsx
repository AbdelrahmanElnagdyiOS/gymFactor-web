import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTACT_EMAIL } from "@/lib/config";

export type TocItem = { id: string; label: string };

/**
 * Shared shell for the Terms and Privacy pages: sticky "Contents" rail on the
 * left, the policy body in a surface card on the right, matching the app's
 * card/heading language. The numbered lime badges next to each <h2> come from
 * CSS counters in globals.css, so `children` must place its <h2> elements as
 * direct children of `.legal-body` (i.e. straight inside this component).
 */
export function LegalShell({
  title,
  effective,
  toc,
  contactTitle,
  crossLinkHref,
  crossLinkLabel,
  children,
}: {
  title: string;
  effective: string;
  toc: TocItem[];
  contactTitle: string;
  crossLinkHref: string;
  crossLinkLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader variant="legal" />

      <section className="legal-hero">
        <div className="hero-glow" />
        <div className="wrap-narrow">
          <span className="eyebrow">Legal</span>
          <h1>{title}</h1>
          <p className="meta">{effective}</p>
        </div>
      </section>

      <div className="wrap-narrow">
        <div className="legal-layout">
          <nav className="legal-toc" aria-label="Sections">
            <div className="toc-title">Contents</div>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal-body">
            {children}

            <div className="legal-contact">
              <strong>{contactTitle}</strong>
              <p>
                Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — see also the{" "}
                <Link href={crossLinkHref}>{crossLinkLabel}</Link>.
              </p>
            </div>

            <div className="legal-footer">
              GymFactor · <Link href={crossLinkHref}>{crossLinkLabel}</Link> ·{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
