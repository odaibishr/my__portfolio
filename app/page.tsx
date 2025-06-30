import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/queries";
import { Portfolio } from "@/sanity.types";
import HeroSection from "@/components/heroSection";

export default async function Home() {

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
    
    </>
  );
}
