import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder } from "@/components/site/placeholder";
import { founders, site } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Founders & Board" };

export default function FoundersPage() {
  return (
    <>
      <PageHeader
        title="Founders & Board"
        description="The veterans who started Delaware Valley Veterans."
      />
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <p className="max-w-3xl text-lg leading-relaxed">
          {site.name} was founded by three veterans who serve as its founding
          board of directors. Each brings their own experience in uniform to our
          mission of serving fellow veterans through agriculture, recreational
          therapy, job training, and food pantries.
        </p>

        <ul className="grid gap-6 md:grid-cols-3">
          {founders.map((f) => (
            <li key={f.id}>
              <section aria-labelledby={`${f.id}-heading`} className="h-full">
                <Card className="h-full border-t-4 border-t-brand-navy">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-cream ring-2 ring-brand-navy"
                      >
                        <picture>
                          <source srcSet={`${basePath}/founders/placeholder-cat.webp`} type="image/webp" />
                          <img
                            src={`${basePath}/founders/placeholder-cat.jpg`}
                            alt=""
                            width={64}
                            height={64}
                            className="size-16 object-cover"
                          />
                        </picture>
                      </div>
                      <div>
                        <h2
                          id={`${f.id}-heading`}
                          className="font-heading text-lg font-semibold text-brand-navy"
                        >
                          {f.firstName}{" "}
                          {f.lastName.placeholder ? (
                            <Placeholder className="text-base font-normal">
                              {f.lastName.value}
                            </Placeholder>
                          ) : (
                            f.lastName.value
                          )}
                        </h2>
                        <p className="mt-1 font-heading text-base font-semibold italic text-brand-red">
                          {f.title}
                        </p>
                        <p className="mt-0.5 text-sm">Founding Board Member</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="leading-relaxed">{f.bio}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Mail className="size-4 text-brand-navy" aria-hidden="true" />
                      <span className="sr-only">Email:</span>
                      <a
                        href={`mailto:${f.email}`}
                        className="break-all font-medium text-brand-navy underline underline-offset-4 hover:text-brand-red"
                      >
                        {f.email}
                      </a>
                    </p>
                  </CardFooter>
                </Card>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
