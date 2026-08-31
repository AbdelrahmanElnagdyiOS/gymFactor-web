import { APP_STORE_URL } from "@/lib/config";

/**
 * "Download on the App Store" badge.
 * TODO: replace APP_STORE_URL in src/lib/config.ts with the real listing URL.
 */
export function AppStoreButton({
  label = "Download GymFactor on the App Store",
}: {
  label?: string;
}) {
  return (
    <a className="appstore-btn" href={APP_STORE_URL} aria-label={label}>
      <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M16.365 1.43c0 1.14-.42 2.22-1.19 3.02-.83.88-2.17 1.55-3.29 1.46-.14-1.12.44-2.3 1.16-3.03.83-.85 2.24-1.47 3.32-1.45zM20.9 17.06c-.6 1.38-.88 1.99-1.65 3.21-1.07 1.71-2.58 3.83-4.46 3.85-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.42 1.09-1.87-.02-3.3-1.94-4.37-3.64-3-4.76-3.32-10.35-1.47-13.32C2.1 3.17 3.9 2.07 5.57 2.07c1.7 0 2.77 1.1 4.18 1.1 1.36 0 2.19-1.1 4.18-1.1 1.5 0 3.09.82 4.22 2.23-3.71 2.03-3.11 7.33.55 8.76-.55 1.31-.86 1.9-1.05 2z" />
      </svg>
      <span className="as-copy">
        <span className="as-small">Download on the</span>
        <span className="as-large">App Store</span>
      </span>
    </a>
  );
}
