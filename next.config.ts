import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// "Last updated" date for the footer, taken from the latest git commit.
function lastUpdated(): string {
  let d = new Date();
  try {
    d = new Date(execSync("git log -1 --format=%cI").toString().trim());
  } catch {}
  return d.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "America/New_York",
  });
}

/**
 * Static export for GitHub Pages.
 *
 * basePath / assetPrefix come from NEXT_PUBLIC_BASE_PATH (default "").
 * - If the repo is named `delawarevalleyveterans.org` (or is a <user>.github.io
 *   site), or the custom domain delawarevalleyveterans.org is used (see
 *   public/CNAME), NO basePath is needed: leave NEXT_PUBLIC_BASE_PATH empty.
 * - For a project repo served at https://<user>.github.io/<repo-name>/,
 *   set NEXT_PUBLIC_BASE_PATH="/<repo-name>".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  env: { NEXT_PUBLIC_LAST_UPDATED: lastUpdated() },
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // cacheComponents / partialPrefetching (PPR) are disabled: they are not
  // supported with `output: "export"`.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
