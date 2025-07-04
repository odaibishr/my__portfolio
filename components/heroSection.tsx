
import { Portfolio } from "@/sanity.types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedText from "./animations/animatedText";
import HeroBanner from "./animations/heroBanner";
import HeroButton from "./heroButton";

export default function HeroSection({ data }: {
    data: Portfolio,
}) {




    return <>
        <section className="container mx-auto flex flex-col items-center justify-center h-screen">

            <div className="">
                {/* <!-- Announcement Banner --> */}
                <HeroBanner heroGreeting={data.heroGreeting ?? ""} />
                {/* <!-- End Announcement Banner --> */}

                {/* <!-- Title --> */}
                <div className="text-center mt-10">
                    <AnimatedText type="words" text={data.heroHeader ?? ""} stagger={0.05} duration={1} from={-50} className="subtitle block font-bold text-foreground text-4xl md:text-5xl lg:text-6xl" />
                </div>
                {/* <!-- End Title --> */}

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <AnimatedText type="chars" text={data.heroSubHeader ?? ""} duration={0.001} from={2} to={6} className="text-lg text-muted-foreground" />
                </div>

                {/* <!-- Buttons --> */}
                
                <HeroButton text={data.heroButtonText ?? "View Projects"} herf="/" />
                {/* <!-- End Buttons --> */}


            </div>
        </section>

    </>
}