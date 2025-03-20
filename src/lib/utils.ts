import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fonction = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
];

export { fonction };
