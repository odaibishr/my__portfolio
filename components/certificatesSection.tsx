"use client";
import { Certificate } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { CERTIFICATES_QUERY } from "@/sanity/queries";
import SectionHeader from "./sectionHeader";
import { useRef, useEffect, useState } from "react";

export default function CertificatesSection({ header, subHeader }: { header: string, subHeader: string }) {
    const [certificates, setCertificates] = useState<Certificate[]>([]);

    useEffect(() => {
        console.log(header, subHeader);
        const fetchDataAsync = async () => {
            const certificates = await client.fetch(CERTIFICATES_QUERY);
            setCertificates(certificates);
        };
        fetchDataAsync();
    }, []);

    return (
        <section className="container mx-auto">
            <SectionHeader title={header} subtitle={subHeader} triggerRef={useRef<HTMLDivElement>(null)} heading="certificates" />
            <div className="flex mt-10 overflow-hidden gap-5">
                {certificates.map((certificate: Certificate, index: number) => (
                    <div key={index} className="flex-1 py-5 px-4 rounded-2xl border border-border shadow-lg">
                        <h2 className="text-xl font-bold text-foreground">{certificate.title}</h2>
                        <p className="text-muted-foreground line-clamp-2 mt-2 text-sm md:w-[400px] fade-item">
                            {certificate.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}