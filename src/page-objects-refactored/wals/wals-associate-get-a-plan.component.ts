import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsLocatorPage } from './wals-locators.page';
dotenv.config();

export class WalsAssociateGetAPlanPage extends WalsLocatorPage {
  // ========================== Process Methods ============================

  /**
   * @param {string} classParameter
   * @param {number} getAPlanNum
   * @memberof WalsAssociateCTAPage
   */
  addAPlan = async (classParameter: string, getAPlanNum: number): Promise<void> => {
    await (await this.associateWebsiteLocBtnGetAPlan(classParameter, getAPlanNum)).click();
    expect(await (await this.associateWebsiteLocBtnGetAPlan(classParameter, getAPlanNum)).innerText()).toEqual('✔ ADDED');
    await (await this.associateWebsiteRdBtn(5)).click();
    await this.associateWebsiteLocBtnNext.click();
    await (await this.associateWebsiteRdBtn(7)).click();
    await this.associateWebsiteLocBtnNextWithForm.click();
    await (await this.associateWebsiteRdBtn(9)).click();
    await this.associateWebsiteLocBtnContinueWithForm.click();
  };

  /**
   * @param {string} productName
   * @param {string} className
   * @param {string} productValue
   * @param {number} index
   * @memberof WalsAssociateCTAPage
   */
  associateWebsiteCartItem = async (productName: string, className: string, productValue: string, index: number): Promise<void> => {
    expect(await (await this.associateWebsiteLocCartItem(productName, className, index)).innerText()).toEqual(productValue);
  };

  /**
   * @param {Array<number>} prices
   * @memberof WalsAssociateCTAPage
   */
  associateWebsiteCartTotalAmt = async (prices: Array<number>): Promise<void> => {
    const total = prices.reduce((total, num) => {
      return total + num;
    }, 0);
    expect(await this.associateWebsiteLocLblTotalPrice.innerText()).toBe('$ ' + total.toFixed(2));
  };
}
