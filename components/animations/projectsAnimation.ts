// hooks/useProjectAnimations.ts
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectAnimatioin(
    refs: React.RefObject<(HTMLDivElement | null)[]>,
    count: number
) {
    useEffect(() => {
        const ctx = gsap.context(() => {
            refs.current.forEach((el, i) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.95,
                        filter: 'blur(8px)',
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                        ease: 'power4.out',
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            end: 'bottom center',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, [count]);
}
