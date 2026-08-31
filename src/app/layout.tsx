import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

// Plus Jakarta Sans ships as a variable font (wght 200–800), matching the app's
// bundled font. Omitting `weight` pulls the variable axis, so 500/600/700/800
// used in globals.css all resolve.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "GymFactor is a local-first gym logger for iPhone and Apple Watch. Build a training program, remember last-session weights, and watch your progress — no social feed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GymFactor — Train. Log. Progress.",
    template: "%s · GymFactor",
  },
  description,
  applicationName: "GymFactor",
  openGraph: {
    type: "website",
    siteName: "GymFactor",
    url: SITE_URL,
    title: "GymFactor — Train. Log. Progress.",
    description:
      "A local-first gym logger for iPhone and Apple Watch. Your workouts stay on your devices.",
    images: ["/assets/mark.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymFactor — Train. Log. Progress.",
    description:
      "A local-first gym logger for iPhone and Apple Watch. Your workouts stay on your devices.",
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
      <body>{children}</body>
    </html>
  );
}
