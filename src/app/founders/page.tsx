import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Placeholder, PlaceholderNotice } from "@/components/site/placeholder";
import { StarMark } from "@/components/site/star-mark";
import { founders, site } from "@/lib/site";

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

        <PlaceholderNotice>
          Last names, board titles, and contact details are still being
          confirmed and will be added before launch.
        </PlaceholderNotice>

        <ul className="grid gap-6 md:grid-cols-3">
          {founders.map((f) => (
            <li key={f.id}>
              <section aria-labelledby={`${f.id}-heading`} className="h-full">
                <Card className="h-full border-t-4 border-t-brand-navy">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <StarMark className="mt-1 size-5 shrink-0 text-brand-red" />
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
                        <p className="mt-1 text-sm">
                          Founding Board Member ·{" "}
                          <Placeholder>{f.boardTitle}</Placeholder>
                        </p>
                        <p className="mt-1 text-sm font-medium text-brand-red">
                          {f.service}
                          {f.branchPlaceholder ? (
                            <>
                              {" · "}
                              <Placeholder className="font-normal">
                                {f.branchPlaceholder}
                              </Placeholder>
                            </>
                          ) : null}
                        </p>
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
                      <Placeholder>{f.email}</Placeholder>
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
