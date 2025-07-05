"use client";
import { Portfolio } from "@/sanity.types";
import SectionHeader from "./sectionHeader";
import { useRef, useState } from "react";


export default function FaqsSection({ portfolio }: { portfolio: Portfolio }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="container mx-auto py-10">
            <SectionHeader
                title={portfolio.faqsTitle ?? ""}
                subtitle={portfolio.faqsSubTitle ?? ""}
                triggerRef={sectionRef}
                heading="FAQs"
            />

            <div id="accordion" className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                {portfolio.faqs?.map((faq: any, index: number) => (
                    <div key={index}>
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-t border-x border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`accordion-body-${index}`}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`w-3 h-3 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-body-${index}`}
                            className={`p-5 border-b border-x rounded-b-2xl border-gray-200 dark:border-gray-700 ${activeIndex !== index ? 'hidden' : ''}`}
                        >
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                        </div>
                    </div>

                 
                ))}
            </div>

        </section>
    );
}