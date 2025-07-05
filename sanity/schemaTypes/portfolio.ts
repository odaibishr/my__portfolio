import { defineType, defineField } from "sanity";
import { ListIcon } from "lucide-react";

export const portfolio = defineType({
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    icon: ListIcon,
    fields: [
        defineField({
            name: "heroGreeting",
            title: "Hero Greeting",
            type: "string",
        }),

        defineField({
            name: "heroHeader",
            title: "Hero Header",
            type: "string",
        }),

        defineField({
            name: "heroSubHeader",
            title: "Hero Subheader",
            type: "string",
        }),

        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
        }),

        defineField({
            name: "heroButtonText",
            title: "Hero Button Text",
            type: "string",
        }),

        defineField({
            name: "heroButtonLink",
            title: "Hero Button Link",
            type: "url",
        }),

        defineField({
            name: "aboutTitle",
            title: "About Title",
            type: "string",
        }),

        defineField({
            name: "aboutSubTitle",
            title: "About Sub Title",
            type: "text",
        }),

        defineField({
            name: "workTitle",
            title: "Work Title",
            type: "string",
        }),

        defineField({
            name: "workSubTitle",
            title: "Work Sub Title",
            type: "text",
        }),

        defineField({
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{ type: "reference", to: { type: "project" } }],
        }),

        defineField({
            name: "specialityTitle",
            title: "Speciality Title",
            type: "string",
        }),
        defineField({
            name: "specialitySubTitle",
            title: "Speciality Sub Title",
            type: "text",
        }),

        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "technology" } }],
        }),

        defineField({
            name: 'faqsHeading',
            title: 'FAQs Heading',
            type: 'string',
        }),

        defineField({
            name: "faqsTitle",
            title: "FAQs Title",
            type: "string",
        }),

        defineField({
            name: "faqsSubTitle",
            title: "FAQs Sub Title",
            type: "string",
        }),

        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [{ type: "reference", to: { type: "faqs" } }],
        }),

        defineField({
            name: "contactTitle",
            title: "Contact Title",
            type: "string",
        }),

        defineField({
            name: "contactSubTitle",
            title: "Contact Sub Title",
            type: "text",
        }),

        defineField({
            name: "contactEmail",
            title: "Contact Email",
            type: "string",
        }),

        defineField({
            name: "contactPhone",
            title: "Contact Phone",
            type: "string",
        }),

        defineField({
            name: "contactAddress",
            title: "Contact Address",
            type: "string",
        }),



        defineField({
            name: "footerText",
            title: "Footer Text",
            type: "text",
        }),

        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [{ type: "reference", to: { type: "social" } }],
        }),
    ],
});
