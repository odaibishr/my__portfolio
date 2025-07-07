'use client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Project } from '@/sanity.types';



export default function ProjectCard({ project, innerRef }: { project: Project; innerRef?: (el: HTMLDivElement | null) => void }) {
    return (
        <div
            ref={innerRef}
            className="group relative rounded-3xl transition-all duration-500"
        >
            <div className="relative h-80 group">
                {project.prjectImage ? (
                    <Image
                        src={urlFor(project.prjectImage).url()}
                        alt={project.title ?? ""}
                        fill
                        priority
                        className="object-cover rounded-3xl w-full h-80 transition-transform duration-700 group-hover:scale-101 group-hover:shadow-3xl"
                        sizes='width: 80, fill: 100'
                    />
                ) : (
                    <div className="w-full h-80 flex items-center justify-center bg-muted text-muted-foreground text-sm">
                        No Image    
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-101 rounded-3xl" />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title ?? ""}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description ?? ""}
                </p>
            </div>
        </div>
    );
}
