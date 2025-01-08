import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'updatedAt',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
