import { defineField, defineType } from "sanity"

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) =>
        Rule.error(
          "Description must be between 130 and 500 characters long."
        ).required(),
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Please enter a valid category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
})
