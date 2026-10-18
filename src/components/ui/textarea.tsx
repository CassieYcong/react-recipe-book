import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div>
      <textarea className={cn("w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-plum outline-none focus:border-flame focus:ring-2 focus:ring-flame/20", error ? "border-chili" : "border-plum/20", className)} {...props} />
      {error && <p className="mt-1 text-xs text-chili">{error}</p>}
    </div>
  );
}