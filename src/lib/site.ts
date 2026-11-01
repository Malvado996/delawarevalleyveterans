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
  mailingAddress: [
    "[Street address — PLACEHOLDER]",
    "[City, State ZIP — PLACEHOLDER]",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/membership", label: "Membership" },
    { href: "/founders", label: "Founders & Board" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type Founder = {
  id: string;
  firstName: string;
  /** Real last name, or a bracketed placeholder rendered in amber. */
  lastName: { value: string; placeholder: boolean };
  /** Board office, shown prominently on the card. */
  title: string;
  /** Service sentence, shown as the first line of the bio copy. */
  service: string;
  branchPlaceholder?: string;
  bio: string;
  email: string;
};

/**
 * Founding board members. Bios use ONLY facts provided by the organization —
 * do not add ranks, dates, units, or awards without each founder's sign-off.
 * Bracketed values are PLACEHOLDERS — replace before launch.
 */
export const founders: Founder[] = [
  {
    id: "chase-girvin",
    firstName: "Chase",
    lastName: { value: "Girvin", placeholder: false },
    title: "President",
    service: "He served in the U.S. Marine Corps.",
    bio: "As a founding board member, he helps lead the organization's work to connect veterans with the land, with meaningful work, and with each other.",
    email: "chase@delawarevalleyveterans.org",
  },
  {
    id: "philip-rodrigues",
    firstName: "Philip",
    lastName: { value: "Rodrigues", placeholder: false },
    title: "Vice President",
    service: "I served in the U.S. Marine Corps.",
    bio: "As a founding board member of Delaware Valley Veterans, he is committed to helping fellow veterans find purpose and community through agriculture, recreational therapy, and hands-on job training.",
    email: "philip@delawarevalleyveterans.org",
  },
  {
    id: "jake",
    firstName: "Jake",
    lastName: { value: "[Last name TBD]", placeholder: true },
    title: "Secretary/Treasurer",
    service: "He served in the U.S. Air Force.",
    bio: "As a founding board member, he is dedicated to building practical pathways for veterans, from job training in agriculture to food pantries that support veterans and their families.",
    email: "jake@delawarevalleyveterans.org",
  },
];
