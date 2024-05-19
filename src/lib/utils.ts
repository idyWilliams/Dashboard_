import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const class_merge = (...classes: (string | boolean)[]): string =>
  classes.filter(Boolean).join(" ");