import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      access: {
        create: () => true,
        update: () => false,
      },
      relationTo: mediaSlug,
      type: 'upload',
    },
    {
      type: 'collapsible',
      label: 'Collapsible',
      fields: [
        {
          type: 'collapsible',
          label: 'Collapsible',
          fields: [],
        },
        {
          type: 'tabs',
          label: 'Tabs',
          tabs: [
            {
              label: 'Tab 1',
              fields: [],
            },
          ],
        },
        {
          type: 'group',
          name: 'group',
          label: 'Group',
          fields: [],
        },
      ],
    },
    {
      type: 'array',
      name: 'array',
      fields: [
        {
          type: 'collapsible',
          label: 'Collapsible',
          fields: [],
        },
        {
          type: 'tabs',
          label: 'Tabs',
          tabs: [
            {
              label: 'Tab 1',
              fields: [],
            },
          ],
        },
        {
          type: 'group',
          name: 'group',
          label: 'Group',
          fields: [],
        },
      ],
    },
  ],
  slug: postsSlug,
}
