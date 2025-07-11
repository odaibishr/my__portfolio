"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AboutHero({
    header,
    subHeader,
    image,
}: {
    header: string;
    subHeader: string;
    image: string;
}) {
    const imageRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const subHeaderRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            document.fonts.onloadingdone = () => {
                gsap.from(imageRef.current, {
                    autoAlpha: 0,
                    scale: 0.8,
                    x: -100,
                    duration: 1.2,
                    ease: "power3.out",
                });

                const headerSplit = new SplitText(headerRef.current!, {
                    type: "words",
                });

                gsap.set(headerSplit.words, {
                    autoAlpha: 0,
                    y: 40,
                    rotateX: 90,
                    filter: "blur(6px)",
                    transformPerspective: 1000,
                    transformOrigin: "center",
                });

                gsap.to(headerSplit.words, {
                    autoAlpha: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 0.6,
                    stagger: 0.06,
                    ease: "back.out(1.7)",
                });

                gsap.set(subHeaderRef.current, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    autoAlpha: 0,
                });

                gsap.to(subHeaderRef.current, {
                    clipPath: "inset(0% 0% 0% 0%)",
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: "power4.out",
                    delay: 0.4,
                });
            };

        }, []);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="container mx-auto flex items-center justify-center mb-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-20 mt-10">
                <div ref={imageRef}>
                    <Image
                        src={urlFor(image!).url()}
                        alt={header!}
                        width={400}
                        height={400}
                        className="object-cover rounded-full md:w-[500px] md:h-[500px] w-[300px] h-[300px] border-2 border-border shadow-xl transition-all duration-700"
                    />
                </div>
                <div>
                    <h2
                        ref={headerRef}
                        className="text-2xl text-center md:text-left md:text-4xl max-w-[550px] font-bold text-foreground mt-6"
                    >
                        {header}
                    </h2>
                    <p
                        ref={subHeaderRef}
                        className="text-muted-foreground mt-4 md:text-xl text-center md:text-left max-w-[600px] md:max-w-[800px]"
                    >
                        {subHeader}
                    </p>
                </div>
            </div>
        </section>
    );
}
