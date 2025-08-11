"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TitleAnimation({
    sectionRef,
    textRef,
    duration = 1,
    from = 50,
    stagger = 0.06,
    to = 0,
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>,
    textRef: React.RefObject<HTMLDivElement | null>,
    duration?: number,
    from?: number,
    stagger?: number,
    to?: number,
}) {
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(textRef.current!, {
                type: "words",
            });

            gsap.set(split.words, {
                display: "inline-block",
                autoAlpha: 0,
                y: from,
                duration: duration,
                rotateX: 90,
                filter: "blur(6px)",
                transformPerspective: 1000,
                transformOrigin: "center",
            });

            gsap.to(split.words, {
                autoAlpha: 1,
                y: to,
                rotateX: 0,
                filter: "blur(0px)",
                stagger: stagger,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current!,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, [textRef, sectionRef, duration, from, stagger, to]);
}
