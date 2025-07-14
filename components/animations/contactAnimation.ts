'use client';
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactAnimation({ sectionRef, containerRef }: { sectionRef: React.RefObject<HTMLDivElement | null>, containerRef: React.RefObject<HTMLDivElement | null> }) {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    // toggleActions: "play none none none",
                },
            });

            timeline
                .from(containerRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out",
                })
                .from(".contact-tag", {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out",
                })
                .from(".contact-title", {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.4")
                .from(".contact-subtext", {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.4")
                .from(".contact-button", {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.3");

        });

        return () => ctx.revert();

    }, []);
}
