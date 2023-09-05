import { Page, Locator } from '@playwright/test';

export class CommonHeaderComponent {
  protected page: Page;
  readonly locAccountsHeader: Locator;
  readonly locLoginHeader: Locator;
  readonly locSmallLogo: Locator;
  readonly locLargeLogo: Locator;
  readonly locPageLabel: Locator;
  readonly locHelpButton: Locator;
  readonly locHelpMenuContainer: Locator;
  readonly locSalesAndCustomerServicePhoneLink: Locator;
  readonly locMemberServicesEmailLink: Locator;
  readonly locAssociateSupportPhoneLink: Locator;
  readonly locGlobeButton: Locator;
  readonly locMarketLanguageMenuContainer: Locator;
  readonly locUnitedStatesEnglishOption: Locator;
  readonly locEstadosUnidosOption: Locator;
  readonly locCanadaEnglishOption: Locator;
  readonly locCanadaFrancaisOption: Locator;
  readonly locAccountMenuDropDown: Locator;
  readonly locAccountMenuName: Locator;
  readonly locAccountMenuEmail: Locator;
  readonly locAccountMenuMyProductsLink: Locator;
  readonly locAccountMenuMyAccountLink: Locator;
  readonly locAccountMenuSignOutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locAccountsHeader = this.page.locator('//header/div[contains(@class,"lsdsFixedHeader")]');
    this.locLoginHeader = this.page.locator('//header');
    this.locSmallLogo = this.page.locator('#lsdsSmallLogoId');
    this.locLargeLogo = this.page.locator('#lsdsLargeLogoId');
    this.locPageLabel = this.page.locator('#lsux-page-title');
    this.locHelpButton = this.page.locator('#lsdsHelpButtonId');
    this.locHelpMenuContainer = this.page.locator('#lsdsHelpContentDefaultId');
    this.locSalesAndCustomerServicePhoneLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Sales and/or Customer Service")]/following-sibling::div//a[contains(.,"1-800-654-7757")]'
    );
    this.locMemberServicesEmailLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Contact us")]/following-sibling::div//a[contains(.,"MemberServices@pplsi.com")]'
    );
    this.locAssociateSupportPhoneLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Associate Support")]/following-sibling::div//a[contains(.,"580-436-7424")]'
    );
    this.locGlobeButton = this.page.locator('#lsdsLanguageButtonId');
    this.locMarketLanguageMenuContainer = this.page.locator('#lsdsLanguageDropdownId');
    this.locUnitedStatesEnglishOption = this.page.locator('//span[@id="lsdsLanguageDropdownId"]//a[contains(.,"United States - English")]');
    this.locEstadosUnidosOption = this.page.locator('//span[@id="lsdsLanguageDropdownId"]//a[contains(.,"Estados Unidos - Español")]');
    this.locCanadaEnglishOption = this.page.locator('//span[@id="lsdsLanguageDropdownId"]//a[contains(.,"Canada - English")]');
    this.locCanadaFrancaisOption = this.page.locator('//span[@id="lsdsLanguageDropdownId"]//a[contains(.,"Canada - Français")]');
    this.locAccountMenuDropDown = this.page.locator('#lsdsUserButtonId');
    this.locAccountMenuName = this.page.locator('#lsdsSubNameId');
    this.locAccountMenuEmail = this.page.locator('#lsdsUALId');
    this.locAccountMenuMyProductsLink = this.page.locator('//a[contains(.,"My Products")]');
    this.locAccountMenuMyAccountLink = this.page.locator('//a[contains(.,"My Account")]');
    this.locAccountMenuSignOutLink = this.page.locator('//a[contains(.,"Sign out")]');
  }

  /**
   *
   *
   * @param {string} option
   * @memberof CommonHeaderComponent
   */
  selectMarketLanguage = async (option: string): Promise<void> => {
    await this.locGlobeButton.click();
    const optionLocator = this.page.locator(`//span[@id="lsdsLanguageDropdownId"]//a[contains(.,"${option}")]`);
    await optionLocator.click();
  };

  /**
   *
   *
   * @memberof CommonHeaderComponent
   */
  navigateToAccountsHomePageThroughMyProductsLink = async (): Promise<void> => {
    await this.locAccountMenuDropDown.click();
    await this.locAccountMenuMyProductsLink.click();
    await this.page.waitForURL(new RegExp('/home'));
  };

  /**
   *
   *
   * @memberof CommonHeaderComponent
   */
  navigateToAccountsProfilePageThroughMyAccountsLink = async (): Promise<void> => {
    await this.locAccountMenuDropDown.click();
    await this.locAccountMenuMyAccountLink.click();
    await this.page.waitForURL(new RegExp('/profile'));
  };

  /**
   *
   *
   * @memberof CommonHeaderComponent
   */
  signOut = async (): Promise<void> => {
    await this.locAccountMenuDropDown.click();
    await this.locAccountMenuSignOutLink.click();
    await this.page.waitForURL(new RegExp('/logged-out'));
  };
}
