import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import { JsonLd, organizationLd, websiteLd } from "@/lib/structured-data";

// Plus Jakarta Sans ships as a variable font (wght 200–800), matching the app's
// bundled font. Omitting `weight` pulls the variable axis, so 500/600/700/800
// used in globals.css all resolve.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "GymFactor is a workout logging app for iPhone and Apple Watch. Build a training program, log every set, rep, and weight, remember last-session lifts, and track progress — fully offline, no account, no feed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GymFactor — Gym Workout Logger for iPhone & Apple Watch",
    template: "%s · GymFactor",
  },
  description,
  applicationName: "GymFactor",
  keywords: [
    "workout logging app",
    "gym workout tracker",
    "workout log",
    "workout logger",
    "exercise log",
    "training log",
    "gym log app",
    "log sets and reps",
    "set and rep tracker",
    "strength training log",
    "progressive overload app",
    "workout routine builder",
    "training program app",
    "Apple Watch workout tracker",
    "offline workout tracker",
    "workout tracker no account",
    "gym diary",
    "lifting log",
    "weight lifting tracker",
    "iPhone workout app",
  ],
  category: "Health & Fitness",
  alternates: { canonical: "/" },
  authors: [{ name: "GymFactor" }],
  creator: "GymFactor",
  publisher: "GymFactor",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "GymFactor",
    url: SITE_URL,
    locale: "en_US",
    title: "GymFactor — Gym Workout Logger for iPhone & Apple Watch",
    description:
      "Log every set, rep, and weight. GymFactor builds your program, remembers last-session lifts, and shows real progress — offline, no account, no feed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymFactor — Gym Workout Logger for iPhone & Apple Watch",
    description:
      "Log every set, rep, and weight. Programs, last-session memory, and progress you can read — offline, no account.",
  },
  // The favicon comes from the app/icon.svg file convention automatically;
  // only the Apple touch icon needs declaring.
  icons: {
    apple: "/assets/mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <JsonLd data={[organizationLd, websiteLd]} />
      </body>
    </html>
  );
}
