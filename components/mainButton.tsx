'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MainButton({ text, href }: { text: string; href: string }) {
    const btnRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const el = btnRef.current;

        if (!el) return;

        const handleEnter = () => {
            gsap.to(el, {
                scale: 1.08,
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleLeave = () => {
            gsap.to(el, {
                scale: 1,
                backgroundColor: '',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mouseenter', handleEnter);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <Link
            href={href}
            ref={btnRef}
            className="inline-flex rounded-full justify-center items-center gap-x-3 text-center bg-accent-foreground dark:bg-popover px-5 py-2.5 text-sm text-white font-semibold shadow-md"
        >
            {text}
        </Link>
    );
}
