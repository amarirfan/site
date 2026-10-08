import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a root-relative path with the configured Astro `base`.
export function url(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path
}
