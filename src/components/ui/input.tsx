import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div>
      <input className={cn("w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-plum outline-none focus:border-flame focus:ring-2 focus:ring-flame/20", error ? "border-chili" : "border-plum/20", className)} {...props} />
      {error && <p className="mt-1 text-xs text-chili">{error}</p>}
    </div>
  );
}