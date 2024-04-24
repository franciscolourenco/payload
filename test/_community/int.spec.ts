import qs from 'qs'
import payload from '../../packages/payload/src'
import type { Where } from '../../packages/payload/types'
import { devUser } from '../credentials'
import { initPayloadTest } from '../helpers/configHelpers'
import { postsSlug } from './collections/Posts'

require('isomorphic-fetch')

let apiUrl
let jwt

const headers = {
  'Content-Type': 'application/json',
}
const { email, password } = devUser
describe('_Community Tests', () => {
  // --__--__--__--__--__--__--__--__--__
  // Boilerplate test setup/teardown
  // --__--__--__--__--__--__--__--__--__
  beforeAll(async () => {
    const { serverURL } = await initPayloadTest({ __dirname, init: { local: false } })
    apiUrl = `${serverURL}/api`

    const response = await fetch(`${apiUrl}/users/login`, {
      body: JSON.stringify({
        email,
        password,
      }),
      headers,
      method: 'post',
    })

    const data = await response.json()
    jwt = data.token
  })

  afterAll(async () => {
    if (typeof payload.db.destroy === 'function') {
      await payload.db.destroy(payload)
    }
  })

  // --__--__--__--__--__--__--__--__--__
  // You can run tests against the local API or the REST API
  // use the tests below as a guide
  // --__--__--__--__--__--__--__--__--__

  describe('payload.find', () => {
    it('should find 1 doc', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {},
      })
      expect(posts.totalDocs).toBe(1)
    })

    it('should find 0 docs with id equals null', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            equals: null,
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })

    it('should find 0 docs with id equals undefined', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            equals: undefined,
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })

    it('should find 0 docs with id in []', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            in: [],
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })

    it('should find 0 docs with id in [null]', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            in: [null],
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })

    it('should find 0 docs with id in [undefined]', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            in: [undefined],
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })

    it('payload.find with id in []', async () => {
      const posts = await payload.find({
        collection: postsSlug,
        where: {
          id: {
            in: [null],
          },
        },
      })
      expect(posts.totalDocs).toBe(0)
    })
  })

  describe('REST API', () => {
    it('should find 1 doc', async () => {
      const where: Where = {}

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.totalDocs).toEqual(1)
    })

    it('should find 0 docs with id equals null', async () => {
      const where: Where = {
        id: {
          equals: null,
        },
      }

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.totalDocs).toEqual(0)
    })

    it('should find 0 docs with {id: {equals: undefined}}', async () => {
      const where: Where = {
        id: {
          equals: undefined,
        },
      }

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.totalDocs).toEqual(0)
    })

    it('should find 0 docs with id in []', async () => {
      const where: Where = {
        id: {
          in: [],
        },
      }

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.totalDocs).toEqual(0)
    })

    it('should find 0 docs with id in [undefined]', async () => {
      const where: Where = {
        id: {
          in: [undefined],
        },
      }

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.totalDocs).toEqual(0)
    })

    it('should find 0 docs with id in [null]', async () => {
      const where: Where = {
        id: {
          in: [null],
        },
      }

      const posts = await fetch(`${apiUrl}/${postsSlug}?${qs.stringify({ where })}`, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `JWT ${jwt}`,
        },
      }).then((res) => res.json())

      expect(posts.errors).not.toBeDefined()
    })
  })
})
