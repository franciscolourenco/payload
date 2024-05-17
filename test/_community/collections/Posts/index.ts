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
      type: 'text',
      name: 'correctlyRemovedFromTheListView',
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'incorrectlyNotRemovedFromTheListView',
          admin: {
            disableListColumn: true,
            disableListFilter: true,
          },
        },
      ],
    },
  ],
  slug: postsSlug,
}
