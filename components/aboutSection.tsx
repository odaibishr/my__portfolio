'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import AnimatedTextBlur from './animations/animatedTextBulr';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection({ title, subtitle }: { title: string; subtitle: string }) {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={sectionRef}
            className="my-10 relative container mx-auto rounded-2xl  py-32 border border-border bg-primary/10 px-4 text-center max-w-4xl overflow-hidden"
        >
            <h1 className="text-4xl capitalize font-extrabold text-card-foreground relative z-10 mb-6">
                {title}
            </h1>

            <AnimatedTextBlur className='text-lg cap leading-relaxed tracking-wide text-foreground relative z-10' text={subtitle} triggerRef={sectionRef} />
        </div>
    );
}
