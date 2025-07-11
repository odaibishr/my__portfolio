"use client";

import { useRef } from "react";
import MainButton from "./mainButton";
import ContactAnimation from "./animations/contactAnimation";

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    ContactAnimation({ sectionRef, containerRef });

    return (
        <section
            ref={sectionRef}
            className="container mx-auto py-8 px-4"
        >
            <div ref={containerRef} className=" flex flex-col items-center justify-center bg-primary/10 rounded-2xl border border-border p-10">
                <div className="py-2 px-6 bg-primary/20 rounded-full contact-tag">
                    <p className="text-foreground">Get in touch</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 contact-title">
                    Let&apos;s connect
                </h2>
                <p className="text-muted-foreground mt-4 md:text-xl text-center max-w-[600px] contact-subtext">
                    I'm always open to discussing new projects, <br /> so feel free to reach out to me.
                </p>
                <div className="flex items-center justify-center gap-4 mt-6 contact-button">
                    <MainButton text="Contact me" href="/contact" />
                </div>
            </div>
        </section>
    );
}
