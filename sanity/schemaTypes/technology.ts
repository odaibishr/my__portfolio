import { CodeIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const technology = defineType({
    name: 'technology',
    title: 'Technology',
    icon: CodeIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'url',
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

    ]
});