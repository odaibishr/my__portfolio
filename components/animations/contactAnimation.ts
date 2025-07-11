'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactAnimation({ sectionRef, containerRef }: { sectionRef: React.RefObject<HTMLDivElement | null>, containerRef: React.RefObject<HTMLDivElement | null> }) {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play none none none",
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
    }, []);
}
