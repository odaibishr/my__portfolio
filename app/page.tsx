import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/queries";
import { Portfolio } from "@/sanity.types";
import HeroSection from "@/components/heroSection";
import { TechSection } from "@/components/techSection";

export default async function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "GSAP",
    "Redux",
    "Node.js"
  ];

  // Fetch data from Sanity
  const portfolioData = await client.fetch<Portfolio[]>(PORTFOLIO_QUERY, {});
  const portfolio = portfolioData[0];
  if (!portfolio) {
    return <div>No portfolio data found</div>;
  }

  return (
    <>
      <HeroSection
        data={portfolio}
      />
      <TechSection />
      {/* <SkillsSlider skills={skills} /> */}

    </>
  );
}
