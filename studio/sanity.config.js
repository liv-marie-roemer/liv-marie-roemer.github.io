import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import DeployButton from './components/DeployButton'

export default defineConfig({
  name: 'default',
  title: 'liv-marie-roemer',

  projectId: 'whg9r0qe',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Page Content')
              .id('pageContent')
              .child(
                S.document()
                  .schemaType('pageContent')
                  .documentId('pageContent')
              ),
            S.divider(),
            S.listItem()
              .title('Deploy')
              .child(S.component(DeployButton).title('Deploy to GitHub Pages')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
