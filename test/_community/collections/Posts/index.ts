import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import type { Where } from '../../../../packages/payload/types'

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
      type: 'relationship',
      relationTo: mediaSlug,
    },
    {
      name: 'associatedMediaWhereFieldEqualsNull',
      type: 'relationship',
      admin: {
        description:
          'This select should only show media items where the test field is null, but it shows nothing',
      },
      relationTo: mediaSlug,
      filterOptions: (): Where => {
        return {
          test: {
            equals: null,
          },
        }
      },
    },
    {
      name: 'associatedMediaWhereFieldExistsFalse',
      type: 'relationship',
      relationTo: mediaSlug,
      admin: {
        description:
          'This select should only show media items where the test field is undefined (or null), but it shows nothing',
      },
      filterOptions: (): Where => {
        return {
          test: {
            exists: false,
          },
        }
      },
    },
  ],
  slug: postsSlug,
}
