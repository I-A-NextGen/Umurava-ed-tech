import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Challenge & Hackthons" },
  { href: "/", label: "For Educational Institutions" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Contact Us " },

]