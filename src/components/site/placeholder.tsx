import { cn } from "@/lib/utils";

/** Visually flags copy that must be replaced before launch. */
export function Placeholder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded bg-amber-100 px-1 py-0.5 text-amber-900 ring-1 ring-amber-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
    >
      <strong className="font-semibold">Placeholder content: </strong>
      {children}
    </div>
  );
}
