'use client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Project } from '@/sanity.types';
import Link from 'next/link';



export default function ProjectCard({ project, innerRef }: { project: Project; innerRef?: (el: HTMLAnchorElement | null) => void }) {
    return (
        <Link
            ref={innerRef}
            href={`/projects/${project.slug?.current}`}
            className="group relative rounded-3xl transition-all duration-500"
        >
            <div className="relative h-80 rounded-3xl border border-border">
                {project.prjectImage ? (
                    <Image
                        src={urlFor(project.prjectImage).url()}
                        alt={project.title ?? ""}
                        fill
                        priority
                        className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-100 group-hover:shadow-3xl"
                    />
                ) : (
                    <div className="w-full h-80 flex items-center justify-center bg-muted text-muted-foreground text-sm">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100 rounded-3xl" />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title ?? ""}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description ?? ""}
                </p>
            </div>
        </Link>
    );
}
