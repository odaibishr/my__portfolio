"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function FaqAnimations(faqRefs: React.RefObject<(HTMLDivElement | null)[]>, triggerRef: React.RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        // if (!faqRefs.current || !triggerRef.current) return;

        gsap.fromTo(
            faqRefs.current,
            {
                y: -30,
                x: -50,
                scale: 0.8,
                autoAlpha: 0,
            },
            {
                y: 0,
                x: 0,
                scale: 1,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    toggleActions: "play none none none",
                    trigger: triggerRef.current,
                    start: "70% center",
                },
            }
        );
    }, []);
}
