import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import { menuSlug } from '../../globals/Menu'

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
    beforeChange: [
      ({ req, data }) => {
        req.payload.findGlobal({
          slug: menuSlug,
          // example: passing req into findGlobal sets req.collection to undefined causing
          // the collection create operation to throw "Cannot read properties of null (reading 'config')"
          req,
        })
        return data
      },
    ],
  },
}
