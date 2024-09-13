import { Locator, Page } from '@playwright/test';
declare const IS_NITROPACK: any;
/**
 *
 *
 * @export
 * @param {Page} page
 * @return {*}  {Promise<boolean>}
 */
export async function isNitroPackEnable(page: Page): Promise<boolean> {
  try {
    await page.waitForFunction(
      () => {
        return typeof IS_NITROPACK !== 'undefined';
      },
      null,
      { timeout: 2000 }
    );
    return await page.evaluate(() => {
      try {
        return IS_NITROPACK === true;
      } catch (error) {
        return false;
      }
    });
  } catch (error) {
    return false;
  }
}
/**
 *
 *
 * @export
 * @param {Page} page
 * @return {*}  {Promise<void>}
 */
export async function nitroPackLazyLoadEvent(page: Page): Promise<void> {
  if (await isNitroPackEnable(page)) {
    const headerDiv = page.locator('div.et_pb_section_0_tb_header');
    await headerDiv.hover();
  }
}
/**
 *
 *
 * @export
 * @param {Locator} locator
 * @param {Page} page
 * @param {number} [retries=30]
 * @param {number} [interval=100]
 * @return {*}  {Promise<void>}
 */
export async function waitNitroPackToLoadElementAsVisible(locator: Locator, page: Page, retries = 30, interval = 100): Promise<void> {
  if (await isNitroPackEnable(page)) {
    let count = 1;
    while (!(await locator.isVisible()) && count++ <= retries) {
      await nitroPackLazyLoadEvent(page);
      try {
        await locator.waitFor({ state: 'visible', timeout: interval });
      } catch (error) {
        // console.log(' locator not yet visible after mouse over event - attempt: ' + count);
      }
    }
    if (count > retries) {
      throw new Error(
        `Timeout trying to make locator visible through triggering mouse over event after ${count} attempts every ${interval} milliseconds`
      );
    }
  }
}
