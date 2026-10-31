export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b-4 border-brand-red bg-brand-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-lg text-blue-100">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
