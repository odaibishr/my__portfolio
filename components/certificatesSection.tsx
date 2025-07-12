"use client";
import { Certificate } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { CERTIFICATES_QUERY } from "@/sanity/queries";
import SectionHeader from "./sectionHeader";
import { useRef, useEffect, useState } from "react";
import CertificateCard from "./certificateCard";

export default function CertificatesSection({ header, subHeader }: { header: string, subHeader: string }) {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(header, subHeader);
        const fetchDataAsync = async () => {
            const certificates = await client.fetch(CERTIFICATES_QUERY);
            setCertificates(certificates);
        };

        fetchDataAsync();
    }, []);

    return (
        <section className="container mx-auto py-16 md:py-10">
            <SectionHeader title={header} subtitle={subHeader} triggerRef={sectionRef} heading="certificates" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 md:gap-15">
                {certificates.map((certificate: Certificate, index: number) => (
                    <CertificateCard key={index} certificate={certificate} />
                ))}
            </div>
            
        </section>

    );
}