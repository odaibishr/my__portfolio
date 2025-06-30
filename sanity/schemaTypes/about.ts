import { UserIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Me",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      validation: (Rule) => Rule.required().error("Header is required."),
    }),

    defineField({
      name: "subHeader",
      title: "Subheader",
      type: "string",
      validation: (Rule) => Rule.required().error("Sub header is required."),
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "resumeLink",
      title: "Resume Link",
      type: "url",
      validation: (Rule) => Rule.required().error("Resume link is required."),
    }),

    defineField({
      name: "certificateTitle",
      title: "Certificate Title",
      type: "string",
    }),

    defineField({
      name: "certificateSubtitle",
      title: "Certificate Subtitle",
      type: "string",
    }),

    defineField({
      name: "certificateList",
      title: "Certificate List",
      type: "array",
      of: [{ type: "reference", to: { type: "certificate" } }],
    }),

    defineField({
      name: "available",
      title: "Available for work",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "contactMeText",
      title: "Contact me text",
      type: "string",
    }),
  ],
});
