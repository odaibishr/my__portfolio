import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/queries";
import { TechSection } from "@/components/techSection";
import AboutHero from "@/components/aboutHero";

export default async function About() {
    const aboutData = await client.fetch(ABOUT_QUERY);
    const about = aboutData[0];

    if (!aboutData) {
        return <div>No about data found</div>;
    }
    return (
        <div className="pt-20 md:pt-28">
            <AboutHero header={about.header} subHeader={about.subHeader} image={about.image}/>
            <TechSection/>
        </div>
    )
}