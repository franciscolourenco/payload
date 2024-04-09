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
  ],
  slug: postsSlug,
  hooks: {
    afterRead: [
      async ({ req }) => {
        console.log('afterRead req.collection.config.slug in posts:', req.collection.config.slug)

        await req.payload.find({
          collection: mediaSlug,
          req,
        })
      },
    ],
  },
}
