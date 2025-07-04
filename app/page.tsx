import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/queries";
import { Portfolio } from "@/sanity.types";
import HeroSection from "@/components/heroSection";
import { TechSection } from "@/components/techSection";
import AboutSection from "@/components/aboutSection";
import AnimatedClients from "@/components/projecstSection";
import ProjecstSection from "@/components/projecstSection";

export default async function Home() {



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
      <AboutSection title={portfolio.aboutTitle ?? ""} subtitle={portfolio.aboutSubTitle?? ""} />
      <ProjecstSection portfolio={portfolio} />
    </>
  );
}
