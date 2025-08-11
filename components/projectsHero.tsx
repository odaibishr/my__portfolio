'use client';
import { Project } from "@/sanity.types";
import SectionHeader from "./sectionHeader";
import ProjectCard from "./projectCard";
import { useRef } from "react";
import ProjectsAnimation from "./animations/projectsAnimation";
import ContactSection from "./contact/contactSection";

export default function ProjectsHero({ projects }: { projects: Project[] }) {
    const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    ProjectsAnimation(cardsRef, projects.length);

    return (
        <section className="container">
            <SectionHeader title="All Of My Projects" subtitle="A selection of projects demonstrating my skills and dedication to delivering effective solutions." triggerRef={useRef<HTMLDivElement>(null)} heading="My Works" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 ">
                {projects.map((project: Project, index: number) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        innerRef={(el) => (cardsRef.current[index] = el)}
                    />

                ))}
            </div>
            <ContactSection />
        </section>
    );
}