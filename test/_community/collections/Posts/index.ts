import { DefaultCollectionEdit } from '../../../../packages/payload/src/admin/components/views/collections/Edit/Default/index'
import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  admin: {
    components: {
      views: {
        Edit: {
          Default: DefaultCollectionEdit,
        },
      },
    },
  },
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
      name: 'relatedPost',
      type: 'relationship',
      relationTo: postsSlug,
    },
  ],
  slug: postsSlug,
}
