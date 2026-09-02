import { APP_STORE_URL, SITE_URL } from "@/lib/config";
import { faqs } from "@/lib/faq";

/**
 * JSON-LD structured data. Search engines use these to build rich results
 * (FAQ drop-downs, app cards, breadcrumbs). Everything here is factual — no
 * invented ratings or review counts.
 */

function abs(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GymFactor",
  url: SITE_URL,
  logo: abs("/assets/logo.svg"),
  sameAs: [APP_STORE_URL],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GymFactor",
  url: SITE_URL,
  inLanguage: "en",
};

export const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "GymFactor — Gym Workout Logger",
  operatingSystem: "iOS, watchOS",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Workout & Strength Training Log",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  image: abs("/assets/app-today.png"),
  screenshot: abs("/assets/app-today.png"),
  description:
    "GymFactor is a local-first gym workout logger for iPhone and Apple Watch. It builds a training program, remembers every set, rep, and weight from last session, and turns each workout into progress you can read — fully offline, no account, no feed.",
  featureList: [
    "Workout logging with sets, reps, and weight",
    "Automatic last-session memory and next-set targets",
    "Guided training program and routine builder",
    "Progress charts: strength score, per-exercise trends, training heatmap",
    "Rest timer",
    "Apple Watch logging with live heart rate and active energy",
    "AI plate and dumbbell scan (Pro)",
    "Offline-first, no account required",
    "Private iCloud sync",
    "15 languages",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to download. GymFactor Pro is an optional in-app subscription.",
  },
};

export function faqPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Renders one or more JSON-LD blocks as <script type="application/ld+json">. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inline; no user input flows in here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
