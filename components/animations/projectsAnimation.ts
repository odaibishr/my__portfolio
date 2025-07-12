'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsAnimation(
    refs: React.RefObject<(HTMLDivElement | null)[]>,
    count: number
) {
    useEffect(() => {

        gsap.defaults({
            ease: "power3.out",
            duration: 1.2
        });

        const ctx = gsap.context(() => {
            refs.current.forEach((el, i) => {
                if (!el) return;

                const delay = i * 0.1;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top 30%",
                        toggleActions: "play none none none",
                        markers: false,
                        scrub: 0.5,
                    }
                });

                tl.fromTo(el,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.98,
                        filter: 'blur(4px)',
                        rotationX: 5,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                        rotationX: 0,
                        duration: 1,
                        delay: delay,
                    }, 0)
                    .fromTo(el.querySelectorAll('img, h3, p'),
                        {
                            opacity: 0,
                            y: 20
                        },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            duration: 0.8
                        }, 0.2);
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [count]);
}