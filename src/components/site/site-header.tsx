"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Respect an optional basePath for static assets in public/ (see next.config.ts).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteHeader() {
  // trailingSlash: true can yield "/contact/"; normalize for comparisons.
  const rawPath = usePathname();
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy text-white shadow-sm">
      <div className="h-1 bg-brand-red" aria-hidden="true" />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3.5 min-[400px]:gap-4 sm:gap-[1.125rem] rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setOpen(false)}
        >
          <picture className="shrink-0">
            <source srcSet={`${basePath}/logo/dvv-logo.webp`} type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images unoptimized */}
            <img
              src={`${basePath}/logo/dvv-logo.png`}
              alt=""
              aria-hidden="true"
              width={274}
              height={160}
              className="h-10 w-auto min-[400px]:h-[52px] sm:h-16"
            />
          </picture>
          <span className="font-script whitespace-nowrap text-[1.3rem] leading-none min-[400px]:text-[1.5rem] tracking-[0.01em] [-webkit-text-stroke:0.4px_currentColor] [paint-order:stroke_fill] [text-shadow:0_0_0.4px_currentColor,0_1px_1px_rgb(0_0_0/0.35)] sm:text-[2rem]">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              const isDonate = item.href === "/donate";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                      isDonate
                        ? "bg-brand-red text-white hover:bg-brand-red/90"
                        : "text-blue-100 hover:bg-white/10 hover:text-white",
                      active && !isDonate && "bg-white/15 text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-white/10 lg:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium text-blue-100 hover:bg-white/10 hover:text-white",
                      active && "bg-white/15 text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
