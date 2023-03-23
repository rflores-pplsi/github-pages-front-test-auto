import { Page, Locator } from '@playwright/test';

export class CommonHeaderComponent {
  protected page: Page;
  readonly locHeaderContainer: Locator;
  readonly locSmallLogo: Locator;
  readonly locLargeLogo: Locator;
  readonly locPageLabel: Locator;
  readonly locHelpButton: Locator;
  readonly locGlobeButton: Locator;
  readonly locHelpMenuContainer: Locator;
  readonly locSalesAndCustomerServicePhoneLink: Locator;
  readonly locMemberServicesEmailLink: Locator;
  readonly locAssociateSupportPhoneLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locHeaderContainer = this.page.locator('//header');
    this.locSmallLogo = this.page.locator('#lsdsSmallLogoId');
    this.locLargeLogo = this.page.locator('#lsdsLargeLogoId');
    this.locPageLabel = this.page.locator('#lsux-page-title');
    this.locHelpButton = this.page.locator('#lsdsHelpButtonId');
    this.locGlobeButton = this.page.locator('#lsdsLanguageButtonId');
    this.locHelpMenuContainer = this.page.locator('#lsdsLanguageDropdownId');
    this.locSalesAndCustomerServicePhoneLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Sales and/or Customer Service")]/following-sibling::div//a[contains(.,"1-800-654-7757")]'
    );
    this.locMemberServicesEmailLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Contact us")]/following-sibling::div//a[contains(.,"MemberServices@pplsi.com")]'
    );
    this.locAssociateSupportPhoneLink = this.page.locator(
      '//div[@id="lsdsHelpContentDefaultId"]/div/div[contains(.,"Associate Support")]/following-sibling::div//a[contains(.,"580-436-7424")]'
    );
  }
}
