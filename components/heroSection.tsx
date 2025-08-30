"use client";
import { Portfolio } from "@/sanity.types";
import HeroBanner from "./animations/heroBanner";
import HeroButton from "./heroButton";
import { useRef } from "react";
import TitleAnimation from "./animations/titleAnimation";
import SubTitleAnimation from "./animations/subTitleAnimation";

export default function HeroSection({ data }: {
    data: Portfolio,
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
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

    return <>
        <section className="container mx-auto flex flex-col items-center justify-center h-[calc(100vh-5rem)]">

            <div className="">
                {/* <!-- Announcement Banner --> */}
                <HeroBanner heroGreeting={data.heroGreeting ?? ""} />
                {/* <!-- End Announcement Banner --> */}

                {/* <!-- Title --> */}
                <div className="text-center mt-10">
                    <h1 ref={headerRef} className="subtitle block font-bold text-foreground text-4xl md:text-5xl lg:text-6xl">{data.heroHeader}</h1>
                </div>
                {/* <!-- End Title --> */}

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p ref={subHeaderRef} className="text-lg text-muted-foreground">{data.heroSubHeader}</p>
                </div>

                {/* <!-- Buttons --> */}

                <HeroButton text={data.heroButtonText ?? "View Projects"} herf="/" />
                {/* <!-- End Buttons --> */}


            </div>
        </section>
    </>
}