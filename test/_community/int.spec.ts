import payload from '../../packages/payload/src'
import { devUser } from '../credentials'
import { initPayloadTest } from '../helpers/configHelpers'
import { postsSlug } from './collections/Posts'

require('isomorphic-fetch')

let apiUrl
let jwt
let user

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
    user = data.user
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

  it('the hook should prevent further changes to the username', async () => {
    const updatedUser = await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        username: 'new username',
      },
    })

    // This works because properties deleted in hooks are ignored
    expect(updatedUser.username).toBe('devuser')
  })

  it('should not delete API key when updating other fields', async () => {
    const foundUser = await payload.findByID({
      collection: 'users',
      id: user.id,
    })

    expect(foundUser.apiKey).not.toBeNull()

    const updatedUser = await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        username: 'new username',
      },
    })

    // The API key is set to null because the hook sets it to undefined
    expect(updatedUser.apiKey).not.toBeNull()
  })
})
