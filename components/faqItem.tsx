"use client";

import { useRef, useEffect } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/motion-primitives/accordion';
import { ChevronRight } from 'lucide-react';

interface FaqItemProps {
    question: string;
    answer: string;
    index: number;
    registerRef: (el: HTMLDivElement | null, index: number) => void;
   
}

export default function FaqItem({
    question,
    answer,
    index,
    registerRef,
}: FaqItemProps) {
    const itemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        registerRef(itemRef.current, index);
    }, [index, registerRef]);

    return (
        <div
            ref={itemRef}

        >
            <Accordion
                className='flex w-full flex-col'
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                    expanded: {
                        opacity: 1,
                        scale: 1,
                    },
                    collapsed: {
                        opacity: 0,
                        scale: 0.7,
                    },
                }}
            >
                <AccordionItem value={index} className='py-2 rounded-lg border border-border bg-card px-5'>
                    <AccordionTrigger className='w-full cursor-pointer py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-zinc-950 dark:text-zinc-50 font-semibold max-sm:text-sm'>
                                {question}
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                        <p className='pl-6 pr-2 mt-1 text-zinc-500 dark:text-zinc-400 text-sm'>
                            {answer}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
