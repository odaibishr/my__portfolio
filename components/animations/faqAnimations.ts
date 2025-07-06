"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FaqAnimations(faqRefs: React.RefObject<(HTMLDivElement | null)[]>, triggerRef: React.RefObject<HTMLDivElement| null>) {
    useEffect(() => {
        if (!faqRefs.current.length) return;

        gsap.fromTo(
            faqRefs.current,
            {
                y: -30,
                x: -50,
                scale: 0.8,
                opacity: 0,
            },
            {
                y: 0,
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "10% center",
                    markers: true,
                },
            }
        );
    }, []);
}
