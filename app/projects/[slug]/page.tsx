import { client } from "@/sanity/lib/client";
import { PROJECTS_DETAIL_QUERY } from "@/sanity/queries";
import { Project } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MainButton from "@/components/mainButton";
import ContactSection from "@/components/contactSection";

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await client.fetch<Project>(PROJECTS_DETAIL_QUERY, { slug });

    return (
        <>
            <section className="pt-20 md:pt-28 container mx-auto">
                <Link href={`/projects`} className="flex items-center gap-2 mt-2 text-sm">
                    <ArrowLeft size={20} />
                    <p className="text-muted-foreground">Back to projects</p>
                </Link>
                <div className="flex items-center justify-center mt-4 mb-4">
                    {project?.prjectImage && (
                        <Image
                            width={1300}
                            height={300}
                            src={urlFor(project.prjectImage).url()}
                            alt="Project banner"
                            className="rounded-2xl shadow-lg"
                        />
                    )}
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <p className="text-xl md:text-2xl font-bold">{project?.title || ""}</p>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                        {project?.liveUrl && (
                            <MainButton text="View Project" href={project?.liveUrl} />
                        )}
                        {project?.githubUrl && (
                            <MainButton text="Source Code" href={project?.githubUrl} />
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    {/* <p className="mt-4 text-lg font-semibold">Technologies</p> */}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        {project?.skills?.map((skill) => (
                            <div key={skill._key} className="flex items-center gap-2 bg-accent py-1 px-4 rounded-full">
                                <p className="text-sm font-semibold">{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
                    <div>
                        <h2 className="mt-4 text-lg font-bold">About Project</h2>
                        <p className="text-muted-foreground mt-2 text-sm">{project?.description || ""}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                    <h2 className="text-lg font-bold">Role:</h2>
                    <p>{project?.role || ""}</p>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                    <h2 className="text-lg font-bold">Client:</h2>
                    <p>{project?.client || ""}</p>
                </div>

            </section>
            <ContactSection />
        </>
    );
}