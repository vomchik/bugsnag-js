import { Client, Config, BugsnagStatic } from '@bugsnag/core'

interface BrowserConfig extends Config {
  maxEvents?: number
  collectUserIp?: boolean
  generateAnonymousId?: boolean
}

interface BrowserBugsnagStatic extends BugsnagStatic {
  start(apiKeyOrOpts: string | BrowserConfig): Client
  createClient(apiKeyOrOpts: string | BrowserConfig): Client
}

declare const Bugsnag: BrowserBugsnagStatic

export default Bugsnag
export * from '@bugsnag/core'
export { BrowserConfig }
