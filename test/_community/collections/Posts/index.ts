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
      name: 'items',
      type: 'array',
      fields: [
        {
          label: 'Collapsible',
          type: 'collapsible',
          fields: [
            {
              name: 'nestedText',
              type: 'text',
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
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
  ],
  slug: postsSlug,
}
