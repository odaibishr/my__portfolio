import { defineType, defineField } from "sanity";
import { GlobeIcon } from "lucide-react";

export const social = defineType({
    name: "social",
    title: "Social Media",
    type: "document",
    icon: GlobeIcon,
    fields: [
        defineField({
            name: "platform",
            title: "Platform",
            type: "string",
            validation: (Rule) => Rule.required().error("Platform is required."),
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required().error("Profile URL is required."),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            validation: (Rule) => Rule.required().error("Icon Image is required."),
        }),

    ],
});
