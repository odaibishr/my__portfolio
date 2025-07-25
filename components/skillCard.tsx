import { Skill } from "@/data/constant";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function SkillCard({ skill }: { skill: Skill }) {
    const imageUrl =
        skill.image
            ? urlFor(skill.image).url()
            : "/images/placeholder.png";
    return (
        <div className="flex items-center space-x-3  bg-card px-4 py-[5px] rounded-full">
            <div className="w-[22px] h-[22px] relative flex-shrink-0">
                {/* {style = {{width: 32, height: 32, position: "relative", flexShrink: 0 }} } */}
                <Image
                    src={imageUrl}
                    alt={skill.title}
                    fill
                    className="object-contain size-5"
                    sizes="22px"

                />
            </div>
            <span className="text-sm capitalize">{skill.title}</span>
        </div>
    );
}