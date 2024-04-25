import { v4 as uuidv4 } from 'uuid'
import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { MediaCollection } from './collections/Media'
import { PostsCollection, postsSlug } from './collections/Posts'
import { MenuGlobal } from './globals/Menu'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [
    PostsCollection,
    MediaCollection,
    {
      slug: 'users',
      fields: [
        {
          name: 'username',
          type: 'text',
        },
      ],
      auth: {
        useAPIKey: true,
      },
      hooks: {
        beforeValidate: [
          ({ data, context }) => {
            if (context.skipHook) return data

            // should prevent further changes to API Key, but it actually sets the apiKey to null
            data!.enableAPIKey = undefined
            data!.apiKey = undefined

            // prevents further changes to the username
            data!.username = undefined

            return data
          },
        ],
      },
    },
    // ...add more collections here
  ],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
        username: 'devuser',
        apiKey: uuidv4(),
        enableAPIKey: true,
      },
      context: {
        skipHook: true,
      },
    })

    await payload.create({
      collection: postsSlug,
      data: {
        text: 'example post',
      },
    })
  },
})
