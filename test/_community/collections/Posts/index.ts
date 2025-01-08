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
      type: 'ui',
      name: 'customComponent',
      admin: {
        components: {
          Field: './collections/Posts/CustomComponent#CustomComponent',
        },
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
