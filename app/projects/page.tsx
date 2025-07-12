import ProjectsHero from "@/components/projectsHero";
import { Project } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/queries";

export default async function Projects() {
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY);
    console.log(projects)
    
    return (
        <div className="pt-20 md:pt-28">
            <ProjectsHero projects={projects} />
        </div>
    );
}