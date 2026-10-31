import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder } from "@/components/site/placeholder";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Questions about membership, donations, or volunteering? We'd love to hear from you."
      />
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-[2fr_1fr]">
        <section aria-labelledby="form-heading">
          <Card className="border-t-4 border-t-brand-red">
            <CardHeader>
              <h2 id="form-heading" className="font-heading text-xl font-semibold text-brand-navy">
                Send us a message
              </h2>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="info-heading" className="rounded-xl bg-brand-cream p-6">
          <h2 id="info-heading" className="font-heading text-xl font-semibold text-brand-navy">
            Reach us directly
          </h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="flex items-center gap-2 font-semibold">
                <MapPin className="size-4 text-brand-red" aria-hidden="true" /> Mailing address
              </dt>
              <dd className="mt-1">
                <address className="not-italic">
                  {site.mailingAddress.map((line) => (
                    <span key={line} className="block">
                      <Placeholder>{line}</Placeholder>
                    </span>
                  ))}
                </address>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 font-semibold">
                <Mail className="size-4 text-brand-red" aria-hidden="true" /> Email
              </dt>
              <dd className="mt-1 break-words">
                <Placeholder>{site.email}</Placeholder>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
