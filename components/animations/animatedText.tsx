"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function AnimatedText({
  text,
  type = "chars",
  className,
  duration = 1,
  stagger = 0.05,
  from = 50,
}: {
  text: string;
  type?: "words" | "chars";
  className?: string;
  duration?: number;
  stagger?: number;
  from?: number;

}) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    document.fonts.onloadingdone = () => {
      const split = new SplitText(textRef.current, {
        type: type,
        smartWrap: true,
      });

      gsap.from(split[type], {
        y: from,
        autoAlpha: 0,
        duration,
        ease: "expo.inOut",
        stagger,
      });

      return () => {
        split.revert();
      };
    };
  }, [text]);

  return (
    <div ref={textRef} className={cn("animated-text", className)}>
      {text}
    </div>
  );
}
