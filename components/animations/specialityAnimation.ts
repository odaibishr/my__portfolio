import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SpecialityAnimation(cardsRef: React.RefObject<(HTMLDivElement | null)[]>) {
    useEffect(() => {
        cardsRef.current?.forEach((card) => {
            if (!card) return;

            const image = card.querySelector(".card-image");
            const title = card.querySelector(".card-title");
            const desc = card.querySelector(".card-desc");

            gsap.set([image, title, desc], { autoAlpha: 0 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "20% 85%",
                    end: "center center",
                    // toggleActions: "play none none none",
                    scrub: true,
                    anticipatePin: 1,
                },
            })
                .fromTo(
                    card,
                    { clipPath: "inset(100% 0% 0% 0%)", scale: 0.94, autoAlpha: 0 },
                    { clipPath: "inset(0% 0% 0% 0%)", scale: 1, autoAlpha: 1, duration: 0.7, ease: "power3.out" }
                )
                .to(image, { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.4")
                .to(title, { autoAlpha: 1, x: 0, duration: 0.4, ease: "power3.out" }, "-=0.3")
                .to(desc, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }, "-=0.3");
        });
    }, [cardsRef]);
}
