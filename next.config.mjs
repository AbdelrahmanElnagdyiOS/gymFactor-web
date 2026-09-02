/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into `out/` so it can be hosted anywhere
  // (Hostinger File Manager, any static host) as well as on Vercel.
  output: "export",

  // `/terms` -> `/terms/index.html`, matching Apache/LiteSpeed directory indexes.
  // On Vercel this also means a bare `.html` URL 404s, so the embedded prototype
  // is referenced as `/assets/prototype/` — a "directory" URL that Vercel maps
  // to out/assets/prototype.html automatically.
  trailingSlash: true,

  // Required for `output: export` — no server-side image optimization.
  images: { unoptimized: true },
};

// Dev only: `next dev` doesn't do the `/assets/prototype/` -> file mapping that
// Vercel does, so rewrite it locally. Attaching `rewrites` unconditionally makes
// `next build` (output: export) print a warning, so only add it in development —
// the production build ships without it and Vercel serves the static file.
if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = async () => [
    { source: "/assets/prototype", destination: "/assets/prototype.html" },
    { source: "/assets/prototype/", destination: "/assets/prototype.html" },
  ];
}

export default nextConfig;
