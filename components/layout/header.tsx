'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitcher";

const usesPathname = () => {
    const pathname = usePathname();
    return pathname;
}
const Links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/contact",
        label: "Contact",
    },
];

export default function Header() {
    const pathname = usesPathname();
    return (
        <header className="fixed top-0 z-10 py-4 w-full">
            <nav className="container flex items-center justify-between">
                <Link href="/" className="text-lg font-bold">Odai Beshr</Link>
                <div className="space-x-4 hidden md:flex">
                    {Links.map((link) => (
                        <Link key={link.href} href={link.href} className={cn("text-foreground group-hover/nav-item:text-primary block duration-150 hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                        )}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <ThemeSwitcher />
            </nav>
        </header>
    );
}