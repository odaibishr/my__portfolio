"use client";

import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MobileNavBar() {
    const pathname = usePathname();
    const menuItems = [
        { name: "Home", href: "/", icon: "home" },
        { name: "About", href: "/about", icon: "circle-user-round" },
        { name: "Projects", href: "/projects", icon: "blocks" },
        { name: "Contact", href: "/contact", icon: "mail" },
    ];
    return (
        <div className=" text-xs z-50 fixed -bottom-1 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] md:hidden border border-border bg-card pt-2 rounded-t-2xl">
            <ul className="flex justify-around items-center mx-5 py-3">
                {menuItems.map((item: any, index: number) => (
                    <li key={index} className={""}>
                        <Link
                            href={item.href}
                            className={cn(
                                "text-foreground group/nav-item flex flex-col items-center gap-2 group-hover/nav-item:text-primary duration-150",
                                pathname === item.href && "text-primary"
                            )}
                        >
                            <DynamicIcon className="size-5 text" name={item.icon} />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MobileNavBar;