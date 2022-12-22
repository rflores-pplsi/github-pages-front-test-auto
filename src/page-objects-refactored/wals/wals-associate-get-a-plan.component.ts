import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsLocatorPage } from './wals-locators.page';
dotenv.config();

export class WalsAssociateGetAPlanPage extends WalsLocatorPage {
  // ========================== Process Methods ============================

  /**
   * @param {string} classParameter
   * @param {number} getAPlanNum
   * @param {string} buttonType
   * @param {Array<string>} selectionArray
   * @memberof WalsAssociateCTAPage
   */
  addAPlan = async (classParameter: string, getAPlanNum: number, buttonType: string, selectionArray?: Array<string>): Promise<void> => {
    await (await this.associateWebsiteLocBtnGetAPlan(classParameter, getAPlanNum)).click();
    expect(await (await this.associateWebsiteLocBtnGetAPlan(classParameter, getAPlanNum)).innerText()).toEqual('✔ ADDED');
    if (buttonType == 'All Memberships' || buttonType == 'Business Builder') {
      await (await this.associateWebsiteRdBtn(5)).click();
      await this.associateWebsiteLocBtnNext.click();
      await (await this.associateWebsiteRdBtn(7)).click();
      await this.associateWebsiteLocBtnNextWithForm.click();
      await (await this.associateWebsiteRdBtn(9)).click();
      await this.associateWebsiteLocBtnContinueWithForm.click();
    } else if (buttonType == 'LegalShield') {
      if (selectionArray) {
        for (const selection of selectionArray) {
          await this.page.setChecked(`.subscriber-LEGAL-LPUS21 #${selection}`, true, { force: true });
        }
      }
      await this.associateWebsiteLocBtnContinueCart.click();
    }
  };

  /**
   * @param {string} productName
   * @param {string} productText
   * @param {string} productPrice
   * @param {number} index
   * @memberof WalsAssociateCTAPage
   */
  associateWebsiteCartItem = async (productName: string, productText: string, productPrice: string, index: number): Promise<void> => {
    expect(await (await this.associateWebsiteLocCartItemLayoverName(productName, index)).textContent()).toContain(productText);
    expect(await (await this.associateWebsiteLocCartItemLayoverPrice(productName)).textContent()).toEqual(productPrice);
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
