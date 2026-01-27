import {defineType} from 'sanity'

const richBlock = {
  type: 'block',
  styles: [],
  lists: [],
  marks: {
    decorators: [
      {
        title: 'Small Caps',
        value: 'smallcaps',
        component: ({children}) => (<span style={{fontVariant: 'small-caps', color: 'red'}}>{children}</span>)
      },
    ],
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
}

export default defineType({
  name: 'pageContent',
  type: 'document',
  title: 'Page Content',
  fields: [
    {
      name: 'meta',
      title: 'Meta',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Recommended size: 1200x630px (for social media sharing)',
        },
      ],
    },
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
        richBlock
      ],
    },
    {
      name: 'note',
      type: 'array',
      title: 'Note',
      of: [
        richBlock
      ]
    },
    {
      name: 'address',
      type: 'array',
      title: 'Address',
      of: [
        richBlock
      ]
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
