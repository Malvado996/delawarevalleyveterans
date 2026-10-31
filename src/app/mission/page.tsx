import type { Metadata } from "next";
import { Briefcase, HeartHandshake, ShoppingBasket, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder } from "@/components/site/placeholder";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mission" };

// DRAFT mission statement — review and approve with the organization's leadership.
const missionStatement = `${site.name} exists to help veterans find purpose, healing, and community through the land. We partner with local agriculture to create meaningful ways for veterans to serve again, offer recreational therapy that supports their well-being, and provide hands-on job training that opens doors to careers in farming and food production. Together, we help stock veteran food pantries so that no one who served goes without — growing food, skills, and connection for veterans and their families across the Delaware Valley.`;

const pillars = [
  {
    title: "Working with Agriculture",
    icon: Sprout,
    text: "We partner with farms and growers to connect veterans with the land and with each other.",
  },
  {
    title: "Recreational Therapy for Veterans",
    icon: HeartHandshake,
    text: "We offer outdoor and recreational activities that support veterans' physical and mental well-being.",
  },
  {
    title: "Veteran Job Training in Agriculture",
    icon: Briefcase,
    text: "We help veterans build practical, hands-on skills for careers in agriculture and food production.",
  },
  {
    title: "Veteran Food Pantries",
    icon: ShoppingBasket,
    text: "We help supply food pantries that serve veterans and their families in our community.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        title="Our Mission"
        description="Purpose, healing, and community — rooted in the land."
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="font-heading text-2xl font-bold text-brand-navy">
            Mission statement
          </h2>
          <p className="mt-4 max-w-3xl border-l-4 border-brand-red pl-4 text-lg leading-relaxed">
            {missionStatement}
          </p>
        </section>

        <section aria-labelledby="pillars-heading">
          <h2 id="pillars-heading" className="font-heading text-2xl font-bold text-brand-navy">
            Our Pillars
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {pillars.map(({ title, icon: Icon, text }) => (
              <li key={title}>
                <Card className="h-full border-t-4 border-t-brand-navy">
                  <CardHeader>
                    <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy">
                      <Icon className="size-5 text-brand-red" aria-hidden="true" />
                      {title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {text} <Placeholder>[Program details TBD]</Placeholder>
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="status-heading" className="rounded-xl bg-brand-cream p-6">
          <h2 id="status-heading" className="font-heading text-xl font-bold text-brand-navy">
            About our {site.taxStatus} status
          </h2>
          <p className="mt-3 leading-relaxed">
            {site.name} is organized as a veterans organization under Section{" "}
            {site.taxStatus} of the Internal Revenue Code, a category of
            tax-exempt organization for posts or organizations of past or
            present members of the U.S. Armed Forces. EIN:{" "}
            <Placeholder>{site.ein}</Placeholder>
          </p>
        </section>
      </div>
    </>
  );
}
