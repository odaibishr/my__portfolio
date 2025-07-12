import { Certificate } from "@/sanity.types";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
    return (
        <Link
            href={certificate.certificateLink!}
            target="_blank"
            className="relative flex flex-1 flex-col py-6 px-5 group rounded-2xl border border-border bg-background transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
        >
            <div className="p-5 bg-primary text-background flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-accent group-hover:scale-110">
                <LinkIcon
                    size={22}
                    className="transition-all duration-300 transform group-hover:rotate-45 group-hover:scale-110"
                />
            </div>

            <h2 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {certificate.title}
            </h2>

            <p className="text-muted-foreground line-clamp-2 mt-2 text-sm transition-opacity duration-300 group-hover:opacity-90">
                {certificate.description}
            </p>

            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/20 pointer-events-none transition-all duration-300" />
        </Link>
    );
}