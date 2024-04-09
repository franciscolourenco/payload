import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'One',
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
          ],
        },
        {
          label: 'Two',
          fields: [
            {
              name: 'number',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
  slug: postsSlug,
}
