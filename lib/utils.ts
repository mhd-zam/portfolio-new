import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;

    // Custom smooth scroll logic for more "animated" feel
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 80; // Offset for fixed navbar

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
