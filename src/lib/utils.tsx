import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge Tailwind classes conditionally
export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}
