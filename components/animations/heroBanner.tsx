"use client";
import Link from "next/dist/client/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function HeroBanner({ heroGreeting }: { heroGreeting: string }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        // GSAP animation logic here
        gsap.from(ref.current, {
            opacity: 0,
            y: 40,
            scale: 0,
            ease: "expo.out",
            duration: 1,
            delay: 0.5,
        });
    }, {
        scope: ref,
    });



    return (
        <div ref={ref} className="flex justify-center">
            <Link href="/" className="inline-flex items-center gap-x-2 bg-popover border border-primary p-1 px-3 rounded-full transition hover:border-primary-100" >
                {heroGreeting}
            </Link>
        </div>
    );
}