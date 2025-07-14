"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import TitleAnimation from "./animations/titleAnimation";
import SubTitleAnimation from "./animations/subTitleAnimation";

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const subHeaderRef = useRef<HTMLParagraphElement>(null);

    TitleAnimation({
        sectionRef,
        textRef: headerRef,
        duration: 0.6,
        from: 50,
        stagger: 0.06,
        to: 0,
    });


    SubTitleAnimation({
        sectionRef,
        textRef: subHeaderRef,
        duration: 0.6,
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                autoAlpha: 0,
                scale: 0.8,
                x: -10,
                duration: 1.2,
                ease: "power3.out",
            });

        }, []);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="container mx-auto flex items-center justify-center mb-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-20 mt-10">
                <div ref={imageRef}>
                    <Image
                        src={urlFor(image!).url()}
                        alt={header!}
                        width={400}
                        height={400}
                        priority
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
