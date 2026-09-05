import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroStage } from "@/components/HeroStage";
import { AppStoreButton } from "@/components/AppStoreButton";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { faqs } from "@/lib/faq";
import { JsonLd, faqPageLd, softwareApplicationLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "GymFactor — Gym Workout Logger for iPhone & Apple Watch",
  description:
    "GymFactor is a workout logging app for iPhone and Apple Watch. Build a training program, log every set, rep, and weight, remember last-session lifts, and track progress — offline, no account, no feed.",
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "A program built around your goal",
    body: "Set your goal, training experience, weekly schedule, and equipment. GymFactor picks the split — Upper/Lower, Push/Pull/Legs, or Full Body — and builds a routine you can edit anytime.",
    icon: <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />,
  },
  {
    title: "Last-session memory",
    body: "Every exercise shows the weight, reps, and sets you logged last time, plus the next target — so you never scroll a notebook to find your working weight.",
    icon: (
      <path
        d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Progress you can actually read",
    body: "A strength score, per-exercise trend lines, weekly training volume, and an activity heatmap that marks trained, recovered, skipped, and missed days.",
    icon: (
      <path
        d="M4 19V5M4 19h16M8 16v-5M13 16V8M18 16v-9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "AI plate scan",
    body: "Point your camera at the loaded barbell or dumbbells and GymFactor reads the weight. Confirm before it's logged.",
    icon: (
      <path
        d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M8 12h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Log from the Home & Lock Screen",
    body: "Widgets show today's lifts and let you log your next set without opening the app.",
    icon: (
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "15 languages",
    body: "English, Arabic, German, Spanish, French, Hindi, Italian, Japanese, Portuguese, Russian, Urdu, Bengali, and more.",
    icon: (
      <>
        <path
          d="M18 10c0-3.5-2.5-6-6-6s-6 2.5-6 6c0 2 .5 3.5 2 5l4 4 4-4c1.5-1.5 2-3 2-5z"
          strokeLinejoin="round"
        />
        <path d="M9 10h6" strokeLinecap="round" />
      </>
    ),
  },
];

const audiences = [
  {
    title: "Barbell & dumbbell lifters",
    body: "Log straight sets, supersets, drop sets, and warm-ups. Swap any exercise mid-session without breaking your routine.",
  },
  {
    title: "New to the gym",
    body: "Follow a guided plan and learn progressive overload — add weight or reps each week — without building a spreadsheet.",
  },
  {
    title: "Any split, any schedule",
    body: "Upper/Lower, Push/Pull/Legs, Full Body, or your own template — two to six training days a week.",
  },
  {
    title: "Home & garage gyms",
    body: "Every part of logging works with no signal. No account and no login wall between you and your workout log.",
  },
  {
    title: "Apple Watch first",
    body: "Leave the phone in your bag. Log sets from your wrist, watch heart rate and calories, and save the workout to Apple Health.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationLd, faqPageLd()]} />
      <SiteHeader />

      <main>
        {/* HERO — scroll-scrubbed prototype, see HeroStage.tsx */}
        <HeroStage />

        {/* WHAT IS GYMFACTOR */}
        <section id="about">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">What is GymFactor</span>
              <h2>A gym workout tracker built around one job: logging</h2>
              <p>
                Most workout tracker apps bury logging under feeds, streaks, and ads.
                GymFactor is the opposite. Open it at the rack and today&apos;s workout is
                already there, with your last working weights filled in. Tap to log each set,
                rest with the built-in timer, and leave.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Behind that, your <strong>training log</strong> builds itself — every rep,
                every session, every personal record — and stays on your device. It&apos;s a
                gym diary, a strength tracker, a rep-and-set counter, and a routine planner in
                one offline-first app for iPhone and Apple Watch.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features">
          <div className="wrap">
            <div className="section-head">
              <h2>Everything a workout log should do</h2>
              <p>
                From routine builder to rep tracker to progress charts, GymFactor covers the
                whole loop: plan the session, log every set, see the trend. Answer about
                fourteen quick questions and you&apos;ll be logging your first workout in
                under two minutes.
              </p>
            </div>

            <div className="grid">
              {features.map((f) => (
                <article className="feature" key={f.title}>
                  <div className="icon">
                    <svg viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section id="for">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Who it&apos;s for</span>
              <h2>Built for how you actually train</h2>
              <p>
                Whether you&apos;re chasing a first pull-up or a new bench PR, GymFactor is a
                strength-training log that keeps up with the way you lift.
              </p>
            </div>

            <div className="grid">
              {audiences.map((a) => (
                <article className="feature" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL-FIRST BAND */}
        <section className="band" id="privacy">
          <div className="wrap">
            <div className="split">
              <div>
                <span className="eyebrow">Local-first by design</span>
                <h2>Your workouts stay on your devices</h2>
                <p style={{ color: "var(--muted)", margin: "0.8rem 0 0" }}>
                  Core logging works fully offline. If you use iCloud, your training history
                  syncs privately through your own Apple ID with CloudKit — we never run a
                  copy of your workout log on our servers. There is no account to create and
                  no social feed.
                </p>
                <ul>
                  <li>
                    <strong>Offline workout tracking</strong> — open the app in a basement
                    gym and everything works
                  </li>
                  <li>
                    <strong>Private iCloud sync</strong> — your Apple ID, your data, optional
                  </li>
                  <li>
                    <strong>Apple Health</strong> — import weight and height, write Watch
                    workouts back
                  </li>
                  <li>
                    <strong>No ads, no tracking-for-ads</strong> — Health data is never sold
                  </li>
                </ul>
              </div>
              <div className="stat-cluster">
                <div className="stat">
                  <div className="n accent">0</div>
                  <div className="l">accounts to create</div>
                </div>
                <div className="stat">
                  <div className="n">&lt;2 min</div>
                  <div className="l">to your first logged set</div>
                </div>
                <div className="stat">
                  <div className="n accent">100%</div>
                  <div className="l">of logging works offline</div>
                </div>
                <div className="stat">
                  <div className="n">15</div>
                  <div className="l">languages supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLE WATCH */}
        <section id="watch">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Companion app</span>
              <h2>Log workouts from your wrist</h2>
              <p>
                Start a workout on Apple Watch, log every set as you go, and see live heart
                rate and active energy. End the session and GymFactor writes a
                strength-training workout to Apple Health automatically.
              </p>
            </div>

            <div className="watch-strip">
              {/* Log set */}
              <figure className="watch-card">
                <div className="watch">
                  <div className="watch-screen">
                    <div className="w-head">
                      <span className="w-back">‹</span>
                      <div className="w-title-wrap">
                        <span className="w-title">Bench Press</span>
                        <span className="w-sub">Last · 8 × 60 kg</span>
                      </div>
                    </div>
                    <div className="w-row">
                      <div className="w-metric">
                        <span className="w-label">Weight</span>
                        <span className="w-value">
                          62.5<small>kg</small>
                        </span>
                      </div>
                      <div className="w-steppers">
                        <span>–</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="w-row">
                      <div className="w-metric">
                        <span className="w-label">Reps</span>
                        <span className="w-value">8</span>
                      </div>
                      <div className="w-steppers">
                        <span>–</span>
                        <span>+</span>
                      </div>
                    </div>
                    <div className="w-cta">Log set</div>
                  </div>
                </div>
                <figcaption>Log every set from your wrist</figcaption>
              </figure>

              {/* Exercise picker */}
              <figure className="watch-card">
                <div className="watch">
                  <div className="watch-screen w-center">
                    <span className="w-dot w-dot-sm">ID</span>
                    <span className="w-dot-label">Incline DB Press</span>
                    <span className="w-dot w-dot-lg">BP</span>
                    <span className="w-dot-label w-dot-label-active">Bench Press</span>
                    <span className="w-dot w-dot-sm">CF</span>
                    <span className="w-dot-label">Cable Fly</span>
                  </div>
                </div>
                <figcaption>Your whole routine, one tap away</figcaption>
              </figure>

              {/* Live stats */}
              <figure className="watch-card">
                <div className="watch">
                  <div className="watch-screen w-live">
                    <span className="w-live-time">18:24:06</span>
                    <span className="w-live-kcal">
                      201 <small>active kcal</small>
                    </span>
                    <span className="w-live-hr">
                      142 <span className="w-heart">♥</span>
                    </span>
                  </div>
                </div>
                <figcaption>Heart rate &amp; burn, live</figcaption>
              </figure>

              {/* Rest timer */}
              <figure className="watch-card">
                <div className="watch">
                  <div className="watch-screen w-center">
                    <span className="w-rest-label">Rest</span>
                    <span className="w-rest-time">1:05</span>
                    <span className="w-rest-skip">Skip</span>
                  </div>
                </div>
                <figcaption>Guided rest between every set</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* PRO */}
        <section id="pro">
          <div className="wrap">
            <div className="pro-card">
              <div>
                <span className="tag">GymFactor Pro</span>
                <h2>Unlock the extras</h2>
                <p>
                  GymFactor is free to log, plan, and track. Pro adds the features that lean
                  on heavier processing.
                </p>
                <ul>
                  <li>AI plate &amp; dumbbell scan</li>
                  <li>Higher daily scan limits</li>
                  <li>More to come — one subscription, all future Pro features</li>
                </ul>
              </div>
              <div className="pro-actions">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap-narrow">
            <div className="section-head center">
              <h2>Workout logging, answered</h2>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-inner">
              <div className="hero-glow" />
              <h2>Start your next session with GymFactor</h2>
              <p>
                Free to download. Build your training program in two minutes and log your
                first set today.
              </p>
              <div className="hero-actions">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
