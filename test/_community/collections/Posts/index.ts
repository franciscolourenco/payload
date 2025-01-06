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
      name: 'conditionFunctionReceivedDocumentId',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => typeof data.id === 'string',
        readOnly: true,
      },
    },
    {
      name: 'titleChanged',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.title !== 'example post',
        readOnly: true,
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
