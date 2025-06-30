import { defineType, defineField } from "sanity";
import { DocumentPdfIcon } from "@sanity/icons";

export const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title of Certificate",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "certificateImage",
      title: "Certificate Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "certificateLink",
      title: "Certificate Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Issue Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule) => Rule.required().error("Issue date is required."),
    }),
  ],
});
