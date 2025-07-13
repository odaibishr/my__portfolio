
import { client } from "@/sanity/lib/client";
import { PROJECTS_DETAIL_QUERY } from "@/sanity/queries";
import { Project } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MainButton from "@/components/mainButton";


export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await client.fetch<Project>(PROJECTS_DETAIL_QUERY, { slug });
    return (
        <section className="pt-20 md:pt-28 container mx-auto">
            <Link href={`/projects`} className="flex items-center gap-2">
                <ArrowLeft />
                <p className="text-muted-foreground">Back to projects</p>
            </Link>
            <div className="mt-4 mb-4">
                <Image
                    src={urlFor(project.prjectImage!).url()}
                    alt={project?.title!}
                    width={1500}
                    height={100}
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <p className="text-2xl font-bold">{project?.title!}</p>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <MainButton text="View Project" href={`/projects/${project.slug?.current}`} />
                    <MainButton text="Source Code" href={`/projects/${project.slug?.current}`} />
                </div>
            </div>
            <h2 className="mt-4 text-xl font-bold">Description</h2>
            <p className="text-muted-foreground mt-2 md:w-[700px]">{project?.description!}</p>
            <div>
                <p className="mt-4 text-xl font-bold">Technologies</p>
                <div className="flex items-center gap-4 mt-2">

                </div>
            </div>
        </section>
    );
}