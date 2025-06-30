
import { Portfolio } from "@/sanity.types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection({ data }: {
    data: Portfolio,
}) {
    return <>
        <section className="container mx-auto flex flex-col items-center justify-center h-screen">

            <div className="">
                {/* <!-- Announcement Banner --> */}
                <div className="flex justify-center">
                    <Link href="/" className="inline-flex items-center gap-x-2 bg-popover border border-primary p-1 px-3 rounded-full transition hover:border-primary-100" >
                        {data.heroGreeting}
                    </Link>
                </div>
                {/* <!-- End Announcement Banner --> */}

                {/* <!-- Title --> */}
                <div className="text-center mt-10">
                    <h1 className="block font-bold text-foreground text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                        {data.heroHeader}
                    </h1>
                </div>
                {/* <!-- End Title --> */}

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-muted-foreground">{data.heroSubHeader}</p>
                </div>

                {/* <!-- Buttons --> */}
                <div className="mt-8 gap-3 flex justify-center">
                    <Link href="/contact" className="inline-flex rounded-full justify-center items-center gap-x-3 text-center bg-accent-foreground dark:bg-popover px-4 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-600">
                        {data.heroButtonText}
                        <div className="inline-flex items-center justify-center p-2 rounded-full bg-popover-foreground text-secondary">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </Link>
                    
                </div>

                
            </div>
        </section>

    </>
}