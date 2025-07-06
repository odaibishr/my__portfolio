"use client";

import { Portfolio } from "@/sanity.types";
import SectionHeader from "./sectionHeader";
import FaqItem from "./faqItem";
import { useRef } from "react";
import { FaqAnimations } from "./animations/faqAnimations";

export default function FaqsSection({ portfolio }: { portfolio: Portfolio }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    const registerRef = (el: HTMLDivElement | null, index: number) => {
        faqRefs.current[index] = el;
    };

    FaqAnimations(faqRefs, sectionRef);

    return (
        <section
            ref={sectionRef}
            className="container grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 py-10"
        >
            <div className="space-y-5">
                <SectionHeader
                    title={portfolio.faqsTitle ?? ""}
                    subtitle={portfolio.faqsSubTitle ?? ""}
                    triggerRef={sectionRef}
                    heading="FAQs"
                />
                <div className="space-y-5">
                    {portfolio.faqs
                        ?.filter((_, index) => index < 3)
                        .map((faq: any, index: number) => (
                            <FaqItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                registerRef={registerRef}
                                defaultChecked={index === 0}
                            />
                        ))}
                </div>
            </div>

            <div className="space-y-5">
                {portfolio.faqs
                    ?.filter((_, index) => index >= 3)
                    .map((faq: any, i: number) => {
                        const adjustedIndex = i + 3;
                        return (
                            <FaqItem
                                key={adjustedIndex}
                                index={adjustedIndex}
                                question={faq.question}
                                answer={faq.answer}
                                registerRef={registerRef}
                            />
                        );
                    })}
            </div>
        </section>
    );
}
