import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <div>
      <select
        className={cn("w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-plum outline-none focus:border-flame focus:ring-2 focus:ring-flame/20", error ? "border-chili" : "border-plum/20", className)}
        aria-invalid={error ? true : undefined}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-chili">{error}</p>}
    </div>
  );
}