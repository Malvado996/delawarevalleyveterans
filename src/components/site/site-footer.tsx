import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-navy-dark text-blue-100">
      <div className="h-2 bg-brand-red" aria-hidden="true" />
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-heading text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">
            A veterans organization exempt from federal income tax under
            Section {site.taxStatus} of the Internal Revenue Code.
          </p>
          <p className="mt-1 text-sm">EIN: {site.ein}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-blue-200">
          &copy; 2026 {site.name}. All rights reserved.
          <span className="block sm:inline sm:ml-2">Last updated {process.env.NEXT_PUBLIC_LAST_UPDATED}</span>
        </p>
      </div>
    </footer>
  );
}
