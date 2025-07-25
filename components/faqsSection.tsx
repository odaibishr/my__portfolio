"use client";

import SectionHeader from "./sectionHeader";
import FaqItem from "./faqItem";
import { useRef } from "react";
import { FaqAnimations } from "./animations/faqAnimations";
import { Faq } from "@/data/constant";

export default function FaqsSection({ heading, title, subtitle, faqs }: { heading: string, title: string, subtitle: string, faqs: Faq[] }) {
    
    const sectionRef = useRef<HTMLDivElement>(null);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    const registerRef = (el: HTMLDivElement | null, index: number) => {
        faqRefs.current[index] = el;
    };

    FaqAnimations(faqRefs, sectionRef);

    return (
        <section
            ref={sectionRef}
            className="container my-10 grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 py-1"
        >
            <div className="space-y-5">
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                    triggerRef={sectionRef}
                    heading={heading}
                />
                <div className="space-y-5">
                    {faqs
                        ?.filter((_, index) => index < 2)
                        .map((faq: Faq, index: number) => (
                            <FaqItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                registerRef={registerRef}
                            />
                        ))}
                </div>
            </div>

            <div className="space-y-5">
                {faqs
                    ?.filter((_, index) => index >= 2)
                    .map((faq: Faq, i: number) => {
                        const adjustedIndex = i + 2;
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
