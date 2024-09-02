/* eslint-disable jest/no-standalone-expect */
import { nextTestSetup } from 'e2e-utils'
import {
  check,
} from 'next-test-utils'

const GENERIC_RSC_ERROR =
  'Error: An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.'

describe('app-dir action handling', () => {
  const { next, isNextDev, isNextStart, isNextDeploy, isTurbopack } =
    nextTestSetup({
      files: __dirname,
      dependencies: {
        nanoid: '4.0.1',
        'server-only': 'latest',
      },
    })

  it('should handle basic actions correctly', async () => {
    const browser = await next.browser('/')

    const cnt = await browser.elementById('count').text()
    expect(cnt).toBe('0')

    await browser.elementByCss('#inc').click()
    await check(() => browser.elementById('count').text(), '1')

    await browser.elementByCss('#inc').click()
    await check(() => browser.elementById('count').text(), '2')

    await browser.elementByCss('#double').click()
    await check(() => browser.elementById('count').text(), '4')

    await browser.elementByCss('#dec').click()
    await check(() => browser.elementById('count').text(), '3')
  })

})
