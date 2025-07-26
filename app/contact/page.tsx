'use client';
import SectionHeader from "@/components/sectionHeader";
import { useRef } from "react";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="container md:h-[calc(100vh-3rem)] flex flex-col items-center justify-center py-20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <SectionHeader title="Get in touch" subtitle="I'm always open to discussing new projects, so feel free to reach out to me." triggerRef={sectionRef} heading="Contact with me" />

                <div className="container bg-card rounded-2xl border border-border p-10">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}