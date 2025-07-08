'use client';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger);

type AnimatedTextProps = {
    text: string;
    triggerRef: React.RefObject<HTMLDivElement | null>;
    className?: string;
};

const AnimatedTextBlur = ({ text, triggerRef, className }: AnimatedTextProps): React.ReactElement => {
    const textRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        document.fonts.onloadingdone = () => {
            const ctx = gsap.context(() => {
                const split = SplitText.create(textRef.current, {
                    type: 'words',
                    tagName: 'span',
                });

                gsap.set(split.words, {
                    filter: 'blur(0.9px)',
                    opacity: 0.2,
                    y: 0,
                    scale: 1,
                });

                gsap.to(split.words, {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: -5,
                    scale: 1.02,
                    stagger: 0.08,
                    ease: 'power3.out',
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top center',
                        end: '+=200',
                        scrub: 1,
                    },
                });

            }, triggerRef);

            return () => ctx.revert();
        }
    }, [triggerRef]);

    return (
        <div className={className} ref={textRef}>
            {text}
        </div>
    );
};

export default AnimatedTextBlur;