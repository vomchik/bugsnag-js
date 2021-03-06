import Client from '@bugsnag/core/client'
import plugin from '../src/express'

describe('plugin: express', () => {
  it('exports two middleware functions', () => {
    const c = new Client({ apiKey: 'api_key', plugins: [plugin] })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const middleware = c.getPlugin('express')!
    expect(typeof middleware.requestHandler).toBe('function')
    expect(middleware.requestHandler.length).toBe(3)
    expect(typeof middleware.errorHandler).toBe('function')
    expect(middleware.errorHandler.length).toBe(4)
  })
})
