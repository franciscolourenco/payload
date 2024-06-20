import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  defaultSort: 'title',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'title',
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
      name: 'relatedPosts',
      type: 'relationship',
      // Polymorphic relationship required to reproduce the issue
      relationTo: ['posts'],
    },
  ],
  slug: postsSlug,
  versions: {
    // Drafts required to reproduce the issue
    drafts: true,
  },
}
