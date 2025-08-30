import { client } from "@/sanity/lib/client";
import { PROJECTS_DETAIL_QUERY } from "@/sanity/queries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/contact/contactSection";
import ProjectBanner from "@/components/project-details/ProjectBanner";
import ProjectHeader from "@/components/project-details/ProjectHeader";
import TechBadges from "@/components/project-details/TechBadges";
import ProjectMeta from "@/components/project-details/ProjectMeta";
import TechList from "@/components/project-details/TechList";

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await client.fetch<any>(PROJECTS_DETAIL_QUERY, { slug });

    return (
        <>
            <section className="pt-20 md:pt-28 container mx-auto">
                <Link href={`/projects`} className="flex items-center gap-2 mt-2 text-sm">
                    <ArrowLeft size={20} />
                    <p className="text-muted-foreground">Back to projects</p>
                </Link>
                <ProjectBanner imageUrl={project?.prjectImage} />
                <ProjectHeader title={project?.title} liveUrl={project?.liveUrl} githubUrl={project?.githubUrl} />
                <TechBadges techs={project?.skills} />
                <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
                    <div>
                        <h2 className="mt-4 text-lg font-bold">About Project</h2>
                        <p className="text-muted-foreground mt-2">{project?.description || ""}</p>
                    </div>
                </div>

                {/* Role and Client */}
                <ProjectMeta role={project?.role} client={project?.client} />
                

                {/* Technologies */}
                <TechList skills={project?.skills} />

            </section>
            <ContactSection />
        </>
    );
}