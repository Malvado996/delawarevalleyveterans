/**
 * Central site configuration.
 * Values wrapped in [brackets] are PLACEHOLDERS — replace them with real,
 * verified information before launch. Do not publish placeholder values.
 */
export const site = {
  name: "Delaware Valley Veterans",
  domain: "delawarevalleyveterans.org",
  url: "https://delawarevalleyveterans.org",
  taxStatus: "501(c)(19)",
  ein: "[EIN — PLACEHOLDER]",
  email: "[contact email — PLACEHOLDER, e.g. info@delawarevalleyveterans.org]",
  phone: "[phone number — PLACEHOLDER]",
  mailingAddress: [
    "[Street address — PLACEHOLDER]",
    "[City, State ZIP — PLACEHOLDER]",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/membership", label: "Membership" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
