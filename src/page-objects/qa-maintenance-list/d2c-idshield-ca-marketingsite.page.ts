/* eslint-disable require-jsdoc */
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LocalStorageSelectedItem } from '../../types/types';
import { getLocalStorageAvailableProducts } from '../../utils/browser-storage.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==================================
const urlD2CIDShieldCAPage = UrlsUtils.marketingSitesUrls.idShieldCAUrl;
const BTN_VIEW_PLAN = 'text=View plan';

export class IDShieldCAPage extends BasePage {
  // ========================== Process Methods ============================
  pickAPlan = async (plan: string) => {
    await this.page.locator(BTN_VIEW_PLAN).click();
    if (plan == 'INDIVIDUAL') {
      const localStorageProducts: LocalStorageSelectedItem[] | null = await getLocalStorageAvailableProducts(this.page);
      const localStorageProductID = localStorageProducts?.find(
        (localStorageProduct) => localStorageProduct.productName == 'IDShield Individual'
      )?.productId;
      await this.page.locator('//a[@data-product-id=' + localStorageProductID + ']').click();
    } else if (plan == 'FAMILY') {
      const localStorageProducts: LocalStorageSelectedItem[] | null = await getLocalStorageAvailableProducts(this.page);
      const localStorageProductID = localStorageProducts?.find(
        (localStorageProduct) => localStorageProduct.productName == 'IDShield Family'
      )?.productId;
      await this.page.locator('//a[@data-product-id=' + localStorageProductID + ']').click();
    }
  };
  // ========================== Navigate Methods ===========================
  navigateToIDShieldUSMarketingSitePlage = async (lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(urlD2CIDShieldCAPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/MarketingSite/' + lineofbusiness + 'MarketingSite.png', fullPage: true });
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
