import { Social } from "@/sanity.types";
import { client } from "@/sanity/lib/client"
import { SOCIAL_QUERY } from "@/sanity/queries"
import SocialIcon from "../socialIcon";

export default async function Footer() {
    const socailLinks = await client.fetch<Social[]>(SOCIAL_QUERY);
    return (
        <footer className="flex flex-col md:flex-row container justify-center md:justify-between items-center pt-5 pb-24 md:pb-3 gap-4">
            <p className="text-muted-foreground order-1 md:order-1">© {new Date().getFullYear()} Odai Beshr. All rights reserved.</p>
            <div className="flex items-center gap-4 order-0 md:order-2">
                {socailLinks.map((link: Social) => (
                    <SocialIcon key={link._id} social={link} />
                ))}
            </div>
        </footer>
    )
}