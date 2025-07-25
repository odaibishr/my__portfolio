import { ProjectsIcon } from '@sanity/icons';
import { defineType, defineField } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    icon: ProjectsIcon,
    description: "Projects that I have worked on, including Flutter and Next.js applications.",
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
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'prjectImage',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        }),
        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url",
        }),
        defineField({
            name: "liveUrl",
            title: "Live URL",
            type: "url",
        }),
        defineField({
            name: "isFeatured",
            title: "Is Featured",
            type: "boolean",
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: new Date().toISOString(),
        }),

    ]
});