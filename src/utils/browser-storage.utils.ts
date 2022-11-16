import { Page } from '@playwright/test';
// import { getProductIdByName } from './products.utils';
import { LocalStorageSelectedItem } from '../types/types';
import { retryAsync } from 'ts-retry';
/**
 *
 *
 * @export
 * @param {Page} page
 * @return {*}  {(Promise<LocalStorageSelectedItem[] | null>)}
 */
export async function getLocalStorageAvailableProducts(page: Page): Promise<LocalStorageSelectedItem[] | null> {
  const availableProducts = await retryAsync(
    async () => {
      return await page.evaluate(() => {
        return localStorage.getItem('available_products');
      });
    },
    {
      delay: 500,
      maxTry: 5,
      until: (lastResult) => lastResult !== null,
    }
  );

  if (availableProducts) {
    return JSON.parse(availableProducts);
  } else {
    return null;
  }
}
/**
 *
 *
 * @export
 * @param {Page} page
 * @param {string} productName
 * @param {string} regionID
 * @param {string} [associate='']
 * @return {*}  {(Promise<LocalStorageSelectedItem[] | undefined>)}
 */
// export async function getLocalStorageSelectedProductSupplements(
//   page: Page,
//   productName: string,
//   regionID: string,
//   associate = ''
// ): Promise<LocalStorageSelectedItem[] | undefined> {
//   const productID = await getProductIdByName(regionID, productName, associate);
//   const selectedProducts = await getLocalStorageSelectedProducts(page);
//   const result = selectedProducts?.filter((object) => object.parent === productID);
//   return result;
// }
