"use client";

import SectionHeader from "./sectionHeader";
import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpecialityCard from "./SpecialityCard";
import { SpecialityAnimation } from "./animations/specialityAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function SpecialitySection({
    titel,
    subtile,
    technologies,
}: {
    titel: string;
    subtile: string;
    technologies: any[];
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    cardsRef.current = [];

    SpecialityAnimation(cardsRef);

    return (
        <section ref={sectionRef} className="container mx-auto py-10">
            <SectionHeader
                title={titel}
                subtitle={subtile}
                triggerRef={sectionRef}
                heading="I specialise in"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                {technologies.map((technology: any, index: number) => (
                    <SpecialityCard
                        key={index}
                        name={technology.name}
                        description={technology.description}
                        image={technology.image}
                        innerRef={(el) => (cardsRef.current[index] = el)}
                    />
                ))}
            </div>
        </section>
    );
}
