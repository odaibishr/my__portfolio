import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/queries";
import { Portfolio } from "@/sanity.types";
import HeroSection from "@/components/heroSection";
import { TechSection } from "@/components/techSection";
import AboutSection from "@/components/aboutSection";
import ProjecstSection from "@/components/projecstSection";
import SpecialitySection from "@/components/specialitySection";
import ContactSection from "@/components/contactSection";

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
      <AboutSection title={portfolio.aboutTitle ?? ""} subtitle={portfolio.aboutSubTitle ?? ""} />
      <ProjecstSection portfolio={portfolio} />
      <SpecialitySection titel={portfolio.specialityTitle ?? ""} subtile={portfolio.specialitySubTitle ?? ""} technologies={portfolio.technologies as any[]} />
      <ContactSection />
    </>
  );
}
