import Image from "next/image"
import { urlFor } from "@/sanity/lib/image";


const ProjectBanner = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div className="flex items-start flex-col md:flex-row justify-center gap-5 mt-4 mb-4 ">
            <div className="border-2 border-border rounded-2xl">
                {imageUrl && (
                    <Image
                        width={1300}
                        height={300}
                        src={urlFor(imageUrl).url()}
                        alt="Project banner"
                        className="rounded-2xl"
                    />
                )}
            </div>

        </div>
    )
}

export default ProjectBanner