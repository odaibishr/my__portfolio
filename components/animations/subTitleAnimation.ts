"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SubTitleAnimation({
    sectionRef,
    textRef,
    duration = 1,
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>,
    textRef: React.RefObject<HTMLDivElement | null>,
    duration?: number,
}) {
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = new SplitText(textRef.current!, {
                type: "words",
            });

            gsap.set(split.words, {
                display: "inline-block",
                clipPath: "inset(0% 0% 100% 0%)",
                autoAlpha: 0,
            });

            gsap.to(split.words, {
                clipPath: "inset(0% 0% 0% 0%)",
                autoAlpha: 1,
                duration: duration,
                ease: "power4.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: sectionRef.current!,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, [textRef]);
}