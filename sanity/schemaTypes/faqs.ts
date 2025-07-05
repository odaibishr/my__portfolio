import { FileQuestionMarkIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const faqs = defineType({
    name: 'faqs',
    title: 'FAQs',
    type: 'document',
    icon: FileQuestionMarkIcon,
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
        }),
    ],
})