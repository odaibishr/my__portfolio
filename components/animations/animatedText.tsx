"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function AnimatedText({ text, type, className, duration, stagger, from, to }: { text: string; type: string; className?: string; duration: number; stagger?: number; from?: number; to?: number; }) {
    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        document.fonts.onloadingdone = () => {
            // do something after all fonts are loaded
            const split = SplitText.create(textRef.current, {
                type: "words, chars",
                wordsClass: "word++",


            });

            gsap.from(type == "words" ? split.words : split.chars, {
                opacity: 0,
                y: from,
                ease: "expo.inOut",
                duration: duration,
                stagger: stagger || 0.05,

            });
        };
    }, {
        scope: textRef,
    });


    return (
        <div ref={textRef} className={cn("animated-text", className)}>
            {text}
        </div>
    );
}
