import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type CardProps = { children: ReactNode; className?: string };
export function Card({ children, className }: CardProps) {
  return <div className={cn("border border-plum/10 rounded-2xl overflow-hidden bg-white shadow-sm", className)}>{children}</div>;
}