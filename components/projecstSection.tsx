'use client';
import { Portfolio } from '@/sanity.types';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { urlFor } from '@/sanity/lib/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './sectionHeader';
import Link from 'next/link';
import MainButton from './mainButton';
import ProjectCard from './projectCard';
import ProjectAnimatioin from './animations/projectsAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ portfolio }: { portfolio: Portfolio }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
    const projects = portfolio.projects as any[];

    // GSAP animation for the projects
    ProjectAnimatioin(projectsRef, projects.length);

    return (
        <section ref={sectionRef} className="container mx-auto px-4 mb-20">
            <SectionHeader
                title={portfolio.workTitle ?? ''}
                subtitle={portfolio.workSubTitle ?? ''}
                triggerRef={sectionRef}
                heading="my works"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                {projects.map((project: any, index: number) => (
                    <ProjectCard key={project._id} project={project} innerRef={(el) => (projectsRef.current[index] = el)} />
                ))}
            </div>

            <div className="text-center">
                <MainButton text="View All Works" href="/studio" />
            </div>

        </section>
    );
}
