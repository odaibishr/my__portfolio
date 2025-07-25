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
        document.fonts.ready.then(() => {
            const ctx = gsap.context(() => {
                const split = SplitText.create(textRef.current, {
                    type: 'words',
                    tagName: 'span',
                });

                gsap.set(split.words, {
                    filter: 'blur(1px)',
                    autoAlpha: 0.5,
                    y: 0,
                    scale: 1,
                    duration: 1,

                });

                gsap.to(split.words, {
                    filter: 'blur(0px)',
                    autoAlpha: 1,
                    y: -10,
                    scale: 1.02,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top center',
                        end: '+=300',
                        scrub: 1,
                    },
                });

            }, triggerRef);

            return () => ctx.revert();
        });
    }, [triggerRef]);

    return (
        <div className={className} ref={textRef}>
            {text}
        </div>
    );
};

export default AnimatedTextBlur;