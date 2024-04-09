import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const mediaSlug = 'media'

export const MediaCollection: CollectionConfig = {
  slug: mediaSlug,
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [],
  hooks: {
    afterRead: [
      ({ req }) => {
        console.log('afterRead req.collection.config.slug in media:', req.collection.config.slug)
      },
    ],
  },
}
