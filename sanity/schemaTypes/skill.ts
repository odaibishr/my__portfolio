import { CodeIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const skill = defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    icon: CodeIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});