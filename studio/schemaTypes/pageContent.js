import {defineType} from 'sanity'

export default defineType({
  name: 'pageContent',
  type: 'document',
  title: 'Page Content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
    },
    {
      name: 'note',
      type: 'text',
      title: 'Note',
      rows: 4,
    },
    {
      name: 'address',
      type: 'text',
      title: 'Address',
      rows: 4,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
})
