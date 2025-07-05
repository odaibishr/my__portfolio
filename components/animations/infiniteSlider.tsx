'use client';

import { useEffect, useRef } from "react";
import { horizontalLoop } from "@/lib/horizontalLoop";
import { Skill } from "@/data/constant";
import SkillCard from "../skillCard";
export default function InfiniteSlider({ skills, isReverse }: { skills: Skill[], isReverse: boolean }) {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const items = containerRef.current.children;
        if (items.length === 0) return;

        const tl = horizontalLoop(items, {
            speed: 0.3,
            paddingRight: 10,
            repeat: -1,
            reversed: isReverse,
        });

        return () => {
            tl.kill();
        };
    }, [skills]);

    const repeatedLogos = [...skills, ...skills, ...skills, ...skills];

    return (
        <div className="relative py-4 ">

            <div className="absolute left-0 top-0  w-24 bg-linear-to-r from-background  z-10 inset-y-0" />
            <div className="absolute right-0 top-0 w-24 bg-linear-to-l from-background z-10 inset-y-0" />
            <div
                ref={containerRef}
                className="flex gap-10 items-center overflow-hidden"
            // style={{ whiteSpace: "nowrap" }}
            >
                {repeatedLogos.map((skill, i) => (
                    <SkillCard key={`skill-${i}`} skill={skill} />
                ))}
            </div>
        </div>
    );
}
