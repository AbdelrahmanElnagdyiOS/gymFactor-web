/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into `out/` so it can be hosted anywhere
  // (Hostinger File Manager, any static host) as well as on Vercel.
  output: "export",

  // `/terms` -> `/terms/index.html`, matching Apache/LiteSpeed directory indexes.
  trailingSlash: true,

  // Required for `output: export` — no server-side image optimization.
  images: { unoptimized: true },
};

export default nextConfig;
