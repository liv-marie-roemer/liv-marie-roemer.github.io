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
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'linkType',
                    type: 'string',
                    title: 'Link Type',
                    options: {
                      list: [
                        {title: 'Link', value: 'link'},
                        {title: 'Email', value: 'email'},
                        {title: 'Phone', value: 'phone'},
                      ],
                    },
                    initialValue: 'link',
                  },
                  {
                    name: 'link',
                    type: 'string',
                    title: 'Link',
                  },
                ],
              },
              {
                name: 'download',
                type: 'object',
                title: 'Download',
                fields: [
                  {
                    name: 'file',
                    type: 'file',
                    title: 'File',
                  },
                ],
              },
            ],
          },
        },
      ],
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
