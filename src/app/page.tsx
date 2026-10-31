import Link from "next/link";
import { ArrowRight, Flag, HandHeart, Mail, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarMark } from "@/components/site/star-mark";
import { Placeholder } from "@/components/site/placeholder";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const sections = [
  {
    href: "/mission",
    title: "Our Mission",
    description: "Learn what we stand for and the values that guide our work.",
    icon: Flag,
  },
  {
    href: "/membership",
    title: "Membership",
    description: "Find out about becoming a member of our organization.",
    icon: Users,
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Support our programs for veterans and their families.",
    icon: HandHeart,
  },
  {
    href: "/contact",
    title: "Contact Us",
    description: "Have a question? Send us a message.",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[repeating-linear-gradient(180deg,transparent_0,transparent_28px,rgba(179,25,66,0.35)_28px,rgba(179,25,66,0.35)_56px)] md:block"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
            <StarMark className="size-4 text-brand-red-light" />
            A {site.taxStatus} veterans organization
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Serving those who served in the Delaware Valley
          </h1>
          <p className="mt-6 max-w-xl text-lg text-blue-100">
            {site.name} brings veterans together for fellowship, service, and
            support in our community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/membership"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-5 text-base text-brand-navy hover:bg-blue-50",
              )}
            >
              Become a member
            </Link>
            <Link
              href="/donate"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-brand-red px-5 text-base text-white hover:bg-brand-red/90",
              )}
            >
              Donate
            </Link>
          </div>
        </div>
        <div className="h-2 bg-brand-red" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14" aria-labelledby="about-heading">
        <h2 id="about-heading" className="font-heading text-2xl font-bold text-brand-navy">
          Who we are
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
          <Placeholder>
            [Short introduction to the organization — PLACEHOLDER. Describe who
            you are, when you were founded, and the communities you serve.]
          </Placeholder>
        </p>
        <Link
          href="/founders"
          className="mt-4 inline-flex items-center gap-1 font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
        >
          Meet our founders &amp; board
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section className="bg-brand-cream" aria-labelledby="explore-heading">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 id="explore-heading" className="font-heading text-2xl font-bold text-brand-navy">
            Get involved
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {sections.map(({ href, title, description, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group block h-full rounded-xl focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Card className="h-full border-l-4 border-l-brand-red transition-shadow group-hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-brand-navy">
                        <Icon className="size-5 text-brand-red" aria-hidden="true" />
                        {title}
                        <ArrowRight
                          className="ml-auto size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
