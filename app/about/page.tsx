import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY, FAQS_QUERY } from "@/sanity/queries";
import { TechSection } from "@/components/techSection";
import AboutHero from "@/components/aboutHero";
import CertificatesSection from "@/components/certificatesSection";
import FaqsSection from "@/components/faqsSection";
import ContactSection from "@/components/contact/contactSection";

export default async function About() {
    const aboutData = await client.fetch(ABOUT_QUERY);
    const about = aboutData[0];
    const faqsData = await client.fetch(FAQS_QUERY);

    if (!aboutData) {
        return <div>No about data found</div>;
    }
    return (
        <div className="pt-20 md:pt-28">
            <AboutHero header={about.header} subHeader={about.subHeader} image={about.image} resumeLink={about.resumeLink} />
            <TechSection />
            <CertificatesSection header={about.certificateTitle} subHeader={about.certificateSubtitle} />
            <FaqsSection heading={about.faqsHeading ?? ""} title={about.faqsTitle ?? ""} subtitle={about.faqsSubTitle ?? ""} faqs={faqsData} />
            <ContactSection />
        </div>
    )
}