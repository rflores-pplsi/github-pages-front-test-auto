import { Page, Response } from '@playwright/test';
import EnvironmentUtil from './env.utils';
export let interceptedResponse: Response;

/**
 *
 *
 * @export
 * @param {Page} page
 * @return {*}  {Promise<Object>}
 */
export async function addPurchaseRequestListener(page: Page): Promise<void> {
  const envString = EnvironmentUtil.getEnvUrlString();
  const url = `checkoutv3.${envString}legalshield.com/pu/v1/identities/`;
  page.on('response', async (response: Response) => {
    if (response.url().includes(url) && response.url().includes('/purchase') && response.request().method() === 'POST') {
      interceptedResponse = response;
    }
  });
}
