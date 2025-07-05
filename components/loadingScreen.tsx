'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current || !logoRef.current || !progressRef.current) return;

        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            onComplete: () => onComplete?.(),
        });

        tl.addLabel('enter')
            .fromTo(
                containerRef.current,
                { y: '-100%' },
                { y: '0%', duration: 1.4, ease: 'power4.out' },
                'enter'
            )
            .fromTo(
                logoRef.current,
                { autoAlpha: 0, y: 40, scale: 0.9 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 1.2 },
                'enter+=0.3'
            )
            .fromTo(
                progressRef.current,
                { width: '0%' },
                { width: '100%', duration: 2, ease: 'power2.inOut' },
                'enter+=0.5'
            )
            // .fromTo(
            //     pulseRef.current,
            //     { scale: 0.95, opacity: 0 },
            //     {
            //         scale: 1.2,
            //         opacity: 0.15,
            //         duration: 1.5,
            //         repeat: -1,
            //         yoyo: true,
            //         ease: 'sine.inOut',
            //     },
            //     'enter+=1'
            // )
            
        const containerHeight = window.innerHeight;
        console.log('containerHeight:', containerHeight);

        tl.fromTo(
            containerRef.current,
            { y: -containerHeight },
            { y: 0, duration: 1.4, ease: 'power4.out', immediateRender: false },
            'enter'
        )

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            style={{ transform: 'translateY(-100%)', willChange: 'transform' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground dark:bg-background text-white backdrop-blur-lg overflow-hidden"

        >
            {/* pulse animation */}
            {/* <div
                ref={pulseRef}
                className="absolute w-40 h-40 rounded-full bg-accent dark:bg-white/20 blur-2xl opacity-20"
            ></div> */}

            <div
                ref={logoRef}
                className="relative z-10 flex items-center justify-center mb-6 drop-shadow-2xl"
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={90}
                    height={90}
                    priority
                    className="rounded-full"
                />
            </div>

            <div className="relative z-10 w-3/4 h-2 bg-white/20 rounded-full overflow-hidden dark:bg-white/30 shadow-inner backdrop-blur-sm">
                <div
                    ref={progressRef}
                    className="h-full bg-accent dark:bg-white/80 rounded-full transition-all duration-1000 ease-in-out"
                ></div>
            </div>
        </div>
    );
}
