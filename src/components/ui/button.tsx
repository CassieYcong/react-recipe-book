import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
};

const variants = {
  primary: "bg-chili text-white hover:bg-plum",
  secondary: "border border-plum/20 bg-lime text-plum hover:bg-sun",
  tertiary: "text-chili hover:text-plum",
};

export function Button({ variant = "primary", className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn("cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame disabled:cursor-not-allowed disabled:opacity-60", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
