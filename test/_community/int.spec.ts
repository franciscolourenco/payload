import type { Payload } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import type { NextRESTClient } from '../helpers/NextRESTClient.js'

import { devUser } from '../credentials.js'
import { initPayloadInt } from '../helpers/initPayloadInt.js'
import { postsSlug } from './collections/Posts/index.js'

let payload: Payload
let token: string
let restClient: NextRESTClient

const { email, password } = devUser
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

describe('_Community Tests', () => {
  // --__--__--__--__--__--__--__--__--__
  // Boilerplate test setup/teardown
  // --__--__--__--__--__--__--__--__--__
  beforeAll(async () => {
    const initialized = await initPayloadInt(dirname)
    ;({ payload, restClient } = initialized)

    const data = await restClient
      .POST('/users/login', {
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => res.json())

    token = data.token
  })

  afterAll(async () => {
    if (typeof payload.db.destroy === 'function') {
      await payload.db.destroy()
    }
  })

  // --__--__--__--__--__--__--__--__--__
  // You can run tests against the local API or the REST API
  // use the tests below as a guide
  // --__--__--__--__--__--__--__--__--__
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  describe('updatedAt in published documents', () => {
    // passing test
    it('should change when a document is updated', async () => {
      const post = await payload.create({
        collection: postsSlug,
        data: {
          title: 'original',
        },
      })

      await delay(1000)

      const updatedPost = await payload.update({
        collection: postsSlug,
        id: post.id,
        data: {
          title: 'changed',
        },
      })

      expect(updatedPost.title).toEqual('changed') // passes
      expect(+new Date(updatedPost.updatedAt)).toBeGreaterThan(+new Date(post.updatedAt)) // passes
    })
  })

  describe('updatedAt in drafts', () => {
    // failing test
    it('should change when a new draft is created', async () => {
      const post = await payload.create({
        collection: postsSlug,
        data: {
          title: 'original',
        },
      })

      await delay(1000)

      const updatedDraft = await payload.update({
        collection: postsSlug,
        id: post.id,
        data: {
          title: 'changed',
        },
        draft: true,
      })

      expect(updatedDraft.title).toEqual('changed')
      expect(+new Date(updatedDraft.updatedAt)).toBeGreaterThan(+new Date(post.updatedAt))
    })

    // failing test
    it('should change when a new draft is created (foundDraft.updatedAt)', async () => {
      const post = await payload.create({
        collection: postsSlug,
        data: {
          title: 'original',
        },
      })

      await delay(1000)

      await payload.update({
        collection: postsSlug,
        id: post.id,
        data: {
          title: 'changed',
        },
        draft: true,
      })

      const foundDraft = await payload.findByID({
        collection: postsSlug,
        id: post.id,
        draft: true,
      })

      expect(foundDraft.title).toEqual('changed')
      expect(+new Date(foundDraft.updatedAt)).toBeGreaterThan(+new Date(post.updatedAt))
    })

    // failing test
    it('should change when a new draft is created (version.version.updatedAt)', async () => {
      const post = await payload.create({
        collection: postsSlug,
        data: {
          title: 'original',
        },
      })

      await delay(1000)

      await payload.update({
        collection: postsSlug,
        id: post.id,
        data: {
          title: 'changed',
        },
        draft: true,
      })

      const foundVersions = await payload.findVersions({
        collection: postsSlug,
        where: {
          parent: {
            equals: post.id,
          },
        },
        limit: 1,
      })
      const foundVersion = foundVersions.docs[0]

      expect(foundVersion.version.title).toEqual('changed')
      expect(+new Date(foundVersion.version.updatedAt)).toBeGreaterThan(+new Date(post.updatedAt))
    })
  })
})
