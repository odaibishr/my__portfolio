"use client";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Asterisk } from 'lucide-react';
import { useRef } from 'react';
import SubTitleAnimation from './animations/subTitleAnimation';
import TitleAnimation from './animations/titleAnimation';

gsap.registerPlugin(ScrollTrigger);

type sectionHeader = {
    title: string;
    subtitle: string;
    triggerRef?: React.RefObject<HTMLDivElement | null> | null;
    heading: string,
};

export default function SectionHeader({ title, subtitle, triggerRef, heading }: sectionHeader) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    TitleAnimation({
        sectionRef: triggerRef!,
        textRef: titleRef,
        duration: 0.6,
    });

    SubTitleAnimation({
        sectionRef: triggerRef!,
        textRef: subtitleRef,
        duration: 0.6,
    });

    return (
        <div>
            <div className="flex gap-2 uppercase items-center text-primary fade-item mt-4 md:mt-8 text-sm md:text-lg font-bold text-center">
                <Asterisk className='text-primary' size={30} />
                <span className="text-lg md:text-xl">{heading}</span>
            </div>
            <h1 className="font-bold text-2xl md:text-4xl mt-2 fade-item" ref={titleRef}>
                {title}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm md:w-[400px] fade-item" ref={subtitleRef}>
                {subtitle}
            </p>
        </div>
    );
}
