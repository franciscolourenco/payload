import type { Page } from '@playwright/test'

import { expect, test } from '@playwright/test'
import * as path from 'path'
import { fileURLToPath } from 'url'

import { ensureCompilationIsDone, initPageConsoleErrorCatch } from '../helpers.js'
import { AdminUrlUtil } from '../helpers/adminUrlUtil.js'
import { initPayloadE2ENoConfig } from '../helpers/initPayloadE2ENoConfig.js'
import { TEST_TIMEOUT_LONG } from '../playwright.config.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

test.describe('Community', () => {
  let page: Page
  let url: AdminUrlUtil

  test.beforeAll(async ({ browser }, testInfo) => {
    testInfo.setTimeout(TEST_TIMEOUT_LONG)

    const { payload, serverURL } = await initPayloadE2ENoConfig({ dirname })
    url = new AdminUrlUtil(serverURL, 'posts')

    const context = await browser.newContext()
    page = await context.newPage()
    initPageConsoleErrorCatch(page)
    await ensureCompilationIsDone({ page, serverURL })
  })

  test('example test', async () => {
    await page.goto(url.list)

    const textCell = page.locator('.row-1 .cell-title')
    await expect(textCell).toHaveText('example post')

    // Navigate to "example post" edit view
    await page.click('.row-1 .cell-title')

    // Wait for post to be visible
    const titleInput = page.locator('#field-title')
    await page.waitForSelector('#field-title')
    await expect(page.locator('#field-title')).toHaveValue('example post')

    // Confirm that the condition function received the document id
    await expect(page.locator('#field-conditionFunctionReceivedDocumentId')).toBeVisible()

    // Make a change to the document
    await page.locator('#field-title').fill('new title')

    // Wait for condition functions to execute
    await page.waitForSelector('#field-titleChanged')

    // Confirm that the condition function received the document id (currently failing)
    await expect(page.locator('#field-conditionFunctionReceivedDocumentId')).toBeVisible()
  })
})
