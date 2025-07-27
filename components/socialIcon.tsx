import { Social } from "@/sanity.types";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export default function SocialIcon({ social }: { social: Social }) {
    return (
        <Link href={social.url!} className="text-foreground h-12 w-12 flex items-center justify-center group bg-card rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <DynamicIcon className="size-5 group-hover:text-primary" name={social.platform!.toLowerCase() as any} />
        </Link>
    )
}