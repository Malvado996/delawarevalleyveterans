import type { Metadata } from "next";
import { CreditCard, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder, PlaceholderNotice } from "@/components/site/placeholder";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate"
        description={`Your support helps ${site.name} serve veterans and their families.`}
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        <section
          aria-labelledby="give-heading"
          className="rounded-xl border-t-4 border-t-brand-red bg-brand-cream p-6 sm:p-8"
        >
          <h2 id="give-heading" className="font-heading text-2xl font-bold text-brand-navy">
            Make a donation
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Thank you for considering a gift. Online giving is coming soon.
          </p>
          <div className="mt-6 flex flex-col items-start gap-2">
            {/*
              TODO(stripe): Wire this button to Stripe once an account exists.
              Simplest option: create a Stripe Payment Link in the Stripe
              dashboard and render this as an <a href="https://donate.stripe.com/...">
              (or read the URL from an env var such as
              NEXT_PUBLIC_STRIPE_DONATION_LINK). Alternatively, add a server
              route that creates a Stripe Checkout Session.
            */}
            <Button
              disabled
              aria-describedby="donate-button-note"
              className="h-12 gap-2 bg-brand-red px-6 text-base text-white"
            >
              <CreditCard className="size-5" aria-hidden="true" />
              Donate online (coming soon)
            </Button>
            <p id="donate-button-note" className="text-sm text-muted-foreground">
              <Placeholder>[Placeholder button — online donations are not yet enabled]</Placeholder>
            </p>
          </div>
        </section>

        <section aria-labelledby="how-heading">
          <h2 id="how-heading" className="font-heading text-2xl font-bold text-brand-navy">
            How to Donate
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card className="h-full border-t-4 border-t-brand-navy">
              <CardHeader>
                <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy">
                  <CreditCard className="size-5 text-brand-red" aria-hidden="true" />
                  Card donations
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Secure online card donations will be available soon through
                  the button above.
                </p>
                <p>
                  <Placeholder>[Card donation details TBD]</Placeholder>
                </p>
              </CardContent>
            </Card>

            <Card className="h-full border-t-4 border-t-brand-navy">
              <CardHeader>
                <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy">
                  <Mail className="size-5 text-brand-red" aria-hidden="true" />
                  Mail a check
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  Make checks payable to{" "}
                  <Placeholder>[Payee name TBD]</Placeholder> and mail to:
                </p>
                <address className="not-italic">
                  <Placeholder>[Mailing address TBD]</Placeholder>
                </address>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="tax-heading">
          <h2 id="tax-heading" className="font-heading text-xl font-bold text-brand-navy">
            A note on tax deductibility
          </h2>
          <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              {site.name} is a {site.taxStatus} veterans organization.
              Contributions to qualifying {site.taxStatus} veterans
              organizations may be tax-deductible under IRS rules, depending on
              the organization meeting the applicable requirements and on your
              individual circumstances.
            </p>
            <p>
              We cannot provide tax advice. Please consult a qualified tax
              advisor regarding the deductibility of your gift.
            </p>
            <PlaceholderNotice>
              [Final tax-deductibility statement and EIN TBD — confirm wording
              with the organization&apos;s tax advisor before launch.]
            </PlaceholderNotice>
          </div>
        </section>
      </div>
    </>
  );
}
