import { expect, Page } from '@playwright/test';
import { ProductDetails } from '../../../types/types';


export class OrderSummaryComponent {
  readonly page: Page;
  private readonly locOrderSummaryContentContainer;
  private readonly locMonthlyTotal;
  private readonly locAnnualTotal;
  private readonly locTotalDueToday;
  private readonly locOrderSummaryRow;
  

  constructor(page: Page) {
    this.page = page;
    this.locOrderSummaryContentContainer = this.page.locator('//div[contains(@class,"OrderSummaryContent")]');
    this.locMonthlyTotal = this.page.locator('//div[@class="OrderSummaryTotal" and contains(.,"Monthly")]//p[contains(@class,"OrderSummaryItem__price")]');
    this.locAnnualTotal = this.page.locator('//div[@class="OrderSummaryTotal" and contains(.,"Annual")]//p[contains(@class,"OrderSummaryItem__price")]');
    this.locTotalDueToday = this.page.locator('//div[@class="OrderSummaryTotal" and contains(.,"due today")]//p[contains(@class,"OrderSummaryItem__price")]');
    this.locOrderSummaryRow = this.page.locator('//div[@class="OrderSummaryItem"]');
  }

  // #region Navigation
  // #endregion Navigation

  // #region Action
  getDisplayedProductsInfoArray = async (): Promise<{ name: string; cost: string }[]> => {
    // Get arrays of text content directly from locators
    await this.locTotalDueToday.waitFor();
    const namesArray = await this.page.locator('//div[@class="OrderSummaryItem__names"]/p[1]').allInnerTexts();
    const costsArray = await this.page.locator('//div[contains(@class,"OrderSummaryContent__products")]//p[contains(@class,"OrderSummaryItem__price")]').allInnerTexts();
    // Ensure both arrays have the same length
    if (namesArray.length !== costsArray.length) {
        throw new Error('Plan names and costs arrays are not of equal length!');
    }
    return namesArray.map((name, index) => ({
    name: name.trim(),
    cost: costsArray[index]
      .trim()
      .replace(/\/(mo|yr)/, '') // Removes "/mo" or "/yr"
      .trim(),
    }));
  };  

  

  // #endregion Action

  // #region Assertion
  assertExpectedProductsAndCostsDisplayed = async (productDetails: ProductDetails[],): Promise<void> => {
    const displayedProductsArray = await this.getDisplayedProductsInfoArray();
    for (const productDetail of productDetails) {
      const productMatch = displayedProductsArray.some((displayedProduct) => {  
        return displayedProduct.name === productDetail.name && displayedProduct.cost === productDetail.cost;
      });
      expect.soft(productMatch,`Product validation failed: Plan with Name: "${productDetail.name}" and Cost: "${productDetail.cost}" was NOT found in the orders summary.`).toBe(true);
    };
  }; 
  
    assertTermTotal = async (term: string, total: string): Promise<void> => {
      if (term === 'Monthly') {
        const monthlyTotal = (await this.locMonthlyTotal.innerText()).replace(/\/mo/, '');
        expect.soft(monthlyTotal).toBe(total);
      } 
      if (term === 'Annual') {
        const annualTotal = (await this.locAnnualTotal.innerText()).replace(/\/yr/, '');
        expect.soft(annualTotal).toBe(total);
      }
    };

    assertTotalDueToday = async (total: string): Promise<void> => {
      const totalDueToday = await this.locTotalDueToday.innerText();
      expect.soft(totalDueToday).toBe(total);
    };
  // #endregion Assertion
};
