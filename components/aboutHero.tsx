import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function AboutHero({ header, subHeader, image }: { header: string, subHeader: string, image: string }) {
    return (
        <section className="container mx-auto flex items-center justify-center mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-20 mt-10">
                <div className="">
                    <Image src={urlFor(image!).url()} alt={header!} width={400} height={400} className="object-cover rounded-full md:w-[500px] md:h-[500px] w-[300px] h-[300px]  shadow-xl border-2 border-border" />
                </div>
                <div className="">
                    <h2 className="text-2xl text-center md:text-left md:text-3xl max-w-[550px] font-bold text-foreground mt-6">
                        {header}
                    </h2>
                    <p className="text-muted-foreground mt-4 md:text-xl text-center md:text-left max-w-[600px] md:max-w-[800px]">
                        {subHeader}
                    </p>
                </div>
            </div>
        </section>
    );
}