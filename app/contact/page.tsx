'use client';
import SectionHeader from "@/components/sectionHeader";
import { useRef } from "react";
import Form from "next/form";
import MainButton from "@/components/mainButton";

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    return (
        <section ref={sectionRef} className="container md:h-[calc(100vh-3rem)] flex flex-col items-center justify-center py-20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <SectionHeader title="Get in touch" subtitle="I'm always open to discussing new projects, so feel free to reach out to me." triggerRef={sectionRef} heading="Contact with me" />

                <div className="container bg-primary/10 rounded-2xl border border-border p-10">
                    <Form action="/api/contact">
                        <div className="flex flex-col md:flex-row md:gap-10">
                            <fieldset className="fieldset w-full md:w-[50%] ">
                                <legend className="fieldset-legend text-md font-semibold text-foreground">Name</legend>
                                <input type="text" className="input w-full border border-border bg-transparent" placeholder="Name" />
                            </fieldset>
                            <fieldset className="fieldset w-full md:w-[50%]">
                                <legend className="fieldset-legend text-md font-semibold text-foreground">Email</legend>
                                <input type="email" className="input w-full border border-border bg-transparent" placeholder="Email" />
                            </fieldset>
                        </div>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-md font-semibold text-foreground">Message</legend>
                            <textarea className="textarea w-full border border-border bg-transparent" placeholder="Message"></textarea>
                        </fieldset>

                        <div className="flex justify-center mt-6">
                            <MainButton text="Send Message" href="" />
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}