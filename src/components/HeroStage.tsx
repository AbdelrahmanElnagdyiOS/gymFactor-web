"use client";

import { useEffect, useRef, useState } from "react";
import { AppStoreButton } from "@/components/AppStoreButton";
import { PlayStoreButton } from "@/components/PlayStoreButton";

/**
 * Scroll-scrubbed hero. The phone pins to the viewport while the section
 * scrolls past it; each quarter of that scroll advances the embedded
 * prototype (`/assets/prototype.html`) to the next screen and lights up the
 * matching step. Falls back to a static, fully-expanded layout on small
 * screens and when the visitor prefers reduced motion (see globals.css).
 */
const STEPS = [
  {
    screen: "today",
    title: "Today's session, already built",
    body: "Open GymFactor at the rack and the workout is waiting — exercises, sets, and last time's working weights filled in.",
  },
  {
    screen: "active",
    title: "Log a set in one tap",
    body: "Weight and reps come pre-filled from last session. Nudge them if you need to, tap once, and the set is saved.",
  },
  {
    screen: "rest",
    title: "Rest is timed for you",
    body: "A guided countdown runs between sets, so you pick the bar back up on schedule instead of whenever you look up.",
  },
  {
    screen: "progress",
    title: "Progress builds itself",
    body: "Every logged set feeds a strength score, per-exercise trend lines, weekly volume, and a training heatmap.",
  },
] as const;

export function HeroStage() {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const pushScreen = (i: number) => {
    // No ready-gate: the prototype boots fast and the scrub re-posts on every
    // step change, so a message that lands before it's listening self-heals on
    // the next tick. onLoad below covers "scrolled before the iframe existed".
    iframeRef.current?.contentWindow?.postMessage(
      { type: "gf:screen", screen: STEPS[i].screen },
      "*",
    );
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Only scrub on wider screens with motion allowed; otherwise the CSS
    // fallback shows every step at once and the prototype stays on "today".
    const mq = window.matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
    );
    if (!mq.matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      setProgress(p);

      const i = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
      if (i !== activeRef.current) {
        activeRef.current = i;
        setActive(i);
        pushScreen(i);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    // Belt-and-braces first sync in case the iframe was still booting on mount.
    const sync = window.setTimeout(() => pushScreen(activeRef.current), 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(sync);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const onIframeLoad = () => pushScreen(activeRef.current);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-sticky">
        <div className="hero-glow" />
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">
              Gym workout logger · iPhone &amp; Apple Watch
            </span>
            <h1>
              Train. Log.
              <br />
              Progress.
            </h1>
            <p className="lede">
              GymFactor is a <strong>workout logging app</strong> that builds your{" "}
              <strong>training program</strong>, remembers every{" "}
              <strong>set, rep, and weight</strong> from last time, and turns each{" "}
              <strong>gym</strong> session into progress you can see — fully
              offline, no account, no feed.
            </p>
            <div className="hero-actions">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
            <p className="hero-note">
              Free to use. GymFactor Pro unlocks plate scan and more.
            </p>

            <ol className="hero-steps">
              {STEPS.map((s, i) => (
                <li
                  key={s.screen}
                  className={
                    i === active ? "is-active" : i < active ? "is-done" : ""
                  }
                >
                  <span className="hs-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="hs-text">
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="hero-visual">
            <div className="hero-phone-wrap">
              <div className="hero-phone">
                <iframe
                  ref={iframeRef}
                  className="hero-phone-frame"
                  src="/assets/prototype/#screen=today"
                  title="GymFactor prototype — scroll to move through the app"
                  onLoad={onIframeLoad}
                />
              </div>
              <div className="hero-scrollbar" aria-hidden="true">
                <span style={{ transform: `scaleY(${progress})` }} />
              </div>
              <span
                className={
                  "hero-phone-hint" + (progress > 0.02 ? " is-hidden" : "")
                }
              >
                Scroll to explore ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
