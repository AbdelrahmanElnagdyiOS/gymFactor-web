import Link from "next/link";
import { PLAY_STORE_URL } from "@/lib/config";

/**
 * "Get it on Google Play" badge. Android isn't shipped yet, so PLAY_STORE_URL
 * points at /coming-soon for now — swap it for the real Play listing at launch.
 */
export function PlayStoreButton({
  label = "GymFactor for Android — coming soon",
}: {
  label?: string;
}) {
  const isInternal = PLAY_STORE_URL.startsWith("/");
  const inner = (
    <>
      <svg className="store-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#d3f45b" d="M4.1 2.4A1.4 1.4 0 0 0 3 3.8v16.4a1.4 1.4 0 0 0 1.1 1.4l9.2-9.6z" />
        <path fill="#fff" d="m16.8 9-2.6-2.7L5 1.6a1.4 1.4 0 0 0-1 0l10.4 10.9z" opacity="0.75" />
        <path fill="#fff" d="M4 22.4a1.4 1.4 0 0 0 1-.1l9.4-5.3-2.1-2.2z" opacity="0.55" />
        <path fill="#d3f45b" d="m17.7 9.5 2.9 1.6a1.4 1.4 0 0 1 0 2.5l-2.9 1.7-2.9-2.9z" />
      </svg>
      <span className="store-btn-copy">
        <span className="store-btn-small">Coming soon to</span>
        <span className="store-btn-large">Google Play</span>
      </span>
    </>
  );

  return isInternal ? (
    <Link className="store-btn" href={PLAY_STORE_URL} aria-label={label}>
      {inner}
    </Link>
  ) : (
    <a className="store-btn" href={PLAY_STORE_URL} aria-label={label}>
      {inner}
    </a>
  );
}
