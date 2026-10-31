export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.5l2.83 6.07 6.67.73-4.97 4.5 1.38 6.56L12 17.02l-5.91 3.34 1.38-6.56-4.97-4.5 6.67-.73L12 2.5z" />
    </svg>
  );
}
