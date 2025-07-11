"use client";
import { Certificate } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { CERTIFICATES_QUERY } from "@/sanity/queries";
import SectionHeader from "./sectionHeader";
import { useRef, useEffect, useState } from "react";
import { div } from "motion/react-client";

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

    const newLocal = "_blank";
    return (
        <section className="container mx-auto">
            <SectionHeader title={header} subtitle={subHeader} triggerRef={useRef<HTMLDivElement>(null)} heading="certificates" />
            <div className="mt-10 overflow-hidden gap-5">
                {certificates.map((certificate: Certificate, index: number) => (
                    <div key={index} className="py-5 px-4 rounded-2xl border border-border shadow-lg">
                        <h2 className="text-xl font-bold text-foreground">{certificate.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}