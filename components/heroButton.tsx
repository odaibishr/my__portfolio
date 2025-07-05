"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroButton({ text, herf }: { text: string; herf: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef(null);
    // GSAP animation for the button
    useGSAP(() => {
        gsap.from(ref.current, {
            autoAlpha: 0,
            scale: 0.5,
            ease: "expo.inOut",
            duration: 1,
            delay: 1,
        });
    }, {
        scope: ref,
    });

    const handleMouseEnter = () => {
        gsap.to(iconRef.current, {
            rotate: 360,
            duration: 0.5,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
            rotate: 0,
            duration: 0.5,
            ease: "power1.inOut",
        });
    };


    return (
        <div ref={ref} className="mt-8 gap-3 flex justify-center">
            <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={herf} className="relative inline-flex rounded-full justify-center items-center gap-x-3 text-center bg-accent-foreground dark:bg-popover px-4 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-600">
                {text}
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-popover-foreground text-secondary">
                    <ArrowUpRight ref={iconRef} className="w-5 h-5" />
                </div>
                {/* <div ref={overRef} className="absolute px-4 py-2.5  top-4 right-4 w-[10%]  bg-popover-foreground rounded-full"></div> */}
            </Link>

        </div>
    );
}