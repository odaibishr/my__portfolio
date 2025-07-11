import { client } from "@/sanity/lib/client";
import { SKILLS_QUERY } from "@/sanity/queries";
import { Skill } from "@/data/constant";
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import SkillCard from "./skillCard";



export async function TechSection() {
    const skills = await client.fetch<Skill[]>(SKILLS_QUERY, {});

    if (!skills || skills.length === 0) {
        return <div>No technologies found</div>;
    }

    return (
        <section className="">
            <InfiniteSlider className="py-4" direction="horizontal" reverse={false}>
                {[...skills, ...skills, ...skills].map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
                ))}
            </InfiniteSlider>
        </section>
    );
}