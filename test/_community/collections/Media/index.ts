import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const mediaSlug = 'media'

export const MediaCollection: CollectionConfig = {
  slug: mediaSlug,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'text',
      name: 'test',
    },
  ],
}
