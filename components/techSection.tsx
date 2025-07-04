import { client } from "@/sanity/lib/client";
import { SKILLS_QUERY } from "@/sanity/queries";
import InfiniteSlider from "./animations/infiniteSlider";
import { Skill } from "@/data/constant";




export async function TechSection() {
    const skills = await client.fetch<Skill[]>(SKILLS_QUERY, {});

    if (!skills || skills.length === 0) {
        return <div>No technologies found</div>;
    }

    return (
        <section className="">
            <InfiniteSlider skills={skills} isReverse={true} />
            <InfiniteSlider skills={skills} isReverse={false} />
        </section>
    );
}