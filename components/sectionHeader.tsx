"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Asterisk } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type sectionHeader = {
    title: string;
    subtitle: string;
    triggerRef?: React.RefObject<HTMLDivElement | null> | null;
    heading: string,
};

export default function SectionHeader({ title, subtitle, triggerRef, heading }: sectionHeader) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef?.current || undefined,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.from(triggerRef?.current || [], {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
        })
            .from(
                triggerRef?.current ? triggerRef.current.querySelectorAll('.fade-item') : [],
                {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.5'
            );
    }, []);

    return (
        <div>
            <div className="flex gap-2 uppercase items-center text-primary fade-item mt-4 md:mt-8 text-sm md:text-lg font-bold text-center">
                <Asterisk className='text-primary' size={30} />
                <span className="text-lg md:text-xl">{heading}</span>
            </div>
            <h1 className="font-bold text-2xl md:text-4xl mt-2 fade-item">
                {title}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm md:w-[400px] fade-item">
                {subtitle}
            </p>
        </div>
    );
}
