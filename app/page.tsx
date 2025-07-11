import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY, FAQS_QUERY } from "@/sanity/queries";
import { Portfolio } from "@/sanity.types";
import HeroSection from "@/components/heroSection";
import { TechSection } from "@/components/techSection";
import AboutSection from "@/components/aboutSection";
import ProjecstSection from "@/components/projecstSection";
import SpecialitySection from "@/components/specialitySection";
import FaqsSection from "@/components/faqsSection";
import ContactSection from "@/components/contactSection";
import { Faq } from "@/data/constant";

export default async function Home() {



  const portfolioData = await client.fetch<Portfolio[]>(PORTFOLIO_QUERY, {});
  const faqsData = await client.fetch<Faq[]>(FAQS_QUERY, {});
  
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
      <SpecialitySection titel={portfolio.specialityTitle ?? ""} subtile={portfolio.specialitySubTitle ?? ""} technologies={portfolio.technologies as any[]}/>
      <FaqsSection portfolio={portfolio} faqs={faqsData}/>
      <ContactSection/>
    </>
  );
}
