import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import type { CellComponentProps } from '../../../../packages/payload/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
      admin: {
        components: {
          Cell: (props: CellComponentProps) => {
            // @ts-expect-error Property 'cellData' does not exist on type 'CellComponentProps'
            return props.cellData
          },
        },
      },
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
}
