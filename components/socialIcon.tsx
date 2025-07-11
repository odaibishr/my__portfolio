import { Social } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function SocialIcon({ social }: { social: Social }) {
    return (
        <a href={social.url} >
            <Image
                src={urlFor(social.icon!).url()}
                alt={social.platform!}
                width={24}
                height={24}
                className="transform transition duration-300 ease-in-out hover:scale-110 object-contain" />
        </a>
    )
}