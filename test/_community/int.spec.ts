import qs from 'qs'

import payload from '../../packages/payload/src'
import { devUser } from '../credentials'
import { initPayloadTest } from '../helpers/configHelpers'
import { mediaSlug } from './collections/Media'
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

  it.skip('local API example', async () => {
    const newPost = await payload.create({
      collection: postsSlug,
      data: {
        text: 'LOCAL API EXAMPLE',
      },
    })

    expect(newPost.text).toEqual('LOCAL API EXAMPLE')
  })

  it.skip('rest API example', async () => {
    const newPost = await fetch(`${apiUrl}/${postsSlug}`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `JWT ${jwt}`,
      },
      body: JSON.stringify({
        text: 'REST API EXAMPLE',
      }),
    }).then((res) => res.json())

    expect(newPost.doc.text).toEqual('REST API EXAMPLE')
  })

  describe('local API', () => {
    it('should find 3 media docs', async () => {
      const { totalDocs } = await payload.find({
        collection: mediaSlug,
      })

      expect(totalDocs).toEqual(3)
    })

    it('should find 1 media docs with equals:null', async () => {
      const { totalDocs } = await payload.find({
        collection: mediaSlug,
        where: {
          test: {
            equals: null,
          },
        },
      })

      expect(totalDocs).toEqual(1)
    })

    it('should find 1 media docs with exists:false', async () => {
      const { totalDocs } = await payload.find({
        collection: mediaSlug,
        where: {
          test: {
            exists: false,
          },
        },
      })

      expect(totalDocs).toEqual(1)
    })
  })

  describe('REST API', () => {
    it('should find 3 media docs', async () => {
      const { totalDocs } = await findREST({
        collection: mediaSlug,
      })

      expect(totalDocs).toEqual(3)
    })

    it('should find 1 media docs with equals:null', async () => {
      const { totalDocs } = await findREST({
        collection: mediaSlug,
        where: {
          test: {
            equals: null,
          },
        },
      })

      expect(totalDocs).toEqual(1)
    })

    it('should find 1 media docs with exists:false', async () => {
      const { totalDocs } = await findREST({
        collection: mediaSlug,
        where: {
          test: {
            exists: false,
          },
        },
      })

      expect(totalDocs).toEqual(1)
    })
  })
})

function findREST({ collection, where = {} }) {
  const query = qs.stringify({ where })
  return fetch(`${apiUrl}/${collection}?${query}`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `JWT ${jwt}`,
    },
  }).then((res) => res.json())
}
