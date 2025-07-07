import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type SpecialityCardProps = {
    name: string;
    description: string;
    image: string;
    innerRef?: (el: HTMLDivElement | null) => void;
}

export default function SpecialityCard({ name, description, image, innerRef }: SpecialityCardProps) {
    return (
        <div
            ref={innerRef}
            className="group relative w-full bg-card border border-border rounded-3xl p-6  overflow-hidden"
            style={{
                transform: "scale(0.94)",
                willChange: "transform, opacity",
            }}
        >
            <div className="card-image flex items-center justify-center w-[60px] h-[60px] bg-muted rounded-xl mb-4">
                <Image
                    src={urlFor(image).url()}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <h3 className="card-title text-2xl font-bold text-card-foreground translate-x-[-10px]">
                {name}
            </h3>
            <p className="card-desc mt-2 text-muted-foreground leading-relaxed translate-y-3">
                {description}
            </p>
        </div>
    )
}