import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AppStoreButton } from "@/components/AppStoreButton";

const features = [
  {
    title: "A program, made for you",
    body: "Pick your goal, experience, and days per week. GymFactor picks the split and builds the routine.",
    icon: (
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
    ),
  },
  {
    title: "Last-session memory",
    body: "Every exercise shows what you lifted last time and the next target, so you always know your working weight.",
    icon: (
      <path
        d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Progress you can read",
    body: "A strength score, per-exercise trends, and an activity heatmap that shows trained, recovered, skipped, and missed days.",
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
    body: "Point your camera at the loaded bar or dumbbells and GymFactor reads the weight. Confirm before it's logged.",
    icon: (
      <path
        d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M8 12h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Widgets & Lock Screen",
    body: "See today's lifts and log your next set without opening the app.",
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

const faqs = [
  {
    q: "Do I need an account?",
    a: (
      <>
        No. GymFactor works as a guest on your device. If you&apos;re signed into iCloud,
        your data can sync privately across your Apple devices through your own Apple ID.
      </>
    ),
  },
  {
    q: "Does it work without internet?",
    a: (
      <>
        Yes. All logging, programs, last-session memory, and progress work fully offline.
        Network is only used for optional features like plate scan, iCloud sync, crash
        reports, and purchases.
      </>
    ),
  },
  {
    q: "Is GymFactor free?",
    a: (
      <>
        Logging, programs, progress, widgets, and the Apple Watch app are free. GymFactor
        Pro is an optional subscription that unlocks AI plate scan and future Pro features,
        sold through the App Store.
      </>
    ),
  },
  {
    q: "What does the AI scan do with my photos?",
    a: (
      <>
        A photo you take of your plates or dumbbells is sent to a processing service to
        estimate the weight and is not stored in your workout database. You always confirm
        the weight before it&apos;s logged. See the <Link href="/privacy">Privacy Policy</Link>{" "}
        for details.
      </>
    ),
  },
  {
    q: "Is my Apple Health data safe?",
    a: (
      <>
        Health access is optional and only reads what you allow (weight, height, date of
        birth, sex; heart rate and energy on Watch). It is never used for advertising and
        never sold.
      </>
    ),
  },
  {
    q: "Which devices are supported?",
    a: <>iPhone and Apple Watch. The app is iOS-only.</>,
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">iPhone &nbsp;·&nbsp; Apple Watch</span>
              <h1>
                Train. Log.
                <br />
                Progress.
              </h1>
              <p className="lede">
                GymFactor builds your training program, remembers every last-session weight,
                and shows your progress in one clean, offline-first app. No feed. No noise.
                Just the work.
              </p>
              <div className="hero-actions">
                <AppStoreButton />
                <a className="btn btn-ghost" href="#features">
                  See what&apos;s inside
                </a>
              </div>
              <p className="hero-note">
                Free to use. GymFactor Pro unlocks plate scan and more.
              </p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="phone">
                <div className="phone-screen">
                  <div className="pm-status">
                    <span>9:41</span>
                    <span>GymFactor</span>
                  </div>
                  <div className="pm-body">
                    <span className="pm-eyebrow">Push · Day 2</span>
                    <p className="pm-title">Today</p>
                    <div className="pm-bar">
                      <i />
                    </div>

                    <div className="pm-card active">
                      <div className="pm-ex">Barbell Bench Press</div>
                      <div className="pm-meta">Last: 80 kg × 5 · +2.5 kg target</div>
                      <div className="pm-sets">
                        <span className="pm-dot done">1</span>
                        <span className="pm-dot done">2</span>
                        <span className="pm-dot done">3</span>
                        <span className="pm-dot">4</span>
                      </div>
                    </div>

                    <div className="pm-card">
                      <div className="pm-ex">Overhead Press</div>
                      <div className="pm-meta">Last: 45 kg × 6</div>
                    </div>

                    <div className="pm-card">
                      <div className="pm-ex">Incline Dumbbell Press</div>
                      <div className="pm-meta">Last: 26 kg × 10</div>
                    </div>
                  </div>
                  <div className="pm-tabbar">
                    <span className="pm-tab on" />
                    <span className="pm-tab" />
                    <span className="pm-tab" />
                    <span className="pm-tab" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features">
          <div className="wrap">
            <div className="section-head">
              <h2>Everything you need to log a session</h2>
              <p>
                Answer fourteen quick questions and you&apos;ll be logging your first workout
                in under two minutes.
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

        {/* LOCAL-FIRST BAND */}
        <section className="band" id="privacy">
          <div className="wrap">
            <div className="split">
              <div>
                <span className="eyebrow">Local-first by design</span>
                <h2>Your workouts stay on your devices</h2>
                <p style={{ color: "var(--muted)", margin: "0.8rem 0 0" }}>
                  Core logging works fully offline. If you use iCloud, your data syncs
                  privately through your own Apple ID with CloudKit — we never run a copy of
                  your training history on our servers. There is no account to create and no
                  social feed.
                </p>
                <ul>
                  <li>
                    <strong>Offline logging</strong> — open the app in a basement gym and
                    everything works
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
            <div className="split">
              <div className="stat-cluster">
                <div className="stat">
                  <div className="n accent">♥</div>
                  <div className="l">live heart rate</div>
                </div>
                <div className="stat">
                  <div className="n">kcal</div>
                  <div className="l">active energy</div>
                </div>
                <div className="stat">
                  <div className="n accent">✓</div>
                  <div className="l">sets from your wrist</div>
                </div>
                <div className="stat">
                  <div className="n">Health</div>
                  <div className="l">workout saved on end</div>
                </div>
              </div>
              <div>
                <span className="eyebrow">Companion app</span>
                <h2>Log from your wrist</h2>
                <p style={{ color: "var(--muted)", margin: "0.8rem 0 0" }}>
                  Start a workout on Apple Watch, log sets as you go, and see live heart rate
                  and active energy. When you end the session, GymFactor writes a
                  strength-training workout to Apple Health automatically.
                </p>
              </div>
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
              <div>
                <AppStoreButton />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap-narrow">
            <div className="section-head center">
              <h2>Questions</h2>
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
              <p>Free to download. Build your program in two minutes.</p>
              <div className="hero-actions">
                <AppStoreButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
