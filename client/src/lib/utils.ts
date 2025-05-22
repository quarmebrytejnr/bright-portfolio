import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export function formatYears(startYear: number, endYear?: number): string {
  if (!endYear) {
    return `${startYear} - Present`;
  }
  return `${startYear} - ${endYear}`;
}
