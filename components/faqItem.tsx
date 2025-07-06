"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FaqItemProps {
    question: string;
    answer: string;
    index: number;
    registerRef: (el: HTMLDivElement | null, index: number) => void;
    defaultChecked?: boolean;
}

export default function FaqItem({
    question,
    answer,
    index,
    registerRef,
    defaultChecked = false,
}: FaqItemProps) {
    const itemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        registerRef(itemRef.current, index);
    }, [index, registerRef]);

    return (
        <div
            ref={itemRef}
            className={cn(
                "collapse collapse-arrow bg-card border border-border overflow-hidden",
                defaultChecked ? "collapse-open" : ""
            )}
        >
            <input type="radio" name="my-accordion" defaultChecked={defaultChecked} />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content text-sm">{answer}</div>
        </div>
    );
}
