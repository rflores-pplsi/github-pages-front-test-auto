import { Page } from '@playwright/test';
// import { getProductIdByName } from './products.utils';
import { LocalStorageSelectedItem } from '../types/types';
/**
 *
 *
 * @export
 * @param {Page} page
 * @return {*}  {(Promise<LocalStorageSelectedItem[] | undefined>)}
 */
export async function getLocalStorageSelectedProducts(page: Page): Promise<LocalStorageSelectedItem[] | undefined> {
  const selectedProducts = await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    return localStorage.getItem('available_products');
  });
  if (selectedProducts) {
    return JSON.parse(selectedProducts);
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
