// 'use client';

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

// gsap.registerPlugin(ScrollTrigger);

// export const flavorlists = [
//     { name: "Mango", color: "mango", rotation: "rotate-3" },
//     { name: "Strawberry", color: "strawberry", rotation: "-rotate-3" },
//     { name: "Lime", color: "lime", rotation: "rotate-1" },
//     // أضف المزيد حسب الحاجة
// ];
  

// const ProjectsSlider = () => {
//     const sliderRef = useRef<HTMLDivElement>(null);
//     const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

//     useGSAP(() => {
//         if (!sliderRef.current || isTablet) return;

//         const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

//         // الحركة الرئيسية للتمرير الأفقي
//         gsap.to(sliderRef.current, {
//             x: `-${scrollAmount + 1300}px`,
//             ease: "power1.inOut",
//             scrollTrigger: {
//                 trigger: sliderRef.current,
//                 start: "top top",
//                 end: `+=${scrollAmount + 1300}px`,
//                 scrub: true,
//                 pin: true,
//             },
//         });

//         // تأثير التكبير والشفافية
//         gsap.utils.toArray(".flavor-card").forEach((card) => {
//             gsap.fromTo(
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "left center",
//                         end: "right center",
//                         scrub: true,
//                     },
//                 }
//             );
//         });

//         // barallax على العناصر العائمة
//         gsap.utils.toArray(".elements").forEach((el) => {
//             gsap.to(el, {
//                 y: -50,
//                 scrollTrigger: {
//                     trigger: el,
//                     scrub: true,
//                 },
//             });
//         });

//         // شريط التقدم
//         gsap.to(".progress-bar", {
//             width: "100%",
//             scrollTrigger: {
//                 trigger: sliderRef.current,
//                 start: "top top",
//                 end: "bottom bottom",
//                 scrub: true,
//             },
//         });
//     });

//     return (
//         <>
//             {/* شريط التقدم */}
//             <div className="fixed top-0 left-0 h-1 bg-yellow-400 w-0 z-50 progress-bar"></div>

//             {/* الغلاف العام */}
//             <div ref={sliderRef} className="slider-wrapper flavor-section flex space-x-10 px-10">
//                 {flavorlists.map((flavor) => (
//                     <div
//                         key={flavor.name}
//                         className={`flavor-card relative z-30 lg:w-[50vw] w-80 lg:h-[80vh] md:w-[90vw] md:h-[40vh] h-80 flex-none ${flavor.rotation} transition-transform duration-300`}
//                     >
//                         {/* الخلفية */}
//                         <img
//                             src={`/images/${flavor.color}-bg.svg`}
//                             alt=""
//                             className="absolute bottom-0 w-full h-full object-contain pointer-events-none"
//                         />

//                         {/* المشروب */}
//                         <img
//                             src={`/images/${flavor.color}-drink.webp`}
//                             alt=""
//                             className="drinks relative mx-auto z-10 max-h-[60%]"
//                         />

//                         {/* العناصر العائمة */}
//                         <img
//                             src={`/images/${flavor.color}-elements.webp`}
//                             alt=""
//                             className="elements absolute z-20 left-1/2 top-10 -translate-x-1/2 w-32 h-32 object-contain pointer-events-none"
//                         />

//                         {/* العنوان */}
//                         <h1 className="text-white text-4xl text-center mt-4 font-bold drop-shadow-lg">
//                             {flavor.name}
//                         </h1>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default ProjectsSlider;
