import type { Metadata } from "next";
import { BadgeCheck, ClipboardList, Gift, Wallet } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder, PlaceholderNotice } from "@/components/site/placeholder";

export const metadata: Metadata = { title: "Membership" };

// TODO: Replace every "[... TBD]" placeholder with details approved by the
// organization's leadership (and confirmed against its bylaws).
const sections = [
  { id: "dues", title: "Dues Structure", icon: Wallet, text: "[Dues amount TBD]" },
  { id: "eligibility", title: "Eligibility Requirements", icon: BadgeCheck, text: "[Eligibility details TBD]" },
  { id: "benefits", title: "Member Benefits", icon: Gift, text: "[Member benefits TBD]" },
  { id: "join", title: "How to Join", icon: ClipboardList, text: "[Joining process TBD]" },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Membership"
        description="Join a community of veterans serving the Delaware Valley."
      />
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <PlaceholderNotice>
          Membership details are still being finalized. The sections below are
          placeholders to be filled in by the organization.
        </PlaceholderNotice>

        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map(({ id, title, icon: Icon, text }) => (
            <section key={id} aria-labelledby={`${id}-heading`}>
              <Card className="h-full border-t-4 border-t-brand-navy">
                <CardHeader>
                  <h2
                    id={`${id}-heading`}
                    className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy"
                  >
                    <Icon className="size-5 text-brand-red" aria-hidden="true" />
                    {title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p>
                    <Placeholder>{text}</Placeholder>
                  </p>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        <p className="text-muted-foreground">
          Questions about membership?{" "}
          <Link href="/contact" className="font-medium text-brand-navy underline underline-offset-4">
            Contact us
          </Link>
          .
        </p>
      </div>
    </>
  );
}
